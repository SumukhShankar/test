class Quiz {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }

   async start(){
      if(gameState === 0){
        contestant = new Contestant();
        var constestantcountref = await database.ref('ConstestantCount').once("value");

        if(constestantcountref.exist){
          Constestantcount = contestantcountref.val();
          constestant.getCount();
        }
        
        question = new Question();
        question.display();
      }

    }

    play(){
      
      question.hide();
      background("yellow");
      fill("black");
      textSize(30);
      text("Result of the Quiz",350 , 50);

      Contestant.getPlayerInfo();

      if(allcontestant !== undefined){
        var display_ypos = 230;
        text("NOTE : CONTESTANT");
        for(var i in allcontestant){
        
           var correctanswer = "3";

           if(corectanswer === allcontestant[i].answer)
            fill("green");

           else
           fill("red");

           display_ypos += 30;
            text(allcontestant[i].name + ": " + allcontestant[i].answer, 250 , display_ypos)
        }
      }
      

     
  }

}