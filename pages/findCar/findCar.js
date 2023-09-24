
import {SERVER_URL} from "../../settings.js"


export function initFindCar(){
  document.getElementById("result").innerHTML=""
  document.getElementById("btn").addEventListener("click",findCar);

}
  async function findCar(){

    alert("clicked")
    document.getElementById("error").innerHTML=""
    const id = document.getElementById("carId").value;

    try{
    const car = await fetch(SERVER_URL + "/" + id)
    .then(res => {
      if(!res.ok){
        throw new Error("car not found")
      }
      return res.json()
    })

    document.getElementById("result").innerText = JSON.stringify(car, null, 2)
  }catch(e){
    document.getElementById("error").innerText = e.message;
  }
  }




