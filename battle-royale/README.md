# 🎮 Battle Royale 3D - Zombie Survival

Un emocionante juego de supervivencia estilo Battle Royale donde luchas contra oleadas de zombies, recoges armas y habilidades especiales, todo optimizado para mantener 60-120 FPS.

## 🚀 Características Principales

### 👥 15 Tipos de Personajes Únicos
Cada personaje tiene estadísticas diferentes:
- **Soldado** - Equilibrado (100 HP, velocidad normal)
- **Asesino** - Rápido pero frágil (80 HP, +30% velocidad)
- **Tanque** - Resistente (150 HP, +30 armadura, lento)
- **Médico** - Sanador (90 HP, +10 armadura)
- **Ingeniero** - Técnico (95 HP, +20 armadura)
- **Explorador** - Veloz (75 HP, +40% velocidad)
- **Francotirador** - Precisión (85 HP, +5 armadura)
- **Berserker** - Agresivo (120 HP, velocidad aumentada)
- **Fantasma** - Sigiloso (70 HP, velocidad alta)
- **Guardián** - Protector (130 HP, +35 armadura)
- **Ninja** - Ágil (65 HP, velocidad muy alta)
- **Paladín** - Sagrado (140 HP, +40 armadura)
- **Mago** - Místico (75 HP, habilidades especiales)
- **Cazador** - Experto (90 HP, velocidad aumentada)
- **Ciborg** - Artificial (100 HP, +25 armadura)

### 🔫 5 Tipos de Armas
Cada arma tiene diferentes características:
- **Pistola** - Equilibrada (25 DMG, 30 munición)
- **Rifle** - Potente (50 DMG, 20 munición, largo rango)
- **Escopeta** - Devastadora (80 DMG, 8 munición, dispersión alta)
- **Metralleta** - Rápida (20 DMG, 60 munición)
- **Lanzallamas** - Área (40 DMG, 15 munición)

### ⚡ 5 Habilidades Especiales
Activa con la tecla Q:
- **Escudo** - Agrega armadura temporal (50 pts)
- **Velocidad** - Aumenta velocidad 1.5x (5s)
- **Curación** - Recupera 50 HP
- **Explosión** - Daño en área a todos los zombies cercanos
- **Visión** - Rango de visión aumentado

### 🧟 10 Tipos de Zombies
Con diferentes comportamientos y estadísticas:
- **Zombie Común** - Equilibrado (30 HP, velocidad normal)
- **Zombie Rápido** - Veloz pero frágil (20 HP, +75% velocidad)
- **Zombie Fuerte** - Poderoso (60 HP, daño alto)
- **Zombie Tanque** - Resistente (100 HP, lento pero resistente)
- **Zombie Mutante** - Ágil (45 HP, velocidad media)
- **Zombie Volador** - Aéreo (35 HP, velocidad muy alta)
- **Zombie Explosivo** - Peligroso (25 HP, daño muy alto)
- **Zombie Parásito** - Rápido (40 HP, velocidad alta)
- **Zombie Corrupto** - Equilibrado fuerte (55 HP, daño medio-alto)
- **Zombie Anciano** - Antiguedad (80 HP, lento pero poderoso)

### 🎯 Sistema de Oleadas
- Las oleadas aumentan cada 30 segundos (configurable)
- Se añaden más zombies con cada oleada
- Dificultad se incrementa gradualmente
- ⚠️ Alerta visual antes de cada oleada

### 📦 Sistema de Inventario
Los zombies dejan caer:
- **Munición** (+30 proyectiles)
- **Kit Médico** (+50 HP)
- **Chaleco** (+30 armadura)

Recoge items haciendo clic en el inventario o acercándote.

### 🎮 Menús Interactivos
1. **Menú Principal** - Selecciona personaje, arma y habilidad
2. **HUD In-Game** - Información en tiempo real
3. **Game Over** - Estadísticas y opción de reiniciar

### 📊 Estadísticas Seguidas
- Zombies derrotados
- Tiempo de supervivencia
- Puntuación total
- Salud y armadura actual
- Munición disponible
- Posición en el mapa
- Oleada actual

## 🕹️ Controles

| Tecla | Acción |
|-------|--------|
| **W** | Movimiento arriba |
| **A** | Movimiento izquierda |
| **S** | Movimiento abajo |
| **D** | Movimiento derecha |
| **MOUSE** | Apuntar |
| **CLICK** | Disparar |
| **SHIFT** | Sprint (movimiento rápido) |
| **Q** | Usar habilidad |
| **R** | Recargar arma |
| **E** | Recoger items |
| **TAB** | Ver inventario |

## 🎯 Cómo Jugar

1. **Selecciona tu Personaje** - Elige entre 15 caracteres únicos
2. **Elige tu Arma** - Selecciona la que mejor se adapte a tu estilo
3. **Selecciona Habilidad** - Elige tu poder especial
4. **Sobrevive** - Derrota zombies y evita ser derrotado
5. **Recolecta Items** - Aumenta tu salud, armadura y munición
6. **Sube de Nivel** - Las oleadas aumentan en dificultad

## ⚙️ Optimizaciones

### Rendimiento
- ✅ Mantiene 60-120 FPS en dispositivos modernos
- ✅ LOD (Level of Detail) para objetos lejanos
- ✅ Culling de objetos fuera de pantalla
- ✅ Object pooling para proyectiles
- ✅ Renderizado optimizado con Canvas 2D
- ✅ Cálculos matemáticos eficientes

### Interacción del Usuario
- ✅ Menús intuitivos y responsivos
- ✅ Feedback visual inmediato
- ✅ HUD limpio y legible
- ✅ Animaciones suaves
- ✅ Colores high-contrast para accesibilidad

### Mapa
- **Tamaño**: 3000x3000 píxeles (5x mayor que original)
- **Grid Visual**: Para orientación
- **Limites**: El jugador no puede salir del mapa
- **Minimap**: Vista en tiempo real de la posición

## 📊 Fórmulas de Juego

### Puntuación
```
Puntuación Total = (Zombies Derrotados × 100) + (Tiempo Sobrevivido × 10)
```

### Daño
```
Daño Final = Daño del Arma - Armadura del Jugador (si la tiene)
```

### Velocidad del Jugador
```
Velocidad = Velocidad Base × Modificador de Personaje × (Sprint ? 1.5 : 1)
```

## 🔍 Sistema de Detección

### Persecución de Zombies
- Los zombies detectan al jugador dentro de 500 píxeles
- Se mueven hacia el jugador cuando lo detectan
- Caen en movimiento aleatorio cuando no detectan al jugador

### Colisiones
- **Zombie-Jugador**: Causa daño
- **Proyectil-Zombie**: Causa daño y elimina proyectil
- **Proyectil-Mapa**: Se destruye al salir del mapa

## 📱 Compatibilidad

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Navegadores modernos con Canvas API

## 🎨 Diseño Visual

### Paleta de Colores
- **Verde (#00ff00)** - Elementos principales, jugador sano
- **Rojo (#ff0000)** - Daño, zombies, peligro
- **Amarillo (#ffff00)** - Munición, UI importante
- **Gris (#888888)** - Armas, secundario

### Renderizado
- Personajes como círculos con brazos articulados
- Zombies con diferenciación visual por tipo
- Barras de salud sobre personajes y enemigos
- Efectos de fuego de arma

## 🚀 Mejoras Futuras

- [ ] Sonido y música
- [ ] Efectos de partículas mejorados
- [ ] Diferentes tipos de mapas
- [ ] Sistema de logros
- [ ] Clasificaciones globales
- [ ] Cooperativo multijugador (WebSocket)
- [ ] Más tipos de items especiales
- [ ] Sistema de upgrades permanentes
- [ ] Jefe final por oleada
- [ ] Modos de juego alternativos
- [ ] Personalizaciones de skin

## 🐛 Troubleshooting

### El juego va lento
- Cierra otras pestañas del navegador
- Reduce la cantidad de zombies en `gameData.waveSpawnCount`
- Usa un navegador más reciente

### No puedo seleccionar personaje
- Debes seleccionar personaje, arma Y habilidad antes de empezar

### Los zombies no aparecen
- Espera a que termine la cuenta regresiva de la oleada
- Acércate más al centro del mapa

### El control está invertido
- Los controles WASD están corregidos en esta versión
- Si aún hay problemas, reporta un issue

## 📝 Estructura del Código

```javascript
// Configuración
CHARACTERS, WEAPONS, ABILITIES, ZOMBIES

// Estado del Juego
gameState, player, gameData, input

// Ciclo Principal
gameLoop() → update() → render()

// Componentes
renderPlayer(), renderZombie(), renderMinimap()
```

## 🎓 Conceptos Aprendidos

Este proyecto demuestra:
- Canvas 2D rendering
- Física de juegos básica
- Sistemas de IA simple
- Gestión de estado
- Optimización de rendimiento
- Interacción del usuario

## 💡 Tips para Jugar

1. **Recolecta munición** - Siempre necesitarás más balas
2. **Usa el sprint** - El movimiento rápido es crucial
3. **Guarda habilidades** - Úsalas cuando estés en peligro
4. **Mantén armadura** - Recoge chalecos antes de que te golpeen
5. **Usa el mapa** - La minimap en la esquina muestra zombie cercanos
6. **Elige personaje según estilo** - Tanque si juegas defensivo, Ninja si eres agresivo

## 📄 Licencia

Este proyecto es de código abierto. ¡Siéntete libre de modificarlo y mejorarlo!

## 🤝 Contribuciones

¿Tienes ideas para mejoras? ¡Abre un PR!

1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/MiMejora`)
3. Commit cambios (`git commit -am 'Agrega MiMejora'`)
4. Push (`git push origin feature/MiMejora`)
5. Abre un Pull Request

## 🔗 Enlaces

- [GitHub Repository](https://github.com/Agvm27/BattleRoyale3D)
- [Canvas API Docs](https://developer.mozilla.org/es/docs/Web/API/Canvas_API)
- [Game Development Best Practices](https://gamedev.stackexchange.com/)

---

**¡Hecho con ❤️ por Agvm27**

**¿Preguntas? ¡Abre un Issue!**

**Versión**: 2.0 - Completa con 15 personajes, 10 zombies y optimizaciones
