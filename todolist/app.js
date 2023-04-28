let addemployee = document.getElementById("addemployee").addEventListener("click", visible)
let details   =document.getElementById("details")
function visible (){
   details.classList.add("details1")
}


let cancel = document.getElementById("cancel").addEventListener("click", invisible)

function invisible (e){
    e.preventDefault()
    details.classList.remove("details1")
    clearinput ()
    let submit = document.getElementById("submit").textContent = "Submit"
}

// data submition 



let data = JSON.parse(localStorage.getItem("crud"))||[]

// let imginp1 = document.getElementById("imginp")
let name1 = document.getElementById("name")
let surname1 = document.getElementById("surname")
let age1 = document.getElementById("age")
let unique1 = document.getElementById("unique")


let indexid = null
let submit = document.getElementById("submit").addEventListener("click" , datasubmit)

function datasubmit(e){
    

    let submit = document.getElementById("submit").textContent = "Submit"
   
    e.preventDefault();

    // very imprtant part in this whole application 
// jab tak ke indexid null nahi hai tab tak data add karo aur agar indexid match hogayi tab edit karo
    if (indexid!=null){
    // edit
    // data.splice(indexid,1, {name : name1.value,
    //     surname : surname1.value,                    
    //     age : age1.value,
    //     unique : unique1.value})
                 /// both are correct method for edit update in crud opretion 

    data [indexid] =  {name : name1.value,
        surname : surname1.value,
        age : age1.value,
        unique : unique1.value}


        indexid = null
        
        
    }
    
    else{
       
    data.push({
      
    
        name : name1.value,
        surname : surname1.value,
        age : age1.value,
        unique : unique1.value,
        
        
        
       
    })
}
    display ()
    localStorage.setItem("crud" ,JSON.stringify(data))
    invisible (e)
    console.log(data)
    
}




let tbody = document.querySelector("tbody")
function display (){
    tbody.innerHTML = ""
    data.forEach((element , index)=>{

        let {image , name, surname , age , unique } = element

        tbody.innerHTML += 
     `<tr class="tr" id="${index}">
   
    
     <td>${name}</td>
     <td>${surname}</td>
     <td>${age}</td>
     <td>${unique}</td>
     <td><button id="edit" onclick="editdata(${index})" >Edit</button>
     <button id="trash" onclick="trashdata(${index})">delete</button></td>
 </tr>`
 
    })
    clearinput ()
   
}

function clearinput (){
    // imginp1.valuetr=""
    name1.value   = ""
    surname1.value = ""
    age1.value  = ""
    unique1.value = ""
}


function trashdata (index){
    let tr = document.getElementById(index)
    tr.remove()
    
    data.splice(index,1)
  
    localStorage.setItem("crud" ,JSON.stringify(data))
    console.log(data.id)

} 


function editdata (index){

    console.log(index)
    let tr = document.getElementById(index)
  
   
//    imginp1.value   = tr.children[0].innerHTML
   name1.value     = tr.children[0].innerHTML
   surname1.value  = tr.children[1].innerHTML
   age1.value      = tr.children[2].innerHTML
  unique1.value    = tr.children[3].innerHTML
  visible ()
  let submit = document.getElementById("submit").textContent = "Update" ;
    indexid = index
 

 
//  tr.remove()
//  data.splice(index,1)
 localStorage.setItem("crud" ,JSON.stringify(data))

}

display ()

let cleardata = document.getElementById("cleardata").addEventListener("click" , ()=>{
    data = []
    localStorage.setItem("crud" ,JSON.stringify(data))
    display ()
})