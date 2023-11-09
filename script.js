const myLibrary = [] // Array of book objects

const contentContainer = document.querySelector('#content')

function Book(title, author, pageNumber, readBool){
    this.title = title;
    this.author = author;
    this.pageNumber = pageNumber;
    this.readBool = readBool;

    this.info = function() {
        if(readBool){
            return `'${title}', by ${author}. ${pageNumber} pages. Has been read.`
        }else{
            return `'${title}', by ${author}. ${pageNumber} pages. Has not been read yet.`
        }
    }
}

function addBookToLibrary(book){
    if (myLibrary.includes(book) === false){
        myLibrary.push(book)
    }else{
        console.log("Book exists")
    }
}

const bookTheHobbit = new Book('The Hobbit','J.R.R. Tolkein', 310, false)
const bookFellowship = new Book('The Fellowship of the Ring','J.R.R. Tolkein', 423, false)
const bookTwoTowers = new Book('The Two Towers','J.R.R. Tolkein',352,false)
const bookReturnKing = new Book('The Return of the King','J.R.R. Tolkein',416,false)
const bookMartian = new Book('The Martian','Andy Wier',369, true)



// console.log(bookTheHobbit.info())
console.log(myLibrary)

addBookToLibrary(bookTheHobbit)
addBookToLibrary(bookFellowship)
addBookToLibrary(bookTwoTowers)
addBookToLibrary(bookReturnKing)
addBookToLibrary(bookMartian)

console.log(myLibrary)