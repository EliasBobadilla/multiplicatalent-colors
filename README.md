# API de Colores

## Reto: Back End Developer Medium/Senior

---

En la empresa en la que actualmente trabajas han estandarizado los colores que se van a utilizar para todos los
productos; para páginas web, nuevos diseños, flyers y hasta para redes sociales.

Para que los demás departamentos y diseñadores puedan tener acceso a los colores, te han dado a ti y a una compañera la
tarea de crear una aplicación para poderlos copiar fácilmente.

Tu estás encargado/a de crear una API que devuelva la lista de colores y tu compañera está encarga de crear el front
end.

Toma en cuenta los siguientes requerimientos.

Nota: La prueba deberás de realizarla utilizando las tecnologías que te indicó tu reclutador.

## Requerimientos

- README.md con la siguiente información:
    - Breve introducción a la aplicación
    - Listado de las tecnologías o frameworks utilizados
    - Cómo instalar las dependencias y correr el proyecto
    - URL a producción en caso de haber sido subido
- Implementar el API endpoint de colores de acuerdo a las especificaciones
- Implementar paginación de los datos proporcionados
- Guardar los colores que se te proporcionan en base de datos
- Devolver JSON o XML según la indicación
- Utilizar git como control de versiones

Al finalizar, comprime el proyecto en un ZIP y súbelo en la sección derecha. Puedes incluir todas las carpetas que
consideres necesarias.

## Especificaciones

Considera que los siguientes endpoints deben de ser implementados pero que los ejemplos presentados son sugerencias de
cómo deberá de estar formateada la respuesta.

Si incluyes paginación considera que se podrán exponer datos informativos como: página actual, número de páginas, total
de elementos, etc.

## GET /colores

Regresa la colección de colores disponibles con la siguiente información.

- ID
- Name
- Color

### Ejemplo en JSON

```json
[
  {
    "id": 1,
    "name": "cerulean",
    "color": "#98B2D1"
  },
  {
    "id": 2,
    "name": "fuchsia rose",
    "color": "#C74375"
  },
  {
    "id": 3,
    "name": "true red",
    "color": "#BF1932"
  }
]
```

### Ejemplo en XML

```xml
<?xml version="1.0" encoding="UTF-8"?>
<colors>
    <color>
        <id>1</id>
        <name>cerulean</name>
        <color>#98B2D1</color>
    </color>
    <color>
        <id>2</id>
        <name>fuchsia rose</name>
        <color>#C74375</color>
    </color>
    <color>
        <id>3</id>
        <name>true red</name>
        <color>#BF1932</color>
    </color>
</colors>
```

## GET /colores/:id

Regresa un sólo recurso de acuerdo al ID que se especifica, incluye la siguiente información.

- ID
- Name
- Color
- Pantone
- Year

- ## Ejemplo JSON

```json
{
  "id":  1,
  "name":  "cerulean",
  "year":  2000,
  "color":  "#98B2D1",
  "pantone":  "15-4020"
}
```

# Ejemplo XML

```xml
<?xml version="1.0" encoding="UTF-8"?>
<color>
    <id>1</id>
    <name>cerulean</name>
    <color>#98B2D1</color>
    <pantone>15-4020</pantone>
    <year>2000</year>
</color>
```

### Puntos extras

Se te darán puntos extras si incluyes lo siguiente en tu proyecto:

- Pruebas unitarias o con alguna herramienta
- Endpoint para crear colores nuevos
- Códigos HTTP correctos
- Deploy en un servidor o Docker
- Opción en parámetros para devolver JSON o XML.
- Documentación