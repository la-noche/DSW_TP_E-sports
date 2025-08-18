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

