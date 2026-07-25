// ============================================
// Weather Dashboard - JavaScript
// ============================================

// API Configuration
const API_KEY = 'b6fd4267a71a476d79f3e4b76164ef66'; // OpenWeatherMap Free API
const OPENWEATHER_BASE = 'https://api.openweathermap.org';
const GEOLOCATION_API = 'https://nominatim.openstreetmap.org';

// DOM Elements
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const locationBtn = document.getElementById('locationBtn');
const mainContent = document.getElementById('mainContent');
const loadingSpinner = document.getElementById('loadingSpinner');
const errorContainer = document.getElementById('errorContainer');
const errorMessage = document.getElementById('errorMessage');
const themeToggle = document.getElementById('themeToggle');
const suggestionsDiv = document.getElementById('suggestions');

// State
let currentCity = null;
let favorites = JSON.parse(localStorage.getItem('weatherFavorites')) || [];
let currentTheme = localStorage.getItem('theme') || 'light';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initializeTheme();
  setupEventListeners();
  loadDefaultCity();
  updateFavoritesUI();
});

// ============================================
// Theme Management
// ============================================
function initializeTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
}

themeToggle.addEventListener('click', () => {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('theme', currentTheme);
  themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
});

// ============================================
// Event Listeners
// ============================================
function setupEventListeners() {
  searchBtn.addEventListener('click', handleSearch);
  cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSearch();
  });
  
  cityInput.addEventListener('input', handleCitySuggestions);
  locationBtn.addEventListener('click', handleGeolocation);
  
  document.getElementById('addFavoriteBtn').addEventListener('click', addCurrentToFavorites);
}

// ============================================
// Search & Geolocation
// ============================================
function handleSearch() {
  const city = cityInput.value.trim();
  if (city) {
    fetchWeatherByCity(city);
    suggestionsDiv.innerHTML = '';
  }
}

function handleGeolocation() {
  if (!navigator.geolocation) {
    showError('Geolocalización no disponible en tu navegador');
    return;
  }

  loadingSpinner.classList.remove('hidden');
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      fetchWeatherByCoordinates(latitude, longitude);
    },
    (error) => {
      loadingSpinner.classList.add('hidden');
      showError('Error al obtener tu ubicación: ' + error.message);
    }
  );
}

// ============================================
// City Suggestions
// ============================================
async function handleCitySuggestions(e) {
  const input = e.target.value.trim();
  if (input.length < 2) {
    suggestionsDiv.innerHTML = '';
    return;
  }

  try {
    const response = await fetch(
      `${GEOLOCATION_API}/search?q=${input}&format=json&limit=5`
    );
    const data = await response.json();

    suggestionsDiv.innerHTML = '';
    data.forEach(item => {
      const suggestion = document.createElement('div');
      suggestion.className = 'suggestion-item';
      suggestion.textContent = `${item.name}${item.state ? ', ' + item.state : ''}${item.country ? ', ' + item.country : ''}`;
      suggestion.addEventListener('click', () => {
        cityInput.value = item.name;
        fetchWeatherByCoordinates(item.lat, item.lon);
        suggestionsDiv.innerHTML = '';
      });
      suggestionsDiv.appendChild(suggestion);
    });
  } catch (error) {
    console.error('Error fetching suggestions:', error);
  }
}

// ============================================
// Fetch Weather Data
// ============================================
async function fetchWeatherByCity(city) {
  loadingSpinner.classList.remove('hidden');
  mainContent.classList.add('hidden');
  errorContainer.classList.add('hidden');

  try {
    const response = await fetch(
      `${OPENWEATHER_BASE}/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`
    );

    if (!response.ok) {
      throw new Error('Ciudad no encontrada');
    }

    const data = await response.json();
    currentCity = {
      name: data.name,
      country: data.sys.country,
      lat: data.coord.lat,
      lon: data.coord.lon
    };

    await fetchCompleteWeatherData(data.coord.lat, data.coord.lon);
  } catch (error) {
    loadingSpinner.classList.add('hidden');
    showError(error.message);
  }
}

async function fetchWeatherByCoordinates(lat, lon) {
  loadingSpinner.classList.remove('hidden');
  mainContent.classList.add('hidden');
  errorContainer.classList.add('hidden');

  try {
    const response = await fetch(
      `${GEOLOCATION_API}/reverse?format=json&lat=${lat}&lon=${lon}`
    );
    const geoData = await response.json();
    
    currentCity = {
      name: geoData.address.city || geoData.address.town || geoData.address.village,
      country: geoData.address.country_code?.toUpperCase(),
      lat: lat,
      lon: lon
    };

    await fetchCompleteWeatherData(lat, lon);
  } catch (error) {
    loadingSpinner.classList.add('hidden');
    showError('Error al obtener datos de ubicación');
  }
}

async function fetchCompleteWeatherData(lat, lon) {
  try {
    // Fetch current weather and forecast
    const [weatherResponse, forecastResponse, oneCallResponse] = await Promise.all([
      fetch(`${OPENWEATHER_BASE}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`),
      fetch(`${OPENWEATHER_BASE}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`),
      fetch(`${OPENWEATHER_BASE}/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`)
    ]);

    const weather = await weatherResponse.json();
    const forecast = await forecastResponse.json();
    const oneCall = await oneCallResponse.json();

    loadingSpinner.classList.add('hidden');
    mainContent.classList.remove('hidden');
    errorContainer.classList.add('hidden');

    displayCurrentWeather(weather);
    displayForecast(forecast);
    displayHourlyForecast(oneCall.hourly);
    displayAlerts(oneCall.alerts);
    updateFavoritesUI();

    cityInput.value = '';
  } catch (error) {
    loadingSpinner.classList.add('hidden');
    showError('Error al obtener datos del clima');
    console.error(error);
  }
}

// ============================================
// Display Functions
// ============================================
function displayCurrentWeather(data) {
  const { main, weather, wind, clouds, sys, visibility } = data;

  document.getElementById('cityName').textContent = `${currentCity.name}, ${currentCity.country}`;
  document.getElementById('coordinates').textContent = `${currentCity.lat.toFixed(2)}° N, ${currentCity.lon.toFixed(2)}° E`;
  document.getElementById('temp').textContent = Math.round(main.temp);
  document.getElementById('feelsLike').textContent = Math.round(main.feels_like);
  document.getElementById('description').textContent = weather[0].description;
  document.getElementById('humidity').textContent = main.humidity + '%';
  document.getElementById('windSpeed').textContent = Math.round(wind.speed * 3.6) + ' km/h';
  document.getElementById('pressure').textContent = main.pressure + ' hPa';
  document.getElementById('visibility').textContent = (visibility / 1000).toFixed(1) + ' km';
  document.getElementById('cloudiness').textContent = clouds.all + '%';

  // Weather icon
  const iconCode = weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
  document.getElementById('weatherIcon').src = iconUrl;

  // Sun times
  const sunrise = new Date(sys.sunrise * 1000);
  const sunset = new Date(sys.sunset * 1000);
  document.getElementById('sunrise').textContent = sunrise.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
  document.getElementById('sunset').textContent = sunset.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });

  // Last update
  const now = new Date();
  document.getElementById('lastUpdate').textContent = now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
}

function displayForecast(forecastData) {
  const container = document.getElementById('forecastContainer');
  container.innerHTML = '';

  // Group by day
  const dailyData = {};
  forecastData.list.forEach(item => {
    const date = new Date(item.dt * 1000).toLocaleDateString('es-ES');
    if (!dailyData[date]) {
      dailyData[date] = item;
    }
  });

  // Display 5 days
  Object.entries(dailyData).slice(0, 5).forEach(([date, data]) => {
    const card = document.createElement('div');
    card.className = 'forecast-card';
    
    const dateObj = new Date(data.dt * 1000);
    const dayName = dateObj.toLocaleDateString('es-ES', { weekday: 'short' });

    card.innerHTML = `
      <div class="forecast-date">${dayName}</div>
      <div class="forecast-icon">
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather">
      </div>
      <div class="forecast-temp">${Math.round(data.main.temp)}°C</div>
      <div class="forecast-description">${data.weather[0].description}</div>
    `;
    
    container.appendChild(card);
  });
}

function displayHourlyForecast(hourlyData) {
  const container = document.getElementById('hourlyContainer');
  container.innerHTML = '';

  // Display next 24 hours
  hourlyData.slice(0, 24).forEach((hour, index) => {
    if (index % 3 === 0) { // Show every 3 hours to reduce clutter
      const card = document.createElement('div');
      card.className = 'hourly-card';
      
      const time = new Date(hour.dt * 1000);
      const timeStr = time.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });

      card.innerHTML = `
        <div class="hourly-time">${timeStr}</div>
        <div class="hourly-icon">
          <img src="https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png" alt="Weather">
        </div>
        <div class="hourly-temp">${Math.round(hour.temp)}°C</div>
        <div class="hourly-description">${hour.weather[0].description}</div>
      `;
      
      container.appendChild(card);
    }
  });
}

function displayAlerts(alerts) {
  const alertsSection = document.getElementById('alertsSection');
  const alertsList = document.getElementById('alertsList');

  if (!alerts || alerts.length === 0) {
    alertsSection.classList.add('hidden');
    return;
  }

  alertsSection.classList.remove('hidden');
  alertsList.innerHTML = '';

  alerts.forEach(alert => {
    const alertItem = document.createElement('div');
    alertItem.className = 'alert-item';
    
    const startTime = new Date(alert.start * 1000).toLocaleString('es-ES');
    const endTime = new Date(alert.end * 1000).toLocaleString('es-ES');

    alertItem.innerHTML = `
      <div class="alert-title">${alert.event}</div>
      <div class="alert-description">
        <strong>Desde:</strong> ${startTime}<br>
        <strong>Hasta:</strong> ${endTime}<br>
        ${alert.description}
      </div>
    `;
    
    alertsList.appendChild(alertItem);
  });
}

// ============================================
// Favorites Management
// ============================================
function addCurrentToFavorites() {
  if (!currentCity) return;

  const exists = favorites.some(
    fav => fav.name.toLowerCase() === currentCity.name.toLowerCase()
  );

  if (!exists) {
    favorites.push({
      name: currentCity.name,
      country: currentCity.country,
      lat: currentCity.lat,
      lon: currentCity.lon
    });
    localStorage.setItem('weatherFavorites', JSON.stringify(favorites));
    updateFavoritesUI();
    showNotification('Añadido a favoritos ⭐');
  } else {
    showNotification('Ya está en favoritos');
  }
}

function removeFavorite(index) {
  favorites.splice(index, 1);
  localStorage.setItem('weatherFavorites', JSON.stringify(favorites));
  updateFavoritesUI();
}

async function updateFavoritesUI() {
  const container = document.getElementById('favoritesContainer');
  container.innerHTML = '';

  for (let i = 0; i < favorites.length; i++) {
    const fav = favorites[i];
    const card = document.createElement('div');
    card.className = 'favorite-card';

    try {
      const response = await fetch(
        `${OPENWEATHER_BASE}/data/2.5/weather?lat=${fav.lat}&lon=${fav.lon}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      const temp = Math.round(data.main.temp);

      card.innerHTML = `
        <div class="favorite-name">${fav.name}</div>
        <div class="favorite-temp">${temp}°C</div>
        <button class="remove-favorite" onclick="removeFavorite(${i})">✕</button>
      `;

      card.addEventListener('click', () => {
        fetchWeatherByCoordinates(fav.lat, fav.lon);
      });
    } catch (error) {
      card.innerHTML = `
        <div class="favorite-name">${fav.name}</div>
        <button class="remove-favorite" onclick="removeFavorite(${i})">✕</button>
      `;
    }

    container.appendChild(card);
  }
}

// ============================================
// Utility Functions
// ============================================
function showError(message) {
  errorContainer.classList.remove('hidden');
  errorMessage.textContent = message;
  mainContent.classList.add('hidden');
}

function showNotification(message) {
  // Create a simple notification
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--success-color, #10b981);
    color: white;
    padding: 15px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    animation: slideIn 0.3s ease-out;
  `;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

function loadDefaultCity() {
  const defaultCity = localStorage.getItem('lastCity') || 'Madrid';
  fetchWeatherByCity(defaultCity);
}

// Save last searched city
cityInput.addEventListener('input', () => {
  if (cityInput.value) {
    localStorage.setItem('lastCity', cityInput.value);
  }
});

// ============================================
// Animations
// ============================================
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// ============================================
// Auto-refresh weather data every 10 minutes
// ============================================
setInterval(() => {
  if (currentCity) {
    fetchCompleteWeatherData(currentCity.lat, currentCity.lon);
  }
}, 600000); // 10 minutes

// Log initialization
console.log('Weather Dashboard initialized successfully ✅');
