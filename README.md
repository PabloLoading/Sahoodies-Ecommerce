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
```
REACT_APP_apiKey =
REACT_APP_authDomain =
REACT_APP_projectId =
REACT_APP_storageBucket =
REACT_APP_messagingSenderId =
REACT_APP_appId =
```
# Navegabilidad
La aplicacion logra una navegabilidad fluida.  Contiene las siguientes rutas:
- /
- /category/:catId
- /item/:itemId
- /cart
- /finishOrder
- /search
- /account
 
# Demo![aaa](https://user-images.githubusercontent.com/90655224/184688323-3c0e2222-2563-4fe1-b4ab-67d1641f03cd.gif)



# Librerias publicas extras
-  [Formik](https://formik.org/) : facilita la creacion y manejo de formularios. 
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction/) : notificacion popup sencilla. 

# Tecnologias

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)

# Autores
Pablo Duran | 2022 | [Linkedin](https://www.linkedin.com/in/pablo-dur%C3%A1n-b07a11220/)
