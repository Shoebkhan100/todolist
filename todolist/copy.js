let addemployee = document.getElementById("addemployee")
let details = document.querySelector(".details")

addemployee.onclick= function(){
 details.classList.add("details1");
};


let cancel = document.querySelector("#cancel")

cancel.onclick= function (e){
    details.classList.remove("details1")
    e.preventDefault();
}

let userdata= [];
let profile = document.querySelector("#imginp")
let name1 = document.querySelector("#name")
let surname = document.querySelector("#surname")
let age = document.querySelector("#age")
let unique = document.querySelector("#unique")

let submit = document.querySelector("#submit")

submit.addEventListener("click",function(e){

    e.preventDefault();
   
    submit.onclick= function(){
        userdata.push({
            Profile : profile.value,
            Name : name1.value  ,
            Surname : surname.value ,
            Age :   age.value,
           Unique  :    unique.value


            

        });


        inertdata()
     
       

       let stringdata =  JSON.stringify(userdata)

       localStorage.setItem("userdata", stringdata)

       
       userdata =   JSON.parse(localStorage.getItem("userdata"))

      const form = document.querySelector("#form")

       form.reset("")

        
       
       
        details.classList.remove("details1")
    
    } 
   
   
});

let cleardata = document.querySelector("#cleardata" ).addEventListener("click", function (){
    let td = document.querySelector("tbody")
  td.remove();
})
let trr = document.getElementsByClassName("trrr")
let tabledata = document.querySelector("tbody")


let inertdata = ()=>{

    let shoeb = ""
    userdata.map((data,)=>{
        tabledata.innerHTML = shoeb += 
 ` <tr class="tr" >
   
    <td><img src="${data.Profile}" alt=""></td>
    <td>${data.Name}</td>
    <td>${data.Surname}</td>
    <td>${data.Age}</td>
    <td>${data.Unique}</td>
    <td><button id="edit" onclick="edit()" >Edit</button><button id="trash" onclick="trash()">Delete</button></td>
</tr>`

console.log(data)




    })
}
let tr= document.querySelector(".tr")

let trash = ()=>{

    
   
    
}

let img = document.querySelector(".image")


let filereader = new FileReader()

filereader.onchange = function (e){

    let s = e.target.result

    img.src = s

}
//  filereader.readAsDataURL(this.file[0])


 setTimeout(()=>{
  console.log("hi")
 }, 3000);
 console.log("hello")


 let fara = []

 let arr = "2"
 let arr2 = parseInt(arr)
 console.log(arr2)

 let faro = document.querySelector("#faro")
 let save = document.querySelector("#save")


 save.onclick = function (){
    let faru = faro.value
    let par = parseInt(fara.push(faru)) 
    
    
    console.log(fara)
 }
 
