# Explicacion del Proyecto
El proyecto es una aplicacion web que funciona como ecommerce, esta basado en la libreria de React y
en el entorno de desarrollo Node. Este eccommerce es acerca de Hoodies (sudaderas, buzos, camperas).

# Correr aplicacion localmente

```bash
$ git clone -b final https://github.com/PabloLoading/Sahoodies-Ecommerce.git 
$ npm install
$ npm start
```
# Variables de entorno
La aplicacion utiliza firebase como servicio, por lo tanto debe establecer las siguientes variables de entorno
con sus credenciales de firebase. Cree un archivo .env en la carpeta padre y configure las siguientes variables.
=======
# Project
The project is a web app that works as a ecommerce, it is react based and integrates Firebase.
This ecommerce is about Hoodies.

# Run app locally

```bash
$ git clone https://github.com/PabloLoading/Sahoodies-Ecommerce.git
$ npm install
$ npm start
```

# Set env variables
This web app uses Firebase as a service, then you will have to set your own env variables with your firebase 
credentials. Create a .env file on your root directory and fill the following blanks:
>>>>>>> ec8519be74e9d59272ba3d5915af2fd21ecb8877
```
REACT_APP_apiKey =
REACT_APP_authDomain =
REACT_APP_projectId =
REACT_APP_storageBucket =
REACT_APP_messagingSenderId =
REACT_APP_appId =
```
<<<<<<< HEAD
# Navegabilidad
La aplicacion logra una navegabilidad fluida.  Contiene las siguientes rutas:
=======

# Demo
![aaa](https://user-images.githubusercontent.com/90655224/184688323-3c0e2222-2563-4fe1-b4ab-67d1641f03cd.gif)

[See Deployed](https://sahoodies.vercel.app/)

# Routes

### Loged Routes:
- /account
- /change-password
- /order/:orderId

### NotLoged Routes:
- /signup
- /login

### Other Routes:
>>>>>>> ec8519be74e9d59272ba3d5915af2fd21ecb8877
- /
- /category/:catId
- /item/:itemId
- /cart
<<<<<<< HEAD
- /finishOrder
- /search
- /account
 
# Demo
![gifSahoo](https://user-images.githubusercontent.com/90655224/177210605-67eb19af-92ba-46ea-b6d2-e890c5f6b9e4.gif)

# Librerias publicas extras
-  [Formik](https://formik.org/) : facilita la creacion y manejo de formularios. 
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction/) : notificacion popup sencilla. 

# Tecnologias
=======

 # Collections & Auth
 For auth is used Firestore Authentication, and for storing collections firebase firestore:
 - categories
 - orders
 - products
 - users
 

# External libraries
-  [Formik](https://formik.org/) : makes easy to work with forms.
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction/) : simple popup notification. 

# Technologies
>>>>>>> ec8519be74e9d59272ba3d5915af2fd21ecb8877

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)

<<<<<<< HEAD
# Autores
Pablo Duran | 2022 | [Linkedin](https://www.linkedin.com/in/pablo-dur%C3%A1n-b07a11220/)
=======
# Author
Pablo Duran | 2022 | [Linkedin](https://www.linkedin.com/in/pablo-dur%C3%A1n-b07a11220/)
>>>>>>> ec8519be74e9d59272ba3d5915af2fd21ecb8877
