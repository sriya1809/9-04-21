const { table } = require("node:console");
XMLHttpRequest=require("xmlhttprequest").XMLHttpRequest;
function fetchWeather(){
const request=new XMLHttpRequest();
city=document.getElementById("temp").value;
API='da2c2b04eefbebf1234c8c9ac3944ff7';
url=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API}`;
request.open("GET",url,true);
request.send();
request.onload=()=>{
    console.log(city);
          res=JSON.parse(request.responseText);
        console.log(res);
        var div=document.createElement("div");
        res.list.forEach(day=>{
            div.innerHTML="The temperature is "+day.main.temp;
        })
        document.body.appendChild(div);
}
}