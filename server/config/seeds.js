const db = require('./connection');
const { User, Drink, DrinkCategories } = require('../models');

db.once('open', async () => {
  await DrinkCategories.deleteMany();
  await Drink.deleteMany();

  const categories = await DrinkCategories.insertMany([
    { name: 'Beer' },
    { name: 'Wine' },
    { name: 'Cocktails' },
    { name: 'Liquors and Spirits' }
  ]);

  console.log('categories seeded');

  const drinkData = [];

  const Drinks = await Drink.insertMany([
      //Beers
    {
      name: 'Lager',
      description:
        'Lager is typically the starter beer of choice, featuring the faves such as Budweiser, Corona, Michelob Ultra, Miller and Carling',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
    },
    {
      name: 'Ale',
      description:
        'Popular in England, where the term is now synonymous with beer, ale was until the late 17th century an unhopped brew of yeast, water, and malt, beer being the same brew with hops added.',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
    },
    {
      name: 'IPA',
      description:
        'India Pale Ales (IPAs), which encompass numerous styles of beer, get their characteristics largely from hops and herbal, citrus or fruity flavors. They can be bitter and contain high alcohol levels, though the final product depends on the variety of hops used.',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
    },
    {
      name: 'Stout',
      description:
        'a very dark, full-bodied ale with a distinctive malty flavor that is typically brewed with unmalted roasted barley Stout is a darker, heavily hopped ale that has a creamy head in the glass, the most famous stout is the traditional Irish Guinness',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
    },
    //Wines
    {
        name: 'Red Wine',
        description:
          '',
        image: 'cookie-tin.jpg',
        category: categories[1]._id,
      },
    {
        name: 'White Wine',
        description:
          '',
        image: 'cookie-tin.jpg',
        category: categories[1]._id,
      },
    {
        name: 'Rose',
        description:
          '',
        image: 'cookie-tin.jpg',
        category: categories[1]._id,
      },
    {
        name: 'Sparkling Wine',
        description:
          '',
        image: 'cookie-tin.jpg',
        category: categories[1]._id,
      },
      
      //Cocktails
      {
        name: 'Old Fashiones',
        description:
          '',
        image: 'cookie-tin.jpg',
        category: categories[2]._id,
      },
      {
        name: 'Martini',
        description:
          '',
        image: 'cookie-tin.jpg',
        category: categories[2]._id,
      },
      {
        name: 'Dirty Martini',
        description:
          '',
        image: 'cookie-tin.jpg',
        category: categories[2]._id,
      },
      {
        name: 'Porn Star Martini',
        description:
          '',
        image: 'cookie-tin.jpg',
        category: categories[2]._id,
      },
      {
        name: 'Espresso Martini',
        description:
          '',
        image: 'cookie-tin.jpg',
        category: categories[2]._id,
      },
      {
        name: 'Manhattan',
        description:
          '',
        image: 'cookie-tin.jpg',
        category: categories[2]._id,
      },
      {
        name: 'Long Island Iced Tea',
        description:
          '',
        image: 'cookie-tin.jpg',
        category: categories[2]._id,
      },
      {
        name: 'Margarita',
        description:
          '',
        image: 'cookie-tin.jpg',
        category: categories[2]._id,
      },
      {
        name: 'Cosmopolitan',
        description:
          '',
        image: 'cookie-tin.jpg',
        category: categories[2]._id,
      },
      {
        name: 'Moscow Mule',
        description:
          '',
        image: 'cookie-tin.jpg',
        category: categories[2]._id,
      },
      {
        name: 'Mojito',
        description:
          '',
        image: 'cookie-tin.jpg',
        category: categories[2]._id,
      },
      {
        name: 'Whiskey Sour',
        description:
          '',
        image: 'cookie-tin.jpg',
        category: categories[2]._id,
      },
      {
        name: 'Mimosa',
        description:
          '',
        image: 'cookie-tin.jpg',
        category: categories[2]._id,
      },
      {
        name: 'Gin & Tonic',
        description:
          '',
        image: 'cookie-tin.jpg',
        category: categories[2]._id,
      },
      {
        name: 'Daiquiri',
        description:
          '',
        image: 'cookie-tin.jpg',
        category: categories[2]._id,
      },

      // Spirits and Liquor
      {
        name: 'Whiskey',
        description:
          '',
        image: 'cookie-tin.jpg',
        category: categories[3]._id,
      },
      {
        name: 'Tequila',
        description:
          '',
        image: 'cookie-tin.jpg',
        category: categories[3]._id,
      },
      {
        name: 'Bourbon',
        description:
          '',
        image: 'cookie-tin.jpg',
        category: categories[3]._id,
      },
      {
        name: 'Vodka',
        description:
          '',
        image: 'cookie-tin.jpg',
        category: categories[3]._id,
      },
      {
        name: 'Gin',
        description:
          '',
        image: 'cookie-tin.jpg',
        category: categories[3]._id,
      },
  ]);

  Drinks.push({ name, description, })

  console.log('drinks seeded');

  process.exit();
});