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
    fridge: {
      id: 1,
      name: 'Otay Mesa Community Fridge & Garden',
      address: '3794 Gatty Street, San Diego, CA, 92154',
      coordinates: [32.586210, -117.051809],
      active: true
    }
  },
  {
    fridge: {
      id: 2,
      name: 'National City Community Fridge',
      address: '635 E. 7th Street, National City, CA, zip',
      coordinates: [32.678880, -117.100012],
      active: true
    }
  },
  {
    fridge: {
      id: 3,
      name: 'Normal Heights Community Fridge',
      address: '4650 Mansfield St, San Diego, CA, zip',
      coordinates: [32.762899, -117.118234],
      active: true
    }
  },
  {
    fridge: {
      id: 4,
      name: 'City Heights Community Fridge',
      address: '3772 Wilson Ave, San Diego, CA, 92104',
      coordinates: [32.747492, -117.117233],
      active: false
    }
  },
  {
    fridge: {
      id: 5,
      name: 'Imperial Beach Comumunity Fridge & Garden',
      address: '828 5th Street, Imperial Beach, CA, 91932',
      coordinates: [32.581613, -117.122628],
      active: true
    }
  }
];

module.exports.data = fridges;