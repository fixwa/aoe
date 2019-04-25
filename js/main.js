$(document).ready(function () {
  var tableData = [
    {
      id: 1,
      civilization: "Aztecas",
      archery: 5,
      infantry: 8,
      cavalry: "-",
      siege: 7,
      navy: 3,
      monks: 10,
      defences: 4,
      economy: 9,
      description: "Infantería y monjes",
      uniqueUnits: "Guerrero jaguar (infantería que causa daños adicionales a la otra infantería).",
      bonus: "Comienzan con +50 de oro.\n" +
        "Aldeanos llevan +5 de recursos.\n" +
        "Unidades militares son creadas un 15% más rápido.\n" +
        "Monjes tienen +5 ptos. resist. (PR) por cada tecnología desarrollada del monasterio.",
      uniqueTechs: "Átlatl (guerrilleros tienen +1 de alcance, +1 de ataque).\n" +
        "Guerras florales (infantería tiene +4 de ataque).",
      teamBonus: "Reliquias generan +33% de oro.",
    },
    {
      id: 1,
      civilization: "Bereberes",
      archery: 7,
      infantry: 3,
      cavalry: 9,
      siege: 7,
      navy: 6,
      monks: 6,
      defences: 5,
      economy: 6,
      description: "Civilización naval y de caballería.",
      uniqueUnits: "Arquero a camello.\n" +
        "Genitor (guerrillero a caballo).",
      bonus: "Los aldeanos se mueven un 10% más rápido.\n" +
        "Unidades creadas en establos cuestan -15% en edad de los Castillos, -20% en edad Imperial.\n" +
        "Los barcos se mueven 10% más rápido.",
      uniqueTechs: "Alcazaba (los castillos trabajan un 25% más rápido en equipo).\n" +
        "Camellos magrebíes (los jinetes a camello se regeneran).",
      teamBonus: "Genitor disponible en las galerías de tiro con arco.",
    },
    {
      id: 1,
      civilization: "Ingleses",
      archery: 8,
      infantry: 6,
      cavalry: 3,
      siege: 5,
      navy: 7,
      monks: 5,
      defences: 8,
      economy: 7,
      description: "Arqueros a pie",
      uniqueUnits: "Arquero de tiro largo (arquero a pie con extensa LDV y un alcance excepcional).",
      bonus: "Centros urbanos cuestan -50% de madera desde la Edad de los Castillos.\n" +
        "Arqueros a pie (excepto guerrilleros) tienen +1 alcance en Edad de los Castillos, +1 en Edad Imperial (+2 total).\n" +
        "Pastores trabajan 25% más rápido.",
      uniqueTechs: "Voluntarios de caballería (arqueros a pie tienen +1 de alcance; torres tienen +2 de ataque).\n" +
        "Warwolf (lanzapiedras atacan con área de daños).",
      teamBonus: "Galerías de tiro con arco trabajan 20% más rápido.",
    },
    {
      id: 1,
      civilization: "Birmanos",
      archery: 2,
      infantry: 8,
      cavalry: 8,
      siege: 7,
      navy: 5,
      monks: 9,
      defences: 6,
      economy: 7,
      description: "monjes y elefantes",
      uniqueUnits: "Arambai (caballería a distancia).",
      bonus: "Las mejoras del campamento maderero son gratuitas.\n" +
        "La infantería obtiene +1 de ataque por edad.\n" +
        "Las mejoras de los monasterios son un 50% más baratas.",
      uniqueTechs: "Howdah (los elefantes de combate obtienen +1/+2 en armadura).\n" +
        "Caballería de Manipur (la caballería y los Arambai obtienen +6 de ataque contra edificios).",
      teamBonus: "Las reliquias son visibles en el mapa.",
    },
    {
      id: 1,
      civilization: "Bizantinos",
      archery: 8, //A-,
      infantry: 7, //B+
      cavalry: 6, //B
      siege: 4, //C+
      navy: 8, //A-,
      monks: 9, //A
      defences: 10, //A+,
      economy: 8, //A-,
      description: "Defensiva",
      uniqueUnits: "Catafracta (caballería que causa daños adicionales a la infantería).",
      bonus: "Edificios +10% PR en Alta Edad Media, +20% PR en Edad Feudal, +30% PR en Edad Castillos, +40% PR en Edad Imperial.\n" +
        "Camellos, guerrilleros, piqueros y alabarderos cuestan -25%.\n" +
        "Brulotes +20% ataque.\n" +
        "Avanzar a la Edad Imperial cuesta -33%.\n" +
        "Guardia urbana gratis.",
      uniqueTechs: "Fuego griego (brulotes tienen +1 de alcance).\n" +
        "Logística (catafractas arrasan a su paso, dañan unidades contiguas al atacar).",
      teamBonus: "Monjes curan +50% más rápido.",
    },
    {
      id: 1,
      civilization: "Celtas",
      archery: 3, //C
      infantry: 8, //A-,
      cavalry: 6, //B
      siege: 10, //A+,
      navy: 7, //B+
      monks: 2, //C-
      defences: 4, //C+
      economy: 9,
      description: "armas de asedio e infantería",
      uniqueUnits: "Invasor de pastos (infantería excepcionalmente rápida que causa daños adicionales a edificios).",
      bonus: "Infantería se mueve 15% más rápido.\n" +
        "Leñadores trabajan 15% más rápido.\n" +
        "Armas de asedio disparan 20% más rápido.\n" +
        "Ovejas no se convierten si están en la línea de visión (LDV) de una unidad celta.",
      uniqueTechs: "Bastión (castillos y torres disparan 20% más rápido).\n" +
        "Furor celta (unidades de taller maq. asedio tienen +40% PR).",
      teamBonus: "Taller maq. asedio trabaja 20% más rápido.",
    },
    {
      id: 1,
      civilization: "Chinos",
      archery: 8, //A-,
      infantry: 7, //B+
      cavalry: 6, //B
      siege: 6, //B
      navy: 6, //B
      monks: 8, //A-,
      defences: 8, //B+
      economy: 5, //B-
      description: "Arqueros",
      uniqueUnits: "Chu-ko-nu (arquero a pie que dispara muchas flechas a gran velocidad).",
      bonus: "Comienzan con 3 aldeanos más, pero -50 madera y -150 alimento.\n" +
        "Tecnologías cuestan -10% Edad Feudal, -15% Edad Castillos, -20% Edad Imperial.\n" +
        "Centros urbanos tienen +5 LDV, admiten 10 unidades de población.\n" +
        "Buques de demolición +50% PR.",
      uniqueTechs: "Gran Muralla (Muros y torres tienen +30% PR).\n" +
        "Cohetería (Chu-ko-nu tiene +2 de ataque, escorpiones tienen +4 de ataque).",
      teamBonus: "Granjas tienen +45 de alimento.",
    },
    {
      id: 1,
      civilization: "Etiopes",
      archery: 8, //A-,
      infantry: 6, //B
      cavalry: 4, //C+
      siege: 10, //A+,
      navy: 5, //B-
      monks: 5, //B-
      defences: 6, //B
      economy: 6, //B,
      description: "Civilización de arqueros.",
      uniqueUnits: "Guerrero Shotel (infantería).",
      bonus: "Los arqueros disparan un 15% más rápido.\n" +
        "Reciben 100 de oro y alimento cada vez que avanzan de edad.\n" +
        "Las mejoras de piqueros y alabarderos son gratis.",
      uniqueTechs: "Centralización Royal Heirs (los guerreros Shotel se crean muy rápido).\n" +
        "Motores de torsión (las unidades de asedio aumentan su onda expansiva al atacar).",
      teamBonus: "Torres y puestos avanzados obtienen +3 en LDV.",
    },
    {
      id: 1,
      civilization: "Francos",
      archery: 2, //C-
      infantry: 6, //B+
      cavalry: 9, //A
      siege: 7, //B+
      navy: 4, //C
      monks: 3,
      defences: 8, //A-,
      economy: 8, //B,
      description: "caballería",
      uniqueUnits: "Lanzador de hachas (infantería con ataque a distancia que causa daños adicionales a edificios).",
      bonus: "Recolectores de bayas trabajan 25% más rápido.\n" +
        "Castillos cuestan -25%.\n" +
        "Caballero +20% PR (antes jinetes).\n" +
        "Mejoras de granja gratis (requiere molino).",
      uniqueTechs: "Código caballeresco (establos trabajan 40% más rápido).\n" +
        "Hacha de arista (lanzador de hachas tiene +1 de alcance).",
      teamBonus: "Jinetes +2 LDV.",
    },
    {
      id: 1,
      civilization: "Godos",
      archery: 5, //B-
      infantry: 10, //A+,
      cavalry: 6, //B
      siege: 6, //B
      navy: 4, //C+
      monks: 3, //C
      defences: 1, //F,
      economy: 7, //B,
      description: "infantería",
      uniqueUnits: "Huscarle (infantería con armadura antiproyectil excepcional que causa daños adicionales a arqueros y edificios).",
      bonus: "Infantería cuesta -35% desde la Edad Feudal.\n" +
        "Infantería ataca +1 contra edificios.\n" +
        "Aldeanos atacan +5 contra jabalíes; cazadores llevan +15 de carne.\n" +
        "+10 al límite de población en Edad Imperial.",
      uniqueTechs: "Anarquía (permite crear huscarles en cuarteles).\n" +
        "Movilización (cuarteles trabajan 100% más rápido).",
      teamBonus: "Cuarteles trabajan +20% más rápido.",
    },
    {
      id: 1,
      civilization: "Hunos",
      archery: 8,
      infantry: 4,
      cavalry: 9,
      siege: 4,
      navy: 7,
      monks: 4,
      defences: 1,
      economy: 8,
      description: "caballería",
      uniqueUnits: "Tarcano (caballería que causa daños adicionales a edificios).",
      bonus: "No necesitan casas, pero comienzan con -100 unidades de madera.\n" +
        "Arqueros a caballo cuestan -10% en Edad de los Castillos, -20% en Edad Imperial (antes -15% y -30%).\n" +
        "Lanzapiedras con +30% de puntería.",
      uniqueTechs: "Razias (permite crear tarcanos en establos).\n" +
        "Ateísmo (las victorias por reliquias y maravillas duran +100 años; espionaje y traición cuesta -50%).",
      teamBonus: "Establos trabajan 20% más rápido.",
    },
    {
      id: 1,
      civilization: "Incas",
      archery: 8, //A-,
      infantry: 8, //A-,
      cavalry: "-",
      siege: 6, //B
      navy: 5, //B-
      monks: 7, //B+
      defences: 9, //A
      economy: 7, //B+
      description: "infantería",
      uniqueUnits: "Kamayuk (infantería con una gran lanza de corto alcance que causa daños adicionales a la caballería).\n" +
        "Hondero (arquero que causa daños adicionales a la infantería).",
      bonus: "Comienzan la partida con una llama gratis.\n" +
        "Mejoras de infantería de la herrería afectan a los aldeanos.\n" +
        "Casas admiten 10 unidades de población.\n" +
        "Edificios cuestan -20% de piedra.",
      uniqueTechs: "Guaracas (guerrilleros y honderos no tienen alcance mínimo).\n" +
        "Postas (kamayuk, guerreros águila y honderos obtienen +1/+2 de armadura).",
      teamBonus: "Granjas se construyen 50% más rápido.",
    },
    {
      id: 1,
      civilization: "Indios",
      archery: 7, //B+
      infantry: 6, //B+
      cavalry: 8, //A-,
      siege: 6, //B
      navy: 4, //C+
      monks: 4,
      defences: 5, //B-
      economy: 9, //A
      description: "camellos y pólvora",
      uniqueUnits: "Elefante arquero (arquero montado; lento, pero muy fuerte y con buena armadura antiproyectil).\n" +
        "Camello imperial (mejora de camello; con más PR y ataque que el camello con armadura).",
      bonus: "Aldeanos cuestan -10% en Alta Edad Media, -15% en la Edad Feudal, -20% en Edad de los Castillos, -25% en Edad Imperial (antes 30%).\n" +
        "Aldeanos pescan 15% más rápido y cargan +25 unidades de pescado.\n" +
        "Camellos tienen +1/+1 de armadura.",
      uniqueTechs: "Sultanato (toda forma de acumulación de oro es 10% más rápida (minería, comercio, reliquias).\n" +
        "Shatagni (artilleros manuales tienen +1 de alcance).",
      teamBonus: "Camellos causan daño adicional a edificios.",
    },
    {
      id: 1,
      civilization: "Italianos",
      archery: 9, //A
      infantry: 5, //B-
      cavalry: 5, //B-
      siege: 4, //C+
      navy: 9, //B+
      monks: 8, //A-,
      defences: 9, //A
      economy: 7, //B+
      description: "naval y de arqueros",
      uniqueUnits: "Genovés ballestero (arquero a pie con un ataque lento que causa daños adicionales a la caballería).\n" +
        "Condotiero (infantería que causa daños adicionales a las unidades de pólvora).",
      bonus: "Avanzar a la siguiente edad cuesta -15% (antes -10%).\n" +
        "Tecnologías del muelle cuestan -50%.\n" +
        "Pesqueros cuestan -25%.\n" +
        "Unidades de pólvora cuestan -25%.",
      uniqueTechs: "Escudo pavés (arqueros a pie obtienen +1/+1 de armadura) (antes solo genovés ballestero).\n" +
        "Ruta de la Seda (carretas de mercancías y urcas mercantes cuestan -50%).",
      teamBonus: "Condotiero disponible en cuarteles.",
    },
    {
      id: 1,
      civilization: "Japoneses",
      archery: 7, //B+
      infantry: 9, //A
      cavalry: 6, //B-
      siege: 6, //B
      navy: 8, //A-,
      monks: 7, //B+
      defences: 7, //B
      economy: 6, //B
      description: "infantería",
      uniqueUnits: "Samurai (infantería con un rápido ataque que causa daños adicionales a edificios y unidades únicas).",
      bonus: "Pesqueros tienen doble PR; tienen 0/+2 de armadura; trabajan +5% más rápido en Alta Edad Media, +10% Edad Feudal, +15% Edad Castillos, +20% Edad Imperial.\n" +
        "Camp. madereros, camp. mineros y molinos cuestan -50%.\n" +
        "Infantería ataca 25% más rápido desde la Edad Feudal.",
      uniqueTechs: "Yasama (torres disparan flechas adicionales).\n" +
        "Kataparuto (lanzapiedras disparan, se arman/desarman más rápido).",
      teamBonus: "Galeras +50% LDV.",
    },
    {
      id: 1,
      civilization: "Jemeres",
      archery: 5, //C+
      infantry: 3, //C
      cavalry: 6, //B
      siege: 8, //A-,
      navy: 5, //B-
      monks: 6, //B
      defences: 7, //B+
      economy: 3, //C
      description: "armas de asedio y elefantes",
      uniqueUnits: "Elefante con balista (caballería de asedio).",
      bonus: "No son necesarios los edificios para avanzar de edad e incluso para desbloquear otros edificios.\n" +
        "Los elefantes de combate son un 15% más rápidos.\n" +
        "Los aldeanos pueden guarecerse en las casas.",
      uniqueTechs: "Colmillos de acero (los elefantes de combate tienen +3 de ataque).\n" +
        "Doble ballesta (los elefantes con balista y los escorpiones disparan dos proyectiles).",
      teamBonus: "Los escorpiones tienen +1 de alcance.",
    },
    {
      id: 1,
      civilization: "Coreanos",
      archery: 7, //B+
      infantry: 5, //B-
      cavalry: 3, //C
      siege: 9, //A
      navy: 5, //B-
      monks: 4, //C+
      defences: 10, //A
      economy: 5, //B-
      description: "naval y de torres",
      uniqueUnits: "Carreta de guerra (arquero a caballo; carro tirado por caballos con eficaz armadura antiproyectil que dispara grandes flechas).\n" +
        "Barco Tortuga (barco de guerra lento y con eficaz armadura que destruye barcos a una corta distancia).",
      bonus: "Aldeanos +3 LDV.\n" +
        "Se contruyen fortificaciones más rápido.\n" +
        "Canteros trabajan 20% más rápido.\n" +
        "Mejoras de torres gratis (torre de bombardeo requiere química).\n" +
        "Torres (excepto torre bombardeo) tienen +1 de alcance en Edad de los Castillos, +2 en Edad Imperial.",
      uniqueTechs: "Panokseon (barcos tortuga se mueven 15% más rápido).\n" +
        "Shinkichon (catapultas tray. plana, onagros tienen +1 de alcance).",
      teamBonus: "Catapultas de trayectoria plana, onagros con alcance mínimo reducido.",
    },
    {
      id: 1,
      civilization: "Magiares",
      archery: 9, //A
      infantry: 7, //B+
      cavalry: 10, //A+,
      siege: 4, //C
      navy: 4, //C+
      monks: 3,
      defences: 3, //C
      economy: 8, //A-,
      description: "Civilización de caballería ligera.",
      uniqueUnits: "Huszar magiar (caballería ligera que causa daños adicionales a armas de asedio).",
      bonus: "Aldeanos eliminan a los lobos de un golpe.\n" +
        "Forja, fundición de hierro y alto horno gratis (requiere herrería).\n" +
        "Caballería de exploración, caballería ligera y húsares cuestan -10%.",
      uniqueTechs: "Mercenarios (huszar magiar no cuesta oro).\n" +
        "Arco recurvo (arqueros a caballo tienen +1 de alcance).",
      teamBonus: "Arqueros a pie tienen +2 LDV.",
    },
    {
      id: 1,
      civilization: "Malayos",
      archery: 7, //B+
      infantry: 9, //A
      cavalry: 3, //C
      siege: 7, //B+
      navy: 8, //A-,
      monks: 8, //A-,
      defences: 6, //B
      economy: 8, //B+
      description: "naval",
      uniqueUnits: "Guerrero Karambit (infantería).",
      bonus: "Avanzan de edad un 100% más rápido.\n" +
        "Los pesqueros y las trampas para peces son un 33% más baratas.\n" +
        "Las trampas para peces proporcionan alimento infinito.\n" +
        "Los elefantes de combate son un 20% más baratos.",
      uniqueTechs: "Talasocracia (los muelles mejoran a puertos, que disparan flechas).\n" +
        "Imposición forzada (los milicias y sus mejoras no cuestan oro).",
      teamBonus: "Los muelles y puertos dan +100% de línea de visión.",
    },
    {
      id: 1,
      civilization: "Malíes",
      archery: 7, //B+
      infantry: 8, //A-,
      cavalry: 8, //A-,
      siege: 7, //B+
      navy: 5, //B-
      monks: 7, //B+
      defences: 8, //A-,
      economy: 7, //B+
      description: "Civilización de infantería.",
      uniqueUnits: "Gbeto (infantería a distancia).",
      bonus: "Los edificios cuestan un 15% menos de madera.\n" +
        "A partir de la Edad Feudal, la infantería cuenta con +1 en armadura.\n" +
        "Las investigaciones de minería aurífera y pozo minero auifero son gratis.",
      uniqueTechs: "Tigui (los centros urbanos disparan flechas incendiarias).\n" +
        "Imba (+3 ataque para la caballería).",
      teamBonus: "La universidad investiga un 80% más rápido.",
    },
    {
      id: 1,
      civilization: "Mayas",
      archery: 10, //A+,
      infantry: 6, //B
      cavalry: "-",
      siege: 7, //B+
      navy: 8, //A-,
      monks: 3, //C
      defences: 8, //A-,
      economy: 10, //A+
      description: "Civilización de arqueros.",
      uniqueUnits: "Arquero de plumas (arquero a pie rápido y fuerte, pero con menos ataque que otros arqueros).",
      bonus: "Comienzan con +1 aldeano, pero con -50 unidades de alimento.\n" +
        "Recursos duran 15% más (antes 20%).\n" +
        "Arqueros cuestan -10% en Edad Feudal, -20% en Edad Castillos, -30% en Edad Imperial.",
      uniqueTechs: "Saeta de obsidiana (arqueros atacan +6 contra edificios) (antes +4).\n" +
        "El dorado (guerreros águila tienen +40 PR).",
      teamBonus: "Muros cuestan -50%.",
    },
    {
      id: 1,
      civilization: "Mongoles",
      archery: 8, //A-,
      infantry: 6, //B
      cavalry: 8, //A-,
      siege: 9, //A
      navy: 7, //B+
      monks: 2, //C-
      defences: 6, //B
      economy: 8, //A-
      description: "arqueros a caballo",
      uniqueUnits: "Mangudai (arquero a caballo que causa daños adicionales a armas de asedio).",
      bonus: "Arqueros a caballo disparan 20% más rápido.\n" +
        "Caballería ligera, húsar +30% PR.\n" +
        "Cazadores trabajan 50% más rápido.",
      uniqueTechs: "Nómades (si sus casas son destruidas, no pierden la capacidad de población que admitían).\n" +
        "Instrucción militar (unidades de taller maq. asedio se mueven 50% más rápido).",
      teamBonus: "Caballería de exploración, caballería ligera, húsar +2 LDV.",
    },
    {
      id: 1,
      civilization: "Persas",
      archery: 6, //B
      infantry: 3, //C
      cavalry: 10, //A
      siege: 7, //B+
      navy: 7, //B
      monks: 2, //C-
      defences: 5, //B-
      economy: 10, //A+
      description: "caballería",
      uniqueUnits: "Elefante de guerra (caballería lenta, pero muy fuerte y poderosa que causa daños adicionales a edificios).",
      bonus: "Comienzan con +50 unidades de alimento y madera.\n" +
        "Centro urbano y muelle doble PR; trabajan +10% más rápido en Edad Feudal, +15% Edad de los Castillos, +20% Edad Imperial.",
      uniqueTechs: "Barbacana (castillos causan daños adicionales a arietes).\n" +
        "Cornacas (elefantes de guerra se mueven 30% más rápido).",
      teamBonus: "Jinetes atacan +2 contra arqueros.",
    },
    {
      id: 1,
      civilization: "Portugueses",
      archery: 8, //A-,
      infantry: 7, //B+
      cavalry: 6, //C+
      siege: 7, //B+
      navy: 7, //A-,
      monks: 7, //B+
      defences: 9, //A
      economy: 7, //B+
      description: "Civilización naval y de pólvora.",
      uniqueUnits: "Cañón de órgano (unidad de asedio).\n" +
        "Carabela (barco de guerra).",
      bonus: "Todas las unidades cuestan un 15% menos de oro.\n" +
        "Los barcos son un 10% más resistentes.\n" +
        "Pueden construir factorías en la Edad Imperial (única civilización que tiene un edificio único).",
      uniqueTechs: "Carraca (barcos obtienen +1/+1).\n" +
        "Arcabuz (unidades de pólvora mejoradas por balística).",
      teamBonus: "Cartografía gratis desde la Alta Edad Media.",
    },
    {
      id: 1,
      civilization: "Sarracenos",
      archery: 8, //A-,
      infantry: 5, //B-
      cavalry: 7, //B+
      siege: 7, //B+
      navy: 6, //B
      monks: 9, //A
      defences: 6, //B
      economy: 6, //B
      description: "naval y de camellos",
      uniqueUnits: "Mameluco (camellería con ataque a distancia que causa daños adicionales a la caballería).",
      bonus: "Cuota de mercado cuesta sólo 5%.\n" +
        "Mercados cuestan -75 de madera.\n" +
        "Barcos de transporte tienen doble PR, doble capacidad.\n" +
        "Galeras atacan 20% más rápido.\n" +
        "Arqueros a caballo +3 ataque contra edificios.",
      uniqueTechs: "Madraza (si un monje muere, se devuelve el 33% de su costo).\n" +
        "Fanatismo (camellos y mamelucos tienen +30 PR).",
      teamBonus: "Arqueros a pie atacan +1 contra edificios.",
    },
    {
      id: 1,
      civilization: "Eslavos",
      archery: 3,
      infantry: 9,
      cavalry: 8,
      siege: 9,
      navy: 3,
      monks: 9,
      defences: 5,
      economy: 10,
      description: "Civilización de infantería y armas de asedio.",
      uniqueUnits: "Boyardo (caballería con eficaz armadura cuerpo a cuerpo).",
      bonus: "Granjeros trabajan 15% más rápido.\n" +
        "Rastreo gratis.\n" +
        "Unidades de taller de máquina de asedio cuestan -15%.",
      uniqueTechs: "Ortodoxia (monjes tienen +3/+3 de armadura).\n" +
        "Druzhina (infantería daña también a enemigos contiguos al atacar).",
      teamBonus: "Cada edificio militar admite 5 unidades de población.",
    },
    {
      id: 1,
      civilization: "Españoles",
      archery: 6, //B
      infantry: 7, //B+
      cavalry: 9, //A
      siege: 6, //B
      navy: 8, //A-,
      monks: 9, //A
      defences: 8, //A-,
      economy: 8, //A-
      description: "Civilización de pólvora y monjes.",
      uniqueUnits: "Conquistador (artillero manual de caballería; potente de cerca, poco preciso desde lejos).\n" +
        "Misionero (monje montado; más rápido que el normal, pero con menos LDV y alcance).",
      bonus: "Constructores trabajan 30% más rápido.\n" +
        "Mejoras de herrería no cuestan oro.\n" +
        "Galeones artillados se benefician de la balística (más rapidez y puntería).\n" +
        "Artilleros manuales y cañones de asedio disparan 15% más rápido.",
      uniqueTechs: "Inquisición (monjes convierten más rápido).\n" +
        "Supremacía (aldeanos tienen +40 PR, +6 de ataque, +2/+3 de armadura).",
      teamBonus: "Unidades comerciales generan +25% de oro.",
    },
    {
      id: 1,
      civilization: "Teutones",
      archery: 4,
      infantry: 7,
      cavalry: 7,
      siege: 8,
      navy: 6,
      monks: 9,
      defences: 10,
      economy: 10,
      description: "Civilización de infantería.",
      uniqueUnits: "Caballero de la orden teutónica (infantería lenta, pero muy poderosa y con armadura cuerpo a cuerpo excepcional que causa daños adicionales a edificios).",
      bonus: "Monjes curan desde 2 veces más lejos.\n" +
        "Centros urbanos guarecen +10 unidades, torres guarecen el doble de unidades.\n" +
        "Matacanes gratis.\n" +
        "Granjas cuestan -33%.",
      uniqueTechs: "Blindaje (armas de asedio tienen armadura cuerpo a cuerpo adicional).\n" +
        "Almenas (castillos tienen +3 de alcance, infantería guarecida dispara flechas).",
      teamBonus: "Unidades son resistentes a la conversión.",
    },
    {
      id: 1,
      civilization: "Turcos",
      archery: 7, //B+
      infantry: 3, //C
      cavalry: 8, //A-,
      siege: 7, //B+
      navy: 6, //B
      monks: 6, //B
      defences: 6, //B
      economy: 6, //B
      description: "pólvora",
      uniqueUnits: "Jenízaro (artillero manual, muy poderoso de cerca, poco preciso desde lejos).",
      bonus: "Unidades de pólvora +25% PR; desarrollo de tecnologías con pólvora cuesta -50%; química gratis.\n" +
        "Mineros de oro trabajan 15% más rápido.\n" +
        "Mejoras de caballería ligera y húsar gratis.",
      uniqueTechs: "Sipahi (arqueros a caballo tienen +20 PR).\n" +
        "Artillería (torres de bombardeo, cañones de asedio, galeones artillados tienen +2 de alcance).",
      teamBonus: "Unidades de pólvora se crean 20% más rápido.",
    },
    {
      id: 1,
      civilization: "Vietnamitas",
      archery: 8,
      infantry: 5,
      cavalry: 5,
      siege: 6,
      navy: 5,
      monks: 6,
      defences: 6,
      economy: 5,
      description: "Civilización de arqueros.",
      uniqueUnits: "Arquero Rattan (arquero con resistencia a los proyectiles de otros arqueros).\n" +
        "Guerrillero imperial",
      bonus: "Revela las posiciones de los enemigos desde el comienzo.\n" +
        "Los arqueros aumentan sus puntos de salud en cada edad (10% en Feudal, 15% en Castillos y 20% en Imperial).\n" +
        "Leva gratis.",
      uniqueTechs: "Chatras (los elefantes de combate obtienen +50 de salud).\n" +
        "Papel moneda (tributa 500 de oro a cada aliado).",
      teamBonus: "Acceso al guerrillero imperial (unidad única) en las galerías de tiro con arco.",
    },
    {
      id: 1,
      civilization: "Vikingos",
      archery: 6, //B
      infantry: 8, //B+
      cavalry: 4, //C+
      siege: 7, //B+
      navy: 9, //A
      monks: 3, //C
      defences: 7, //B+
      economy: 10, //A
      description: "naval y de infantería",
      uniqueUnits: "Guerrero en trance (infantería que se regenera que causa daños adicionales a edificios).\n" +
        "Barco Dragón (barco de guerra veloz que dispara varias flechas).",
      bonus: "Barcos de guerra cuestan -10% en Edad Feudal, -15% en Edad de los Castillos, -20% en Edad Imperial.\n" +
        "Infantería +10% PR en Edad Feudal, +15% PR en Edad de los Castillos, +20% PR en Edad Imperial.\n" +
        "Carretilla y carro de mano gratis.",
      uniqueTechs: "Caudillos (guerreros en trance causan daños adicionales a la caballería).\n" +
        "Banda de guerreros en trance (guerreros en trance se regeneran más rápido).",
      teamBonus: "Muelles cuestan -25%.",
    },
  ];


  var table = new Tabulator("#example-table", {
    data: tableData,           //load row data from array
    layout: "fitColumns",      //fit columns to width of table
    responsiveLayout: "hide",  //hide columns that dont fit on the table
    tooltips: true,            //show tool tips on cells
    addRowPos: "top",          //when adding a new row, add it to the top of the table
    history: true,             //allow undo and redo actions on the table
    pagination: "local",       //paginate the data
    paginationSize: 40,         //allow 7 rows per page of data
    movableColumns: true,      //allow column order to be changed
    resizableRows: true,       //allow row order to be changed
    initialSort: [             //set the initial sort order of the data
      {column: "name", dir: "asc"},
    ],
    columns: [                 //define the table columns
      {title: "Civilización", field: "civilization", headerFilter: "input"},
      {title: "Description", field: "description", formatter: "textarea"},
      {title: "Unidades", field: "uniqueUnits", formatter: "textarea"},
      {title: "Bonificación", field: "bonus", formatter: "textarea"},
      {title: "Tecnologías", field: "uniqueTechs", formatter: "textarea"},
      {title: "Bonif de equipo", field: "teamBonus", formatter: "textarea"},
      {title: "Arquería", field: "archery", width: 90},
      {title: "Infantería", field: "infantry", width: 90},
      {title: "Caballería", field: "cavalry", width: 90},
      {title: "Asedio", field: "siege", width: 90},
      {title: "Naval", field: "navy", width: 90},
      {title: "Monjes", field: "monks", width: 90},
      {title: "Defensas", field: "defences", width: 90},
      {title: "Economía", field: "economy", width: 90},
    ],
  });

});
