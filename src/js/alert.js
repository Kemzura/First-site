/*var result = prompt("Кто пришел?", "");

if (result === "Админ") {
  var password = prompt("А пароль?", "");
  if (password === "Чёрный Властелин") {
    alert("Добро пожаловать!");
  } else if (password === null) {
    alert("Вход отменен");
  } else {
    alert("Пароль неверен");
  }
} else if (result === null) {
  alert("Вход отменен");
} else {
  alert("Я вас не знаю");
}*/

/*var a = 3;
var b = 0;

a + b < 4 ? (result = "Мало") : (result = "Много");

alert(result);*/
/*var message;
var login = prompt("Кто пришел?", "");

if (login == "Вася") {
  message = "Привет";
} else if (login == "Директор") {
  message = "Здравствуйте";
} else if (login == "") {
  message = "Нет логина";
} else {
  message = "";
}


login == "Вася"
  ? (message = "Привет")
  : login == "Директор"
    ? (message = "Здравствуйте")
    : login == "" ? (message = "Нет логина") : (message = "");

alert(message);
*/
/*var i = 2;
for (i; i <= 10; i++) {
  if (i % 2 == 0) {
    alert(i);
  }
}
*/

/*for (var i = 0; i < 3; i++) {
  alert("номер " + i + "!");
}*/

/*var i = 0;
while (i < 3) {
  alert("номер " + i + "!");
  i++;
}*/

/*while (true) {
  var number = prompt("Введите число больше 100", "");
  if (number > 100 || number == null) {
    break;
  }
}*/

/*for (var i = 2; i <= 10; i++) {
  for (var j = 2; j < i; j++) {
    if (i % j === 0) {
      break;
    }
    alert(i);
  }
}*/

/*var browser = prompt("Ваш браузер", "");

if (browser == "IE") {
  alert("О, да у вас IE!");
}
if (browser == "Firefox") {
  alert("Да, и эти браузеры мы поддерживаем");
}
if (browser == "Safari") {
  alert("Да, и эти браузеры мы поддерживаем");
}
if (browser == "Opera") {
  alert("Да, и эти браузеры мы поддерживаем");
}
if (browser != "IE" || "Firefox" || "Safari" || "Opera") {
  alert("Мы надеемся, что и в вашем браузере все ок!");
}*/

/*var a = +prompt("a?", "");

switch (a) {
  case 0:
    alert(0);
    break;

  case 1:
    alert(1);
    break;

  case 2:
  case 3:
    alert("2, 3");
    break;
}
*/

/*function checkAge(age) {
  return age > 18 ? true : confirm("Родители разрешили?");
}
*/
/*function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Родители разрешили?");
  }
}*/

/*var number = +prompt("Число", "");
var degree = +prompt("Степень", "");

function pow() {
  var sum = number;
  for (var i = 1; i <= degree - 1; i++) {
    sum = sum * number;
  }
  return sum;
}

alert(pow());*/

/*function SumTo(n) {
  if (n != 1) {
    return n + SumTo(n - 1);
  } else {
    return n;
  }
}*/

/*function SumTo(n) {
  var x = 0;
  for (var i = 1; i <= n; ) {
    x = n + x;
    n--;
  }
  return x;
}*/

/*function factorial(n) {
  if (n != 1) {
    return n * factorial(n - 1);
  } else {
    return n;
  }
}*/
/*function fib(n) {
  var a = 1,
    b = 1;
  for (var i = 3; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}
*/

/*var first = +prompt("Первое");
var second = +prompt("Второе");

var sum = first + second;
alert(sum);*/

/*function ucFirst(str) {
  var str = "вася";
  var neww = str.charAt(0);
  neww = neww.toUpperCase();
  neww = neww + str.slice(1);
  return neww;
}

alert(ucFirst());*/

/*function checkSpam(str) {
  var upperStr = str.toUpperCase();
  return !!(~upperStr.indexOf("VIAGRA") || ~upperStr.indexOf("XXX"));
}

alert(checkSpam("buy ViAgRA now"));
alert(checkSpam("free xxxxx"));
alert(checkSpam("innocent rabbit"));*/

/*var str = prompt();
var maxLength = 10;

function truncate() {
  if (str.length >= maxLength) {
    var newString = str.slice(0, maxLength - 3) + "...";
    return newString;
  }
  return str;
}

alert(truncate(str, maxLength));

var user = {
  name: "Вася",
  surname: "Петров"
};
user.name = "Сергей";
delete user.name;

alert(user.name);*/

//Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.

/*var schedule = {
  /*"WAke UP": 8.3*/
/*
function isEmpty(obj) {
  for (var key in obj) {
    return true;
  }
  return false;
  /* ваш код */

/*"use strict";

var salaries = {
  Вася: 100,
  Петя: 300,
  Даша: 250
};

var sum = 0;

function sumSal() {
  for (var key in salaries) {
    sum = sum + salaries[key];
  }
  return sum;
}

alert(sumSal());*/

// до вызова
/*var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(menu) {
  for (var key in menu) {
    if (isNumeric(menu[key])) {
      menu[key] = menu[key] * 2;
    }
  }
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

multiplyNumeric(menu);
alert(
  "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title
);*/

/*var goods = [2, 5, 34, 63, 13];
goods.push("Компьютер");
alert(goods[goods.length - 1]);*/

/*var styles = ["Джаз", "Блюз"];
styles.push("Рок-н-Ролл");
styles[styles.length - 2] = "Классика";
styles.shift();
styles.unshift("Рэп", "Рэгги");
for (i = 0; i < styles.length; i++) {
  alert(styles[i]);
}*/

/*var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
var min = 0;
var max = arr.length;
var rand = min + Math.floor(Math.random() * (max + 1 - min));

alert(arr[rand]);*/

/*var number = 0;
var numbers = [];
var summ = 0;

function isNumeric(number) {
  return !isNaN(parseFloat(number)) && isFinite(number);
}

while (isNumeric(number)) {
  number = prompt("Введите число");
  if (isNumeric(number)) {
    numbers.push(number);
  }
}

delete numbers[numbers.length];

for (i = 0; i < numbers.length; i++) {
  summ = summ + +numbers[i];
}
alert(summ);*/
/*
var value = 18;
var arr = ["test", 2, 1.5, false];

function find() {
  for (i = 0; i < arr.length; i++) {
    if (value === arr[i]) {
      return i;
    }
    return -1;
  }
}

alert(find(arr, value));*/

/*var arr = [5, 4, 3, 8, 0];
var filtered = [];
var first = 3;
var last = 5;
function filterRange() {
  for (var i = 0; i < arr.length; i++) {
    if (first <= arr[i] && arr[i] <= last) {
      filtered.push(arr[i]);
    }
  }
}
alert(filterRange(arr, first, last));
alert(filtered);*/

/*var obj = {
  className: "open menu"
};

var arr = obj.className.split("  ");

function addClass(arr, cls) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == cls) {
      return;
    } else {
      arr.push(cls);
      obj.className = classes.join(" ");
    }
  }
}

addClass(arr, " new");
alert(arr);*/
var newProjectAdd = document.getElementById("addNewProject");
var x = document.getElementById("close");
x.onclick = closePopup;
function closePopup() {
  let y = document.getElementById("addnew");
  let z = document.getElementsByClassName("blackened");
  y.style.display = "none";
  z[0].style.display = "none";
}

newProjectAdd.onclick = function() {
  let y = document.getElementById("addnew");
  let z = document.getElementsByClassName("blackened");
  y.style.display = "flex";
  z[0].style.display = "block";
};

function addNewDiv(name, url, desc) {
  return `
   <div>
    <div class="menus__right-menu__main__site4 ">
        <div class="menus__right-menu__main__opacity ">
            <div class="menus__right-menu__main__opacity__text ">
                <span id="nameSpan">${name}</span>
            </div>
        </div>
    </div>
    <div>
        <a href="#site ">${url}</a>
    </div>
    <p>${desc}</p>
    <p>4 превью 2 строки....</p>
</div>
`;
}
document.getElementById("add").onclick = function addValue() {
  let name = document.getElementById("name").value,
    url = document.getElementById("url").value,
    img = document.getElementById("image"),
    desc = document.getElementById("description").value;

  let newName = document.getElementById("name");
  let div = document.getElementsByClassName("menus__right-menu__main")[0];

  let addDiv = document.getElementById("copyDiv");
  let span = document.getElementById("nameSpan");

  let newDiv = document.createElement("div");
  newDiv.innerHTML = addNewDiv(name, url, desc);

  div.insertBefore(newDiv, div.children[div.children.length - 1]);
  let backElems = document.getElementsByClassName(
    "menus__right-menu__main__site4"
  );

  let backElem = backElems[backElems.length - 1];
  console.log(backElem);
  let file = img.files[0];
  let reader = new FileReader();

  reader.onloadend = function() {
    let img = reader.result;
    backElem.style.backgroundImage = `url(${img})`;
  };

  if (file) {
    reader.readAsDataURL(file);
  }

  closePopup();
};
