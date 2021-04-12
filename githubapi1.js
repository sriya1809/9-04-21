const { table } = require("node:console");
XMLHttpRequest=require("xmlhttprequest").XMLHttpRequest;
function fetchRepository()
{
const request=new XMLHttpRequest();
uname=document.getElementById("uname").value;
url=`https://api.github.com/users/${uname}/repos`;
request.open("GET",url,true);
request.send();
request.onload=()=>{

         var res=JSON.parse(request.responseText);
        console.log(res);
        var table=document.createElement("table");
        table.border="1";
        row=table.insertRow(-1);
        cell1=row.insertCell(-1);
        cell2=row.insertCell(-1);
        cell3=row.insertCell(-1);
        cell1.innerHTML="S.no";
        cell2.innerHTML="Repository";
        cell3.innerHTML="Description";
       var i=1;
        res.forEach(rep=>{
        row=table.insertRow(-1);
        cell1=row.insertCell(-1);
        cell2=row.insertCell(-1);
        cell3=row.insertCell(-1);
        cell1.innerHTML=i++;
        cell2.innerHTML=rep.name;
        cell3.innerHTML=rep.description;
       
        })
         document.body.appendChild(table);
      
}
}