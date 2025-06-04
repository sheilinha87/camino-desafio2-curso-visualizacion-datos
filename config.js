var config = {
    style: 'mapbox://styles/sheilinha87/cmbhuodqc00b001sda3x65tji',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1Ijoic2hlaWxpbmhhODciLCJhIjoiY21iaHMxbDN6MDBrOTJpc2ZuZzR4bDc0NyJ9.4z1rNt4VH25Q63pEXpz8JA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'El Camino Francés en Galicia',
    subtitle: 'El Camino de Santiago es mucho más que una ruta de peregrinación.',
    byline: 'Por Sheila García',
    footer: 'Source: source citations, etc.  <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'camino-contexto',
            alignment: 'left',
            hidden: false,
            title: 'El Camino Francés',
            image: './assets/camino-portada.jpg',
            description: 'El Camino Francés es la ruta más conocida y transitada del Camino de Santiago. Parte de Saint Jean Pied de Port, en Francia, y recorre más de 750 kilómetros hasta llegar a Santiago de Compostela. Es un viaje físico y simbólico que cruza montañas, campos, ciudades y siglos de historia. <br><br> Durante siglos, millones de personas han caminado por él, dejando huella en el paisaje y la cultura de las regiones que atraviesa: Navarra, La Rioja, Castilla y León, y Galicia. Hoy sigue siendo un fenómeno global que combina espiritualidad, turismo sostenible, encuentro humano y patrimonio compartido.',
            location: {
                center: [-7.8, 42.85],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
                {
            id: 'camino-contexto-galicia',
            alignment: 'left',
            hidden: false,
            title: 'El Camino en Galicia',
            image: './assets/camino-2.jpg',
            description: 'El Camino Francés es la ruta más transitada del Camino de Santiago y atraviesa Galicia desde O Cebreiro hasta Santiago de Compostela. En este recorrido de aproximadamente 150 kilómetros se suceden paisajes montañosos, valles fluviales, bosques y aldeas centenarias.',
            location: {
                center: [-8.1, 42.43],
                zoom: 8.03,
                pitch: 43.06,
                bearing: -43.84
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'O Cebreiro',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Palloza_galega.jpg/1024px-Palloza_galega.jpg',
            description: 'O Cebreiro es la puerta de entrada a Galicia en el Camino Francés. Este pequeño pueblo de montaña destaca por su paisaje envuelto en niebla, sus construcciones tradicionales denominadas "pallozas" de origen celta y su profundo simbolismo para los peregrinos, que aquí sienten que se adentran en una nueva etapa espiritual y cultural del Camino.',
            location: {
                center: [-7.044726685206985, 42.70767047359415],
                zoom: 13.31,
                pitch: 55,
                bearing: -82.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Portomarín',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Puertomar%C3%ADn%2C_en_Lugo_%28Espa%C3%B1a%29.jpg/1199px-Puertomar%C3%ADn%2C_en_Lugo_%28Espa%C3%B1a%29.jpg',
            description: 'El viejo pueblo yace bajo las aguas del embalse de Belesar. La iglesia-fortaleza de San Nicolás fue trasladada piedra a piedra a la nueva ubicación, numerando cada bloque como si fuera un rompecabezas medieval.',
            location: {
                center: [-7.614403402446907, 42.80687572642785],
                zoom: 12.91,
                pitch: 65.5,
                bearing: -8.8,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Palas de Rei',
            image: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Castillo_de_Pambre%2C_en_Palas_de_Rey_%28Lugo%2C_Espa%C3%B1a%29.jpg',
            description: 'Su nombre se cree que hace referencia a un antiguo palacio del rey visigodo Witiza. A su paso, los peregrinos cruzan el puente de Furelos, uno de los mejor conservados del Camino.',
            location: {
                center: [-7.86863185248135, 42.874253568168164],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Monte do Gozo',
            image: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Peregrinos_al_atardecer.jpg',
            description: 'Traducido como “Monte de la Alegría”, es el lugar donde los peregrinos sienten que han llegado. A lo lejos, las torres de la catedral les anuncian el final de su largo viaje.',
            location: {
                center: [-8.495528358251057, 42.884777673000606],
                zoom: 15.71,
                pitch: 66.08,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Santiago de Compostela',
            image: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Santiago_1.jpg',
            description: 'Meta espiritual y emocional del Camino, su casco histórico es Patrimonio de la Humanidad. Según la tradición, aquí reposan los restos del apóstol Santiago, lo que dio origen a las peregrinaciones medievales. Cada día, en la catedral, cientos de peregrinos se emocionan al abrazar la figura del santo y asistir al ritual del botafumeiro, símbolo del final de un viaje y el inicio de otro más profundo.',
            location: {
                center: [-8.544607239743137, 42.88043408737898],
                zoom: 18.56,
                pitch: 27.37,
                bearing: 67.50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Santiago de Compostela',
            image: './assets/camino-3.jpg',
            description: 'En los últimos años, el Camino de Santiago ha vivido un auge turístico sin precedentes. Solo en 2024, 499.185 personas llegaron a Santiago a pie, en bicicleta o incluso a caballo.<br><br>Este flujo de visitantes tiene efectos positivos: reactivación del comercio local, mantenimiento del patrimonio, oportunidades en el rural gallego. Pero también plantea retos como:<br><ul><li>La masificación en tramos como Sarria–Santiago.</li><li>El abandono de rutas menos transitadas.</li><li>La necesidad de infraestructuras sostenibles.</li></ul>La Xunta de Galicia y otras instituciones están promoviendo medidas como el reparto del flujo por rutas alternativas (Camino del Norte, Camino Primitivo), la digitalización del sellado de credenciales y el fomento de albergues ecológicos.',
            location: {
                center: [-8.544607239743137, 42.88043408737898],
                zoom: 8,
                pitch: 20.93,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
