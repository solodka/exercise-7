let btnStart = document.getElementById('start'),

    result = document.getElementsByClassName('result-table')[0],

    budget = result.getElementsByClassName('budget-value')[0].textContent,
    daybudget = result.getElementsByClassName('daybudget-value')[0].textContent,
    level = result.getElementsByClassName('level-value')[0].textContent,
    expenses = result.getElementsByClassName('expenses-value')[0].textContent,
    optionalexpenses = result.getElementsByClassName('optionalexpenses-value')[0].textContent,
    income = result.getElementsByClassName('income-value')[0].textContent,
    monthsavings = result.getElementsByClassName('monthsavings-value')[0].textContent,
    yearsavings = result.getElementsByClassName('yearsavings-value')[0].textContent;

let mustExpensesList = document.getElementsByClassName('data')[0].getElementsByClassName('expenses-item'),
    mustExpenses = new Array(mustExpensesList.length); 
for (let i = 0; i < mustExpensesList.length; i++){
    if (mustExpensesList[i].value){
        mustExpenses[i] = mustExpensesList[i].value;
    }
    else{
        mustExpenses.pop();
    }        
}

let btnExpenses = document.querySelector('button.expenses-item-btn'),
    btnOptionalexpenses = document.querySelector('button.optionalexpenses-btn'),
    btnCountBudget = document.querySelector('button.count-budget-btn');

let proparlyIncome = document.querySelector('#income').value.split(', '),
    savings = document.querySelector('#savings').checked,
    savingsSum = document.querySelector('#sum').value,
    savingsPercent = document.querySelector('#percent').value,
    dataYear = document.querySelector('.year-value').value,
    dataMonth = document.querySelector('.month-value').value,
    dataDay = document.querySelector('.day-value').value;

let money, time;
function start(){
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt('', '');
}