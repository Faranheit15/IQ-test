function change()
{
    var yup = document.getElementById("Yup");
    var nope = document.getElementById("Nope");
    if (yup.innerHTML=="Yup") {
        yup.innerHTML = "Nope";
        nope.innerHTML = "Yup";
    }
    else if(nope.innerHTML=="Yup"){
        nope.innerHTML = "Yup";
        yup.innerHTML = "Nope";
}