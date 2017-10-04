import * as mtg from 'mtgsdk';

class MTG {
  constructor() {
    this.findCard = this.findCard.bind(this);
    this.findSet = this.findSet.bind(this);
  }

  findCard(cardId) {
    mtg.card.find(cardId)
    .then(result => {
      console.log(result.card.name) // "Black Lotus"
      console.log(result.card.imageUrl)
    })
  }

  findSet(setAbbrev) {
    mtg.set.find(setAbbrev)
    .then(result => {
      console.log(result.set.name) // "Aether Revolt"
    })
  }
}

export default MTG;

// let generator = new MTG
// generator.findCard(66);
