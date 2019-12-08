window.addEventListener("load",doitfirst);

function doitfirst() {
    
    

    var products = [];

    products.push( new CreateProducts(1,"iPhone XR" , 4000, 'IPHONEX.jpg',3,"The Apple iPhone XR redefines innovation. Its powerful hardware configuration features the advanced A12 Bionic chip that paves the way for the fast and efficient functioning of the system. In addition to it, the high-performance Neural engine gives you a reason to launch multiple applications at a go and experience multitasking at its finest. What adds further to the delight of .."));

    products.push( new CreateProducts(2,"Samsung" , 5000, 'huawei.jpg',4,"With the Samsung Galaxy Note 10 Plus Dual-SIM smartphone, living the digital world becomes easy. It has a sleek design with a beautiful silver color that looks rich. The Samsung smartphone features an Octa-Core processor that ensures smooth functioning of the apps. Similarly, the 12GB RAM of this smartphone allows the use of multiple apps seamlessly. Thanks to the massive 256GB ..."));

    products.push( new CreateProducts(3,"Lenovo" , 8000, 'labtop.jpg',3,"Lenovo / Intel Core i3-7020U Processor / 3M Cache 2.30 GHz / Number of Cores: 2 / Number of Threads: 4 / Processor Base Frequency: 2.30 GHz / Memory capacity: 4 GB / Type: HDD /  Capacity: 1000 GB"));

    products.push( new CreateProducts(4,"Lenovo" , 10000, 'laptop_1388-67.jpg',3,"Lenovo / Intel Core i3-7020U Processor / 3M Cache 2.30 GHz / Number of Cores: 2 / Number of Threads: 4 / Processor Base Frequency: 2.30 GHz / Memory capacity: 4 GB / Type: HDD /  Capacity: 1000 GB"));

    products.push( new CreateProducts(5, "iPhone 7 Plus" , 10400, 'item_XL_11526670_16351542.jpg',3,"The elegant and sleek iPhone 7 Plus from Apple is a stylish way to stay connected on the go. Shortly after its release, this firecracker of a phone has been the object of desire for many. Sporting a golden finish, the iPhone 7 Plus is quite a looker. Boasting a 5.5inch LED backlit widescreen display with IPS technology, the iPhone 7 Plus offers an enhanced viewing and gaming ..."));
    products.push( new CreateProducts(6, "note 10" , 15000, 'note10.jpeg',2, "The revolutionary note 10 Find X is designed to meet and exceed your expectations of a modern-day smartphone. It offers a powerful and consistent performance with the help of Qualcomm Snapdragon 845 processor and 8GB RAM. This smartphone with 8GB RAM loads apps and even the high-end games quickly. The Adreno 630 GPU provides rich graphics that brings gaming characters to life. The ColorOS ..."));
   
    products.push( new CreateProducts(7,"iPhone XR" , 4000, 'IPHONEX.jpg',3,"The Apple iPhone XR redefines innovation. Its powerful hardware configuration features the advanced A12 Bionic chip that paves the way for the fast and efficient functioning of the system. In addition to it, the high-performance Neural engine gives you a reason to launch multiple applications at a go and experience multitasking at its finest. What adds further to the delight of .."));

    products.push( new CreateProducts(8,"Samsung" , 5000, 'huawei.jpg',4,"With the Samsung Galaxy Note 10 Plus Dual-SIM smartphone, living the digital world becomes easy. It has a sleek design with a beautiful silver color that looks rich. The Samsung smartphone features an Octa-Core processor that ensures smooth functioning of the apps. Similarly, the 12GB RAM of this smartphone allows the use of multiple apps seamlessly. Thanks to the massive 256GB ..."));

    products.push( new CreateProducts(9,"Lenovo" , 8000, 'labtop.jpg',3,"Lenovo / Intel Core i3-7020U Processor / 3M Cache 2.30 GHz / Number of Cores: 2 / Number of Threads: 4 / Processor Base Frequency: 2.30 GHz / Memory capacity: 4 GB / Type: HDD /  Capacity: 1000 GB"));

    products.push( new CreateProducts(10,"Lenovo" , 10000, 'laptop_1388-67.jpg',3,"Lenovo / Intel Core i3-7020U Processor / 3M Cache 2.30 GHz / Number of Cores: 2 / Number of Threads: 4 / Processor Base Frequency: 2.30 GHz / Memory capacity: 4 GB / Type: HDD /  Capacity: 1000 GB"));

    products.push( new CreateProducts(11, "iPhone 7 Plus" , 10400, 'item_XL_11526670_16351542.jpg',3,"The elegant and sleek iPhone 7 Plus from Apple is a stylish way to stay connected on the go. Shortly after its release, this firecracker of a phone has been the object of desire for many. Sporting a golden finish, the iPhone 7 Plus is quite a looker. Boasting a 5.5inch LED backlit widescreen display with IPS technology, the iPhone 7 Plus offers an enhanced viewing and gaming ..."));
    products.push( new CreateProducts(12, "note 10" , 15000, 'note10.jpeg',2, "The revolutionary note 10 Find X is designed to meet and exceed your expectations of a modern-day smartphone. It offers a powerful and consistent performance with the help of Qualcomm Snapdragon 845 processor and 8GB RAM. This smartphone with 8GB RAM loads apps and even the high-end games quickly. The Adreno 630 GPU provides rich graphics that brings gaming characters to life. The ColorOS ..."));
    products.push( new CreateProducts(13,"iPhone XR" , 4000, 'IPHONEX.jpg',3,"The Apple iPhone XR redefines innovation. Its powerful hardware configuration features the advanced A12 Bionic chip that paves the way for the fast and efficient functioning of the system. In addition to it, the high-performance Neural engine gives you a reason to launch multiple applications at a go and experience multitasking at its finest. What adds further to the delight of .."));

    products.push( new CreateProducts(14,"Samsung" , 5000, 'huawei.jpg',4,"With the Samsung Galaxy Note 10 Plus Dual-SIM smartphone, living the digital world becomes easy. It has a sleek design with a beautiful silver color that looks rich. The Samsung smartphone features an Octa-Core processor that ensures smooth functioning of the apps. Similarly, the 12GB RAM of this smartphone allows the use of multiple apps seamlessly. Thanks to the massive 256GB ..."));

    products.push( new CreateProducts(15,"Lenovo" , 8000, 'labtop.jpg',3,"Lenovo / Intel Core i3-7020U Processor / 3M Cache 2.30 GHz / Number of Cores: 2 / Number of Threads: 4 / Processor Base Frequency: 2.30 GHz / Memory capacity: 4 GB / Type: HDD /  Capacity: 1000 GB"));

    products.push( new CreateProducts(16,"Lenovo" , 10000, 'laptop_1388-67.jpg',3,"Lenovo / Intel Core i3-7020U Processor / 3M Cache 2.30 GHz / Number of Cores: 2 / Number of Threads: 4 / Processor Base Frequency: 2.30 GHz / Memory capacity: 4 GB / Type: HDD /  Capacity: 1000 GB"));

    products.push( new CreateProducts(17, "iPhone 7 Plus" , 10400, 'item_XL_11526670_16351542.jpg',3,"The elegant and sleek iPhone 7 Plus from Apple is a stylish way to stay connected on the go. Shortly after its release, this firecracker of a phone has been the object of desire for many. Sporting a golden finish, the iPhone 7 Plus is quite a looker. Boasting a 5.5inch LED backlit widescreen display with IPS technology, the iPhone 7 Plus offers an enhanced viewing and gaming ..."));
    products.push( new CreateProducts(18, "note 10" , 15000, 'note10.jpeg',2, "The revolutionary note 10 Find X is designed to meet and exceed your expectations of a modern-day smartphone. It offers a powerful and consistent performance with the help of Qualcomm Snapdragon 845 processor and 8GB RAM. This smartphone with 8GB RAM loads apps and even the high-end games quickly. The Adreno 630 GPU provides rich graphics that brings gaming characters to life. The ColorOS ..."));
    
    // if (localStorage.getItem("Products") == null) {
    //     localStorage.setItem("Products", "[]");
    // }
    // var old = JSON.parse(localStorage.getItem("Products"))
    // // user = new User( username.val(),email.val(),parseInt(phone.val()),parseInt(pwd.val()) );
    // // console.log(user);
    // // old.push(user);
    // products = old.concat(JSON.parse(window.localStorage.getItem("Products") || '[]'));
    
    localStorage.setItem("Products", JSON.stringify(products));
    


}

function CreateProducts(_id,name, price,url,count,description) {
    this.ID = _id;
    this.Name = name;
    this.Price = price;
    this.Url = url;
    this.Count = count;
    this.Description = description;
    
  

}







