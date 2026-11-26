# Chuleta Beat · Hoja de proyecto

## Descripción
Chuleta de atajos y recetas para samplers (SP-404MKII, MPC Sample, Move, VE-22) en un solo `index.html`, con `sw.js` (caché `chuleta-beat-vX.Y.Z`) y `manifest.webmanifest`.

## Arquitectura
- Todo en `index.html` (HTML, CSS y JS), publicado con GitHub Pages.
- Vistas (1.5.0): `buscar`, `maquina`, `recetas`, `mi-hoja`, `glosario`, `info` (hash `#<máquina>/<vista>`). Hoja de detalle `#detail` (`openDetail`), selector de máquina `#devsheet` (`openDevPick`). Paneles: `FPS[dev]()`; `state.sel` (atajo elegido) o `state.hov` (resultado bajo el ratón) iluminan los botones.
- `sw.js`: service worker con caché versionada. Al cambiar la versión se cambia también el nombre de la caché.
- También se distribuye dentro de las apps de Windows, Mac y Android de SH-apps, que se actualizan solas desde este repositorio.

## Reglas permanentes
- Cada actualización sube la versión (visible en la app y en el nombre de la caché).
- Entrega numerada en zip (`chuleta-beat-vX.zip` con carpeta `chuleta-beat-vX`), versión standalone de un solo archivo, informe de error `.txt` y esta hoja.
- **Zona segura:** nada interactivo en la franja de la hora, la batería o la cámara: la cabecera usa `env(safe-area-inset-top)`.

## Historial
- **1.5.0** (26-11-2026): **rediseño más intuitivo** (pedido del usuario). La máquina se elige una vez (bienvenida la primera vez, luego botón con su nombre en la cabecera; `localStorage chuleta.dev`). Navegación en 4 pestañas: **Buscar · Máquina · Recetas · Mi hoja**, como barra inferior fija en el móvil (< 900 px) y arriba en el ordenador. **Buscar** = inicio + buscador único «¿Qué quieres hacer?» (junta el antiguo Asistente, la búsqueda de Atajos y las recetas; «luego»/comas para varios pasos; ámbito esta máquina / todas). Inicio por **tareas** (una tarjeta por categoría con icono), **Novedades del firmware** (fichas cuyo aviso cita la versión más nueva de cada máquina, etiqueta «Nuevo X.Y»), más usados, vistos, recetas y búsquedas recientes. **Tarjetas compactas** con teclas e icono (✋ mantén, 👆 pulsa, 🔄 gira, 🦶 pisa); al tocarlas se abre una **hoja de detalle** con los pasos numerados, el dibujo de la máquina con los botones iluminados y animados paso a paso, avisos, nota, fijar, escenario y «Ver en la máquina». **Máquina** = modo Explorar: el panel entero; al tocar un botón dice su función con SHIFT y lista los atajos que lo usan. En el ordenador, al buscar, el panel sigue al lado de los resultados (se ilumina el que tiene el ratón encima). Glosario y «Acerca de» (antiguo pie: versión, novedades, fuentes, licencia) pasan al menú ☰ (Ayuda); en Ajustes, «Cambiar de máquina» y «Modo pulgares» (se recuerda). Enlaces antiguos `#dev/inicio|asistente|atajos` siguen funcionando. Mismos datos, favoritos y notas.
- **1.4.0** (26-11-2026): **MPC Sample al firmware 1.4** (guía de usuario v1.4.0 RevA + notas de versión 1.4). 9 fichas nuevas: Flatten / Resample Pad (SHIFT + B3), 16 Levels en escala (mantén 16 LEVELS + ENCODER), grabación en bucle tipo looper (Rec Length SEQ), volumen de preescucha (SHIFT + K3 en el navegador), Preview en Step Edit (B2), Usage Monitor, Dev Enhancements (Beta), captura de pantalla (STOP + ERASE) y fallos conocidos de la 1.4. Fichas actualizadas: 16 Levels tipo, navegador, Step Edit, Rec Length, FX Select, MIDI Configuration, actualización de firmware (Desktop Updater / carga manual del .img), MPC3 (sigue sin compatibilidad), fallo de Flex Beat y páginas de la guía (v1.3 → v1.4). Dos recetas nuevas («Grabar un aparato externo en bucle», «Apilar efectos en un sample») y tres términos de glosario. MPC: 103 fichas (antes 94).
- **1.3.4** (24-11-2026): botón ☰ arriba a la derecha con el **menú común «☰ Menú»** de todas las apps (sh-core 1.5.0, `SH.ui.menu`): mismas secciones desplegables y en el mismo orden — Proyecto · Importar · Exportar · Otras apps · Copia de tus datos · Ajustes · Ayuda (guía e informe .txt) —; recuerda la sección abierta; los botones de siempre siguen haciendo lo mismo (el menú los pulsa); «⇄ Apps» va dentro (Otras apps, con el número de recibidos en el botón ☰). Sustituye al botón «💾 Datos».
- **v1.3.1** (19-11-2026) — zona segura: la cabecera (y, donde las hay, las ventanas a pantalla completa y la barra inferior) deja libre la franja de la hora, la batería y la cámara del móvil con `env(safe-area-inset-*)`. Comprobado en Chrome simulando un móvil con 48 px arriba y 24 px abajo: ningún botón tapado. En ordenador no cambia nada.

## Límites conocidos
- Esta hoja se creó en la v1.3.1; el historial anterior no está documentado aquí.
- Zona segura comprobada en un móvil simulado (Chrome); no en un móvil real.
- 1.5.0 probada en Chrome headless a 390 px (móvil táctil) y 1280 px; no en un móvil real ni en Safari/iOS. Ojo: un `backdrop-filter` en la cabecera convierte la barra inferior fija en relativa a la cabecera; en móvil la cabecera va sin él.
- MPC Sample 1.4: fichas sacadas de la guía y las notas, no probadas en la máquina. La guía no aclara si Flatten conserva el sample original, ni qué combinación exacta lleva al «scrub» que provoca «Disk Too Slow».
- Fuentes MPC: guía de usuario v1.4.0 (RevA) y notas de versión 1.4. Las fichas sin página en la referencia citan el capítulo.
