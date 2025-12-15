const axios = require("axios");
//1. Working with Promises

const event = new Promise((resolve, reject) =>{
    let success = false;
    if(success)
        resolve(success);
    else
        reject('failed');
});

event.then((success) =>
{
    console.log(success);
}).catch((msg) => {
    console.log(msg);
}).finally(() => console.log("Promised executed"));

// 2. Working with Promise with real API endpont using Axios

const datas = axios.get("https://cat-fact.herokuapp.com/facts");
datas.then((res) => {
    console.log(res.data);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("Promised executed.");
})

// 3. Using Async Await. Async only apply in function .So we need to create a function
const asyncFunction = async () => {
    try
    {
        const datum = await axios.get("https://cat-fact.herokuapp.com/facts");
        console.log(datum);
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log('Async completed');
    }    
}

asyncFunction();
