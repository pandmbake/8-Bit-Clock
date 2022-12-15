setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
 
    if (hour >= 12) {
        //hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
 
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
 
    let currentTime = hour + ":"
            + min + ":" + sec + " " + am_pm;
 
    document.getElementById("clock")
            .innerHTML = currentTime;


    if (am_pm === "AM") {
        document.getElementById("greeting").innerHTML = "Good Morning!"
    }

    if (am_pm === "PM" && hour === 12) {
        document.getElementById("greeting").innerHTML = "Good Afternoon!"
    }

    if (am_pm === "PM" && hour >= 1) {
        document.getElementById("greeting").innerHTML = "Good Afternoon!"
    }

    if (am_pm === "PM" && hour >= 6 && hour < 12) {
        document.getElementById("greeting").innerHTML = "Good Evening!"
    }

        }


        
        
          

  

          function creepy() {
            document.getElementById('h2').style.fontFamily = "'Creepster', cursive";
            document.getElementById('clock').style.fontFamily = "'Creepster', cursive";
            document.getElementById('greeting').style.fontFamily = "'Creepster', cursive";
            document.getElementById('main').style.backgroundImage = 'url("images/spooky-2.jpeg")';
            document.getElementById('h2').innerHTML = "Creepy Clock";
            document.getElementById('h2').style.fontSize = "5em";
            document.getElementById('h2').style.marginTop = ".9em";
            document.getElementById('clock').style.fontSize = "4em";
            document.getElementById('greeting').style.fontSize = "3em";
            document.getElementById('greeting').style.marginTop = ".6em";
            document.getElementById('h2').style.color = "black";
            document.getElementById('greeting').style.color = "black";
            document.getElementById('clock').style.border = "4px solid black";
            document.getElementById('clock').style.color = "black";
            document.getElementById('clock').style.marginTop = "-1em";
            document.getElementById('creepy').style.fontFamily = "'Creepster', cursive";
            document.getElementById('typewriter').style.fontFamily = "'Creepster', cursive";
            document.getElementById('dimensional').style.fontFamily = "'Creepster', cursive";
            document.getElementById('changeColor').style.fontFamily = "'Creepster', cursive";
            document.getElementById('resetColors').style.fontFamily = "'Creepster', cursive";
            document.getElementById('creepy').style.fontSize = "1.3em";
            document.getElementById('typewriter').style.fontSize = "1.3em";
            document.getElementById('dimensional').style.fontSize = "1.3em";
            document.getElementById('changeColor').style.fontSize = "1.3em"
            document.getElementById('resetColors').style.fontSize = "1.3em"
            document.getElementById('creepy').style.width = "15em";
            document.getElementById('typewriter').style.width = "15em";
            document.getElementById('dimensional').style.width = "15em";
            document.getElementById('greeting').style.marginBottom = "-.2em";

          }

          function typewriter() {
            document.getElementById('h2').style.fontFamily = "'Special Elite', cursive";
            document.getElementById('clock').style.fontFamily = "'Special Elite', cursive";
            document.getElementById('greeting').style.fontFamily = "'Special Elite', cursive";
            document.getElementById('main').style.backgroundImage = 'url("images/OIP.jpg")';
            document.getElementById('main').style.backgroundSize = 'cover';
            document.getElementById('h2').innerHTML = "Typewriter Clock";
            document.getElementById('h2').style.fontSize = "4em";
            document.getElementById('h2').style.marginTop = ".9em";
            document.getElementById('clock').style.fontSize = "4em";
            document.getElementById('greeting').style.fontSize = "3em";
            document.getElementById('greeting').style.marginTop = ".77em";
            document.getElementById('h2').style.color = "black";
            document.getElementById('greeting').style.color = "black";
            document.getElementById('clock').style.border = "4px solid black";
            document.getElementById('clock').style.marginTop = "-.5em";
            document.getElementById('creepy').style.fontFamily = "'Special Elite', cursive";
            document.getElementById('typewriter').style.fontFamily = "'Special Elite', cursive";
            document.getElementById('dimensional').style.fontFamily = "'Special Elite', cursive";
            document.getElementById('changeColor').style.fontFamily = "'Special Elite', cursive";
            document.getElementById('resetColors').style.fontFamily = "'Special Elite', cursive";
            document.getElementById('creepy').style.fontSize = "1.3em";
            document.getElementById('typewriter').style.fontSize = "1.3em";
            document.getElementById('dimensional').style.fontSize = "1.3em";
            document.getElementById('changeColor').style.fontSize = "1.3em"
            document.getElementById('resetColors').style.fontSize = "1.3em"
            document.getElementById('creepy').style.width = "15em";
            document.getElementById('typewriter').style.width = "16em";
            document.getElementById('dimensional').style.width = "15em";
            document.getElementById('greeting').style.marginBottom = "-.2em";

          }

          function dimensional() {
            document.getElementById('h2').style.fontFamily = "'Nabla', cursive";
            document.getElementById('clock').style.fontFamily = "'Nabla', cursive";
            document.getElementById('greeting').style.fontFamily = "'Nabla', cursive";
            document.getElementById('main').style.backgroundImage = 'url("images/3d.jpeg")';
            document.getElementById('main').style.backgroundSize = 'cover';
            document.getElementById('h2').innerHTML = "3-D Clock";
            document.getElementById('h2').style.fontSize = "4em";
            document.getElementById('h2').style.marginTop = ".2em";
            document.getElementById('clock').style.fontSize = "3.5em";
            document.getElementById('greeting').style.fontSize = "2.5em";
            document.getElementById('greeting').style.marginTop = ".40em";
            document.getElementById('h2').style.color = "black";
            document.getElementById('greeting').style.color = "black";
            document.getElementById('clock').style.border = "4px solid black";
            document.getElementById('clock').style.marginTop = "-.9em";
            document.getElementById('creepy').style.fontFamily = "'Nabla', cursive";
            document.getElementById('typewriter').style.fontFamily = "'Nabla', cursive";
            document.getElementById('dimensional').style.fontFamily = "'Nabla', cursive";
            document.getElementById('changeColor').style.fontFamily = "'Nabla', cursive";
            document.getElementById('resetColors').style.fontFamily = "'Nabla', cursive";
            document.getElementById('creepy').style.fontSize = "1.3em";
            document.getElementById('typewriter').style.fontSize = "1.3em";
            document.getElementById('dimensional').style.fontSize = "1.3em";
            document.getElementById('changeColor').style.fontSize = "1.3em"
            document.getElementById('resetColors').style.fontSize = "1.3em"
            document.getElementById('creepy').style.width = "15em";
            document.getElementById('typewriter').style.width = "16em";
            document.getElementById('dimensional').style.width = "15em";
            document.getElementById('greeting').style.marginBottom = "-.2em";
          }


          //font-family: 'Creepster', cursive;
          //font-family: 'Special Elite', cursive;
          //font-family: 'Nabla', cursive;



showTime(); 
