# Prueba tecnica BIA

## Tabla de contenidos

- [Informacion general](#informacion-general)
- [Tecnologias](#tecnologias)
- [Arquitectura](#arquitectura)
- [Setup](#setup)

## Informacion general

Proyecto de demostracion de conocimientos en Next Js.

## Tecnologias

Proyecto desarrollado con:

- NextJS: 15.1.7 (latest)
- ReactJS: 1.0.0(latest)
- typescript version: 5.7.3
- rxjs: 7.4.0
- node: 22.13.1

## Arquitectura

Se decidio implementar una arquitectura basada en componentes, dentro de la cual cada componente  posee sus estilos y su controlador, esto con el fin de volverlo reutilizable. Igual manera se implementa variables en la hoja de estilo global para manejar el cambio entre modo claro y oscuro, tambien se usan los componentes de tailwind como ayuda para los estilos de cada uno al igual que los disenos responsive. Las rutas se controlan usando la navegacion entre carpetas de Next Js. Para el consumo del servicio se incluye su respectivo caso de uso dentro de este manejamos lo que son las interfaces para este servicio, su respectiva funcion get para la obtencion de los datos y demas funciones para el manejo de los datos como por ejemplo, el filtro de la data por el nombre, filtro de la data por la region, encontra un elemento en especifico por el nombre , todo esto teniendo en cuenta las intefaces creadas. Para el manejo de las fuentes se opta por usar el paquete de nextjs font google que nos permite obtener todas las fuentes deseadas.

## Setup
1. Valide los requisitos del sistema para poder correr el proyecto. [Tecnologias](#tecnologias)
2. Clone el respositorio en su equipo. ``` $ git clone https://github.com/sergio1999/bia-prueba.git ```
3. Instale las dependencias en local usando pnpm:
```
$ cd bia-prueba
$ pnpm install
```
4. Una vez instalada las dependencias corra el servidor con el siguiente comando. ``` $ pnpm run dev ```