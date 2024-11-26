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
*Consiste en un sistema por el cual la comunidad de jugadores de videojuegos pueden interactuar y participar de torneos e-sports entre ellos, por premios en la plataforma. 
Los usuarios se registran en la plataforma y pueden participar como organizadores o jugadores. Los organizadores definirán los juegos a competir y darán el alta de los torneos. Cada equipo, compuesto por cinco jugadores, se inscribe a la competición que desea participar.*


### Modelo
[![Imagen del modelo]()](https://drive.google.com/file/d/1Ar3XeGlcMoVT6mahPlaZXNyD5swiu3O5/view?usp=sharing)


## Alcance Funcional 

### Alcance Mínimo

Regularidad:
|Req|Detalle|
|:-|:-|
|CRUD simple|1. CRUD Tipo Juego<br>2. CRUD Usuario<br>3. CRUD Region<br>4. CRUD Noticia|
|CRUD dependiente|1. CRUD Equipo {depende de} CRUD Usuario<br>2. CRUD Juego {depende de} CRUD Tipo Juego|
|Listado<br>+<br>detalle| 1. Listado de juegos filtrado por tipo de juego, muestra Tipo de juego, nombre de juego, descripcion de juego.<br> 2. Listado de equipos disponibles para unirse.|
|CUU/Epic|1. Registrarse a un equipo.<br>2. Actualizar usuario.|

Adicionales para Aprobación:
|Req|Detalle|
|:-|:-|
|CRUD |1. CRUD Región<br>2. CRUD Equipo<br>3. CRUD Usuario<br>4. CRUD Tipo Juego<br>5. CRUD Competición<br>6. CRUD Juego<br>7. CRUD Inscripcion<br>8. CRUD Evento<br>9. CRUD Noticia|
|Listado<br>+<br>detalle| 1. Listado de competiciones filtrado por región, muestra: nombre competicion, fecha competición, fecha fin de inscripción, estado (activa, finalizada, en juego) => detalle muestra datos completos de la competición y región.<br> 2. Listado de historial de competiciones para un equipo, muestra: equipo, fecha de competición, resultado, jugadores que participaron, contrincantes. => detalle muestra datos completos del equipo y competiciones disputadas.|
|CUU/Epic|1. Realizar inscripción a una competición. <br>2. Cancelar inscripción a una competición. <br>3. Enviar recordatorios por mail a Usuarios. <br> 4. Añadir noticias nuevas a pag principal.|

Alcance Adicional:

|Req|Detalle|
|:-|:-|
|CUU/Epic|1. Editar alias de usuario.|
|Otros| 'en construccion'|

