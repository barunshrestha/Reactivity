// Working with function

 
//1. Arrow function
    //normal function
    export default function doSomething(){

        //write a logi
    }
    //new version of javascript in React
    export const doSomething = () => {

    }
// 2.  Anonymous function
    // normal javascript
    <button onClick={functionName()}></button>
    function functionName(){
        console.log('hello');
    }
    // In React inline anonymous ffunction
    <button onClick={()=> {
        console.log('hello');
        }}>
    </button>

//3. Ternary Operation
    let age = 10;
    let name = "";
    // normal javascript
        if(age > 10 ){
            name =="Pedro"
        }
        else{

        }
    // In React
        let name =  age > 10 ? "pedro":"something";

//4. Object
    // i. destructure object
    const person={
        name: "pedto",
        age:10,
        married:false
    };
        // classical
            const name = person.name;
            const age=person.age;
            const married = person.married;
        // In React
            const { name, age, married } = person;

    // ii. Copy object and change it properties value
    //Let's say we want to create a new object same as object person but with name 'Jack'. 
    // In React we use spread operator ...
    const person2 = {...person, name:'Jack'}
    // Array example of spread operation.
    let arrNames = ["A", "B","C"];
    let arrNames2 = {...arrNames, "D"}

//5. functions for manipulating Javascripts Array
    // .map(), .filter(), .reduce()
    let names=['A', 'B','C']

    //normal
    for(let i=0, i<name;i++) {}

    //In react
    names.map((name) => {
        return <h1>{name}</h1>
    })

    names.filter((name) => {
        return name !== 'A'; // return array ['B', 'C']
    })

// 7. Promise

//6. Async, Await, Fetch 

            
