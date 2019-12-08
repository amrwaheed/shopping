$(function(){
    
    function User(_Name, _email, _phone,_password) {

        this.Name = _Name;
        this.Email = _email;
        this.Phone = _phone;
        this.Password = _password;
        // var Password; // private 

        // // set function Password
        // this.setPassword = function (_value) {
        //     Password = _value;
        // }
        // // get function Password
        // this.getPassword = function () {
        //     return Password;
        // }

    }

  


    $("#regForm").on("submit",function (e){
             e.preventDefault();
            var status = false;
            var username = $("#username");  
            var email = $("#email");
            var pwd = $("#pwd");
            var phone = $("#phone");
            var users = [];
            
            //full name
            var patternusername = /^[a-zA-Z0-9_-]{5,30}$/;
        if (!(patternusername.test(username.val())) ) {
            username.addClass("border-danger");
            $("#usernameHelp").html("<span class='text-denger'> Username Must be more than 5 letters and less than 30 letters </span>");
            status=false;
            username.focus();
            return false;
        }else{
            username.removeClass("border-danger");
            $("#usernameHelp").html("");
            status=true;
        }
        //email
        var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!(pattern.test(email.val())) ) {
            
            email.addClass("border-danger");
            $("#emailHelp").html("<span class='text-denger'> Please enter Valid  email </span>");
            
            status=false;
            email.focus();
            return false;
        }else{
            if (localStorage.getItem("Users") == null) {
                localStorage.setItem("Users", "[]");
            }
            
            // var allusers = JSON.parse(localStorage.getItem("Users"));
           var flagExist = JSON.parse(localStorage.getItem("Users")).some(function(arr ){
               return  arr.Email == $("#email").val();
        
            })

            // console.log(tf);
            if(flagExist == true ){
                email.addClass("border-danger");
                $("#emailHelp").html("<span class='text-denger'> Can not register this Email Please Register by another One</span>");
                
                status=false;
                email.focus();
                return false;
            }else{
                email.removeClass("border-danger");
                $("#emailHelp").html("");
                status=true;
            }
            
        }
        var patternPass = /^[a-zA-Z0-9_-]{5,15}$/; // /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;
        //pwd
        if (!(patternPass.test(pwd.val()))) {
            pwd.addClass("border-danger");
            $("#pwdHelp").html("<span class='text-denger'> Please enter password Include digits or letters min 5 max 15 </span>");
            
            status=false;
            pwd.focus();
            return false;
        }else{
                pwd.removeClass("border-danger");
                $("#pwdHelp").html("");
                status=true;
        }
        
        //phone
        var filterphone = /^[0-9-+]+$/;
        if (!(filterphone.test(phone.val()))  ) {
            phone.addClass("border-danger");
            $("#phoneHelp").html("<span class='text-denger'> Please Enter Your Phone Number</span>");
            
            status=false;
            phone.focus();
            return false;
        }else{
            phone.removeClass("border-danger");
            $("#phoneHelp").html("");
            status=true;
        }


        if (status == true) {

            var old = JSON.parse(localStorage.getItem("Users"));
            user = new User( username.val(),email.val(),parseInt(phone.val()),parseInt(pwd.val()) );
            
            old.push(user);
            users = old.concat(JSON.parse(window.localStorage.getItem("users") || '[]'));

            localStorage.setItem("Users", JSON.stringify(old));
            window.location.href = "login.html";
        }
           
           


       
           
        // $('#regForm').submit(); 
    //     var users = [];
    // function addUsers() {
    //     var data = location.search.substring(1);//"?USerNAme=nadia&pass=1234"
    //     var splittedData = data.split("&");//["userNAme=nadia","pass=1234"]
    //     var arr = [];
    //     for (var i = 0; i < splittedData.length; i++) {
    //         arr.push(splittedData[i].split("=")[1]); // push  value of second element array 
            
    //     }
    //     console.log(arr);
    //     if (localStorage.getItem("Users") === null) {
    //         localStorage.setItem("Users", "[]");
    //     }
    //     var old = JSON.parse(localStorage.getItem("Users"))

    //     user = new User();

    //     user.Name = arr[0];
    //     // var CorrectEmail =arr[1].replace("%","@") ;
    //     user.Email =decodeURIComponent(arr[1]);
    //    console.log( user.Email);
    //     user.Password = parseInt(arr[2]);
    //     user.Phone = parseInt(arr[3]);
       
    //     console.log("from func", user.Password);                           /// user => object 
    //     console.log("from func", user);                           /// user => object 

    //     old.push(user);
       
    //     // users = old.concat(JSON.parse(window.localStorage.getItem("users") || '[]'));

    //     localStorage.setItem("Users", JSON.stringify(old));
    //     // window.location
    //     window.location.href = "login.html";

    // }

    // addUsers();
    // console.log(localStorage);
     
      
    });





    


    




})