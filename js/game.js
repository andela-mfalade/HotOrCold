// Generate Random number and store it in a Variable
//Initializing other variables as well

  var randomNum = Math.ceil(Math.random() * 100),
  submitButton = document.getElementById("submit_guess"),
  giveUpButton = document.getElementById("give_up"),
  restartButton = document.getElementById("restart_game"),
  finalAnswerDisplay = document.getElementById("guessfdbk"),
  countboxFeedback = document.getElementById("countFeedback"),
  absoluteVal,
  absVal,
  count = 0 ;

  countboxFeedback.style.display = 'none';

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
    var inputBox = document.getElementById("user_input"),
        input_number = inputBox.value,
        feedback = document.getElementById("system_feedback"),
        inputNum = parseInt(input_number, 10),
        absVal = Math.abs(inputNum - randomNum);

        finalAnswerDisplay.setAttribute('value', randomNum);
        

//If user enters an invalid input

        if (isNaN(input_number) || input_number === "" || input_number > 100 || input_number < 0) { 
          feedback.setAttribute('value', 'Uh oh! Invalid input..');
          return false;
        }


//If the user's guess is a valid number,  then this block of code executes..


        else { 
               

          if (typeof absoluteVal === "undefined") {

            if (inputNum === randomNum) {
              feedback.setAttribute('value','Choi! We\'ve got a wizard in the house!');
              finalAnswerDisplay.style.visibility = 'show';
              submitButton.style.visibility = 'hidden';
              giveUpButton.style.visibility = 'hidden';
            }

            else { 

              if (absVal <= 15) {
                feedback.setAttribute('value', 'Your guess is Hot!');
                feedback.style.color = 'rgb(223, 150, 54)';
                count+=1 ;
              }              

              else {
                feedback.setAttribute('value', 'Your guess is cold!');
                feedback.style.color = 'rgb(54, 223, 210)';
                count+=1 ;
              }

            }
            absoluteVal = absVal;
            return false;
          }

          else if (inputNum === randomNum) {
            submitButton.style.display = 'none';
            giveUpButton.style.display = 'none';
            inputBox.style.display = 'none';
            countboxFeedback.style.display = 'block';
            feedback.setAttribute('value', 'Ding Ding! We\'ve got a winner..');
            finalAnswerDisplay.style.display = 'block';
            feedback.style.color = 'rgb(21, 195, 103)';            
            inputBox.style.disabled = 'disabled';
            var countmsg = "It took you '" + count + "' attempts to guess the secret number..";
            countboxFeedback.setAttribute('value', countmsg );
            return false;
          }



          else { 

              if (absoluteVal > absVal) {
                feedback.setAttribute('value', 'You are getting Hotter!');
                feedback.style.color = 'rgb(223, 150, 54)';
                count+=1 ;
              }

              else if (absoluteVal < absVal) {
                feedback.setAttribute('value', 'You are getting colder!');
                feedback.style.color = 'rgb(54, 223, 210)';
                count+=1 ;          
              }

              else {
                feedback.setAttribute('value', 'Neither Hot nor Cold..');
              }
              absoluteVal = absVal;
              return false ;
          }		
        }

};





giveUpButton.onclick = activate.giveUp; 

restartButton.onclick = activate.restartGame;

submitButton.onclick = compare; 
