// Generate Random number and store it in a Variable
//Initializing other variables as well

  var randomNum = Math.ceil(Math.random() * 100),
  submitButton = document.getElementById("submit_guess"),
  giveUpButton = document.getElementById("give_up"),
  restartButton = document.getElementById("restart_game"),
  absoluteVal,
  absVal;

//Button functions

  var activate = {
      giveUp: function() {
              alert("The number was " + randomNum + " . Click Ok to start a new game..") ;
      },  

      restartGame: function() {

         var response = alert("Click Ok to restart game.");

          if (response === "y") {
            location.reload(true);
          }

          else {
            location.reload(false);
          }
      }
  };

  
  var compare = function() {
    var input_number = document.getElementById("user_input").value,
        inputNum = parseInt(input_number, 10),
        feedback = document.getElementById("system_feedback"),        
        absVal = Math.abs(inputNum - randomNum);


//If user enters an invalid input

        if (isNaN(input_number) || input_number === "" || input_number > 100 || input_number < 0) { 
          feedback.value = "Uh oh! Invalid input.." ;
          return false;
        }


//If the user's guess is a valid number,  then this block of code executes..

        else { 
               

          if (typeof absoluteVal === "undefined") {

            if (inputNum === randomNum) {
              feedback.value = "Choi! We've got a wizard in the house!" ;
            }

            else { 

              if (absVal <= 15) {
                feedback.value = "Your guess is Hawt!" ;
              }              

              else {
                feedback.value = "Your guess is kinda cold!" ;
              }

            }
            absoluteVal = absVal;
            return false;
          }

          else if (inputNum === randomNum) {
            feedback.value = "Ding Ding! We've got a winner.." ;
            return false;
          }



          else { 

              if (absoluteVal > absVal) {
                feedback.value = "You are getting Hotter!";
              }

              else if (absoluteVal < absVal) {
                feedback.value = "You are getting colder!";           
              }

              else {
                feedback.value = "Close! Neither Hot nor Cold;)" ;
              }
              absoluteVal = absVal;
              return false ;
          }		
        }

};





giveUpButton.onclick = activate.giveUp; 

restartButton.onclick = activate.restartGame;

submitButton.onclick = compare;
