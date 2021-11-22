# Grid with flex User Guide

## HTML Structure

La estructura del grid con flexbox consiste en un contenedor grid
(grid__container), el cual contiene 6 elementos (grid__item), con
diferentes dimensiones, entre los que encontramos:

* Item con ancho del 100% del contenedor con las clases: grid__item y width-100
* Item con ancho del 50% del contenedor con las clases: grid__item y width-50
* Item con ancho del 25% del contenedor con las clases: grid__item y width-50

Dentro de cada elemento del contenedor (grid__item) se encuentra un elemento p, que contiene el texto.


## CSS Stylesheet

Primero se configura el entorno, es decir, el documento html y el body con el alto del 100%. De igual manera, se usa el atributo box-sizing con valor border-box para evitar el aumento del ancho y el alto de los elementos al añadir padding o bordes.

Después, se encuentra el estilo de la estructura grid.

* grid__container: clase para el estilo del contenedor grid, dándole el display flex y los atributos para ordernar los elementos grid.

* grid__item: clase para los atributos que comparten todos los elementos grid como el borde, el padding, el background-color y los márgenes.

* grid__item:hover : pseudoelemento para animar los elementos grid cuando se pone el ratón encima

* width-X: clase que varía en función de las dimensiones de cada elemento grid. Si por ejemplo el elemento en cuestión tiene la clase width-25 el elemento tendrá de ancho el 25% del ancho del viewport menos el margen que se le pone a los elementos.

Por último, tenemos una media query para transformar los elementos grid y que en dispositivos con un ancho igual o inferior a 800px todos tengan un ancho del 100% del viewport y estén en columna.




