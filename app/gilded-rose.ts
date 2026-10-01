export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  decreaseQuality(item) {
    item.quality--;
  }

  resetQuality(item) {
    item.quality = 0;
  }

  increaseQuality(item) {
    item.quality++;
  }

  decreaseSellIn(item) {
    item.sellIn--;
  }

  //Conjured
  decreaseQualityConjured(item) {
    if (item.quality > 0) {
      this.decreaseQuality(item);
    }
    if (item.quality > 0) {
      this.decreaseQuality(item);
    }
  }


  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];

      switch (item.name) {
        case "Aged Brie":
          if (item.quality < 50) {
            this.increaseQuality(item);
          }

          this.decreaseSellIn(item);

          if (item.sellIn < 0) {
            if (item.quality < 50) {
              this.increaseQuality(item);
            }
          }

          break;

        case "Backstage passes to a TAFKAL80ETC concert":
          if (item.quality < 50) {
            this.increaseQuality(item);

            if (item.sellIn < 11) {
              if (item.quality < 50) {
                this.increaseQuality(item);
              }
            }

            if (item.sellIn < 6) {
              if (item.quality < 50) {
                this.increaseQuality(item);
              }
            }
          }

          this.decreaseSellIn(item);

          if (item.sellIn < 0) {
            this.resetQuality(item);
          }

          break;

        case "Sulfuras, Hand of Ragnaros":
          break;

        //Ajout des conjured
        case "Conjured Mana Cake":
          this.decreaseQualityConjured(item);

          this.decreaseSellIn(item);

          if (item.sellIn < 0) {
            if (item.quality > 0) {
              this.decreaseQualityConjured(item);
            }
          }

          break;

        default:
          if (item.quality > 0) {
            this.decreaseQuality(item);
          }

          this.decreaseSellIn(item);

          if (item.sellIn < 0) {
            if (item.quality > 0) {
              this.decreaseQuality(item);
            }
          }

          break;
      }
    }

    return this.items;
  }



}

