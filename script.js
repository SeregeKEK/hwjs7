"use strict";
// []()
// []()
// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.

const superDrop = document.querySelectorAll('.dropdown-item')
superDrop.forEach(element => {
    element.classList.add('super-dropdown');
});


// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.

const btnSec = document.querySelector('.btn');
if (btnSec.classList.contains("btn-secondary")) {
    btnSec.classList.remove("btn-secondary");
} else {
    btnSec.classList.add("btn-secondary");
}

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".

const dropRemove = document.querySelector('.menu');
dropRemove.classList.remove('dropdown-menu')

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`

const drop = document.querySelector('div.dropdown');
drop.insertAdjacentHTML("afterend", `<a href="#">link</a>`);

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

const dropMenu = document.querySelector('#dropdownMenuButton');
dropMenu.id = "superDropdown";

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.

const aria = document.querySelector('[aria-labelledby=dropdownMenuButton]');
aria.dataset.dd = 3;

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

const type = document.querySelector('.dropdown-toggle');
type.removeAttribute('type');