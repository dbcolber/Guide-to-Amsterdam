function toggleEmail(){
    var x = document.getElementById("checkbox").checked;
    if (x == true) 
        { document.getElementById("contact-info").style.display = "block"; }
    else {document.getElementById("contact-info").style.display = "none";}
} 
