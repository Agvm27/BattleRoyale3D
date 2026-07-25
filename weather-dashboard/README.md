# 🌦️ Weather Dashboard

Un dashboard de clima moderno y responsivo que obtiene datos en tiempo real de la API pública de OpenWeatherMap. Interfaz elegante con soporte para tema oscuro, pronósticos detallados y gestión de ciudades favoritas.

## 🚀 Características

### 📍 Búsqueda y Ubicación
- ✅ Búsqueda por nombre de ciudad con autocompletado
- ✅ Geolocalización automática
- ✅ Sugerencias de ciudades en tiempo real
- ✅ Historial de última ciudad buscada

### 🌡️ Datos Meteorológicos Completos
- ✅ Temperatura actual y sensación térmica
- ✅ Humedad, presión y visibilidad
- ✅ Velocidad del viento
- ✅ Cobertura de nubes
- ✅ Horarios de salida y puesta del sol
- ✅ Información de coordenadas GPS

### 📅 Pronósticos
- ✅ Pronóstico a 5 días
- ✅ Pronóstico horario (próximas 24 horas)
- ✅ Iconos dinámicos de clima
- ✅ Descripción detallada del clima

### ⚠️ Alertas de Clima
- ✅ Alertas meteorológicas en tiempo real
- ✅ Información de duración de alertas
- ✅ Descripción completa de advertencias

### ⭐ Favoritos
- ✅ Guardar ciudades favoritas
- ✅ Acceso rápido a favoritos guardados
- ✅ Temperatura en tiempo real de favoritos
- ✅ Almacenamiento local persistente

### 🎨 Interfaz de Usuario
- ✅ Tema claro/oscuro
- ✅ Diseño responsivo (móvil, tablet, desktop)
- ✅ Animaciones suaves
- ✅ Estados de carga y error
- ✅ Iconos del clima interactivos

## 📱 Cómo Usar

### Inicio Rápido
1. Abre `weather-dashboard/index.html` en tu navegador
2. La app cargará automáticamente el clima de Madrid
3. Usa la barra de búsqueda para buscar cualquier ciudad
4. O haz clic en "📍 Mi Ubicación" para tu clima local

### Búsqueda de Ciudades
- Escribe el nombre de una ciudad
- Verás sugerencias mientras escribes
- Haz clic en una sugerencia o presiona Enter
- El clima se actualizará automáticamente

### Guardar Favoritos
1. Busca una ciudad
2. Haz clic en "+ Añadir a Favoritos"
3. La ciudad se guarda automáticamente
4. Haz clic en cualquier favorito para ver su clima

### Cambiar Tema
- Haz clic en el botón de luna/sol en la esquina superior derecha
- El tema se cambia instantáneamente
- Tu preferencia se guarda automáticamente

## 🔧 Configuración Técnica

### Requisitos
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet
- Permisos de geolocalización (opcional)

### APIs Utilizadas
1. **OpenWeatherMap** - Datos de clima
   - Current Weather API
   - 5 Day Forecast API
   - One Call API (alertas, UV)
   
2. **Nominatim OSM** - Geolocalización inversa
   - Convertir coordenadas a ciudades

### Estructura de Archivos
```
weather-dashboard/
├── index.html         # Estructura HTML
├── styles.css         # Estilos y responsividad
├── script.js          # Lógica y API calls
└── README.md          # Este archivo
```

## 📊 Datos Mostrados

### Información Actual
| Campo | Descripción |
|-------|-------------|
| Temperatura | Temperatura actual en °C |
| Sensación Térmica | Cómo se siente realmente |
| Humedad | Porcentaje de humedad |
| Viento | Velocidad en km/h |
| Presión | Presión atmosférica en hPa |
| Visibilidad | Distancia de visibilidad en km |
| Nubes | Porcentaje de cobertura |
| Salida del Sol | Hora de salida solar |
| Puesta del Sol | Hora de puesta solar |

### Pronósticos
- **5 Días**: Temperatura y clima general
- **24 Horas**: Pronóstico horario detallado
- **Alertas**: Advertencias meteorológicas activas

## 🌐 APIs y Endpoints

### OpenWeatherMap
```
GET /data/2.5/weather           # Clima actual
GET /data/2.5/forecast          # Pronóstico 5 días
GET /data/2.5/onecall          # Datos completos (One Call)
```

### Nominatim (OpenStreetMap)
```
GET /search                     # Búsqueda de ciudades
GET /reverse                    # Coordenadas a ciudad
```

## 💾 Almacenamiento Local

La app usa `localStorage` para guardar:
- **weatherFavorites**: Lista de ciudades favoritas
- **lastCity**: Última ciudad buscada
- **theme**: Preferencia de tema (light/dark)

## 🎨 Temas de Color

### Tema Claro
- Fondo: Blanco/Gris claro
- Texto: Negro/Gris oscuro
- Primario: Azul

### Tema Oscuro
- Fondo: Gris oscuro/Negro
- Texto: Blanco/Gris claro
- Primario: Azul claro

## 📱 Responsive Design

| Dispositivo | Breakpoint | Comportamiento |
|-------------|-----------|-----------------|
| Desktop | > 1024px | Layout de 2+ columnas |
| Tablet | 768px - 1024px | Layout adaptable |
| Móvil | < 768px | Layout de columna única |

## 🔄 Auto-Actualización

- Los datos se actualizan automáticamente cada 10 minutos
- Búsquedas manuales actualizan instantáneamente
- El último tema se preserva entre sesiones
- Los favoritos persisten indefinidamente

## ⚠️ Limitaciones Conocidas

- La API gratuita tiene límite de 60 requests/minuto
- Las alertas solo están disponibles en ciertos países
- El índice UV está disponible en el One Call API
- Geolocalización requiere permisos del navegador

## 🚀 Mejoras Futuras

- [ ] Soporte para múltiples unidades (°F, °K)
- [ ] Gráficas de tendencias de temperatura
- [ ] Radar de precipitación
- [ ] Calidad del aire (AQI)
- [ ] Índice UV detallado
- [ ] Compartir clima en redes sociales
- [ ] Notificaciones push de alertas
- [ ] Soporte para múltiples idiomas
- [ ] Modo offline con datos en caché
- [ ] Comparativa de ciudades

## 📝 Ejemplo de Uso

```javascript
// Buscar clima de una ciudad
fetchWeatherByCity('Barcelona');

// Geolocalización automática
navigator.geolocation.getCurrentPosition(...);

// Guardar favoritos
addCurrentToFavorites();

// Cambiar tema
themeToggle.click();
```

## 🐛 Troubleshooting

### "Ciudad no encontrada"
- Verifica la ortografía
- Usa nombres de ciudades principales
- Intenta con código de país (ej: "Madrid, ES")

### "Error de geolocalización"
- Verifica permisos en configuración del navegador
- Algunos navegadores requieren HTTPS
- Intenta búsqueda manual de ciudad

### "No se cargan datos"
- Verifica conexión a internet
- Recarga la página
- Revisa consola (F12) para errores

### "Favoritos desaparecieron"
- Los datos se almacenan en localStorage
- Navegar en modo incógnito no persiste datos
- Borrar datos del navegador elimina favoritos

## 📄 Licencia

Este proyecto es de código abierto. Siéntete libre de usarlo y modificarlo.

## 🔗 Enlaces Útiles

- [OpenWeatherMap API](https://openweathermap.org/api)
- [OpenStreetMap Nominatim](https://nominatim.org/)
- [MDN Web Docs - Geolocation](https://developer.mozilla.org/es/docs/Web/API/Geolocation)
- [MDN Web Docs - localStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)

## 💡 Tips

- **Favoritos**: Guarda las ciudades que visitas frecuentemente
- **Tema Oscuro**: Mejor para ojos en ambientes oscuros
- **Autocompletado**: Escribe rápido para ver sugerencias
- **Geolocalización**: Actualiza automáticamente tu ubicación

## 🤝 Contribuciones

¿Ideas para mejorar? ¡Envía un PR!

1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/MiMejora`)
3. Commit cambios (`git commit -am 'Agrega MiMejora'`)
4. Push a la rama (`git push origin feature/MiMejora`)
5. Abre un Pull Request

---

**Hecho con ❤️ usando OpenWeatherMap API**

¿Preguntas? ¡Abre un Issue!
