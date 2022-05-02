// write js code here corresponding to matches.html


var y=JSON.parse(localStorage.getItem("schedule"))
display(y)

function filterbycity()
{
    var m=document.querySelector("#filterVenue").value
    var t=y.filter(function(elem){
        return elem.venue==m
    })
    display(t)
}


var fav=JSON.parse(localStorage.getItem("favourites")) || []
function display(y)
{
    var s=document.querySelector("tbody").innerHTML=""
    y.forEach(function(elem){
        
        var tr=document.createElement("tr")

        var td1=document.createElement("td")
        td1.innerText=elem.matchno

        var td2=document.createElement("td")
        td2.innerText=elem.teama

        var td3=document.createElement("td")
        td3.innerText=elem.teamb

        var td4=document.createElement("td")
        td4.innerText=elem.date

        var td5=document.createElement("td")
        td5.innerText=elem.venue

        var td6=document.createElement("td")
        td6.innerText="Add to Favorite"
        td6.style.color="green"
        td6.style.cursor="pointer"
        td6.addEventListener("click",function()
        {
           fav.push(elem)
           localStorage.setItem("favourites",JSON.stringify(fav))
        })

        tr.append(td1,td2,td3,td4,td5,td6)

        var z=document.querySelector("tbody")
        z.append(tr)
    })
}
