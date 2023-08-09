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
      respuestaCorrecta: "No es el modelo ni la marca mas recomendable para hacer ese tipo de impresiones. No obstante se puede utilizar para sublimar pero se hace bajo responsabilidad del usuario, ya que el uso de tinta que no sea la original invalida la garantía del fabricante, dado que puede afectar el óptimo funcionamiento del equipo, incrementar el desgaste de las piezas e incluso llegar a dañar el mismo.",
    },
    {
      id: 9,
      articulo:"Impresora a Color Multifunción Hp Deskjet Ink Advantage 2375 blanca y verde 200V - 240V",
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
      articulo:"Impresora a Color Multifunción Hp Deskjet Ink Advantage 2375 blanca y verde 200V - 240V",
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
      articulo: "Impresora A Color Multifunción Epson Ecotank L3210 Negra 220v",
      sku: "C11CJ68303",
      pregunta: "La impresora viene con algun juego de tintas?",
      respuestaCorrecta: "La impresora trae un juego de tintas de muestra lleno.",
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
      respuestaCorrecta: "Como poder se puede, no obstante, lo recomendable para edición seria que tengas una notebook con una grafica dedicada.",
    },
    {
      id: 19,
      articulo:"Generico",
      sku:"",
      pregunta: "¿Se puede pagar en dolares? Medios de pago?",
      respuestaCorrecta: "Solo se aceptan los medios de pago que aparecen en la sección Medios de Pago.",
    },
    {
      id: 20,
      articulo:"Generico",
      sku:"",
      pregunta: "¿Se puede pagar con 2 medios de pago, (tarjeta de credito y transferencia)?",
      respuestaCorrecta: "Podes hacer la transferencia a tu cuenta de MercadoPago asociada a la cuenta de MercadoLibre con la cual estas haciendo la consulta, y a la hora de ofertar, pagar con tu tarjeta de crédito más el dinero en cuenta. Esto es siempre y cuando la compra se realice por MercadoLibre.",
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
      pregunta: "¿La gráfica / placa de video soporta AI, PSD, AE (Adobe Ilustrator, Photoshop, After Effects?",
      respuestaCorrecta: "En cuanto a los programas indicados, no debieras tener problemas con AI y PSD siempre y cuando los proyectos no sean a gran escala. En cuanto a AE (si es que estamos hablando de After Effects) es un programa que necesita de muchos recursos, para proyectos muy chicos no debieras de tener problemas, pero para la edición de video e imagen en general, lo recomendable es tener una gráfica dedicada y no una integrada como es el caso de esta notebook.",
    },
    {
      id: 24,
      articulo:"Impresora a Color Multifunción Hp Deskjet Ink Advantage 2375 blanca y verde 200V - 240V",
      sku:"7WQ01A",
      pregunta: "¿Que tamaño tiene el equipo? ",
      respuestaCorrecta: " Las dimensiones son (An x F x Al) 425,2 x 304,1 x 149,1 mm. Dimensiones con bandejas elevadas (Ancho x Fondo x Alto) 424,97 x 304,32 x 151,08 mm",
    },
    {
      id: 25,
      articulo:"Impresora a Color Multifunción Hp Deskjet Ink Advantage 2375 blanca y verde 200V - 240V",
      sku:"7WQ01A",
      pregunta: "¿Que cartuchos utiliza esta impresora? ",
      respuestaCorrecta: "Los cartuchos que utiliza son los 667.",
    },
    {
      id: 26,
      articulo:"Teclado Bluetooth Wifi Philips K624 Pc iPad Tablet Macbook",
      sku:"SPK6624",
      pregunta: "¿En la foto no incluye la tecla Ñ? ",
      respuestaCorrecta: "Las imagenes son de caracter ilustrativo, posee Ñ.",
    },
    {
      id: 27,
      articulo:"Cooler Cpu Coolermaster Hyper 212 Led Turbo Argb ",
      sku:"RR-212TK-18PA-R1",
      pregunta: "¿Viene con el montante / socket / zócalo am4 am5 ? ",
      respuestaCorrecta: "Los zócalos compatibles son: LGA2066, LGA2011-v3, LGA2011, LGA 1200, LGA1151, LGA1150, LGA1155, LGA1156, LGA1366, AM4, AM3 +, AM3, AM2 +, AM2, FM2 +, FM2, FM1",
    },
    {
      id: 28,
      articulo:"Impresora a Color Multifunción Hp Deskjet Ink Advantage 2375 blanca y verde 200V - 240V",
      sku:"7WQ01A",
      pregunta: "¿La impresora viene con cartuchos / repuestos de tinta? ",
      respuestaCorrecta: "La impresora trae un juego de cartuchos de tinta de muestra que rinde aproximadamente un 50% de lo que rinde uno nuevo.",
    },
    {
      id: 29,
      articulo:"Generico",
      sku:"",
      pregunta: "¿Coordinar envio? ",
      respuestaCorrecta: "En el lado derecho debajo de donde dice 'Llega gratis ****' podes ingresar tu código postal y va a indicarte el plazo de entrega del producto. También podes elegir en el momento de la compra la opción 'Acordar entrega con el comprador', y retirar por el local u organizar un envio por mensajería privada desde el chat de mensajería post compra.",
    },
    {
      id: 30,
      articulo:"Soundbar Pc 12w Gamer Led Rgb Trust Gxt620 Axon",
      sku:"24482",
      pregunta: "¿Los colores LED son modificables?",
      respuestaCorrecta: " No es posible modificar el color, tiene un efecto Rainbow (arcoíris) que varia con el tiempo, solo podes apagarla o encenderla con un botón dedicado en la parte trasera de la barra",
    },
    {
      id: 31,
      articulo:"Soundbar Pc 12w Gamer Led Rgb Trust Gxt620 Axon",
      sku:"24482",
      pregunta: "¿Medidas? ",
      respuestaCorrecta: " Altura del producto principal (en mm): 68 milímetros, Ancho del producto principal (en mm): 420 milímetros, Profundidad del producto principal (en mm): 78 milímetros, Peso total: 713 g, Peso de la unidad principal: 590 g",
    },
    {
      id: 32,
      articulo:"Liquid Cooler Master Masterliquid Ml360l V2 Argb White Ed",
      sku:"MLW-D36M-A18PW-RW",
      pregunta: "¿Compatible mother gabinete procesador? ",
      respuestaCorrecta: " Gabinetes: Thermal Take Versa T35 TG, XPG Defender Pro . Procesadores: Intel 10ma gen. SOCKETS DE CPU COMPATIBLES: INTEL: LGA 1700, LGA2066, LGA2011-v3, LGA2011, LGA1200, LGA1151, LGA1150, LGA1155, LGA1156. AMD: AM5, AM4, AM3 +, AM3, AM2 +, AM2, FM2 +, FM2, FM1. Mother: MSI B 560M, ",
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
      pregunta: "¿Que tipo de papel admite esta impresora?",
      respuestaCorrecta: "Te adjunto la descripción de los papeles que maneja: Tamaños de Papel Soportados:Estándar: A4, Carta, Oficio (21,59 cm x 35,56 cm), México-Oficio (21,59 cm x 34,04 cm), Oficio 9 (21,49 cm x 31,5 cm), Folio (21,59 cm x 33,02 cm), Ejecutivo, Media Carta, A6 - Foto: 10 cm x 15 cm (4” x 6”), 16:9 wide (10,2 cm x 18,1 cm), 13 cm x 18 cm (5” x 7”) - Sobres: #10 Definido por el usuario: 54 mm x 86 mm - 215.9 mm x 1.200 mm - Tamaño de Papel Máximo: 215.9 mm x 1.200 mm - Tipos de Papel: Papel normal, Papel especial Epson (Photo Glossy/Semi-gloss, Presentation Paper Matte, High Quality Ink Jet Paper y Sobres) - Capacidad de Papel: Alimentación trasera: hasta 100 hojas (A4/Carta)",
    },
    {
      id: 35,
      articulo:"Joystick Gamepad Trust Gxt 542 Muta Wireless Multiplataforma",
      sku:"24790",
      pregunta: "¿Sirve para ps4 y ps5?",
      respuestaCorrecta: "Dispositivos compatibles: pc, notebook, gaming console, smartphone, tablet - Consolas Compatibles: Nintendo Switch - Plataformas de software compatibles: WIndows, Android, iOS",
    },
    {
      id: 36,
      articulo:"Audífonos Gamer Trust Cobra Gxt 408 Pc, Ps4, Switch Y Xbox",
      sku:"23029",
      pregunta: "¿Son para escuchar musica?",
      respuestaCorrecta: "Pueden usarse para escuchar música, tienen un micrófono incorporado que puede ser desmontado.",
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
      pregunta: "¿Tiene posibilidades de agregar un segundo disco? SATA o M.2? ",
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
      respuestaCorrecta: "Nosotros enviamos por MercadoEnvíos, y MercadoEnvíos es quien decide como despachar el producto",
    },
    {
      id: 42,
      articulo: "Combo Cartuchos Hp 954 Colores + Negro Originales 8210 8710",
      sku: " COMBO_CARTUCHOS_HP_954_COLORES__NEGRO_ORIGINALES_8210_8710",
      pregunta: "¿Son compatibles con Officejet 7740?",
      respuestaCorrecta: "Impresora HP OfficeJet 7740, Impresora HP OfficeJet Pro 8210, Impresora HP OfficeJet Pro 8710, Impresora HP OfficeJet Pro 8720, Impresora HP OfficeJet Pro 8730",
    },
    {
      id: 43,
      articulo: "Microsoft Personal 365 Office Word Excel Outlook Power Point",
      sku: "QQ2-00008-ESD",
      pregunta: "¿Es fisico o es por descarga virtual?",
      respuestaCorrecta: "Se descarga del sitio web oficial de Microsoft Office 365 y activa con las instrucciones que vienen dentro del producto.",
    },
    {
      id: 44,
      articulo: "Concentrador Hub Cooler Master Masterfan Argb Pwm 6 Puertos",
      sku:"MFX-ZHHN-1NNN6-R1",
      pregunta: "¿Compatibilidad, Compatible?",
      respuestaCorrecta: "Gabinetes compatibles: Thermaltake V250 TG ARGB,",
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
      articulo: "Mouse Microsoft Modern Mobile Inalambrico Bluetooth Wireless",
      sku: "KTF-00016",
      pregunta: "Es compatible con Mac con/sin puerto usb?",
      respuestaCorrecta: "En la pagina del fabricante no especifica el funcionamiento con otros sistemas operativos que no sean Windows, y se empareja vía bluetooth. No podemos garantizar el correcto funcionamiento del mismo en otros sistemas operativos.",
    },
    {
      id: 47,
      articulo: "Notebook Hp 440g8 I7 8gb 512 Ssd 14 Windows 10 Pro",
      sku: "4S057LT",
      pregunta: "¿que generacion es el procesador?",
      respuestaCorrecta: "Es un Intel® Core™ i7 de 11.ª generación",
    },
    {
      id: 48,
      articulo: "General Ssd M.2 2230 Pcie Nvme Oem",
      sku: "",
      pregunta: " ¿Es compatible con cualquier pc que tenga puerto m2?",
      respuestaCorrecta: "Tiene que poseer un puerto M.2 conectado al bus PCI-Express y compatible con el factor de forma 2230, o en su defecto, poseer un adaptador para montar Ssd 2230. ",
    },
    {
      id: 49,
      articulo: "Mouse Trust Bayo Ergonómico Vertical Usb Ecológico",
      sku: "Mouse Trust Bayo Ergonómico Vertical Usb Ecológico",
      pregunta: "Viene para la mano izquierda?",
      respuestaCorrecta: "Este modelo solo viene para mano derecha únicamente.",
    },
    {
      id: 51,
      articulo: "Cooler Master Masterfan Mf120 S2 Argb Gamer 1200 Rpm 120 Mm",
      sku: "MFW-B2DN-12NFA-S2",
      pregunta: "Estos fan son compatibles con el Hub ID Cooling? ",
      respuestaCorrecta: "El Hub Id Cooling es compatible con coolers ARGB que posean ficha de alimentación PWM y ficha ARGB 3 Pines, este cooler en particular no seria compatible.",
    },
    {
      id: 52,
      articulo: "Monitor Smart Samsung Flat M7 32' 4k 4 Ms Hdmi Usb Tizon",
      sku: "LS32BM700ULXZB",
      pregunta: "¿Me recomendas este o el Samsung S27A70? En general necesito monitor 4k para uso mixto; trabajo, juegos, videos, edicion?",
      respuestaCorrecta: "No hay diferencias tan grandes como para destacar tanto, el tiempo de respuesta en el s27a70 es de 3ms menor, tiene 2-bit más bits por canal de color. En el M7 32'' tenes una tasa de contraste estático 3x mayor, es 32mm mas fino, 16.6% mas grande la pantalla. Ambos son de 60Hz.",
    },
    {
      id: 53,
      articulo: "Generico",
      sku: "",
      pregunta: "¿Recibe / acepta dolares o cheque electronico como medio de pago?",
      respuestaCorrecta: "Por MercadoLibre solo es posible pagar con los medios de pago aceptados por la plataforma.",
    },
    {
      id: 54,
      articulo: "Generico",
      sku: "",
      pregunta: "Ya te hice una compra, necesito si me podrás hacer una Factura A antes de enviarla",
      respuestaCorrecta: "Hola, si ya realizó la compra, cualquier consulta o duda debe resolverla por la mensajería privada de la compra de dicho producto.",
    },
    {
      id: 55,
      articulo: "Cooler Cpu Cooler Master Hyper 212",
      sku: "RR-212S-20PC-R2",
      pregunta: "¿Cual es el TDP? ¿Hasta cuántos Watts sirve?",
      respuestaCorrecta: " Hasta 150w TDP. ",
    },
    {
      id: 56,
      articulo: "Cooler Master Masterfan Mf120 S2 Argb Gamer 1200 Rpm 120 Mm",
      sku: "MFW-B2DN-12NFA-S2",
      pregunta: "¿Es RGB o ARGB ?  ¿Se puede poner en color blanco ? ",
      respuestaCorrecta: "Es ARGB, el blanco se crea con la sumatoria de R G y B encendidos al 100%.",
    },
    {
      id: 57,
      articulo: "Generico",
      sku: "",
      pregunta: "Tengo problemas con una compra, hice / quiero hacer un reclamo, necesito hacer / hice una devolución.",
      respuestaCorrecta: "Si la compra la realizó a nuestra cuenta comuníquese con la mensajería privada post compra desde el artículo que compró, en la sección de compras de su cuenta de MercadoLibre para que podamos darle el seguimiento correspondiente.",
    },
    {
      id: 58,
      articulo: "Notebook Hp 240 G7 Intel N4020 8gb Hdd 1tb Led 14 Win10",
      sku: "2R0U2LT",
      pregunta: "¿Al dispositivo se le puede colocar un disco M.2?",
      respuestaCorrecta: "No tiene la posibilidad de colocarle un disco M.2.",
    },
    {
      id: 59,
      articulo: "Impresora A Color Multifunción Hp Smart Tank 750 Con Wifi Blanca Y Gris 100v/240v",
      sku: "6UU47A",
      pregunta: "Es compatible con Mac?",
      respuestaCorrecta: "Es compatible con Mac.",
    },
    {
      id: 60,
      articulo: "Impresora A Color Multifunción Epson Ecotank L3210 Negra 220v",
      sku: "C11CJ68303",
      pregunta: "¿Se puede usar para sublimar?",
      respuestaCorrecta: "Se puede utilizar para sublimar pero se hace bajo responsabilidad del usuario, ya que el uso de tinta que no sea la original invalida la garantía del fabricante, dado que puede afectar el óptimo funcionamiento del equipo, incrementar el desgaste de las piezas e incluso llegar a dañar el mismo.",
    },
    {
      id: 61,
      articulo: "Generico",
      sku: "",
      pregunta: "¿Realmente con tarjeta XXXXX tengo 12 cuotas sin interes? ",
      respuestaCorrecta: "Nosotros no definimos las promociones con los distintos medios de pago. Eso es algo que establece MercadoLibre y puede variar con el tiempo. Si MercadoLibre te da la opción de poder pagar en 12 cuotas sin interés, entonces así debe ser.",
    },
    {
      id: 62,
      articulo: "Impresora A Color Multifunción Hp Smart Tank 750 Con Wifi Blanca Y Gris 100v/240v",
      sku: "6UU47A",
      pregunta: "¿Que tintas utiliza esta impresora?",
      respuestaCorrecta: "Utiliza tintas GT52 y GT53",
    },
    {
      id: 63,
      articulo: "Generico",
      sku: "",
      pregunta: "Hay posibilidad de que apliquen un descuento y sea sin factura?",
      respuestaCorrecta: "Los precios en Mercadolibre ya tienen descuentos aplicados y son los publicados. No vendemos sin factura.",
    },
    {
      id: 64,
      articulo: "Generico",
      sku: "",
      pregunta: "¿Es nuevo? ¿Tiene / Viene con garantía?",
      respuestaCorrecta: "Todos los productos son nuevos y con garantía del fabricante",
    },
    {
      id: 65,
      articulo: "Samsung Odyssey Lc49g95ts 49 - Negro - 100v/240v",
      sku: "LC49G95TSSLXZB",
      pregunta: "¿Sabes si es vesa compatible?",
      respuestaCorrecta: "Es VESA compatible. ",
    },
    {
      id: 66,
      articulo: "Cable 24 Pin Mb P/ Fuente Modular Cooler Master Minería",
      sku: "CEMB00XXBK2",
      pregunta: "¿Sirve para una fuente XXXXXXXXXXX (no Cooler Master)?",
      respuestaCorrecta: " No sabría decirte, mas allá del conector habría que ver si el mapeado de los pines es el mismo. Este articulo fue creado originalmente para las fuentes modulares de la serie MWE Gold Cooler Master",
    },
    {
      id: 67,
      articulo: "Lector Código De Barras 3nstar Sc310bt 1d Wireless Bluetooth",
      sku: "3NS-POS-SC310BT",
      pregunta: "Al leer un código de barra de un producto, ¿edita una casilla de excel y presiona Enter?.",
      respuestaCorrecta: "La acción por defecto es escanear el código y 'presionar Enter', no obstante, en el manual posee también otras opciones o configuraciones que pueden asignarse siguiendo los pasos indicados en el mismo",
    },
    {
      id: 68,
      articulo: "Generico",
      sku: "",
      pregunta: "¿Pueden hacer factura B o C, y agregar una leyenda que les paso cuando lo compre?",
      respuestaCorrecta: "Podemos hacer Factura A o B, y si. No habría ningún inconveniente. Tenes que pedirlo luego de hacer la compra por la mensajería privada del producto que compraste en el chat con el vendedor.",
    },
    {
      id: 69,
      articulo: "Generico",
      sku: "",
      pregunta: "No puedo agregar al carrito (Problema con Ahora 12)",
      respuestaCorrecta: "Los productos que tienen habilitada la promoción de Ahora 12 deben tener algún inconveniente interno con la función de carrito de compras propia de MercadoLibre y desconocemos el propósito real. Si no tienes la necesidad de usar Ahora 12, podemos sacarlo momentáneamente para que puedas hacer tu compra agregando al carrito, ya que de esa forma volvería a aparecer el botón. En caso contrario, si necesitas hacer uso de esta promoción (Ahora 12), la única forma de que puedas ofertar será de forma individual para cada producto, sin la posibilidad de comprar haciendo uso del carrito.",
    },
    {
      id: 70,
      articulo: "Cooler Cpu Cooler Master Hyper H411r Led White Amd Intel",
      sku: "RR-H411-20PW-R1",
      pregunta: "Es compatible con procesador XXXXXX / el Mother XXXXXX",
      respuestaCorrecta: "Es compatible con el micro que me consultas. En cuanto al mother te adjunto las medidas (Dimensiones: 102 x 83.4 x 136mm.) para que puedas medirlo por tu cuenta, no obstante es muy probable que no tengas ningún problema",
    },
    {
      id: 71,
      articulo: "Notebook Dell Vostro 5410 I5 11320h 16gb 480gb Fhd 14 W11p",
      sku: "T5WHJ",
      pregunta: "¿Se le puede agregar un ssd M.2?",
      respuestaCorrecta: "Hola, solo posee un slot de almacenamiento M2 disponible que, en este caso, ya viene ocupado con el SSD mencionado en la descripción (480gb), solo se puede intercambiar el mismo, pero no es posible agregar mas unidades de almacenamiento.",
    },
    {
      id: 72,
      articulo: "Mouse Bluetooth Recargable Trust Puck",
      sku: "24125",
      pregunta: "¿Este mouse puede conectarse vía bluetooth? ¿O requiere sí o sí puerto USB?",
      respuestaCorrecta: "Puede conectarse a cualquier dispositivo vía Bluetooth.",
    },
    {
      id: 73,
      articulo: "Generico",
      sku: "",
      pregunta: "Pago con transferencia",
      respuestaCorrecta: "Podes hacer la transferencia a tu cuenta de MercadoPago asociada a la cuenta de MercadoLibre con la cual estas haciendo la consulta, y ofertar usando dinero en cuenta en el momento del pago.",
    },
    {
      id: 74,
      articulo: "Notebook Hp 240 G7 Intel N4020 8gb 500gb Led 14 Win10 Ct",
      sku: "2R0U2LT",
      pregunta: "¿Reproduce películas o videos 4k?",
      respuestaCorrecta: "La resolución de la pantalla es de 1366x768, por mas que intentes reproducir videos en 4k la resolución máxima es esa. Y aunque la pantalla no pueda mostrar la resolución completa, la notebook aún necesitará recursos para decodificar y escalar el video, lo que podría afectar el rendimiento general. No es recomendable si la computadora no posee una tarjeta grafica dedicada.",
    },
    {
      id: 75,
      articulo: "Generico",
      sku: "",
      pregunta: "En que zona se encuentran / están / Donde se puede pasar a retirar? , Retiros en persona",
      respuestaCorrecta: "Estamos en Villa del Parque, cerca de Av. San Martin y Av. J. B. Justo.",
    },
    {
      id: 76,
      articulo: "",
      sku: "",
      pregunta: "",
      respuestaCorrecta: "",
    },
    {
      id: 77,
      articulo: "",
      sku: "",
      pregunta: "",
      respuestaCorrecta: "",
    },
    {
      id: 78,
      articulo: "",
      sku: "",
      pregunta: "",
      respuestaCorrecta: "",
    },
    {
      id: 79,
      articulo: "",
      sku: "",
      pregunta: "",
      respuestaCorrecta: "",
    },
    {
      id: 80,
      articulo: "",
      sku: "",
      pregunta: "",
      respuestaCorrecta: "",
    },
    {
      id: 81,
      articulo: "",
      sku: "",
      pregunta: "",
      respuestaCorrecta: "",
    },
    {
      id: 82,
      articulo: "",
      sku: "",
      pregunta: "",
      respuestaCorrecta: "",
    },
    {
      id: 83,
      articulo: "",
      sku: "",
      pregunta: "",
      respuestaCorrecta: "",
    },
    {
      id: 84,
      articulo: "",
      sku: "",
      pregunta: "",
      respuestaCorrecta: "",
    },
    {
      id: 85,
      articulo: "",
      sku: "",
      pregunta: "",
      respuestaCorrecta: "",
    },
    {
      id: 86,
      articulo: "",
      sku: "",
      pregunta: "",
      respuestaCorrecta: "",
    },
    {
      id: 87,
      articulo: "",
      sku: "",
      pregunta: "",
      respuestaCorrecta: "",
    },
    {
      id: 88,
      articulo: "",
      sku: "",
      pregunta: "",
      respuestaCorrecta: "",
    },
    {
      id: 89,
      articulo: "",
      sku: "",
      pregunta: "",
      respuestaCorrecta: "",
    },
    {
      id: 90,
      articulo: "",
      sku: "",
      pregunta: "",
      respuestaCorrecta: "",
    },
    {
      id: 91,
      articulo: "",
      sku: "",
      pregunta: "",
      respuestaCorrecta: "",
    },
    {
      id: 92,
      articulo: "",
      sku: "",
      pregunta: "",
      respuestaCorrecta: "",
    },
    {
      id: 93,
      articulo: "",
      sku: "",
      pregunta: "",
      respuestaCorrecta: "",
    },
    {
      id: 94,
      articulo: "",
      sku: "",
      pregunta: "",
      respuestaCorrecta: "",
    },
    {
      id: 95,
      articulo: "",
      sku: "",
      pregunta: "",
      respuestaCorrecta: "",
    },
    {
      id: 96,
      articulo: "",
      sku: "",
      pregunta: "",
      respuestaCorrecta: "",
    },
    {
      id: 97,
      articulo: "",
      sku: "",
      pregunta: "",
      respuestaCorrecta: "",
    },
    {
      id: 98,
      articulo: "",
      sku: "",
      pregunta: "",
      respuestaCorrecta: "",
    },
    {
      id: 99,
      articulo: "",
      sku: "",
      pregunta: "",
      respuestaCorrecta: "",
    },
    {
      id: 100,
      articulo: "",
      sku: "",
      pregunta: "",
      respuestaCorrecta: "",
    }
    


    // Puedes agregar más preguntas y respuestas aquí.
  ];
  
  export default Database;
  