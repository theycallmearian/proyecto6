# Proyecto6 – API de los Vengadores

Aplicación backend hecha con **Node.js**, **Express** y **MongoDB Atlas**. Gestiona héroes y equipos con relaciones entre ellos.

## Instalación

1. Clona el repositorio o descarga los archivos
2. Instala las dependencias:

```bash
npm install
```

3. Crear archivo .env.

4. Ejecutar archivo seed (semilla) para insertar héroes:

```bash
node seed.js
```

5. Inicia el servidor:

```bash
node index.js
```

## Endpoints

### HÉROES

| Método | Ruta          | Descripción          |
| ------ | ------------- | -------------------- |
| GET    | `/heroes`     | Ver todos los héroes |
| POST   | `/heroes`     | Crear nuevo héroe    |
| PUT    | `/heroes/:id` | Editar un héroe      |
| DELETE | `/heroes/:id` | Eliminar un héroe    |

### EQUIPOS

| Método | Ruta         | Descripción                                                       |
| ------ | ------------ | ----------------------------------------------------------------- |
| GET    | `/teams`     | Obtener todos los equipos                                         |
| POST   | `/teams`     | Crear un equipo nuevo con nombre y miembros                       |
| GET    | `/teams/:id` | Obtener un equipo por su ID                                       |
| PUT    | `/teams/:id` | Añadir nuevos miembros sin eliminar los existentes ni duplicarlos |
| DELETE | `/teams/:id` | Eliminar un equipo por ID                                         |

## Pruebas recomendadas

Puedes usar Thunder Client.

## Autor

Àrian Castro.
