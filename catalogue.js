/* KadakKart product catalogue
   Source: supplied SKU list and pricing, 20 Aug 2026.
   Amazon URLs and final product photography remain to be supplied/uploaded.
*/
const KADAKKART_CATALOGUE = [
  {
    productCode: 'RNTS-180',
    productName: 'Round Neck T-Shirt',
    category: 'T-Shirts',
    shortCategory: 'Round Neck',
    material: '100% Cotton',
    gsm: '180 GSM',
    finish: 'Biowashed',
    fit: 'Unisex',
    price: 499,
    amazonUrl: null,
    sizes: ['XS','S','M','L','XL'],
    colours: [
      { code:'BLK', name:'Black', hex:'#111111', skus:['RNTS-180-BLK-XS','RNTS-180-BLK-S','RNTS-180-BLK-M','RNTS-180-BLK-L','RNTS-180-BLK-XL'] },
      { code:'WHT', name:'White', hex:'#f5f2eb', skus:['RNTS-180-WHT-XS','RNTS-180-WHT-S','RNTS-180-WHT-M','RNTS-180-WHT-L','RNTS-180-WHT-XL'] },
      { code:'NVY', name:'Navy Blue', hex:'#182a45', skus:['RNTS-180-NVY-XS','RNTS-180-NVY-S','RNTS-180-NVY-M','RNTS-180-NVY-L','RNTS-180-NVY-XL'] },
      { code:'BGE', name:'Beige', hex:'#c9b79a', skus:['RNTS-180-BGE-XS','RNTS-180-BGE-S','RNTS-180-BGE-M','RNTS-180-BGE-L','RNTS-180-BGE-XL'] },
      { code:'MRN', name:'Maroon', hex:'#672f35', skus:['RNTS-180-MRN-XS','RNTS-180-MRN-S','RNTS-180-MRN-M','RNTS-180-MRN-L','RNTS-180-MRN-XL'] },
      { code:'COF', name:'Coffee Brown', hex:'#6b4635', skus:['RNTS-180-COF-XS','RNTS-180-COF-S','RNTS-180-COF-M','RNTS-180-COF-L','RNTS-180-COF-XL'] },
      { code:'LGY', name:'Light Grey', hex:'#b7b7b2', skus:['RNTS-180-LGY-XS','RNTS-180-LGY-S','RNTS-180-LGY-M','RNTS-180-LGY-L','RNTS-180-LGY-XL'] }
    ],
    gallery: ['front','back','left','right','style-men','style-women','fabric','size-chart']
  },
  {
    productCode: 'CROP-180',
    productName: 'Crop Top',
    category: 'Crop Tops',
    shortCategory: 'Crop Top',
    material: '100% Cotton',
    gsm: '180 GSM',
    finish: 'Biowashed',
    fit: 'Regular',
    price: 399,
    amazonUrl: null,
    sizes: ['XS','S','M','L'],
    colours: [
      { code:'PST', name:'Pista', hex:'#b7c89b', skus:['CROP-180-PST-XS','CROP-180-PST-S','CROP-180-PST-M','CROP-180-PST-L'] },
      { code:'WHT', name:'White', hex:'#f5f2eb', skus:['CROP-180-WHT-XS','CROP-180-WHT-S','CROP-180-WHT-M','CROP-180-WHT-L'] },
      { code:'BLK', name:'Black', hex:'#111111', skus:['CROP-180-BLK-XS','CROP-180-BLK-S','CROP-180-BLK-M','CROP-180-BLK-L'] },
      { code:'SND', name:'Sandal', hex:'#c6a789', skus:['CROP-180-SND-XS','CROP-180-SND-S','CROP-180-SND-M','CROP-180-SND-L'] }
    ],
    gallery: ['front','back','left','right','style-women','fabric','size-chart']
  }
];

window.KADAKKART_CATALOGUE = KADAKKART_CATALOGUE;