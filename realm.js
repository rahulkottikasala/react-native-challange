import Realm from 'realm';

class Books extends Realm.Object {}

Books.schema = {
  name: 'books',
  properties: {
    recordID: 'string',
    title: 'string',
    author: 'string',
    details: 'string',
    image: 'string',
  },
  primaryKey: 'recordID',
};

let realm = new Realm({schema: [Books], schemaVersion: 4});

//get books
let getAllBooks = () => {
  return realm.objects('books');
};

//Add methods

let addBook = (_recordID, _title, _author, _details, _image) => {
  realm.write(() => {
    realm.create('books', {
      recordID: _recordID,
      title: _title,
      author: _author,
      details: _details,
      image: _image,
    });
  });
};

//Delete Book

let deleteBook = id => {
  realm.write(() => {
    realm.delete(
      realm.objects('books').filter(userObj => userObj.recordID === id),
    );
  });
};

//Update Book
let updateBook = (id,_title, _author, _details, _image) => {
    realm.write(() => {
        let book = realm
        .objects('books')
        .filter(userObj => userObj.recordID === id)[0];
        console.log(book);
    if (book) {
      book.title = _title != '' ? _title : book.title;
      book.author = _author != '' ? _author : book.author;
      book.details = _details != '' ? _details : book.details;
      book.image = _image != '' ? _image : book.image;
    }
  });
};



export default realm;

export {getAllBooks, addBook, deleteBook, updateBook};
