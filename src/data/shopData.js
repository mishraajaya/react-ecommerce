const imagePath = 'public/images'
const SHOP_DATA = [
  {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imageUrl: `${imagePath}/shoppage/hats/brown-brim.png`,
        price: 25
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl: `${imagePath}/shoppage/hats/blue-beanie.png`,
        price: 18
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: `${imagePath}/shoppage/hats/brown-cowboy.png`,
        price: 35
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl: `${imagePath}/shoppage/hats/grey-brim.png`,
        price: 25
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl: `${imagePath}/shoppage/hats/green-beanie.png`,
        price: 18
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: `${imagePath}/shoppage/hats/palm-tree-cap.png`,
        price: 14
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: `${imagePath}/shoppage/hats/red-beanie.png`,
        price: 18
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: `${imagePath}/shoppage/hats/wolf-cap.png`,
        price: 14
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: `${imagePath}/shoppage/hats/blue-snapback.png`,
        price: 16
      }
    ]
  },
  {
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl: `${imagePath}/shoppage/sneakers/adidas-nmd.png`, 
        price: 220
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl: `${imagePath}/shoppage/sneakers/yeezy.png`,
        price: 280
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl: `${imagePath}/shoppage/sneakers/black-converse.png`,
        price: 110
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: `${imagePath}/shoppage/sneakers/white-nike-high-tops.png`,
        price: 160
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: `${imagePath}/shoppage/sneakers/nikes-red.png`,
        price: 160
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: `${imagePath}/shoppage/sneakers/nike-brown.png`,
        price: 160
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: `${imagePath}/shoppage/sneakers/nike-funky.png`,
        price: 190
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: `${imagePath}/shoppage/sneakers/timberlands.png`,
        price: 200
      }
    ]
  },
  {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl: `${imagePath}/shoppage/jackets/black-shearling.png`,
        price: 125
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl: `${imagePath}/shoppage/jackets/blue-jean-jacket.png`,
        price: 90
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl: `${imagePath}/shoppage/jackets/grey-jean-jacket.png`,
        price: 90
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imageUrl: `${imagePath}/shoppage/jackets/brown-shearling.png`,
        price: 165
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: `${imagePath}/shoppage/jackets/brown-trench.png`,
        price: 185
      }
    ]
  },
  {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl: `${imagePath}/shoppage/womens/blue-tank.png`,
        price: 25
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: `${imagePath}/shoppage/womens/floral-blouse.png`,
        price: 20
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: `${imagePath}/shoppage/womens/floral-skirt.png`,
        price: 80
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl: `${imagePath}/shoppage/womens/red-polka-dot-dress.png`,
        price: 80
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: `${imagePath}/shoppage/womens/striped-sweater.png`,
        price: 45
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: `${imagePath}/shoppage/womens/yellow-track-suit.png`,
        price: 135
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: `${imagePath}/shoppage/womens/white-vest.png`,
        price: 20
      }
    ]
  },
  {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: `${imagePath}/shoppage/mens/camo-vest.png`,
        price: 325
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: `${imagePath}/shoppage/mens/floral-shirt.png`,
        price: 20
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: `${imagePath}/shoppage/mens/long-sleeve.png`,
        price: 25
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: `${imagePath}/shoppage/mens/pink-shirt.png`,
        price: 25
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: `${imagePath}/shoppage/mens/roll-up-jean-shirt.png`,
        price: 40
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: `${imagePath}/shoppage/mens/polka-dot-shirt.png`,
        price: 25
      }
    ]
  }
];

export default SHOP_DATA;