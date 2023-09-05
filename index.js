// задача 1

const cars = [
  {
    title: "BMW",
    price: 40000,
    count: "15",
  },
  {
    title: "Toyota",
    price: 20000,
    count: "13",
  },
  {
    title: "Ford",
    price: 30000,
    count: "20",
  },
  {
    title: "Chevrolet",
    price: 60000,
    count: "9",
  },
  {
    title: "Volkswagen",
    price: 30000,
    count: "13",
  },
];

const body = document.querySelector("body"); // получаем элемент body, к которому будем добавлять список с машинами
const carsList = document.createElement("ul"); // создаём список ul, к которому будем добавлять айтемы с машинами
const totalCarsPriceElement = document.createElement("p"); // создаём элемент p, который будет служить для отображения общей суммы машин
const totalCarsAmountElement = document.createElement("p"); // создаём элемент p, который будет служить для отображения общего количества машин
const carsListItemFooter = document.createElement("div"); // создаём div, чтобы сгруппировать два параграфа под списком

let totalCarsPrice = 0; // инициализируем "переменную-счётчик", которая будет считать общую цену
let totalCarsAmount = 0; // инициализируем "переменную-счётчик", которая будет считать общее кол-во

carsList.classList.add("cars-list"); // добавляем класс к списку для стилизации

cars.forEach((car) => {
  const carsListItem = document.createElement("li"); // создаём элемент списка (айтем)
  const carsListItemTitle = document.createElement("h3"); // создаём заголовок
  const carsListItemPrice = document.createElement("p"); // создаём параграф, который будет хранить цену авто (не общую)
  const carsListItemAmount = document.createElement("p"); // создаём параграф, который будет хранить кол-во авто (не общее)

  carsListItem.classList.add("cars-list-item");

  totalCarsPrice += car.price; // к "переменной-счётчику" на каждой итерации прибавляем цену (пр. на первой итерации рассматривается объект BMW, у него цена 40000, переменная будет равна 40000; далее рассматривается следующий объект из массива, у него car.price равен 20000, итого переменная будет равна уже 60000 и так далее)
  totalCarsAmount += parseInt(car.count); // тут всё то же самое, но из-за того, что свойство car.count это строковый тип (пр. "9"), нужно строку превратить в число, сделать это можно написав оператор "+" перед car.count (+car.count) или parseInt(car.count; далее логика такая же, как и с totalCarsPrice)

  carsListItemTitle.innerText = car.title; // через свойство innerText вписываем заголовок объекта
  carsListItemPrice.innerText = `Price: ${car.price}`; // через свойство innerText вписываем цену объекта
  carsListItemAmount.innerText = `Amount: ${car.count}`; // через свойство innerText вписываем кол-во машин
  totalCarsAmountElement.innerText = `Total cars amount: ${totalCarsAmount}`; // через свойство innerText вписываем общее количество машин
  totalCarsPriceElement.innerText = `Total cars price: ${totalCarsPrice}`; // через свойство innerText вписываем общую цену машин

  carsListItemFooter.append(totalCarsPriceElement, totalCarsAmountElement); // добавляем элементы, которые считают общее количество к carsListItemFooter (это наш div)

  carsListItem.append(carsListItemTitle, carsListItemPrice, carsListItemAmount); // к элементу списка добавляем все нужные элементы (заголовок, цена и количество)
  carsList.append(carsListItem, carsListItemFooter); // к списку добавляем элемент списка и футер, в котором считается общая цена и кол-во
});

body.append(carsList); // добавляем сформировавшийся список к body

// задача 2

// создадим массив для удобной отрисовки элементов таблицы
const data = [
  {
    number: 1,
    fullName: "Bill Gates",
    position: "Founder Microsoft",
    salary: "$1000",
  },
  {
    number: 2,
    fullName: "Steve Jobs",
    position: "Founder Apple",
    salary: "$1200",
  },
  {
    number: 3,
    fullName: "Larry Page",
    position: "Founder Google",
    salary: "$1100",
  },
  {
    number: 4,
    fullName: "Mark Zuckerberg",
    position: "Founder Facebook",
    salary: "$1300",
  },
];

// создаём элементы таблицы
const table = document.createElement("table");
const tableHead = document.createElement("thead");
const tableBody = document.createElement("tbody");

/*

тут нужно просто вспомнить структуру таблицы и на её основе просто добавлять элементы. большой магии нет, просто очень много созданий элементов через document.createElement()

<table>
  <thead>
    <tr>
      <td>...</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>...</td>
    </tr>
  </tbody>
</table>

*/

const tableHeadRow = document.createElement("tr");
const numberHead = document.createElement("th");
const fullNameHead = document.createElement("th");
const positionHead = document.createElement("th");
const salaryHead = document.createElement("th");

numberHead.innerText = "No.";
fullNameHead.innerText = "Full Name";
positionHead.innerText = "Position";
salaryHead.innerText = "Salary";

tableHeadRow.append(numberHead, fullNameHead, positionHead, salaryHead);
tableHead.append(tableHeadRow);

data.forEach((founder) => {
  const tableBodyRow = document.createElement("tr");
  const numberTableData = document.createElement("td");
  const fullNameTableData = document.createElement("td");
  const positionTableData = document.createElement("td");
  const salaryTableData = document.createElement("td");

  numberTableData.innerText = founder.number;
  fullNameTableData.innerText = founder.fullName;
  positionTableData.innerText = founder.position;
  salaryTableData.innerText = founder.salary;

  tableBodyRow.append(
    numberTableData,
    fullNameTableData,
    positionTableData,
    salaryTableData
  );
  tableBody.append(tableBodyRow);
});

table.append(tableHead, tableBody);

body.append(table);

// задача 3

const dogs = [
  {
    breed: "golden retriever",
    age: 7,
  },
  {
    breed: "labrador retriever",
    age: 4,
  },
  {
    breed: "french bulldog",
    age: 12,
  },
  {
    breed: "beagle",
    age: 6,
  },
  {
    breed: "german shepherd dog",
    age: 2,
  },
  {
    breed: "poodle",
    age: 3,
  },
  {
    breed: "bulldog",
    age: 4,
  },
];

const dogsContainer = document.createElement("div");
dogsContainer.classList.add("dogs-container");

dogs.forEach((dog) => {
  const paragraph = document.createElement("p");

  paragraph.innerText = `${dog.breed}'s age is ${dog.age}`;
  dogsContainer.append(paragraph);
});

body.append(dogsContainer);

// задача 4

const movies = [
  { name: "Фильм 1", year: 2000 },
  { name: "Фильм 2", year: 2005 },
  { name: "Фильм 3", year: 2010 },
  { name: "Фильм 4", year: 2015 },
  { name: "Фильм 5", year: 2020 },
];

const moviesList = document.createElement("ul");
moviesList.classList.add("movies-list");

movies.forEach((movie) => {
  const moviesListItem = document.createElement("li");
  const moviesListItemName = document.createElement("h3");
  const moviesListItemYear = document.createElement("p");

  moviesListItem.classList.add("movies-list-item");

  moviesListItemName.innerText = movie.name;
  moviesListItemYear.innerText = movie.year;

  moviesListItem.append(moviesListItemName, moviesListItemYear);
  moviesList.append(moviesListItem);
});

body.append(moviesList);
