// --- Traducciones Dinámicas del Sistema (Diccionario i18n) ---
const translations = {
    es: {
        nav_profile: "/Perfil", nav_skills: "/Habilidades", nav_experience: "/Historial", nav_education: "/Formación", nav_portfolio: "/Portafolio",
        hero_status: "SYS.STATUS: ACTIVE // AUTODIDACTA", btn_linkedin: "CONECTAR EN LINKEDIN", btn_repos: "EXPLORAR REPOS",
        profile_desc: "Ingeniero en Sistemas de Software con sólida trayectoria en soporte técnico, atención a usuarios, administración de infraestructura y desarrollo web básico. Actualmente en transición al análisis de datos, con conocimientos aplicados en Excel, Power BI, SQL y Python. Capacidad para resolver problemas técnicos de forma ágil, capacitar usuarios, documentar procesos y optimizar la eficiencia operativa en entornos de TI.",
        skills_title: "// MATRIZ_DE_HABILIDADES", skills_tag1: "INFRAESTRUCTURA", skills_cat1: "Soporte e IT",
        skills_cat1_1: "Mantenimiento correctivo/preventivo HW/SW", skills_cat1_2: "Soporte Windows, macOS, Linux básico", skills_cat1_3: "Gestión de Tickets (ServiceNow)", skills_cat1_4: "Clonación de discos y migración de entornos", skills_cat1_5: "Infraestructura de red y peinado de racks",
        skills_tag2: "DATA_ANALYTICS", skills_cat2: "Datos y Business Intelligence",
        skills_cat2_1: "Excel Intermedio / Power BI", skills_cat2_2: "Estructuración de Consultas SQL", skills_cat2_3: "Lógica de Scripting en Python", skills_cat2_4: "PostgreSQL, MySQL, SQLite",
        skills_tag3: "LEARNING_ROADMAP", skills_cat3: "Desarrollo Web", skills_sub3: "Capacitándome de forma autodidacta",
        skills_cat3_1: "HTML5 / CSS3 Avanzado", skills_cat3_2: "Lógica de JavaScript Vanilla", skills_cat3_3: "Maquetación Responsiva con Bootstrap",
        exp_title: "// REGISTRO_DE_MISIONES (EXPERIENCIA)", exp1_role: "Analista de Servicios y Tecnologías de Información", exp1_date: "Julio 2024 - Agosto 2024",
        exp1_i1: "Gestioné la infraestructura tecnológica del campus, asegurando la continuidad y disponibilidad de los servicios clave.", exp1_i2: "Administré y resolví incidencias a través de ServiceNow, enfocándome en la optimización de los tiempos de respuesta.", exp1_i3: "Restauré accesos y permisos en el ERP Banner, solucionando conflictos críticos de compatibilidad con Java y vencimiento de certificados digitales.", exp1_i4: "Coordiné la entrega, recepción y control de trazabilidad de equipos de cómputo mediante el uso de responsivas.", exp1_i5: "Capacité a usuarios finales en el uso correcto de sistemas operativos y herramientas de oficina, garantizando un alto nivel de satisfacción.", exp1_i6: "Supervisé inventarios y resguardo de respaldos de dispositivos para asegurar la integridad de la información.",
        exp2_role: "Soporte de Infraestructura y Atención a Usuarios", exp2_date: "Junio 2023 - Diciembre 2023",
        exp2_i1: "Ejecuté la migración masiva de sistemas operativos de Windows 10 a Windows 11, mejorando la estabilidad del parque tecnológico.", exp2_i2: "Agilicé los procesos de despliegue informático y reinstalación de software mediante técnicas avanzadas de clonación de discos.", exp2_i3: "Atendí solicitudes de soporte técnico general, priorizando la resolución efectiva desde el primer contacto con el usuario.", exp2_i4: "Colaboré en tareas de conectividad física y redes, incluyendo peinado de racks, ponchado de cableado RJ45 y pruebas de enlace.",
        exp3_role: "Soporte Técnico / Desarrollo Web", exp3_date: "Mayo 2012 - Diciembre 2022",
        exp3_i1: "Diseñé y mantuve sitios web responsivos utilizando estándares de HTML, CSS y Bootstrap.", exp3_i2: "Implementé sistemas de punto de venta integrados con bases de datos PostgreSQL, capacitando a usuarios finales para optimizar su eficiencia operativa.", exp3_i3: "Instalé, configuré y actualicé componentes de hardware y software de acuerdo con los requerimientos específicos de los clientes.", exp3_i4: "Aseguré la continuidad del negocio mediante la ejecución de respaldos preventivos antes de realizar mantenimientos críticos o reinstalaciones.",
        edu_title: "// EXPEDIENTE_ACADEMICO", edu_h1: "Formación Profesional", edu_m1: "Maestría en Analítica e Inteligencia de Negocios (Seminario)", edu_m2: "Ingeniería en Sistemas de Software", edu_m3: "Profesional Técnico en Informática",
        edu_h2: "Especialización y Cursos", edu_c1: "⚡ Cursos de Lógica, Excel y Lenguaje C - IPN (UPIICSA)", edu_c2: "⚡ Diplomado Soporte Técnico Avanzado - Centro Inv. Cibernética", edu_c3: "⚡ Diplomado en Diseño Web (90 horas) - Edumac", edu_c4: "⚡ Análisis, Visualización de Datos (Power BI) y Python - UNITEC",
        edu_lang_title: "Idiomas detectados:", edu_lang_content: "ESPAÑOL (Nativo) | INGLÉS (Básico) | FRANCÉS (Básico) | ALEMÁN (Básico)",
        port_title: "DEMOSTRACIÓN DE AUTODIDACTISMO", port_desc: "Evidencia de mi evolución técnica y constancia. Mantengo repositorios independientes y estructurados por tecnología donde documento mis prácticas, consultas avanzadas y scripts lógicos en entornos reales.",
        port_repo1: "Scripts y estructuras (.py)", port_repo2: "Modelos de bases de datos (.sql)", port_repo3: "[ En carga / Próximamente ]", port_btn: "EJECUTAR CONEXIÓN: EXPLORAR TODO TU PERFIL",
        footer_text: "AMO.SYSTEM_CORE // VER_2026_V2 // DESARROLLADO CON INGENIERÍA RIGUROSA",
        roles: ["Ingeniero en Sistemas de Software", "Soporte Técnico / Infraestructura IT", "Analista de Datos Junior"]
    },
    en: {
        nav_profile: "/Profile", nav_skills: "/Skills", nav_experience: "/History", nav_education: "/Education", nav_portfolio: "/Portfolio",
        hero_status: "SYS.STATUS: ACTIVE // SELF-TAUGHT", btn_linkedin: "CONNECT ON LINKEDIN", btn_repos: "EXPLORE REPOS",
        profile_desc: "Software Systems Engineer with a solid background in technical support, user services, infrastructure management, and basic web development. Currently transitioning into data analytics, with applied knowledge in Excel, Power BI, SQL, and Python. Proven ability to resolve technical issues agilely, train users, document procedures, and optimize operational efficiency across IT environments.",
        skills_title: "// SKILLS_MATRIX", skills_tag1: "INFRASTRUCTURE", skills_cat1: "Support & IT",
        skills_cat1_1: "Corrective/preventive HW/SW maintenance", skills_cat1_2: "OS Support: Windows, macOS, basic Linux", skills_cat1_3: "Ticketing management via ServiceNow", skills_cat1_4: "Disk cloning and system migration environments", skills_cat1_5: "Network infrastructure and rack cable management",
        skills_tag2: "DATA_ANALYTICS", skills_cat2: "Data & Business Intelligence",
        skills_cat2_1: "Intermediate Excel / Power BI", skills_cat2_2: "SQL query structuring & optimization", skills_cat2_3: "Scripting logic in Python", skills_cat2_4: "PostgreSQL, MySQL, SQLite",
        skills_tag3: "LEARNING_ROADMAP", skills_cat3: "Web Development", skills_sub3: "Self-training progression",
        skills_cat3_1: "Advanced HTML5 / CSS3", skills_cat3_2: "Vanilla JavaScript logic", skills_cat3_3: "Responsive layouts with Bootstrap",
        exp_title: "// MISSION_LOG (EXPERIENCE)", exp1_role: "IT & Services Analyst", exp1_date: "July 2024 - August 2024",
        exp1_i1: "Managed campus IT infrastructure, ensuring continuity and availability for core services.", exp1_i2: "Administered and resolved incidents via ServiceNow, focusing on optimizing response time matrix.", exp1_i3: "Restored user access and permissions in Banner ERP, solving critical Java compatibility conflicts and digital certificate expirations.", exp1_i4: "Coordinated deployment, reception, and asset traceability of corporate hardware using strict custody agreements.", exp1_i5: "Trained end-users on operating systems and office software suites, ensuring high satisfaction ratings.", exp1_i6: "Supervised technology inventories and secure backups to maintain overall data integrity protocols.",
        exp2_role: "Infrastructure Support & User Services", exp2_date: "June 2023 - December 2023",
        exp2_i1: "Executed massive operating system migrations from Windows 10 to Windows 11, improving hardware park stability.", exp2_i2: "Streamlined deployment procedures and software re-installations utilizing advanced disk cloning techniques.", exp2_i3: "Handled general technical support requests, prioritizing effective first-contact resolution with users.", exp2_i4: "Collaborated on physical connectivity and network operations, including rack dressing, RJ45 crimping, and link testing.",
        exp3_role: "Technical Support / Web Development", exp3_date: "May 2012 - December 2022",
        exp3_i1: "Designed and maintained responsive websites conforming to HTML, CSS, and Bootstrap framework standards.", exp3_i2: "Implemented POS systems integrated with PostgreSQL databases, training end-users to optimize business performance.", exp3_i3: "Installed, configured, and upgraded internal hardware and software components per custom client requirements.", exp3_i4: "Ensured business continuity by running preventive data backups prior to critical maintenance or re-installation processes.",
        edu_title: "// ACADEMIC_RECORD", edu_h1: "Professional Education", edu_m1: "Master's in Business Intelligence and Analytics (Seminar)", edu_m2: "Software Systems Engineering", edu_m3: "Information Technology Professional Technician",
        edu_h2: "Specialization & Courses", edu_c1: "⚡ Logic, Excel, and C Language Courses - IPN (UPIICSA)", edu_c2: "⚡ Advanced Technical Support Diploma - Cybernetic Research Center", edu_c3: "⚡ Web Design Diploma (90 Hours) - Edumac", edu_c4: "⚡ Data Analysis, Visualization (Power BI) & Python - UNITEC",
        edu_lang_title: "Detected Languages:", edu_lang_content: "SPANISH (Native) | ENGLISH (Basic) | FRENCH (Basic) | GERMAN (Basic)",
        port_title: "SELF-TAUGHT EVIDENCE DEMO", port_desc: "Proof of technical evolution and commitment. I maintain independent repositories structured by technology where I document practices, advanced queries, and logical scripting for real-world environments.",
        port_repo1: "Scripts & structures (.py)", port_repo2: "Database models (.sql)", port_repo3: "[ Uploading / Coming Soon ]", port_btn: "EXECUTE CONNECTION: EXPLORE PERFILE",
        footer_text: "AMO.SYSTEM_CORE // VER_2026_V2 // ENGINEERED WITH RIGOROUS LOGIC",
        roles: ["Software Systems Engineer", "Technical Support / IT Infrastructure", "Junior Data Analyst"]
    },
    fr: {
        nav_profile: "/Profil", nav_skills: "/Compétences", nav_experience: "/Historique", nav_education: "/Formation", nav_portfolio: "/Portfolio",
        hero_status: "SYS.STATUS: ACTIVE // AUTODIDACTE", btn_linkedin: "SE CONNECTER SUR LINKEDIN", btn_repos: "EXPLORER REPOS",
        profile_desc: "Ingénieur en Systèmes de Logiciels avec une solide expérience en support technique, service aux utilisateurs, gestion des infrastructures et développement web de base. Actuellement en transition vers l'analyse de données, avec des connaissances appliquées en Excel, Power BI, SQL et Python. Capacité à résoudre les problèmes techniques de manière agile, à former les utilisateurs, à documenter les processus et à optimiser l'efficacité opérationnelle dans les environnements informatiques.",
        skills_title: "// MATRICE_DE_COMPETENCES", skills_tag1: "INFRASTRUCTURE", skills_cat1: "Support et TI",
        skills_cat1_1: "Maintenance corrective/préventive HW/SW", skills_cat1_2: "Support Windows, macOS, Linux de base", skills_cat1_3: "Gestion des tickets via ServiceNow", skills_cat1_4: "Clonage de disques et environnements de migration", skills_cat1_5: "Infrastructure réseau et brassage de racks",
        skills_tag2: "DATA_ANALYTICS", skills_cat2: "Données et Business Intelligence",
        skills_cat2_1: "Excel Intermédiaire / Power BI", skills_cat2_2: "Structuration de requêtes SQL", skills_cat2_3: "Logique de script en Python", skills_cat2_4: "PostgreSQL, MySQL, SQLite",
        skills_tag3: "LEARNING_ROADMAP", skills_cat3: "Développement Web", skills_sub3: "Progression autodidacte",
        skills_cat3_1: "HTML5 / CSS3 Avancé", skills_cat3_2: "Logique JavaScript Vanilla", skills_cat3_3: "Mises en page responsives avec Bootstrap",
        exp_title: "// JOURNAL_DE_MISSION (EXPÉRIENCE)", exp1_role: "Analyste des Services et Technologies de l'Information", exp1_date: "Juillet 2024 - Août 2024",
        exp1_i1: "Gestion de l'infrastructure technologique du campus, assurant la continuité et la disponibilité des services clés.", exp1_i2: "Administration et résolution des incidents via ServiceNow, avec un focus sur l'optimisation des temps de réponse.", exp1_i3: "Restauration des accès et des autorisations dans l'ERP Banner, résolution des conflits critiques de compatibilité Java et des expirations de certificats numériques.", exp1_i4: "Coordination de la livraison, de la réception et du contrôle de traçabilité des équipements informatiques.", exp1_i5: "Formation des utilisateurs finaux à l'utilisation correcte des systèmes d'exploitation et des outils bureautiques.", exp1_i6: "Supervision des inventaires et sauvegarde sécurisée des appareils pour garantir l'intégrité des informations.",
        exp2_role: "Support Infrastructure et Service Utilisateurs", exp2_date: "Juin 2023 - Décembre 2023",
        exp2_i1: "Exécution de la migration massive des systèmes d'exploitation de Windows 10 à Windows 11, améliorant la stabilité du parc.", exp2_i2: "Accélération des processus de déploiement et de réinstallation de logiciels grâce à des techniques avancées de clonage de disques.", exp2_i3: "Prise en charge des demandes de support technique général, en priorisant une résolution efficace dès le premier contact.", exp2_i4: "Collaboration aux tâches de connectivité physique, y compris le brassage de racks, le sertissage RJ45 et les tests de liaison.",
        exp3_role: "Support Technique / Développement Web", exp3_date: "Mai 2012 - Décembre 2022",
        exp3_i1: "Conception et maintenance de sites web responsifs en utilisant les standards HTML, CSS et Bootstrap.", exp3_i2: "Mise en œuvre de systèmes de point de vente intégrés aux bases de données PostgreSQL, formation des utilisateurs.", exp3_i3: "Installation, configuration et mise à niveau des composants matériels et logiciels selon les besoins des clients.", exp3_i4: "Assurance de la continuité de l'activité par l'exécution de sauvegardes préventives avant toute maintenance critique.",
        edu_title: "// DOSSIER_ACADEMIQUE", edu_h1: "Formation Professionnelle", edu_m1: "Master en Analyse et Intelligence d'Affaires (Séminaire)", edu_m2: "Ingénierie des Systèmes de Logiciels", edu_m3: "Technicien Professionnel en Informatique",
        edu_h2: "Spécialisation et Cours", edu_c1: "⚡ Cours de Logique, Excel et Langage C - IPN (UPIICSA)", edu_c2: "⚡ Diplôme de Support Technique Avancé - Centre de Recherche Cybernétique", edu_c3: "⚡ Diplôme en Design Web (90 heures) - Edumac", edu_c4: "⚡ Analyse, Visualisation de Données (Power BI) et Python - UNITEC",
        edu_lang_title: "Langues détectées :", edu_lang_content: "ESPAGNOL (Natif) | ANGLAIS (Basique) | FRANÇAIS (Basique) | ALLEMAND (Basique)",
        port_title: "DEMONSTRATION D'AUTODIDACTISME", port_desc: "Preuve de mon évolution technique et de ma constance. Je gère des dépôts indépendants structurés par technologie où je documente mes pratiques, requêtes avancées et scripts logiques.",
        port_repo1: "Scripts et structures (.py)", port_repo2: "Modèles de bases de données (.sql)", port_repo3: "[ En charge / Prochainement ]", port_btn: "EXECUTER LA CONNEXION : EXPLORER LE PROFIL",
        footer_text: "AMO.SYSTEM_CORE // VER_2026_V2 // DÉVELOPPÉ AVEC RIGUEUR INGÉNIEUR",
        roles: ["Ingénieur en Systèmes de Logiciels", "Support Technique / Infra TI", "Analyste de Données Junior"]
    }
};

// --- Config Máquina de Escribir (Terminal de Comandos) ---
let currentLang = "es";
let currentRoleIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const typingSpeed = 70;
const deletingSpeed = 35;
const delayBetweenRoles = 2500;
let typingTimeout;

function type() {
    const rolesList = translations[currentLang].roles;
    const currentRole = rolesList[currentRoleIndex];
    const textTarget = document.querySelector(".typing-text");

    if (!textTarget) return;

    if (isDeleting) {
        textTarget.textContent = currentRole.substring(0, currentCharIndex - 1);
        currentCharIndex--;
    } else {
        textTarget.textContent = currentRole.substring(0, currentCharIndex + 1);
        currentCharIndex++;
    }

    let currentSpeed = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && currentCharIndex === currentRole.length) {
        currentSpeed = delayBetweenRoles;
        isDeleting = true;
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentRoleIndex = (currentRoleIndex + 1) % rolesList.length;
        currentSpeed = 500;
    }

    typingTimeout = setTimeout(type, currentSpeed);
}

// --- Cambiar el Idioma del Sistema ---
function setLanguage(lang) {
    currentLang = lang;
    const elementsToTranslate = document.querySelectorAll("[data-glow], nav, header, main, footer");
    
    // Cambiar textos planos marcados con data-i18n
    const taggedElements = document.querySelectorAll("[data-i18n]");
    taggedElements.forEach(elem => {
        const key = elem.getAttribute("data-i18n");
        if (translations[lang][key]) {
            // Si tiene elementos internos importantes (.neon-text), no sobreescribir con textContent puro.
            if (elem.querySelector(".neon-text") || elem.querySelector(".btn-text")) {
                const neonSpan = elem.querySelector(".neon-text");
                const btnSpan = elem.querySelector(".btn-text");
                
                if (neonSpan) {
                    // Mantener estructura de spans con neón si aplica
                    let baseText = translations[lang][key];
                    elem.innerHTML = baseText;
                } else if (btnSpan) {
                    btnSpan.textContent = translations[lang][key];
                }
            } else {
                elem.textContent = translations[lang][key];
            }
        }
    });

    // Reiniciar animación de la máquina de escribir con los nuevos roles del idioma
    clearTimeout(typingTimeout);
    currentRoleIndex = 0;
    currentCharIndex = 0;
    isDeleting = false;
    type();
}

// --- Efecto Interactivo del Mouse en Tarjetas (Efecto de Iluminación 3D) ---
function initGlowEffect() {
    const cards = document.querySelectorAll("[data-glow]");
    
    cards.forEach(card => {
        card.addEventListener("mousemove", e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        });
    });
}

// --- Animación Inteligente de Desplazamiento (Scroll Reveal) ---
function initScrollReveal() {
    const sections = document.querySelectorAll(".reveal");
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
}

// Inicialización de Eventos del Sistema
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 1000);
    initGlowEffect();
    initScrollReveal();

    // Escuchador del Selector de Idioma
    const langSelect = document.getElementById("lang-select");
    if (langSelect) {
        langSelect.addEventListener("change", (e) => {
            setLanguage(e.target.value);
        });
    }
});v