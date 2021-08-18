class   Question {
    constructor(){
        this.input = createInput("Name");
        this.answer = createInput("Answer");
        this.button = createButton('SUBMIT');
        this.title = createElement('h1');
        this.question = createElement('h3');
        this.option1 = createElement('h4');
        this.option2 = createElement('h4');
        this.option3 = createElement('h4');
        this.option4 = createElement('h4');
    }

    hide(){
        this.input.hide();
        this.answer.hide();
        this.button.hide();
        this.title.hide();
        
    }
    display(){
        this.title.html("MY QUIZ");
        this.title.position(300,10);

       
        this.question.html("Question : What starts and end with the letter E bu has only one letter");
        this.question.position(25,90);

      
        this.option1.html("1: Everone");
        this.option1.position(75,150);

       
        this.option2.html("2: Estimate");
        this.option2.position(75,200);
        
        
        this.option3.html("3: Envelope");
        this.option3.position(75,250);

      
        this.option4.html("4: Example");
        this.option4.position(75,300);

        this.input.position(650,75);

        this.answer.position(650,125);

        this.button.position(650,200);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.answer.hide();
            this.button.hide();
            this.title.hide();
            
            contestant.name = this.input.value();
            contestant.answer = this.answer.value();
            Contestantcount += 1;
            contestant.index = Contestantcount;

            contestant.update();
            contestant.updateCount(Contestantcount);

        });
           

    }
}