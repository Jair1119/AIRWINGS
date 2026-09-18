# "Batallas de Papel" en Android Studio

El proyecto ya incluye la carpeta **`android/`** lista para abrirse y editarse en Android Studio.

## 1. Descarga el proyecto

Botón de GitHub / Exportar en Lovable → descarga el ZIP o clona el repositorio.

## 2. Abre en Android Studio

Android Studio → **Open** → selecciona la carpeta **`android`** (no la raíz del proyecto).

Deja que Gradle sincronice la primera vez (descarga el SDK y dependencias).

Para probarlo: botón ▶ **Run** con un emulador o tu teléfono conectado por USB.

## 3. Generar el APK

Menú **Build → Build Bundle(s) / APK(s) → Build APK(s)**.

El archivo queda en:
`android/app/build/outputs/apk/debug/app-debug.apk`

Para Google Play: **Build → Generate Signed Bundle / APK**.

## 4. Si cambias el juego (código web)

```bash
bun install
bun run android:sync   # compila la web y la copia al proyecto Android
```

Luego vuelve a compilar en Android Studio. También puedes usar:

```bash
bun run build:mobile   # solo compila la web a mobile-dist/
bun run android:open   # abre Android Studio
```

## Qué puedes editar en Android Studio

- `android/app/src/main/AndroidManifest.xml` — permisos, orientación (ya está en horizontal).
- `android/app/src/main/res/values/strings.xml` — nombre de la app.
- `android/app/src/main/res/` — ícono, splash, colores.
- `android/app/build.gradle` — versión de la app, versión mínima de Android, firma.
- `android/app/src/main/java/.../MainActivity.java` — código nativo.

La parte del juego (3D, armas, menús) vive en `src/game/` y se compila a
`android/app/src/main/assets/public` mediante `bun run android:sync`.

## Notas

- Requiere Android Studio con el SDK de Android y JDK 17 (incluido en Android Studio).
- El juego detecta pantalla táctil y muestra cruceta, fuego, turbo y cambio de arma.
- La app funciona sin conexión; solo las fuentes decorativas se cargan de internet.
