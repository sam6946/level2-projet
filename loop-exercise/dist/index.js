let user = ["Kembang", "Sinclaire", "Prince", "Julius"];





//creation de nos differents element


   

     for(let i = 0; i < user.length; i++){
        let para = document.createElement('p');
        let username= document.createTextNode(user[i]);
        para.appendChild(username);


         document.body.append(para);
    };

    










