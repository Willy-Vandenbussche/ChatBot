const dialog=[{question:"salut", awnser:"Salut"},{question:"ca va ?", awnser:"Bien et toi"},{question:"toto", awnser:"tata"}]
console.table(dialog)
console.log(document.getElementById("form-dialogue"))
document.getElementById("form-dialogue").addEventListener("submit", function(event){
    event.preventDefault();
   // console.log(event.target);
   // console.log(document.querySelector("form-question").value)
    document.querySelector(".question").innerHTML=document.querySelector(".form-question").value
    document.querySelector(".answer").innerHTML="coucou"
})
dialog.forEach(element => {
    console.log(element.question)
    if(element.question=="toto"){
        console.log("match")
    }
});