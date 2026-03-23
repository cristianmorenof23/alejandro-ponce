# Development
Pasos para levantar la app en desarrollo

1. levantar la base de datos
```
docker compose up -d

```

2. Crear una copia del env.template, y renombrarlo .env
3. Reemplazar las variables de entorno
4. Ejercutar el comando ``` npm install ```
5. Ejercutar el comando ``` npm run dev ```
6. Ejecutar estos comandos de prisma
```
npx prisma migrate dev
npx prisma generate
```
7. Ejecutar el SEED para [crear la base de datos local](localhost:3000/api/seed)

## Nota : Usuario por defecto
usuario : test1@google.com
password : '12345678'


# Prisma commands

```
npx prisma init
npx prisma migrate dev
npx prisma generate
```