/* KadakKart product catalogue
   Source: supplied SKU list, 20 Aug 2026.
   Prices, Amazon URLs and product photography are intentionally left blank until supplied.
*/
const KADAKKART_CATALOGUE = [
  {
    productCode: 'RNTS-180',
    productName: 'Round Neck T-Shirt',
    category: 'T-Shirts',
    material: '100% Cotton',
    gsm: '180 GSM',
    finish: 'Biowashed',
    colours: [
      { code:'BLK', name:'Black', skus:['RNTS-180-BLK-XS','RNTS-180-BLK-S','RNTS-180-BLK-M','RNTS-180-BLK-L','RNTS-180-BLK-XL'] },
      { code:'WHT', name:'White', skus:['RNTS-180-WHT-XS','RNTS-180-WHT-S','RNTS-180-WHT-M','RNTS-180-WHT-L','RNTS-180-WHT-XL'] },
      { code:'NVY', name:'Navy Blue', skus:['RNTS-180-NVY-XS','RNTS-180-NVY-S','RNTS-180-NVY-M','RNTS-180-NVY-L','RNTS-180-NVY-XL'] },
      { code:'BGE', name:'Beige', skus:['RNTS-180-BGE-XS','RNTS-180-BGE-S','RNTS-180-BGE-M','RNTS-180-BGE-L','RNTS-180-BGE-XL'] },
      { code:'MRN', name:'Maroon', skus:['RNTS-180-MRN-XS','RNTS-180-MRN-S','RNTS-180-MRN-M','RNTS-180-MRN-L','RNTS-180-MRN-XL'] },
      { code:'COF', name:'Coffee Brown', skus:['RNTS-180-COF-XS','RNTS-180-COF-S','RNTS-180-COF-M','RNTS-180-COF-L','RNTS-180-COF-XL'] },
      { code:'LGY', name:'Light Grey', skus:['RNTS-180-LGY-XS','RNTS-180-LGY-S','RNTS-180-LGY-M','RNTS-180-LGY-L','RNTS-180-LGY-XL'] }
    ],
    sizes:['XS','S','M','L','XL'],
    price:null,
    amazonUrl:null,
    images:[]
  },
  {
    productCode: 'CROP-180',
    productName: 'Crop Top',
    category: 'Crop Tops',
    material: '100% Cotton',
    gsm: '180 GSM',
    finish: 'Biowashed',
    colours: [
      { code:'PST', name:'Pista', skus:['CROP-180-PST-XS','CROP-180-PST-S','CROP-180-PST-M','CROP-180-PST-L'] },
      { code:'WHT', name:'White', skus:['CROP-180-WHT-XS','CROP-180-WHT-S','CROP-180-WHT-M','CROP-180-WHT-L'] },
      { code:'BLK', name:'Black', skus:['CROP-180-BLK-XS','CROP-180-BLK-S','CROP-180-BLK-M','CROP-180-BLK-L'] },
      { code:'SND', name:'Sandal', skus:['CROP-180-SND-XS','CROP-180-SND-S','CROP-180-SND-M','CROP-180-SND-L'] }
    ],
    sizes:['XS','S','M','L'],
    price:null,
    amazonUrl:null,
    images:[]
  }
];

window.KADAKKART_CATALOGUE = KADAKKART_CATALOGUE;
