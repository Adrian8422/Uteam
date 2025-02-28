# Uteam Marvel Frontend

Este proyecto es un frontend que consume la API de [Marvel Developer](https://developer.marvel.com/).

## Instalación

1. Clonar el repositorio.
2. Ejecutar el siguiente comando para instalar las dependencias:

```bash
npm install
```

## Ejecución

Para iniciar la aplicación, ejecutar:

```bash
npm start
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Configuración

Las credenciales de la API deben ser configuradas en un archivo `.env`. No se ha adjuntado este archivo porque contiene mis credenciales personales.

Puedes generar tus propias credenciales en [Marvel Developer](https://developer.marvel.com/) y agregarlas en el archivo `.env` con el siguiente formato:

```env
REACT_APP_MARVEL_API_PUBLIC_KEY=tu_public_key
REACT_APP_MARVEL_API_PRIVATE_KEY=tu_private_key
```

Con estas credenciales, la aplicación debería funcionar correctamente.

