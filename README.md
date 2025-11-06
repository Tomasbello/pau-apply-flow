# PAU - Plataforma de Ayudantías Universitarias

MVP (Producto Mínimo Viable) funcional desarrollado en React para la gestión de postulaciones a ayudantías universitarias.

## 🎯 Metas del Usuario

Este MVP cumple con las siguientes metas de usuario definidas en el proyecto Lean UX:

### Meta 1: "Visualizar y preparar todos los requisitos antes de postular"
El usuario puede ver de forma clara y completa qué documentos y requisitos pide cada ayudantía mediante un checklist visible **antes** de iniciar la postulación.

- ✅ Checklist de requisitos académicos
- ✅ Lista de documentos necesarios
- ✅ Detalles de la ayudantía (horario, duración, modalidad)

### Meta 2: "Completar y enviar la postulación de forma rápida y sin errores"
El usuario completa y envía su postulación mediante un formulario guiado de 4 pasos con **pre-relleno automático** desde su perfil, reduciendo el tiempo de postulación.

- ✅ Pre-relleno automático de datos personales y académicos
- ✅ Validaciones en tiempo real
- ✅ Tiempo reducido de 13 campos a solo 5 por llenar

### Meta 3: "Consultar y entender el estado de la postulación en cualquier momento"
El usuario consulta rápidamente el estado de su postulación mediante una vista visual con timeline y puede ver el detalle completo de lo que envió.

- ✅ Timeline visual del proceso
- ✅ Modal de detalle completo de postulación
- ✅ Acciones claras (contactar profesor, subir documentos)

## ✨ Características Principales

### Sistema de Usuario y Perfil
- 👤 Perfil de usuario editable
- 💾 Persistencia de datos en localStorage
- ⚡ Pre-relleno automático de formularios

### Gestión de Vacantes
- 🔍 Búsqueda en tiempo real
- 🏷️ Filtros por departamento y modalidad
- 📊 Estadísticas dinámicas
- 📋 Checklist de requisitos antes de postular

### Sistema de Postulaciones
- 📝 Formulario guiado de 4 pasos
- ✅ Validaciones en tiempo real
- 🚫 Prevención de postulaciones duplicadas
- 📱 Notificaciones con toasts

### Seguimiento de Postulaciones
- 📈 Timeline visual del proceso
- 🔍 Vista detallada de postulaciones
- 📑 Gestión de documentos
- 📧 Contacto con profesores y coordinadores

## 🚀 Inicio Rápido

### Requisitos previos
- Node.js 16+ y npm instalados ([instalar con nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Tomasbello/pau-apply-flow

# Navegar al directorio del proyecto
cd pau-apply-flow

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El servidor se iniciará en `http://localhost:5173`

### Comandos disponibles

```bash
npm run dev          # Iniciar servidor de desarrollo
npm run build        # Construir para producción
npm run preview      # Vista previa de build de producción
npm run lint         # Ejecutar linter
```

## 🧪 Testing

Consulta el archivo `IMPLEMENTACION.md` para instrucciones detalladas de testing de las 3 metas de usuario.

**Testing rápido:**
1. Configura tu perfil en `/perfil`
2. Explora vacantes y revisa el checklist de requisitos
3. Postula a una ayudantía (datos pre-rellenos)
4. Revisa el seguimiento en `/seguimiento`

## 🛠️ Tecnologías

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **UI Components:** Shadcn/UI
- **Styling:** Tailwind CSS
- **State Management:** React Context API
- **Routing:** React Router v6
- **Notifications:** Sonner
- **Data Query:** TanStack Query

## 📁 Estructura del Proyecto

```
pau-apply-flow/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── ui/              # Componentes de Shadcn/UI
│   │   ├── Layout.tsx       # Layout principal con navegación
│   │   ├── RequirementsChecklist.tsx  # Checklist de requisitos
│   │   ├── ApplicationDetailModal.tsx # Modal de detalle
│   │   └── VacancyCard.tsx  # Tarjeta de vacante
│   ├── pages/               # Páginas principales
│   │   ├── VacanciesList.tsx      # Lista de vacantes
│   │   ├── VacancyDetail.tsx      # Detalle de vacante
│   │   ├── ApplicationForm.tsx    # Formulario de postulación
│   │   ├── ApplicationTracking.tsx # Seguimiento
│   │   └── Profile.tsx            # Perfil de usuario
│   ├── context/             # Context API
│   │   ├── UserContext.tsx          # Contexto de usuario
│   │   └── ApplicationContext.tsx   # Contexto de postulaciones
│   ├── data/                # Datos y tipos
│   │   ├── types.ts         # Interfaces TypeScript
│   │   ├── vacancies.ts     # 10 vacantes mock
│   │   └── mockData.ts      # Datos auxiliares y helpers
│   ├── hooks/               # Custom hooks
│   ├── lib/                 # Utilidades
│   └── utils/               # Helpers (localStorage)
├── public/                  # Archivos estáticos
└── IMPLEMENTACION.md        # Documentación detallada
```

## 📊 Datos Mock

El MVP incluye:
- **10 vacantes** de diferentes departamentos
- **7 carreras** disponibles
- **7 departamentos** académicos
- **3 modalidades**: Presencial, Virtual, Híbrida

Todos los datos se persisten en `localStorage` para simular un backend.

## 🔄 Flujos de Usuario

### 1. Explorar y Postular
```
Inicio → Ver Vacantes → Filtrar → Ver Detalle → 
Revisar Checklist → Postular → Formulario (4 pasos) → Confirmación
```

### 2. Gestionar Perfil
```
Inicio → Mi Perfil → Editar Datos → Guardar → 
Postular (datos pre-rellenos automáticamente)
```

### 3. Seguimiento
```
Inicio → Mis Postulaciones → Ver Timeline → 
Ver Detalle Completo → Contactar Profesor/Subir Documentos
```

## 👥 Equipo

- **Tomás Bello**
- **Eduardo Morales**
- **Carlos Rabutia**

**Curso:** Diseño de Interfaces Usuarias

## 📄 Licencia

Este proyecto es parte de un trabajo académico universitario.

---

**Nota:** Este proyecto fue inicialmente generado con [Lovable](https://lovable.dev) y posteriormente mejorado con funcionalidad completa para cumplir con las metas de usuario del MVP.
