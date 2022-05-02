// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("form").addEventListener("submit",myfunction)

var data=JSON.parse(localStorage.getItem("schedule")) || []
function myfunction()
{
    var obj={
        matchno: document.querySelector("#matchNum").value,
        teama : document.querySelector("#teamA").value,
        teamb : document.querySelector("#teamB").value,
        date : document.querySelector("#date").value,
        venue : document.querySelector("#venue").value
    }
    data.push(obj)
    localStorage.setItem("schedule",JSON.stringify(data))
   
}