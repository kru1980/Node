## Инструкция
1 Устанавливаем Create React App

2 Создаем сервер server.js ( npm packages: express, nodomon)
2.1 В package.json создаем скрипт в "scripts": {"server": "nodemon server.js"}
При запуске данного скрипта запускается сервер, nodemon - перезагружает сервер при изменениях внутри файла server.js
2.2 В корне проекта создаем nodemon.json в нем игнорируем папку "src" тк ее отслеживает обработчик Create React App и с каждым новым рендером будет перезагружать нам сервер
{"ignore":["src"]}
2.3 Чтобы не было конфликта в package.json доюавляем ("proxy": "http://localhost:3000")

3 Настраиваем store
3.1 ( npm packages: redux, redux-thunk, react-redux)
3.2 Создаем конфигуратор store пробрасываем его в приложение через Provider
3.3 Создаем reducers и actions

4 Настраиваем Router
4.1 ( npm packages: react-router-dom, react-router-redux)
4.2 В компоненте App через Route выводим компоненты

5 В компоненте App в componentDidMount пробрасываем action fetchData

6 Подключаем antDesign, настраиваем локализацию

7 Создаем проект на gitHub коммитим наш проект в ветку мастер
7.1 Делаем ветки DEV и newProject работаем  в последней

## Порядок запуска проекта
1 npm run server - запускаем сервер на localhost:3000 (отдельный терминал)
2 npm start - запускаем Create React App на localhost:3001 (отдельный терминал)

## Добавить плагины к редактору 

- express, node

### Задачи

- Написать серверную часть и получение на axios

- Заархивировать и положить в облаке

- Переделать структуру данных и массива todo в объкт используя документацию redux

