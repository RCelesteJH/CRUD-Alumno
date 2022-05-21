-- para crear una nueva base de datos
CREATE DATABASE crudalumnomysql;

-- para usar la base de datos
use crudalumnomysql;

-- creando tabla alumno
CREATE TABLE  alumnos(
  id_alumno INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  apellido VARCHAR(50) NOT NULL,
  matricula VARCHAR(50) NOT NULL,
  carrera VARCHAR(50) NOT NULL,
  id_materia INT(10) UNSIGNED NOT NULL
);
-- creando tabla materia
CREATE TABLE  materias(
  id_materia INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  materia VARCHAR(50) NOT NULL,
  promedio FLOAT(10) NOT NULL,
  semestre INT(10) NOT NULL,
  entregables VARCHAR(50) NOT NULL
);
-- para mostrar todas las tablas
show tables;

-- para describir la tabla
describe alumnos;
describe materias;