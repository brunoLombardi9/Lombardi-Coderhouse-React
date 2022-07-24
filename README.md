# Entrega de proyecto final - React-Coderhouse

## Uso e instalación:
1. Clonar proyecto desde https://github.com/brunoLombardi9/lombardi-coderhouse-react.git

2. Ejecutar npm install .

3. Ejectutar npm start .


## Generalidades


Estado loading = true siempre retorna render de loader en el componente Cargando.

Estado error = true siempre retorna pantalla de error al obtener datos.

En el archivo firebase.js se encuentra la configuración para acceder a la base de datos de Firestore. Recibe las keys para acceder  Firebase desde archivo .env .


# Librerías
### `Material UI: `
Se implementa para faciltar maquetación del sitio. Se utiliza principalmente para lograr crear componentes responsive y el navbar con su sidebar desplegable.


### `Material icons: `
Se utiliza para traer los svg que estan dentro de los botones.



### `Emotion: `
Se utiliza en conjunto con MUI para dar estilos al sitio.


### `Firebase: `
Se utilizan funciones y métodos de la librería para hacer consultas y peticiones a la base de datos creada en Firestore.


### `React router: `
 Se aplica para crear navegación a través de rutas dentro del sitio. Las rutas están declaradas dentro de los componentes Route nesteados dentro del componente App.

# Componentes
 ## NavBar:
Muestra logo del sitio, botón de carrito (CartWidget) y botón de hamburguesa, este ultimo al ser clickeado desplega sidebar.

`drawerWidth:` define el ancho que tendrá al sidebar.

`Drawer:` es el sidebar del sitio, contiene el menú de de navegación y se despliega al clickear boton de hamburguesa.


 ## ItemListContainer:
 En el se hace consulta a Firestore para conseguir lista de productos y filtrarlos según la categoría en la que se este, de no haber ninguna categoría seleccionada se mostraran todos los productos ordenados por categorías.

Se utiliza switch para setear estado “categoriaTraducida” para mostrar en pantalla el nombre de la categoría en español, ya que desde la base de datos la misma llega originalmente en ingles.

Renderiza al componente ItemList y le pasa los 	productos obtenidos de la base de datos mediante props.

 ## ItemList:
 Recibe la lista de productos como prop a través de ItemListContainer  y retorna cards (Item) con cada uno de ellos.

 ## Item:
 Renderiza las cards donde se muestran productos. El botón “Ver detalle” funciona como link a la ruta “/detail/(id del producto seleccionado), lo cual renderiza el componente ItemDetailContainer” .

 ## ItemDetailContainer:
 Hace consulta a la base de datos para traer información de un producto puntual basándose en su id, el cual se obtiene mediante el hook UseParams. Retorna componente ItemDetail.

## ItemDetail:
Muestra información del producto seleccionado que llega via props. Al hacer el render hace validación acerca de si el producto mostrado ya se encuentra añadido al carrito, en el caso de ya estar en el carrito se muestra botón para “Agregar al carrito”pero en estado disabled, si el producto no esta en el carrito se muestra componente ItemCount.

## ItemCount:
Muestra los botones para seleccionar la cantidad de unidades a añadir del producto al carrito, esta siendo limitada por el stock disponible del producto, también muestra el botón “Agregar al carrito”



