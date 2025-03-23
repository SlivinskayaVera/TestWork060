## Weather Forecast

Приложение представляет собой простое веб-приложение для просмотра текущей погоды и прогноза на несколько дней вперед, разработанное с использованием Next.js и TypeScript. Оно позволяет пользователям искать погоду в различных городах, просматривать детализированный прогноз и сохранять избранные города для быстрого доступа. Избранные города сохраняются в localStorage, чтобы оставаться доступными после перезагрузки страницы.

Для получения данных о погоде используется OpenWeatherMap API.


## Основные страницы приложения

Главная страница:

Пользователь может ввести название города и получить текущую погоду (температура, влажность, скорость ветра и т.д.).

Кнопка "Добавить в избранное": Позволяет сохранить город в список избранных.

Навигация для перехода на страницу просмотра прогноза погоды на пять дней вперед.

Страница прогноза погоды:

Прогноз отображается в виде карточек с информацией для каждого дня.

Страница избранного:

Отображает сохраненные города с краткой информацией о текущей погоде.


## Техническая реализация

Next.js
TypeScript
Axios
Zustand
SCSS Modules
Bootstrap


## Getting Started

First, run the development server:

npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
