import {SERVER_URL} from "../../settings.js"
import {makeOptions} from "../../utils.js"

export function initaddCar(){
  document.getElementById("add_car_sbt").addEventListener("click",addCar);
}


async function addCar(){

  const newCar_brand = document.getElementById("add_brand").value;
  const newCar_model= document.getElementById("add_model").value;
  const newCar_pricePrDay = document.getElementById("add_price_pr_day").value;
  const newCar_bestDiscount = document.getElementById("add_best_discount" ).value;

  //Get Cars from form
  const car = {
    brand : newCar_brand,
    model : newCar_model,
    pricePrDay : newCar_pricePrDay,
    bestDiscount :newCar_bestDiscount
  }

 const options = makeOptions("POST",car)

 const newCar = await fetch(SERVER_URL,options)
  .then(res=>res.json())
  console.log(newCar)
}


