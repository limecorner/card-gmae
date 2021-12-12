const cardsElement = document.querySelector('#cards')
const symbols = ['https://assets-lighthouse.alphacamp.co/uploads/image/file/17989/__.png'
  , 'https://assets-lighthouse.alphacamp.co/uploads/image/file/17992/heart.png'
  , 'https://assets-lighthouse.alphacamp.co/uploads/image/file/17991/diamonds.png'
  , 'https://assets-lighthouse.alphacamp.co/uploads/image/file/17988/__.png']

const view = {
  displayCards() {
    const cardsArray = Array.from(Array(52).keys())
    utility.shuffle(cardsArray) //試玩時可拿掉
    let cardsHTML = ''
    cardsArray.forEach(index => {
      cardsHTML += this.getCardContent(index)
    })
    cardsElement.innerHTML = cardsHTML
  },
  getCardContent(index) {
    const point = this.transformNumber((index % 13) + 1)
    const symbol = symbols[Math.floor(index / 13)]
    return `<div class="card">
      <p class="point">${point}</p>    
      <img src="${symbol}" alt="">
      <p class="point">${point}</p>
    </div>`
  },
  transformNumber(point) {
    switch (point) {
      case 1:
        return 'A'
      case 11:
        return 'J'
      case 12:
        return 'Q'
      case 13:
        return 'K'
    }
    return point
  }
}

const utility = {
  shuffle(arr) {
    for (let index = arr.length - 1; index > 0; index--) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [arr[index], arr[randomIndex]] = [arr[randomIndex], arr[index]];
    }
  }
}

view.displayCards()