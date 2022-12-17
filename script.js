function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);

  if (h < 12) {
    document.getElementById("greeting").innerHTML = "Good Morning!";
  } else if (h < 18) {
    document.getElementById("greeting").innerHTML = "Good Afternoon!";
  } else {
    document.getElementById("greeting").innerHTML = "Good Evening!";
  }
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}



function creepy() {
  document.getElementById("h2").style.fontFamily = "'Creepster', cursive";
  document.getElementById("clock").style.fontFamily = "'Creepster', cursive";
  document.getElementById("greeting").style.fontFamily = "'Creepster', cursive";
  document.getElementById("main").style.backgroundImage =
    'url("images/spooky-2.jpeg")';
  document.getElementById("h2").innerHTML = "Creepy Clock";
  document.getElementById("h2").style.fontSize = "5em";
  document.getElementById("h2").style.marginTop = ".5em";
  document.getElementById("clock").style.fontSize = "4em";
  document.getElementById("greeting").style.fontSize = "3em";
  document.getElementById("greeting").style.marginTop = ".6em";
  document.getElementById("h2").style.color = "black";
  document.getElementById("greeting").style.color = "black";
  document.getElementById("clock").style.border = "4px solid black";
  document.getElementById("clock").style.color = "black";
  document.getElementById("clock").style.marginTop = "-1em";
  document.getElementById("typewriter").style.fontFamily =
    "'Creepster', cursive";
  document.getElementById("dimensional").style.fontFamily =
    "'Creepster', cursive";
  document.getElementById("creepy").style.fontSize = "1.3em";
  document.getElementById("typewriter").style.fontSize = "1.3em";
  document.getElementById("dimensional").style.fontSize = "1.3em";
  document.getElementById("creepy").style.width = "15em";
  document.getElementById("typewriter").style.width = "15em";
  document.getElementById("dimensional").style.width = "15em";
  document.getElementById("greeting").style.marginBottom = "-.2em";
  document.getElementById("eightBit").style.display = "flex";
  document.getElementById("eightBit").style.fontFamily = "'Creepster', cursive";
  document.getElementById("eightBit").style.fontSize = "1.3em";
  document.getElementById("eightBit").style.width = "15em";
  document.getElementById("creepy").style.color = "black";
  document.getElementById("typewriter").style.color = "black";
  document.getElementById("dimensional").style.color = "black";
  document.getElementById("creepy").style.display = 'none';
  document.getElementById("typewriter").style.display = "flex";
}

function typewriter() {
  document.getElementById("h2").style.fontFamily = "'Special Elite', cursive";
  document.getElementById("clock").style.fontFamily =
    "'Special Elite', cursive";
  document.getElementById("greeting").style.fontFamily =
    "'Special Elite', cursive";
  document.getElementById("main").style.backgroundImage =
    'url("images/OIP.jpg")';
  document.getElementById("main").style.backgroundSize = "cover";
  document.getElementById("h2").innerHTML = "Typewriter Clock";
  document.getElementById("h2").style.fontSize = "4em";
  document.getElementById("h2").style.marginTop = "1.5em";
  document.getElementById("clock").style.fontSize = "4em";
  document.getElementById("greeting").style.fontSize = "3em";
  document.getElementById("greeting").style.marginTop = ".77em";
  document.getElementById("h2").style.color = "black";
  document.getElementById("greeting").style.color = "black";
  document.getElementById("clock").style.border = "4px solid black";
  document.getElementById("clock").style.marginTop = "-.5em";
  document.getElementById("creepy").style.fontFamily =
    "'Special Elite', cursive";
  document.getElementById("typewriter").style.fontFamily =
    "'Special Elite', cursive";
  document.getElementById("dimensional").style.fontFamily =
    "'Special Elite', cursive";
  document.getElementById("creepy").style.fontSize = "1.3em";
  document.getElementById("typewriter").style.fontSize = "1.3em";
  document.getElementById("dimensional").style.fontSize = "1.3em";
  document.getElementById("creepy").style.width = "15em";
  document.getElementById("typewriter").style.width = "16em";
  document.getElementById("dimensional").style.width = "15em";
  document.getElementById("greeting").style.marginBottom = "-.2em";
  document.getElementById("eightBit").style.display = "flex";
  document.getElementById("eightBit").style.fontFamily =
    "'Special Elite', cursive";
  document.getElementById("eightBit").style.fontSize = "1.3em";
  document.getElementById("eightBit").style.width = "15em";
  document.getElementById("typewriter").style.display = "none";
  document.getElementById("creepy").style.display = "flex";
  document.getElementById("dimensional").style.display = "flex";
  document.getElementById("creepy").style.color = "black";
  document.getElementById("typewriter").style.color = "black";
  document.getElementById("dimensional").style.color = "black";
}

function dimensional() {
  document.getElementById("h2").style.fontFamily = "'Nabla', cursive";
  document.getElementById("clock").style.fontFamily = "'Nabla', cursive";
  document.getElementById("greeting").style.fontFamily = "'Nabla', cursive";
  document.getElementById("main").style.backgroundImage =
    'url("images/3d.jpeg")';
  document.getElementById("main").style.backgroundSize = "cover";
  document.getElementById("h2").innerHTML = "3-D Clock";
  document.getElementById("h2").style.fontSize = "4em";
  document.getElementById("h2").style.marginTop = "1em";
  document.getElementById("clock").style.fontSize = "3.5em";
  document.getElementById("greeting").style.fontSize = "2.5em";
  document.getElementById("greeting").style.marginTop = ".40em";
  document.getElementById("h2").style.color = "black";
  document.getElementById("greeting").style.color = "black";
  document.getElementById("clock").style.border = "4px solid black";
  document.getElementById("clock").style.marginTop = "-.9em";
  document.getElementById("creepy").style.fontFamily = "'Nabla', cursive";
  document.getElementById("typewriter").style.fontFamily = "'Nabla', cursive";
  document.getElementById("dimensional").style.fontFamily = "'Nabla', cursive";
  document.getElementById("creepy").style.fontSize = "1.3em";
  document.getElementById("typewriter").style.fontSize = "1.3em";
  document.getElementById("dimensional").style.fontSize = "1.3em";
  document.getElementById("creepy").style.width = "15em";
  document.getElementById("typewriter").style.width = "16em";
  document.getElementById("dimensional").style.width = "15em";
  document.getElementById("greeting").style.marginBottom = "-.2em";
  document.getElementById("eightBit").style.display = "flex";
  document.getElementById("eightBit").style.fontFamily = "'Nabla', cursive";
  document.getElementById("eightBit").style.fontSize = "1.3em";
  document.getElementById("eightBit").style.width = "15em";
  document.getElementById("dimensional").style.display = "none";
  document.getElementById("typewriter").style.display = "flex";
  document.getElementById("creepy").style.display = "flex";
  document.getElementById("creepy").style.color = "black";
  document.getElementById("typewriter").style.color = "black";
  document.getElementById("dimensional").style.color = "black";
}

/*font-family: 'Creepster', cursive;
font-family: 'Special Elite', cursive;
font-family: 'Nabla', cursive;*/

