import { Item, GildedRose } from '@/gilded-rose';
import { describe, expect, it } from "vitest";

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
  });

  it('Un objet normal perd 1 de qualité par jour', () => {
    const gildedRose = new GildedRose([new Item('Elixir of the Mongoose', 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(19);
  });

  it("Un objet normal perd 1 de valeur par jour ", () => {
    const items = [new Item("Elixir of the Mongoose", 10, 20)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(9);
  });

  it("La qualité ne peut pas être négative", () => {
    const items = [new Item("Elixir of the Mongoose", 10, 0)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(items[0].quality).toBe(0);
  });

  it("La qualité se dégrade de 2 après date de péremption", () => {
    const items = [new Item("Elixir of the Mongoose", 0, 20)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(items[0].quality).toBe(18);
  });


});

