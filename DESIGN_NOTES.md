# PAU - Plataforma de Ayudantías Universitarias
## Notas de Diseño y Decisiones

### Resumen del Sistema
PAU es un prototipo de alta fidelidad para una plataforma web de postulación a ayudantías académicas. Incluye 4 vistas principales con un flujo progresivo claro y diseño responsive.

---

## 🎨 Sistema de Diseño

### Paleta de Colores
- **Azul Académico**: `--primary: 217 91% 48%` - Color institucional que transmite confianza y profesionalismo
- **Verde Éxito**: `--success: 142 71% 45%` - Para estados completados y confirmaciones
- **Naranja Advertencia**: `--warning: 38 92% 50%` - Para alertas y documentos pendientes
- **Grises Neutros**: Para texto secundario y elementos de soporte

### Justificación de Colores
El azul fue elegido como color primario por su asociación con instituciones educativas y confianza. El verde y naranja proporcionan un sistema de estados claro y accesible.

### Gradientes y Sombras
- Gradientes sutiles en cards principales para crear jerarquía visual
- Sombras con tonos del color primario para mantener coherencia
- Efectos hover suaves para mejorar la interactividad

---

## 📱 Arquitectura de Vistas

### 1. Listado de Vacantes (`/`)
**Propósito**: Punto de entrada principal donde los estudiantes exploran oportunidades

**Decisiones de Diseño**:
- **Hero section** con imagen universitaria para crear contexto inmediato
- **Cards de estadísticas** muestran información clave de un vistazo
- **Filtros prominentes** para facilitar la búsqueda específica
- **Grid responsive** (2 columnas en desktop, 1 en móvil)

**Elementos Clave**:
- Badges de modalidad con colores distintivos
- Información condensada pero completa en cada tarjeta
- Botón CTA prominente "Ver Detalle y Postular"

### 2. Detalle de Vacante (`/vacante/:id`)
**Propósito**: Proporcionar información completa antes de la postulación

**Decisiones de Diseño**:
- **Layout de 2 columnas**: contenido principal + sidebar con info rápida
- **Alerta de deadline** prominente para crear urgencia apropiada
- **Secciones organizadas** con iconos para fácil escaneo
- **CTA flotante** en sidebar para mantener acción visible

**Jerarquía de Información**:
1. Título y badges (identificación inmediata)
2. Deadline y botón principal (acción urgente)
3. Descripción y responsabilidades (contenido detallado)
4. Requisitos con checkmarks (evaluación personal)
5. Beneficios (motivación adicional)

### 3. Formulario de Postulación (`/postular/:id`)
**Propósito**: Capturar información completa de manera progresiva

**Decisiones de Diseño**:
- **Stepper visual** muestra progreso y reduce ansiedad
- **4 pasos lógicos**: Personal → Académica → Documentos → Revisión
- **Validación en tiempo real** para prevenir errores
- **Carga de archivos visual** con estados claros

**Flujo Progresivo**:
1. **Datos Personales**: Información básica rápida
2. **Información Académica**: Datos relevantes + motivación
3. **Documentos**: Carga de archivos con indicadores claros
4. **Revisión**: Confirmación antes del envío

**Características UX**:
- Navegación bidireccional entre pasos
- Validación por paso antes de continuar
- Botones deshabilitados hasta completar requisitos
- Contador de caracteres en campos de texto

### 4. Seguimiento de Postulaciones (`/seguimiento`)
**Propósito**: Transparencia total del proceso post-postulación

**Decisiones de Diseño**:
- **Tabs organizadas**: Activas, Completadas, Documentos
- **Timeline visual** muestra progreso del proceso
- **Alertas contextuales** para documentos faltantes
- **Acciones rápidas** (ver, contactar, descargar)

**Estados del Sistema**:
- **En Revisión**: Con progress bar y timeline
- **Aceptada**: Con alerta de éxito y acciones siguientes
- **Documentos**: Estado individual de cada archivo

---

## 🔧 Componentes Reutilizables

### VacancyCard
- **Hover effects** para mejorar interactividad
- **Badges dinámicos** según modalidad y estado
- **Información jerárquica** con iconos descriptivos

### ProgressSteps
- **Estados visuales claros**: completed, current, pending, error
- **Conectores animados** que cambian según progreso
- **Responsive design** que se adapta a móvil

### Layout
- **Header consistente** con navegación y perfil de usuario
- **Dropdown de usuario** con opciones relevantes
- **Max-width centrado** para óptima legibilidad

---

## 📊 Indicadores de Estado

### Sistema de Badges
- **Modalidad**: Presencial (azul), Virtual (verde), Híbrida (naranja)
- **Estado Postulación**: En Revisión (amarillo), Aceptada (verde), Rechazada (rojo)
- **Documentos**: Subido (verde), Faltante (rojo), Opcional (gris)

### Alertas Contextuales
- **Deadlines urgentes**: Alerta roja con días restantes
- **Documentos faltantes**: Alerta amarilla con acciones directas
- **Confirmaciones**: Alerta verde con pasos siguientes

---

## 🎯 Flujo de Usuario Optimizado

### Navegación Principal
1. **Exploración**: Filtros intuitivos en listado principal
2. **Evaluación**: Información completa en detalle de vacante
3. **Postulación**: Proceso guiado paso a paso
4. **Seguimiento**: Transparencia total del proceso

### Microinteracciones
- **Hover states** en cards y botones
- **Loading states** en transiciones críticas
- **Success states** al completar acciones
- **Error prevention** con validaciones en línea

### Accesibilidad
- **Contraste AA** en todos los elementos de texto
- **Focus states** visibles para navegación por teclado
- **Iconos descriptivos** con texto de apoyo
- **Estructura semántica** HTML correcta

---

## 🚀 Características Técnicas

### Responsive Design
- **Mobile-first** approach con breakpoints en 768px y 1024px
- **Grid system** flexible que se adapta a contenido
- **Navigation collapse** en móvil con hamburger menu

### Performance
- **Lazy loading** de imágenes no críticas
- **Componentes optimizados** con React.memo cuando necesario
- **Bundle splitting** automático con Vite

### Escalabilidad
- **Sistema de tokens** CSS para fácil mantenimiento
- **Componentes modulares** reutilizables
- **Estado centralizado** para datos de aplicación
- **API-ready** con hooks preparados para endpoints reales

---

## 💡 Decisiones UX Clave

### ¿Por qué este ordenamiento de elementos?

1. **Información antes que acción**: Los usuarios necesitan contexto completo antes de comprometerse
2. **Progreso visible**: Reduce ansiedad en procesos largos
3. **Feedback inmediato**: Confirmaciones y validaciones en tiempo real
4. **Acciones reversibles**: Navegación bidireccional en formularios

### ¿Qué guía al usuario?

1. **Jerarquía visual clara**: Tamaños, colores y espaciado consistentes
2. **Rutas de éxito evidentes**: CTAs prominentes en cada paso
3. **Estados del sistema transparentes**: Siempre saber dónde está y qué sigue
4. **Recuperación de errores**: Mensajes claros y acciones correctivas

### Consideraciones de Conversión

- **Reducir fricción**: Mínimos pasos necesarios para postular
- **Crear confianza**: Información completa y proceso transparente
- **Motivar acción**: Beneficios claros y deadlines visibles
- **Prevenir abandono**: Guardado automático y navegación flexible

---

## 📈 Métricas de Éxito Sugeridas

1. **Tasa de conversión**: % de visitantes que completan postulación
2. **Tiempo de compleción**: Duración promedio del proceso
3. **Abandono por paso**: Identificar fricciones específicas
4. **Satisfacción de usuario**: Feedback post-proceso
5. **Errores de validación**: Frecuencia y tipos de errores

---

*Este prototipo está diseñado para ser implementado de manera incremental, con cada componente siendo independiente y testeable. La arquitectura permite escalabilidad futura y fácil mantenimiento.*