// 1. id="age-table"
let table = document.getElementById('age-table');

console.log("Таблица с id=\"age-table\":", table);


// 2. label
let labels = table.getElementsByTagName('label');

console.log("Метки (label) внутри таблицы:", labels);


// 3. td
let firstTd = table.getElementsByTagName('td')[0];

console.log("Первая ячейка (td) в таблице:", firstTd);


// 4. form name="search"
let forms = document.getElementsByName('search'); 
let form;
for (let i = 0; i < forms.length; i++) { 
    if (forms[i].tagName.toLowerCase() === 'form') { 
        form = forms[i];
        break; 
    }
}

console.log("Форма с именем name=\"search\":", form);


// 5. input
let inputs = form.getElementsByTagName('input');
let firstInput = inputs[0];

console.log("Первый input в форме:", firstInput);


// 6.последний input
let lastInput = inputs[inputs.length - 1];

console.log("Последний input в форме:", lastInput);


// let body = document.body;

// body.innerHTML = "<!--" + body.tagName + "-->";

// alert( body.firstChild.data ); // что выведет? когда мы используем alert(body.firstChild.data), она покажет нам текст из комментария, который будет включать в себя слово "BODY".