let items=[
    {
        "img":"images/cart-item-1.png",
        "price":"$15.99/-"
    },
    {
        "img":"images/cart-item-2.png",
        "price":"$15.99/-"
    },
    {
        "img":"images/cart-item-3.png",
        "price":"$15.99/-"
    },
    {
        "img":"images/cart-item-4.png",
        "price":"$15.99/-"
    }

]


let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');
let cartItem = document.querySelector('.cart-items-container');

// window.addEventListener("DOMContentLoaded", putItems);


document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}


document.querySelector('#cart-btn').onclick = () =>{
    putItems();
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}




function putItems(){
    let cnt=1;
    removeItems();
    let btn=cartItem.querySelector('.btn');
    cartItem.removeChild(btn);
    items.forEach( (e) =>{
        let item=document.createElement("div");
        item.classList.add("cart-item");

        // let attr=document.createAttribute("data-id");
        // attr.value=cnt;
        // item.setAttribute(attr);

        
        item.innerHTML=`<span class="fas fa-times remove"></span>
        <img src=${e.img} alt="">
        <div class="content">
            <h3>cart item ${cnt}</h3>
            <div class="price">${e.price}</div>
        </div>
        `;
        cartItem.appendChild(item);
        cnt++;
    })
    cartItem.appendChild(btn);

    let rmbtns=document.querySelectorAll(".remove");
    // console.log(rmbtns);
    rmbtns.forEach(function (btn) {
        btn.addEventListener("click",removeItem);
    })

    function removeItem (e) {
        const element = e.currentTarget.parentElement;
        let image=element.querySelector('img').getAttribute("src");
        cartItem.removeChild(element);
        let newitems=items.filter((it)=>{
                if(it.img!=image)
                return it;
            }
        
        )       
        items=newitems;
        putItems();
    }
        
}

window.onscroll = () =>{   
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


let addBtns=document.querySelectorAll(".addbtn");

addBtns.forEach(function (btn) {
    btn.addEventListener("click",addBtn);
})

function addBtn (e) {
    const element = e.currentTarget.parentElement;
    // console.log(element.innerHTML);
    let img=element.querySelector('img');
    let srcvalue=img.getAttribute("src");
    let price=element.querySelector('p').innerHTML;

    items.push(
        {
            "img":srcvalue,
            "price":price
        }
    )
    
}
    
function removeItems(){
    let items1=document.querySelectorAll('.cart-item');
    console.log(items1);
    items1.forEach((e)=>{
        cartItem.removeChild(e);
    }
    )
}



let addcart=document.querySelectorAll(".addcart");

addcart.forEach(function (btn) {
    btn.addEventListener("click",addBtnFromProduct);
})

function addBtnFromProduct(e){
    const element = e.currentTarget.parentElement.parentElement;
    // console.log(element.innerHTML);
    let img=element.querySelector('img');
    let srcvalue=img.getAttribute("src");
    let price=element.querySelector('p').innerHTML;

    items.push(
        {
            "img":srcvalue,
            "price":price
        }
    )
}