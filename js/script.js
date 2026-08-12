const translations = {
    es: {
        nav_profile: "Perfil",
        nav_skills: "Habilidades",
        nav_experience: "Experiencia",
        nav_education: "Formación",
        nav_portfolio: "Portafolio",
        hero_kicker: "Ciudad de México · Disponible para nuevas oportunidades",
        hero_lead: "Ingeniero en Sistemas de Software en transición al análisis de datos, con trayectoria sólida en soporte técnico e infraestructura de TI.",
        btn_download: "Descargar CV (PDF)",
        btn_linkedin: "LinkedIn",
        btn_repos: "Ver repositorios",
        profile_label: "Perfil profesional",
        profile_title: "Quién soy",
        profile_desc: "Ingeniero en Sistemas de Software con sólida trayectoria en soporte técnico, atención a usuarios y administración de infraestructura de TI. Actualmente en transición hacia el análisis de datos, con conocimientos aplicados en Excel, Power BI, SQL y Python. Reconocido por resolver problemas técnicos de forma ágil, capacitar usuarios, documentar procesos y optimizar la eficiencia operativa en entornos educativos y empresariales.",
        skills_label: "Conocimientos técnicos",
        skills_title: "Stack y herramientas",
        skills_cat1: "Datos y BI",
        skills_cat1_items: "Excel (intermedio), Power BI, SQL, Python, PostgreSQL, MySQL, SQLite",
        skills_cat2: "Soporte y TI",
        skills_cat2_items: "Windows, macOS, Linux (básico), ServiceNow, ERP Banner, mantenimiento preventivo/correctivo, clonación de discos",
        skills_cat3: "Desarrollo web",
        skills_cat3_items: "HTML, CSS, Bootstrap",
        skills_cat4: "Herramientas",
        skills_cat4_items: "PyCharm, Visual Studio Code, IntelliJ IDEA, Anaconda, Cisco Packet Tracer, pgAdmin 4, MySQL Workbench, DB Browser for SQLite, TeamViewer, AnyDesk, Microsoft Office",
        skills_cat5: "IA Aplicada",
        skills_cat5_items: "Cursor, Claude, ChatGPT, Gemini",
        exp_label: "Experiencia profesional",
        exp_title: "Trayectoria",
        exp1_date: "Julio 2024 – Agosto 2024",
        exp1_company: "Universidad Tecnológica de México, Campus Sur – Ermita",
        exp1_role: "Analista de Servicios y Tecnologías de Información",
        exp1_i1: "Administré la infraestructura tecnológica del campus, manteniendo la disponibilidad de los servicios clave.",
        exp1_i2: "Atendí y resolví tickets de soporte a través de ServiceNow, dando seguimiento hasta su cierre.",
        exp1_i3: "Restablecí accesos y permisos al ERP Banner en múltiples equipos, solucionando conflictos por vencimiento de certificados digitales y compatibilidad con Java.",
        exp1_i4: "Coordiné la entrega y recepción de equipos de cómputo, llevando control de trazabilidad mediante responsivas.",
        exp1_i5: "Capacité a usuarios en sistemas operativos y herramientas de oficina.",
        exp1_i6: "Supervisé inventarios y respaldos de dispositivos, garantizando la integridad de los datos.",
        exp2_date: "Junio 2023 – Diciembre 2023",
        exp2_company: "Universidad Tecnológica de México, Campus Sur – Ermita",
        exp2_role: "Soporte de Infraestructura y Atención a Usuarios (Servicio Social)",
        exp2_i1: "Migré equipos de Windows 10 a Windows 11, mejorando la estabilidad y compatibilidad del sistema.",
        exp2_i2: "Agilicé el proceso de reinstalación de software mediante clonación de discos.",
        exp2_i3: "Atendí solicitudes de soporte técnico, resolviendo la mayoría en primer contacto.",
        exp2_i4: "Apoyé en tareas básicas de red: peinado de racks, cableado RJ45 y pruebas iniciales de conectividad.",
        exp3_date: "Mayo 2012 – Diciembre 2022",
        exp3_company: "Teratek-App Software & Development SA de CV",
        exp3_role: "Soporte Técnico / Desarrollo Web",
        exp3_i1: "Instalé, configuré y actualicé software y hardware conforme a los requerimientos de cada cliente, asegurando funcionalidad óptima.",
        exp3_i2: "Desarrollé y mantuve sitios web responsivos utilizando HTML, CSS y Bootstrap.",
        exp3_i3: "Colaboré con clientes en el diseño de soluciones web personalizadas, realizando pruebas de compatibilidad con navegadores y dispositivos.",
        exp3_i4: "Implementé un sistema de punto de venta con base de datos PostgreSQL, mejorando la eficiencia operativa del negocio.",
        exp3_i5: "Capacité a usuarios finales en el uso del sistema implementado.",
        exp3_i6: "Realicé respaldos preventivos antes de mantenimientos y reinstalaciones del sistema.",
        edu_label: "Formación",
        edu_title: "Académica y complementaria",
        edu_h1: "Formación académica",
        edu_m1: "Seminario de Titulación: Maestría en Analítica e Inteligencia de Negocios",
        edu_m1_meta: "Universidad Tecnológica de México | Enero 2023 – Diciembre 2023",
        edu_m2: "Ingeniería en Sistemas de Software",
        edu_m2_meta: "Universidad Tecnológica de México | Enero 2020 – Diciembre 2022 | Cédula Profesional: 14030481",
        edu_m3: "Profesional Técnico en Informática",
        edu_m3_meta: "CONALEP Tlalpan 1 | Agosto 1997 – Junio 2002 | Cédula Profesional: 4647481",
        edu_h2: "Formación complementaria",
        edu_c1: "Excel, Introducción a la Lógica de Programación, Lenguaje C Estructurado — IPN (UPIICSA), 20 hrs c/u",
        edu_c2: "Diplomado en Introducción y Soporte Técnico Avanzado a PCs — Centro de Investigación Cibernética (Folio 63459)",
        edu_c3: "Diplomado en Diseño Web (90 hrs) — Edumac, Centro de Artes Digitales",
        edu_c4: "Excel y Power BI: Análisis y Visualización de Datos; Python — Universidad Tecnológica de México, Campus Sur",
        apt_title: "Aptitudes",
        apt_items: "Pensamiento lógico y analítico · Atención al detalle · Aprendizaje autodidacta · Resolución ágil de problemas · Comunicación asertiva · Gestión del tiempo · Adaptación a entornos cambiantes",
        lang_title: "Idiomas",
        lang_items: "Español (Nativo) | Inglés (Básico) | Francés (Básico)",
        port_label: "Portafolio",
        port_title: "Práctica y repositorios",
        port_desc: "Evidencia de práctica continua en datos y desarrollo. Repositorios estructurados por tecnología con scripts, consultas y ejercicios aplicados.",
        port_repo1: "Scripts y estructuras en Python",
        port_repo2: "Modelos y consultas SQL",
        port_repo3: "En preparación",
        port_btn: "Explorar mis repositorios",
        footer_text: "Adolfo Monter Osorio · Currículum web · 2026",
        roles: [
            "Ingeniero en Sistemas de Software",
            "Analista de Datos Junior",
            "Soporte Técnico IT"
        ]
    },
    en: {
        nav_profile: "Profile",
        nav_skills: "Skills",
        nav_experience: "Experience",
        nav_education: "Education",
        nav_portfolio: "Portfolio",
        hero_kicker: "Mexico City · Open to new opportunities",
        hero_lead: "Software Systems Engineer transitioning into data analytics, with a solid background in technical support and IT infrastructure.",
        btn_download: "Download CV (PDF)",
        btn_linkedin: "LinkedIn",
        btn_repos: "View repositories",
        profile_label: "Professional profile",
        profile_title: "About me",
        profile_desc: "Software Systems Engineer with a solid background in technical support, user assistance, and IT infrastructure administration. Currently transitioning into data analytics, with applied knowledge in Excel, Power BI, SQL, and Python. Known for resolving technical issues quickly, training users, documenting processes, and improving operational efficiency in educational and business environments.",
        skills_label: "Technical skills",
        skills_title: "Stack and tools",
        skills_cat1: "Data & BI",
        skills_cat1_items: "Excel (intermediate), Power BI, SQL, Python, PostgreSQL, MySQL, SQLite",
        skills_cat2: "Support & IT",
        skills_cat2_items: "Windows, macOS, Linux (basic), ServiceNow, ERP Banner, preventive/corrective maintenance, disk cloning",
        skills_cat3: "Web development",
        skills_cat3_items: "HTML, CSS, Bootstrap",
        skills_cat4: "Tools",
        skills_cat4_items: "PyCharm, Visual Studio Code, IntelliJ IDEA, Anaconda, Cisco Packet Tracer, pgAdmin 4, MySQL Workbench, DB Browser for SQLite, TeamViewer, AnyDesk, Microsoft Office",
        skills_cat5: "Applied AI",
        skills_cat5_items: "Cursor, Claude, ChatGPT, Gemini",
        exp_label: "Professional experience",
        exp_title: "Career path",
        exp1_date: "July 2024 – August 2024",
        exp1_company: "Universidad Tecnológica de México, South Campus – Ermita",
        exp1_role: "IT Services and Technology Analyst",
        exp1_i1: "Managed campus technology infrastructure, keeping key services available.",
        exp1_i2: "Handled and resolved support tickets through ServiceNow, following each case through to closure.",
        exp1_i3: "Restored ERP Banner access and permissions across multiple devices, resolving issues caused by expired digital certificates and Java compatibility.",
        exp1_i4: "Coordinated computer equipment delivery and intake with custody tracking via handoff forms.",
        exp1_i5: "Trained users on operating systems and office tools.",
        exp1_i6: "Supervised device inventories and backups to protect data integrity.",
        exp2_date: "June 2023 – December 2023",
        exp2_company: "Universidad Tecnológica de México, South Campus – Ermita",
        exp2_role: "Infrastructure Support and User Assistance (Social Service)",
        exp2_i1: "Migrated devices from Windows 10 to Windows 11, improving system stability and compatibility.",
        exp2_i2: "Accelerated software reinstallation through disk cloning.",
        exp2_i3: "Handled technical support requests, resolving most cases on first contact.",
        exp2_i4: "Supported basic networking tasks: rack dressing, RJ45 cabling, and initial connectivity tests.",
        exp3_date: "May 2012 – December 2022",
        exp3_company: "Teratek-App Software & Development SA de CV",
        exp3_role: "Technical Support / Web Development",
        exp3_i1: "Installed, configured, and updated software and hardware according to each client's requirements.",
        exp3_i2: "Built and maintained responsive websites using HTML, CSS, and Bootstrap.",
        exp3_i3: "Collaborated with clients on custom web solutions, including browser and device compatibility testing.",
        exp3_i4: "Implemented a point-of-sale system with a PostgreSQL database, improving business operational efficiency.",
        exp3_i5: "Trained end users on the implemented system.",
        exp3_i6: "Performed preventive backups before system maintenance and reinstallations.",
        edu_label: "Education",
        edu_title: "Academic and complementary",
        edu_h1: "Academic education",
        edu_m1: "Degree Seminar: Master's in Analytics and Business Intelligence",
        edu_m1_meta: "Universidad Tecnológica de México | January 2023 – December 2023",
        edu_m2: "Software Systems Engineering",
        edu_m2_meta: "Universidad Tecnológica de México | January 2020 – December 2022 | Professional License: 14030481",
        edu_m3: "Information Technology Professional Technician",
        edu_m3_meta: "CONALEP Tlalpan 1 | August 1997 – June 2002 | Professional License: 4647481",
        edu_h2: "Complementary training",
        edu_c1: "Excel, Introduction to Programming Logic, Structured C Language — IPN (UPIICSA), 20 hrs each",
        edu_c2: "Diploma in Introduction and Advanced PC Technical Support — Cybernetic Research Center (Folio 63459)",
        edu_c3: "Web Design Diploma (90 hrs) — Edumac, Digital Arts Center",
        edu_c4: "Excel and Power BI: Data Analysis and Visualization; Python — Universidad Tecnológica de México, South Campus",
        apt_title: "Aptitudes",
        apt_items: "Logical and analytical thinking · Attention to detail · Self-taught learning · Agile problem-solving · Assertive communication · Time management · Adaptation to changing environments",
        lang_title: "Languages",
        lang_items: "Spanish (Native) | English (Basic) | French (Basic)",
        port_label: "Portfolio",
        port_title: "Practice and repositories",
        port_desc: "Evidence of continuous practice in data and development. Repositories structured by technology with scripts, queries, and applied exercises.",
        port_repo1: "Python scripts and structures",
        port_repo2: "SQL models and queries",
        port_repo3: "In progress",
        port_btn: "Explore my repositories",
        footer_text: "Adolfo Monter Osorio · Web résumé · 2026",
        roles: [
            "Software Systems Engineer",
            "Junior Data Analyst",
            "IT Technical Support"
        ]
    },
    fr: {
        nav_profile: "Profil",
        nav_skills: "Compétences",
        nav_experience: "Expérience",
        nav_education: "Formation",
        nav_portfolio: "Portfolio",
        hero_kicker: "Mexico · Ouvert à de nouvelles opportunités",
        hero_lead: "Ingénieur en systèmes logiciels en transition vers l'analyse de données, avec une solide expérience en support technique et infrastructure IT.",
        btn_download: "Télécharger le CV (PDF)",
        btn_linkedin: "LinkedIn",
        btn_repos: "Voir les dépôts",
        profile_label: "Profil professionnel",
        profile_title: "Qui je suis",
        profile_desc: "Ingénieur en systèmes logiciels avec une solide expérience en support technique, assistance aux utilisateurs et administration d'infrastructures IT. Actuellement en transition vers l'analyse de données, avec des connaissances appliquées en Excel, Power BI, SQL et Python. Reconnu pour résoudre rapidement les problèmes techniques, former les utilisateurs, documenter les processus et optimiser l'efficacité opérationnelle.",
        skills_label: "Compétences techniques",
        skills_title: "Stack et outils",
        skills_cat1: "Données et BI",
        skills_cat1_items: "Excel (intermédiaire), Power BI, SQL, Python, PostgreSQL, MySQL, SQLite",
        skills_cat2: "Support et IT",
        skills_cat2_items: "Windows, macOS, Linux (basique), ServiceNow, ERP Banner, maintenance préventive/corrective, clonage de disques",
        skills_cat3: "Développement web",
        skills_cat3_items: "HTML, CSS, Bootstrap",
        skills_cat4: "Outils",
        skills_cat4_items: "PyCharm, Visual Studio Code, IntelliJ IDEA, Anaconda, Cisco Packet Tracer, pgAdmin 4, MySQL Workbench, DB Browser for SQLite, TeamViewer, AnyDesk, Microsoft Office",
        skills_cat5: "IA appliquée",
        skills_cat5_items: "Cursor, Claude, ChatGPT, Gemini",
        exp_label: "Expérience professionnelle",
        exp_title: "Parcours",
        exp1_date: "Juillet 2024 – Août 2024",
        exp1_company: "Universidad Tecnológica de México, Campus Sud – Ermita",
        exp1_role: "Analyste des services et technologies de l'information",
        exp1_i1: "J'ai administré l'infrastructure technologique du campus, maintenant la disponibilité des services clés.",
        exp1_i2: "J'ai traité et résolu des tickets de support via ServiceNow, jusqu'à leur clôture.",
        exp1_i3: "J'ai rétabli les accès et permissions à l'ERP Banner sur plusieurs postes, en résolvant des conflits liés aux certificats numériques et à Java.",
        exp1_i4: "J'ai coordonné la livraison et la réception des équipements informatiques avec traçabilité par formulaires de responsabilité.",
        exp1_i5: "J'ai formé les utilisateurs aux systèmes d'exploitation et aux outils bureautiques.",
        exp1_i6: "J'ai supervisé les inventaires et sauvegardes des appareils pour garantir l'intégrité des données.",
        exp2_date: "Juin 2023 – Décembre 2023",
        exp2_company: "Universidad Tecnológica de México, Campus Sud – Ermita",
        exp2_role: "Support d'infrastructure et assistance utilisateurs (service social)",
        exp2_i1: "J'ai migré des postes de Windows 10 vers Windows 11, améliorant stabilité et compatibilité.",
        exp2_i2: "J'ai accéléré la réinstallation des logiciels grâce au clonage de disques.",
        exp2_i3: "J'ai traité les demandes de support technique, résolvant la plupart dès le premier contact.",
        exp2_i4: "J'ai aidé sur des tâches réseau de base : rangement de baies, câblage RJ45 et tests de connectivité.",
        exp3_date: "Mai 2012 – Décembre 2022",
        exp3_company: "Teratek-App Software & Development SA de CV",
        exp3_role: "Support technique / Développement web",
        exp3_i1: "J'ai installé, configuré et mis à jour logiciels et matériels selon les besoins de chaque client.",
        exp3_i2: "J'ai développé et maintenu des sites web responsives avec HTML, CSS et Bootstrap.",
        exp3_i3: "J'ai collaboré avec les clients sur des solutions web personnalisées, avec tests de compatibilité navigateurs et appareils.",
        exp3_i4: "J'ai mis en place un système de point de vente avec base PostgreSQL, améliorant l'efficacité opérationnelle.",
        exp3_i5: "J'ai formé les utilisateurs finaux à l'utilisation du système déployé.",
        exp3_i6: "J'ai réalisé des sauvegardes préventives avant maintenance et réinstallations.",
        edu_label: "Formation",
        edu_title: "Académique et complémentaire",
        edu_h1: "Formation académique",
        edu_m1: "Séminaire de diplôme : Master en analytique et intelligence d'affaires",
        edu_m1_meta: "Universidad Tecnológica de México | Janvier 2023 – Décembre 2023",
        edu_m2: "Ingénierie en systèmes logiciels",
        edu_m2_meta: "Universidad Tecnológica de México | Janvier 2020 – Décembre 2022 | Cédula professionnelle : 14030481",
        edu_m3: "Technicien professionnel en informatique",
        edu_m3_meta: "CONALEP Tlalpan 1 | Août 1997 – Juin 2002 | Cédula professionnelle : 4647481",
        edu_h2: "Formation complémentaire",
        edu_c1: "Excel, introduction à la logique de programmation, langage C structuré — IPN (UPIICSA), 20 h chacun",
        edu_c2: "Diplôme en introduction et support technique avancé PC — Centre de recherche cybernétique (Folio 63459)",
        edu_c3: "Diplôme en design web (90 h) — Edumac, Centre des arts numériques",
        edu_c4: "Excel et Power BI : analyse et visualisation de données ; Python — Universidad Tecnológica de México, Campus Sud",
        apt_title: "Aptitudes",
        apt_items: "Pensée logique et analytique · Attention aux détails · Apprentissage autodidacte · Résolution agile de problèmes · Communication assertive · Gestion du temps · Adaptation aux environnements changeants",
        lang_title: "Langues",
        lang_items: "Espagnol (Natif) | Anglais (Basique) | Français (Basique)",
        port_label: "Portfolio",
        port_title: "Pratique et dépôts",
        port_desc: "Preuve d'une pratique continue en données et développement. Dépôts structurés par technologie avec scripts, requêtes et exercices appliqués.",
        port_repo1: "Scripts et structures Python",
        port_repo2: "Modèles et requêtes SQL",
        port_repo3: "En préparation",
        port_btn: "Explorer mes dépôts",
        footer_text: "Adolfo Monter Osorio · CV web · 2026",
        roles: [
            "Ingénieur en systèmes logiciels",
            "Analyste de données junior",
            "Support technique IT"
        ]
    }
};

let currentLang = "es";
let currentRoleIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingTimeout;

const typingSpeed = 70;
const deletingSpeed = 35;
const delayBetweenRoles = 2200;

function type() {
    const textTarget = document.querySelector(".typing-text");
    if (!textTarget) return;

    const rolesList = translations[currentLang].roles;
    const currentRole = rolesList[currentRoleIndex];

    if (isDeleting) {
        currentCharIndex -= 1;
        textTarget.textContent = currentRole.substring(0, currentCharIndex);
    } else {
        currentCharIndex += 1;
        textTarget.textContent = currentRole.substring(0, currentCharIndex);
    }

    let currentSpeed = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && currentCharIndex === currentRole.length) {
        currentSpeed = delayBetweenRoles;
        isDeleting = true;
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentRoleIndex = (currentRoleIndex + 1) % rolesList.length;
        currentSpeed = 400;
    }

    typingTimeout = setTimeout(type, currentSpeed);
}

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((elem) => {
        const key = elem.getAttribute("data-i18n");
        const value = translations[lang][key];
        if (typeof value === "string") {
            elem.textContent = value;
        }
    });

    clearTimeout(typingTimeout);
    currentRoleIndex = 0;
    currentCharIndex = 0;
    isDeleting = false;
    type();
}

function initMobileNav() {
    const toggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("site-nav");
    if (!toggle || !nav) return;

    const closeNav = () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", currentLang === "es" ? "Abrir menú" : currentLang === "fr" ? "Ouvrir le menu" : "Open menu");
    };

    toggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
        toggle.setAttribute(
            "aria-label",
            isOpen
                ? (currentLang === "es" ? "Cerrar menú" : currentLang === "fr" ? "Fermer le menu" : "Close menu")
                : (currentLang === "es" ? "Abrir menú" : currentLang === "fr" ? "Ouvrir le menu" : "Open menu")
        );
    });

    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeNav);
    });
}

function initScrollReveal() {
    const sections = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
        sections.forEach((section) => section.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    obs.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    sections.forEach((section) => observer.observe(section));
}

function initHeaderState() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    const onScroll = () => {
        header.classList.toggle("is-scrolled", window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
}

function triggerBlobDownload(blobOrBuffer, fileName) {
    // octet-stream evita que el navegador abra el visor PDF en la misma pestaña
    const downloadBlob = new Blob([blobOrBuffer], { type: "application/octet-stream" });
    const objectUrl = URL.createObjectURL(downloadBlob);
    const tempLink = document.createElement("a");

    tempLink.href = objectUrl;
    tempLink.download = fileName;
    tempLink.style.display = "none";
    document.body.appendChild(tempLink);
    tempLink.click();
    tempLink.remove();

    window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1500);
}

function triggerNativeDownload(fileUrl, fileName) {
    const tempLink = document.createElement("a");
    tempLink.href = fileUrl;
    tempLink.download = fileName;
    tempLink.rel = "noopener";
    tempLink.style.display = "none";
    document.body.appendChild(tempLink);
    tempLink.click();
    tempLink.remove();
}

function initCvDownload() {
    const links = document.querySelectorAll(".js-download-cv");

    links.forEach((link) => {
        link.addEventListener("click", async (event) => {
            event.preventDefault();
            event.stopPropagation();

            const fileUrl = link.href; // ruta absoluta resuelta por el navegador
            const fileName = link.getAttribute("download") || "Adolfo_Monter_Osorio_CV.pdf";

            // file:// bloquea fetch por seguridad. Abrimos el PDF en otra pestaña
            // para no perder el currículum web (el usuario puede guardarlo desde ahí).
            if (window.location.protocol === "file:") {
                window.open(fileUrl, "_blank", "noopener,noreferrer");
                return;
            }

            try {
                const response = await fetch(fileUrl, { cache: "no-store" });
                if (!response.ok) throw new Error("No se pudo descargar el CV");

                const buffer = await response.arrayBuffer();
                triggerBlobDownload(buffer, fileName);
            } catch (error) {
                console.error("Descarga del CV falló, usando respaldo nativo:", error);
                triggerNativeDownload(fileUrl, fileName);
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    initMobileNav();
    initScrollReveal();
    initHeaderState();
    initCvDownload();

    const langSelect = document.getElementById("lang-select");
    if (langSelect) {
        langSelect.addEventListener("change", (event) => {
            setLanguage(event.target.value);
        });
    }

    setTimeout(type, 500);
});
