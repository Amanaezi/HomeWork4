let products = [
    { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
    { name: "Orange", calories: 160, color: "orange", sold: 12101 },
    { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
    { name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
    { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
    { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
    { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
    { name: "Water", calories: 0, color: "clear", sold: 62123 },
  ];

  const printProducts = (products) => 
  {
    products.forEach((product) => 
    {
      document.write(`Name: ${product.name}, 
      Calories: ${product.calories}, 
      Color: ${product.color}, Sold: 
      ${product.sold}</br>`);
    });
  };

  function printProducts(products) {
    for (let i = 0; i < products.length; i++) 
    {
      document.write(
        "Name: " +
          products[i].name +
          ", Calories: " +
          products[i].calories +
          ", Color: " +
          products[i].color +
          ", Sold: " +
          products[i].sold +
          "</br>"
      );
    }
  }

  const compareSold = (colaA, colaB) => colaA.sold - colaB.sold;
  const compareCalories = (colaA, colaB) => colaA.calories - colaB.calories;
  const compareName = (colaA, colaB) => colaA.name.localeCompare(colaB.name);
  const compareColor = (colaA, colaB) => colaA.color.localeCompare(colaB.color);



  document.write("<h1>Cola</h1>");
  printProducts(products);
  
  document.write("<h2>Cola by sold</h2>");
  products.sort(compareSold);
  printProducts(products);
  
  document.write("<h2>Cola by calories</h2>");
  products.sort(compareCalories);
  printProducts(products);
  
  document.write("<h2>Cola by name</h2>");
  products.sort(compareName);
  printProducts(products);
  
  document.write("<h2>Cola by color</h2>");
  products.sort(compareColor);
  printProducts(products);