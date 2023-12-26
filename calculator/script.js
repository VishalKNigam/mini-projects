let input = document.getElementById("inputBox");
console.log("INPUTWA", input);
let buttons = document.querySelectorAll("button");
// console.log(buttons);
let string = "";
let arr = Array.from(buttons);
// console.log(arr);
arr.forEach(button=>{
    button.addEventListener("click", (e)=>{
        if(e.target.innerHTML == "="){
            console.log(e.target.innerHTML)
            string = eval(string);
            input.value = string;

        }else if(e.target.innerHTML == "DEL"){
            console.log(e.target.innerHTML)
            string = string.substring(0, string.length-1);
            input.value = string;

        }else if(e.target.innerHTML == "AC"){
            console.log(e.target.innerHTML)
            string = "";
            input.value = string;
        }else{
            console.log(e.target.innerHTML)
            string += e.target.innerHTML;
            input.value = string;

        }
    })
})

