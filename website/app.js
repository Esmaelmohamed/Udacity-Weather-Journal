/* Global Variables */
const dateElement = document.getElementById("date");
const contentElement = document.getElementById("content");

// Generate the current date dynamically
const currentDate = new Date();
const formattedDate = `${currentDate.getMonth() + 1}.${currentDate.getDate()}.${currentDate.getFullYear()}`;

// API details for OpenWeatherMap
const apiUrl = "http://api.openweathermap.org/data/2.5/forecast?zip=";
const apiToken = "&appid=4e75596c4506f8e5759afd51a696e708&units=metric";

// Event listener for the "Generate" button
document.getElementById("generate").addEventListener("click", async () => {
  const zipCode = document.getElementById("zip").value;
  const userFeelings = document.getElementById("feelings").value;

  try {
    const weatherData = await fetchWeatherData(apiUrl, zipCode, apiToken);

    if (weatherData.cod !== 200) {
      alert("Invalid zip code. Please try again.");
      return;
    }

    await sendWeatherData("/addWeatherData", {
      date: formattedDate,
      temp: weatherData.list[0].main.temp,
      content: userFeelings,
    });

    updateUI();
  } catch (error) {
    console.error("Error in handling the generate button click:", error);
  }
});

/* Fetch weather data from OpenWeatherMap */
async function fetchWeatherData(url, zip, key) {
  try {
    const response = await fetch(url + zip + key);
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch weather data:", error);
  }
}

/* Send weather data to the server */
const sendWeatherData = async (endpoint = "", data = {}) => {
  try {
    await fetch(endpoint, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error("Error in sending weather data:", error);
  }
};

/* Update the UI with project data */
async function updateUI() {
  try {
    const response = await fetch("/all");
    const projectData = await response.json();

    dateElement.innerHTML = `Date: ${projectData.date}`;
    contentElement.innerHTML = `Feelings: ${projectData.content}`;
    document.getElementById("temp").innerHTML = `Temperature: ${projectData.temp}`;
  } catch (error) {
    console.error("Failed to update the UI:", error);
  }
}
