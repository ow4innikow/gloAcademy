let money = 9000; //доход за месяц
let income = 'ремонт ноутбуков';//строка с доп доходом
let addExpenses = 'ЕДА, КОММУНАЛКА, ИНТЕРНЕТ, МЕТРО';// доп расходы
let deposit = false;
let mission = 38000;
let period = 12; 
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

//  - Вывести в консоль длину строки addExpenses
console.log('длина строки addExpenses:', addExpenses.length);
//- Вывести в консоль “Период равен (period) месяцев” 
// и “Цель заработать (mission) рублей/долларов/гривен/юани”
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + 'гривен');
//- Привести строку addExpenses к нижнему регистру 
// и разбить строку на массив, вывести массив в консоль
addExpenses = addExpenses.toLowerCase();
console.log(addExpenses.split(', '));
//- Объявить переменную budgetDay 
//и присвоить дневной бюджет (доход за месяц / 30)
let budgetDay = money/30;
//- Вывести в консоль budgetDay
console.log(budgetDay);