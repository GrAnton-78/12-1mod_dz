
// Наши HTML-элементы

const userList = document.querySelector('#userList');
const growingUp = document.querySelector("#growingUp");
const growingDown = document.querySelector("#growingDown");
const alphabet = document.querySelector("#alphabet");

// npm install --save-dev webpack webpack-cli ts-loader typescript webpack-dev-server

interface User {
  id: number;
  name: string;
  email: string;
  website: string;
}


let users: User[] = []; // массив для хранения пользователей

async function fetchUsers() {
  let response = await fetch('https://jsonplaceholder.typicode.com/users');
  users = await response.json(); // сохраняем пользователей в массив
  renderUsers(users); // отображаем пользователей
}


fetchUsers();

function renderUsers(users: User[]) {
  if (userList) {
    userList.textContent = ''; // очищаем список перед отрисовкой
    users.forEach(user => {

      const listItem = document.createElement('div');
      userList.appendChild(listItem);

      const idItem = document.createElement('h3')
      idItem.innerHTML = `id: ${user.id} `
      listItem.appendChild(idItem)

      const titleItem = document.createElement('h2')
      titleItem.innerHTML = user.name
      listItem.appendChild(titleItem)

      const emailItem = document.createElement('p')
      emailItem.innerHTML = `email: ${user.email} `
      listItem.appendChild(emailItem)

      const websiteItem = document.createElement('h3')
      websiteItem.innerHTML = `website: ${user.website} `
      listItem.appendChild(websiteItem)

    });
  }
}
if (growingUp) {
  // Сортировка по возрастанию ID
  growingUp.addEventListener("click", growingUpFunc);
}
function growingUpFunc() {
  const sortedUsers = [...users].sort((a, b) => a.id - b.id); // сортируем по возрастанию
  
  renderUsers(sortedUsers); // отображаем отсортированных пользователей
}

// *** Ниже переключатель для кнопки growingUp, где при каждом клике на нее будет меняться сортировка

// let isAscending = true; // Переменная для отслеживания состояния сортировки

// growingUp.addEventListener('click', toggleSort);

// function toggleSort() {
//   const sortedUsers = [...users].sort((a, b) => isAscending ? a.id - b.id : b.id - a.id);
//   renderUsers(sortedUsers);
//   isAscending = !isAscending; // Меняем состояние на противоположное
// }
if(growingDown){
// Сортировка по убыванию ID
growingDown.addEventListener("click", growingDownFunc);  
}


function growingDownFunc() {
  const sortedUsers = [...users].sort((a, b) => b.id - a.id); // сортируем по убыванию
  renderUsers(sortedUsers); // отображаем отсортированных пользователей
}
if(alphabet){
  // Сортировка по алфавиту
alphabet.addEventListener("click", alphabetFunc);
}

function alphabetFunc() {
  const sortedUsers = [...users].sort((a, b) => {
    if (a.name < b.name) return -1; // если a.name меньше b.name, a должен быть перед b
    if (a.name > b.name) return 1;  // если a.name больше b.name, a должен быть после b
    return 0;                        // если равны, порядок не меняется
  });
  renderUsers(sortedUsers); // отображаем отсортированных пользователей
}

