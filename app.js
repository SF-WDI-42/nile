console.log("app.js linked")

$(document).ready(function() {
  let products = [
    {
      name: "Computers",
      price: 1000,
      description: "Macs are the coolest and best computers currently. Also costly."
    },
    {
      name: "Cars",
      price: 40000,
      description: "Mercedes are speedy and fashionable."
    },
    {
      name: "Plants",
      price: 15,
      description: "Succulents are really easy to take care of and pretty cheap."
    }
  ];
  for(let i = 0; i<products.length; i++) {
    $(".products-container").append(`<div class="product"><h4 class="product-title">${products[i].name}</h4><p>${products[i].description}</p>$${products[i].price}</div>`)
  }
})
