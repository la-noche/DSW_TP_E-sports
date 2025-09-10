# Propuesta TP DSW

## Grupo
### Integrantes
* 51810 - Capriotti, Santiago (com. 303).
* 51472 - Carovana, Leonel (com. 303).
* 51555 - Duarte, Lautaro (com. 304).
* 52016 -  Zurita, Felipe (com. 303).


### Repositorios
* [Frontend app](https://github.com/la-noche/Frontend.git)
* [Backend app](https://github.com/LautiDuarte/Backend)

## Tema: Organizador de torneos de E-Sports
### Descripción
*Consiste en un sistema por el cual la comunidad de jugadores de videojuegos pueden interactuar y participar de torneos e-sports entre ellos.
Los usuarios se registran en la plataforma y pueden participar como organizadores o jugadores. Los organizadores definirán los juegos a competir y darán el alta de los torneos. Cada equipo, compuesto por cinco jugadores, se inscribe a la competición que desea participar.*


### Modelo
[![Link al DER]()](https://drive.google.com/file/d/1Z_lAAitmWhwUlbci6vyaS68ruJ29qs9j/view?usp=sharing)

## Alcance Funcional 

### Alcance Mínimo

Regularidad:
|Req|Detalle|
|:-|:-|
|CRUD simple|1. CRUD Tipo Juego<br>2. CRUD Usuario<br>3. CRUD Region<br>4. CRUD Noticia|
|CRUD dependiente|1. CRUD Equipo {depende de} CRUD Usuario<br>2. CRUD Juego {depende de} CRUD Tipo Juego|
|Listado<br>+<br>detalle| 1. Listado de teams, filtrado por usuario.<br> 2. Listado de equipos.|
|CUU/Epic|1. Registrarse a un equipo.<br>2. Actualizar usuario.|

Adicionales para Aprobación:
|Req|Detalle|
|:-|:-|
|CRUD |1. CRUD Región<br>2. CRUD Equipo<br>3. CRUD Usuario<br>4. CRUD Tipo Juego<br>5. CRUD Competición<br>6. CRUD Juego<br>7. CRUD Inscripcion<br>8. CRUD Noticia<br>9. CRUD Partido|
|Listado<br>+<br>detalle| 1. Listado de competiciones por juego, muestra: nombre competición, fecha fin inscripción y región => detalle muestra datos completos de la competición.<br> 2. Listado de competiciones filtrada por un usuario, muestra: nombre competición, juego, región, creador, fecha fin inscripción y cantidad de equipos aceptados. => detalle muestra datos completos de la competición.|
|CUU/Epic|1. Realizar inscripción a una competición. <br>2. Añadir usuario a un equipo. <br>3. Enviar mail de bienvenida a Usuarios. <br> 4. Crear enfrentamientos de una competición.|

Alcance Adicional:

|Req|Detalle|
|:-|:-|
|CUU/Epic|1. Editar username de usuario. <br>2. Recuperar contraseña de un usuario.|
|Otros| '1. Control de accesos. <br> En construcción.'|

## Instrucciones de instalación

Esta sección proporciona las instrucciones necesarias para instalar, configurar y ejecutar este proyecto en un entorno de desarrollo local.

## Prerrequisitos

Antes de comenzar, asegúrate de tener instalado el siguiente software en tu máquina:

*   **Node.js**: Se recomienda la versión 18.x o superior. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).
*   **pnpm**: Este proyecto utiliza `pnpm` como manejador de paquetes para el backend. Si no lo tenes, podes instalarlo globalmente con npm:
    ```bash
    npm install -g pnpm
    ```
*   **Git**: Para clonar el repositorio.
*   **MySQL**: Una instancia de base de datos MySQL corriendo localmente o accesible desde tu máquina.

## Instalación

Sigue estos pasos para configurar el entorno de desarrollo.

**1. Clonar el Repositorio**

```bash
git clone [URL_DEL_REPOSITORIO]
cd [NOMBRE_DE_LA_CARPETA_DEL_PROYECTO]
```

---

### Configuración del Backend

**2. Navegar al Directorio del Backend e Instalar Dependencias**

```bash
cd backend
pnpm install
```

**3. Configurar las Variables de Entorno**

El backend necesita un archivo `.env` para conectarse a la base de datos y para otras configuraciones.

*   Crea un archivo llamado `.env` en la raíz de la carpeta `/backend`.
*   Copia y pega el siguiente contenido, ajustando los valores según tu configuración local de MySQL.

```env
# Configuración del Entorno
NODE_ENV=development (en caso de producción, production)
PORT=3000

# URL del Frontend 
FRONTEND_URL=http://localhost:4200 (varía para producción)

# Base de Datos (MikroORM)
DB_HOST=localhost (varía para producción)
DB_PORT=3306
DB_USER=root
DB_PASSWORD=<TU_CONTRASEÑA_DE_MYSQL>
DB_NAME=<NOMBRE_DE_TU_BASE_DE_DATOS>
DATABASE_URL=<URL_DE_TU_BASE_DE_DATOS_DEPLOYEADA> (necesario en producción)

# Credenciales de Email (opcional, si es necesario para desarrollo)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=tu_email@gmail.com
EMAIL_PASS=tu_contraseña_de_app
```

---

### Configuración del Frontend

**4. Navegar al Directorio del Frontend e Instalar Dependencias**

*Abrí una nueva terminal o asegúrate de estar en la carpeta raíz del proyecto antes de ejecutar `cd frontend`.*

```bash
cd frontend
pnpm install 
```

## Ejecución del Proyecto

Para correr la aplicación, necesitas tener **dos terminales abiertas**: una para el backend y otra para el frontend.

**1. Iniciar el Servidor del Backend**

En la primera terminal, dentro de la carpeta `/backend`:

```bash
pnpm start:dev
```

El servidor se iniciará y, si es la primera vez, creará las tablas en la base de datos. Deberías ver un mensaje como `Server running on port 3000`.

**2. Iniciar la Aplicación del Frontend**

En la segunda terminal, dentro de la carpeta `/frontend`:

```bash
ng serve
```

La aplicación de Angular se compilará y se ejecutará. Por defecto, estará disponible en `http://localhost:4200`.

**3. Abrir la Aplicación**

Abrí tu navegador web y navegá a **`http://localhost:4200`**. La aplicación frontend se cargará y se comunicará con el servidor backend que se está ejecutando en el puerto 3000.

## Tecnologías Utilizadas

*   **Frontend**: Angular, TypeScript
*   **Backend**: Node.js, Express, TypeScript
*   **Base de Datos**: MySQL
*   **ORM**: MikroORM
*   **Manejador de Paquetes**: pnpm (backend), pnpm (frontend)

## Evidencia del resultado de los tests automáticos

* [Evidencia del resultado de la ejecución de los 4 tests automatizados y el test de integración BACKEND](https://drive.google.com/file/d/1kTbEryVdfLUFIr7L6HcrIQh8CvPS27Qv/view?usp=sharing)
* [Evidencia del resultado de la ejecución del test unitario de un componente 1/2 FRONTEND](https://drive.google.com/file/d/13FQQOBy8j3y17CR-sWDr81vg9U7wvW4f/view?usp=sharing)
* [Evidencia del resultado de la ejecución del test unitario de un componente 2/2 FRONTEND](https://drive.google.com/file/d/15JVLnaHTMnNZFfrnKnlamX9kZZMsNfWr/view?usp=sharing)
* [Evidencia del resultado de la ejecución del test de end-to-end FRONTEND](https://drive.google.com/file/d/1pvhb_PmwLWqYnnhQPbewxt4dFwKJrT3M/view?usp=sharing)
