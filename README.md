# Explicacion del Proyecto
El proyecto es una aplicacion web que funciona como ecommerce, esta basado en la libreria de React y
en el entorno de desarrollo Node. Este eccommerce es acerca de Hoodies (sudaderas, buzos, camperas).

# Iniciar el proyecto

Clone el respositorio y abralo en su editor de codigo de preferencia.

Para la instalacion de los paquetes es necesario tener Node instalado, debe instalar estos
 archivos con el siguiente comando:
- npm install

### npm start
Comando que ejecuta la aplicación en el modo de desarrollo.
Abra [http://localhost:3000](http://localhost:3000) para verlo en su navegador.


# Estructura

## Async Mock
Archivo js que simula la llamada a una base de datos, contiene un array con los datos que se utilizan
en este proyecto y una funcion para adquirir esos datos con un retraso de 2 segundos.
## Componentes
La aplicacion esta basada en componentes, cada uno de estos cuenta con su archivo js y css. En esta
aplicacion los principales son:

### App
Contiene todo el contenido de la pagina.
### NavBar
Es el nav de la pagina, alli esta el nombre de la marca, las categorias,
el `CartWidget` (carrito de compra ), entre otras cosas.
 
### Item 
Card con informacion de un Hoodie, contiene imagen titulo y precio.

### ItemListContainer
Tiene como objetivo montar los items y mostrarlos. Muestra los items que coincidan con la
cateogria que se muestra en el url. Obtiene los datos de `Async Mock` y los filtra segun la 
categoria, le pasa este array filtrado al comoponente `itemList` el cual los mapea a varios
componentes `Item`.

### ItemDetail
Muestra una Card detallada con informacion de un producto en particular, esta pensado para 
mostrar un solo componente `ItemDetail` a la vez.
### ItemDetailContainer
Componente que obtiene el id del item en la url y los datos de `Async Mock` y monta un
`ItemDetail` pasandole por props el item, contiene logica y hace validaciones.

## Navegabilidad
La aplicacion logra una navegabilidad fluida. Contiene las siguientes rutas:
- /
- /category/:categoryId
- /item/:itemId


Para esto se utilizan componentes importados de la libreria react-router-dom mencionada anteriormente.

- Se utiliza `Link` para dirigir al usuario a otra pagina.
- Se utiliza `Routes` y `Route` para indicar que mostrar segun la ruta.
- Se utiliza `BrowserRouter` para envolver todo el contenido de la pagina que va a poder usar `Link`.

Se utiliza el metodo 'useParams()' para acceder al valor que se quiera de la url. (establecido en `Route`)


## Licencia
Pablo Duran | 2022 | Todos los derechos reservados.



