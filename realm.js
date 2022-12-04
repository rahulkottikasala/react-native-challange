import Realm from 'realm';

class CartData extends Realm.Object {}

CartData.schema = {
  name: 'cart',
  properties: {
    recordId: 'string',
    prName: 'string',
    imageUrl: 'string',
    unitPrice: 'int',
    specialPrice: 'int',
    count: 'int',
  },
  PrimaryKey: 'recordId',
};
let realm = new Realm({ schema: [CartData], schemaVersion: 4 });

//get cart object

let getAllCartItems = () => {
  return realm.objects('cart');
};

//add Method

let addToCartData = (
  _recordId,
  _prName,
  _imageUrl,
  _unitPrice,
  _specialPrice,
  _count,
) => {
  realm.write(() => {
    realm.create('cart', {
      recordId: _recordId,
      prName: _prName,
      imageUrl: _imageUrl,
      unitPrice: _unitPrice,
      specialPrice: _specialPrice,
      count: _count,
    });
  });
};

//update Method

let updateCartData = (
  _recordId,
  _prName,
  _imageUrl,
  _unitPrice,
  _specialPrice,
  _count,
) => {
  realm.write(() => {
    let cart = realm
      .objects('cart')
      .filter(cartObj => cartObj.recordId === _recordId);

    if (cart) {
      cart[0].count = _count && _count === '' ? Cart[0].count : _count;
    }
  });
};

//remove item  from cart

let removeFromCart = (_recordId) => {
  realm.write(() => {
    realm.delete(
      realm.objects('cart').filter(cartObj => cartObj.recordId === _recordId),
    );
  });
};


//empty cart

let emptyCartList = () => {
  realm.write(() => {
    realm.delete(
      realm.objects('cart')
    )
  })
}
export default realm;

export { getAllCartItems, addToCartData, updateCartData, removeFromCart, emptyCartList };
