let btnStart = document.getElementById('start'),

    result = document.getElementsByClassName('result-table')[0],

    budget = result.getElementsByClassName('budget-value')[0],
    daybudget = result.getElementsByClassName('daybudget-value')[0],
    level = result.getElementsByClassName('level-value')[0],
    expenses = result.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = result.getElementsByClassName('optionalexpenses-value')[0],
    income = result.getElementsByClassName('income-value')[0],
    monthsavings = result.getElementsByClassName('monthsavings-value')[0],
    yearsavings = result.getElementsByClassName('yearsavings-value')[0],
    optionalExpenses = document.getElementsByClassName('optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    mustExpensesList = document.getElementsByClassName('data')[0].getElementsByClassName('expenses-item'),
    
    btnExpenses = document.querySelector('button.expenses-item-btn'),
    btnOptionalexpenses = document.querySelector('button.optionalexpenses-btn'),
    btnCountBudget = document.querySelector('button.count-budget-btn'),
    
    proparlyIncome = document.querySelector('#income').value.split(', '),
    savings = document.querySelector('#savings'),
    savingsSum = document.querySelector('#sum'),
    savingsPercent = document.querySelector('#percent'),
    dataYear = document.querySelector('.year-value'),
    dataMonth = document.querySelector('.month-value'),
    dataDay = document.querySelector('.day-value'),
    sumValue = document.querySelector('.choose-sum');

    let money, time;
    btnExpenses.disabled = true;
    btnOptionalexpenses.disabled = true;
    btnCountBudget.disabled = true;

btnStart.addEventListener('click', function(){
    time = prompt('Введите дату в формате YYYY-DD-MM', '');
    money = +prompt("Ваш бюджет на месяц?", '');

    while(isNaN(money) || money =='' || money == null) {
        money = prompt('Ваш бюджет?', '');
    }
    btnExpenses.disabled = false;
    btnOptionalexpenses.disabled = false;
    btnCountBudget.disabled = false;

    appData.budget = money;
    appData.timeData = time;
    budget.textContent = money;
    dataYear.value = new Date(Date.parse(time)).getFullYear();
    dataMonth.value = new Date(Date.parse(time)).getMonth() + 1;
    dataDay.value = new Date(Date.parse(time)).getDate();
});

btnExpenses.addEventListener('click', function(){
    let sum = 0;
    for (let i = 0; i < mustExpensesList.length; i++){
        let costName = mustExpensesList[i].value,
            costSum = mustExpensesList[++i].value;
        if(
            typeof(costName) == 'string' && 
            typeof(costName) != null &&
            typeof(costSum) != 0 && 
            costName != '' && 
            costSum != '' && 
            costName.length < 50
        )
            {
                appData.expenses[costName] = costSum;
                sum += +costSum;
            }
        appData.budgetForDay = ((appData.budget - sum)/30).toFixed();
        daybudget.textContent = appData.budgetForDay;

        if (appData.budgetForDay <= 100){
            level.textContent = 'Минимальный уровень достатка'; 
        } else if (appData.budgetForDay > 100 && appData.budgetForDay < 2000) {
            level.textContent = 'Средний уровень достатка'; 
        } else if (appData.budgetForDay >= 2000){
            level.textContent = 'Высокий уровень достатка'; 
        }
        else {
            level.textContent = 'Произошла шибка!';  
        }
        /* else {
            i--;
        } */  
    }
    expenses.textContent = sum;
});

btnOptionalexpenses.addEventListener('click', function(){
    for (let i = 0; i < optionalExpenses.length; i++){
        let opt = optionalExpenses[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

btnCountBudget.addEventListener('click', function(){
    if (appData.budget != undefined){
        appData.budgetForDay = (appData.budget/30).toFixed();
        daybudget.textContent = appData.budgetForDay;

        if (appData.budgetForDay <= 100){
            level.textContent = 'Минимальный уровень достатка'; 
        } else if (appData.budgetForDay > 100 && appData.budgetForDay < 2000) {
            level.textContent = 'Средний уровень достатка'; 
        } else if (appData.budgetForDay >= 2000){
            level.textContent = 'Высокий уровень достатка'; 
        }
        else {
            level.textContent = 'Произошла шибка!';  
        }
    }
    else{
        daybudget.textContent = 'Произошла ошибка!';
    }
});

incomeItem.addEventListener('change', function(){
    let items = incomeItem.value;
    appData.income = items.split(', ');
    income.textContent = appData.income;

});

savings.addEventListener('click', function(){
    if (appData.savings == true){
        appData.savings = false;
    } else{
        appData.savings = true;
    }
});

savingsSum.addEventListener('input', function(){
    if (appData.savings == true){
        let sum = +savingsSum.value,
        percent = +savingsPercent.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        monthsavings.textContent = appData.monthIncome.toFixed(1);
        yearsavings.textContent = appData.yearIncome.toFixed(1);
    }
});

savingsPercent.addEventListener('input', function(){
    if (appData.savings == true){
        let sum = +savingsSum.value,
        percent = +savingsPercent.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        monthsavings.textContent = appData.monthIncome.toFixed(1);
        yearsavings.textContent = appData.yearIncome.toFixed(1); 
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
