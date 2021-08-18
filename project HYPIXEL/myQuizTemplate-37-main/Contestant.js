class Contestant {
    constructor() {

        this.index = null;
        this.name = null;
        this.answer = 0;
        

    }

    getCount() {
        var getcountref = database.ref('ContestantCount');

        getcountref.on("value", (data) => {
            Contestantcount = data.val();
        })

    }


    updateCount(count) {
        database.ref('/').update({
            Contestantcount: count
        });
    }

    update() {
        var ContestantIndex = "Contestants/contestant" + this.index;
        database.ref(ContestantIndex).set({
            name: this.name,
            answer : this.answer,
        });
    }

    static getPlayerInfo(){
        var ContestantInfoRef = database.ref('Contestants');
        ContestantInfoRef.on("value",(data)=>{
          allcontestants = data.val();
        })
      }





}




