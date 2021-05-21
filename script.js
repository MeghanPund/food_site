function nameFunction() {
    let txt;
    let name = prompt("Please enter your name:");
    if (name === null || name === "") {
      txt = "User cancelled the prompt.";
    } else {
      txt = `What would you like to eat, ${name}?`;
    }
    console.log(name);
    document.getElementById("salutation").innerHTML = txt;
}
nameFunction();
 