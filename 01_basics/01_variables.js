const accountId = 100056;
let accounEmail="madhu@mail.com"
var accountPassword = "12345"
accountCity = "Jaipur"  // this method is not preferable
let accountState;

// accountId = 2; // const keyword can not changed not allowed

// {
//     these are scopes
// }
/*
Prefer not to use var
because of issue in block scope and functional scope because it is changed everywhere
*/
accounEmail = "mk@mk.com"
accountPassword = 212345
accountCity = "Pune"

console.log(accountId);
console.table([accounEmail,accountPassword,accountCity,accountState])
// console.table(accounEmail,accountPassword,accountCity,accountState);


