# Bienvenidos a  **Vitural Tekk**

"Virtual tekk" fue construido con `React`, gracias a los cursos de coderhouse y a la ayuda que tanto el profesor y los tutores brindaron a lo largo de estos meses es que fue posible llegar a este resultado.

## Pantallazo general del e-comerce
Se trata de una pagina de venta de productos informaticos orientados al gaiming.\
Inicie la aplicacion utilizando el comando `npm start`.
La aplicacion tomara el lugar de http://localhost:3000. \
Una compra deberia verse asi.\
![Alt text](https://github.com/wocaso/vitrualTekk-Busato-Gabriel/blob/main/public/Assets/Readme/how%20to%20buy.gif)
## Componentes

### **NavBar**
 Nada complejo, se encarga de los link para navegar dentro de la pagina.\
Condicionalmente si se tienen o no productos en el carrito muestra o no el `CartWidget`.


### **CartWidget**
Se utiliza en el `navBar` de manera condicional para que el usuario pueda saber cuantos productos tiene agregados hasta el momento en su carrito.\
Ademas el componente mismo funciona como link para ir hasta el carrito de productos agregados.

### **Footer**
Un footer que no posee otra funcion que no sea estetica e informativa.


### **ItemListContainer**
Como todos los componentes terminados en container de la app, es quien se encarga de recibir la info y realizar las funciones nesesarias antes de enviar los datos al componentes que renderizara estos datos.\
Aqui tambien se filtra que Items van a ser renderizados, si no hay una categoria seleccionada enviara todos, sino solo los que cumplan con el requisito.\
En este caso los datos de los items los recibe de `Firestore.js` y son enviados a `ItemList` para que realize el mapeo de estos.

### **ItemList**
Recibe los datos del `ItemListContainer` y con ellos mapea la cantidad de items nesesarios, utilizando como plantilla para estos al componente `Item`.\
Agrega a su vez a cada `Item` un link a su respectivo Url.

### **Item**
Componente para renderizar productos, recibe datos y con su plantilla ordena estos en una vista agradable para el usuario.

### **ItemDetailContainer**
Utiliza el `Url param` que proporciono `ItemList` para decidir que item va a ser renderizado, buscando los datos de este desde `firestone.js`, utilizando el componente `ItemDetail` para su renderizacion.

### **ItemDetail**
Renderiza el detalle del item y con los datos recibidos, agrega las funcionalidades para que el usuario pueda agregar dicho item a su carrito.\
El numero de items seleccionados lo decide el componente `ItemCount`.\
El link al carrito de compras lo provee el componente `ButtonLink`.\
Los datos del carrito se van guardando en el `cartContext`.

### **ItemCount**
Se encarga de devolver un valor **count** utilizado por `ItemDetail` para saber que cantidad de un producto se desea agregar al `cartContext`.

### **ButtonLink**
Simple componente compuesto por un **button** y un **Link** permitiendo modificar las propiedades de estos.

### **CartContainer**
Recibe los datos que `cartContext` fue guardando y hace un mapeo sobre el componente `ItemCart` para renderizar los mismos.\
En caso de que `cartContext` no devuelva ningun dato, renderiza `ButtonReturnFromCart` para que el usuario pueda volver a la pagina principal y agregar productos.\
A su vez utiliza el componente `cartPrice` para mostrarle al usuario el valor total de los productos que agrego hasta el momento. 

### **ItemCart**
Utiliza el componente `Item` para renderizar los datos proporcionados por `CartContainer`.\
A su vez agrega funciones del `cartContext` para poder hacer modificaciones en el carrito del usuario. (por ejemplo quitar o agregar productos).


### **CartPrice**
Recibe datos `CartContainer` y muestra el valor del total de los productos.


### **ButtonReturnFromCart**
Aparece cuando no hay productos en el `cartContext` y se trata de entrar a `cartContainer`. Mostrando un mensaje y permitiendole al usuario volver a la pagina principal. 



### **Checkout**
Un form para que el usuario agregue sus datos y asi poder generarle una orden de compra y guardarla en **Google Firebase**.\
En esta orden estara detallado: **Nombre**, **Numero de telefono**, **Email**, **Productos** y **Hora y fecha**  de la compra.

### **Checkout**
Muestra al usuario que termino su compra con un saludo conjunto con su **Id de compra**.

### **Loader**
Se muestra al usuario durante la lectura de datos.\
El componente que contiene la animacion fue descargado de github, no soy el autor original de la animacion de este.








