// const userDatabase = {
//   Ridwan: {
//     firstName: "Ridwan",
//     lastName: "Adebosin",
//     email: "adebosinadewale@gmail.com",
//     accountActivated: true,
//     password: "Adewale",
//   },

//   Tobi: {
//     firstName: "Tobi",
//     lastName: "Lawal",
//     email: "tobilawal@gmail.com",
//     accountActivated: false,
//     password: "Lawaltobi",
//   },
// };

// function displayUserDetails() {
//   let username = prompt("Enter your username");

//   while (validateUsername(username) === false) {
//     username = prompt("Enter your username again");
//   }

//   if (username == null) {
//     return;
//   }

//   let password = prompt("Enter your password");

//   while (validatePassword(password) == false) {
//     password = prompt("Incorrect password, please try again");
//   }
//   if (password == null) {
//     return;
//   }

//   //CONFIRM PASSWORD
//   let passwordConfirm = prompt("Confirm your Password");

//   while (passwordConfirm !== password) {
//     passwordConfirm = prompt("Incorrect password, enter again");
//   }

//   if (passwordConfirm == null) {
//     return;
//   }

//   const user = userDatabase[username];
//   if (user == undefined) {
//     alert("Not a registered member");
//     return;
//   }

//   console.log(user);
//   alert(`User has the following details:
//   First Name: ${user.firstName}
//   Last Name: ${user.lastName}
//     Email: ${user.email}
//   Account Activated: ${user.accountActivated}
//   `);
//   }

// displayUserDetails();
// alert("You're a registered member");

// // let username = prompt("Enter your username")

// function validateUsername(username) {
//   if (username == null) {
//     return true;
//   }

//   if (username.length > 10) {
//     return false;
//   } else {
//     return true;
//   }
// }

// //let password = prompt("Enter your password")

// function validatePassword(password) {
//   if (password == null) {
//     return true;
//   }

//   if (password.length < 6) {
//     return false;
//   } else {
//     return true;
//   }
// }

const form_username = document.getElementsByClassName("username")
console.log(form_username)

//let username = prompt("Enter your username")

if (username.length > 10) {
       return false;
    } else {
      return true;
  }

 function validateUsername(username) {
  if (username == null) {
    return true;
  }
 }