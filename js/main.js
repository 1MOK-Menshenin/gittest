'use strict'
// let users = [];
// class User {
//     constructor(email, login, pass){
//         this.email = email;
//         this.login = login;
//         this.pass = pass;
//     }
// }
// let vasya = new User ('example@mail.ru', 'Петр', '123');
// users.push(vasya);

// let rightUl = document.querySelector('.right-ul');
// rightUl.insertAdjacentHTML('afterbegin', `
// <li class="nav-item">
//     <span class="user-header">${users[0].login}</span>
// </li>
// `)
// let addButt = document.querySelectorAll('.card .btn-primary');
// addButt.forEach(item => item.onclick = function (){
//     alert ('Кнопка нажата');
// })
// addButt.forEach(function (item){
//     item.onclick = function (){
//         alert ('Кнопка нажата');
// }
// })
// addButt.forEach(function(item){
//     item.addEventListener('click', function (){
//      alert ('Кнопка нажата')
//     })
// })
// addButt.forEach(item=>item.addEventListener('click', toShowAlert)  
// )

// function toShowAlert (event){
//     // alert ('Кнопка нажата');
//     event.target.style.backgroundColor = 'red';
// }
// let regBut = document.querySelector('.reg_but');
// regBut.addEventListener('click', toCreateUser);
// function toCreateUser (event){
//     let parent = event.target.closest('.modal-content');
//     // console.dir(event.target.closest('.modal-content'));
//     // console.dir(parent);
//     let userName = parent.querySelector('#InputLogin').value;
//     let pass = parent.querySelector('#InputPassword').value;
//     let email = parent.querySelector('#InputEmail').value;
//     users.push(new User (email, userName, pass));
// }

let cart = [];
class Item {
    constructor(name, price, img){
        this.name = name;
        this.price = price;
        this.img = img;
        this.count = 1;
    }
}
let butAddCart = document.querySelectorAll('.card .btn-primary');
butAddCart.forEach(item => item.addEventListener('click', toAddCart));
function toAddCart(event){
    let parent = event.target.closest('.card');
    let name = parent.querySelector('.card-title').innerText;
    let price = parseInt(parent.querySelector('.price').innerText.split(' ').join(''));
    let img = parent.querySelector('img').getAttribute('src');
    let elem = cart.find(item => item.name == name);
    // console.dir(elem);
    if(elem){
        elem.count++;
    }else{
        cart.push(new Item(name, price, img))
    }
}
let cartOpen = document.querySelector('.cart-open');
cartOpen.addEventListener('click', toRender);
function toRender(){
    let cartTable = document.querySelector('.cart-table');
    let tBody = cartTable.querySelector('tbody');
    cart.forEach((item, index) =>{
        tBody.insertAdjacentHTML('beforeend', `
            <tr>
            <tb>${index+1}</tb>
            <tb>${item.name}</tb>
            <tb>${item.price}</tb>
            <tb><img src=${item.img}></tb>
            <tb>${item.count}</tb>
            <tb></tb>
            <tb></tb>
            </tr>
        `)
    })
}
let a = 5;
