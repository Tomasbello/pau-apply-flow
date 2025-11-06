import { Vacancy } from "./types";

// Base de datos mock de vacantes con datos realistas
export const vacancies: Vacancy[] = [
  {
    id: "1",
    subject: "Cálculo Diferencial e Integral",
    code: "MAT101",
    professor: "María González",
    department: "Matemáticas",
    positions: 3,
    deadline: "2024-11-15",
    deadlineTime: "23:59 hrs",
    modality: "presencial",
    description: "Se buscan ayudantes para apoyar en clases prácticas, resolución de ejercicios y atención de consultas. La asignatura cubre límites, derivadas e integrales con aplicaciones en ingeniería.",
    requirements: [
      "Nota mínima 6.0 en la asignatura",
      "Conocimiento avanzado en LaTeX para preparación de material",
      "Disponibilidad horaria de tardes (14:00 - 18:00)",
      "Habilidades de comunicación y trabajo en equipo",
      "Experiencia previa en tutorías (valorable)"
    ],
    responsibilities: [
      "Preparar y dirigir clases de ejercicios semanales",
      "Atender consultas de estudiantes en horarios designados",
      "Corregir tareas y pruebas parciales",
      "Elaborar material de apoyo (guías, presentaciones)",
      "Participar en reuniones de coordinación semanales"
    ],
    benefits: [
      "Remuneración mensual de $350.000",
      "Certificación de experiencia académica",
      "Acceso a capacitaciones pedagógicas",
      "Flexibilidad para estudios de pregrado",
      "Red de contactos académicos"
    ],
    schedule: "Lunes, Miércoles y Viernes de 14:00 a 17:00 hrs",
    duration: "Semestre Primavera 2024 (Agosto - Diciembre)",
    contact: "maria.gonzalez@universidad.cl"
  },
  {
    id: "2",
    subject: "Programación Orientada a Objetos",
    code: "INFO263",
    professor: "Carlos Rodríguez",
    department: "Informática",
    positions: 2,
    deadline: "2024-11-20",
    deadlineTime: "18:00 hrs",
    modality: "híbrida",
    description: "Buscamos ayudantes con sólidos conocimientos en Java y programación orientada a objetos. El rol incluye soporte en laboratorios prácticos, revisión de código y apoyo en proyectos de desarrollo.",
    requirements: [
      "Java avanzado y dominio de POO",
      "Nota mínima 6.5 en la asignatura",
      "Experiencia con Git y control de versiones",
      "Conocimientos de patrones de diseño",
      "Capacidad para explicar conceptos complejos"
    ],
    responsibilities: [
      "Conducir sesiones de laboratorio",
      "Revisar y corregir código de estudiantes",
      "Preparar ejercicios y proyectos prácticos",
      "Brindar soporte técnico en horarios de consulta",
      "Mantener repositorios de código de ejemplo"
    ],
    benefits: [
      "Remuneración mensual de $380.000",
      "Experiencia práctica en docencia",
      "Acceso a recursos tecnológicos",
      "Posibilidad de trabajo remoto",
      "Participación en proyectos de investigación"
    ],
    schedule: "Martes y Jueves de 15:30 a 18:30 hrs",
    duration: "Semestre Otoño 2025 (Marzo - Julio)",
    contact: "carlos.rodriguez@universidad.cl"
  },
  {
    id: "3",
    subject: "Física General I",
    code: "FIS100",
    professor: "Ana López",
    department: "Física",
    positions: 4,
    deadline: "2024-11-18",
    deadlineTime: "20:00 hrs",
    modality: "virtual",
    description: "Se requieren ayudantes para física general con énfasis en mecánica clásica. El trabajo incluye preparación de demostraciones, apoyo en laboratorios virtuales y resolución de problemas.",
    requirements: [
      "Nota mínima 6.0 en Física General I",
      "Sólida base matemática (cálculo y álgebra)",
      "Experiencia con simuladores de física (deseable)",
      "Habilidades didácticas para explicar conceptos",
      "Disponibilidad para horarios nocturnos"
    ],
    responsibilities: [
      "Guiar laboratorios virtuales de física",
      "Resolver dudas en foros y sesiones sincrónicas",
      "Preparar material audiovisual explicativo",
      "Corregir informes de laboratorio",
      "Elaborar problemas y ejercicios de práctica"
    ],
    benefits: [
      "Remuneración mensual de $340.000",
      "Flexibilidad horaria (trabajo remoto)",
      "Certificado de ayudantía",
      "Acceso a software de simulación",
      "Desarrollo de habilidades pedagógicas online"
    ],
    schedule: "Lunes a Viernes de 18:00 a 20:00 hrs (remoto)",
    duration: "Semestre Primavera 2024 (Agosto - Diciembre)",
    contact: "ana.lopez@universidad.cl"
  },
  {
    id: "4",
    subject: "Química Orgánica",
    code: "QUI200",
    professor: "Pedro Martínez",
    department: "Química",
    positions: 2,
    deadline: "2024-11-22",
    deadlineTime: "17:00 hrs",
    modality: "presencial",
    description: "Ayudantía para química orgánica con énfasis en síntesis y análisis estructural. Requiere conocimientos prácticos de laboratorio y capacidad para supervisar experimentos.",
    requirements: [
      "Nota mínima 6.8 en Química Orgánica",
      "Experiencia práctica en laboratorio",
      "Conocimiento de nomenclatura IUPAC",
      "Inglés técnico nivel intermedio",
      "Certificación de seguridad en laboratorio"
    ],
    responsibilities: [
      "Supervisar prácticas de laboratorio",
      "Preparar reactivos y materiales de trabajo",
      "Corregir informes y exámenes",
      "Enseñar técnicas de síntesis orgánica",
      "Mantener protocolos de seguridad"
    ],
    benefits: [
      "Remuneración mensual de $400.000",
      "Acceso a laboratorios de investigación",
      "Capacitación en técnicas avanzadas",
      "Certificado de experiencia en docencia",
      "Posibilidad de coautoría en publicaciones"
    ],
    schedule: "Miércoles y Viernes de 09:00 a 13:00 hrs",
    duration: "Semestre Primavera 2024 (Agosto - Diciembre)",
    contact: "pedro.martinez@universidad.cl"
  },
  {
    id: "5",
    subject: "Estructuras de Datos y Algoritmos",
    code: "INFO280",
    professor: "Laura Fernández",
    department: "Informática",
    positions: 3,
    deadline: "2024-11-25",
    deadlineTime: "23:59 hrs",
    modality: "híbrida",
    description: "Ayudantía para curso avanzado de estructuras de datos. Incluye soporte en implementación de algoritmos, análisis de complejidad y optimización de código.",
    requirements: [
      "Nota mínima 6.5 en Estructuras de Datos",
      "Dominio de C++ o Java",
      "Comprensión profunda de algoritmos",
      "Experiencia en análisis de complejidad",
      "Habilidad para debugging y optimización"
    ],
    responsibilities: [
      "Realizar talleres de programación",
      "Revisar y evaluar implementaciones",
      "Preparar casos de prueba y ejercicios",
      "Explicar algoritmos complejos",
      "Apoyar en proyectos de programación"
    ],
    benefits: [
      "Remuneración mensual de $390.000",
      "Experiencia en algoritmos avanzados",
      "Certificación académica",
      "Flexibilidad modalidad híbrida",
      "Networking con profesionales del área"
    ],
    schedule: "Martes 14:00-17:00 presencial, Jueves 16:00-18:00 virtual",
    duration: "Semestre Otoño 2025 (Marzo - Julio)",
    contact: "laura.fernandez@universidad.cl"
  },
  {
    id: "6",
    subject: "Biología Celular y Molecular",
    code: "BIO150",
    professor: "Roberto Silva",
    department: "Biología",
    positions: 2,
    deadline: "2024-11-12",
    deadlineTime: "15:00 hrs",
    modality: "presencial",
    description: "Ayudantía en biología celular con enfoque en técnicas microscópicas y cultivo celular. Ideal para estudiantes interesados en investigación biomédica.",
    requirements: [
      "Nota mínima 6.3 en Biología Celular",
      "Experiencia en técnicas de microscopía",
      "Conocimientos de cultivo celular",
      "Habilidad para trabajar con material biológico",
      "Inglés científico (lectura)"
    ],
    responsibilities: [
      "Preparar muestras para microscopía",
      "Supervisar prácticas de laboratorio",
      "Enseñar técnicas de tinción",
      "Corregir informes científicos",
      "Mantener cultivos celulares"
    ],
    benefits: [
      "Remuneración mensual de $360.000",
      "Acceso a equipamiento especializado",
      "Formación en técnicas de investigación",
      "Participación en proyectos científicos",
      "Certificación de ayudantía"
    ],
    schedule: "Lunes y Miércoles de 10:00 a 13:00 hrs",
    duration: "Semestre Primavera 2024 (Agosto - Diciembre)",
    contact: "roberto.silva@universidad.cl"
  },
  {
    id: "7",
    subject: "Estadística Inferencial",
    code: "EST210",
    professor: "Carmen Ruiz",
    department: "Estadística",
    positions: 2,
    deadline: "2024-11-28",
    deadlineTime: "23:59 hrs",
    modality: "virtual",
    description: "Ayudantía de estadística con énfasis en inferencia y uso de software estadístico (R, Python). Orientado a análisis de datos y metodología científica.",
    requirements: [
      "Nota mínima 6.5 en Estadística Inferencial",
      "Dominio de R o Python para estadística",
      "Conocimientos de probabilidad",
      "Experiencia con datasets reales",
      "Capacidad de explicar conceptos abstractos"
    ],
    responsibilities: [
      "Realizar tutoriales de R/Python",
      "Guiar en análisis de datos",
      "Explicar conceptos estadísticos",
      "Corregir trabajos prácticos",
      "Preparar ejercicios con datasets reales"
    ],
    benefits: [
      "Remuneración mensual de $370.000",
      "Trabajo 100% remoto",
      "Experiencia en ciencia de datos",
      "Acceso a bases de datos especializadas",
      "Flexibilidad horaria"
    ],
    schedule: "Flexible (mínimo 12 hrs semanales)",
    duration: "Semestre Otoño 2025 (Marzo - Julio)",
    contact: "carmen.ruiz@universidad.cl"
  },
  {
    id: "8",
    subject: "Mecánica de Sólidos",
    code: "ING220",
    professor: "Javier Torres",
    department: "Ingeniería Civil",
    positions: 3,
    deadline: "2024-11-17",
    deadlineTime: "18:00 hrs",
    modality: "presencial",
    description: "Ayudantía en mecánica de sólidos para ingeniería civil. Incluye análisis estructural, resistencia de materiales y uso de software de simulación.",
    requirements: [
      "Nota mínima 6.0 en Mecánica de Sólidos",
      "Conocimientos de estática y dinámica",
      "Experiencia con software CAD (AutoCAD, SAP2000)",
      "Habilidad para resolver problemas complejos",
      "Disponibilidad tardes completas"
    ],
    responsibilities: [
      "Dirigir clases auxiliares de ejercicios",
      "Enseñar uso de software estructural",
      "Corregir tareas y proyectos",
      "Preparar ejemplos aplicados",
      "Atender consultas personalizadas"
    ],
    benefits: [
      "Remuneración mensual de $385.000",
      "Acceso a software profesional",
      "Experiencia en ingeniería estructural",
      "Certificación académica",
      "Contacto con empresas del rubro"
    ],
    schedule: "Martes y Jueves de 15:00 a 18:30 hrs",
    duration: "Semestre Primavera 2024 (Agosto - Diciembre)",
    contact: "javier.torres@universidad.cl"
  },
  {
    id: "9",
    subject: "Álgebra Lineal",
    code: "MAT201",
    professor: "Sofía Morales",
    department: "Matemáticas",
    positions: 4,
    deadline: "2024-11-14",
    deadlineTime: "20:00 hrs",
    modality: "híbrida",
    description: "Ayudantía de álgebra lineal con aplicaciones en ciencias e ingeniería. Incluye vectores, matrices, transformaciones lineales y espacios vectoriales.",
    requirements: [
      "Nota mínima 6.5 en Álgebra Lineal",
      "Habilidad para abstraer conceptos matemáticos",
      "Experiencia con software matemático (MATLAB, Python)",
      "Paciencia y vocación docente",
      "Disponibilidad flexible"
    ],
    responsibilities: [
      "Realizar ayudantías de ejercicios",
      "Preparar material complementario",
      "Resolver dudas en sesiones virtuales",
      "Corregir controles y tareas",
      "Elaborar ejercicios aplicados"
    ],
    benefits: [
      "Remuneración mensual de $355.000",
      "Modalidad flexible híbrida",
      "Certificación de docencia",
      "Desarrollo de habilidades pedagógicas",
      "Posibilidad de continuar en semestres futuros"
    ],
    schedule: "Lunes presencial 16:00-18:00, Miércoles virtual 18:00-20:00",
    duration: "Semestre Otoño 2025 (Marzo - Julio)",
    contact: "sofia.morales@universidad.cl"
  },
  {
    id: "10",
    subject: "Termodinámica",
    code: "FIS250",
    professor: "Miguel Ángel Vargas",
    department: "Física",
    positions: 2,
    deadline: "2024-11-19",
    deadlineTime: "23:59 hrs",
    modality: "presencial",
    description: "Ayudantía de termodinámica clásica y estadística. Orientado a estudiantes de física e ingeniería con interés en física térmica y mecánica estadística.",
    requirements: [
      "Nota mínima 6.7 en Termodinámica",
      "Sólida base en física y cálculo",
      "Conocimientos de mecánica estadística (deseable)",
      "Habilidad para resolver problemas teóricos",
      "Interés en física fundamental"
    ],
    responsibilities: [
      "Preparar y dictar clases de ejercicios",
      "Resolver problemas complejos",
      "Elaborar material de estudio",
      "Corregir evaluaciones",
      "Atender consultas individuales"
    ],
    benefits: [
      "Remuneración mensual de $365.000",
      "Experiencia en física avanzada",
      "Participación en seminarios de física",
      "Certificación académica",
      "Acceso a biblioteca especializada"
    ],
    schedule: "Miércoles y Viernes de 14:30 a 17:30 hrs",
    duration: "Semestre Primavera 2024 (Agosto - Diciembre)",
    contact: "miguel.vargas@universidad.cl"
  }
];

// Funciones helper para trabajar con vacantes
export const getVacancyById = (id: string): Vacancy | undefined => {
  return vacancies.find(v => v.id === id);
};

export const getVacanciesByDepartment = (department: string): Vacancy[] => {
  if (!department || department === "all") return vacancies;
  return vacancies.filter(v => v.department === department);
};

export const getVacanciesByModality = (modality: string): Vacancy[] => {
  if (!modality || modality === "all") return vacancies;
  return vacancies.filter(v => v.modality === modality);
};

export const searchVacancies = (searchTerm: string): Vacancy[] => {
  if (!searchTerm) return vacancies;
  const term = searchTerm.toLowerCase();
  return vacancies.filter(v => 
    v.subject.toLowerCase().includes(term) ||
    v.code.toLowerCase().includes(term) ||
    v.professor.toLowerCase().includes(term) ||
    v.department.toLowerCase().includes(term)
  );
};

