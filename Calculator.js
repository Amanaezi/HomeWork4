let num1 = +prompt("Введите первое число:");
let operator = prompt("Введите оператор (+, -, *, /, **):");
let num2 = +prompt("Введите второе число:");
let result;

if (isNaN(num1) || isNaN(num2)) 
{
  alert("Пожалуйста, введите числа.");
} 
else if (operator === "+") 
{
  result = num1 + num2;
} 
else if (operator === "-") 
{
  result = num1 - num2;
} 
else if (operator === "*") 
{
  result = num1 * num2;
} 
else if (operator === "/") 
{
  if (num2 === 0) 
  {
    alert("Деление на ноль недопустимо.");
  } 
  else 
  {
    result = num1 / num2;
  }
} 
else if (operator === "**") 
{
  result = Math.pow(num1, num2);
} 
else 
{
  alert("Введен недопустимый оператор.");
}

alert("Результат: " + result);