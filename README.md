# Node_DB_PostgreSQL


## Descripción

Node_DB_PostgreSQL es un servicio de backend que se conecta a una base de datos PostgreSQL. Maneja datos y relaciones uno a uno, uno a muchos y muchos a muchos. Ofrece una variedad de endpoints para procesar datos utilizando los métodos CRUD y algunos procesos internos para mejorar la calidad de la respuesta de los endpoints, todo con validaciones en middlewares.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado Node.js y npm en tu sistema. Puedes descargarlos desde [nodejs.org](https://nodejs.org/).

## Instalación desde Terminal

##### 1. Clona este repositorio desde GitHub:

  -  git clone https://github.com/sierraCode397/Node_DB_PostgreSQL.git

##### 2. Navega al directorio de tu aplicación:

-   cd Node_DB_PostgreSQL

##### 3. Instala las dependencias del proyecto:

-  npm install

## Uso

##### Para ejecutar la aplicación en un entorno local, utiliza el siguiente comando:

 - npm run dev

##### Para ejecutar la aplicación en producción, utiliza:

- npm run start

La aplicación estará disponible en el puerto 3000 por defecto, pero puede ser configurado.

## Configuración
Crea un archivo **.ENV** en la raíz del proyecto y proporciona las siguientes variables de entorno para la conexión a la base de datos:

> DATABASE_URL=''
> DATABASE_LOCAL_URL=''

Asegúrate de tener una base de datos en ejecución configurada adecuadamente, ya sea mediante Docker u otro servicio externo. Ejecuta la primera migración para crear las tablas en la base de datos.

## Estructura del Proyecto
La aplicación sigue la arquitectura **The Clean Architecture** y se organiza en capas de modelos y servicios. Puedes expandir el proyecto agregando más capas de modelos o servicios según tus necesidades.

## Problemas Comunes
**Problema**: Tratar de acceder a la base de datos cuando esta aún no ha sido creada o ejecutada.

**Solución**: Asegúrate de que tu base de datos se esté ejecutando correctamente antes de iniciar la aplicación.

## Licencia
Este proyecto está bajo la licencia ISC.

## Contacto
**Isaac Luisjuan**

Correo Electrónico: izaack107@gmail.com

Sitio Web: [SierraCode397](https://sierracode397.github.io/)
##### Enlace al Repositorio:
Puedes encontrar el código fuente de este proyecto en [GitHub](https://github.com/sierraCode397/Node_DB_PostgreSQL).

## Agradecimientos
Este proyecto fue creado en la escuela de Platzi como parte del curso **"Curso de Backend con Node.js: Base de Datos con PostgreSQL"**.

Asegúrate de tener Node.js y npm instalados en tu sistema antes de ejecutar estos scripts.

¡Gracias por tu interés en este proyecto! Espero que sea una experiencia interesante y satisfactoria.
