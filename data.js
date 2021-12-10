/*
  Fridge Name
  address
  lat, lng
  google lat, lng

  Otay Mesa Community Fridge & Garden
  3794 Gatty Street, San Diego, CA, 92154
  32.586100, -117.052050
  32.58621037970618, -117.05180958173156

  National City Community Fridge
  635 E. 7th Street, National City, CA, zip
  32.678550, -117.100770
  32.67888094787553, -117.10001275103825

  Normal Heights Community Fridge
  4650 Mansfield St, San Diego, CA, zip
  32.762590, -117.118700
  32.76289915491883, -117.11823456452704

  City Heights Community Fridge
  3772 Wilson Ave, San Diego, CA, 92104
  32.747330, -117.117200
  32.74749230635821, -117.11723351427257

  Imperial Beach Comumunity Fridge & Garden
  828 5th Street, Imperial Beach, CA, 91932
  32.58161324655833, -117.12262851613151
*/

const fridges = [
  {
    id: 1,
    name: 'Otay Mesa Community Fridge & Garden',
    address: '3794 Gatty Street, San Diego, CA, 92154',
    coordinates: [32.586210, -117.051809],
    active: true,
    note: '',
    updatedAt: 1639083550916
  },
  {
    id: 2,
    name: 'National City Community Fridge',
    address: '635 E. 7th Street, National City, CA, 91950',
    coordinates: [32.678880, -117.100012],
    active: true,
    note: "We've noticed water bottles tend to go quickly so if you're able to drop them off, it will be greatly appreciated!",
    updatedAt: 1639083690916
  },
  {
    id: 3,
    name: 'Normal Heights Community Fridge',
    address: '4650 Mansfield St, San Diego, CA, 92116',
    coordinates: [32.762899, -117.118234],
    active: true,
    note: '',
    updatedAt: 163903690916
  },
  {
    id: 4,
    name: 'City Heights Community Fridge',
    address: '3772 Wilson Ave, San Diego, CA, 92104',
    coordinates: [32.747492, -117.117233],
    active: false,
    note: '',
    updatedAt: 1639082690916
  },
  {
    id: 5,
    name: 'Imperial Beach Comumunity Fridge & Garden',
    address: '828 5th Street, Imperial Beach, CA, 91932',
    coordinates: [32.581613, -117.122628],
    active: true,
    note: '',
    updatedAt: 1639083680916
    }
];

const inventory = [
  {
    id: 1,
    fridgeId: 1,
    item: 'bananas',
    amount: '5',
    needsDeletion: false
  },
  {
    id: 2,
    fridgeId: 1,
    item: 'carrots',
    amount: '3 bags',
    needsDeletion: false
  },
  {
    id: 3,
    fridgeId: 2,
    item: 'whole grain bread',
    amount: '4 loaves',
    needsDeletion: false
  },
  {
    id: 4,
    fridgeId: 2,
    item: 'frozen mixed vegetables',
    amount: '8 bags',
    needsDeletion: false
  },
  {
    id: 5,
    fridgeId: 3,
    item: 'spinach',
    amount: '2 bushels',
    needsDeletion: false
  },
  {
    id: 6,
    fridgeId: 5,
    item: 'salad kit',
    amount: '1',
    needsDeletion: false
  },
  {
    id: 7,
    fridgeId: 5,
    item: 'oranges',
    amount: '15',
    needsDeletion: false
  },
  {
    id: 8,
    fridgeId: 5,
    item: 'water bottles',
    amount: '24',
    needsDeletion: false
  },
  {
    id: 9,
    fridgeId: 2,
    item: 'bag of baby carrots',
    amount: '4 bags',
    needsDeletion: false
  },
  {
    id: 10,
    fridgeId: 2,
    item: '2% milk gallon',
    amount: '1',
    needsDeletion: false
  },
  {
    id: 11,
    fridgeId: 2,
    item: 'single serve yogurt cups',
    amount: '12 count',
    needsDeletion: false
  },
  {
    id: 12,
    fridgeId: 2,
    item: 'grapes',
    amount: '2 bags',
    needsDeletion: false
  },
  {
    id: 13,
    fridgeId: 2,
    item: 'orange juice',
    amount: 'two 1 gallon cartons',
    needsDeletion: false
  },
  {
    id: 14,
    fridgeId: 2,
    item: 'fresh strawberries',
    amount: '5 boxes',
    needsDeletion: false
  },
]

module.exports.data = fridges;
module.exports.inventory = inventory;