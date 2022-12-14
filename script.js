const baseUrl ="https://rickandmortyapi.com/api/character/"
const characterName =document.getElementsByClassName("character-name")
const cartList =document.getElementById("cart-list")


let dataObject =(obj)=>
{
   for(let i of obj["results"])
    {
        var row=`
        <div class="cart">
        <div class="cart-img">
            <img src=${i.image} alt="">
            <p>${i.species}</p>
        </div>
        <div class="cart-detail">
            <h6>Name:${i.name}</h6>
            <h6>Status:${i.status}</h6>
        </div>
    </div>`


    cartList.innerHTML+=row;
 
   
}}


const getAllData= async()=>
{

    try
    {
        const getData = await fetch(baseUrl)
        const jsonData =getData.json()
        jsonData.then(x => dataObject(x))
        
        
    }
    catch(e)
    {
    console.error("Error",e)
    }


}
getAllData()

//Get a single character

const getSingleCharacter =async(id)=>
{
    try{
        const query =`${baseUrl}${id}`
        const getData =await fetch(query)
        const jsonData =getData.json()
        jsonData.then(e=>console.log(e))
    
    }
    catch(e)
    {
        console.log("Error data",e)
    }

}
//getSingleCharacter(1)

//Get multiple characters
const getMultibleCharacter = async(start,end) => {

    const list =[]

    for ( let start in end )
    {
        list.push(start)
        start+=1
    }

    try{
        const query =`${baseUrl}${list}`
        const getData =await fetch(query)
        const jsonData =getData.json()
        jsonData.then(e=>console.log(e))

    }
    catch(e)
    {
        console.log("Error data",e)
    }
   
}

//getMultibleCharacter(1,1000)

//Filter characters name
 
const getFilterCharacter =async(characterName="",status="",species="")=>
{
    try{
        const query =`${baseUrl}?name=${characterName}&status=${status}&species=${species}`
        const getData =await fetch(query)
        const jsonData =getData.json()
        jsonData.then(e=>console.log(e))
    }
    
    catch(e)
    {
        console.log("Error data",e)
    }
}
getFilterCharacter(undefined,"Alive","Human")


//Get all locations

const getAllLocations =async()=>
{
    try{
        const query =`https://rickandmortyapi.com/api/location`
        const getData =await fetch(query)
        const jsonData =getData.json()
        jsonData.then(e=>console.log(e))
    
    }
    catch(e)
    {
        console.log("Error data",e)
    }
}
//getAllLocations()



