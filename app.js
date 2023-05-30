'use strict';


let x=1001
let id=0
function idfood(id){
    id=x;
    x+=1;
    return id
}

//constructor

function Restaurant(name,type,price,){

  this.foodId=idfood(id)
  this.foodName=name
  this.foodType=type
  this.foodprice=price
  
}
  
Restaurant.prototype.render=function(){
    let tb=document.getElementById("tbody")
    let tr =document.createElement("tr")

    

    let td1=document.createElement("td")
    td1.textContent= this.foodId
    tr.appendChild(td1)

    let td2=document.createElement("td")
    td2.textContent= this.foodName
    tr.appendChild(td2)

    let td3=document.createElement("td")
    td3.textContent= this.foodType
    tr.appendChild(td3)

    let td4=document.createElement("td")
    td4.textContent= this.foodprice
    tr.appendChild(td4)

    tb.appendChild(tr)

}




  let saveValues= document.getElementById("save")

    saveValues.addEventListener("submit", function(e){
        e.preventDefault();
        let food = new Restaurant (
            
            document.getElementById('fname').value,
            document.getElementById('ftype').value,
            document.getElementById('fprice').value,
 
        )

            food.render()


    })
