$(document).ready(function() {
    var Magic8Ball = {};
  
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
  
    Magic8Ball.respuestas = ["No", "Podría ser", "Es posible", "Intenta de nuevo", "Tú puedes lograrlo", "Podría ser un poco difícil", "Deberías pensarlo"];
  
    Magic8Ball.pregunta = function() {
      var indiceAleatorio = Math.floor(Math.random() * this.respuestas.length);
      var respuesta = this.respuestas[indiceAleatorio];
      $("#answer").text(respuesta);
    }
  
    var truco = function() {
      Magic8Ball.pregunta();
      prompt("Haz una pregunta que pueda ser respondida con SÍ o NO");
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
      $("#8ball").effect("shake");
    }
  
    $("#questionButton").click(truco);
  });
  