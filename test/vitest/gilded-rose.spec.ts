import { Item, GildedRose } from '@/gilded-rose';

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

  it("La qualité d'un objet normal ne peut pas être négative", () => {
    const items = [new Item("Elixir of the Mongoose", 10, 0)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(items[0].quality).toBe(0);
  });

  it("La qualité d'un objet normal se dégrade de 2 après date de péremption", () => {
    const items = [new Item("Elixir of the Mongoose", 0, 20)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(items[0].quality).toBe(18);
  });

  it("L'objet Aged Brie augmente sa qualité de 1 plus le temps passe", () => {
    const items = [new Item("Aged Brie", 10, 20)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(items[0].quality).toBe(21);
  });

  it("L'objet Aged Brie ne peut pas aller au delà de 50 en qualité", () => {
    const items = [new Item("Aged Brie", 10, 50)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(items[0].quality).toBe(50);
  });

  it("L'objet Aged Brie prend 2 de qualité après date de péremption", () => {
    const items = [new Item("Aged Brie", 0, 20)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(items[0].quality).toBe(22);
  });

  it("L'objet Sulfuras ne change pas de qualité", () => {
    const items = [new Item("Sulfuras, Hand of Ragnaros", 10, 80)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(items[0].quality).toBe(80);
  });

  it("L'objet Sulfuras ne change pas de valeur", () => {
    const items = [new Item("Sulfuras, Hand of Ragnaros", 10, 80)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(10);
  });



});

