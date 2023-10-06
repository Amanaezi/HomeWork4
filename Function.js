function callbackTables() 
{
    function printTable(from, to, step, func) 
    {
      if (func === undefined) 
      {
        return;
      }
  
      from = from;
      to = to;
      step = step || 1;
      const selectedFunc = functions[func];
      document.write("<table border='1' cellspacing='0'>");

      for (var x = from; x <= to; x += step)
      {
        document.write("<tr>");
        let result = eval(`selectedFunc(${x})`);
        document.write("<td>" + x + "</td>");
        document.write("<td>" + result + "</td>");
        document.write("</tr>");
      }

      document.write("</table>");
    }
  
    const functions = [ ];
  
    let from = +prompt("Введите начало диапазона: ");
    let to = +prompt("Введите конец диапазона: ");
    let step = +prompt("Введите шаг: ");
    let func = prompt("Введите функцию (например, x * x): ");
  
    if (from > to || isNaN(from) || isNaN(to) || step <= 0 || isNaN(step)) 
    {
      alert("Неправильные данные!");
    } 
    else 
    {
        let userFunc = new Function("x", "return " + func);
        functions.push(userFunc);
        printTable(from, to, step, functions.length - 1);
    }
  }
  