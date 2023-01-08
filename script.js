function addElementTable(arr) {
    let tr = document.createElement('tr');
    let tbody = document.createElement('tbody');

    for (let i of arr) {
        let td = document.createElement('td');
        td.textContent = arr[i];
        tr.appendChild(td);
    }

    tbody.appendChild(tr)
}

function addElvementWindow () {
    let but = document.querySelectorAll('button');
    for (let i of but) {
        i.setAttribute('disabled', true);
    }

    let int = document.querySelectorAll('input');
    for (let i of int) {
        i.setAttribute('disabled', true);
    }

    let arr = ['Название', 'Автор', 'Описание', 'Год', 'ISBN', 'Количество страниц', 'Жанр', 'Теги', 
    'Дата Загрузки', 'Дата обновления', 'Источник Загрузки'];

    let form = document.createElement('form');
    form.className = 'window';

    for (let i of arr) {
        div = document.createElement('div');
        let label = document.createElement('label');
        label.textContent = i;
        let input = document.createElement('input');
        div.appendChild(label);
        div.appendChild(input);

        form.appendChild(div)
    }


    let button = document.createElement('button');
    button.textContent = 'Добавить';
    button.setAttribute('type', 'submit');
    form.appendChild(button)

    var buttons = document.getElementsByClassName('buttons');
    console.log(buttons[0], form);
    buttons[0].appendChild(form);

}

