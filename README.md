# Piano con Arduino

El piano electrónico es un instrumento musical de teclado diseñado para emitir el timbre de un piano utilizando circuitos analógicos que sintetizan el sonido de un piano forte o piano con sensores que definen la duración de una determinada nota. Estos pianos suelen ser de menor tamaño que los pianos tradicionales, porque emplean un sistema de circuitos electrónicos en lugar de uno de cuerdas.

Una nota musical se puede generar con una onda senoidal o cuadrada de cierta frecuencia, con la que se puede reproducir al momento de que se conecta a una bocina. Arduino tiene la librería tone() con la que genera una señal cuadrada de cierta frecuencia deseada. Por lo cual es factible realizar un piano en forma local, (mediante teclas) y de forma remota, mediante una conexión serial, con el Arduino y con una bocina.

Se pueden expandir las capacidades del Arduino si éste se conecta a una computadora personal, la cual le envía las notas musicales a reproducir, se genera una interfaz gráfica en la que se puede definir un teclado virtual. Por lo cual se van a aprovechar estas capacidades para incrementar la funcionalidad.

## Interfaz Web del piano

![Piano](/piano.png)
