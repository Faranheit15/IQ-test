function change()
{
    var yup = document.getElementById("Yup");
    var nope = document.getElementById("Nope");
    if (yup.innerText=="Yup") {
        yup.innerText = "Nope";
        nope.innerText = "Yup";
    }
    else if(nope.innerText=="Yup"){
        nope.innerText = "Yup";
        yup.innerText = "Nope";
}