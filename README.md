# Explicacion del Proyecto
El proyecto es una aplicacion web que funciona como ecommerce, esta basado en la libreria de React y
en el entorno de desarrollo Node. Este eccommerce es acerca de Hoodies (sudaderas, buzos, camperas).

# Run app locally

```bash
$ git clone https://github.com/PabloLoading/Sahoodies-Ecommerce.git
$ npm install
$ npm start
```

# Set env variables
This web app uses Firebase as a service, then you will have to set your own env variables with your firebase 
credentials. Create a .env file on your root directory and fill the following blanks:
```
REACT_APP_apiKey =
REACT_APP_authDomain =
REACT_APP_projectId =
REACT_APP_storageBucket =
REACT_APP_messagingSenderId =
REACT_APP_appId =
```
# Routes

### Loged Routes:
- /account
- /change-password
- /order/:orderId

### NotLoged Routes:
- /signup
- /login

### Other Routes:
- /
- /category/:catId
- /item/:itemId
- /cart

 
# Demo
![aaa](https://user-images.githubusercontent.com/90655224/184688323-3c0e2222-2563-4fe1-b4ab-67d1641f03cd.gif)



# External libraries
-  [Formik](https://formik.org/) : facilita la creacion y manejo de formularios. 
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction/) : notificacion popup sencilla. 

# Technologies

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)

# Author
Pablo Duran | 2022 | [Linkedin](https://www.linkedin.com/in/pablo-dur%C3%A1n-b07a11220/)
