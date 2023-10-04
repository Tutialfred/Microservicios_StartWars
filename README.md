Microservicio de Star Wars API Este proyecto implementa un microservicio de Star Wars API utilizando Docker para la contenerización y desplegado en un servidor virtual VMware con Google Cloud como almacenamiento. El microservicio ofrece 4 endpoints principales para acceder a información sobre personajes, películas y planetas del universo de Star Wars.

Endpoints Gateway Principal: /api

Characters (Personajes):

GET /api/Characters: Obtiene una lista de todos los personajes. GET /api/Characters/{id}: Obtiene información sobre un personaje específico por su ID. POST /api/Characters: Crea un nuevo personaje proporcionando los datos necesarios. PUT /api/Characters/{id}: Actualiza un personaje existente identificado por su ID. DELETE /api/Characters/{id}: Elimina un personaje según su ID.

Films (Películas):

GET /Films: Obtiene una lista de todas las películas de Star Wars. GET /Films/{id}: Obtiene información sobre una película específica por su ID. POST /Films: Crea una nueva película proporcionando los datos necesarios. PUT /Films/{id}: Actualiza una película existente identificada por su ID. DELETE /Films/{id}: Elimina una película según su ID.

Planets (Planetas):

GET /Planets: Obtiene una lista de todos los planetas de Star Wars. GET /Planets/{id}: Obtiene información sobre un planeta específico por su ID. POST /aPlanets: Crea un nuevo planeta proporcionando los datos necesarios. PUT /Planets/{id}: Actualiza un planeta existente identificado por su ID. DELETE /Planets/{id}: Elimina un planeta según su ID.

Requisitos Docker instalado en tu máquina local. Acceso a una cuenta de Google Cloud para el almacenamiento de datos. Configuración Clona este repositorio en tu máquina local:

javascript Copy code MONGO_URI=RUTA DEL CLOUSTER DE MONGODB

Asegúrate de proporcionar la ruta correcta a tu archivo JSON de autenticación de Google Cloud.

1- Gateway 
2- Character 
3- Film
4- Planets
5- Database

El microservicio estará disponible en http://localhost:8080.

El microservicio estará disponible en https://35.247.211.26
