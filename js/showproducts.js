window.addEventListener("load",doitfirst);

function doitfirst() {
    if (sessionStorage.getItem('LoginUser') != "") {
        ht=' <li class="nav-item"><a class="nav-link" href="" id="signout">SignOut</a>\
                    </li>';
        ul = document.getElementById('appendthis');
        
        ul.innerHTML +=ht;

        document.getElementById("signout").addEventListener("click",function () {
            sessionStorage.setItem("LoginUser" , "");
            location.reload();

    });
    }else{
        ht=' <li class="nav-item"><a class="nav-link" href="login.html" >login</a>\
        </li><li class="nav-item"><a class="nav-link" href="register.html" >register</a>\
        </li>';
            ul = document.getElementById('appendthis');

            ul.innerHTML +=ht;
    }
 
    // document.getElementById("signout").addEventListener("click",function () {
    //         sessionStorage.setItem("LoginUser" , "");
    //         location.reload();
    
    // });


    var shopdiv = document.getElementById("shop");
    var products = JSON.parse(localStorage.getItem("Products"))

    for (let i = 0; i < products.length; i++) {
        // console.log(products[i],i);
        html ='\
        <div class="shop-item" data-id="'+i+'" > \
            <span class="shop-item-title">'+products[i].Name+'</span><img class="shop-item-image" src="images/'+products[i].Url+'"><div class="shop-item-details"> \
                $ <span class="shop-item-price">'+products[i].Price+'</span> \
                <span class="index"style="display:none;">'+i+'</span> \
                <button id="'+i+'" class="btn btn-primary shop-item-button ml-2 item" type="button">ADD TO CART</button>\
                <a  data-item="'+i+'"  href="details.html" class="btn btn-primary shop-item-button ml-2 details" type="button">Detals</a>\
            </div>\
        </div>';

                shopdiv.innerHTML += html;
  
    }


    button = document.getElementsByClassName("item");
    if(sessionStorage.getItem("items") == null){
        sessionStorage.setItem("items" , "[]") ;
    }
    items = JSON.parse(sessionStorage.getItem("items"));
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click",function(){

            indexs = parseInt(button[i].getAttribute("id"));
            if(items.includes(indexs) == false){
                items.push(indexs);
                sessionStorage.setItem("items",JSON.stringify(items));
            }
        });
       
    }
   
    
    // console.log(button);




    details = document.getElementsByClassName("details");
    item = [];
    for (let i = 0; i < details.length; i++) {
        details[i].addEventListener("click",function(){
            index = parseInt(details[i].getAttribute("data-item"));
            item.push(index);
            sessionStorage.setItem("details",JSON.stringify(item));
            console.log(item);
        });
       
    }
    
    // console.log(details);
    


}




$(".owl-carousel").owlCarousel({
      
    items:4,
    autoplay:true,
    autoplayTimeout:2000,
    smartSpeed:1000,
    loop:true,
    
});