//database data
let data_username= "abcd1@gmail.com";
let data_pass="123456ab";

//for user
let username= "abcd1@gmail.com";
let pass= "123456ab";

if (data_username === username){
  if(data_pass === pass) {
  console.log("Login succesfully");
}  else{
    console.log("Incorrect password")
}
} else {
  console.log("Wrong credential");
}