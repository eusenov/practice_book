// №1⊗jsPrStFC
// Сделайте калькулятор, который будет находить площадь и периметр квадрата.

// №2⊗jsPrStFC

// Сделайте калькулятор, который будет находить площадь и периметр прямоугольника.

// №3⊗jsPrStFC

// Сделайте калькулятор, который будет находить площадь круга и длину окружности.

// №4⊗jsPrStFC

// Сделайте калькулятор, который будет находить площадь треугольника по трем сторонам.
// ;(function(){
//     function areaOfSquare(side){
//         return side**2; 
//     }
//     function perimeterOfSquare(side){
//         return side*2; 
//     }
//     function areaOfRectangle(a, b){
//         return a*b; 
//     }
//     function perimeterOfRectangle(a, b){
//         return a*2 + b*2; 
//     }
//     function areaOfCircle(r){
//         let P = 3.14;
//         return P * (r**2); 
//     }
//     function perimeterOfCircle(d){
//         let P = 3.14;
//         return P*d; 
//     }
//     function areaOfTriangle(a, b, c){
//         let p = (a+b+c)/2; 
//         console.log(p);
//         let res = Math.abs((p*(p-a)*(p-b)*(p-c)));
//         console.log(res);
//         return Math.sqrt(res); 
//     }

//     window.formulas = {areaOfSquare, perimeterOfSquare, areaOfRectangle, perimeterOfRectangle, areaOfCircle, perimeterOfCircle, areaOfTriangle}; 
// }()); 

// console.log(formulas.areaOfTriangle(8, 8, 8));

// №2⊗jsPrStMC

// Даны 3 инпута. В них вводятся числа. Проверьте, что эти числа 
// являются тройкой Пифагора: квадрат самого большого числа должен 
// быть равен сумме квадратов двух остальных.

// function square(num){
//     return num**2; 
// }

// let input1 = document.querySelector('#input1'); 
// let input2 = document.querySelector('#input2'); 
// let input3 = document.querySelector('#input3'); 

// input3.addEventListener('blur', ()=>{
//     let squareValue1 = square(Number(input1.value)); 
//     let squareValue2 = square(Number(input2.value)); 
//     let squareValue3 = square(Number(input3.value)); 
    
//     let arr = [];
//     arr.push(squareValue1, squareValue2, squareValue3)

//     let max = Math.max(...arr); 
//     let sum = 0;
//     arr.forEach(oneof=>{
//         if (oneof == max){
//             sum += 0; 
//         }
//         else{
//             sum += oneof; 
//         }
//     })
//     if (sum == max){
//         console.log('+++');
//     }
//     else{
//         console.log('---');
//     }
// })
// №3⊗jsPrStMC

// Дан инпут и кнопка. В инпут вводится число. По нажатию на кнопку 
// выведите список делителей этого числа.
// let input = document.querySelector('input'); 
// let button = document.querySelector('button'); 
// let clear = document.querySelector('#clear')

// button.addEventListener('click', ()=>{
//     console.clear();
//     let count = 0; 
//     while (count<=input.value) {
//         ++count; 
//         if (input.value%count == 0){
//             console.log(count);
//         }
//     }
// })
// clear.addEventListener('click', ()=>{
//     input.value = ''; 
// })

// №4⊗jsPrStMC

// Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку 
// выведите список общих делителей этих двух чисел.
// let input = document.querySelector('input'); 
// let input2 = document.querySelector('#input2'); 
// let button = document.querySelector('button'); 
// let clear = document.querySelector('#clear'); 

// function gethigherValue(a, b){
//     if(a>b){
//         return a; 
//     }
//     else{
//         return b; 
//     }
// }

// button.addEventListener('click', ()=>{
//     console.clear();
//     let count = 0; 
//     let higherValue = gethigherValue(Number(input.value), Number(input2.value));
//     let arr = []; 
//     while (count<=higherValue) {
//         ++count; 
//         if (input.value%count == 0 & input2.value%count == 0){
//             console.log(count);
//         }
//     }
// })
// clear.addEventListener('click', ()=>{
//     input.value = ''; 
//     input2.value = ''; 
// })

// №5⊗jsPrStMC

// Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку 
// выведите наибольший общий делитель этих двух чисел.
// let input = document.querySelector('input'); 
// let input2 = document.querySelector('#input2'); 
// let button = document.querySelector('button'); 
// let clear = document.querySelector('#clear'); 

// function gethigherValue(a, b){
//     if(a>b){
//         return a; 
//     }
//     else{
//         return b; 
//     }
// }

// button.addEventListener('click', ()=>{
//     console.clear();
//     let count = 0; 
//     let higherValue = gethigherValue(Number(input.value), Number(input2.value));
//     let arr = []; 
//     while (count<=higherValue) {
//         ++count; 
//         if (input.value%count == 0 & input2.value%count == 0){
//             arr.push(count); 
//         }
//     }
//     console.log(arr);
//     let max = arr.sort((a, b) => b - a)[0]; 
//     console.log(max);
// })
// clear.addEventListener('click', ()=>{
//     input.value = ''; 
//     input2.value = ''; 
// })

// №6⊗jsPrStMC

// Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку 
// выведите наименьшее число, которое делится и на одно, и на второе из 
// введенных чисел.
// let input = document.querySelector('input'); 
// let input2 = document.querySelector('#input2'); 
// let button = document.querySelector('button'); 
// let clear = document.querySelector('#clear'); 

// function gethigherValue(a, b){
//     if(a>b){
//         return a; 
//     }
//     else{
//         return b; 
//     }
// }

// button.addEventListener('click', ()=>{
//     console.clear();
//     let count = 0; 
//     let higherValue = gethigherValue(Number(input.value), Number(input2.value));
//     let arr = []; 
//     while (count<=higherValue) {
//         ++count; 
//         if (input.value%count == 0 & input2.value%count == 0){
//             arr.push(count); 
//         }
//     }
//     console.log(arr);
//     let min = Math.min(...arr); 
//     console.log(min);
// })
// clear.addEventListener('click', ()=>{
//     input.value = ''; 
//     input2.value = ''; 
// })
// Игра угадай ячейку на JavaScript
// Давайте теперь реализуем игру угадай ячейку. В этой игре будет 
// дана таблица 10 на 10. Компьютер случайным образом запоминает 10 ячеек 
// из этой таблицы. Игроку нужно кликать на клетки пока он не найдет все 
// загаданные компьютером клетки.

// Модифицируйте предыдущую задачу, добавив таймер обратного отсчета. 
// Если игрок не успеет угадать числа за отведенное время - он проиграл.

// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

// function getTimer(min, sec) {
//     let minutes = Number(min);
//     let seconds = Number(sec);

//     let countdown = setInterval(function() {
//         if (seconds <= 0) {
//             if (minutes <= 0) {
//                 clearInterval(countdown);
//             } else {
//                 minutes--;
//                 seconds = 59;
//             }
//         } else {
//             seconds--;
//         }
//         console.log(minutes + " : " + seconds);
//     }, 1000);
// }


// let body = document.body; 
// let table = document.createElement('table'); 
// let showCorrectsButton = document.querySelector('#showCorrects'); 

// button click
// showCorrectsButton.addEventListener('click', ()=>{
//     let tds = table.querySelectorAll('td');
//     tds.forEach(oneof => {
//         console.log(oneof);
//         if (oneof.classList.contains('before-click')){
//             oneof.classList.toggle('green_active'); 
//         }
//     });
// })

// table create 
// for (let i=0; i<=9; i++){
//     let tr = document.createElement('tr'); 
//     for (let j = 0; j <= 9; j++) {
//         let td = document.createElement('td'); 
//         let randomNum = getRandomNumber(1, 5); 
//         if (randomNum == 1){
//             td.classList.add('before-click'); 
//             td.addEventListener('click', ()=>{
//                 td.classList.add('green_active'); 
//             })
//         } 
//         else{
//             td.addEventListener('click', ()=>{
//                 td.classList.add('red_active'); 
//             }) 
//         }
//         tr.append(td); 
//     }
//     table.append(tr); 
// }
// body.append(table)

// Давайте реализуем экранную клавиатуру. На ней должны быть кнопочки 
// со всеми буквами и цифрами клавиатуры компьютера. Кликая мышкой по 
// этим кнопочкам мы сможем вводить данные, например, при неработающей клавиатуре.

// let tds = document.querySelectorAll('td'); 
// let textField = document.querySelector('p');
// textField.textContent = ''; 
// let keyboardData = [
//     '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
//   'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э',
//   'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю'
// ]; 
// let capsLock = document.querySelector('#capsLock'); 
// let isCapsLockActive = false;

// for (let index = 0; index < keyboardData.length; index++) {
//     tds[index].textContent = keyboardData[index]; 
//     tds[index].addEventListener('click', ()=>{
//         let newText = keyboardData[index];
//         if (isCapsLockActive) {
//           newText = newText.toUpperCase();
//         }
//         textField.textContent += newText;
//     })
// }

// capsLock.addEventListener('click', ()=>{
//     tds.forEach(td =>{
//         isCapsLockActive = !isCapsLockActive;
//     })
// })

// Пусть в этом скрипте будет инпут, в который пользователь 
// будет вводить имя тега. После этого по нажатию на Enter 
// под инпутом пусть выдается описание этого тега.

// let input = document.querySelector('input'); 
// let textField = document.querySelector('p'); 

// let tagDefinitions = {
//     'a': 'нужен для создания гиперссылок, которые связывают страницу с другой странице или с определённым местом на той же веб-странице', 
//     'p': 'Элемент текстового абзаца'
// }

// input.addEventListener('keydown', (event) => {
//     if (event.keyCode === 13) {
//         textField.textContent = tagDefinitions[input.value];
//     }
// });

// №1⊗jsPrStLC
// Выведите в виде списка ul все числа текущего месяца. Средствами CSS 
// поставьте пункты списка в ряд.
// №2⊗jsPrStLC
// Сделайте так, чтобы текущий день в календаре был выделен каким-нибудь цветом.
// №3⊗jsPrStLC
// Сделайте так, чтобы над списком было написано название текущего 
// месяца по-русски и номер года.
// №4⊗jsPrStLC
// Сделайте так, чтобы над календарем появились ссылки вперед и назад,
//  позволяющие менять месяц. Месяц и год, выводимые над календарем, 
//  должны соответствовать отображаемому месяцу.

// let date = new Date();

// let currYear = date.getFullYear(); 
// let currMonth = date.getMonth();    
// const accCurrMonth = date.getMonth();
// const accCurrYear = date.getFullYear();
// let currDay = date.getDate();

// let prevMonthButton = document.querySelector('.prev')
// let nextMonthButton = document.querySelector('.next')

// getCalendarChange(currMonth); 

// prevMonthButton.addEventListener('click', ()=>{
//     if(currMonth>=1){
//         currMonth -= 1; 
//     }
//     else if (currMonth == 0){
//         currMonth = 11; 
//         currYear -= 1; 
//     }
//     getCalendarChange(currMonth); 
// })
// nextMonthButton.addEventListener('click', ()=>{
//     if (currMonth<=10){
//         currMonth += 1;
//         getCalendarChange(currMonth); 
//     } 
//     else if(currMonth==11){
//         currMonth = 0; 
//         getCalendarChange(currMonth); 
//         currYear += 1; 
//     }
// })

// function getCalendarChange(currMonth){
//     let ul = document.querySelector('ul'); 
//     ul.innerHTML = '';
//     let monthNameDiv = document.querySelector('.month-name'); 
//     let yearDiv = document.querySelector('.year'); 
//     let calendarDaysDiv = document.querySelector('.calendar');  
//     let namesOfMonthsObj = {
//         0: 'Январь',
//         1: 'Февраль',
//         2: 'Март',
//         3: 'Апрель',
//         4: 'Май',
//         5: 'Июнь',
//         6: 'Июль',
//         7: 'Август',
//         8: 'Сентябрь',
//         9: 'Октябрь',
//         10: 'Ноябрь',
//         11: 'Декабрь'
//     };
//     monthNameDiv.textContent = namesOfMonthsObj[currMonth];  
    
//     let daysOfMonthsObj = {
//         0: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
//         1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
//         2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
//         3: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
//         4: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
//         5: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
//         6: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
//         7: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
//         8: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
//         9: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
//         10:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
//         11:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
//     };
//     for (let index = 0; index < daysOfMonthsObj[currMonth].length; index++) {
//         let li = document.createElement('li');
//         li.textContent = daysOfMonthsObj[currMonth][index]; 
//         if (currMonth == accCurrMonth && currYear == accCurrYear){
//             if (Number(li.textContent) == currDay){
//                 li.style.backgroundColor = 'red';
//                 li.style.color = 'white';
//                 li.style.padding = '10px'; 
//             }
//         }
//         ul.append(li); 
//     } 
//     calendarDaysDiv.append(ul); 

//     yearDiv.textContent = currYear; 
// }



// Поиск исторических события на JavaScript

// let input = document.querySelector('input'); 
// let tds = document.querySelectorAll('td');
// let yearsEventsObj = {
//     2015: {
//         event: 'событие 2015 года',
//         description: 'описание события 2015 года'
//     },
//     2016: {
//         event: 'событие 2016 года',
//         description: 'описание события 2016 года'
//     },
//     2017: {
//         event: 'событие 2017 года',
//         description: 'описание события 2017 года'
//     }
// };

// input.addEventListener('keydown', (event) => {
//     if (event.keyCode === 13) {
//         for (let index = 0; index < tds.length; index++) {
//             tds[index].textContent = ''; 
//             tds[index].classList.add('td_active'); 
//         }
//         tds[0].append(input.value);
//         tds[1].append(yearsEventsObj[input.value].event);
//         tds[2].append(yearsEventsObj[input.value].description);
//     }
// });

// Гороскоп на JavaScript

// let date = new Date();

// let currYear = date.getFullYear();
// let currMonth = (date.getMonth() + 1).toString().padStart(2, '0');
// let currDay = date.getDate();
// const constCurrDay = date.getDate();


// let radios = document.querySelectorAll('input[type="radio"]');
// for (let index = 0; index < radios.length; index++) {
//     radios[index].addEventListener('change', ()=>{
//         if (radios[0].checked){
//             currDay = constCurrDay; 
//             getDateChange(currDay)
//         }
//         else if (radios[1].checked){
//             currDay = constCurrDay; 
//             currDay = Number(currDay) + 1;
//             getDateChange(currDay); 
//         }
//         else if (radios[2].checked){
//             currDay = constCurrDay; 
//             currDay = Number(currDay) + 2; 
//             getDateChange(currDay); 
//         }; 
//     })
// }

// let dailyHoroscope = {
//     '05.12.2023': {
//       Овен: 'гороскоп для Овна 05.12.2023',
//       Телец: 'гороскоп для Тельца 05.12.2023',
//       Близнецы: 'гороскоп для Близнецов 05.12.2023',
//       Рак: 'гороскоп для Рака 05.12.2023',
//       Лев: 'гороскоп для Льва 05.12.2023',
//       Дева: 'гороскоп для Девы 05.12.2023',
//       Весы: 'гороскоп для Весов 05.12.2023',
//       Скорпион: 'гороскоп для Скорпиона 05.12.2023',
//       Стрелец: 'гороскоп для Стрельца 05.12.2023',
//       Козерог: 'гороскоп для Козерога 05.12.2023',
//       Водолей: 'гороскоп для Водолея 05.12.2023',
//       Рыбы: 'гороскоп для Рыб 05.12.2023',
//     },
//     '06.12.2023': {
//         Овен: 'гороскоп для Овна 06.12.2023',
//         Телец: 'гороскоп для Тельца 06.12.2023',
//         Близнецы: 'гороскоп для Близнецов 06.12.2023',
//         Рак: 'гороскоп для Рака 06.12.2023',
//         Лев: 'гороскоп для Льва 06.12.2023',
//         Дева: 'гороскоп для Девы 06.12.2023',
//         Весы: 'гороскоп для Весов 06.12.2023',
//         Скорпион: 'гороскоп для Скорпиона 06.12.2023',
//         Стрелец: 'гороскоп для Стрельца 06.12.2023',
//         Козерог: 'гороскоп для Козерога 06.12.2023',
//         Водолей: 'гороскоп для Водолея 06.12.2023',
//         Рыбы: 'гороскоп для Рыб 06.12.2023',
//       },
//     '07.12.2023': {
//       Овен: 'гороскоп для Овна 07.12.2023',
//       Телец: 'гороскоп для Тельца 07.12.2023',
//       Близнецы: 'гороскоп для Близнецов 07.12.2023',
//       Рак: 'гороскоп для Рака 07.12.2023',
//       Лев: 'гороскоп для Льва 07.12.2023',
//       Дева: 'гороскоп для Девы 07.12.2023',
//       Весы: 'гороскоп для Весов 07.12.2023',
//       Скорпион: 'гороскоп для Скорпиона 07.12.2023',
//       Стрелец: 'гороскоп для Стрельца 07.12.2023',
//       Козерог: 'гороскоп для Козерога 07.12.2023',
//       Водолей: 'гороскоп для Водолея 07.12.2023',
//       Рыбы: 'гороскоп для Рыб 07.12.2023',
//     },
//   };

// function getDateChange(currDay){

//     let currDate = '0' + currDay + '.' + currMonth + '.' + currYear;
//     console.log(currDate);

//     let textField = document.querySelector('.horoscope');

//     let input = document.querySelector('input'); 
//     let userZodiacSign = input.value;  
//     textField.textContent = dailyHoroscope[currDate][userZodiacSign];

//     // input.addEventListener('keypress', (event) => {
//     //     if (event.key === "Enter") {
//     //         let userZodiacSign = input.value;  
//     //         textField.textContent = dailyHoroscope[currDate][userZodiacSign];
//     //     }
//     // });
// }

// Сайт предсказаний на JavaScript
// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// function startTimer(textField) {
//     intervalID = setInterval(() => {
//         let randomNum = getRandomNumber(1, 20);
//         textField.textContent = randomNum; 
//     }, 100);
// }

// function stopTimer() {
//     clearInterval(intervalID);
// }

// let timer = document.querySelector('#timer');
// let text = document.querySelector('#text');
// let startButton = document.querySelector('#start');
// let stopButton = document.querySelector('#stop');
// let intervalID;

// startButton.addEventListener('click', ()=>{
//     startButton.classList.remove('active'); 
//     stopButton.classList.add('active'); 
//     startTimer(timer);     
// })

// stopButton.addEventListener('click', ()=>{
//     stopTimer(); 
//     let predictions = {
//         1: 'Сегодня вас ждет приятный сюрприз.',
//         2: 'Вы с легкостью преодолеете вызов.',
//         3: 'Вы получите хорошие новости от друга.',
//         4: 'Ваше упорство принесет вам успех.',
//         5: 'Новые возможности откроются перед вами.',
//         6: 'Ожидайте волнующих приключений в ближайшем будущем.',
//         7: 'Ваше творческое вдохновение достигнет пика.',
//         8: 'Счастье будет на вашей стороне в сегодняшний день.',
//         9: 'Вам предстоит важный разговор, изменяющий ваше представление о мире.',
//         10: 'Ваши усилия будут вознаграждены в скором будущем.',
//         11: 'Вам удастся преодолеть любые трудности, с которыми вы столкнетесь.',
//         12: 'Близкие отношения принесут вам радость и удовлетворение.',
//         13: 'Вам ждут важные открытия в личной и профессиональной сфере.',
//         14: 'В ближайшее время вы найдете ответы на все ваши вопросы.',
//         15: 'Ваша решительность приведет к желаемому результату.',
//         16: 'Вы станете объектом восхищения и уважения окружающих.',
//         17: 'Семейные отношения укрепятся и принесут радость.',
//         18: 'Ваша финансовая ситуация улучшится в ближайшем будущем.',
//         19: 'Ожидайте успеха в новых начинаниях.',
//         20: 'Внутренний покой и гармония станут вашими постоянными спутниками.'
//     };
//     let randomNum = getRandomNumber(1, 20)
//     timer.textContent = randomNum;
//     if (randomNum <= 10){
//         text.style.color = 'green'; 
//     }
//     else{
//         text.style.color = 'red';
//     }
//     stopButton.classList.remove('active'); 
//     text.textContent = predictions[randomNum]; 
// })

// Автодополнение на JavaScript
// function createNewLis(elem){
//     let li = document.createElement('li');
//     li.append(elem);
//     ul.append(li); 
// }

// // let arr = ['Belarus', 'Belgium', 'Bulgaria', 'Canada', 'Denmark', 'Egypt', 'France', 'Germany', 'Hungary', 'Italy'];
// let arr = ['Belarus', 'Belgium', 'Bulgaria']; 
// let input = document.querySelector('input'); 
// let ul = document.querySelector('ul'); 
// let letters = []; 
// let count = 0; 

// input.addEventListener('input', (event)=>{
//     count = input.value.length;
//     letters = input.value.split('');
//     let word = letters.join('');
//     ul.innerHTML = ''; 
//     let newArr = arr.filter(elem =>{
//         if (elem.startsWith(word)){
//             createNewLis(elem)
//         }
//     }) 
// })
// input.addEventListener('keydown', (event) => {
//     if (event.code === 'Backspace') {
//         letters.pop();
//     }
// });
// input.addEventListener('blur', ()=>{
//     ul.innerHTML = ''; 
// })

// Спойлер на JavaScript
// let links = document.querySelectorAll('a'); 

// links.forEach(link =>{
//     let parentOfLink = link.parentNode;
//     let siblingSpoiler = parentOfLink.nextElementSibling;  
//     link.addEventListener('click', ()=>{
//         siblingSpoiler.classList.toggle('active');
//     })
// })

// Вкладки на JavaScript
// let links = document.querySelectorAll('a');
// let tabs = document.querySelectorAll('.tab'); 

// первое решение 

// links[0].addEventListener('click', ()=>{
//     console.log(0);
//     links[0].classList.add('active')
//     links[1].classList.remove('active')
//     links[2].classList.remove('active')
    
//     tabs[0].classList.add('active');
//     tabs[1].classList.remove('active');
//     tabs[2].classList.remove('active');
// })
// links[1].addEventListener('click', ()=>{
//     links[0].classList.remove('active')
//     links[1].classList.add('active')
//     links[2].classList.remove('active')

//     tabs[0].classList.remove('active');
//     tabs[1].classList.add('active');
//     tabs[2].classList.remove('active');
// })
// links[2].addEventListener('click', ()=>{
//     links[0].classList.remove('active')
//     links[1].classList.remove('active')
//     links[2].classList.add('active')

//     tabs[0].classList.remove('active');
//     tabs[1].classList.remove('active');
//     tabs[2].classList.add('active');
// })

// второе 

// links.forEach(link => {
//     link.addEventListener('click', () => {
//         let tabIndex = link.dataset.tabIndex;

//         links.forEach(otherLink => otherLink.classList.remove('active'));
//         tabs.forEach(tab => tab.classList.remove('active'));

//         link.classList.add('active');
//         tabs[tabIndex].classList.add('active');
//     });
// });

// Аккордеон на JavaScript
// let links = document.querySelectorAll('a');


// links.forEach(link =>{
//     link.addEventListener('click', ()=>{
//         let tabParent = link.closest('.tab');
    
//         if (tabParent) {
//             tabParent.classList.toggle('active');
//         }
//     })
// })

// Игра в города на JavaScript

// field.addEventListener('keypress', (event)=>{
//     if (event.key === "Enter") {
//         count++; 
//         if (count == 0){
//             let newCity = field.value.trim();
//             userCitiesArr.push(newCity);
//         }
//         else {
//             let newCity = field.value.trim();
//             if(getCheckRepeatCities(userCitiesArr, newCity)){
//                 message.textContent = 'Такой город уже использовался в игре ранее'; 
//                 field.disabled = true; 
//             }
//             userCitiesArr.push(newCity);

//             let firstLetter = newCity.charAt(0).toUpperCase();
//             let lastLetter = userCitiesArr[count-1].split(' ').pop().slice(-1).toUpperCase();
//             if (firstLetter == lastLetter){
//                 message.textContent = 'Игра продолжается! Введите следующий город.'; 
//             } else{
//                 message.textContent = 'Первая буква вашего города не соответствует последней предыдущего. Игра окончена.'; 
//                 field.disabled = true; 
//             }
//         }
//     }
// }); 

// с роботом 

// function getCheckRepeatCities(arr, city) {
//     return arr.includes(city); 
//     // return console.log('getCheckRepeatCities: ', arr.includes(city));
// }
// function getRemoveSigns(word) {
//     let cleanedWord = word.replace(/[ЬЪ]/g, '');
//     return cleanedWord;
// }

// let allCities = [
//     'Москва',
//     'Санкт-Петербург',
//     'Новосибирск',
//     'Екатеринбург',
//     'Нижний Новгород',
//     'Казань',
//     'Челябинск',
//     'Омск',
//     'Самара',
//     'Ростов-на-Дону',
//     'Ярославль',
//     'Владивосток',
//     'Иркутск',
//     'Красноярск',
//     'Краснодар',
//     'Уфа',
//     'Тюмень',
//     'Воронеж',
//     'Калининград',
//     'Сочи',
//     'Томск',
//     'Ульяновск',
//     'Барнаул',
//     'Ижевск',
//     'Хабаровск',
//     'Саратов',
//     'Тольятти',
//     'Кемерово',
//     'Новокузнецк',
//     'Астрахань',
//     'Рязань',
//     'Улан-Удэ',
//     'Тула',
//     'Ставрополь',
//     'Белгород',
//     'Владимир',
//     'Мурманск',
//     'Севастополь',
//     'Якутск',
//     'Тверь',
//     'Курск',
//     'Иваново',
//     'Туапсе',
//     'Грозный',
//     'Нальчик',
//     'Череповец',
//     'Курган',
//     'Майкоп',
//     'Архангельск',
//     'Волгоград',
//     'Смоленск',
//     'Калуга',
//     'Киров',
//     'Чита',
//     'Сургут',
//     'Вологда',
//     'Орёл',
//     'Йошкар-Ола',
//     'Чебоксары',
//     'Оренбург',
//     'Рыбинск',
//     'Тамбов',
//     'Липецк',
//     'Кострома',
//     'Брянск',
//     'Таганрог',
//     'Керчь',
//     'Северодвинск',
//     'Балашиха',
//     'Сочи',
//     'Анапа',
//     'Геленджик',
//     'Норильск',
//     'Новороссийск',
//     'Кисловодск',
//     'Смоленск',
//     'Стерлитамак',
//     'Тобольск',
//     'Таганрог'
//   ];
  
// let field   = document.querySelector('#field');
// let message = document.querySelector('#message');
// let userCitiesArr = []; 
// let count = -1; 
// let robotText = document.querySelector('#robot-text'); 

// field.addEventListener('keypress', (event)=>{
//     if (event.key === "Enter") {
//         count++; 
//         if (count == 0){
//             let newCity = field.value.trim();
//             console.log('newCity: ', newCity);
//             getRemoveSigns(newCity)
//             userCitiesArr.push(newCity);
//             console.log('userCitiesArr: ', userCitiesArr);
//             let firstWordlastLetter = userCitiesArr[count].split(' ').pop().slice(-1).toUpperCase();
//             console.log('firstWordlastLetter: ', firstWordlastLetter);
//             let foundWord = allCities.find(city => city.charAt(0).toUpperCase() === firstWordlastLetter);
//             console.log('foundWord: ', foundWord);
//             if (foundWord) {
//                 message.textContent = foundWord; 
//                 userCitiesArr.push(foundWord);
//                 allCities = allCities.filter(city => city !== foundWord); // слово удалено из массива 
//                 // console.log('allCities: ', allCities);
//             } else {
//             message.textContent = 'У робота закончился словарный запас, вы победили!'; 
//             }
//         }
//         else {
//             let newCity = field.value.trim();
//             console.log('newCity: ',newCity);
//             let checkRepeatCities = getCheckRepeatCities(userCitiesArr, newCity);   
//             console.log('checkRepeatCities: ',checkRepeatCities);
//             if(checkRepeatCities === true){
//                 message.textContent = 'Такой город уже использовался в игре ранее'; 
//                 field.disabled = true; 
//             } else{
//                 getRemoveSigns(newCity)
//                 userCitiesArr.push(newCity);
//                 console.log('userCitiesArr: ', userCitiesArr);
//                 let firstLetter = newCity.charAt(0).toUpperCase();
//                 console.log('firstLetter: ',firstLetter);
//                 // console.log('userCitiesArr[count+1]: ', userCitiesArr[count+1]);
//                 let lastLetter = userCitiesArr[userCitiesArr.length - 1].split(' ').pop().slice(-1).toUpperCase();
//                 console.log('lastLetter: ',lastLetter);
//                 let foundWord = allCities.find(city => city.charAt(0).toUpperCase() === lastLetter);
//                 console.log('foundWord: ', foundWord);
//                 if (foundWord) {
//                     message.textContent = foundWord; 
//                     userCitiesArr.push(foundWord);
//                     allCities = allCities.filter(city => city !== foundWord); // слово удалено из массива 
//                     // console.log('allCities: ', allCities);
//                 } else {
//                 message.textContent = 'У робота закончился словарный запас, вы победили!'; 
//                 }
//             }
//         }
//     }
// }); 


// если не использовался до этого - первая буквы должна быть равна последней предыдущего - только тогда добавляем в массив 

// field.addEventListener('keypress', (event)=>{
//     if (event.key === "Enter") {
//         прибавить каунту один 

//         если каунт равен 0{
//             удаление ь и ъ из слова
//             новое название города добавляется в общий массив
//             выясняем последнюю букву первого слова 
//             находим слово в массиве робота, которое начинается на (последнюю букву первого слова) 
//             если слово находится{
//                 выводим слово от имени робота на экран и добавляем это слово в общий массив, затем удаляем это слово из массива
//             } else {
//             message.textContent = 'У робота закончился словарный запас, вы победили!'; 
//             }
//         }
//         else {
//             удаление ь и ъ из слова
//             новое слово в переменную 
//             проверяем было ли оно до этого 
//             если было{
//                 message.textContent = 'Такой город уже использовался в игре ранее'; 
//                 field.disabled = true; 
//             } else{
//                 добавляем город в общий массив
//                 определяем его первую букву
//                 определяем его последнюю букву
//                 находим в массиве робота слово начинающиеся на послднюю букву, введенного слова
//                 если слово находится{
//                     выводим слово от имени робота на экран и добавляем это слово в общий массив, затем удаляем это слово из массива
//                 } else {
//                 message.textContent = 'У робота закончился словарный запас, вы победили!'; 
//                 }
//             }
//         }
//     }
// }); 

// Чеклист на JavaScript
// function editLink(link){
//     link.href = '#'; 
//     link.style.textDecoration = 'none'; 
// }
// function addButtons(li, text){
//     let span = document.createElement('span');
//     span.textContent = text + ' '; 
//     li.textContent = '';
//     getReduct(span, li); 
//     li.append(span); 

//     let deleteLink = document.createElement('a'); 
//     deleteLink.textContent = 'удалить' + ' ';
//     editLink(deleteLink); 
//     deleteLink.addEventListener('click', ()=>{
//         li.remove(); 
//     })
//     li.append(deleteLink); 

//     let crossLink = document.createElement('a'); 
//     crossLink.textContent = 'сделано';
//     editLink(crossLink)
//     crossLink.addEventListener('click', ()=>{
//         span.style.textDecoration = 'line-through';  
//     })
//     li.append(crossLink); 
// }
// function getReduct(span, li){
//     span.addEventListener('dblclick', ()=>{
//         let input = document.createElement('input'); 
//         input.value = span.textContent; 
//         span.textContent = ''; 
//         input.addEventListener('keypress', (event)=>{
//             if (event.key === 'Enter'){
//                 span.textContent = input.value + ' '; 
//                 input.remove(); 
//             }
//         })
//         li.prepend(input); 
//         input.focus(); 
//     })
// }

// let input = document.querySelector('input');
// let ul = document.querySelector('ul');

// input.addEventListener('keypress', (event)=>{
//     if(event.key === 'Enter'){
//         let li = document.createElement('li'); 
//         addButtons(li, input.value)
//         ul.append(li); 
//         input.value = ''; 
//     }
// })

// Калькулятор продуктов на JavaScript
// function getReduct(td, total, table) {
//     let span = document.createElement('span');
//     span.textContent = td.textContent;
//     td.textContent = '';
//     td.append(span);

//     span.addEventListener('dblclick', () => {
//         let input = document.createElement('input');
//         input.value = span.textContent;
//         span.textContent = '';
//         input.addEventListener('keypress', (event) => {
//             if (event.key === 'Enter') {
//                 span.textContent = input.value + ' ';
//                 input.remove();
//                 updateTotal(table, total);
//             }
//         });
//         td.append(input);
//         input.focus();
//     });
// }

// function updateTotal(table, total) {
//     let rows = table.querySelectorAll('tr');
//     let sum = 0;

//     rows.forEach((row) => {
//         let cells = row.querySelectorAll('td');
//         if (cells.length === 5) {
//             sum += Number(cells[3].textContent);
//         }
//     });

//     total.textContent = sum;
// }

// function minusTotal(total, sumtd){
//     console.log('minusTotal ', 'total: ', total);
//     console.log('minusTotal ', 'sumtd: ', sumtd);
//     total.textContent = Number(total.textContent) - Number(sumtd); 
//     console.log('total = Number(minusTotal) - sumtd; : ', total)
// }

// function getDeleteLink(link, tr){
//     link.textContent = 'удалить' + ' ';
//     link.href = '#'; 
//     link.style.textDecoration = 'none'; 

//     link.addEventListener('click', ()=>{
//         let tds = tr.querySelectorAll('td');
//         console.log('tds: ', tds);

//         let sumTd = Number(tds[3].textContent); 
//         console.log('sumTd: ',sumTd);
//         minusTotal(total, sumTd)

//         tr.remove(); 
//     })
// }

// function getNewTr(table, name, price, amount){
//     let tr = document.createElement('tr');
//     let newTds = []; 
//     for (let index = 0; index <= 4; index++) {
//         let td = document.createElement('td'); 
//         newTds.push(td); 
//     }

//     let sum = Number(price) * Number(amount);
//     total.textContent = Number(total.textContent) + Number(sum);   
//     let deleteLink = document.createElement('a'); 
//     getDeleteLink(deleteLink, tr);  

//     for (let index = 0; index < newTds.length; index++) {
//         newTds[0].textContent = name; 
//         newTds[1].textContent = price;
//         newTds[2].textContent = amount;
//         newTds[3].textContent = sum; 
//         newTds[4].append(deleteLink); 
//         tr.append(newTds[index]); 
//     }
//     getReduct(newTds[0], total, table);
//     getReduct(newTds[1], total, table);
//     getReduct(newTds[2], total, table);
//     getReduct(newTds[3], total, table);
//     table.append(tr); 
//     updateTotal(table, total);
// }

// function switchInputs(input1, input2, input3){
//     input1.addEventListener('keypress', (event)=>{
//         if(event.key === 'Enter'){
//             input2.focus();
//         }
//     })
//     input2.addEventListener('keypress', (event)=>{
//         if(event.key === 'Enter'){
//             input3.focus();
//         }
//     })
// }

// let nameInput   = document.querySelector('#name');
// let price  = document.querySelector('#price');
// let amount = document.querySelector('#amount');
// let add    = document.querySelector('#add');
// let table  = document.querySelector('#table');
// let total  = document.querySelector('#total');
// let allInputs = document.querySelectorAll('input'); 

// switchInputs(nameInput, price, amount); 

// add.addEventListener('click', ()=>{
//     getNewTr(table, nameInput.value, price.value, amount.value); 

//     allInputs.forEach(oneof =>{ 
//         if (oneof.id !== 'add'){
//             oneof.value = '';
//         }
//     })
// })

// Тест с вопросами и ответами в HTML коде на JavaScript

// 1, 2 

// вариант с dataset в инпутах
// function getCheckAnswer(input){
//     console.log(input.value);
//     if(input.value == input.dataset.right){
//         input.classList.remove('wrong'); 
//         input.classList.add('right'); 
//     } else{
//         input.classList.remove('right');
//         input.classList.add('wrong'); 
//     }
// }

// function getCheckAnswer(){
//     inputs.forEach((input, index)=>{
//         const isCorrect = input.value == answers[index]; 
//         input.classList.toggle('right', isCorrect); 
//         input.classList.toggle('wrong', !isCorrect);
//     })
// }

// let answers = [
// 	'1',
// 	'2',
// 	'3',
// ];

// let inputs = document.querySelectorAll('input'); 
// let button = document.querySelector('button'); 

// button.addEventListener('click', ()=>{
//     getCheckAnswer(); 
// })

// 3
// function createParentDivAndNextInput(elem){
//     let parentTest = document.querySelector('#test'); 

//     let parentDiv = document.createElement('div');
//     let input = document.createElement('input');

//     let p = document.createElement('p'); 
//     p.textContent = elem; 
    
//     parentTest.append(parentDiv)
//     parentDiv.appendChild(p); 
//     parentDiv.appendChild(input); 
// }
// function createQuestions(){
//     questions.forEach(question =>{
//         createParentDivAndNextInput(question);
//     })
// }; 
// function getCheckAnswer(){
//     let parentTest = document.querySelector('#test'); 
//     let inputs = parentTest.querySelectorAll('input'); 
//     inputs.forEach((input, index)=>{
//         const isCorrect = input.value == answers[index]; 
//         input.classList.toggle('right', isCorrect); 
//         input.classList.toggle('wrong', !isCorrect);
//     })
// };

// let answers = [
// 	'1',
// 	'2',
// 	'3',
// ];
// let questions = [
// 	'вопрос 1?',
// 	'вопрос 2?',
// 	'вопрос 3?'
// ];

// createQuestions()

// let button = document.querySelector('button'); 

// button.addEventListener('click', ()=>{
//     getCheckAnswer(); 
// })

// 4.1
// function createParentDivAndNextInput(key){
//     let parentTest = document.querySelector('#test'); 

//     let parentDiv = document.createElement('div');
//     let input = document.createElement('input');

//     let p = document.createElement('p'); 
//     p.textContent = key; 
    
//     parentTest.append(parentDiv)
//     parentDiv.appendChild(p); 
//     parentDiv.appendChild(input); 
// }
// function createQuestions() {
//     let keys = Object.keys(questions);

//     for (let index = 0; index < keys.length; index++) {
//         let key = keys[index];
//         createParentDivAndNextInput(key); 
//         answers.push(questions[key]); 
//     }
// }
// function getCheckAnswer(){
//     let parentTest = document.querySelector('#test'); 
//     let inputs = parentTest.querySelectorAll('input'); 
//     inputs.forEach((input, index)=>{
//         const isCorrect = input.value == answers[index]; 
//         input.classList.toggle('right', isCorrect); 
//         input.classList.toggle('wrong', !isCorrect);
//     })
// };

// let questions = {
// 	'Вопрос 1?': '1',
// 	'Вопрос 2?': '2',
// 	'Вопрос 3?': '3',
// }

// let answers = []; 

// createQuestions()

// let button = document.querySelector('button'); 

// button.addEventListener('click', ()=>{
//     getCheckAnswer(); 
// })

// 4.2
// function createParentDivAndNextInput(elem){
//     let parentTest = document.querySelector('#test'); 

//     let parentDiv = document.createElement('div');
//     let input = document.createElement('input');

//     let p = document.createElement('p'); 
//     p.textContent = elem; 
    
//     parentTest.append(parentDiv)
//     parentDiv.appendChild(p); 
//     parentDiv.appendChild(input); 
// }
// function createQuestions() {

//     for (let index = 0; index < questions.length; index++) {
//         createParentDivAndNextInput(questions[index].text); 
//         answers.push(questions[index].right); 
//     }
// }
// function getCheckAnswer(){
//     let parentTest = document.querySelector('#test'); 
//     let inputs = parentTest.querySelectorAll('input'); 
//     inputs.forEach((input, index)=>{
//         const isCorrect = input.value == answers[index]; 
//         input.classList.toggle('right', isCorrect); 
//         input.classList.toggle('wrong', !isCorrect);
//     })
// };

// let questions = [
// 	{
// 		text:  'вопрос 1?',
// 		right: 'ответ 1',
// 	},
// 	{
// 		text:  'вопрос 2?',
// 		right: 'ответ 2',
// 	},
// 	{
// 		text:  'вопрос 3?',
// 		right: 'ответ 3',
// 	},
// ];

// let answers = []; 

// createQuestions()

// let button = document.querySelector('button'); 

// button.addEventListener('click', ()=>{
//     getCheckAnswer(); 
// })

// 5
// function addDataset(arr1, arr2, arr3){
//     arr1[answers[0]].dataset.right = 'true'; 
//     arr2[answers[1]].dataset.right = 'true'; 
//     arr3[answers[2]].dataset.right = 'true'; 
// }
// function addAnswers(inputs){
//     let arr1 = [];
//     let arr2 = []; 
//     let arr3 = []; 
//     inputs.forEach(input =>{
//         if(input.name == 1){
//             arr1.push(input);
//         } else if (input.name == 2){
//             arr2.push(input);
//         } else if (input.name == 3){
//             arr3.push(input);
//         }
//     })
//     addDataset(arr1, arr2, arr3); 
// }
// function checkInputDataset(input){
//     if(input.dataset.right !== undefined){
//         console.log('Правильный ответ!'); 
//     } else {
//         console.log('Ответ к сожалению неверный');
//     }
// }
// let inputs = document.querySelectorAll('input'); 

// let answers = [2, 1, 2];
// addAnswers(inputs); 

// inputs.forEach(input =>{
//     input.addEventListener('click', ()=>{
//         checkInputDataset(input); 
//     })
// })

// 6
// function checkInputDataset(){
//     let checkedInputs = document.querySelectorAll('input:checked');
//     checkedInputs.forEach(input =>{
//         if(input.dataset.right !== undefined){
//             console.log('Правильный ответ!'); 
//         } else {
//             console.log('Ответ к сожалению неверный');
//         }
//     })
// }
// function addAnswers(arr, questions){
//     let arr1 = []; 
//     let arr2 = []; 
//     let arr3 = []; 
//     arr.forEach(div =>{
//         let divInputs = div.querySelectorAll('input'); 
//         divInputs.forEach(divInput =>{
//             if(divInput.name == 1){
//                 arr1.push(divInput); 
//             } else if(divInput.name == 2) {
//                 arr2.push(divInput); 
//             } else if(divInput.name == 3) {
//                 arr3.push(divInput); 
//             }
//         })
//     })
//     arr1[questions[0].right].dataset.right = 'true';
//     arr2[questions[1].right].dataset.right = 'true';
//     arr3[questions[2].right].dataset.right = 'true';
// }
// function createParentDivAndLabels(){
//     let count = 0; 
//     let parentTest = document.querySelector('#test')
//     let arrParentDivs = []; 

//     for (let index = 0; index < questions.length; index++) {
//         let parentDiv = document.createElement('div'); 
//         arrParentDivs.push(parentDiv); 
//         parentTest.append(parentDiv); 

//         let p = document.createElement('p'); 
//         p.textContent = questions[index].text; 
//         parentDiv.append(p)
//     }
//     for (let index = 0; index < questions.length; index++) {
//         count++; 
    
//         questions[index].variants.forEach(variant =>{
//             let label = document.createElement('label'); 
//             let input = document.createElement('input'); 
//             input.type = 'radio'; 
//             input.name = count; 

//             label.append(input);
//             label.append(variant); 
//             label.style.margin = '10px'; 
//             if (count == 1){
//                 arrParentDivs[0].append(label)
//             } else if (count == 2){
//                 arrParentDivs[1].append(label)
//             } else if (count == 3){
//                 arrParentDivs[2].append(label)
//             }
//         }) 
//     }
//     addAnswers(arrParentDivs, questions); 
// }

// let button = document.querySelector('button'); 
// let questions = [
// 	{
// 		text: 'вопрос 1?',
// 		right: 0,
// 		variants: [
// 			'вариант 1',
// 			'вариант 2',
// 			'вариант 3'
// 		]
// 	},
// 	{
// 		text: 'вопрос 2?',
// 		right: 1,
// 		variants: [
// 			'вариант 1',
// 			'вариант 2',
// 			'вариант 3'
// 		]
// 	},
// 	{
// 		text: 'вопрос 3?',
// 		right: 2,
// 		variants: [
// 			'вариант 1',
// 			'вариант 2',
// 			'вариант 3'
// 		]
// 	},
// ];
// createParentDivAndLabels(); 

// button.addEventListener('click', ()=>{
//     checkInputDataset(); 
// })

// Игра крестики-нолики на JavaScript
// function findWinner() {
//     let tds = document.querySelectorAll('td'); 
//     for (let i = 0; i < combs.length; i++) {
//         let allRedCross = combs[i].every(index => tds[index].classList.contains('red-cross'));
//         let allBlueCircles = combs[i].every(index => tds[index].classList.contains('blue-circle'));

//         if (allRedCross) {
//             winner.textContent = 'Крестик победил';
//             return;
//         } else if (allBlueCircles) {
//             winner.textContent = 'Нолик победил';
//             return;
//         } else {
//             finishGameIfTdsFilled();
//         }
//     }
// }
// function finishGameIfTdsFilled(){
//     let tds = document.querySelectorAll('td');
//     tds.forEach(td => {
//         if (td.classList.contains('red-cross').length + td.classList.contains('blue-circle').length == tds.length){
//             winner.textContent = 'Ничья'; 
//         } 
//     })
// }
// function addCrossAndCircles(td){
//     td.addEventListener('click', () => {
//         if (itemsCount % 2 === 0) {
//             td.classList.add('red-cross');
//         } else {
//             td.classList.add('blue-circle');
//         }
//         itemsCount++;
//         findWinner()
//     });
// }
// let tds = document.querySelectorAll('#field td');
// let gameStatus = document.querySelector('#game-status'); 
// let winner = document.querySelector('#winner')
// let itemsCount = 2 // 0 = cross, 1 = circle
// let combs = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
// ];
// tds.forEach(td => {
//     addCrossAndCircles(td); 
// })

// Игра смена цветов на JavaScript
// function getPlusCount(td, count, field){
//     td.addEventListener('click', ()=>{
//         count++;
//         field.textContent = Number(field.textContent) + count;
//     })
// }
// function getFinish(td, win){
//     let count = 0; 
//     let tds = document.querySelectorAll('td');
//     tds.forEach(oneof =>{
//         if (td.className == oneof.className){
//             count++; 
//             if(count == 9){
//                 win.textContent = 'Win'; 
//             }
//         } 
//     })
// }
// function getClickOnTd(td, arr, win){
//     td.addEventListener('click', () => {
//         let tdClass = td.className;
//         let currentIndex = arr.indexOf(tdClass);
//         if (currentIndex !== -1) {
//             let nextIndex = (currentIndex + 1) % arr.length;
//             td.classList.remove(tdClass);
//             td.classList.add(arr[nextIndex]);
//         }
//         getFinish(td, win); 
//     });
// }
// function getRandomElement(arr) {
//     let randomIndex = Math.floor(Math.random() * arr.length);
//     return arr[randomIndex];
// }
// let rows = 3;
// let cols = 3;
// let table = document.querySelector('#field')
// let body = document.body; 
// let colors = ['red', 'green', 'blue'];
// let textCount = 0; 
// let textField = document.querySelector('p');  
// let win = document.querySelector('#win')

// for(let i=0; i<rows; i++){
//     let tr = document.createElement('tr'); 
//     for (let index = 0; index < cols; index++) {
//         let td = document.createElement('td'); 
//         let randomColor = getRandomElement(colors); 
//         td.classList.add(randomColor); 
//         getClickOnTd(td, colors, win); 
//         getPlusCount(td, textCount, textField); 
//         tr.append(td);
//     }
//     table.append(tr); 
// }
// body.append(table); 

// Календарь на JavaScript
// function getSpaceOnleft(data){
//     let currentDate = new Date();
//     currentDate.setDate(data[0]);
//     let dayOfWeek = currentDate.getDay();
//     let emptyCells = 7 - dayOfWeek;
//     if (emptyCells == 7){
//         emptyCells = 0;
//     } 
//     for (let index = 0; index < emptyCells; index++) {
//         data.splice(0, 0, ' ')
//     }
// }
// function getSpaceOnRight(data){
//     let currentDate = new Date();
//     currentDate.setDate(data[data.length-1]);
//     let dayOfWeek = currentDate.getDay();
//     console.log(dayOfWeek);
//     let emptyCells = 7 - dayOfWeek;
//     if (emptyCells == 7){
//         emptyCells = 0;
//     } 
//     for (let index = 0; index < emptyCells; index++) {
//         data.push('')
//     } 
// }
// function clickPrevBtn(currMonth, daysOfMonthsObj, namesOfMonthsObj){
//     let prevButton = document.querySelector('#prev');  
//     prevButton.addEventListener('click', ()=>{
//         if (currMonth>0){
//             currMonth -= 1;
//         } else if (currMonth == 0){
//             currMonth = 11; 
//         }
//         createTable(daysOfMonthsObj[currMonth], 7);  
//         addMonthName(namesOfMonthsObj[currMonth]); 
//         addWeeksDaysInTd();
//     })
// } 
// function clickNextBtn(currMonth, daysOfMonthsObj, namesOfMonthsObj){
//     let nextButton = document.querySelector('#next');  
//     nextButton.addEventListener('click', ()=>{
//         if (currMonth<11){
//             currMonth += 1;
//         } else if (currMonth == 11){
//             currMonth = 0; 
//         }
//         createTable(daysOfMonthsObj[currMonth], 7);  
//         addMonthName(namesOfMonthsObj[currMonth]); 
//         addWeeksDaysInTd();
//     })
// } 
// function addMonthName(str){
//     let monthDiv = document.querySelector('.month-name');
//     monthDiv.textContent = str; 
// }
// function createTable(data, cols) {
//     getSpaceOnleft(data);
//     getSpaceOnRight(data); 
//     let currDay = addCurrentDates().currDay; 
//     let table = document.querySelector('table'); 
//     table.innerHTML = ''; 

//     let currentRow;
//     for (let i = 0; i < data.length; i++) {
//         if (i % cols === 0) {
//             currentRow = table.insertRow();
//         }
//         let cell = currentRow.insertCell();
//         cell.textContent = data[i];
//     }
// }
// function addWeeksDaysInTd(){
//     let daysOfWeekArray = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
//     let table = document.querySelector('table'); 
//     let tr = document.createElement('tr'); 

//     for (let index = 0; index < daysOfWeekArray.length; index++) {
//         let td = document.createElement('td');
//         td.textContent = daysOfWeekArray[index]; 
//         td.classList.add('bold'); 
//         tr.append(td); 
//     }

//     table.prepend(tr); 
// }
// function fillTable(){
//     let namesOfMonthsObj = {
//         0: 'Январь',
//         1: 'Февраль',
//         2: 'Март',
//         3: 'Апрель',
//         4: 'Май',
//         5: 'Июнь',
//         6: 'Июль',
//         7: 'Август',
//         8: 'Сентябрь',
//         9: 'Октябрь',
//         10: 'Ноябрь',
//         11: 'Декабрь'
//     };
//     let daysOfMonthsObj = {
//         0: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
//         1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
//         2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
//         3: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
//         4: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
//         5: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
//         6: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
//         7: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
//         8: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
//         9: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
//         10:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
//         11:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
//     };
//     let currMonth = addCurrentDates().currMonth; 
//     createTable(daysOfMonthsObj[currMonth], 7);  
//     addMonthName(namesOfMonthsObj[currMonth]); 
//     addWeeksDaysInTd();

//     clickPrevBtn(currMonth, daysOfMonthsObj, namesOfMonthsObj);
//     clickNextBtn(currMonth, daysOfMonthsObj, namesOfMonthsObj); 
// }
// function addCurrentDates() {
//     let date = new Date();

//     let currYear = date.getFullYear();
//     let currMonth = date.getMonth();
//     const accCurrMonth = date.getMonth();
//     const accCurrYear = date.getFullYear();
//     let currDay = date.getDate();

//     return { currDay, currMonth, currYear, accCurrMonth, accCurrYear };
// }

// fillTable(); 
