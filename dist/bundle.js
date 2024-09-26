/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function() {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\nvar userList = document.querySelector('#userList');\nvar growingUp = document.querySelector(\"#growingUp\"); // кнопка упорядочить по возрастанию ID\nvar growingDown = document.querySelector(\"#growingDown\"); // кнопка упорядочить по убыванию ID\nvar alphabet = document.querySelector(\"#alphabet\"); // кнопка упорядочить по алфавиту\nvar users = []; // массив для хранения пользователей\nfunction fetchUsers() {\n    return __awaiter(this, void 0, void 0, function () {\n        var response;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, fetch('https://jsonplaceholder.typicode.com/users')];\n                case 1:\n                    response = _a.sent();\n                    return [4 /*yield*/, response.json()];\n                case 2:\n                    users = _a.sent(); // сохраняем пользователей в массив\n                    renderUsers(users); // отображаем пользователей\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\n// ###  async\n// - Ключевое слово async используется для объявления асинхронной функции. \n// Асинхронные функции позволяют использовать оператор await внутри них, \n// что делает код более читаемым и упрощает работу с промисами \n// (объектами, представляющими завершение или неудачу асинхронной операции).\n// ###  await\n// - Оператор await используется для ожидания завершения промиса.\n//  Он может использоваться только внутри асинхронных функций (async). \n//  В данном случае он ожидает завершения вызова функции fetch.\n// ###  fetch\n// - Это встроенная функция JavaScript, которая используется для выполнения HTTP-запросов к указанному URL. \n// Она возвращает промис, который разрешается в ответ на запрос.\n// ###  ('https://jsonplaceholder.typicode.com/users')\n// - Это строка, представляющая URL, по которому будет выполнен запрос.\n//  В данном случае мы запрашиваем список пользователей с API JSONPlaceholder.\n// ###  users\n// - Это переменная, в которую будет сохранен массив пользователей, полученный из ответа API. \n// Обратите внимание, что здесь не указано ключевое слово для объявления переменной (например, let, const или var), \n// что может привести к созданию глобальной переменной, если она не была объявлена ранее.\n// ###  = \n// - Оператор присваивания снова используется для присвоения значения переменной users.\n// ###  await\n// - Снова используется оператор await, чтобы подождать завершения промиса, возвращаемого методом .json().\n// ### response.json()\n// - Это метод объекта ответа (response), который читает тело ответа и возвращает его в виде JavaScript-объекта (или массива).\n//  Этот метод также возвращает промис, который разрешается в данные JSON.\n// ###  renderUsers(users)\n// - Это вызов функции с именем renderUsers, передавая ей массив пользователей (users).\n//  Предполагается, что эта функция отвечает за отображение пользователей на веб-странице или в интерфейсе.\n// ### Итог\n// Функция fetchUsers() асинхронно получает список пользователей из API по указанному URL, \n// преобразует ответ в формат JSON и передает полученные данные другой функции для отображения на экране.\nfetchUsers();\nfunction renderUsers(users) {\n    if (userList) {\n        userList.textContent = ''; // очищаем список перед отрисовкой\n        users.forEach(function (user) {\n            var listItem = document.createElement('div');\n            userList.appendChild(listItem);\n            var idItem = document.createElement('h3');\n            idItem.innerHTML = \"id: \".concat(user.id, \" \");\n            listItem.appendChild(idItem);\n            var titleItem = document.createElement('h2');\n            titleItem.innerHTML = user.name;\n            listItem.appendChild(titleItem);\n            var emailItem = document.createElement('p');\n            emailItem.innerHTML = \"email: \".concat(user.email, \" \");\n            listItem.appendChild(emailItem);\n            var websiteItem = document.createElement('h3');\n            websiteItem.innerHTML = \"website: \".concat(user.website, \" \");\n            listItem.appendChild(websiteItem);\n        });\n    }\n}\nif (growingUp) {\n    // Сортировка по возрастанию ID\n    growingUp.addEventListener(\"click\", growingUpFunc);\n}\nfunction growingUpFunc() {\n    var sortedUsers = __spreadArray([], users, true).sort(function (a, b) { return a.id - b.id; }); // сортируем по возрастанию\n    //   Оператор распространения (Spread Operator)\n    // [...] — это оператор распространения (spread operator).\n    //  Он используется для создания нового массива, который является копией существующего массива. \n    // - users — это массив объектов (например, пользователей), и [...] создаёт новый массив, \n    // содержащий те же элементы, что и users. Это важно, потому что мы не хотим изменять оригинальный массив users, \n    // а хотим работать с его копией.\n    //  Метод sort()\n    // .sort() — это метод массива в JavaScript, который сортирует элементы массива на месте и возвращает отсортированный массив. \n    // Этот метод принимает функцию сравнения, которая определяет порядок сортировки.\n    // Функция сравнения\n    // (a, b) => a.id - b.id — это стрелочная функция, которая принимает два аргумента: a и b. \n    // Эти аргументы представляют собой два элемента массива, которые будут сравниваться.\n    // - **Сравнение**:\n    //   - Если результат выражения a.id - b.id меньше нуля (например, 1 - 2 = -1), это означает, что a должен идти перед b.\n    //   - Если результат больше нуля (например, 2 - 1 = 1), это означает, что b должен идти перед a.\n    //   - Если результат равен нулю (например, 1 - 1 = 0), порядок между a и b не меняется.\n    // В результате мы получаем отсортированный массив\n    renderUsers(sortedUsers); // отображаем отсортированных пользователей\n}\n// *** Ниже переключатель для кнопки growingUp, где при каждом клике на нее будет меняться сортировка\n// let isAscending = true; // Переменная для отслеживания состояния сортировки\n// growingUp.addEventListener('click', toggleSort);\n// function toggleSort() {\n//   const sortedUsers = [...users].sort((a, b) => isAscending ? a.id - b.id : b.id - a.id);\n//   renderUsers(sortedUsers);\n//   isAscending = !isAscending; // Меняем состояние на противоположное\n// }\nif (growingDown) {\n    // Сортировка по убыванию ID\n    growingDown.addEventListener(\"click\", growingDownFunc);\n}\nfunction growingDownFunc() {\n    var sortedUsers = __spreadArray([], users, true).sort(function (a, b) { return b.id - a.id; }); // сортируем по убыванию\n    renderUsers(sortedUsers); // отображаем отсортированных пользователей\n}\nif (alphabet) {\n    // Сортировка по алфавиту\n    alphabet.addEventListener(\"click\", alphabetFunc);\n}\nfunction alphabetFunc() {\n    var sortedUsers = __spreadArray([], users, true).sort(function (a, b) {\n        if (a.name < b.name)\n            return -1; // если a.name меньше b.name, a должен быть перед b\n        if (a.name > b.name)\n            return 1; // если a.name больше b.name, a должен быть после b\n        return 0; // если равны, порядок не меняется\n    });\n    renderUsers(sortedUsers); // отображаем отсортированных пользователей\n}\n\n\n//# sourceURL=webpack://ts/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;