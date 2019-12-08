function ItemBought(Item,Count) {
    this.item = Item;
    this.count = Count;
}

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
    
    // if(sessionStorage.getItem("LoginUser") == ""){  window.location.href = "login.html";}
  

    items =JSON.parse(sessionStorage.getItem('items')); // []
    products =JSON.parse(localStorage.getItem('Products'));// [{}]
    tbody = document.getElementsByTagName("tbody")[0];
    total = document.getElementById("total");
    totalprice = 0;
    count = 1;
   for (let i = 0; i < items.length; i++) {
       for (let j = 0; j < products.length; j++) {
        if( items[i] == j ){        
            html = "<tr id='"+products[j].ID+"'>\
            <th scope='row'>"+(count++)+"</th>\
            <td>"+products[j].Name+"</td>\
            <td class='prices' data-price='"+products[j].Price+"'>"+products[j].Price+"</td>\
            <td><img src='images/"+products[j].Url+"'  class='img-fluid' style='width:100px;'></td>\
            <td><input type='number' min='1' value='1' max='"+products[j].Count+"' class='form-control quantity' id='qty' ></td>\
            <td><button id='"+i+"' class='btn btn-lg btn-danger '>remove</button></td>\
            </tr>";
            totalprice += products[j].Price;
            total.value = totalprice;
            tbody.innerHTML += html;


        }
         
        

       }
        
   }

/**
 * calcuate the price of items selected ================================= 
 */

    totalprice=0;
    totalPrice();
    //inputs of  type number

    for (let i = 0; i < quantity.length; i++) {
    quantity[i].addEventListener('change',function(){
        totalprice=0;
       
        if ((+quantity[i].value) >= (+quantity[i].max) ) {
            alert("That is the Max quantity you Can bought");
            quantity[i].value =(+quantity[i].max);
        }
        totalPrice();
        
    });
    }


/**
 * ==============================================
 */


/***
 * ============================================================
 *  Delete one element from session item array 
 */
   deleteElement = document.querySelectorAll(".btn-danger");
   items = [];
//    deleteElement.addEventListener("click" , function(){

   deleteElement.forEach(function (elem ) {
    elem.addEventListener('click', function(){
        indexs = parseInt(elem.getAttribute("id"));
         ittemarr= JSON.parse( sessionStorage.getItem("items"));
         ittemarr.splice(indexs,1)
         sessionStorage.setItem("items",JSON.stringify(ittemarr));
         location.reload();
        // console.log(items);  
    });
    // console.log(elem)

   });
   /**
    * ===============================================================
    */

   /***
    * ===============================================================
    *  To decrese count item and buy it 
    */


    document.getElementById("confirm").addEventListener("click", function(){
        if(sessionStorage.getItem("LoginUser") == null){
            sessionStorage.setItem("LoginUser" , "") ;
        }
        if(sessionStorage.getItem("LoginUser") == "")
        {  window.location.href = "login.html";}
        else{
            items =JSON.parse(sessionStorage.getItem('items'));         // [indexs]
            products =JSON.parse(localStorage.getItem('Products'));     // [{},{}]
            quantity=document.getElementsByClassName("quantity");       // []
            
            bought = [];
            
               for (let j = 0; j < products.length; j++) { // all products
              
                   for (let m = 0; m < items.length; m++)
                    { // item you want buy
        
                        if(j==items[m]){
                            let quantityofproduct =  (+ quantity[m].value );
                            bought.push(new ItemBought(products[j].Name,quantityofproduct));
                            products[j].Count =products[j].Count - quantityofproduct;
                            if(products[j].Count <=0){
                                products.splice(j,1);   
                            }
                            
                        } 
              
                    }   
                   
               }
               localStorage.setItem("Products",JSON.stringify(products))
               localStorage.setItem("Orders",JSON.stringify(bought))
                alert("Your purchase has been successful ")
                sessionStorage.setItem('items',"[]");
                Send_Email();
                tbody.innerHTML="";    
                window.location.href="store.html";
            
        }
        
        });
        

    /**
     * ====================================================================
     */
    
//    })



}


  function Send_Email() {
    boughtitems = JSON.parse(localStorage.getItem('Orders'));
    htmlitem= "";
    for (let d = 0; d < boughtitems.length; d++) {
        htmlitem +="Item Name : "+boughtitems[d].item+" Item Quantity: "+boughtitems[d].count+"  ";
        
    }
   
    window.location.href="mailto:gada@gmail.com?cc=ahmed@gmail.com&bcc=amr@gmail.com&subject=welcome&body= "+htmlitem+"";
  }


  function totalPrice(){
    prices=document.getElementsByClassName("prices");
    quantity=document.getElementsByClassName("quantity");
    for (let i = 0; i < quantity.length; i++) {
     
     totalprice += (+quantity[i].value) * (+prices[i].innerText);
    }
    total.value = totalprice;            // display of the value  total=5000$
  
    return totalprice;
  }




  /**
   *    if ((+quantity[i].value) >= (+quantity[i].max)) {
            alert("quantity has been over inventory")
        }
   */