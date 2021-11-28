# API de Colores

## Reto: Back End Developer Medium/Senior

---
![CodeQL](https://github.com/eliasbobadilla/nodemon/workflows/CodeQL/badge.svg) ![Tests](https://github.com/eliasbobadilla/nodemon/workflows/Tests/badge.svg)

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

La aplicación tiene las siguientes características:
- Documentación con **Swagger** en la ruta principal: `http://localhost:3000`
- Desplegado con Docker
- Todos los endpoints cuentan con pruebas unitarias
- Todos los endpoints pueden recibir por `query` el parámetro `type` para responder en formato XML o JSON.

**Ejemplo** usando `curl` desde terminal:

- `curl http://localhost:3000/colores/7` **devuelve el color con Id #7 en formato JSON**

```json
{
  "id": 7,
  "name": "demo",
  "year": 2021,
  "color": "Yellow",
  "pantone": "24-1985"
}
```

- `curl http://localhost:3000/colores/7?type=xml` **devuelve el color con Id #7 en formato XML**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<color>
    <id>7</id>
    <name>demo</name>
    <year>2021</year>
    <color>Yellow</color>
    <pantone>24-1985</pantone>
</color>
  ```

## Endpoints disponibles:

---
### get:
- [/colores]() **Listar todos los colores guardados en la base de datos**
- [/colores/:id]() **Obtener color por Id**
- [/colores/:page/:total]() **Listar colores guardados en la base de datos con paginación**

### post:
- [/colores]() **Agregar un nuevo color**

## Tecnologías utilizadas:

---
- NodeJS
- Express
- SQLite

## Configurar entorno local de desarrollo:

---
Para ejecutar localmente este proyecto necesitas NodeJS 16 o superior. Puedes descargarlo aqui: 
[download](https://nodejs.org/en/download), la guia de instalacion [Install](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) [Node.js](https://nodejs.org).

Si ya cuentas con NodeJS instalado puedes clonar el repositorio con el siguiente comando:
```bash
git clone https://github.com/eliasbobadilla/multiplicatalent-colors.git && cd multiplicatalent-colors
```

luego, es necesario restaurar las dependencias del proyecto, 
para esto puedes ejecutar el comando
```bash
npm install
```
luego, puedes ejecutar el comando
```bash
npm run dev
```
para iniciar el servidor local, por defecto se iniciará en el puerto **3000**.

Puedes correr las pruebas unitarias con
```bash
npm run test
```

## Deployment:

---
Puedes ver la aplicación en linea aqui: www.lorenipsum.com



