# punto_mas


## Organización del repositorio

```
.
├── README.md              <- Archivo de documentación para programadores.
├── LICENSE                 <- Noticia de licencia.
├── CHANGELOG               <- Registro de cambios
├── VERSION                 <- Información de versión.
├── Makefile                <- Utildades para el uso del componente.
├── docker-compose.yml      <- Infraestructura como código usando docker-compose.
├── .gitlab-ci.yml          <- Instrucciones de construcción y despliegue
├── pyproject.toml           <- Configuración de instalación para el paquete python.
├── docs                    <- Documentación del componente.
├── nginx                   <- Configuraciones para el servidor web.
├── scripts                 <- Utilidades auxiliares.
└── src                     <- Código fuente del componente.
    ├── Dockerfile          <- Utilidades auxiliares.
    ├── punto_mas           <- Proyecto Django, definiciones de tablas, vistas, etc.
    ├── templates           <- HTML generado usado django.
    ├── ui                  <- Proyecto Vue para la interfaz gráfica.
    │   ├── scss            <- Estilos usando Sass
    │   ├── components      <- Componentes Vue             
    │   ├── package.json    <- Dependencias frontend 
    │   └── main.js         <- Punto de entrada para compilación
    └── manage.py           <- Punto de entrada de la aplicación web
```

## Instrucciones de instalación

Requisitos:

- Ubuntu 24.04+
- docker, docker-compose
- git
- make
- python 3.12+

Clonar el respositorio:

```
$ git clone git@gitlab.com:bigpear.adm/punto_mas.git
```

```
python -m venv .venv

source .venv/bin/activate

make configure
```

```
make install
```

## Uso


Para iniciar el servidor de backend, primero asegurarse de tener aplicadas todas las migraciones y crear un superusuario
```sh
$ punto_mas migrate

$ punto_mas createsuperuser
```

Luego podemos iniciar el servidor

```sh
$ punto_mas runserver
```

En otro terminal podemos compilar los assets de frontend:

Asegurarse de contar con una instalación de node, y descargar las dependencias:

```sh
$ nodeenv -pn lts
$ npm install
```

Ahora podemos iniciar el servidor de desarrollo:

```sh
$ npm start
```

## Documentación

- Documentos de mantenimiento
- Documentos de usuario

## Cómo contribuir
Ver `CONTRIBUTING`

> https://gitlab.com/bigpear.adm/punto_mas/-/wikis/home

## Noticia de licencia
Ver `LICENCE`