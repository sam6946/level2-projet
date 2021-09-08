//nom d'utilisateur

let usernames = ["Samuel", "Josias", "Grace", "Fongang"];

let useremail = ["samuel@gmail.com", "josias@gmail.com", "grace@gmail.com", "fongang@gmail.com"];

let usergender = ["male", "male", "female", "female" ];

// creation d'un tableau qui recupere les information des utilisateurs et les place dans un tableau

// let users = [];



// const recuperation = () =>{
//     for(let i = 0; i < usernames.length; i++){
//         // console.log('"name":'  + usernames[i]);
//         // console.log(" email:" + useremail[i]);
//         // console.log("gender: " + usergender[i]);

//         let user = 
//             {
//                 name: usernames[i],
//                 email: useremail[i],
//                 gender: usergender[i]
//             };

//               users.push(user);          

//
//     };

    //    console.log(users)
// }

// recuperation();

// another solution

// SevenAcademy_2019_


let users = usernames.map((item,index)=>{
    let user = {};
    user.name = usernames[index];
    user.email = useremail[index];
    user.gender = usergender[index];
    return user;
});





// let users = usernames.forEach(index => {
//     let user = {};
//     user.name = usernames[index];
//     user.email = useremail[index];
//     user.gender = usergender[index];
//     return user;
    
// });


console.log(users);

