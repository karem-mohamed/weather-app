
document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault()
    var vall=document.getElementById("licationinput").value
    if(vall){
        console.log(vall)
        getdata(vall)
    
    }else{
        console.log("please enter location")
        
    }

})

// document.getElementById("licationinput").addEventListener("change",(e)=>{
//     console.log(e.target.value)
// })
// let colors=["red","blue","green","black"];
// style='color:${colors[Object.keys(res).indexOf(key)]}'

function getdata(town){
    // fetch(`http://localhost:3000/weather?address=${town}`).then(res=>{
    fetch(`/weather?address=${town}`).then(res=>{        
        res.json().then((res)=>{
            if(res.error){
                console.log(res.error)
            }else{
                let text="";
                for ([key,val] of Object.entries(res)){
                    text +=`<p>${key} : ${val}</p>`
                    console.log(Object.entries(res).indexOf(key))
                }
                document.getElementById("info").innerHTML=text
                console.log(res.forcast)
                console.log(res.location)
                console.log(res.address)
            }
            
            
        })
    })
}