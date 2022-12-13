setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
 
    if (hour > 12) {
        hour -= 12;
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

    if (am_pm === "PM" && hour >= 6) {
        document.getElementById("greeting").innerHTML = "Good Evening!"
    }

        }


        function colorChange() {
            document.getElementById('h2').style.color = randomColors();
            document.getElementById('main').style.backgroundColor = randomColors();
            document.getElementById('clock').style.color = randomColors();
            document.getElementById('greeting').style.color = randomColors();
        function randomColors() {
            return '#' + Math.floor(Math.random() * 16777215).toString(16);
          }
        
          }

          function resetColors() {
            document.getElementById('h2').style.color = 'orange';
            document.getElementById('main').style.backgroundColor = 'darkSlateGray';
            document.getElementById('clock').style.color = 'black';
            document.getElementById('greeting').style.color = 'orange';
    
          }



showTime();
