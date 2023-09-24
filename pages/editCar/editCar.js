import {SERVER_URL} from "../../settings.js"
import {makeOptions} from "../../utils.js"


export function initEditCar(){
  
  document.getElementById("editCar_id").addEventListener("click",findEditCar);
  document.getElementById("add_car_sbt").addEventListener("click", editCar)

}
  async function findEditCar(){

    alert("clicked")
    
    const id = document.getElementById("edit_id").value;

    try{
    const car = await fetch(SERVER_URL + "/" + id)
    .then(res => {
      if(!res.ok){
        throw new Error("car not found")
      }
      return res.json()
    })

    console.log(car);

    document.getElementById("edit_brand").value = car.brand;
    document.getElementById("edit_model").value = car.model;
    document.getElementById("edit_price_pr_day").value = car.pricePrDay
    document.getElementById("edit_best_discount").value = car.bestDiscount;

    //document.getElementById("result").innerText = JSON.stringify(car, null, 2)
  }catch(e){
    document.getElementById("error").innerText = e.message;
  }
  }

  async function editCar(){

    const edit_id = document.getElementById("edit_id").value

    const newCar_brand = document.getElementById("edit_brand").value;
    const newCar_model= document.getElementById("edit_model").value;
    const newCar_pricePrDay = document.getElementById("edit_price_pr_day").value;
    const newCar_bestDiscount = document.getElementById("edit_best_discount").value;
  
   
    const updatedCar = {
      brand : newCar_brand,
      model : newCar_model,
      pricePrDay : newCar_pricePrDay,
      bestDiscount :newCar_bestDiscount
    }
  
   const options = makeOptions("PUT",updatedCar)
   try {
    const response = await fetch(SERVER_URL + "/" + edit_id, options);

    if (!response.ok) {
      throw new Error("Failed to update car");
    }

    const updatedCarData = await response.json();
    console.log(updatedCarData);
    
  } catch (e) {
    document.getElementById("error").innerText = e.message;
  }
  }