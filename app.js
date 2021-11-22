
cardsArray = [
    {
        name: 'cheeseburger',
        address: 'images/cheeseburger.png'
    },
    {
        name: 'fries',
        address: 'images/fries.png'
    },
    {
       name: 'hotdog',
       address: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        address: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        address: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        address: 'images/pizza.png'
    }

]
let doubledArray = cardsArray.concat(cardsArray)

doubledArray.sort(() => Math.random() - 0.5);
function createBoard() {
    for (i = 0; i < 2 * cardsArray.length; i++) {
        let backImg;
        backImg = document.createElement('img');
        backImg.setAttribute('src', 'images/blank.png')
        backImg.setAttribute('id', i)
        backImg.setAttribute('name', doubledArray[i].name)
        document.querySelector('.grid').appendChild(backImg);
        backImg.addEventListener('click', click)
    }
}
createBoard();
let cardsChosen = [];
let cardsChosenId = [];
let counter=0
function click() {
    cardsChosen.push(this.name);
    cardsChosenId.push(this.id);
    this.setAttribute('src', 'images//'+this.name+'.png');
    setTimeout(() => {
        if (cardsChosen.length == 2) {
            if (cardsChosen[0] == cardsChosen[1]) {
                document.getElementById(cardsChosenId[0]).setAttribute('src', 'images/white.png')
                document.getElementById(cardsChosenId[1]).setAttribute('src', 'images/white.png')
                counter++;
                if(cardsArray.length==counter){
                    document.getElementById('result').innerText="You Won!"
                    document.getElementById('result').classList.remove('hidden');
                }
            } else {
                document.getElementById(cardsChosenId[0]).setAttribute('src', 'images/blank.png')
                document.getElementById(cardsChosenId[1]).setAttribute('src', 'images/blank.png')
            }
            cardsChosen = [];
            cardsChosenId = [];
        }
    }, 500)
}








