# Laravel + React Boilerplate

Boilerplate 

## Getting Started

билдит и запускает все контейнеры в фоновом режиме
docker-compose up --build -d

запускает контейнер с nodejs и делает npm run watch
docker-compose run nodejs npm run watch
для конфигурации бд в laravel
php artisan key:generate

- Rename ".env.example" to ".env" and update the .env file along with database connection

```bash
mv .env.example .env
```

- Build docker containers

```bash
docker-compose up --build -d
```

- Generate key for database

```bash
php artisan key:generate
```


- Install dependencies for app

```bash
docker-compose run php-apache composer install && docker-compose run php-apache composer update
docker-compose run nodejs npm install
```

## Usage

After you run the project open in your browser:

- Frontend and Backend: http://localhost:8080/
- Phpmyadmin: http://localhost:3080/

- Use this command to compile app "docker-compose run nodejs npm run watch"

## Contributing

Please use Prettier and ESLint for writing code, and the process for submitting pull requests to us
