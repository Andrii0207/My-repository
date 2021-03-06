// HW 01

// Замовлення турів:
// Пишемо реєстрацію користувача за допомогою prompt.  Окремо логін та пароль. Валідацію не потрібно робити.
// Аналогічно пишемо логінізацію: запитуємо логін та пароль, порівнюємо їх з даними, які були введені при авторизації. Якщо все вірно - виводимо в консоль, що логін успішний. Якщо ні - знову запитуємо логін та пароль.
// Запитуємо максимальну суму, яку готовий витратити користувач на тур.
// Виводимо список усіх країн в alert, які доступні по сумі для користувача.
// Вказуємо країну через prompt  і купляємо тур.
// Виводимо повідомлення, що тур оплачений і залишок на рахунку користувача.
// Дані, які вам знадобляться:

const countries = ['Ukraine', 'Poland', 'Croatia', 'Montenegro', 'France', 'USA'];
const countriesPrice = [100, 200, 300, 400, 500, 600];
let userName = '';
let userPass = '';
let selectCountry = [];
let selectPrice = [];

///////////////////////////////

// HW 02

// "Delivery"
// Ви пропонуєте користувачу список доступних ресторанів для замовлення їжі.
// Користувач обирає конкретний ресторан і отримує список доступних пунктів в меню для замовлення із вказанням їх вартості.
// Користувач обирає своє замовлення, після чого має отримати його підтвердження та основну інформацію: "що замовив, вартість та час доставки".
const restaurants = [
  {
    order: [],
    brand: "KFC",
    menu: {
        chicken: 50,
        burger: 50,
    },
    deliveryTime: 60,
  },
  {
    order: [],
    brand: "mcDonalds",
    menu: {
        cola: 25,
        burger: 30,
      
    },
    deliveryTime: 30,
  },
  {
    order: [],
    brand: "Burger King",
    menu: {
        burgerXXL: 170,
        burger: 70,
    },
    deliveryTime: 20,
  },
  
];
const services = {
  showMenu() {},
  getMenu() {},
  addOrder() {},
  confirmOrder() {},
};

const torpedaDelivery = {
    order: [],
    chosenRestaurant: "",
  getAvailableRestaurants() {},
  chooseRestaurant() {},
  chooseDishes() {},
};

//////////////////////////////////


// HW 03

// Створіть клас Hamburger
// В Класі добавте в статік обєкт налаштувань по добавкам (не по розміру), щоб була можливість використовувати їх як у прикладі: Hamburger.stuffing.STUFFING_SALAD
// Добавте слідуючі методи:
// addSize - Добавляє розмір гамбургера
// addTopping(Hamburger.stuffing.STUFFING_SALAD, ...) - Добавляє добавку до гамбургера. Можна добавити декілька добавок при умові, що вони валідні
// removeTopping(Hamburger.stuffing.STUFFING_SALAD, ...) - Видалити добавку, при умові, що вона раніше була добавлена.
// getStuffing - геттер, має повернути this.toppings = [....]
// calculatePrice() - взнати вартість замовлення
// calculateCalories() - взнати калорійність гамбургера
// showError() - метод, який може показувати 2 помилки - якщо передали невірний розмір або начинка не існує (При видалені або додаванні)
// Добавте в логіку кода розрахунок варстості замовлення в залежності від розміру гамбургера та добавлених начинок.
// Дані в формі мають рендеритись динамічно (уявіть, що вони приходять з бекенду, тому кількість начинок може мінятьсь. Відповідно, мають змінюватись поля в формі по даним начинкам)
// Форма має бути інтерактивною, тобто - при виборі кожного пункту - інформація добавляється в блок "Інфо". Після заповнення усіх полів - сабмітимо форму і отримуємо підтвердження замовлення з виводом загальної інформації: вартість замовлення та що було обрано.

https://www.youtube.com/watch?v=FdJXDWD5r4w


const DB = {
  stuffing: {
    STUFFING_SALAD: {
      type: "STUFFING_SALAD",
      price: 300,
      ccal: 200,
    },
    STUFFING_POTATO: {
      type: "STUFFING_POTATO",
      price: 400,
      ccal: 100,
    },
    TOPPING_MAYO: {
      type: "TOPPING_MAYO",
      price: 300,
      ccal: 400,
    },
    TOPPING_SPICE: {
      type: "TOPPING_SPICE",
      price: 500,
      ccal: 700,
    },
  },

  sizes: {
    S: 200,
    L: 300,
    M: 400,
  },
};
