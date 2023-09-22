## Desarrollo de Prueba Tecnica Ingenieria Digital

Este repositorio corresponde unicamente a la parte de backend desarrollada con Node.js. Para levantar el proyecto en su entorno local, ejecutar las siguientes acciones:

### Ejecutar `npm install`

Esto instalara todas las dependencias necesarias para ejecutar la aplicación.

### Ejecutar `npx sequelize-cli db:migrate`

Ejecutara todas las migraciones existentes y se creara la base de datos del proyecto.

### Ejecutar `npx sequelize-cli db:seed:all`

Esto generara la data de prueba con la que podra cargar la base de datos por primera vez.

### Se deberan configurar las siguientes variables de entorno:

DB_HOST=  
DB_USER=  
DB_PASSWORD=  
DB_DATABASE=  
DB_PORT=

### Ejecutar `npm run dev`

Esto levantara la aplicacion en modo de desarrollo.

La aplicacion correra en el puerto 3001.

La ruta base del proyecto es: http://localhost:3001/api/v1
