let yourArray = [
    {firstName: "Jana", secondName: "Nová", eyes: "Blue" },
    {whatever: "Something", something: "Whatever", anynumber: 5, anyletters: "abc"},
    {anotherCard: "Whatever"},
]


let myArray = yourArray

const app=(array)=>{
   document.querySelector("body").innerHTML = ""

    array.map((eachObject, index) => { 

        let myDiv = document.createElement("div")
        myDiv.id = index  
        document.querySelector("body").append(myDiv)

        for(const key in eachObject){  
        
            let keys = (`${key}: ${eachObject[key]}`)
        
            let h2 = document.createElement("h2")
            h2.innerHTML = keys
            document.getElementById(index).append(h2)                  
        } 
   
        let btn = document.createElement("button")
        btn.textContent = "Erase"
        document.getElementById(index).append(btn)    
        btn.addEventListener("click", ()=> erase(index)) 
})
}

const erase = (p)=>{
    myArray.splice(p, 1)
    app(myArray)
}

window.addEventListener("load", ()=>{
    app(myArray)
})



