export async function dataGetir(){
let response = await fetch("https://jsonplaceholder.typicode.com/todos");
let data= await response.json();
return data;
}

export async function GetirDetail(payload){
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${payload}`);
    let data= await response.json();
    return data;
    }