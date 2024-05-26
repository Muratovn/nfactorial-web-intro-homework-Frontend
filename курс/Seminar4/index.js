// Используя условный (тернарный) оператор перенаправьте
// сайт на "https://google.com" если ваш браузер Safari или Chrome
// иначе перенаправьте на "https://wikipedia.org"

// const isSafariOrChrome = /Chrome|Safari/.test(navigator.userAgent);

// const redirectUrl = isSafariOrChrome ? 'https://youtube.com' : 'https://wikipedia.org';

// window.location.href = redirectUrl;


// var ul = document.getElementById('myUL');

// // Create an array of texts for the new list items
// var texts = ['Buy groceries', 'Finish homework', 'Call mom', 'Go for a run'];

// // Loop through the array to create new <li> elements
// for (var i = 0; i < texts.length; i++) {
//   // Create a new list item element
//   var li = document.createElement('li');
  
//   // Assign text to the list item
//   li.textContent = texts[i];
  
//   // Add a new class to the list item
//   li.classList.add('list-element');
  
//   // Append the new list item to the existing <ul> element
//   ul.appendChild(li);
// }

// создайте 4 новых <li> </li> вложенных в существующий ul
// присвойте каждому li любой текст, тексты должны отличаться
// присвойте каждому li новый class = list-element

const myUL = document.getElementById('myUL');

const arr = ['Hit Gym', 'Coffee time', 'Study React', 'Forget JQuery'];

arr.forEach(text => {
    const newLi = document.createElement('li'); // <li></li>
    newLi.className = "list-element"; // <li class="list-element"></li>
    newLi.append(text); // <li class="list-element">text</li>
    myUL.append(newLi); // <ul> <li class="list-element">text</li> </ul>
    
    const closespan = document.createElement('span');
    closespan.textContent = "close";
    closespan.className = "close";
    newLi.append(closespan);
    myUL.append(newLi);
})

const closeButton = document.querySelector('.close');

function handleScreenSizeChange(mediaQuery) {
  if (mediaQuery.matches) {
    closeButton.classList.add('button-close-red');
  } else {
    closeButton.classList.remove('button-close-red');
  }
}

// Создаем медиа-запрос
const mediaQuery = window.matchMedia('(max-width: 600px)');

// Обрабатываем изменения в медиа-запросе
handleScreenSizeChange(mediaQuery);

// Добавляем слушателя для обновлений медиа-запроса
mediaQuery.addListener(handleScreenSizeChange);


// let list = document.querySelectorAll("#myUL li");

// list.forEach(function(li) {
//     let span = document.createElement("span");
//     span.textContent = "close";
//     span.classList.add("close");
//     li.append(span);
// });