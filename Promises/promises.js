const moneyPromise = new Promise( (resolve, reject) => {

    setTimeout( () => {
        const moneyGiven = true;
        if(moneyGiven){
            return resolve("Money Ruturned")
        }else {
            return reject("Money not Returned")
        }
    } , 3000 )

} )

console.log("first")

async function callPromise(){
    try{
        const result = await moneyPromise;
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
callPromise()
console.log("second")

// -----Background Data-----
console.log("")
console.log("---Background Data---")

function getUsersData(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(data => data.json())
    .then((result) => console.log(result, "fetch using the Promise"))
    .catch(err => console.log(err))
}

getUsersData()

async function getTodosData(){
    const result = await fetch("https://jsonplaceholder.typicode.com/todos")
    console.log(await result.json())
}
let singlePersonTodo;
getTodosData()

async function getSingleTodo (){
    const id = document.getElementById("singleTodo").value
    const result = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const single = await result.json()
    console.log(single)
    document.getElementById("title").innerHTML = single.title
}
