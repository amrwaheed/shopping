 
    function CreateNewContact(name, number ,Email,sunject) {
      
        this.Name = name;
        this.number = number;
        this.Email = Email;
        this.sunject = sunject;
      
        
      
    
    }
    
    window.addEventListener('load',function(){
        
        userarea=document.getElementById('area');   
        username=document.getElementById('uname');        
        usernameerror=document.getElementById('unameerror')
              
          username.addEventListener('blur',function(){
              if(!isunamevaild())
                  {
                      username.select();
                      usernameerror.style.display="block";
                      username.classList.add("is-invalid");
                  }
              
              else
                  {
                  usernameerror.style.display="none";
                  username.classList.remove("is-invalid")
                  username.classList.add("is-valid")    
                  }
       });    
              
              userphone=document.getElementById('uphone');
              userphoneerror=document.getElementById('uphoneerror')
              
              userphone.addEventListener('blur',function(){
                  if(!isuphonevalid())
                      {
                          userphone.select();
                          userphoneerror.style.display="block";
                          userphone.classList.add("is-invalid")
                      }
                  else {
                         userphoneerror.style.display="none";
                         userphone.classList.remove("is-invalid")
                         userphone.classList.add("is-valid")
                  }  
              });
              
              usermail=document.getElementById('umail');
              usermailerror=document.getElementById('umailerror');
              usermail.addEventListener('blur',function(){
                  if(!isumailvalid())
                      {
                          usermail.select();
                          usermailerror.style.display="block";
                          usermail.classList.add("is-invalid")
                      }
                  else {
                  usermailerror.style.display="none";
                  usermail.classList.remove("is-invalid");
                  usermail.classList.add("is-valid")
                  }
                  
              });
              
              
          // form submit
              document.forms[0].addEventListener('submit',function(e){
                  if(!(isunamevaild()&&isuphonevalid()&&isumailvalid()));
                  {e.preventDefault();}
                    if(!isunamevaild())
                  {
                      username.select();
                      usernameerror.style.display="block";
                      username.classList.add("is-invalid");
                  }
                  
                     if(!isuphonevalid())
                      {
                          userphone.select();
                          userphoneerror.style.display="block";
                          userphone.classList.add("is-invalid")
                      }
                  
                     if(!isumailvalid())
                      {
                          usermail.select();
                          usermailerror.style.display="block";
                          usermail.classList.add("is-invalid")
                      }
                  else
                  {
                    if (localStorage.getItem("contact") == null) {
                        localStorage.setItem("contact", "[]");
                    }
                    var old = JSON.parse(localStorage.getItem("contact"));
                    contact = new CreateNewContact( username.value,(+userphone.value),usermail.value,userarea.value );

                    old.push(contact);
                  
        
                    localStorage.setItem("contact", JSON.stringify(old));
                      alert("We Will Contact You As Soon As Possible");
                      username.value="";
                      userphone.value="";
                      usermail.value="";
                      userarea.value="";
                      
                  }
              
                  
                  
              }) //end of form submit
              
              document.forms[0].addEventListener('reset',function(e){
                  if (!confirm("Are You Sure"))
                  {
                      e.preventDefault();
                  }
                  
              })
              
              
              
              
              
              
              
           });   //end of load 
              
              
              
              
              
              
              
              function isunamevaild()
              {
                  var unamereg=/^[a-zA-z]{5,15}$/;
                  if(username.value.match(unamereg))
                      return true;
                  else return false;
              }
              
              function isuphonevalid()
              {
                  var uphonereg=/^(010|012)[0-9]{8}$/;
                  if (userphone.value.match(uphonereg))
                      return true 
                  else return false;
              }
              
              
              function isumailvalid()
              {
                  var umailreg=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
                  if(usermail.value.match(umailreg))
                      return true
                  else return false;
              }
          
      