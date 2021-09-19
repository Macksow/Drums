let buttons = document.querySelectorAll(".drum");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        
      let clickedButton = this.innerHTML;

      makeSound(clickedButton);

      buttonAnimation(clickedButton);

    });
}

document.addEventListener("keydown", function(pressedKey) {

  makeSound(pressedKey.key);

  buttonAnimation(pressedKey.key);

});

function makeSound(key) {

        switch (key) {
            case "w":
              let crash = new Audio("sounds/crash.mp3");
              crash.volume = 0.2;
              crash.play();
            break;
            
            case "a":
              let kickbass = new Audio("sounds/kick-bass.mp3");
              kickbass.volume = 0.2;
              kickbass.play();
            break;

            case "s":
              let snare = new Audio("sounds/snare.mp3");
              snare.volume = 0.2;
              snare.play();
            break;

            case "d":
              let tom1 = new Audio("sounds/tom-1.mp3");
              tom1.volume = 0.2;
              tom1.play();
            break;

            case "j":
              let tom2 = new Audio("sounds/tom-2.mp3");
              tom2.volume = 0.2;
              tom2.play();
            break;

            case "k":
              let tom3 = new Audio("sounds/tom-3.mp3");
              tom3.volume = 0.2;
              tom3.play();
            break;

            case "l":
              let tom4 = new Audio("sounds/tom-4.mp3");
              tom4.volume = 0.2;
              tom4.play();
            break;
        }
}

function buttonAnimation(currentKey) {

  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 130)

}