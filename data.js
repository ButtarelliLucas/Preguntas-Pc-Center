// data.js

// Aquí creamos una matriz de objetos que contiene preguntas y respuestas predefinidas.
const Database = [
    {
      id: 1,
      articulo:"Generico",
      sku:"",
      pregunta: "¿Hacen factura A?",
      respuestaCorrecta: "Somos agentes de percepción de ingresos brutos. En caso de requerir factura A puede presentar percepciones, las cuales deberán ser abonadas para el envío correcto de su factura.",
    },
    {
      id: 2,
      articulo:"Generico",
      sku:"",
      pregunta: "¿Posee o tiene tecla Ñ?",
      respuestaCorrecta: "Las imagenes son de caracter ilustrativo, posee Ñ.",
    },
    {
      id: 3,
      articulo:"Generico",
      sku:"",
      pregunta: "¿Cual es la duracion de bateria?",
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
      articulo:"Notebook Dell Inspiron 3525 R5 5500u 16gb Ssd 480gb",
      sku:"2DJ8R",
      pregunta: "¿Que tipo de ficha es el cargador?",
      respuestaCorrecta: "Es la ficha con 3 espigas Tipo l",
    },
    {
      id: 18,
      articulo:"Notebook Dell Vostro 3405 Amd Ryzen 5 8gb Ssd 256gb 14 Hd",
      sku:"YG53W",
      pregunta: "¿Se puede editar fotos y videos?",
      respuestaCorrecta: "Solo se aceptan los medios de pago que aparecen en la sección Medios de Pago",
    },
    {
      id: 19,
      articulo:"Generico",
      sku:"",
      pregunta: "¿Se puede pagar en dolares? Medios de pago?",
      respuestaCorrecta: "Como poder se puede, no obstante, lo recomendable para edición seria que tengas una notebook con una grafica dedicada.",
    },
    {
      id: 20,
      articulo:"Generico",
      sku:"",
      pregunta: "¿Se puede pagar con 2 medios de pago, tarjeta de credito y transferencia?",
      respuestaCorrecta: "Podes hacer la transferencia a tu cuenta de MercadoPago asociada a la cuenta de MercadoLibre con la cual estas haciendo la consulta y a la hora de ofertar pagar con tarjeta de crédito mas dinero en cuenta.",
    },
    {
      id: 21,
      articulo:"Monitor Gamer Samsung Odyssey G3 S24ag30 Lcd 24 Negro 100v/240v",
      sku:"LS24AG30ANLXZB",
      pregunta: "¿Los 144hz son por display port ? O por HDMI?",
      respuestaCorrecta: "Es por ambos.",
    },
    {
      id: 22,
      articulo:"Notebook Asus I7 Vivobook 15 512gb Ssd 16gb Ram 4,7 Ghz",
      sku:"X1502ZA-EJ194W",
      pregunta: "¿Es posible ampliar la RAM? ¿Qué generación es la i7? ¿La placa de video soporta AI, PSD, AE?",
      respuestaCorrecta: "El tope máximo soportado para ampliar la memoria ram es 40gb. A cuanto quisieras ampliarlo? El procesador es i7 12va gen. En cuanto a los programas indicados, no debieras tener problemas con AI y PSD siempre y cuando los proyectos no sean a gran escala. AE (siempre y cuando estemos hablando de After Effects) es un programa que necesita de muchos recursos, para proyectos muy chicos no debieras de tener problemas, pero para la edición de video e imagen en general, lo recomendable es tener una grafica dedicada y no una integrada como es el caso de esta notebook.",
    },
    {
      id: 23,
      articulo:"Notebook Asus I7 Vivobook 15 512gb Ssd 16gb Ram 4,7 Ghz",
      sku:"X1502ZA-EJ194W",
      pregunta: "¿La placa de video soporta AI, PSD, AE?",
      respuestaCorrecta: "En cuanto a los programas indicados, no debieras tener problemas con AI y PSD siempre y cuando los proyectos no sean a gran escala. AE (siempre y cuando estemos hablando de After Effects) es un programa que necesita de muchos recursos, para proyectos muy chicos no debieras de tener problemas, pero para la edición de video e imagen en general, lo recomendable es tener una grafica dedicada y no una integrada como es el caso de esta notebook.",
    },
    {
      id: 24,
      articulo:"Impresora a color multifunción HP Deskjet Ink Advantage 2375 blanca y verde 200V - 240V",
      sku:"7WQ01A",
      pregunta: "¿Que tamaño tiene el equipo? ",
      respuestaCorrecta: " Las dimensiones son (An x F x Al) 425,2 x 304,1 x 149,1 mm. Dimensiones con bandejas elevadas (Ancho x Fondo x Alto)424,97 x 304,32 x 151,08 mm",
    },
    {
      id: 25,
      articulo:"Impresora a color multifunción HP Deskjet Ink Advantage 2375 blanca y verde 200V - 240V",
      sku:"7WQ01A",
      pregunta: "¿Que cartuchos utiliza esta impresora? ",
      respuestaCorrecta: "Los cartuchos que utiliza son los 667.",
    },
    {
      id: 26,
      articulo:"Teclado Bluetooth Wifi Philips K624 Pc iPad Tablet Macbook",
      sku:"SPK6624",
      pregunta: "¿En la foto no incluye la Ñ? ",
      respuestaCorrecta: "Las imagenes son de caracter ilustrativo, posee Ñ.",
    },
    {
      id: 27,
      articulo:"Cooler Cpu Coolermaster Hyper 212 Led Turbo Argb ",
      sku:"RR-212TK-18PA-R1",
      pregunta: "¿Viene con el montante / socket / zocalo am4 am5 ? ",
      respuestaCorrecta: "Los zócalos compatibles son: LGA2066, LGA2011-v3, LGA2011, LGA 1200, LGA1151, LGA1150, LGA1155, LGA1156, LGA1366, AM4, AM3 +, AM3, AM2 +, AM2, FM2 +, FM2, FM1",
    },
    {
      id: 28,
      articulo:"Impresora a color multifunción HP Deskjet Ink Advantage 2375 blanca y verde 200V - 240V",
      sku:"7WQ01A",
      pregunta: "¿La impresor viene con cartuchos / repuestos de tinta? ",
      respuestaCorrecta: "La impresora trae un juego de cartuchos de tinta de muestra que rinde aproximadamente un 50% de lo que rinde uno nuevo.",
    },
    {
      id: 29,
      articulo:"Generico",
      sku:"",
      pregunta: "¿Coordinar envio? ",
      respuestaCorrecta: "En el lado derecho debajo de donde dice Llega gratis **** podes ingresar tu código postal y va a indicarte el plazo de entrega del producto. También podes elegir en el momento de la compra la opción Acordar entrega con el comprador, y retirar por el local u organizar un envio por mensajería privada desde el chat de mensajería post compra.",
    },
    {
      id: 30,
      articulo:"Soundbar Pc 12w Gamer Led Rgb Trust Gxt620 Axon",
      sku:"24482",
      pregunta: "¿Los colores LED son modificables?? ",
      respuestaCorrecta: " No es posible modificar el color, tiene un efecto Rainbow (arcoíris) que va variando con el tiempo, solo podes apagarla y encenderla con un botón dedicado en la parte trasera de la barra",
    },
    {
      id: 31,
      articulo:"Soundbar Pc 12w Gamer Led Rgb Trust Gxt620 Axon",
      sku:"24482",
      pregunta: "¿Medidas? ",
      respuestaCorrecta: " • Altura del producto principal (en mm): 68 milímetros, Ancho del producto principal (en mm): 420 milímetros, Profundidad del producto principal (en mm): 78 milímetros, Peso total: 713 g, Peso de la unidad principal: 590 g",
    },
    {
      id: 32,
      articulo:"Liquid Cooler Master Masterliquid Ml360l V2 Argb White Ed",
      sku:"MLW-D36M-A18PW-RW",
      pregunta: "¿Compatible mother gabinete procesador? ",
      respuestaCorrecta: " Gabinete: Thermal Take Versa T35 TG, XPG Defender Pro . Procesadores: Intel 10ma gen. SOCKETS DE CPU COMPATIBLES: INTEL: LGA 1700, LGA2066, LGA2011-v3, LGA2011, LGA1200, LGA1151, LGA1150, LGA1155, LGA1156. AMD: AM4, AM3 +, AM3, AM2 +, AM2, FM2 +, FM2, FM1. Mother: MSI B 560M, ",
    },
    {
      id: 33,
      articulo:"Monitor Lenovo D22e-20 22'' Full Hd Hdmi Vga",
      sku:"66D2KAC6AR",
      pregunta: "¿Cuanto mide de alto largo con base sin base?",
      respuestaCorrecta: " Altura (sin base) 29.2cm, Ancho (sin base) 49.3cm, Altura del dispositivo (con soporte) 	367.4mm, Profundidad dispositivo (con soporte) 	209.5mm",
    },
    {
      id: 34,
      articulo:"Impresora Multifunción Epson Ecotank L3250 S Contínuo Wifi C",
      sku:"C11CJ67304",
      pregunta: "¿Que tipo de papel Admite esta impresora?",
      respuestaCorrecta: "Te adjunto la descripción de los papeles que maneja: Tamaños de Papel Soportados:Estándar: A4, Carta, Oficio (21,59 cm x 35,56 cm), México-Oficio (21,59 cm x 34,04 cm), Oficio 9 (21,49 cm x 31,5 cm), Folio (21,59 cm x 33,02 cm), Ejecutivo, Media Carta, A6 - Foto: 10 cm x 15 cm (4” x 6”), 16:9 wide (10,2 cm x 18,1 cm), 13 cm x 18 cm (5” x 7”) - Sobres: #10 Definido por el usuario: 54 mm x 86 mm - 215.9 mm x 1.200 mm - Tamaño de Papel Máximo: 215.9 mm x 1.200 mm - Tipos de Papel: Papel normal, Papel especial Epson (Photo Glossy/Semi-gloss, Presentation Paper Matte, High Quality Ink Jet Paper y Sobres) - Capacidad de Papel: Alimentación trasera: hasta 100 hojas (A4/Carta)",
    },
    {
      id: 35,
      articulo:"Joystick Gamepad Trust Gxt 542 Muta Wireless Multiplataforma",
      sku:"24790",
      pregunta: "¿Sirve para ps4 y ps5?",
      respuestaCorrecta: "Dispositivos compatibles: pc, laptop, gaming console, smartphone, tablet - Consolas Compatibles: Nintendo Switch - Plataformas de software compatibles: WIndows, Android, iOS",
    },
    {
      id: 36,
      articulo:"Audífonos Gamer Trust Cobra Gxt 408 Pc, Ps4, Switch Y Xbox",
      sku:"23029",
      pregunta: "¿Son para escuchar musica?",
      respuestaCorrecta: "Pueden usarse para escuchar musica, tienen un microfono incorporado que puede ser desmontado.",
    },
    {
      id: 37,
      articulo: "Notebook Asus I7 Vivobook 15 512gb Ssd 16gb Ram 4,7 Ghz",
      sku: "X1502ZA-EJ194W",
      pregunta: "Se puede ocultar la camara?",
      respuestaCorrecta: "Es posible ocultar la camara.",
    },
    {
      id: 38,
      articulo: "Notebook Asus I7 Vivobook 15 512gb Ssd 16gb Ram 4,7 Ghz",
      sku: "X1502ZA-EJ194W",
      pregunta: "Que generacion de Intel I7 tiene?",
      respuestaCorrecta: "Es Intel® Core™ i7 de 12va Generación",
    },
    {
      id: 39,
      articulo: "Notebook Lenovo V-series V15-g2-itl Iron Gray 15.6 , Intel Core I7 1165g7 8gb De Ram 1tb Hdd, Intel Iris Xe Graphics G7 96eus",
      sku: "82KB00F7AR",
      pregunta: "¿Tiene posibilidades de agregar un segundo disco? SATA o m.2? ",
      respuestaCorrecta: "Cuenta con soporte de almacenamiento de hasta dos discos, 1x HDD de 2,5 + 1x SSD M.2" ,
    },
    {
      id: 40,
      articulo: "Notebook Lenovo V15 Ryzen 5 5500u 16gb Ssd 1tb Fhd W11h",
      sku: "82KD00EPSP",
      pregunta: "¿Es retroiluminado el teclado?",
      respuestaCorrecta: "El teclado es Español (LA), no retroiluminado.",
    },
    {
      id: 41,
      articulo: "Generico",
      sku: "",
      pregunta: "¿Despachan por correo Argentino? ",
      respuestaCorrecta: "Nosotros enviamos por MercadoEnvíos y MercadoEnvíos es quien decide quien despacha el producto",
    },
    {
      id: 42,
      articulo: "Combo Cartuchos Hp 954 Colores + Negro Originales 8210 8710",
      sku: " COMBO_CARTUCHOS_HP_954_COLORES__NEGRO_ORIGINALES_8210_8710",
      pregunta: "Son compatibles con Officejet 7740?",
      respuestaCorrecta: "Impresora HP OfficeJet 7740, Impresora HP OfficeJet Pro 8210, Impresora HP OfficeJet Pro 8710, Impresora HP OfficeJet Pro 8720, Impresora HP OfficeJet Pro 8730",
    },
    {
      id: 43,
      articulo: "Microsoft Personal 365 Office Word Excel Outlook Power Point",
      sku: "QQ2-00008-ESD",
      pregunta: "¿Es fisico o es por descarga virtual?",
      respuestaCorrecta: "Se descarga y activa con las instrucciones que vienen dentro del producto.",
    },
    {
      id: 44,
      articulo: "Concentrador Hub Cooler Master Masterfan Argb Pwm 6 Puertos",
      sku:"MFX-ZHHN-1NNN6-R1",
      pregunta: "¿Compatibilidad, Compatible?",
      respuestaCorrecta: "Gabinetes compatible: Thermaltake V250 TG ARGB,",
    },
    {
      id: 45,
      articulo: "Liquid Cooler Master Masterliquid Ml360l V2 Argb Intel Amd",
      sku: "MLW-D36M-A18PA-R2",
      pregunta: "¿Viene con líquido? ¿o se compra aparte?",
      respuestaCorrecta: "Incluye el liquido.",
    },
    {
      id: 46,
      articulo: "",
      sku: "",
      pregunta: "",
      respuestaCorrecta: "",
    },
    {
      id: 47,
      articulo: "",
      sku: "",
      pregunta: "",
      respuestaCorrecta: "",
    },
    {
      id: 48,
      articulo: "",
      sku: "",
      pregunta: "",
      respuestaCorrecta: "",
    },
    {
      id: 49,
      articulo: "",
      sku: "",
      pregunta: "",
      respuestaCorrecta: "",
    },
    {
      id: 50,
      articulo: "",
      sku: "",
      pregunta: "",
      respuestaCorrecta: "",
    }


    // Puedes agregar más preguntas y respuestas aquí.
  ];
  
  export default Database;
  