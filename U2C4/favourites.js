// write js code here corresponding to favourites.html

var fav=JSON.parse(localStorage.getItem("favourites"))

display(fav)

function display(favorite)
{
    fav.forEach(function(elem,index){
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
        td6.innerText="Delete"
        td6.style.color="red"
        td6.style.cursor="pointer"
        td6.addEventListener("click",function()
        {
           fav.splice(index,1)
           localStorage.setItem("favourites",JSON.stringify(fav))
           window.location.reload()
        })

        tr.append(td1,td2,td3,td4,td5,td6)

        var z=document.querySelector("tbody")
        z.append(tr)
    })
}



