# AppMusic
_AppMusic es un proyecto desarrollado para android, el cual usa un token de acceso para consumir la api de Spotify, trae información de las canciones de cualquier artista y te ofrece una vista previa de la misma._
## ¿Cómo obtengo el token de acceso?
1. Requisitos 📋
- Tener instalado [POSTMAN](https://www.postman.com/).
- Tener una [cuenta de Spotify](https://accounts.spotify.com/).
2. Procedimiento
- Ir a https://developer.spotify.com/dashboard/applications. Inicia sesión y crea un nuevo projecto.
- Una vez creado el proyecto te proporcionará un **Client ID** y un **Client Secret**.
- Abre una nueva pestaña en **POSTMAN**.
- Selecciona el método **POST**, agrega la ruta/enlace, luego seleciona en **Body**, elige el formato **x-www-form-urlencoded** y agrega el cuerpo de la ruta que hará la petición a la api de Spotify para obtener el token.
![ScreenShot](/src/assets/img/post-token.png?raw=true)
![ScreenShot](/src/assets/img/valores-token.png?raw=true)
