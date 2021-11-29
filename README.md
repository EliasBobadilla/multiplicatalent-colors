# API de Colores

## Reto: Back End Developer

---
[![NodeJS](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/591px-Node.js_logo_2015.svg.png)](https://nodejs.org)

![CodeQL](https://github.com/eliasbobadilla/nodemon/workflows/CodeQL/badge.svg) ![Tests](https://github.com/eliasbobadilla/nodemon/workflows/Tests/badge.svg)

La aplicación tiene las siguientes características:

- Documentación con **Swagger** en la ruta principal, por ejemplo: `http://localhost:3000`
- Dockerizado
- Todos los endpoints cuentan con pruebas unitarias
- Todos los endpoints pueden recibir por `query` el parámetro `type` para responder en formato **XML** o **JSON**.

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
Para ejecutar localmente este proyecto necesitas NodeJS 16 o superior. Puedes descargarlo aquí:
[download](https://nodejs.org/en/download), la guía de
instalación [Install](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) [Node.js](https://nodejs.org).

Si ya cuentas con NodeJS instalado puedes clonar el repositorio con el siguiente comando:

```bash
git clone https://github.com/eliasbobadilla/multiplicatalent-colors.git && cd multiplicatalent-colors
```

Luego, es necesario restaurar las dependencias del proyecto, para esto puedes ejecutar el comando:

```bash
npm install
```

Luego, puedes ejecutar el comando:

```bash
npm run dev
```

Para iniciar el servidor local, por defecto se iniciará en el puerto **3000**.

Puedes correr las pruebas unitarias con:

```bash
npm run test
```

O ver los porcentajes de cobertura de los test con:

```bash
npm run coverage
```

## Deployment:

---
La aplicación está publicada en **Heroku**, puedes visitarla aquí: https://multiplicatalent-colors.herokuapp.com



