function addElementTable(arr) {
    let tr = document.createElement('tr');
    let tbody = document.querySelector('tbody');

    for (let i of arr) {
        let td = document.createElement('td');
        td.textContent = i;
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}

function delElementTable(pos) {
    if (pos == 0) return 0;
    try {
        let tr = document.querySelectorAll('tr');
        tr[pos].remove();
    }
    catch (TypeError) {
        return 0;
    }
}

function block() {
    let but = document.querySelectorAll('button');
    for (let i of but) {
        i.setAttribute('disabled', true);
    }

    let int = document.querySelectorAll('input');
    for (let i of int) {
        i.setAttribute('disabled', true);
    }
}

function unblock() {
    let but = document.querySelectorAll('button');
        for (let i of but) {
            i.removeAttribute('disabled');
        }

        let int = document.querySelectorAll('input');
        for (let i of int) {
            i.removeAttribute('disabled');
        }
}

/* Для кнопки Добавить*/
function addElementWindow () {
    block()

    let arr = ['Название', 'Автор', 'Описание', 'Изображение Обложки','Год', 'ISBN', 'Количество страниц', 'Жанр', 'Теги', 
    'Дата Загрузки', 'Дата обновления', 'Источник Загрузки'];
    let form = document.createElement('div');
    form.className = 'window';
    for (let i of arr) {
        div = document.createElement('div');
        let label = document.createElement('label');
        label.textContent = i;
        let input = document.createElement('input');
        div.appendChild(label);
        div.appendChild(input);

        form.appendChild(div);
    }

    let button = document.createElement('button');
    button.textContent = 'Добавить';
    button.setAttribute('type', 'submit');
    button.onclick = function() {
        let form = document.getElementsByClassName('window');
        var arrs = form[0].querySelectorAll('input');
        var arrs_ = [];
        for (let i of arrs) {
            arrs_.push(i.value);
        }

        addElementTable(arrs_);
    }
    form.appendChild(button);

    let button1 = document.createElement('button');
    button1.textContent = 'Очистить';
    button1.setAttribute('type', 'submit');
    form.appendChild(button1);
    button1.onclick = function() {
        let form = document.getElementsByClassName('window');
        var arrs = form[0].querySelectorAll('input');
        for (let i of arrs) {
            i.value = '';
        }
    }

    let button2 = document.createElement('button');
    button2.textContent = 'Выход';
    button2.setAttribute('type', 'submit');
    form.appendChild(button2);
    button2.onclick = function() {
        form.remove();
        unblock();
    }

    var buttons = document.getElementsByClassName('buttons');
    buttons[0].appendChild(form);
}

/*Для кнопки удалить */
function addElementWindowDel () {
    block();

    let form = document.createElement('div');
    form.className = 'window2';

    let label = document.createElement('label');
    label.textContent = 'Позиция:';
    form.appendChild(label);
    let input = document.createElement('input');
    form.appendChild(input);
    let button = document.createElement('button');
    button.textContent = 'Удалить';
    button.setAttribute('type', 'submit');
    form.appendChild(button);

    button.onclick = function() {
        delElementTable(input.value);
        form.remove();
        unblock();
    }

    var buttons = document.getElementsByClassName('buttons');
    buttons[0].appendChild(form);
}

/* Для кнопки поиск
function addElementWindowSearch() {
    let arrInput = document.querySelectorAll('input');
    let arrTr = document.querySelectorAll('tr');
    if (arrTr.length == 1) return 0;
    for (i = 1; i < 8; i++) {
        console.log(arrInput[i].value);
        if (arrInput[i].value == '') continue;
        for(let t of arrTr) {
            if (!t.textContent.includes((arrInput[i].value))) t.remove();
        }
    }
}
*/
