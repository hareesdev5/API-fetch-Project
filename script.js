
let res = fetch("https://jsonplaceholder.typicode.com/users");
res
   .then((data)=>data.json())
   .then((data1)=>{
    
    for(let i=0; i<data1.length; i++){
        console.log(data1[i].name);
        let div = document.createElement("div");
        div.innerHTML= `<div class="card">
                           <div class="card-body">
                              <p class="card-text"><b>Name: ${data1[i].name}</b></p>
                              <p class="card-text">Email: ${data1[i].email}</p>
                              <p class="card-text">street: ${data1[i].address.street}</p>
                              <p class="card-text">City: ${data1[i].address.city}</p>
                           </div>
                       </div>`  
                       document.body.append(div);
    }
    
});


