document.getElementById('formInventory').addEventListener('submit', saveInventory);

function saveInventory(e) {
  let name =document.getElementById('name').value;
  let amount = document.getElementById('amount').value;
  let price = document.getElementById('price').value;

  const inventory = {
    name,
    amount,
    price
  };

  if (localStorage.getItem('stock') === null) {
    let stock = [];
    stock.push(inventory);
    localStorage.setItem('stock', JSON.stringify(stock));
  } else {
    let stock = JSON.parse(localStorage.getItem('stock'));
    stock.push(inventory);
    localStorage.setItem('stock', JSON.stringify(stock));
  }
  getInventory();
  document.getElementById('formInventory').reset();
  e.preventDefault();
}

function getInventory(params) {
  let stock = JSON.parse(localStorage.getItem('stock'));
  let stockView = document.getElementById('list');

  /* stockView.innerHTML= ``; */

  for(let i = 0; i < stock.length; i++) {
    let name = stock[i].name;
    let price = stock[i].price;
    let amount = stock[i].amount;
  
  stockView.innerHTML += `<div class="card mb-3 carta">
    <div class="card-body">
      <span class="badge bg-info">Producto:</span> ${name} <span class="badge badge-secondary">Precio:</span> ${price} <span class="badge badge-primary">Cantidad</span> ${amount}
      <a class="btn btn-danger button" onclick="deleteInventory('${name}')">Borrar</a>
    </div>
  </div>`;
  
  }
}

function deleteInventory(name) {
  let stock = JSON.parse(localStorage.getItem('stock'));
  for (let i = 0; i < stock.length; i++) {
    if (stock[i].name == name) {
      stock.splice(i, 1);
    }
    
  }

  localStorage.setItem('stock', JSON.stringify(stock));
  getInventory();

}

getInventory();