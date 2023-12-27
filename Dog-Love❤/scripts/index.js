document.addEventListener("DOMContentLoaded", function(){
    let form = document.getElementById("loginform");
    // console.log(form)
    form.addEventListener("submit", function (e){
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        // console.log("email", email, "pass", pass)
        
        fetch("https://reqres.in/api/login", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,password
            })
        }).then((res)=> res.json())
        .then((data)=>{
            
                console.log(data)
               if(data.token){
                window.onload(location.href = "./DashBoard.html")
               }else{
                alert("Login Failed");
               }
            
        })
        .catch((err)=>console.error(err));
    } )
})