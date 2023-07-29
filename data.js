// data.js

// Aquí creamos una matriz de objetos que contiene preguntas y respuestas predefinidas.
const Database = [
    {
      id: 1,
      articulo:"Generico",
      sku:"",
      pregunta: "¿Hacen factura A?",
      respuestaCorrecta: "Somos agentes de percepción de ingresos brutos. En caso de requerir factura A puede presentar percepciones, las cuales deberán ser abonadas para el envío correcto de su factura",
    },
    {
      id: 2,
      articulo:"Generico",
      sku:"",
      pregunta: "¿Ñ?",
      respuestaCorrecta: "Las imagenes son de caracter ilustrativo, posee Ñ.",
    },
    {
      id: 3,
      articulo:"Generico",
      sku:"",
      pregunta: "¿Duracion de bateria?",
      respuestaCorrecta: "La duración de la batería varía según las condiciones de funcionamiento, tipo de uso, configuración de energía, brillo de pantalla, etc. y puede reducirse significativamente en determinadas condiciones de uso intensivo de energía. El tiempo aproximado es de 3 a 4 horas en uso normal. Podría extenderse con brillos de pantalla bajos o ahorro de energía.",
    },
    {
      id: 4,
      articulo:"Barra De Sonido Samsung Q-series Hw-q930c Wireless 9.1.4 C",
      sku:"HW-Q930C/ZB",
      pregunta: "¿Se puede conectar a una computadora por HDMI?",
      respuestaCorrecta: "Se puede.",
    },
    {
      id: 5,
      articulo:"Barra De Sonido Samsung Q-series Hw-q930c Wireless 9.1.4 C",
      sku:"HW-Q930C/ZB",
      pregunta: "¿Que diferencia hay entre este articulo y la Hw-q930b?",
      respuestaCorrecta: "Según el fabricante la versión C soporta además Dolby ATMOS Music , Night Mode, LPCM Multi channel.",
    },
    {
      id: 6,
      articulo:"Celular Samsung Galaxy A33 5g 128 Gb Awesome Black 6 Gb Ram",
      sku:"SM-A336MZKFA",
      pregunta: "¿Trae cargador?",
      respuestaCorrecta: "No trae cargador. Solo trae un usb C.",
    },
    {
      id: 7,
      articulo:"Barra De Sonido Samsung Q-series Hw-q930c Wireless 9.1.4 C",
      sku:"HW-Q930C/ZB",
      pregunta: "¿Los parlantes inalámbricos como se alimentan para que funcionen? Tienen cable??",
      respuestaCorrecta: "Cada parlante posee un cable independiente de alimentación.",
    },
    {
      id: 8,
      articulo:"Impresora A Color Multifunción Hp Deskjet Ink Advantage 3775 Con Wifi Blanca Y Azul 200v ",
      sku:"IMPRESORA_HP_DESKJET_3775_MULTIFUNCION_ESCANER_WIFI_COLOR__BLANCO",
      pregunta: "¿Los parlantes inalámbricos como se alimentan para que funcionen? Tienen cable??",
      respuestaCorrecta: "No es el modelo ni la marca ni el modelo mas recomendable para hacer ese tipo de impresiones. No obstante se puede utilizar para sublimar pero se hace bajo responsabilidad del usuario, ya que el uso de tinta que no sea la original invalida la garantía del fabricante, dado que puede afectar el óptimo funcionamiento del equipo, incrementar el desgaste de las piezas e incluso llegar a dañar el mismo.",
    },
    {
      id: 9,
      articulo:"Impresora A Color Multifunción Hp Deskjet Ink Advantage 2375",
      sku:"7WQ01A",
      pregunta: "¿Esta impresora sirve para imprimir con tinta comestible y papel de arroz?",
      respuestaCorrecta: "No creo que sea posible.",
    },
    {
      id: 10,
      articulo:"Notebook Lenovo Thinkbook 15-g2-itl Mineral Gray 15.6 , Intel Core I5 1135g7 8gb De Ram 256gb Ssd, Intel Iris Xe Graphics G7 80eus 1920x1080px",
      sku:"20VE00L4AR",
      pregunta: "¿La RAM es ampliable?",
      respuestaCorrecta: "Si es ampliable. Memoria máxima Hasta 40 GB (8 GB soldados + 32 GB SO-DIMM).",
    },
    {
      id:11,
      articulo:"Impresora A Color Multifunción Hp Deskjet Ink Advantage 2375",
      sku:"7WQ01A",
      pregunta: "¿Se puede conectar a una red 5.8Ghz? o solo acepta 2.4Ghz??",
      respuestaCorrecta: "No es compatible con conexión inalámbrica/wifi.",
    },
    {
      id: 12,
      articulo:"Notebook Asus X515EA slate gray 15.6, Intel Core i7 1165G7 8GB de RAM 512GB SSD, Intel Iris Xe Graphics G7 96EUs 1920x1080px FreeDOS",
      sku:"90NB0TY1-M011U0",
      pregunta: "¿Me podrían decir cuantos nucleos tiene?",
      respuestaCorrecta: "Posee 4 núcleos",
    },
    {
      id: 13,
      articulo:"Impresora Multifunción Hp Laserjet Pro 135w Con Wifi Blanca Y Negra 220v - 240v Mfp 135w",
      sku:"MLA908004755",
      pregunta: "¿Puede escanear una hoja y enviarla directamente a un mail que esté guardado de antemano? sin usar una pc?",
      respuestaCorrecta: "En la pagina del fabricante no especifica concretamente que tenga esta función disponible.",
    },
    {
      id: 14,
      articulo:"Notebook Asus Vivobook 15 X1502 azul 15.6, Intel Core i5 1240P 8GB de RAM 256GB SSD, Intel Iris Xe Graphics G7 80EUs Windows 11 Home",
      sku:"X1502ZA-EJ294W",
      pregunta: "¿el disco m2 esta soldado? o se puede cambiar en un futuro? Tiene lugar fisico para agregar un ssd?",
      respuestaCorrecta: "El disco de almacenamiento no esta soldado. Tiene soporte de almacenamiento hasta 1 Disco SSD M.2 PCIe.",
    },
    {
      id: 15,
      articulo:"Notebook Asus Vivobook 15 X1502 azul 15.6, Intel Core i5 1240P 8GB de RAM 256GB SSD, Intel Iris Xe Graphics G7 80EUs Windows 11 Home",
      sku:"X1502ZA-EJ294W",
      pregunta: "¿el disco m2 esta soldado? o se puede cambiar en un futuro? Tiene lugar fisico para agregar un ssd?",
      respuestaCorrecta: "El disco de almacenamiento no esta soldado. Tiene soporte de almacenamiento hasta 1 Disco SSD M.2 PCIe.",
    },
    {
      id: 16,
      articulo:"Mochila urbana ZÖM ZB-305B 26Le",
      sku:"ZB-305B",
      pregunta: "¿Entra una notebook de 15,6”?",
      respuestaCorrecta: "Es All-in-one Multiuso para Notebooks 15.6.",
    },
    {
      id: 17,
      articulo:"Notebook Dell Inspiron 3525 R5 5500u 16gb Ssd 480gb W11 Ct",
      sku:"2DJ8R",
      pregunta: "¿Que tipo de ficha es el cargador??",
      respuestaCorrecta: "Es la ficha con 3 espigas Tipo l",
    },



    // Puedes agregar más preguntas y respuestas aquí.
  ];
  
  export default Database;
  