const button=document.getElementById("search-button")
const input=document.getElementById('city-input')

const cityName=document.getElementById('city-name')
const cityTime=document.getElementById('city-time')
const cityTemp=document.getElementById('city-temp')

//Bcoz data ek network se aa rha api calling me so wo instantly to nahi aa raha so use asynchronous javascript use promises
async function getData(cityName){
    const promise=await fetch(`http://api.weatherapi.com/v1/current.json?key=5eeb039e4b82464fab0130228251502&q=${cityName}&aqi=yes`); //Yaha URL me london ko dynamically insert karne ke liye we will use string interpolation so use ` ` (tilde)

    return await promise.json();//Json me parse karna aur ye bhi promise me return kar raha 
 
}

button.addEventListener("click",async()=>{
        // console.log(input.value);//GET KARNA JO BHI USER NE VALUE INPUT KI
        const value=input.value;
        const result=await getData(value);
        // console.log(result);
        cityName.innerText=`${result.location.name}, ${result.location.region}-${result.location.country}`
        cityTime.innerText=result.location.localtime;
        cityTemp.innerText=result.current.temp_c;
});
