const mtg = require('mtgsdk')

class MTG {
  constructor() {
    this.findCard = this.findCard.bind(this);
    this.findSet = this.findSet.bind(this);
  }

  findCard() {
    mtg.card.where({rarity: 'Mythic Rare'})
    .then(cards => {
      cards.map((card) => {
        console.log(card.name)
      })
    })
  }

  findSet(setAbbrev) {
    mtg.set.find(setAbbrev)
    .then(result => {
      console.log(result.set.name) // "Aether Revolt"
    })
  }
}


let generator = new MTG;
generator.findCard();
