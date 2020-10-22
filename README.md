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
- Selecciona el método **POST**, agrega la ruta/enlace, luego seleciona en **Body**, elige el formato **x-www-form-urlencoded**, en el cuerpo agrega los parametros y reemplaza el **client-id** como el **client-secret** por los que ya obtuviste al crear el proyeto en Spotify.
![ScreenShot](/src/assets/img/post-token.png?raw=true)
![ScreenShot](/src/assets/img/valores-token.png?raw=true)
- Al dar click en **Send**, se obtendrá en un JSON el token de acceso.
![ScreenShot](/src/assets/img/token.png?raw=true)
## Haciendo uso del token de acceso en AppMusic
Una vez obtenido el token de acceso se va al servicio de spotify en la carpeta de **servicios** en el proyecto y agregamos lo siguiente:
![ScreenShot](/src/assets/img/token-cabecera.png?raw=true)
## RESULTADOS
![ScreenShot](/src/assets/img/app1.png?colum=true) 
![ScreenShot](/src/assets/img/app2.png?colum=true)
========
![ScreenShot](/src/assets/img/app3.png?colum=true)
![ScreenShot](/src/assets/img/app4.png?colum=true)
