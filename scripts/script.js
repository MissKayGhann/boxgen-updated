"use strict"

const numberInput = document.getElementById("number");

numberInput.addEventListener("keypress", (e)=>{
    if(e.key === "Enter"){
        const intNumberInput = parseInt(numberInput.value)
        /*Remove previous divs */
        document.querySelectorAll(".myDiv").forEach(box => box.remove())

        for(let i = 0; i < intNumberInput; i++){
            const div = document.createElement("div");
            const bgColour = setBackgroundColour();
            div.style.backgroundColor =`#${bgColour}`;
            div.classList.add("myDiv");
            document.body.append(div);
        }
    }
})

const setBackgroundColour = ()=>{
    return  Math.floor(Math.random() * 16777215).toString(16);

}
