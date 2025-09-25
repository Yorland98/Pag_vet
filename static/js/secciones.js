const app = document.getElementById("app");

const routes = {
    "#inicio": `

    <!-- Carousel -->
    <div class="carousel-container">
        <div class="carousel">
            <div class="carousel-item active" style="background-image: url('https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')">
                <div class="carousel-content">
                    <h2>Servimos con amor</h2>
                    <p>Tenemos todo lo que ellos necesitan</p>
                    <a href="#servicios" class="carousel-btn" onclick="scrollToServicios(); return false;">Nuestros Servicios</a>
                </div>
            </div>
            <div class="carousel-item" style="background-image: url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')">
                <div class="carousel-content">
                    <h2>Urgencias 24/7</h2>
                    <p>Estamos aquí cuando más nos necesitas</p>
                    <a href="https://wa.me/573106494346" class="carousel-btn">Llamar Ahora</a>
                </div>
            </div>
            <div class="carousel-item" style="background-image: url('https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')">
                <div class="carousel-content">
                    <h2>Amor a la vanguardia</h2>
                    <p>Profesionales y equipos de excelencia.</p>
                    <a href="#nosotros" class="carousel-btn">Agendar Cita</a>
                </div>
            </div>
        </div>
    </div>
    <!-- Seccion Categorias -->    
    <section class="section" id="categorias">
        <div class="categorias">
            <div class="categorias-1">
                <img src="static/img/logos/Dog_Cat.png" alt="Logo de un gato">
                <h2>Nuestros mejores amigos</h2>
                <p>Ellos son tan importantos para nosotros, como lo son para ti, por eso siempre los atenderemos con amor</p>
            </div>
            <div class="categorias-2">
                <img src="static/img/logos/medicamentos.png" alt="Logo de medicamentos">
                <h2>Trabajamos con los mejores</h2>
                <p>Tenemos los mejores productos, acompañados de los mejores profesionales para darles lo que necesitan.</p>
            </div>
            <div class="categorias-3">
                <img src="static/img/logos/calendario.png" alt="Logo de calendario">
                <h2>Cuentas con nosotros 24 / 7</h2>
                <p>Nunca estarán excentos de una emergencia, pero siempre estaremos listos para atenderlas lo que se pueda presentar.</p>
            </div>
        </div>
    </section>
    <!-- Sección Servicios -->
    <section class="section" id="servicios">
        <h2>Nuestros Servicios</h2>
        <p>Estos son todos nuestros servicios</p>
        <div class="services-grid">
            <a href="#medicina-interna" class="service-card">
                <!--i class="fas fa-microscope"></i-->
                <h3>Medicina Interna</h3>
            </a>
            <a href="#oftalmologia" class="service-card">
                <!--i class="fas fa-scissors"></i-->
                <h3>Oftalmología</h3>
            </a>
            <a href="#laboratorio" class="service-card">
                <!--i class="fas fa-microscope"></i-->
                <h3>Laboratorio</h3>
            </a>
            <a href="#cardiologia" class="service-card">
                <!--i class="fas fa-scissors"></i-->
                <h3>Cardiología</h3>
            </a>
            <a href="#neurologia" class="service-card">
                <!--i class="fas fa-ambulance"></i-->
                <h3>Neurología</h3>
            </a>
            <a href="#rehabilitacion" class="service-card">
                <!--i class="fas fa-scissors"></i-->
                <h3>Rehabilitación</h3>
            </a>
            <a href="#dermatologia" class="service-card">
                <!--i class="fas fa-ambulance"></i-->
                <h3>Dermatología</h3>
            </a>
            <a href="#peluqueria" class="service-card">
                <!--i class="fas fa-scissors"></i-->
                <h3>Peluquería</h3>
            </a>
            <a href="#d-imagen" class="service-card">
                <!--i class="fas fa-ambulance"></i-->
                <h3>Diagnóstico por imagen</h3>
            </a>
            <a href="#ortopedia" class="service-card">
                <!--i class="fas fa-syringe"></i-->
                <h3>Ortopedia y Traumatología</h3>
            </a>
            <a href="#cirugias-tejidos" class="service-card">
                <!--i class="fas fa-kit-medical"></i-->
                <h3>Cirugía de tejidos blandos</h3>
            </a>
            <a href="#vacunacion" class="service-card">
                <h3>Vacunas</h3>
            </a>
            <a href="#ecografias" class="service-card">
                <h3>Ecografías</h3>
            </a>
            <a href="#radiografias" class="service-card">
                <h3>Radiografías</h3>
            </a>
            <a href="#emergencias" class="service-card">
                <!--i class="fas fa-ambulance"></i-->
                <h3>Emergencias</h3>
            </a> 
        </div>
    </section>
    <!-- Sección Nosotros -->
    <section class="section about-section" id="nosotros">
        <div class="about-content">
            <div class="about-text">
                <h2>Sobre Nosotros</h2>
                <p>En el Centro Médico Veterinario Álvaro Andrés Contrares, sabemos que ellos son muy importanes para ti, es por eso que nos esforzamos en seguir creciendo, para darles ese amor que se merecen, acompañado de la más alta tecnología de la veterinaria y los médicos más preparados.</p>
                <a href="#nosotros-detalle" class="btn-ver-mas">Ver más</a>
            </div>
            <div class="about-image">
                <img src="static/img/logos/vet.png" alt="Equipo de trabajo">
            </div>
        </div>
    </section>
    <!-- Sección Instalaciones -->
    <section class="section instalaciones-section" id="instalaciones">
        <div class="instalaciones-content">
            <div class="instalaciones-text">
                <h2>Nuestras Instalaciones</h2>
                <p>Contamos con instalaciones modernas y completamente equipadas para brindar la mejor atención veterinaria. Nuestras salas de consulta, quirófanos y áreas de hospitalización están diseñadas con los más altos estándares de calidad y bioseguridad para garantizar el bienestar de tu mascota.</p>
                <a href="#instalaciones-detalle" class="btn-ver-mas">Ver más</a>
            </div>
            <div class="instalaciones-image">
                <img src="static/img/instalaciones/instalaciones.png" alt="Instalaciones de la clínica">
            </div>
        </div>
    </section>
    `,
    // Nuevas secciones de detalle
    "#medicina-interna": `
        <section class="detail-section">
            <div class="detail-container">
                <div class="detail-image">
                    <img src="static/img/consultas/consulta_general.jpeg" alt="Consulta General">
                </div>
                <div class="detail-content">
                    <h2>Medicina Interna</h2>
                    <p>Sus comportamientos "raros" dicen mucho sobre su estado de salud. En nuestras consultas generales, realizamos un examen completo de tu mascota para detectar cualquier anomalía o signo temprano de enfermedad. Nuestros veterinarios especializados evalúan desde el comportamiento hasta los signos vitales, garantizando un diagnóstico preciso y un tratamiento adecuado.</p>
                </div>
                <div class="detail-gallery">
                    <img src="static/img/consultas/Med_general/Med_generaral.jpeg" alt="Consulta 1">
                    <img src="static/img/consultas/Med_general/Med_generaral_2.jpeg" alt="Consulta 2">
                    <img src="static/img/consultas/Med_general/Med_generaral_3.jpeg" alt="Consulta 3">
                    <img src="static/img/consultas/Med_general/Med_generaral_4.jpeg" alt="Consulta 4">
                </div>
            </div>
        </section>
    `,
    //ecografias
    "#ecografias": `
        <section class="detail-section">
            <div class="detail-container">
                <div class="detail-image">
                    <img src="static/img/consultas/ecografia.jpeg" alt="Ecografías">
                </div>
                <div class="detail-content">
                    <h2>Ecografías</h2>
                    <p>Sigue cada etapa de su preñez, así como posibles anomalías internas. Utilizamos equipos de última generación para realizar ecografías de alta calidad que nos permiten diagnosticar con precisión. Este procedimiento no invasivo es fundamental para el seguimiento de embarazos, detección de masas, evaluación de órganos internos y muchos otros diagnósticos veterinarios.</p>
                </div>
                <div class="detail-gallery">
                    <img src="static/img/consultas/ecografia/ecografia.jpeg" alt="Ecografía 1">
                    <img src="static/img/consultas/ecografia/ecografia_2.jpeg" alt="Ecografía 2">
                    <img src="static/img/consultas/ecografia/ecografia_3.jpeg" alt="Ecografía 3">
                    <img src="static/img/consultas/ecografia/ecografia_4.jpeg" alt="Ecografía 4">
                </div>
            </div>
        </section>
    `,
    //radiografia
    "#radiografias": `
        <section class="detail-section">
            <div class="detail-container">
                <div class="detail-image">
                    <img src="static/img/consultas/radiografia.jpeg" alt="Radiografías">
                </div>
                <div class="detail-content">
                    <h2>Radiografías</h2>
                    <p>El riesgo de una fractura es grande, pero estamos preparados para atenderlas. Nuestro servicio de radiografía digital permite obtener imágenes de alta calidad de manera rápida y segura. Es fundamental para el diagnóstico de fracturas, displasia de cadera, problemas articulares, cuerpos extraños y muchas otras condiciones que requieren visualización interna.</p>
                </div>
                <div class="detail-gallery">
                    <img src="static/img/consultas/radiografia/radiografia.jpeg" alt="Radiografía 1">
                    <img src="static/img/consultas/radiografia/radiografia_2.jpeg" alt="Radiografía 2">
                    <img src="static/img/consultas/radiografia/radiografia_3.jpeg" alt="Radiografía 3">
                    <img src="static/img/consultas/radiografia/radiografia_4.jpeg" alt="Radiografía 4">
                </div>
            </div>
        </section>
    `,
    //dermatologia
    "#dermatologia": `
        <section class="detail-section">
            <div class="detail-container">
                <div class="detail-image">
                    <img src="static/img/consultas/dermatologia.jpeg" alt="Dermatología">
                </div>
                <div class="detail-content">
                    <h2>Dermatología</h2>
                    <p>Deja que vuelva a disfrutar de cada caricia. Los problemas dermatológicos son muy comunes en mascotas y pueden causar gran incomodidad. Tratamos alergias, dermatitis, infecciones fúngicas, parásitos externos, alopecia y otros problemas de la piel. Nuestro enfoque incluye tanto tratamiento como prevención para mantener la piel y el pelaje de tu mascota saludables.</p>
                </div>
                <div class="detail-gallery">
                    <img src="static/img/consultas/dermatologia/dermatologia.jpeg" alt="Dermatología 1">
                    <img src="static/img/consultas/dermatologia/dermatologia_2.jpeg" alt="Dermatología 2">
                    <img src="static/img/consultas/dermatologia/dermatologia_3.jpeg" alt="Dermatología 3">
                    <img src="static/img/consultas/dermatologia/dermatologia_4.jpeg" alt="Dermatología 4">
                </div>
            </div>
        </section>
    `,
    // Secciones de vacunación
    "#vacunacion": `
        <section class="section" id="vacunacion">
        <div class="video-container">
                <video id="peluqueriaVideo" autoplay muted loop>
                    <source src="static/img/videos/vacunas.mp4" type="video/mp4">
                    Tu navegador no soporta video HTML5.
                </video>
            </div>
            <h2>Nuestros Servicios de vacunación</h2>
            <p>Nuestro deber es tratar sus enfermedades, el tuyo es prevenirlas</p>
            <div class="vacuna-grid">
                <div class="vacuna-card" onclick="navigateToDetail('vacunas-cachorros')">
                    <img src="static/img/vacunas/cachorro.jpg" alt="perro y gato cachorros" class="vacuna-image">
                    <div class="vacuna-content">
                        <h3>Vacunas para cachorros</h3>
                        <p>Son las más importantes, ya que es en esta etapa de su vida cuando son más propensos a contraer cientos de enfermedades. En sus primeras vacunas, incluimos su debida desparacitación.</p>
                    </div>
                </div>
                <div class="vacuna-card" onclick="navigateToDetail('pasaporte-mascotas')">
                    <img src="static/img/vacunas/pasaporte.jpeg" alt="Pasaporte de mascotas" class="vacuna-image">
                    <div class="vacuna-content">
                        <h3>¿Quieres viajar con tu amigo?</h3>
                        <p>Te asesoramos y damos todo lo que necesitas para viajar sin contratiempos.</p>
                    </div>
                </div>
                <div class="vacuna-card" onclick="navigateToDetail('desparacitacion')">
                    <img src="static/img/vacunas/desparacitación.jpg" alt="Perro y parasitos al rededor" class="vacuna-image">
                    <div class="vacuna-content">
                        <h3>Desparacitación</h3>
                        <p>Es fundamental para un crecimiento y desarrollo pleno, tenemos distintos métodos de desparacitación, pregunta por el que requieras.</p>
                    </div>
                </div>
                <div class="vacuna-card" onclick="navigateToDetail('dosis-vacunas')">
                    <img src="static/img/vacunas/dosis.jpg" alt="Frascos de vacunas" class="vacuna-image">
                    <div class="vacuna-content">
                        <h3>Contamos con todas sus dosis</h3>
                        <p>Sabemos la importancia de respetar los plazos que deben existir entre vacuna y vacuna.</p>
                    </div>
                </div>
                <div class="vacuna-card" onclick="navigateToDetail('vacunas-adultos')">
                    <img src="static/img/vacunas/adulto.jpg" alt="perro y gato adultos" class="vacuna-image">
                    <div class="vacuna-content">
                        <h3>Sigue protegiéndolo</h3>
                        <p>Su edad solo define la cantidad de enfermedades que puede contraer, persevera en su cuidado.</p>
                    </div>
                </div>
                <div class="vacuna-card" onclick="navigateToDetail('carnet-vacunas')">
                    <img src="static/img/vacunas/carnet.jpeg" alt="Carnet de vacunas" class="vacuna-image">
                    <div class="vacuna-content">
                        <h3>Mantén su carnet al día</h3>
                        <p>Tener una mascota es tomar la decisión de cuidarlo.</p>
                    </div>
                </div>
            </div>
        </section>
    `,
// Neurología
"#neurologia": `
    <section class="detail-section">
        <div class="detail-container">
            <div class="detail-image">
                <img src="static/img/servicios/neurologia.jpeg" alt="Neurología Veterinaria">
            </div>
            <div class="detail-content">
                <h2>Neurología Veterinaria</h2>
                <p>Cuando su comportamiento cambia, nosotros encontramos las respuestas. La neurología veterinaria se encarga del diagnóstico y tratamiento de enfermedades del sistema nervioso central y periférico. Evaluamos alteraciones como convulsiones, problemas de coordinación, parálisis, cambios de comportamiento y trastornos cognitivos.</p>
                <p>Utilizamos exámenes neurológicos detallados, análisis de líquido cefalorraquídeo y técnicas de diagnóstico por imagen para identificar condiciones como epilepsia, hernias discales, tumores cerebrales y enfermedades degenerativas. Nuestro enfoque integral busca mejorar la calidad de vida neurológica de tu mascota.</p>
            </div>
            <div class="detail-gallery">
                <img src="static/img/servicios/neurologia/neurologia_1.jpeg" alt="Neurología 1">
                <img src="static/img/servicios/neurologia/neurologia_2.jpeg" alt="Neurología 2">
                <img src="static/img/servicios/neurologia/neurologia_3.jpeg" alt="Neurología 3">
                <img src="static/img/servicios/neurologia/neurologia_4.jpeg" alt="Neurología 4">
            </div>
        </div>
    </section>
`,
// Rehabilitación
"#rehabilitacion": `
    <section class="detail-section">
        <div class="detail-container">
            <div class="detail-image">
                <img src="static/img/servicios/rehabilitacion.jpeg" alt="Rehabilitación Veterinaria">
            </div>
            <div class="detail-content">
                <h2>Rehabilitación y Fisioterapia Veterinaria</h2>
                <p>Ayudamos a que vuelva a moverse con confianza. Nuestro servicio de rehabilitación veterinaria está diseñado para restaurar la movilidad y función en mascotas que han sufrido lesiones, cirugías ortopédicas o padecen condiciones neurológicas. Utilizamos técnicas de fisioterapia especializadas para animales.</p>
                <p>Incluimos terapias como hidroterapia, ejercicios terapéuticos, masajes, electroterapia y acupuntura veterinaria. Cada plan de rehabilitación es personalizado según las necesidades específicas de la mascota, promoviendo una recuperación más rápida y completa tras procedimientos quirúrgicos o lesiones traumáticas.</p>
            </div>
            <div class="detail-gallery">
                <img src="static/img/servicios/rehabilitacion/rehabilitacion_1.jpeg" alt="Rehabilitación 1">
                <img src="static/img/servicios/rehabilitacion/rehabilitacion_2.jpeg" alt="Rehabilitación 2">
                <img src="static/img/servicios/rehabilitacion/rehabilitacion_3.jpeg" alt="Rehabilitación 3">
                <img src="static/img/servicios/rehabilitacion/rehabilitacion_4.jpeg" alt="Rehabilitación 4">
            </div>
        </div>
    </section>
`,
// Diagnóstico por imagen
"#d-imagen": `
    <section class="detail-section">
        <div class="detail-container">
            <div class="detail-image">
                <img src="static/img/servicios/diagnostico_imagen.jpeg" alt="Diagnóstico por Imagen">
            </div>
            <div class="detail-content">
                <h2>Diagnóstico por Imagen</h2>
                <p>Vemos lo que el ojo no puede detectar. Nuestro servicio de diagnóstico por imagen utiliza tecnología avanzada para obtener imágenes detalladas del interior de tu mascota de forma no invasiva. Contamos con equipos de radiografía digital, ecografía de alta resolución y otros métodos de imagen especializados.</p>
                <p>Estos estudios son fundamentales para diagnosticar fracturas, problemas articulares, enfermedades de órganos internos, masas tumorales, problemas cardíacos y seguimiento de embarazos. Las imágenes de alta calidad nos permiten realizar diagnósticos precisos y planificar tratamientos efectivos.</p>
            </div>
            <div class="detail-gallery">
                <img src="static/img/servicios/diagnostico/diagnostico_1.jpeg" alt="Diagnóstico 1">
                <img src="static/img/servicios/diagnostico/diagnostico_2.jpeg" alt="Diagnóstico 2">
                <img src="static/img/servicios/diagnostico/diagnostico_3.jpeg" alt="Diagnóstico 3">
                <img src="static/img/servicios/diagnostico/diagnostico_4.jpeg" alt="Diagnóstico 4">
            </div>
        </div>
    </section>
`,
// Cirugía de tejidos blandos
"#cirugias-tejidos": `
    <section class="detail-section">
        <div class="detail-container">
            <div class="detail-image">
                <img src="static/img/servicios/cirugia_tejidos.jpeg" alt="Cirugía de Tejidos Blandos">
            </div>
            <div class="detail-content">
                <h2>Cirugía de Tejidos Blandos</h2>
                <p>Precisión quirúrgica para su bienestar completo. La cirugía de tejidos blandos abarca procedimientos en órganos internos, piel, músculos y estructuras no óseas. Realizamos cirugías gastrointestinales, urogenitales, torácicas y dermatológicas con técnicas mínimamente invasivas cuando es posible.</p>
                <p>Nuestros procedimientos incluyen extracción de tumores cutáneos, reparación de hernias, cirugías del tracto urinario, extracción de cuerpos extraños y cirugías reconstructivas. Utilizamos equipos de cauterización avanzados y técnicas de sutura especializadas para minimizar el tiempo de recuperación y optimizar los resultados quirúrgicos.</p>
            </div>
            <div class="detail-gallery">
                <img src="static/img/servicios/tejidos_blandos/tejidos_1.jpeg" alt="Tejidos blandos 1">
                <img src="static/img/servicios/tejidos_blandos/tejidos_2.jpeg" alt="Tejidos blandos 2">
                <img src="static/img/servicios/tejidos_blandos/tejidos_3.jpeg" alt="Tejidos blandos 3">
                <img src="static/img/servicios/tejidos_blandos/tejidos_4.jpeg" alt="Tejidos blandos 4">
            </div>
        </div>
    </section>
`,
// Ortopedia y Traumatología
"#ortopedia": `
    <section class="detail-section">
        <div class="detail-container">
            <div class="detail-image">
                <img src="static/img/servicios/ortopedia.jpeg" alt="Ortopedia y Traumatología">
            </div>
            <div class="detail-content">
                <h2>Ortopedia y Traumatología</h2>
                <p>Restauramos su movilidad con técnicas especializadas. Nuestro servicio de ortopedia y traumatología veterinaria se especializa en el tratamiento de lesiones del sistema músculo-esquelético. Manejamos fracturas, luxaciones, rupturas de ligamentos, displasia de cadera y otras patologías ortopédicas.</p>
                <p>Utilizamos implantes ortopédicos de última generación, placas, tornillos y fijadores externos para la reparación ósea. Nuestros cirujanos están capacitados en técnicas como TPLO (osteotomía de nivelación de la meseta tibial), reparación de ligamento cruzado y cirugías correctivas de deformidades. Cada caso se evalúa individualmente para determinar el mejor enfoque quirúrgico.</p>
            </div>
            <div class="detail-gallery">
                <img src="static/img/servicios/ortopedia/ortopedia_1.jpeg" alt="Ortopedia 1">
                <img src="static/img/servicios/ortopedia/ortopedia_2.jpeg" alt="Ortopedia 2">
                <img src="static/img/servicios/ortopedia/ortopedia_3.jpeg" alt="Ortopedia 3">
                <img src="static/img/servicios/ortopedia/ortopedia_4.jpeg" alt="Ortopedia 4">
            </div>
        </div>
    </section>
`,
// Cardiología
"#cardiologia": `
    <section class="detail-section">
        <div class="detail-container">
            <div class="detail-image">
                <img src="static/img/servicios/cardiologia.jpeg" alt="Cardiología Veterinaria">
            </div>
            <div class="detail-content">
                <h2>Cardiología Veterinaria</h2>
                <p>Su corazón late por amor, nosotros lo mantenemos saludable. La cardiología veterinaria se enfoca en el diagnóstico y tratamiento de enfermedades del corazón y sistema circulatorio. Evaluamos soplos cardíacos, arritmias, insuficiencia cardíaca, cardiomiopatías y malformaciones congénitas del corazón.</p>
                <p>Utilizamos ecocardiografía, electrocardiograma (ECG), radiografías torácicas y análisis de biomarcadores cardíacos para diagnósticos precisos. Nuestro tratamiento incluye terapia farmacológica específica, manejo dietético y seguimiento especializado para mejorar la calidad de vida de mascotas con problemas cardíacos, desde cachorros hasta pacientes geriátricos.</p>
            </div>
            <div class="detail-gallery">
                <img src="static/img/servicios/cardiologia/cardiologia_1.jpeg" alt="Cardiología 1">
                <img src="static/img/servicios/cardiologia/cardiologia_2.jpeg" alt="Cardiología 2">
                <img src="static/img/servicios/cardiologia/cardiologia_3.jpeg" alt="Cardiología 3">
                <img src="static/img/servicios/cardiologia/cardiologia_4.jpeg" alt="Cardiología 4">
            </div>
        </div>
    </section>
`,
    "#vacunas-cachorros": `
        <section class="detail-section">
            <div class="detail-container">
                <div class="detail-image">
                    <img src="static/img/vacunas/cachorro.jpg" alt="Vacunas para cachorros">
                </div>
                <div class="detail-content">
                    <h2>Vacunas para Cachorros</h2>
                    <p>Son las más importantes, ya que es en esta etapa de su vida cuando son más propensos a contraer cientos de enfermedades. En sus primeras vacunas, incluimos su debida desparacitación. El sistema inmunológico de los cachorros aún se está desarrollando, por lo que seguimos un protocolo específico de vacunación que incluye múltiples dosis para garantizar una protección óptima contra enfermedades como parvovirus, distemper, hepatitis y otras patologías graves.</p>
                </div>
                <div class="detail-gallery">
                    <img src="static/img/vacunas/cachorro/cachorro.jpeg" alt="Cachorro 1">
                    <img src="static/img/vacunas/cachorro/cachorro_2.jpeg" alt="Cachorro 2">
                    <img src="static/img/vacunas/cachorro/cachorro_2.jpeg" alt="Cachorro 3">
                    <img src="static/img/vacunas/cachorro/cachorro.jpeg" alt="Cachorro 4">
                </div>
            </div>
        </section>
    `,
    "#pasaporte-mascotas": `
        <section class="detail-section">
            <div class="detail-container">
                <div class="detail-image">
                    <img src="static/img/vacunas/pasaporte.jpeg" alt="Pasaporte de mascotas">
                </div>
                <div class="detail-content">
                    <h2>¿Quieres viajar con tu amigo?</h2>
                    <p>Te asesoramos y damos todo lo que necesitas para viajar sin contratiempos. Conocemos todos los requisitos nacionales e internacionales para el transporte de mascotas. Gestionamos certificados sanitarios, vacunas específicas requeridas por destino, microchips de identificación y toda la documentación necesaria para que tu mascota pueda acompañarte en tus viajes de manera segura y legal.</p>
                </div>
                <div class="detail-gallery">
                    <img src="static/img/vacunas/Pasaporte/Pasaporte.jpeg" alt="Viaje 1">
                    <img src="static/img/vacunas/Pasaporte/Pasaporte_2.jpeg" alt="Viaje 2">
                    <img src="static/img/vacunas/Pasaporte/Pasaporte_3.jpeg" alt="Viaje 3">
                    <img src="static/img/vacunas/Pasaporte/Pasaporte.jpeg" alt="Viaje 4">
                </div>
            </div>
        </section>
    `,
    "#desparacitacion": `
        <section class="detail-section">
            <div class="detail-container">
                <div class="detail-image">
                    <img src="static/img/vacunas/desparacitación.jpg" alt="Desparacitación">
                </div>
                <div class="detail-content">
                    <h2>Desparacitación</h2>
                    <p>Es fundamental para un crecimiento y desarrollo pleno, tenemos distintos métodos de desparacitación, pregunta por el que requieras. Los parásitos internos y externos pueden causar serios problemas de salud en las mascotas. Ofrecemos tratamientos específicos contra lombrices, tenias, parásitos cardíacos, pulgas, garrapatas y otros. Nuestro protocolo incluye evaluación previa y seguimiento post-tratamiento.</p>
                </div>
                <div class="detail-gallery">
                    <img src="static/img/vacunas/despa1.jpg" alt="Desparacitación 1">
                    <img src="static/img/vacunas/despa2.jpg" alt="Desparacitación 2">
                    <img src="static/img/vacunas/despa3.jpg" alt="Desparacitación 3">
                    <img src="static/img/vacunas/despa4.jpg" alt="Desparacitación 4">
                </div>
            </div>
        </section>
    `,
    "#dosis-vacunas": `
        <section class="detail-section">
            <div class="detail-container">
                <div class="detail-image">
                    <img src="static/img/vacunas/dosis.jpg" alt="Dosis de vacunas">
                </div>
                <div class="detail-content">
                    <h2>Contamos con todas sus dosis</h2>
                    <p>Sabemos la importancia de respetar los plazos que deben existir entre vacuna y vacuna. Mantenemos un inventario completo de todas las vacunas necesarias y seguimos protocolos estrictos de conservación. Nuestro sistema de recordatorios asegura que nunca se pierda una cita importante en el calendario de vacunación de tu mascota.</p>
                </div>
                <div class="detail-gallery">
                    <img src="static/img/vacunas/dosis1.jpg" alt="Dosis 1">
                    <img src="static/img/vacunas/dosis2.jpg" alt="Dosis 2">
                    <img src="static/img/vacunas/dosis3.jpg" alt="Dosis 3">
                    <img src="static/img/vacunas/dosis4.jpg" alt="Dosis 4">
                </div>
            </div>
        </section>
    `,
    "#vacunas-adultos": `
        <section class="detail-section">
            <div class="detail-container">
                <div class="detail-image">
                    <img src="static/img/vacunas/adulto.jpg" alt="Vacunas para adultos">
                </div>
                <div class="detail-content">
                    <h2>Sigue protegiéndolo</h2>
                    <p>Su edad solo define la cantidad de enfermedades que puede contraer, persevera en su cuidado. Las mascotas adultas y senior requieren refuerzos regulares y pueden necesitar vacunas adicionales según su estilo de vida y exposición. Adaptamos el programa de vacunación según la edad, estado de salud y factores de riesgo específicos de cada paciente.</p>
                </div>
                <div class="detail-gallery">
                    <img src="static/img/vacunas/adulto1.jpg" alt="Adulto 1">
                    <img src="static/img/vacunas/adulto2.jpg" alt="Adulto 2">
                    <img src="static/img/vacunas/adulto3.jpg" alt="Adulto 3">
                    <img src="static/img/vacunas/adulto4.jpg" alt="Adulto 4">
                </div>
            </div>
        </section>
    `,
    "#carnet-vacunas": `
        <section class="detail-section">
            <div class="detail-container">
                <div class="detail-image">
                    <img src="static/img/vacunas/carnet.jpeg" alt="Carnet de vacunas">
                </div>
                <div class="detail-content">
                    <h2>Mantén su carnet al día</h2>
                    <p>Tener una mascota es tomar la decisión de cuidarlo. El carnet de vacunación es un documento fundamental que registra todo el historial sanitario de tu mascota. Lo mantenemos actualizado digitalmente y físicamente, incluyendo fechas, tipos de vacunas, lotes y próximas citas. Es indispensable para viajes, pensiones y emergencias veterinarias.</p>
                </div>
                <div class="detail-gallery">
                    <img src="static/img/vacunas/carnet/carnet.jpeg" alt="Carnet 1">
                    <img src="static/img/vacunas/carnet/carnet.jpeg" alt="Carnet 2">
                    <img src="static/img/vacunas/carnet/carnet.jpeg" alt="Carnet 3">
                    <img src="static/img/vacunas/carnet/carnet.jpeg" alt="Carnet 4">
                </div>
            </div>
        </section>
    `,
    //Esterilización
    "#cirugias-esterilizacion": `
        <section class="detail-section">
            <div class="detail-container">
                <div class="detail-image">
                    <img src="static/img/cirugias/esterilización.jpeg" alt="Esterilización">
                </div>
                <div class="detail-content">
                    <h2>Esterilización</h2>
                    <p>
                        Cirugía frecuente en perros y gatos que consiste en retirar quirúrgicamente los órganos reproductivos 
                        (ovarios y útero en hembras, testículos en machos). Previene la reproducción, reduce problemas de salud 
                        reproductiva y mejora la calidad de vida de la mascota.
                    </p>
                </div>
                <div class="detail-gallery">
                    <img src="static/img/cirugias/esterilización/esterilización.jpeg" alt="Esterilización 1">
                    <img src="static/img/cirugias/esterilización/esterilización_2.jpeg" alt="Esterilización 2">
                    <img src="static/img/cirugias/esterilización/esterilización_3.jpeg" alt="Esterilización 3">
                    <img src="static/img/cirugias/esterilización/esterilización_4.jpeg" alt="Esterilización 4">
                </div>
            </div>
        </section>
    `,
    //Tejidos blandos
    "#cirugias-tejidos-blandos": `
        <section class="detail-section">
            <div class="detail-container">
                <div class="detail-image">
                    <img src="static/img/cirugias/tejidos_2.jpeg" alt="Cirugía de tejidos blandos">
                </div>
                <div class="detail-content">
                    <h2>Cirugía de Tejidos Blandos</h2>
                    <p>
                        Incluye procedimientos en órganos internos, piel, glándulas y estructuras no óseas. 
                        Entre los más comunes están la extracción de tumores, reparación de hernias o la 
                        extracción de cuerpos extraños ingeridos.
                    </p>
                </div>
                <div class="detail-gallery">
                    <img src="static/img/cirugias/tejidos/tejidos.jpeg" alt="Tejidos blandos 1">
                    <img src="static/img/cirugias/tejidos/tejidos_3.jpeg" alt="Tejidos blandos 2">
                    <img src="static/img/cirugias/tejidos/tejidos_3.jpeg" alt="Tejidos blandos 3">
                    <img src="static/img/cirugias/tejidos/tejidos.jpeg" alt="Tejidos blandos 4">
                </div>
            </div>
        </section>
    `,
    //ortopedia
    "#cirugias-ortopedica": `
        <section class="detail-section">
            <div class="detail-container">
                <div class="detail-image">
                    <img src="static/img/cirugias/fracturas.jpeg" alt="Cirugía ortopédica">
                </div>
                <div class="detail-content">
                    <h2>Cirugía Ortopédica</h2>
                    <p>
                        Se ocupa de corregir problemas en huesos, articulaciones, tendones y ligamentos. 
                        Incluye reparación de fracturas, luxaciones y cirugía de rodilla por ruptura de ligamentos. 
                        Ayuda a restaurar la movilidad y reducir el dolor.
                    </p>
                </div>
                <div class="detail-gallery">
                    <img src="static/img/cirugias/fracturas/fracturas.jpeg" alt="Ortopedia 1">
                    <img src="static/img/cirugias/fracturas/fracturas_2.jpeg" alt="Ortopedia 2">
                    <img src="static/img/cirugias/fracturas/fracturas_2.jpeg" alt="Ortopedia 3">
                    <img src="static/img/cirugias/fracturas/fracturas.jpeg" alt="Ortopedia 4">
                </div>
            </div>
        </section>
    `,
    //oftalmologia
    "#oftalmologia": `
        <section class="detail-section">
            <div class="detail-container">
                <div class="detail-image">
                    <img src="static/img/cirugias/Oculares.jpeg" alt="Cirugía oftálmica">
                </div>
                <div class="detail-content">
                    <h2>Cirugía Oftálmica</h2>
                    <p>
                        Atiende enfermedades y lesiones en los ojos. Puede incluir la corrección de úlceras corneales, 
                        extracción de cataratas o reparación de párpados. Su objetivo es preservar la visión y aliviar molestias.
                    </p>
                </div>
                <div class="detail-gallery">
                    <img src="static/img/cirugias/Oculares/Oculares.jpeg" alt="Oftalmología 1">
                    <img src="static/img/cirugias/Oculares/Oculares_2.jpeg" alt="Oftalmología 2">
                    <img src="static/img/cirugias/Oculares/Oculares_2.jpeg" alt="Oftalmología 3">
                    <img src="static/img/cirugias/Oculares/Oculares.jpeg" alt="Oftalmología 4">
                </div>
            </div>
        </section>
    `, 
    // Secciones de peluquería
    "#peluqueria": `
        <section class="section" id="peluqueria">
            <div class="video-container">
                <video id="peluqueriaVideo" autoplay muted loop>
                    <source src="static/img/videos/peluqueria.mp4" type="video/mp4">
                    Tu navegador no soporta video HTML5.
                </video>
            </div>
            <h2>Nuestros Servicios de Peluquería</h2>
            <h3>La elegancia tiene cuatro patas</h3>
            <div class="pelu-grid">
                <div class="pelu-card" onclick="navigateToDetail('limpieza-oidos')">
                    <img src="static/img/peluquería/oidos.png" alt="Limpieza de oídos" class="pelu-image">
                    <div class="pelu-content">
                        <h3>Limpieza de oídos</h3>
                        <p>La limpieza de los oídos es fundamental para evitar futuras enfermedades como la otitis.</p>
                    </div>
                </div>

                <div class="pelu-card" onclick="navigateToDetail('corte-unas')">
                    <img src="static/img/peluquería/uñas.png" alt="Corte de uñas" class="pelu-image">
                    <div class="pelu-content">
                        <h3>Corte de uñas</h3>
                        <p>Para prevenirles dolor, deformaciones en las patas y problemas de salud como infecciones.</p>
                    </div>
                </div>

                <div class="pelu-card" onclick="navigateToDetail('deslanado')">
                    <img src="static/img/peluquería/deslanado.png" alt="Deslanado" class="pelu-image">
                    <div class="pelu-content">
                        <h3>Deslanado</h3>
                        <p>¿Sabías que tu mascota puede tener un 50% de pelo muerto encima?</p>
                    </div>
                </div>

                <div class="pelu-card" onclick="navigateToDetail('bano-mascotas')">
                    <img src="static/img/peluquería/baño.png" alt="Baño" class="pelu-image">
                    <div class="pelu-content">
                        <h3>Baño</h3>
                        <p>Contamos con distintos productos profesionales que se adaptan a tu bolsillo.</p>
                    </div>
                </div>

                <div class="pelu-card" onclick="navigateToDetail('esponjados')">
                    <img src="static/img/peluquería/esponjados.png" alt="Esponjados" class="pelu-image">
                    <div class="pelu-content">
                        <h3>Cortes</h3>
                        <p>Para darle más estilo a la melena de tu mascota.</p>
                    </div>
                </div>

                <div class="pelu-card" onclick="navigateToDetail('colorimetria')">
                    <img src="static/img/peluquería/colorimetría.png" alt="Colorimetría" class="pelu-image">
                    <div class="pelu-content">
                        <h3>Colorimetría</h3>
                        <p>Un estilo diferente para ocasiones especiales, sin dañar a tu peludito.</p>
                    </div>
                </div>
            </div>
        </section>
    `,
    "#limpieza-oidos": `
        <section class="detail-section">
            <div class="detail-container">
                <div class="detail-image">
                    <img src="static/img/peluquería/oidos.png" alt="Limpieza de oídos">
                </div>
                <div class="detail-content">
                    <h2>Limpieza de oídos</h2>
                    <p>La limpieza de los oídos es fundamental para evitar futuras enfermedades como la otitis. Utilizamos productos específicos y técnicas seguras para remover cerumen, suciedad y prevenir infecciones. Este servicio es especialmente importante en razas con orejas largas o peludas que son más propensas a problemas auriculares.</p>
                </div>
                <div class="detail-gallery">
                    <img src="static/img/peluquería/oidos/oidos.jpeg" alt="Oídos 1">
                    <img src="static/img/peluquería/oidos/oidos_2.jpeg" alt="Oídos 2">
                    <img src="static/img/peluquería/oidos/oidos_2.jpeg" alt="Oídos 3">
                    <img src="static/img/peluquería/oidos/oidos_4.jpeg" alt="Oídos 4">
                </div>
            </div>
        </section>
    `,
    "#corte-unas": `
        <section class="detail-section">
            <div class="detail-container">
                <div class="detail-image">
                    <img src="static/img/peluquería/uñas.png" alt="Corte de uñas">
                </div>
                <div class="detail-content">
                    <h2>Corte de uñas</h2>
                    <p>Para prevenirles dolor, deformaciones en las patas y problemas de salud como infecciones. El corte regular de uñas es esencial para la comodidad y salud de tu mascota. Uñas largas pueden causar dolor al caminar, alterar la postura y provocar lesiones. Nuestros profesionales realizan este procedimiento con técnicas seguras y herramientas apropiadas.</p>
                </div>
                <div class="detail-gallery">
                    <img src="static/img/peluquería/uñas/uñas.jpeg" alt="Uñas 1">
                    <img src="static/img/peluquería/uñas/uñas_2.jpeg" alt="Uñas 2">
                    <img src="static/img/peluquería/uñas/uñas_3.jpeg" alt="Uñas 3">
                    <img src="static/img/peluquería/uñas/uñas_4.jpeg" alt="Uñas 4">
                </div>
            </div>
        </section>
    `,
    "#deslanado": `
        <section class="detail-section">
            <div class="detail-container">
                <div class="detail-image">
                    <img src="static/img/peluquería/deslanado.png" alt="Deslanado">
                </div>
                <div class="detail-content">
                    <h2>Deslanado</h2>
                    <p>¿Sabías que tu mascota puede tener un 50% de pelo muerto encima? El deslanado profesional remueve el pelo muerto y la capa interna suelta, mejorando la circulación del aire en la piel y reduciendo significativamente la caída de pelo en casa. Es especialmente beneficioso para razas de doble capa.</p>
                </div>
                <div class="detail-gallery">
                    <img src="static/img/peluquería/Deslanado/Deslanado.jpeg" alt="Deslanado 1">
                    <img src="static/img/peluquería/Deslanado/Deslanado_2.jpeg" alt="Deslanado 2">
                    <img src="static/img/peluquería/Deslanado/Deslanado_3.jpeg" alt="Deslanado 3">
                    <img src="static/img/peluquería/Deslanado/Deslanado_4.jpeg" alt="Deslanado 4">
                </div>
            </div>
        </section>
    `,
    "#bano-mascotas": `
        <section class="detail-section">
            <div class="detail-container">
                <div class="detail-image">
                    <img src="static/img/peluquería/baño.png" alt="Baño de mascotas">
                </div>
                <div class="detail-content">
                    <h2>Baño</h2>
                    <p>Contamos con distintos productos profesionales que se adaptan a tu bolsillo. Utilizamos champús específicos según el tipo de piel y pelaje de cada mascota. Nuestro servicio incluye baño con agua temperada, masaje relajante, secado profesional y aplicación de acondicionadores cuando es necesario.</p>
                </div>
                <div class="detail-gallery">
                    <img src="static/img/peluquería/baño/baño.jpeg" alt="Baño 1">
                    <img src="static/img/peluquería/baño/baño_2.jpeg" alt="Baño 2">
                    <img src="static/img/peluquería/baño/baño_3.jpeg" alt="Baño 3">
                    <img src="static/img/peluquería/baño/baño_4.jpeg" alt="Baño 4">
                </div>
            </div>
        </section>
    `,
    "#esponjados": `
        <section class="detail-section">
            <div class="detail-container">
                <div class="detail-image">
                    <img src="static/img/peluquería/esponjados.png" alt="Esponjados">
                </div>
                <div class="detail-content">
                    <h2>Cortes</h2>
                    <p>Para darle más estilo a la melena de tu mascota. El esponjado profesional da volumen y textura al pelaje, creando un aspecto más estético y saludable. Utilizamos técnicas específicas de secado y cepillado que respetan la estructura natural del pelo mientras mejoran su apariencia.</p>
                </div>
                <div class="detail-gallery">
                    <img src="static/img/peluquería/cortes/cortes.jpeg" alt="Esponjado 1">
                    <img src="static/img/peluquería/cortes/cortes_2.jpeg" alt="Esponjado 2">
                    <img src="static/img/peluquería/cortes/cortes_3.jpeg" alt="Esponjado 3">
                    <img src="static/img/peluquería/cortes/cortes_4.jpeg" alt="Esponjado 4">
                </div>
            </div>
        </section>
    `,
    "#colorimetria": `
        <section class="detail-section">
            <div class="detail-container">
                <div class="detail-image">
                    <img src="static/img/peluquería/colorimetría.png" alt="Colorimetría">
                </div>
                <div class="detail-content">
                    <h2>Colorimetría</h2>
                    <p>Un estilo diferente para ocasiones especiales, sin dañar a tu peludito. Utilizamos tintes seguros y temporales específicamente diseñados para mascotas. Perfecto para celebraciones, sesiones fotográficas o simplemente para darle un toque divertido y único al look de tu mascota, siempre priorizando su bienestar.</p>
                </div>
                <div class="detail-gallery">
                    <img src="static/img/peluquería/colorimetria/colorimetria.jpeg" alt="Color 1">
                    <img src="static/img/peluquería/colorimetria/colorimetria_2.jpeg" alt="Color 2">
                    <img src="static/img/peluquería/colorimetria/colorimetria_3.jpeg" alt="Color 3">
                    <img src="static/img/peluquería/colorimetria/colorimetria_4.jpeg" alt="Color 4">
                </div>
            </div>
        </section>
    `, 
    //laboratorio 
    "#laboratorio": `
        <section class="section" id="laboratorio">
            <div class="video-container">
                <video id="peluqueriaVideo" autoplay muted loop>
                    <source src="static/img/videos/vacunas.mp4" type="video/mp4">
                    Tu navegador no soporta video HTML5.
                </video>
            </div>
            <h2>Exámenes de Laboratorio</h2>
            <p>La salud de tu mascota también se refleja en sus análisis clínicos.</p>
            <div class="laboratorio-grid">

                <div class="laboratorio-card" onclick="navigateToDetail('hematologia')">
                    <img src="static/img/laboratorio/laboratorio.jpeg" alt="Muestra de sangre de mascota" class="laboratorio-image">
                    <div class="laboratorio-content">
                        <h3>Hematología</h3>
                        <p>Un análisis de sangre que revela el estado general de su organismo.</p>
                    </div>
                </div>

                <div class="laboratorio-card" onclick="navigateToDetail('bioquimica')">
                    <img src="static/img/laboratorio/Bioquimica.jpeg" alt="Equipo de bioquímica veterinaria" class="laboratorio-image">
                    <div class="laboratorio-content">
                        <h3>Bioquímica</h3>
                        <p>Evalúa el funcionamiento de hígado, riñones y metabolismo.</p>
                    </div>
                </div>

                <div class="laboratorio-card" onclick="navigateToDetail('coprologia')">
                    <img src="static/img/laboratorio/coprologico.jpeg" alt="Muestra de heces de mascota" class="laboratorio-image">
                    <div class="laboratorio-content">
                        <h3>Coprología</h3>
                        <p>Detecta parásitos intestinales y alteraciones digestivas.</p>
                    </div>
                </div>

                <div class="laboratorio-card" onclick="navigateToDetail('uroanalisis')">
                    <img src="static/img/laboratorio/uroanalisis.jpeg" alt="Muestra de orina de mascota" class="laboratorio-image">
                    <div class="laboratorio-content">
                        <h3>Uroanálisis</h3>
                        <p>Clave para identificar infecciones urinarias y problemas renales.</p>
                    </div>
                </div>

                <div class="laboratorio-card" onclick="navigateToDetail('citologia')">
                    <img src="static/img/laboratorio/citologia.jpeg" alt="Muestra celular de mascota" class="laboratorio-image">
                    <div class="laboratorio-content">
                        <h3>Citología</h3>
                        <p>Estudia células para diagnosticar tumores, infecciones o inflamaciones.</p>
                    </div>
                </div>

                <div class="laboratorio-card" onclick="navigateToDetail('pruebas-hormonales')">
                    <img src="static/img/laboratorio/hormonales.jpeg" alt="Equipo de pruebas hormonales veterinarias" class="laboratorio-image">
                    <div class="laboratorio-content">
                        <h3>Pruebas Hormonales</h3>
                        <p>Diagnóstico de alteraciones endocrinas como hipotiroidismo o diabetes.</p>
                    </div>
                </div>
            </div>
        </section>
    `,
        "#hematologia": `
        <section class="detail-section">
            <div class="detail-container">
                <div class="detail-image">
                    <img src="static/img/laboratorio/Hematologia/Hematologia.jpeg" alt="Hematología">
                </div>
                <div class="detail-content">
                    <h2>Hematología</h2>
                    <p>El hemograma es un examen fundamental que evalúa la calidad y cantidad de glóbulos rojos, blancos y plaquetas. Permite detectar anemias, infecciones, procesos inflamatorios y otras alteraciones que afectan la salud de tu mascota.</p>
                </div>
                <div class="detail-gallery">
                    <img src="static/img/laboratorio/hematologia/hematologia_2.jpeg" alt="Hematología 1">
                    <img src="static/img/laboratorio/hematologia/hematologia_3.jpeg" alt="Hematología 2">
                    <img src="static/img/laboratorio/hematologia/hematologia_3.jpeg" alt="Hematología 3">
                    <img src="static/img/laboratorio/hematologia/hematologia.jpeg" alt="Hematología 3">
                </div>
            </div>
        </section>
    `,
    "#bioquimica": `
        <section class="detail-section">
            <div class="detail-container">
                <div class="detail-image">
                    <img src="static/img/laboratorio/Bioquimica.jpeg" alt="Bioquímica">
                </div>
                <div class="detail-content">
                    <h2>Bioquímica</h2>
                    <p>Los perfiles bioquímicos permiten evaluar órganos vitales como hígado, riñones y páncreas, además de detectar alteraciones metabólicas y enfermedades crónicas. Es una herramienta clave para diagnósticos tempranos.</p>
                </div>
                <div class="detail-gallery">
                    <img src="static/img/laboratorio/Bioquimica.jpeg" alt="Bioquímica 1">
                    <img src="static/img/laboratorio/bioquimica/bioquimica.jpeg" alt="Bioquímica 2">
                    <img src="static/img/laboratorio/bioquimica/bioquimica.jpeg" alt="Bioquímica 3">
                    <img src="static/img/laboratorio/bioquimica.jpeg" alt="Bioquímica 3">
                </div>
            </div>
        </section>
    `,
    "#coprologia": `
        <section class="detail-section">
            <div class="detail-container">
                <div class="detail-image">
                    <img src="static/img/laboratorio/coprologico/coprologico.jpeg" alt="Coprología">
                </div>
                <div class="detail-content">
                    <h2>Coprología</h2>
                    <p>El examen coprológico analiza las heces de tu mascota para detectar parásitos intestinales, huevos, quistes o alteraciones digestivas. Es clave para prevenir enfermedades gastrointestinales y proteger tanto a los animales como a la familia en casa.</p>
                </div>
                <div class="detail-gallery">
                    <img src="static/img/laboratorio/coprologico.jpeg" alt="Coprología 1">
                    <img src="static/img/laboratorio/coprologico/coprologico_2.jpeg" alt="Coprología 1">
                    <img src="static/img/laboratorio/coprologico/coprologico_2.jpeg" alt="Coprología 2">
                    <img src="static/img/laboratorio/coprologico/coprologico.jpeg" alt="Coprología 3">
                </div>
            </div>
        </section>
    `,
    "#uroanalisis": `
        <section class="detail-section">
            <div class="detail-container">
                <div class="detail-image">
                    <img src="static/img/laboratorio/uroanalisis.jpeg" alt="Uroanálisis">
                </div>
                <div class="detail-content">
                    <h2>Uroanálisis</h2>
                    <p>El examen de orina permite diagnosticar infecciones urinarias, problemas renales, diabetes y alteraciones metabólicas. Es una herramienta sencilla pero muy valiosa para el seguimiento integral de la salud de tu mascota.</p>
                </div>
                <div class="detail-gallery">
                    <img src="static/img/laboratorio/uroanalisis/uroanalisis.jpeg" alt="Uroanálisis 1">
                    <img src="static/img/laboratorio/uroanalisis/uroanalisis_2.jpeg" alt="Uroanálisis 2">
                    <img src="static/img/laboratorio/uroanalisis/uroanalisis_2.jpeg" alt="Uroanálisis 2">
                    <img src="static/img/laboratorio/uroanalisis/uroanalisis.jpeg" alt="Uroanálisis 3">
                </div>
            </div>
        </section>
    `,
    "#citologia": `
        <section class="detail-section">
            <div class="detail-container">
                <div class="detail-image">
                    <img src="static/img/laboratorio/citologia.jpeg" alt="Citología">
                </div>
                <div class="detail-content">
                    <h2>Citología</h2>
                    <p>La citología examina muestras celulares de piel, nódulos, secreciones u órganos. Permite identificar tumores, infecciones bacterianas, fúngicas o procesos inflamatorios. Es un método rápido y de gran apoyo en el diagnóstico veterinario.</p>
                </div>
                <div class="detail-gallery">
                    <img src="static/img/laboratorio/citologia.jpeg" alt="Citología 1">
                    <img src="static/img/laboratorio/citologia/citologia_2.jpeg" alt="Citología 2">
                    <img src="static/img/laboratorio/citologia/citologia_2.jpeg" alt="Citología 2">
                    <img src="static/img/laboratorio/citologia.jpeg" alt="Citología 3">
                </div>
            </div>
        </section>
    `,
    "#pruebas-hormonales": `
        <section class="detail-section">
            <div class="detail-container">
                <div class="detail-image">
                    <img src="static/img/laboratorio/hormonas.jpeg" alt="Pruebas Hormonales">
                </div>
                <div class="detail-content">
                    <h2>Pruebas Hormonales</h2>
                    <p>Las pruebas hormonales ayudan a diagnosticar enfermedades endocrinas como hipotiroidismo, síndrome de Cushing o diabetes. Son fundamentales para establecer un tratamiento adecuado y mejorar la calidad de vida de tu mascota.</p>
                </div>
                <div class="detail-gallery">
                    <img src="static/img/laboratorio/hormonas/hormonas_1.jpeg" alt="Pruebas Hormonales 1">
                    <img src="static/img/laboratorio/hormonas/hormonas_2.jpeg" alt="Pruebas Hormonales 2">
                    <img src="static/img/laboratorio/hormonas/hormonas_3.jpeg" alt="Pruebas Hormonales 3">
                </div>
            </div>
        </section>
    `,
    //emergencias
    "#emergencias": `
            <section class="detail-section">
            <div class="video-container">
                <video id="peluqueriaVideo" autoplay muted loop>
                    <source src="static/img/videos/peluqueria.mp4" type="video/mp4">
                    Tu navegador no soporta video HTML5.
                </video>
            </div>
                <div class="detail-container">
                    <div class="detail-content">
                        <h2>Emergencias 24/7</h2>
                        <p>Atendemos casos de urgencia en cualquier momento del día o la noche. ¡Estamos para ayudarte!</p>
                    </div>
                    <div class="detail-gallery">
                        <img src="static/img/cirugias/dientes/dientes.jpeg" alt="Dental 1">
                        <img src="static/img/cirugias/dientes/dientes_2.jpeg" alt="Dental 2">
                        <img src="static/img/cirugias/dientes/dientes_2.jpeg" alt="Dental 3">
                        <img src="static/img/cirugias/dientes/dientes.jpeg" alt="Dental 4">
                    </div>
                </div>
            </section>
    `,
//Seccipon de nosotros
    "#nosotros-detalle": `
    <!-- Subsección / Nosotros -->
        <section class="detail-section">
            <div class="detail-container">
                <div class="detail-image">
                    <img src="static/img/logos/vet.png" alt="Equipo Veterinario">
                </div>
                <div class="detail-content">
                    <h2>Nuestro Equipo</h2>
                    <p>En el Centro Médico Veterinario Álvaro Andrés Contreras, sabemos que ellos son muy importantes para ti. Es por eso que nos esforzamos en seguir creciendo, para darles ese amor que se merecen, acompañado de la más alta tecnología de la veterinaria y los médicos más preparados.</p>
                    <p>Nuestro equipo de profesionales está compuesto por veterinarios especializados con años de experiencia en diferentes áreas de la medicina veterinaria. Nos mantenemos en constante actualización para ofrecer los mejores tratamientos y cuidados disponibles.</p>
                    <p>La pasión por los animales y el compromiso con su bienestar son los pilares fundamentales de nuestro trabajo diario.</p>
                </div>
                <div class="detail-gallery">
                    <img src="static/img/equipo/equipo1.jpg" alt="Equipo 1">
                    <img src="static/img/equipo/equipo2.jpg" alt="Equipo 2">
                    <img src="static/img/equipo/equipo3.jpg" alt="Equipo 3">
                    <img src="static/img/equipo/equipo4.jpg" alt="Equipo 4">
                </div>
            </div>
        </section>
    `,
    //Sección de nuestras instalaciones
    "#instalaciones-detalle": `
    <!-- Subsección / Instalaciones -->
        <section class="detail-section">
            <div class="detail-container">
                <div class="detail-image">
                    <img src="static/img/instalaciones/clinica_exterior.jpg" alt="Instalaciones exteriores">
                </div>
                <div class="detail-content">
                    <h2>Nuestras Instalaciones</h2>
                    <p>Nuestras instalaciones han sido diseñadas pensando en la comodidad y seguridad de nuestros pacientes de cuatro patas. Contamos con áreas especializadas que incluyen salas de consulta completamente equipadas, quirófanos con tecnología de vanguardia y espacios de recuperación confortables.</p>
                    <p>Cada ambiente ha sido cuidadosamente planificado para reducir el estrés de las mascotas y facilitar el trabajo de nuestros profesionales, garantizando así la mejor atención médica veterinaria.</p>
                    <p>Mantenemos los más altos estándares de limpieza e higiene en todas nuestras áreas, cumpliendo con todos los protocolos de bioseguridad requeridos para un centro médico veterinario de excelencia.</p>
                </div>
                <div class="detail-gallery">
                    <img src="static/img/instalaciones/sala_consulta.jpg" alt="Sala de consulta">
                    <img src="static/img/instalaciones/quirofano.jpg" alt="Quirófano">
                    <img src="static/img/instalaciones/recepcion.jpg" alt="Recepción">
                    <img src="static/img/instalaciones/laboratorio_interno.jpg" alt="Laboratorio">
                </div>
            </div>
        </section>
    `
};
