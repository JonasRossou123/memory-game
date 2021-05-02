const cards = document.querySelectorAll('.memory-card');
const score = document.getElementById("score");

const reset = document.getElementById("Restart")


cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 16)
    card.style.order=randomPos;
});

console.log(cards)

let kleurarr = []
let firstselection;
let secondselection;
let firstdiv;
let seconddiv;
let int = 0

cards.forEach(card => card.addEventListener("click",function() {

    let kleurfront = card.firstElementChild
    kleurfront.style.zIndex="8"
    kleurarr.push(kleurfront.alt)
    console.log(kleurarr)

    if (firstdiv){
        seconddiv = card
    } else {
        firstdiv = card
    }

    if (firstdiv==seconddiv){
        kleurfront.style.zIndex="5";
        kleurarr=[];
        firstdiv = null;
        seconddiv = null;
        firstselection = null;
        secondselection = null;

        return

    }

    console.log(seconddiv)
    console.log(firstdiv)

    if (firstselection){
    secondselection = kleurfront
    } else {
        firstselection = kleurfront
    }


    console.log(firstselection)
    console.log(secondselection)



    //eerste selectie -> niet doen
    if (kleurarr.length === 1){
                 }

    //er komt kleurarr wordt gevuld met tweede kleur (alt wordt vergeleken), is die hetzelfde? ja
    else if (kleurarr[0] === kleurarr[1]){

        setTimeout(youwonwait,500);

        card.style.pointerEvents = "none";
        firstdiv.style.pointerEvents = "none";
        kleurarr=[];
        firstselection = null;
        firstdiv = null;
        int += 1
        score.innerHTML = int
        console.log(int)
        function youwonwait(){
            if (int == 8){
                alert('congrats you won')
            }
        }
                    }

    //er komt tweede kleurarr in
    else if (kleurarr[0] !== kleurarr[1]){
        setTimeout(rainbow,1000);
        setTimeout(resett, 1001);

        card.parentElement.style.pointerEvents = "none";

        function rainbow(){
            kleurfront.style.zIndex="5";
            firstselection.style.zIndex="5";
            card.parentElement.style.pointerEvents = "auto";
        }
        function resett(){
            kleurarr=[]
            firstselection = null
            firstdiv = null;
            seconddiv = null;
        }



    }

    reset.addEventListener("click", () => {
        location.reload()
    })

        }))

