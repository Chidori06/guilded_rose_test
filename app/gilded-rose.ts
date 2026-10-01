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

  updateSulfuras(item: Item) {
    //A ajouter
  }

  updateNormalItems(item: Item) {
    if (item.quality > 0) {
      item.quality--;
    }
    item.sellIn--;

    if (item.sellIn < 0 && item.quality > 0) {
      item.quality--;
    }
  }

  updateAgedBrie(item: Item) {
    //A ajouter
  }

  updateBackstage(item: Item) {
    if (item.quality < 50) {
      item.quality++;
    }
    if (item.sellIn < 11 && item.quality < 50) {
      item.quality++;
    }
    if (item.sellIn < 6 && item.quality < 50) {
      item.quality++;
    }

    item.sellIn--;
    if (item.sellIn < 0) {
      item.quality = 0;
    }
  }

  updateQuality() {
    for (const item of this.items) {
      switch (item.name) {
        case "Sulfuras, Hand of Ragnaros":
          this.updateSulfuras(item);
          break;
        case "Aged Brie":
          this.updateAgedBrie(item);
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          this.updateBackstage(item);
          break;
        default:
          this.updateNormalItems(item);
      }
    }
    return this.items;
  }


}
