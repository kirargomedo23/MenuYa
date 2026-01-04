# Menú-Ya

## Descripción

Menú-Ya es un backend diseñado para pequeños negocios que desean mostrar sus menús de manera sencilla y organizada. Este sistema permite a los negocios crear categorías y asignar un menú específico a cada una de ellas.

## Características

- **Gestión de categorías:** Los usuarios pueden crear, editar y eliminar categorías.
- **Menús personalizados:** Cada categoría puede tener su propio menú asociado.
- **Fácil de usar:** Diseñado para ser intuitivo y accesible para pequeños negocios.

## Requisitos

- Node.js (v16 o superior)
- npm (v8 o superior)
- NestJS CLI

## Uso

1. Inicia el servidor de desarrollo:

   ```bash
   npm run start:dev
   ```

2. Accede a la API en `http://localhost:3000`.

## Scripts disponibles

- `npm run start`: Inicia el servidor en modo de producción.
- `npm run start:dev`: Inicia el servidor en modo de desarrollo con recarga automática. 
- `npm run lint`: Analiza el código para encontrar y corregir problemas de estilo.


## Domain Driven Design en NestJS

Application: Añadiremos los casos de uso y los transformers para devolver los datos a la salida estándar.

Domain: Incluirá las entidades, eventos, listeners, excepciones, interfaces como repositorios y servicios y value objects

Infrastructure: Contiene los controladores, listeners, parsers, implementación real de repositorios y servicios

