var cart=[];

var Item = function (name, price, count)
{
    this.name = name;
    this.price = price;
    this.count = count;
};

// *************** adding items *************** 

function additem(name,price,count)
{
    //check name if exsisting
    for (var i in cart)
    {
        if(cart[i].name === name)
        {
            cart[i].count++;
            return;
        }
    }
    var item = new Item(name,price,count);
    cart.push(item);
    savecart();     //callback that save it in local storage to save any changes to the cart
}

additem("iphone",2000,1);
additem("pana",2000,2);
additem("iphone",2000,1);
additem("sam",2000,3);
additem("dad",1000,2);
additem("ertert",1030,4);
additem("jj",1500,5);
additem("xone",4000,2);
console.log(cart);

// *************** remove items *************** 
  
function removeitem (name)
{
    for(var i in cart)
    {
        if(cart[i].name === name)
        {
            cart[i].count--;
            if(cart[i].count === 0)  //check arival to no zero
            {
                cart.splice(i,1)
            }
            break;
        }
    }
    savecart();
}

// console.log(cart[0].count);
// removeitem("iphone");
// removeitem("iphone");
// console.log(cart[0].count);

// *************** remove all items *************** 
function removeall(name)
{
    for(var i in cart)
    {
        if(cart[i].name === name)
        {
            cart.splice(i,1)
            break;
        }
    }
    savecart();
}

// console.log(cart.length);
// console.log(cart);
// removeall("iphone");
// console.log(cart.length);
// console.log(cart);

// *************** totalitems in the cart *************** 
function totalitems()
{
    var total = 0;
    for(var i in cart)
    {
      total+= cart[i].count;
    }
    return total;
}

// console.log(totalitems());

// *************** totalitems cost of buying items *************** 
// function totalcost()
// {
//     var totalcost = 0;
//     for(var i in cart)
//     {
//       totalcost+= cart[i].price;
//     }
//     return totalcoust;
// }

// *************** copy object of the cart *************** 
function copy()
{
    var cartcopy = [];
    for (var i in cart)
    {
        var item = cart[i];
        var itemcopy = {};
        for (var p in item)
        {
            itemcopy[p] = item[p];
        }
        cartcopy.push(itemcopy);

    }
    return cartcopy;
}
console.log (copy());


// *************** remove every thing from cart *************** 

function clearcart()
{
    cart=[];
    savecart(); 
}


// *************** save local *************** 

function savecart()
{
    localStorage.setItem("itemdata",JSON.stringify(cart))
}

// localStorage.setItem("username","ghada");  //open application from browser

function loadcart()
{
    cart = JSON.parse(localStorage.getItem("itemdata")) ;
    // cart[0].name
}

loadcart();

//همسح كل الايتمز اللس دخلتها واتاكد انها اتخزنت فيه 

var arr = cartcopy();
// var items = loadcart();
// var objectn = savecart();
// for(var i = 0; i < items.length; i++)
// {
//     var object = jQuery.parseJSON(items[i]);

//     var displayItemId = object.itemId;
//     var displayItemName = object.itemName;

//     itemsHTML += "<li id="+displayItemId+">"+displayItemName+"</li>";
//   }

//   $("#viewItemList").html(itemsHTML); 
// }
