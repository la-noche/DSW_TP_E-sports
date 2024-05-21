# Propuesta TP DSW

## Grupo
### Integrantes
* 51810 - Capriotti, Santiago (com. 303).
* 51472 - Carovana, Leonel (com. 303).
* 51555 - Duarte, Lautaro (com. 304).
* 52016 -  Zurita, Felipe (com. 303).


### Repositorios
* [Frontend app](https://github.com/la-noche/DSW_TP_E-sports/blob/main/Frontend%20app.md)
* [Backend app](https://github.com/la-noche/DSW_TP_E-sports/blob/main/Backend%20app.md)

## Tema: Organizador de torneos de E-Sports
### Descripción
*Consiste en un sistema por el cual la comunidad de jugadores de videojuegos pueden interactuar y participar de torneos e-sports entre ellos, por premios en la plataforma. 
Los usuarios se registran en la plataforma y pueden participar como organizadores o jugadores. Los organizadores definirán los juegos a competir y darán el alta de los torneos. Cada equipo, compuesto por cinco jugadores, se inscribe a la competición que desea participar, la cual puede ser gratuita o de pago (monedas de la plataforma).*


### Modelo
[![Imagen del modelo]()](https://drive.google.com/file/d/18mTl4cOiY1kLqtVcZMaUPZ_531Oesi6v/view?usp=drive_link)


## Alcance Funcional 

### Alcance Mínimo

Regularidad:
|Req|Detalle|
|:-|:-|
|CRUD simple|1. CRUD Región<br>2. CRUD Noticia<br>3. CRUD Usuario<br>4. CRUD Tipo Juego *Elegimos este CRUD para la entrega del 24/05|
|CRUD dependiente|1. CRUD Equipo {depende de} CRUD Usuario<br>2. CRUD Juego {depende de} CRUD Tipo Juego|
|Listado<br>+<br>detalle| 1. Listado de competiciones filtrado por región, muestra: nombre competicion, fecha competición, fecha fin de inscripción, estado (activa, finalizada, en juego) => detalle muestra datos completos de la competición y región.<br> 2. Listado de historial de competiciones para un equipo, muestra: equipo, fecha de competición, resultado, jugadores que participaron, contrincantes. => detalle muestra datos completos del equipo y competiciones disputadas.|
|CUU/Epic|1. Realizar inscripción a una competición.<br>2. Cancelar inscripción a una competición.|

Adicionales para Aprobación:
|Req|Detalle|
|:-|:-|
|CRUD |1. CRUD Región<br>2. CRUD Equipo<br>3. CRUD Usuario<br>4. CRUD Tipo Juego<br>5. CRUD Competición<br>6. CRUD Juego<br>7. CRUD Inscripcion<br>8. Evento<br>9. Noticia|
|CUU/Epic|1. Registrar juegos. <br>2. Registrar competiciones. <br>3. Enviar recordatorios por mail a Usuarios. <br> 4. Registrar resultado del equipo.|

Alcance Adicional:

|Req|Detalle|
|:-|:-|
|CUU/Epic|1. Editar descripcion de usuario.|
|Otros| 'en construccion'|

