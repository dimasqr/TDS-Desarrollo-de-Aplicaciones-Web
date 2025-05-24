# 📝 Backend de Tareas y Metas - Node.js + Express

Este proyecto implementa un backend simple utilizando **Node.js** y **Express**, siguiendo los requerimientos de la tercera actividad. Permite agregar y eliminar tareas y metas mediante distintos endpoints, con protección mediante un middleware de autenticación por API Key.

---

## 🔐 Middleware de Autenticación

Todos los endpoints requieren que se envíe una **API Key** en el header con el siguiente formato:

```
Authorization: 123
```

Si no se incluye este header o la clave es incorrecta, la solicitud será rechazada con un error 401 (No autorizado).

---

## 📌 Endpoints Disponibles

| Método | Endpoint      | Descripción              |
| ------ | ------------- | ------------------------ |
| GET    | `/getTasks`   | Obtener todas las tareas |
| GET    | `/getGoals`   | Obtener todas las metas  |
| POST   | `/addTask`    | Agregar una nueva tarea  |
| POST   | `/addGoal`    | Agregar una nueva meta   |
| DELETE | `/deleteTask` | Eliminar una tarea       |
| DELETE | `/deleteGoal` | Eliminar una meta        |

> ⚠️ **Nota:** Los datos se almacenan en memoria (en arreglos), por lo que no persisten si la aplicación se detiene o reinicia.

---

## 🛠️ Instalación y Ejecución

### 1. Clonar el repositorio

```bash
git clonehttps://github.com/dimasqr/TDS-Desarrollo-de-Aplicaciones-Web.git
cd to-do-list/backend
```

### 2. Instalar las dependencias

```bash
npm install
```

### 3. Ejecutar el servidor

```bash
npm start
```

El backend estará disponible en: `http://localhost:3000`

# Integración de MySQL

## Requisitos

- Node.js
- MySQL
- XAMPP (para ejecutar el servidor MySQL localmente)

## Instalación

1. **Descargar e instalar XAMPP**  
   [Descargar XAMPP](https://www.apachefriends.org/es/index.html)  
   Una vez descargado, instala XAMPP y asegúrate de que el servidor MySQL esté corriendo.
