document.querySelector("#typebar")
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