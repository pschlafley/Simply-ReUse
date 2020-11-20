const Items = require('../models/Items');
const sequelize = require('../config/connection');
const itemData = [
  {
    item_name: 'Automotive Bumpers',
     category_id: 1
  },
  {
    item_name: 'Oil Filters',
     category_id: 1
  },
  {
    item_name: 'Lead Acid (Pb) Batteries',
     category_id: 1
  },
  {
    item_name: 'Used Motor Oil',
     category_id: 1
  },
  {
    item_name: 'Antifreeze',
     category_id: 1
  },
  {
    item_name: 'Brake Fluid',
     category_id: 1
  },
  {
    item_name: 'Catalytic Converters',
     category_id: 1
  },
  {
    item_name: 'Radiators',
     category_id: 1
  },
  {
    item_name: 'Gasoline and unwanted Fuels',
     category_id: 1
  },
  {
    item_name: 'Motors',
     category_id: 1
  },
  {
    item_name: 'ABS Plastic',
     category_id: 2
  },
  {
    item_name: 'AC Power Plugs',
     category_id: 2
  },
  {
    item_name: 'Broken Asphalt/Aggregate',
     category_id: 2
  },
  {
    item_name: 'Ceiling Tiles',
     category_id: 2
  },
  {
    item_name: 'Empty Paint Cans',
     category_id: 2
  },
  {
    item_name: 'Lumber',
     category_id: 2
  },
  {
    item_name: 'Paint Thinner',
     category_id: 2
  },
  {
    item_name: 'Sand',
     category_id: 2
  },
  {
    item_name: 'Soil',
     category_id: 2
  },
  {
    item_name: 'Carpet',
     category_id: 2
  },
  {
    item_name: 'Amps',
     category_id: 3
  },
  {
    item_name: 'Air Conditioners',
     category_id: 3
  },
  {
    item_name: 'Calculator',
     category_id: 3
  },
  {
    item_name: 'Cell Phones',
     category_id: 3
  },
  {
    item_name: 'Electric Razors',
     category_id: 3
  },
  {
    item_name: 'Floppy Disks',
     category_id: 3
  },
  {
    item_name: 'Hard Drives',
     category_id: 3
  },
  {
    item_name: 'Holiday Lights',
     category_id: 3
  },
  {
    item_name: 'Incandescent Light Bulbs',
     category_id: 3
  },
  {
    item_name: 'GPS Units',
     category_id: 3
  },
  {
    item_name: 'Blue Glass',
     category_id: 4
  },
  {
    item_name: 'Green Glass',
     category_id: 4
  },
  {
    item_name: 'Brown Glass',
     category_id: 4
  },
  {
    item_name: 'Clear Glass',
     category_id: 4
  },
  {
    item_name: 'Other Glass',
     category_id: 4
  },
  {
    item_name: 'Aerosol Spray Cans',
     category_id: 5
  },
  {
    item_name: 'Bike Parts',
     category_id: 5
  },
  {
    item_name: 'High-Temp Alloys',
     category_id: 5
  },
  {
    item_name: 'Large Household Appliances',
     category_id: 5
  },
  {
    item_name: 'Portable Metal Sewing Machines',
     category_id: 5
  },
  {
    item_name: 'Aluminum',
     category_id: 5
  },
  {
    item_name: 'Clothes Hangers(Metal)',
     category_id: 5
  },
  {
    item_name: 'Jewelry',
     category_id: 5
  },
  {
    item_name: 'Non-ferrous(Copper/Brass/Tin)',
     category_id: 5
  },
  {
    item_name: 'Propane Tanks',
     category_id: 5
  },
  {
    item_name: 'Drink Boxes',
     category_id: 6
  },
  {
    item_name: 'Cardboard',
     category_id: 6
  },
  {
    item_name: 'Magazines',
     category_id: 6
  },
  {
    item_name: 'Office Paper',
     category_id: 6
  },
  {
    item_name: 'Paper Egg Carton',
     category_id: 6
  },
  {
    item_name: 'Phone books',
     category_id: 6
  },
  {
    item_name: 'Soiled Paper',
     category_id: 6
  },
  {
    item_name: 'Book Recycling',
     category_id: 6
  },
  {
    item_name: 'Catalogs',
     category_id: 6
  },
  {
    item_name: 'Greeting Cards',
     category_id: 6
  },
  {
    item_name: 'Plastic Bottle',
     category_id: 7
  },
  {
    item_name: '#6 Plastic Cups',
     category_id: 7
  },
  {
    item_name: 'CD/Blu-ray/UHD Cases',
     category_id: 7
  },
  {
    item_name: 'Cleaner Packaging',
     category_id: 7
  },
  {
    item_name: 'Diaper Packaging',
     category_id: 7
  },
  {
    item_name: 'Food Storage Bags',
     category_id: 7
  },
  {
    item_name: 'Glue Bottles & Glue Sticks',
     category_id: 7
  },
  {
    item_name: 'Latex Foam Pillows',
     category_id: 7
  },
  {
    item_name: 'Medication Containers',
     category_id: 7
  },
  {
    item_name: 'Personal Care Packaging',
     category_id: 7
  },
  {
    item_name: 'Degreaser',
     category_id: 8
  },
  {
    item_name: 'Asbestos',
     category_id: 8
  },
  {
    item_name: 'Fire Extinguisher',
     category_id: 8
  },
  {
    item_name: 'Household Cleaners',
     category_id: 8
  },
  {
    item_name: 'Medical Waste',
     category_id: 8
  },
  {
    item_name: 'Nail Polish',
     category_id: 8
  },
  {
    item_name: 'Outdated Medications',
     category_id: 8
  },
  {
    item_name: 'Photography Chemicals',
     category_id: 8
  },
  {
    item_name: 'Solvents',
     category_id: 8
  },
  {
    item_name: 'Compact Fluorescent Lights',
     category_id: 8
  },
  {
    item_name: 'Hay',
     category_id: 9
  },
  {
    item_name: 'Brush',
     category_id: 9
  },
  {
    item_name: 'Food Scraps',
     category_id: 9
  },
  {
    item_name: 'Tree Trimmings',
     category_id: 9
  },
  {
    item_name: 'Yard Waste',
     category_id: 9
  },
  {
    item_name: 'Compostable Plastic',
     category_id: 9
  },
  {
    item_name: 'Grass Clippings',
     category_id: 9
  },
  {
    item_name: 'Leaves',
     category_id: 9
  },
  {
    item_name: 'Weeds',
     category_id: 9
  },
  {
    item_name: 'Hair',
     category_id: 9
  },
  {
    item_name: 'Baby Products',
     category_id: 10
  },
  {
    item_name: 'Bike Accessories',
     category_id: 10
  },
  {
    item_name: 'Binders',
     category_id: 10
  },
  {
    item_name: 'Box Springs',
     category_id: 10
  },
  {
    item_name: 'Candy Wrappers',
     category_id: 10
  },
  {
    item_name: 'Chip Bags',
     category_id: 10
  },
  {
    item_name: 'Denim',
     category_id: 10
  },
  {
    item_name: 'Furniture',
     category_id: 10
  },
  {
    item_name: 'Binoculars',
     category_id: 10
  },
  {
    item_name: 'Bras',
     category_id: 10
  },
  {
    item_name: 'Christmas Trees',
     category_id: 11
  },
  {
    item_name: 'Gift Bags',
     category_id: 11
  },
  {
    item_name: 'Energy Bar Wrappers',
     category_id: 12
  },
  {
    item_name: 'Naked Grape Packaging',
     category_id: 12
  },
  {
    item_name: 'Cookie & Cracker Wrappers',
     category_id: 12
  },
  {
    item_name: 'Snack Bags',
     category_id: 12
  },
  {
    item_name: 'TASSIMO Packaging',
     category_id: 12
  },
  {
    item_name: 'GO Box',
     category_id: 12
  }
];
sequelize
  .sync({ force: true })
  .then(() => {
    return Items.bulkCreate(itemData);
  })
  .then(dbItemData => {
    console.log('Items seeded!');
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
});