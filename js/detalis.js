
  window.addEventListener("load", doitfirst);

  function doitfirst() {
    // if(sessionStorage.getItem("LoginUser") == ""){  window.location.href = "login.html";}
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

  
    itemOne = JSON.parse(sessionStorage.getItem('details')); // []
    products = JSON.parse(localStorage.getItem('Products'));// [{}]
  
    row = document.getElementsByClassName("row")[0];
    count = 1;
    for (let i = 0; i < itemOne.length; i++) {
  
      for (let j = 0; j < products.length; j++) {
       
        if (itemOne[i] == j) {
         
          html = "<tr>\
            <div class='col-md-6'>\
            <div class='buyitem-img'> <img style='width:100%;' src='images/"+products[j].Url+"' alt=''></div><br />\
            </div>\
            <div class='col-md-6'>\
            <h2>PRODUCT SPECIFICATIONS </h2><br>\
            <h4>Name :  "+products[j].Name+"</h4><br>\
            <h4>Price :  "+products[j].Price+"</h4><br>\
            <p>description :  "+products[j].Description+"</p><br/>\
            <button id='"+j+"' class='btn btn-primary shop-item-button ml-2 item' type='button'>ADD TO CART</button> \
             <a href='store.html' class='btn btn-primary'>Back To Store</a> \
            </div>\
            ";

            row.innerHTML += html;

        }

      }
    

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
   



  

    


  }

