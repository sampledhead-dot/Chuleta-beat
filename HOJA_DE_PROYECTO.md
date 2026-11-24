# Chuleta Beat · Hoja de proyecto

## Descripción
Chuleta de atajos y recetas para samplers (SP-404MKII, MPC Sample, Move, VE-22) en un solo `index.html`, con `sw.js` (caché `chuleta-beat-vX.Y.Z`) y `manifest.webmanifest`.

## Arquitectura
- Todo en `index.html` (HTML, CSS y JS), publicado con GitHub Pages.
- `sw.js`: service worker con caché versionada. Al cambiar la versión se cambia también el nombre de la caché.
- También se distribuye dentro de las apps de Windows, Mac y Android de SH-apps, que se actualizan solas desde este repositorio.

## Reglas permanentes
- Cada actualización sube la versión (visible en la app y en el nombre de la caché).
- Entrega numerada en zip (`chuleta-beat-vX.zip` con carpeta `chuleta-beat-vX`), versión standalone de un solo archivo, informe de error `.txt` y esta hoja.
- **Zona segura:** nada interactivo en la franja de la hora, la batería o la cámara: la cabecera usa `env(safe-area-inset-top)`.

## Historial
- **1.3.4** (24-11-2026): botón ☰ arriba a la derecha con el **menú común «☰ Menú»** de todas las apps (sh-core 1.5.0, `SH.ui.menu`): mismas secciones desplegables y en el mismo orden — Proyecto · Importar · Exportar · Otras apps · Copia de tus datos · Ajustes · Ayuda (guía e informe .txt) —; recuerda la sección abierta; los botones de siempre siguen haciendo lo mismo (el menú los pulsa); «⇄ Apps» va dentro (Otras apps, con el número de recibidos en el botón ☰). Sustituye al botón «💾 Datos».
- **v1.3.1** (19-11-2026) — zona segura: la cabecera (y, donde las hay, las ventanas a pantalla completa y la barra inferior) deja libre la franja de la hora, la batería y la cámara del móvil con `env(safe-area-inset-*)`. Comprobado en Chrome simulando un móvil con 48 px arriba y 24 px abajo: ningún botón tapado. En ordenador no cambia nada.

## Límites conocidos
- Esta hoja se creó en la v1.3.1; el historial anterior no está documentado aquí.
- Zona segura comprobada en un móvil simulado (Chrome); no en un móvil real.
