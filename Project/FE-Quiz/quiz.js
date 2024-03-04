function check() {
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var correct = 0;

  if (question1 == 'Markup') {
    correct++;

  }
  
  if (question2 == 'True') {
    correct++;
  }

  if (question3 == 'Img') {
    correct++;
    
  }

  var message = ['Great JOb', "That's just okay!!", 'You really need to work hard'];

  var range;
  if (correct < 1) {
    range = 2;
  }
  if (correct > 0 && correct < 3) {
    range = 1;
  }
  if (correct > 2) {
    range = 0;
  }

  document.getElementById('after-submit').style.visibility = 'visible';

  document.getElementById('messages').innerHTML = message[range];
  document.getElementById('number_correct').innerHTML = "&rarr; You got "+correct+" correct."
}