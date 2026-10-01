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

  decreaseQuality(i) {
    this.items[i].quality = this.items[i].quality - 1;
  }

  resetQuality(i) {
    this.items[i].quality =
      this.items[i].quality - this.items[i].quality;
  }

  increaseQuality(i) {
    this.items[i].quality = this.items[i].quality + 1;
  }

  decreaseSellIn(i) {
    this.items[i].sellIn = this.items[i].sellIn - 1;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {

      switch (this.items[i].name) {
        case "Aged Brie":
          if (this.items[i].quality < 50) {
            this.increaseQuality(i);
          }
          break;

        case "Backstage passes to a TAFKAL80ETC concert":
          if (this.items[i].quality < 50) {
            this.increaseQuality(i);

            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.increaseQuality(i);
              }
            }

            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.increaseQuality(i);
              }
            }
          }
          break;

        case "Sulfuras, Hand of Ragnaros":
          break;

        default:
          if (this.items[i].quality > 0) {
            this.decreaseQuality(i);
          }
          break;
      }

      switch (this.items[i].name) {

        case "Sulfuras, Hand of Ragnaros":
          //Ne change pas
          break;

        default:
          this.decreaseSellIn(i);
          break;
      }

      if (this.items[i].sellIn < 0) {

        switch (this.items[i].name) {

          case "Aged Brie":
            if (this.items[i].quality < 50) {
              this.increaseQuality(i);
            }
            break;

          case "Backstage passes to a TAFKAL80ETC concert":
            this.resetQuality(i);
            break;

          case "Sulfuras, Hand of Ragnaros":
            //Ne change pas
            break;

          default:
            if (this.items[i].quality > 0) {
              this.decreaseQuality(i);
            }
            break;
        }
      }
    }

    return this.items;
  }
}

