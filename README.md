# 🎮 Battle Royale 3D - Mapa Gigante 600

Un juego de Battle Royale en 3D desarrollado con **Three.js**, ideal para jugar en dispositivos móviles y tablets. Enfrenta oleadas de enemigos en un mapa gigante de 600x600 unidades con terreno dinámico, cobertura natural y sistema de combate completo.

## 🚀 Características Principales

### 🎯 Gameplay
- **Mapa Gigante**: 600x600 unidades con terreno generado proceduralmente
- **12 Enemigos IA**: Bots que te persiguen y atacan inteligentemente
- **Sistema de Combate**: Disparos automáticos con colisiones precisas
- **Sistema de Salud**: Barra de salud en tiempo real
- **Puntuación**: Seguimiento de enemigos eliminados

### 🎮 Controles
- **Joystick Izquierdo** (Izq. pantalla): Movimiento
- **Derecha de Pantalla**: Rotación de cámara
- **Botón MIRA**: Activar/desactivar modo de puntería
- **Botón FUEGO**: Disparar (activa automáticamente mira)

### 🌍 Entorno
- **Terreno Dinámico**: Montañas, valles y áreas planas
- **Agua**: Zonas de agua que rodean el mapa
- **Vegetación**: 110 árboles y 220 grupos de césped
- **Cobertura**: 50 rocas gigantes para protegerse
- **Iluminación**: Sistema de luz solar realista
- **Niebla**: Efecto de profundidad visual

### 👾 Enemigos IA
- Persiguen automáticamente al jugador
- Causan daño al estar cerca
- Se respawnean al ser derrotados
- Animaciones de movimiento fluidas

## 📱 Cómo Jugar

### Inicio Rápido
1. Abre `index.html` en tu navegador (mejor en móvil)
2. Usa el joystick izquierdo para moverte
3. Usa la derecha de la pantalla para mirar alrededor
4. Presiona **FUEGO** para disparar
5. Presiona **MIRA** para apuntado preciso

### Objetivo
- Elimina el máximo de enemigos posible
- La puntuación se incrementa con cada kill
- Evita que los enemigos te acorralen
- ¡Sobrevive el mayor tiempo posible!

### Tips de Estrategia
- 🏃 **Movimiento**: Mantente en movimiento para evitar daño
- 🎯 **Puntería**: Usa el modo MIRA para disparos precisos
- 🪨 **Cobertura**: Usa las rocas y árboles para esconderte
- ⚠️ **Salud**: Monitorea tu barra de salud (esquina inferior izq)

## 🎨 Elementos Visuales

### Colores
- **Jugador**: Azul brillante con visor cian
- **Enemigos**: Rojo oscuro con visor amarillo
- **Terreno**: Verde variado, arena y nieve
- **Interfaz**: Blanco y amarillo para visibilidad

### Interfaz
```
┌─────────────────────────────────────┐
│ 🎯 KILLS: X    👾 ENEMIGOS: 12      │
│ 🎮 MODO HORIZONTAL                  │
└─────────────────────────────────────┘
        ┌──────┐              ┌──────┐
        │ MIRA │              │      │
        └──────┘              │ FUEGO│
┌──────────────┐              └──────┘
│ ██████████   │
└──────────────┘
```

## 🔧 Requisitos Técnicos

### Navegadores Soportados
- ✅ Chrome/Chromium (Recomendado)
- ✅ Firefox
- ✅ Safari (iOS/macOS)
- ✅ Edge
- ✅ Opera

### Requisitos de Hardware
- Procesador: Dual-core mínimo
- RAM: 1GB mínimo
- GPU: Cualquier GPU moderna
- Pantalla: Mínimo 320x480 px (móvil)

### Dependencias
- **Three.js r128** (CDN): `https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js`

## 📊 Estadísticas del Juego

### Parámetros del Mapa
| Parámetro | Valor |
|-----------|-------|
| Tamaño Mapa | 600 x 600 |
| Resolución Terreno | 120 x 120 |
| Árboles | 110 |
| Rocas | 50 |
| Grupos de Césped | 220 |
| Enemigos Iniciales | 12 |

### Parámetros de Combate
| Parámetro | Valor |
|-----------|-------|
| Daño por Disparo | 25 HP |
| Salud Enemigos | 100 HP |
| Salud Jugador | 100 HP |
| Daño Enemigos/tick | 0.3 HP |
| Cooldown Disparo | 10 frames |

## 🎓 Arquitectura del Código

### Estructura Principal
```javascript
// 1. Escena, Cámara y Luz
// 2. Terreno (600x600)
// 3. Árboles y Rocas
// 4. Personaje y Arma
// 5. Bots Enemigos
// 6. Apuntado y Disparo
// 7. Controles (Touch)
// 8. Bucle Principal (Animation Loop)
```

### Funciones Clave
- `getTerrainHeight(x, z)`: Calcula altura del terreno
- `createHumanoid(color, visor)`: Crea modelos 3D de personajes
- `spawnBot()`: Genera enemigos
- `shoot()`: Sistema de disparo
- `animate()`: Bucle principal del juego

## 🐛 Conocidos & Limitaciones

### Trabajando Correctamente
✅ Física de colisiones  
✅ IA de enemigos básica  
✅ Sistema de cámara dual (tercera/primera persona)  
✅ Animaciones fluidas  
✅ Controles táctiles responsivos  

### Limitaciones Actuales
⚠️ Sin sonido o efectos de audio  
⚠️ Sin efectos de partículas en impactos  
⚠️ IA de enemigos básica (sin tácticas avanzadas)  
⚠️ Sin sistema de armas múltiples  
⚠️ Sin mapas adicionales  
⚠️ Sin leaderboard persistente  

## 🚀 Mejoras Futuras

### Próximas Versiones
- [ ] Sistema de múltiples armas (escopeta, rifle, metralleta)
- [ ] Power-ups y objetos de recolección
- [ ] Efectos de sonido y música de fondo
- [ ] Efectos de partículas en explosiones
- [ ] Minimapa en esquina superior
- [ ] Sprinting/correr más rápido
- [ ] Granadas y explosivos
- [ ] Escudos y armadura
- [ ] Waypoints de misión
- [ ] Modos de juego diferentes
- [ ] Leaderboard online
- [ ] Personalización de personajes

## 📝 Control de Versiones

### v1.0 (2026-07-25)
- ✅ Release inicial
- ✅ Mapa gigante 600x600
- ✅ Sistema de combate completo
- ✅ IA de enemigos básica
- ✅ Interfaz de juego
- ✅ Controles táctiles dual

## 🤝 Contribuir

Si deseas mejorar el juego:
1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/MiMejora`)
3. Haz commit de tus cambios (`git commit -am 'Agrega MiMejora'`)
4. Push a la rama (`git push origin feature/MiMejora`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto. Siéntete libre de modificarlo y distribuirlo.

## 🔗 Enlaces Útiles

- [Three.js Documentation](https://threejs.org/docs/)
- [MDN Web Docs - WebGL](https://developer.mozilla.org/es/docs/Web/API/WebGL_API)
- [Touch Events API](https://developer.mozilla.org/es/docs/Web/API/Touch_events)

## 💬 Preguntas Frecuentes

### ¿Cómo puedo jugar en desktop?
Funciona en cualquier navegador moderno. Usa mouse para controlar la cámara y WASD para movimiento (si añades soporte).

### ¿Por qué no ves los enemigos?
Revisa que JavaScript esté habilitado. Algunos navegadores requieren sitios HTTPS para ciertos permisos.

### ¿Puedo cambiar la dificultad?
Actualmente no hay selector de dificultad, pero puedes modificar el código:
- Aumenta `initialBotCount` para más enemigos
- Modifica `playerHealth` para vida inicial
- Cambia `moveSpeed` para velocidad

### ¿Funciona offline?
Sí, una vez que Three.js se carga del CDN, el juego funciona completamente offline.

---

**Hecho con ❤️ usando Three.js**

¿Preguntas? ¡Abre un Issue o envía un PR!
