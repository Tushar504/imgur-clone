const funct=()=>{
    document.querySelector("#debounce").style.visibility="hidden"
}
const getData=async()=>{
document.querySelector("#debounce").innerHTML=""
let movie=document.querySelector("#Input").value
let res=await fetch (`https://www.omdbapi.com/?apikey=980a451c&s=${movie}`)
let data=await res.json()
if(data){
document.querySelector("#debounce").style.visibility="visible"
}
mapData(data.Search)
}

const homePageData=async()=>{
let res=await fetch (`https://www.omdbapi.com/?apikey=980a451c&s=avengers`)
let data=await res.json()
console.log(data)
data.Search.map((e)=>{
   var div=document.createElement("div")
    div.setAttribute("class","singleDiv")
   let img=document.createElement("img")
   img.src=e.Poster
   let h1=document.createElement("h1")
   h1.textContent=e.Title

   div.append(img,h1)
   document.querySelector("#moviesData").append(div)
})
}
homePageData()

const upData=async()=>{
let res=await fetch (`https://www.omdbapi.com/?apikey=980a451c&s=fast`)
let data=await res.json()
data.Search.map((e)=>{
   var div=document.createElement("div")
   div.setAttribute("class","Divs")
   let img=document.createElement("img")
   img.src=e.Poster
   let h1=document.createElement("p")
   h1.textContent=e.Title

   div.append(img,h1)
   document.querySelector("#Data").append(div)
})
}
upData()
const mapData=(data)=>{
data.map((e)=>{
    var p=document.createElement("p")
    p.textContent=e.Title

    document.querySelector("#debounce").append(p)
})

}

let id;
function debounce(func,delay){

if(id){
clearTimeout(id);
document.querySelector("#debounce").style.visibility="hidden"
}

id=setTimeout(function(){
func();

},delay)



}