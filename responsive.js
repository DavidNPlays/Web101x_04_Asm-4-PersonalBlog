
/* JavaScript function to toggle the display property of the collapsible menu */
/* click to Show, Click to Hide */

function showMenu(){
  var x = document.getElementById("menu");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
 
  }
}

