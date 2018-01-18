// var vid = document.getElementById("bgvid");
// vid.volume = 0.25;
// var pauseButton = document.getElementById("butt");

// if (window.matchMedia('(prefers-reduced-motion)').matches) {
//     vid.removeAttribute("autoplay");
//     vid.pause();
//     pauseButton.innerHTML = "Paused";
// }

// function vidFade() {
//   vid.classList.add("stopfade");
// }

// vid.addEventListener('ended', function()
// {
// // only functional if "loop" is removed 
// vid.pause();
// // to capture IE10
// vidFade();
// }); 

//     var pauseButton = document.getElementById("butt");
//     pauseButton.addEventListener("click", function(e) {
//         console.log(e)
//       vid.classList.toggle("stopfade");
//       if (vid.paused) {
//         vid.play();
//         pauseButton.innerHTML = "Pause";
//       } else {
//         vid.pause();
//         pauseButton.innerHTML = "Paused";
//       }
//     })

// console.log(pauseButton)



// var vid = document.getElementById("myaudio");
// vid.volume = 0.2;

// document.getElementById("p2").style.color = "blue";
//       document.getElementById("p2").style.fontFamily = "Arial";
//       document.getElementById("p2").style.fontSize = "larger";
//       function checkKeyPressed(e) {
//    if (e.charCode == "97") {
//        alert("The 'a' key is pressed.");
//    }
// }

document.getElementById("p2").style.color = "blue";
      document.getElementById("p2").style.fontFamily = "Arial";
      document.getElementById("p2").style.fontSize = "larger";
      var el = document.getElementById("p1");
      // el.remove();
      
      window.addEventListener("keydown",checkKeyPress,false);
      function checkKeyPress(key){
        if(key.keyCode=="65"){document.getElementById('polina').style.visibility='hidden';
          // alert("The 'a' letter key has been pressed!");

        }
          else if(key.keyCode=="66"){
            document.getElementById('polina').style.visibility='visible';
          // alert("The 'b' letter key has been pressed!");
          document.getElementById('p1').style.color="red";
          document.getElementById("p1").style.fontFamily = "Arial";
      // document.getElementById("p1").style.fontSize = "bold";
      }
        }

        function myFunction() {
          el.remove();
      //     else{
      //       alert("Child div has already been removed or does not exist.");
      //      return false
      //  }
      }

  
      function showAlert() { 
        alert ("Utilizati tastele a si b");
      }


      
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Grade must be filled out");
        return false;
    }
}

