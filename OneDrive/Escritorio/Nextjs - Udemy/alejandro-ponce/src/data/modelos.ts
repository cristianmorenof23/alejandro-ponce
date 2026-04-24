export const modelos = [
  {
    slug: "tera",
    nombre: "Volkswagen Tera",
    descripcion:
      "Con el Tera sos protagonista. Nuestro nuevo SUVW viene a dejar su impronta con estilo y personalidad. Elegante, potente y conectado, está diseñado para quienes disfrutan cada trayecto con estilo.",
    imagenes: [
      "/tera_modelo_1.webp",
      "/tera_modelo_2.webp",
      "/tera_modelo_3.webp",
      "/tera_modelo_4.webp",
      "/tera_modelo_5.webp",
      "/tera_modelo_6.webp",
    ],

    // Características destacadas (features)
    features: [
      { icon: "FaCarSide", title: "Motor 170 TSI" },
      { icon: "FaBolt", title: "VW Play 10''" },
      { icon: "FaShieldAlt", title: "Seguridad avanzada" },
      { icon: "FaLightbulb", title: "Faros VW LED" },
    ],

    // Versiones completas
    versiones: [
      {
        nombre: "Trend",
        descripcion:
          "Una versión práctica, eficiente y con el equipamiento esencial de Volkswagen.",
        imagen: "/v1.webp",
        specs: [
          "Motor MSI 110CV",
          "Transmisión Manual de 5 velocidades",
          "6 Airbags",
          'Llantas de acero de 16"',
          'Sistema Multimedia "VW Play" 10”',
          'Tablero Digital Cockpit 8"',
          "Sensores de estacionamiento traseros",
        ],
      },
      {
        nombre: "Comfort",
        descripcion:
          "Comodidad y conectividad en un equilibrio perfecto. Ideal para quienes disfrutan cada viaje.",
        imagen: "/v2.webp",
        specs: [
          "Motor 170TSI con transmisión Automática Tiptronic",
          "Volante multifunción de cuero con levas al volante",
          'Llantas de aleación de 16"',
          'Sistema Multimedia "VW Play" 10” Conectada',
          "Mi VW Connect",
          'Faros principales "VW LED"',
        ],
      },
      {
        nombre: "High",
        descripcion:
          "Mayor tecnología, diseño y confort en un SUV pensado para tus aventuras diarias.",
        imagen: "/v3.webp",
        specs: [
          "Control de velocidad crucero adaptativo (ACC)",
          "Frenado autónomo de emergencia (AEB)",
          'Sistema de acceso y arranque sin llave "Keyless"',
          'Llantas de aleación de 17"',
          "Asientos tapizados en cuero ecológico",
          'Tablero digital “Active Info Display” 10"',
          "Cámara de visión trasera",
        ],
      },
      {
        nombre: "Outfit",
        descripcion:
          "La versión más exclusiva del Tera. Elegancia, deportividad y detalles que marcan la diferencia.",
        imagen: "/v4.webp",
        specs: [
          "Asistente de mantenimiento de carril",
          "Detector de punto ciego con asistente trasero de tráfico cruzado",
          "Cargador inalámbrico para celular",
          "Carcasas de espejos y manijas en color negro",
          'Asientos tapizados en cuero ecológico "Outfit"',
          'Llantas de aleación de 17" oscurecidas',
          "Techo bitono en color negro",
        ],
      },
    ],

    // Ficha técnica
    ficha: [
      { titulo: "Motor", detalle: "170 TSI / 110 CV" },
      { titulo: "Transmisión", detalle: "Manual o Tiptronic (según versión)" },
      { titulo: "Consumo", detalle: "6,4 L/100km combinado" },
      { titulo: "Baúl", detalle: "350 litros" },
      { titulo: "Faros", detalle: "VW LED con firma lumínica distintiva" },
      { titulo: "Conectividad", detalle: 'VW Play 10" + Active Info Display' },
      { titulo: "Seguridad", detalle: "6 Airbags + Control de estabilidad (ESC)" },
    ],

    // Contacto y redes
    contacto: {
      whatsapp: "https://wa.me/3515607232",
      instagram: "https://instagram.com/aleponceautohaus",
      facebook: "https://www.facebook.com/profile.php?id=61566892732814",

      ubicacion:
        "https://maps.google.com/?q=Auto+Haus+Volkswagen+Castro+Barros",
    },
  },
  {
    slug: "t-cross",
    nombre: "Volkswagen T-Cross",
    descripcion:
      "El SUVW que lo tiene todo. Diseño renovado, tecnología de punta y confort para el día a día.",
    imagenes: [
      "/tcross_1.webp",
      "/tcross_2.webp",
      "/tcross_3.webp",
      "/tcross_4.webp",
      "/tcross_5.webp",
    ],
    features: [
      { icon: "FaCarSide", title: "Motor 170 TSI / 200 TSI" },
      { icon: "FaLightbulb", title: "Faros VW LED + Light Strip" },
      { icon: "FaPlay", title: "Sistema Multimedia VW Play 10”" },
      { icon: "FaShieldAlt", title: "6 Airbags + asistencia al conductor" },
    ],
    versiones: [
      {
        nombre: "Trendline 170TSI",
        descripcion:
          "La versión ideal para quienes buscan eficiencia y tecnología Volkswagen en un SUV moderno y versátil.",
        imagen: "/tcross_v_1.webp",
        specs: [
          "Año/Modelo 2026",
          "Motor 170TSI",
          'Llantas de aleación de 16″',
          'Sistema Multimedia "VW Play" 10″ Conectada',
          "Mi VW Connect",
          "Frenado autónomo de emergencia con detector de peatones (AEB)",
        ],
      },
      {
        nombre: "Trendline 200TSI",
        descripcion:
          "Mayor potencia y conectividad con un diseño que combina confort y seguridad.",
        imagen: "/tcross_v_2.webp",
        specs: [
          "Año/Modelo 2026",
          "Motor 200TSI",
          "Transmisión Automática Tiptronic",
          "Volante multifunción de cuero con levas al volante",
          'Tablero de 8″ Digital Cockpit',
          "Sensores de estacionamiento traseros",
          "Control de velocidad crucero",
        ],
      },
      {
        nombre: "Comfortline 200TSI",
        descripcion:
          "Tecnología y confort elevan la experiencia de manejo en esta versión equilibrada y sofisticada.",
        imagen: "/tcross_v_3.webp",
        specs: [
          "Año/Modelo 2026",
          'Llantas de aleación de 17″',
          'Sistema de acceso y arranque sin llave "Keyless"',
          "Cámara de visión trasera",
          "Cargador de celular inalámbrico",
          "Control de velocidad crucero adaptativo (ACC)",
        ],
      },
      {
        nombre: "Highline 200TSI",
        descripcion:
          "Elegancia, tecnología y asistencia avanzada para un manejo seguro y confortable.",
        imagen: "/tcross_v_4.webp",
        specs: [
          "Año/Modelo 2026",
          'Tablero 100% digital “Active Info Display” 10″',
          "Techo panorámico",
          'Sistema "Park Assist"',
          "Grilla LED frontal iluminada",
          "Asistente de mantenimiento de carril con asistente en tráfico",
          "Detector de punto ciego con asistente trasero de tráfico cruzado",
        ],
      },
      {
        nombre: "Extreme 200TSI",
        descripcion:
          "La versión más exclusiva y deportiva del nuevo Tera. Detalles únicos y equipamiento superior.",
        imagen: "/tcross_v_5.webp",
        specs: [
          "Año/Modelo 2026",
          'Asientos tapizados en cuero exclusivo "Extreme"',
          'Neumáticos con tecnología "Seal Inside"',
          "Barras de techo en color negro",
          "Techo bitono en color negro",
        ],
      },
    ],
    ficha: [
      { titulo: "Motor", detalle: "170 TSI (101 CV) / 200 TSI (116 CV)" },
      { titulo: "Transmisión", detalle: "Tiptronic 6 velocidades" },
      { titulo: "Faros", detalle: "VW LED con Light Strip trasera" },
      { titulo: "Seguridad", detalle: "6 Airbags + asistencias" },
      { titulo: "Tecnología", detalle: "VW Play 10” + Digital Cockpit 8\"/10\"" },
    ],
    contacto: {
      whatsapp: "https://wa.me/3515607232",
      instagram: "https://instagram.com/aleponceautohaus",
      facebook: "https://www.facebook.com/profile.php?id=61566892732814",

      ubicacion:
        "https://maps.google.com/?q=Auto+Haus+Volkswagen+Castro+Barros",
    },
  },
  {
    slug: "nivus",
    nombre: "Volkswagen Nivus",
    descripcion:
      "Conectado, tecnológico y con un diseño renovado. El nuevo Nivus combina estilo, performance TSI y el paquete digital Mi VW Connect para que estés siempre al mando.",
    imagenes: [
      "/nivus_modelo_1.webp",
      "/nivus_modelo_2.webp",
      "/nivus_modelo_3.webp",
      "/nivus_modelo_4.webp",
      "/nivus_modelo_5.webp",
    ],
    features: [
      { icon: "FaCarSide", title: "Motor TSI turbo" },
      { icon: "FaBolt", title: "VW Play 10″ + Mi VW Connect" },
      { icon: "FaShieldAlt", title: "Seguridad con asistencias" },
      { icon: "FaLightbulb", title: "Faros VW LED + Light Strip" },
    ],
    versiones: [
      {
        nombre: "170 TSI",
        descripcion:
          "Versión inicial con motor 170TSI, conectividad avanzada y estilo crossover dinámico.",
        imagen: "/nivus_version_1.webp",
        specs: [
          "Motor 170TSI",
          "Sistema Multimedia VW Play 10″",
          "Cámara de visión trasera",
          "6 Airbags",
        ],
      },
      {
        nombre: "Trendline 200 TSI",
        descripcion:
          "Mayor equipamiento y motor 200TSI, llantas de aleación y tablero digital básico.",
        imagen: "/nivus_version_2.webp",
        specs: [
          "Motor 200TSI de 116 CV",
          "Llantas de aleación de 16″",
          "Tablero Digital Cockpit 8″",
          "Transmisión automática Tiptronic",
          "Control de velocidad crucero",
        ],
      },
      {
        nombre: "Comfortline 200 TSI",
        descripcion:
          "Comodidad y conectividad mejoradas: techo, carga inalámbrica, Mi VW Connect.",
        imagen: "/nivus_version_3.webp",
        specs: [
          "Año/Modelo 2026",
          "Llantas de aleación de 17″",
          "Sistema Multimedia VW Play 10″ Conectada",
          "Mi VW Connect",
          "App Connect sin cable",
          "Cargador inalámbrico para celular",
        ],
      },
      {
        nombre: "Highline 200 TSI",
        descripcion:
          "La versión tope de gama: cuero ecológico, asistencias avanzadas, estilo exclusivo.",
        imagen: "/nivus_version_4.webp",
        specs: [
          "Año/Modelo 2026",
          "Asientos tapizados en cuero ecológico",
          "Control de velocidad crucero adaptativo (ACC)",
          "Frenado autónomo de emergencia (AEB)",
          "Asistente de mantenimiento de carril con asistente en tráfico",
          "Detector de punto ciego + asistente tráfico cruzado",
        ],
      },
      {
        nombre: "Highline Outfit 200 TSI",
        descripcion:
          "Edición especial Outfit: diseño oscuro, techo bitono y detalles únicos.",
        imagen: "/nivus_version_5.webp",
        specs: [
          "Año/Modelo 2026",
          "Asientos tapizados en cuero ecológico logo 'Outfit'",
          "Techo bitono en color negro",
          "Llantas de aleación de 17\" oscurecidas",
          "Barras de techo en color negro"
        ],
      },
    ],
    ficha: [
      { titulo: "Motor", detalle: "170 TSI / 200 TSI (según versión)" },
      { titulo: "Transmisión", detalle: "Manual o Tiptronic 6 velocidades" },
      { titulo: "Baúl", detalle: "415 litros" },
      { titulo: "Conectividad", detalle: 'VW Play 10″ + Mi VW Connect' },
      { titulo: "Seguridad", detalle: "6 Airbags + asistencias electrónicas" },
    ],
    contacto: {
      whatsapp: "https://wa.me/3515607232",
      instagram: "https://instagram.com/aleponceautohaus",
      facebook: "https://www.facebook.com/profile.php?id=61566892732814",

      ubicacion:
        "https://maps.google.com/?q=Auto+Haus+Volkswagen+Castro+Barros",
    },
  },



  {
    slug: "nueva-taos",
    nombre: "Volkswagen Taos",
    descripcion:
      "Un SUVW con superpoderes. Espacio líder, tecnología de vanguardia y diseño audaz para quien quiere destacar en cada viaje.",
    imagenes: [
      "/nueva_taos_3.webp",
      "/nueva_taos_4.webp",
      "/nueva_taos_5.webp",
      "/nueva_taos_6.webp",
      "/nueva_taos_7.webp",
      "/nueva_taos_8.webp",
    ],
    features: [
      { icon: "FaCarSide", title: "Motor 250 TSI – 150 CV" },
      { icon: "FaBolt", title: "Tiptronic 8 velocidades" },
      { icon: "FaLightbulb", title: "Faros IQ Light + barra LED trasera" },
      { icon: "FaShieldAlt", title: "ACC, AEB, Lane Assist y Travel Assist" },
    ],

    versiones: [
      {
        nombre: "Comfortline 250TSI",
        descripcion:
          "Equilibrio perfecto entre tecnología, confort y seguridad para el día a día.",
        imagen: "/taos_version_1.webp",
        specs: [
          "Año/Modelo 2026",
          "Motor 250TSI",
          "Transmisión automática Tiptronic 8 marchas",
          'Llantas de aleación ligera "Fiji" 18"',
          "Tablero Digital | Active Info Display",
          "Control de velocidad crucero adaptativo | ACC",
          "Asistente de frenado de emergencia | AEB",
          "Volante multifunción revestido en cuero con levas de cambio",
          "Climatizador automático táctil Bi-zona",
          'Pantalla semiflotante de 10"',
          "Mi VW Connect",
          "Faros delanteros IQ Light",
          "Barra LED trasera con logo VW trasero iluminado",
        ],
      },
      {
        nombre: "Highline 250TSI",
        descripcion:
          "Más asistencia al conductor, diseño premium y equipamiento superior.",
        imagen: "/taos_version_2.webp",
        specs: [
          "Año/Modelo 2026",
          "Detector de punto ciego",
          'Llantas de aleación ligera "Plus" 19"',
          "Asistente de tráfico cruzado trasero",
          "Faros delanteros IQ Light",
          "Techo panorámico",
          "Barra LED trasera con logo VW trasero iluminado",
          "Grilla frontal con iluminación LED",
          "Asistente de mantenimiento de carril | Lane Assist",
          "Sistema de asistencia para luz de carretera | Light Assist",
          "Asistente de conducción en viaje | Travel Assist",
          "Tapizado de asientos parcialmente en cuero",
        ],
      },
      {
        nombre: "Highline Bitono 250 TSI",
        descripcion:
          "Estética exclusiva con detalles en negro y look más deportivo.",
        imagen: "/taos_version_3.webp",
        specs: [
          "Año/Modelo 2026",
          "Motor 250 TSI – 150 CV",
          "Transmisión automática Tiptronic 8 velocidades",
          "Techo bitono en color negro",
          "Carcazas de espejos exteriores en color negro",
          "Equipamiento Highline completo",
        ],
      },
    ],
    ficha: [
      { titulo: "Motor", detalle: "250 TSI – 150 CV" },
      { titulo: "Transmisión", detalle: "Automática Tiptronic 8 velocidades" },
      {
        titulo: "Multimedia",
        detalle: 'VW Play 10” Conectada con pantalla semiflotante',
      },
      { titulo: "Tecnología", detalle: "Mi VW Connect" },
      {
        titulo: "Iluminación",
        detalle: "Faros IQ Light + barra LED trasera con logo VW iluminado",
      },
      {
        titulo: "Seguridad",
        detalle: "ACC, AEB, Lane Assist, Travel Assist (según versión)",
      },
    ],
    contacto: {
      whatsapp: "https://wa.me/3515607232",
      instagram: "https://instagram.com/aleponceautohaus",
      facebook: "https://www.facebook.com/profile.php?id=61566892732814",

      ubicacion:
        "https://maps.google.com/?q=Auto+Haus+Volkswagen+Castro+Barros",
    },
  },




  {
    slug: "nuevo-tiguan",
    nombre: "Volkswagen Tiguan",
    descripcion:
      "El SUVW a la altura de tu historia. Tecnología de punta, espíritu familiar y espacio para todo lo que querés llevar y compartir.",
    imagenes: [
      "/nuevotiguan_modelo_1.webp",
      "/nuevotiguan_modelo_2.webp",
      "/nuevotiguan_modelo_3.webp",
      "/nuevotiguan_modelo_4.webp",
      "/nuevotiguan_modelo_5.webp",
    ],
    features: [
      { icon: "FaCarSide", title: "Motor 250 TSI" },
      { icon: "FaLightbulb", title: "Faros LED Matrix + Light Strip" },
      { icon: "FaBolt", title: "Wireless App-Connect + Cargador inalámbrico" },
      { icon: "FaShieldAlt", title: "6 Airbags + asistentes de conducción" },
    ],
    versiones: [
      {
        nombre: "Life",
        descripcion:
          "Versión de entrada con equipamiento moderno, motor 250 TSI y conectividad avanzada.",
        imagen: "/nuevotiguan_v_1.webp",
        specs: [
          "Motor 250 TSI – 150 CV",
          "Transmisión DSG de 7 velocidades",
          "Llantas de aleación 18″",
          "Sistema Multimedia VW Play 10″",
          "Digital Cockpit 10″",
          "Wireless App-Connect",
        ],
      },
      {
        nombre: "R-Line",
        descripcion:
          "Máxima deportividad y diseño exclusivo. Equipamiento de lujo, tecnología y detalles únicos.",
        imagen: "/nuevotiguan_v_1.webp",
        specs: [
          "Faros LED Matrix con firma Light Strip",
          "Techo panorámico eléctrico",
          "Llantas de aleación 19″ Grinder",
          "Asistente de estacionamiento autónomo",
          "Asistencia de viaje Travel Assist",
          "Detector de punto ciego + tráfico cruzado",
        ],
      },
    ],
    ficha: [
      { titulo: "Motor", detalle: "250 TSI – 150 CV" },
      { titulo: "Transmisión", detalle: "DSG 7 velocidades" },
      { titulo: "Baúl", detalle: "750 litros* (versión estándar)" },
      { titulo: "Llantas", detalle: "18″ a 19″ según versión" },
      { titulo: "Faros", detalle: "LED Matrix + Light Strip trasera" },
    ],
    contacto: {
      whatsapp: "https://wa.me/3515607232",
      instagram: "https://instagram.com/aleponceautohaus",
      facebook: "https://www.facebook.com/profile.php?id=61566892732814",

      ubicacion:
        "https://maps.google.com/?q=Auto+Haus+Volkswagen+Castro+Barros",
    },
  },



  {
    slug: "polo",
    nombre: "Volkswagen Polo",
    descripcion:
      "El Polo llegó renovado con líneas modernas, faros LED y tecnologías de vanguardia. Una opción hatch que combina estilo, conectividad y desempeño para tu día a día.",
    imagenes: [
      "/polo_version_4.webp",
      "/polo_version_2.webp",
      "/polo_version_3.webp",
      "/polo_version_1.webp",
    ],
    features: [
      { icon: "FaLightbulb", title: "Faros LED" },
      { icon: "FaBolt", title: "VW Play 10″ + Conectividad App-Connect" },
      { icon: "FaShieldAlt", title: "Control de estabilidad ESC + 4 Airbags" },
      { icon: "FaCarSide", title: "Motor TSI de alta eficiencia" },
    ],
    versiones: [
      {
        nombre: "Track MSI MT",
        descripcion:
          "Versión inicial con motor 1.6 MSI, transmisión manual y equipamiento esencial para disfrutar el Polo.",
        imagen: "/polo_v_1.webp",
        specs: [
          "Motor 1.6 MSI – 110 CV aprox.  :contentReference[oaicite:3]{index=3}",
          "Transmisión Manual – 5 velocidades",
          "Llantas de acero con tapa",
          "Sistema Multimedia VW Play 10″",
          "Control de estabilidad ESC + Anclajes ISOFIX",
          "Baúl de aprox. 300 litros  :contentReference[oaicite:4]{index=4}",
        ],
      },
      {
        nombre: "Comfortline 170 TSI AT",
        descripcion:
          "Versión intermedia con motor 1.0 TSI/170 Nm, transmisión automática, diseño refinado y buen confort.",
        imagen: "/polo_v_2.webp",
        specs: [
          "Motor 1.0 TSI – 101 CV  :contentReference[oaicite:5]{index=5}",
          "Transmisión Automática Tiptronic / AT",
          "Llantas de aleación 16″",
          'Sistema Multimedia VW Play 10″ Conectada',
          'Volante multifunción de cuero',
          'Cargador inalámbrico para smartphone',
        ],
      },
      {
        nombre: "Highline / GTS 250 TSI",
        descripcion:
          "La versión tope de gama con motor turbo, diseño deportivo, máxima tecnología y equipamiento PREMIUM.",
        imagen: "/polo_v_3.webp",
        specs: [
          "Motor 1.4 TSI – 150 CV  :contentReference[oaicite:6]{index=6}",
          "Transmisión Automática DSG/AT",
          "Llantas de aleación 17″ o 18″",
          "Faros LED + Light Strip trasera",
          'Techo panorámico / detalles deportivos GTS',
          'Suspensión deportiva y detalles de diseño exclusivos',
        ],
      },
    ],
    ficha: [
      { titulo: "Motor", detalle: "1.0 TSI / 1.6 MSI / 1.4 TSI (según versión)" },
      { titulo: "Transmisión", detalle: "Manual o Automática según versión" },
      { titulo: "Baúl", detalle: "≈ 300 litros  :contentReference[oaicite:7]{index=7}" },
      { titulo: "Consumo mixto", detalle: "≈ 6,8 L/100km  :contentReference[oaicite:8]{index=8}" },
      { titulo: "Conectividad", detalle: "VW Play 10″ + App-Connect (Wired & Wireless)" },
      { titulo: "Seguridad", detalle: "ESC, 4 Airbags (Track) / 6+ en versiones superiores" },
    ],
    contacto: {
      whatsapp: "https://wa.me/3515607232",
      instagram: "https://instagram.com/aleponceautohaus",
      facebook: "https://www.facebook.com/profile.php?id=61566892732814",

      ubicacion:
        "https://maps.google.com/?q=Auto+Haus+Volkswagen+Castro+Barros",
    },
  },



  {
    slug: "virtus",
    nombre: "Volkswagen Virtus",
    descripcion:
      "Un sedán con personalidad. Diseñado para quienes buscan estilo, tecnología y confort con la eficiencia de un motor TSI. Equipado con faros y luces traseras LED en todas sus versiones.",
    imagenes: [
      "/virtus_modelo_2.webp",
      "/virtus_modelo_1.webp",
      "/virtus_modelo_3.webp",
      "/virtus_modelo_4.webp",
      "/virtus_modelo_5.webp",
    ],
    features: [
      { icon: "FaLightbulb", title: "Faros LED + Light Strip" },
      { icon: "FaBolt", title: "Motor TSI de alta eficiencia" },
      { icon: "FaShieldAlt", title: "6 Airbags + seguridad total" },
      { icon: "FaCarSide", title: "Diseño sedán con gran espacio interior" },
    ],
    versiones: [
      {
        nombre: "MSI",
        descripcion:
          "Equilibrio perfecto entre rendimiento, confort y tecnología. Ideal para quienes buscan eficiencia con estilo.",
        imagen: "/virtus_v_1.webp",
        specs: [
          "Año/Modelo 2026",
          "Motor 1.6L MSI 110 CV",
          'Llantas de aleación de 15″',
          "Transmisión manual de 5 marchas",
          "Dirección eléctrica",
          "Faros delanteros Eco LED con DRL",
          "Faros traseros LED",
          'Cuadro de instrumentos digital 8″',
          'Sistema multimedia VW Play 10″',
          "App Connect inalámbrico",
          "Volante con regulación de altura y profundidad",
          "Alzacristales eléctricos",
          "6 Airbags",
        ],
      },
      {
        nombre: "Trendline",
        descripcion:
          "Con motor TSI y caja automática Tiptronic, el balance ideal entre potencia, tecnología y confort diario.",
        imagen: "/virtus_v_2.webp",
        specs: [
          "Año/Modelo 2026",
          "Motor 1.0L 170 TSI 101 CV",
          'Llantas de aleación de 15″',
          "Transmisión automática Tip-Tronic de 6 marchas",
          "Cargador de celular inalámbrico",
          "Control de velocidad crucero",
          "Sensores de estacionamiento traseros",
          "Volante multifunción",
          "Alarma antirrobo",
          "Cierre centralizado con comando a distancia",
          "Espejos exteriores con regulación eléctrica",
          "Apoyabrazos central delantero",
          "Tapizado de asientos en tela",
        ],
      },
      {
        nombre: "Highline",
        descripcion:
          "El Virtus Highline ofrece máxima tecnología y detalles premium, con un interior completamente digital y asistencias avanzadas.",
        imagen: "/virtus_v_3.webp",
        specs: [
          "Año/Modelo 2026",
          "Motor 1.0L 170 TSI 101 CV",
          'Llantas de aleación de 17″',
          "Transmisión automática Tip-Tronic de 6 marchas",
          'Faros antiniebla delanteros con "cornering light"',
          'Cuadro de instrumentos digital 10″',
          "Sensores de estacionamiento traseros & delanteros",
          "Cámara de visión trasera",
          "Sensor de lluvia",
          "Coming & leaving home",
          "Volante de cuero con levas",
          "Tapizado de asientos en cuero sintético",
          "Detector de fatiga",
        ],
      },
      {
        nombre: "Exclusive",
        descripcion:
          "La versión más equipada de la gama: potencia TSI de 150 CV, seguridad de última generación y confort premium.",
        imagen: "/virtus_v_4.webp",
        specs: [
          "Año/Modelo 2026",
          "Motor 1.4L 250 TSI 150 CV",
          'Llantas de aleación de 18″',
          "Transmisión automática Tip-Tronic de 6 marchas",
          "Frenos delanteros y traseros a disco",
          "Control crucero adaptativo (ACC)",
          "Asistente de mantenimiento de carril",
          "Freno automático de emergencia",
          "Climatizador digital de 1 zona",
          'Sistema "start & stop" con regeneración de energía',
          "Sistema de acceso y arranque sin llave",
          "Espejos exteriores abatibles eléctricamente",
          "Sistema de control de presión de neumáticos",
        ],
      },
    ],
    ficha: [
      { titulo: "Motor", detalle: "1.0 TSI / 1.6 MSI / 1.4 TSI (según versión)" },
      { titulo: "Transmisión", detalle: "Manual o Automática (según versión)" },
      { titulo: "Baúl", detalle: "521 litros aprox. (versión sedán) :contentReference[oaicite:6]{index=6}" },
      { titulo: "Conectividad", detalle: "VW Play 10″ + App-Connect (Wired & Wireless)" },
      { titulo: "Seguridad", detalle: "Faros LED + 6 Airbags + ESC" },
    ],
    contacto: {
      whatsapp: "https://wa.me/3515607232",
      instagram: "https://instagram.com/aleponceautohaus",
      facebook: "https://www.facebook.com/profile.php?id=61566892732814",

      ubicacion:
        "https://maps.google.com/?q=Auto+Haus+Volkswagen+Castro+Barros",
    },
  },






  {
    slug: "amarok",
    nombre: "Volkswagen Amarok",
    descripcion:
      "La Nueva Amarok 2025 redefine la robustez y el confort en el segmento pick-up. Potencia, tecnología y diseño alemán se combinan para ofrecer un rendimiento superior tanto en ciudad como fuera del camino.",
    imagenes: [
      "/amarok_modelo_1.webp",
      "/amarok_modelo_2.webp",
      "/amarok_modelo_3.webp",
      "/amarok_modelo_4.webp",
      "/amarok_modelo_5.webp",
      "/amarok_modelo_6.webp",
    ],
    features: [
      { icon: "FaTruckPickup", title: "Potencia y tracción 4MOTION" },
      { icon: "FaBolt", title: "Motores Turbodiésel hasta V6 250CV" },
      { icon: "FaShieldAlt", title: "Seguridad y asistencia avanzada" },
      { icon: "FaCarSide", title: "Diseño robusto y sofisticado" },
    ],
    versiones: [
      {
        nombre: "Trendline 4x2",
        imagen: "/amarok_v_1.webp",
        specs: [
          "Año/Modelo 2025",
          "Motor 2.0 L Turbodiésel 4 cilindros en línea",
          "Caja de transmisión manual de 6 velocidades",
          "Tracción trasera 4x2",
          'Llantas de aleación ligera Korama 16″',
          'Faros delanteros con tecnología "VW LED"',
          "Iluminación diurna (DRL) sin encendido automático",
          "Tercera luz de stop e iluminación de caja halógena",
          'Volante multifunción revestido en cuero con costura “flint grey”',
          'Multimedia Composition Touch 9″ con App Connect (Apple CarPlay & Android Auto por cable)',
          "Puertos USB (x1 tipo A + x2 tipo C traseros)",
          "Asientos con tapizado de cuero sintético",
          "Asiento de conductor con regulación de altura",
        ],
      },
      {
        nombre: "Trendline 4x4",
        imagen: "/amarok_v_2.webp",
        specs: [
          "Año/Modelo 2025",
          "Motor Diesel 2.0L 180 CV",
          "Transmisión manual de 6 marchas",
          "Tracción 4x4",
          'Llantas de aleación Milford 19″',
          "Lona marítima",
          "Faros delanteros VW LED con DRL integrado",
          "Iluminación de caja de carga",
          "Control de velocidad crucero",
          'Sistema Multimedia Composition Touch 9″ con App Connect',
          "Puertos USB delanteros y traseros",
          "Sensores de estacionamiento traseros",
        ],
      },
      {
        nombre: "Comfortline",
        imagen: "/amarok_v_3.webp",
        specs: [
          "Año/Modelo 2025",
          "Motor Diesel 2.0L 180 CV",
          "Transmisión manual de 6 marchas / automática de 8",
          "Tracción trasera 4x2",
          'Llantas de aleación Tronador 17″',
          "Faros antiniebla delanteros LED",
          "Volante multifunción de cuero",
          "Sistema de navegación de mapas",
          "Cámara de visión trasera",
          "Sensores de estacionamiento traseros y delanteros",
          "Coming & leaving home",
          "Sensor de lluvia",
        ],
      },
      {
        nombre: "Highline",
        imagen: "/amarok_v_4.webp",
        specs: [
          "Año/Modelo 2025",
          "Motor Diesel 2.0L 180 CV",
          "Transmisión manual de 6 marchas / automática de 8",
          "Tracción trasera 4x2",
          'Llantas diamantadas Zapaleri 18″',
          "Grilla frontal iluminada",
          "Safer Tag (alerta cambio de carril y colisión frontal)",
          "Monitoreo de presión de neumáticos (TPMS)",
          'Climatizador automático “Climatronic” bi-zona',
          "Espejos exteriores con abatimiento eléctrico",
          "Asientos de cuero perforado",
          "Butacas delanteras ergoComfort calefaccionadas",
        ],
      },
      {
        nombre: "V6 Comfortline",
        imagen: "/amarok_v_5.webp",
        specs: [
          "Año/Modelo 2025",
          "Motor 3.0L Turbodiésel V6",
          "Transmisión automática de 8 velocidades con modo Sport",
          "Tracción 4x4 permanente con diferencial Torsen",
          "Suspensión trasera reforzada con ballestas de 5 hojas",
          'Llantas de aleación Tronador 17″',
          "DRL con encendido automático y función coming/leaving home",
          "Faros antiniebla LED con luz de giro",
          "Overfenders color carrocería",
          'Multimedia Composition Touch 9″ con navegación integrada',
          "Asientos delanteros eléctricos ergoComfort (14 posiciones)",
          "Sensores delanteros y traseros + cámara de retroceso",
          "Espejo interior fotocromático + sensor de lluvia",
        ],
      },
      {
        nombre: "V6 Highline",
        imagen: "/amarok_v_6.webp",
        specs: [
          "Año/Modelo 2025",
          'Llantas de aleación diamantadas Zapaleri 18″',
          "Grilla delantera iluminada LED",
          'Computadora de abordo “premium” con display multicolor',
          'Alfombrillas con costura “meerkat orange”',
          "Espejos eléctricos con abatimiento y desempañado",
          'Climatizador “Climatronic” bi-zona acabado glossy black',
          "Asientos delanteros calefaccionados",
          "Safer Tag + TPMS",
        ],
      },
      {
        nombre: "V6 Extreme",
        imagen: "/amarok_v_7.webp",
        specs: [
          "Año/Modelo 2025",
          'Llantas de aleación diamantadas Aconcagua 20″',
          'Barra deportiva color carrocería con logo “EXTREME”',
          "Estribos laterales planos de aluminio",
          'Pedaleras deportivas + protector de caja “bedliner” con grabado “AMAROK”',
          "Asientos de cuero perforado eléctricos ergoComfort (14 posiciones)",
          "Stickers laterales decorativos “EXTREME”",
          'Alfombrillas con costura “wild lime”',
        ],
      },
      {
        nombre: "V6 Hero",
        imagen: "/amarok_v_8.webp",
        specs: [
          "Año/Modelo 2025",
          'Llantas diamantadas oscurecidas Aconcagua 20″',
          "Detalles exteriores en negro profundo y cromo",
          'Barra deportiva “EXTREME” negra + stickers decorativos',
          'Paragolpes cromado + logos “AMAROK” y “V6” oscurecidos',
          "Asientos eléctricos ergoComfort + cuero perforado",
          "Pedaleras deportivas",
          'Alfombrillas “wild lime”',
        ],
      },
      {
        nombre: "V6 Black Style",
        imagen: "/amarok_v_9.webp",
        specs: [
          "Año/Modelo 2025",
          'Llantas diamantadas oscurecidas Aconcagua 20″',
          "Carrocería y detalles en negro profundo",
          'Barra deportiva “EXTREME” negra + estribos ovales negros',
          'Paragolpes trasero negro mate con escalón central',
          'Logos “AMAROK” y “V6” oscurecidos',
          "Asientos eléctricos ergoComfort + cuero perforado",
          "Pedaleras deportivas",
          'Alfombrillas “wild lime”',
        ],
      },
    ],
    ficha: [
      { titulo: "Motores", detalle: "2.0 TDI 4 cil. / 3.0 V6 TDI" },
      { titulo: "Transmisión", detalle: "Manual 6v o Automática 8v" },
      { titulo: "Tracción", detalle: "4x2 o 4x4 permanente 4MOTION" },
      { titulo: "Capacidad de carga", detalle: "Hasta 1 tonelada (según versión)" },
      { titulo: "Tecnología", detalle: "VW Play 9″ / App Connect / Sensores y cámara" },
      { titulo: "Seguridad", detalle: "6 Airbags, TPMS, Safer Tag, control de estabilidad" },
    ],
    contacto: {
      whatsapp: "https://wa.me/3515607232",
      instagram: "https://instagram.com/aleponceautohaus",
      facebook: "https://www.facebook.com/profile.php?id=61566892732814",

      ubicacion:
        "https://maps.google.com/?q=Auto+Haus+Volkswagen+Castro+Barros",
    },
  },




  {
    slug: "saveiro",
    nombre: "Volkswagen Saveiro",
    descripcion:
      "La Nueva Saveiro 2026 llega renovada, más robusta y versátil que nunca. Ideal para quienes necesitan potencia y practicidad sin renunciar al confort y la tecnología Volkswagen.",
    imagenes: [
      "/saveiro_modelo_1.webp",
      "/saveiro_modelo_2.webp",
      "/saveiro_modelo_3.webp",
      "/saveiro_modelo_5.webp",
    ],
    features: [
      { icon: "FaTruckPickup", title: "Motor 1.6L MSI 110 CV" },
      { icon: "FaBolt", title: "Control de estabilidad (ESC)" },
      { icon: "FaToolbox", title: "Capacidad y versatilidad de carga" },
      { icon: "FaLightbulb", title: "Faros LED y cámara trasera" },
    ],
    versiones: [
      {
        nombre: "CS Trendline",
        descripcion:
          "Diseñada para el trabajo diario, la Saveiro CS Trendline combina practicidad, potencia y confort para cada jornada.",
        imagen: "/saveiro_v_1.webp",
        specs: [
          "Año/Modelo 2026",
          "Motor 1.6 L 110 CV",
          'Llantas de acero 15″',
          "Transmisión manual 5 marchas",
          "Alzacristales eléctricos",
          'Sistema Multimedia Composition Touch II 9″',
          "App Connect",
          "Aire acondicionado",
          "Alarma antirrobo",
          "Asiento de conductor con ajuste de altura",
          "Protección de luneta trasera",
          "Control electrónico de estabilidad (ESC)",
          "Iluminación en caja de carga",
        ],
      },
      {
        nombre: "CD Comfortline",
        descripcion:
          "Cabina doble y más equipamiento. La Saveiro Comfortline ofrece mayor espacio, comodidad y detalles pensados para acompañarte en todos tus proyectos.",
        imagen: "/saveiro_v_2.webp",
        specs: [
          "Año/Modelo 2026",
          "Motor 1.6 L 110 CV",
          'Llantas de acero 15″',
          "Transmisión manual 5 marchas",
          "6 Parlantes",
          "Volante multifunción",
          'Espejos eléctricos con función “tilt down”',
          "Barandillas de techo",
          "Luneta trasera térmica",
          "Asistente de ascenso en pendientes",
          "Carcasas de espejos y manijas color carrocería",
          "Guías de sujeción de carga",
          "Cabina doble",
        ],
      },
      {
        nombre: "CD Extreme",
        descripcion:
          "La versión más completa de la gama Saveiro: diseño deportivo, tecnología superior y confort premium en cada detalle.",
        imagen: "/saveiro_v_3.webp",
        specs: [
          "Año/Modelo 2026",
          "Motor 1.6 L 110 CV",
          'Llantas de aleación 15″',
          "Transmisión manual 5 marchas",
          "Columna de dirección regulable en altura y profundidad",
          "Cámara de visión trasera",
          "Faros antiniebla",
          "Sensor de presión de neumáticos",
          "Tapizado de asientos en cuero sintético",
          "Control de velocidad crucero",
          "Retrovisor interior antiencandilante automático",
          "Lona marítima",
          "Asistente de ascenso y descenso de pendientes",
        ],
      },
    ],
    ficha: [
      { titulo: "Motor", detalle: "1.6 MSI – 110 CV" },
      { titulo: "Transmisión", detalle: "Manual 5 marchas" },
      { titulo: "Tracción", detalle: "Delantera" },
      { titulo: "Carga útil", detalle: "Hasta 712 kg (versión CS)" },
      { titulo: "Tecnología", detalle: "VW Composition Touch II 9″ con App Connect" },
      { titulo: "Seguridad", detalle: "ESC, control de tracción, cámara trasera y 6 Airbags (opcional)" },
    ],
    contacto: {
      whatsapp: "https://wa.me/3515607232",
      instagram: "https://instagram.com/aleponceautohaus",
      facebook: "https://www.facebook.com/profile.php?id=61566892732814",

      ubicacion:
        "https://maps.google.com/?q=Auto+Haus+Volkswagen+Castro+Barros",
    },
  },





  {
    slug: "golf-gti",
    nombre: "Volkswagen Vento GLI",
    descripcion:
      "El nuevo Vento GLI 2025 combina deportividad, tecnología y confort premium. Su motor turbo 350 TSI y su diseño refinado lo convierten en el sedán más emocionante de Volkswagen.",
    imagenes: [
      "/vento_version_1.webp",
      "/vento_version_2.webp",
      "/vento_version_3.webp",
      "/vento_version_4.webp",
      "/vento_version_5.webp",
    ],
    features: [
      { icon: "FaBolt", title: "Motor 350 TSI de alto rendimiento" },
      { icon: "FaCarSide", title: "Diseño deportivo con ADN GTI" },
      { icon: "FaLightbulb", title: "Faros LED con luz adaptativa" },
      { icon: "FaShieldAlt", title: "Asistencias de conducción avanzadas" },
    ],
    versiones: [
      {
        nombre: "GLI",
        descripcion:
          "La máxima expresión de potencia y elegancia en un sedán. El Vento GLI ofrece una experiencia de manejo deportiva con la comodidad y tecnología que caracterizan a Volkswagen.",
        imagen: "/vento_v_1.webp",
        specs: [
          "Año/Modelo 2025",
          "Motor 350 TSI",
          'Llantas de aleación de 18″',
          "Transmisión automática DSG",
          'Sistema Multimedia “VW Play” 10″',
          "App Connect inalámbrico",
          'Volante multifunción de cuero deportivo con levas y función Touch',
          'Tablero 100% digital “Active Info Display” 10″',
          "Cargador de celular inalámbrico",
          "Techo panorámico",
          "Sistema de asistencia para luz de carretera",
          "Asientos tapizados en cuero",
          "Control de velocidad crucero adaptativo (ACC)",
          "Travel Assist, Lane Assist y Emergency Assist",
        ],
      },
    ],
    ficha: [
      { titulo: "Motor", detalle: "2.0 TSI 350 TSI – 230 CV" },
      { titulo: "Transmisión", detalle: "Automática DSG de 7 velocidades" },
      { titulo: "Tracción", detalle: "Delantera" },
      { titulo: "Velocidad máxima", detalle: "250 km/h" },
      { titulo: "Tecnología", detalle: "VW Play 10″, Active Info Display y cargador inalámbrico" },
      { titulo: "Seguridad", detalle: "ACC, Lane Assist, Emergency Assist y 6 Airbags" },
    ],
    contacto: {
      whatsapp: "https://wa.me/3515607232",
      instagram: "https://instagram.com/aleponceautohaus",
      facebook: "https://www.facebook.com/profile.php?id=61566892732814",

      ubicacion:
        "https://maps.google.com/?q=Auto+Haus+Volkswagen+Castro+Barros",
    },
  },



];
