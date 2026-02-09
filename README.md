# 🎮 Каталог компьютерных игр

Веб-приложение для просмотра каталога игр с поиском и фильтрацией по жанрам.

## 🚀 Технологии

- Vue.js 3
- Vite
- CSS3

## 📦 Установка и запуск

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Деплой на GitHub Pages
npm run deploy
```

## 🎯 Функциональность

- Просмотр каталога из 10 популярных игр
- Поиск игр по названию
- Фильтрация по жанрам (RPG, Action, Strategy, Sandbox, Simulation)
- Детальная информация о каждой игре
- Адаптивный дизайн для всех устройств

  game-catalog/
├── public/
│   └── vite.svg
│
├── src/
│   ├── assets/
│   │   ├── vue.svg
│   │
│   ├── components/
│   │   ├── AppHeader.vue       # Заголовок приложения
│   │   ├── GameCard.vue        # Карточка игры
│   │   └── GameCatalog.vue     # Каталог с поиском и фильтрацией
│   │
│   ├── data/
│   │   └── games.js            # Массив данных об играх
│   │
│   ├── App.vue                 # Корневой компонент
│   ├── main.js                 # Точка входа приложения
│   └── style.css               # Глобальные стили
│
├── .gitignore
├── .vscode/
│   └── extensions.json
│
├── index.html                  # HTML шаблон
├── package.json                # Зависимости проекта
├── package-lock.json
├── vite.config.js              # Конфигурация Vite
└── README.md                   # Документация

Автор: Bolotbekov Alibek
