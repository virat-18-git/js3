// let arr=[1,2,3,4,5,6,7,8,9]
// console.log(`Smallest number is ${arr[0]},Largest number is ${arr[arr.length-1]}`)

let username =prompt("enter the username");
let starting_from=prompt("entr the starting point");
let destination_to=prompt("enter the destination point");
let money=prompt("enter the money");
let day=prompt("enter the day");


let obj={
    name:username,
    id:"1",
    from:starting_from,
    to:destination_to,
    cash:money,
    on:day,
}
alert(`${obj.name} travelling from ${obj.from} to ${obj.to} along cash of ${obj.cash} on ${obj.on}`)
// console.log(`${obj.name} travelling from ${obj.from} to ${obj.to} along cash of ${obj.cash} on ${obj.on}`)
// let obj={
//     name:"shiva",
//     id:"1",
//     from:"hyderabad",
//     to:"rajapet",
//     cash:"5000",
//     on:"saturday",
// }
// console.log(`${obj.name} travelling from ${obj.from} to ${obj.to} along cash of ${obj.cash} on ${obj.on}`)

