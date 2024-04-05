# Propuesta TP DSW

## Grupo
### Integrantes
* 51810 - Capriotti, Santiago (com. 303).
* 51472 - Carovana, Leonel (com. 303).
* 51555 - Duarte, Lautaro (com. 304).
* 52016 -  Zurita, Felipe (com. 303).


### Repositorios
* [frontend app](http://hyperlinkToGihubOrGitlab)
* [backend app](http://hyperlinkToGihubOrGitlab)

## Tema
### Descripción
*Organizador de torneos E-sports: Consiste en un sistema por el cual la comunidad de jugadores de videojuegos pueden interactuar y participar de torneos e-sports entre ellos, por premios en la plataforma. 
Los organizadores definirán los juegos y darán el alta de los torneos, cada equipo se inscribe en el torneo que desea competir.*


### Modelo
[![Imagen del modelo]()](https://drive.google.com/file/d/18mTl4cOiY1kLqtVcZMaUPZ_531Oesi6v/view?usp=drive_link)


## Alcance Funcional 

### Alcance Mínimo

Regularidad:
|Req|Detalle|
|:-|:-|
|CRUD simple|1. CRUD Región<br>2. CRUD Equipo<br>3. CRUD Usuario<br>4. CRUD Tipo Juego|
|CRUD dependiente|1. CRUD Competición {depende de} CRUD Región<br>2. CRUD Juego {depende de} CRUD Tipo Juego|
|Listado<br>+<br>detalle| 1. Listado de competiciones filtrado por región, muestra: nombre competicion, fecha competición, fecha fin de inscripción, estado (activa, finalizada, en juego) => detalle muestra datos completos de la competición y región.<br> 2. 2. Listado de historial de competiciones para un equipo, muestra: equipo, fecha de competición, resultado, jugadores que participaron, contrincantes. => detalle muestra datos completos del equipo y competiciones disputadas.|
|CUU/Epic|1. Realizar la inscripción a una competición.<br>2. Realizar el alta de un equipo.|

Adicionales para Aprobación:
|Req|Detalle|
|:-|:-|
|CRUD |1. CRUD Región<br>2. CRUD Equipo<br>3. CRUD Usuario<br>4. CRUD Tipo Juego<br>5. CRUD Competición<br>6. CRUD Juego<br>7. CRUD Inscripcion|
|CUU/Epic|1. Realizar la inscripción a una competición.<br>2. Realizar el alta de un equipo.<br>3. ...<br>4. ...|
