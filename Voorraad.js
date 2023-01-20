let dishlist = document.querySelector('.dishlist');
let stockitem = document.querySelector('.stockitem');

document.querySelector("#typebar");
addEventListener("input", filterlist);

function filterlist(){
    const searchInput = document.querySelector('#typebar');
    const filter = searchInput.value.toLowerCase();
    const listItems = document.querySelectorAll('.stock-item')

    listItems.forEach((item) =>{
        let text = item.textContent;
        if(text.toLowerCase().includes(filter.toLowerCase())){
            item.style.display ='';
        }
        else{
            item.style.display = 'none';
        }
    });
}

function displayDishes(type) {
    $.ajax({
        type: "GET",
        url: `https://localhost:7269/api/Dish/dishtype/${type}`,
        encode: false,
    }).done(function (data) {
        loadDishHTML(data)
    });
}

function loadDishHTML(data) {
    dishlist.innerHTML = "";
    for (let x = 0; x < data.length; x++) {
        let dish = data[x]

        let stocklist = document.createElement('li');
        stocklist.className = "stockitem";
        stocklist.innerHTML = `
        <button class="stockitem">
            <p class="stock-name">${dish.name}</p>
            <p class="stock-amount">${dish.stockAmount}</p>
            <p class="stock-date"></p>
        </button>`
    }}

    let stocklist = document.createElement('li');
    dishlist.appendChild(stocklist);