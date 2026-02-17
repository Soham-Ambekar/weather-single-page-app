# 🌤️ Weather App

A simple and minimal Weather Application built using **HTML, CSS, and JavaScript** that fetches real-time weather data using the OpenWeatherMap API.

---

## 🚀 Features

- 🌍 Detects user location using Geolocation API
- 🔎 Search weather by city name
- 🌡️ Displays:
  - Current Temperature
  - Weather Description
  - Maximum Temperature
  - Minimum Temperature
  - Current Day
- ⏳ Loading spinner while fetching data
- ❗ Error handling for invalid city names

---

## 🛠️ Tech Stack

- HTML5  
- CSS3  
- JavaScript (Vanilla JS)  
- OpenWeatherMap API  
- Geolocation API  

---

## 📂 Project Structure

```
weather-app/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ⚙️ How It Works

1. When the app loads, it automatically detects the user's current location.
2. It fetches weather data using latitude and longitude from OpenWeatherMap.
3. Users can also manually search for a city.
4. The UI updates dynamically using DOM manipulation.

---

## 🔑 API Configuration

This project uses the OpenWeatherMap API.

To use your own API key:

1. Create an account at: https://openweathermap.org/
2. Generate your API key.
3. Replace the `appid` value inside `script.js`:

```javascript
appid=YOUR_API_KEY
```

---

## ▶️ How to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/your-username/weather-app.git
```

2. Open the project folder.
3. Open `index.html` in your browser.
4. Allow location access for automatic weather detection.

---

## 📈 Future Improvements

- Add 5-day weather forecast
- Add weather icons dynamically
- Add temperature unit toggle (°C / °F)
- Improve UI responsiveness
- Hide API key securely (for production deployment)

---

## 🎯 Learning Goals

This project demonstrates:

- API Integration
- Asynchronous JavaScript (async/await)
- DOM Manipulation
- Event Handling
- Geolocation usage

---

## 📄 License

This project is open-source and free to use.

---

### 👨‍💻 Author

Built with ❤️ by Soham Ambekar
