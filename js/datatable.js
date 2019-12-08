
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
    </li>';
        ul = document.getElementById('appendthis');

        ul.innerHTML +=ht;
}

var products = JSON.parse(localStorage.getItem("Products"));
    prodiv = document.getElementById("product");
    for (let i = 0; i < products.length; i++) {
      html = '<tr><td>' + products[i].Name + '</td><td>' + products[i].Price + '</td><td>' + products[i].Count + '</td></tr>';
      prodiv.innerHTML += html;
    }
    $(document).ready(function () {
      $("#dataTables").dataTable();
    });