let stocklist = document.querySelector('.stocklist');
// let stockitem = document.querySelector('.stockitem');

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

function displayDishes() {
    $.ajax({
        type: "GET",
        url: `https://localhost:7269/api/Dish`,
        encode: false,
    }).done(function (data) { 
        loadDishHTML(data)
    });
}

displayDishes()
function loadDishHTML(data) {  
   for (let x = 0; x < data.length; x++) {
       let dish = data[x]
      
       let stockItem = document.createElement('li');
       stockItem.className = "stockitem";
       stockItem.innerHTML = `
           <p class="stock-name">${dish.name}</p>
           <p class="stock-amount">0</p>
           <p class="stock-date">13/2/2022</p>`   
    stocklist.appendChild(stockItem);
   }}
 


  