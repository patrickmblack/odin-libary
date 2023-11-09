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

function addLibraryToPage(){
    myLibrary.forEach(function(book) {
        console.log(book.title)

        const card = document.createElement('div')
        card.classList.add('card')

        const bookTitle = document.createElement('h3')
        bookTitle.textContent = book.title

        const bookAuthor = document.createElement('p')
        bookAuthor.textContent = book.author

        const bookPageNumber = document.createElement('p')
        bookPageNumber.textContent = book.pageNumber

        const bookReadStatus = document.createElement('p')
        if (book.readBool){
            bookReadStatus.textContent = 'Have read!'
        }else{
            bookReadStatus.textContent = 'Have not read.'
        }

        contentContainer.appendChild(card)
        card.appendChild(bookTitle)
        card.appendChild(bookAuthor)
        card.appendChild(bookPageNumber)
        card.appendChild(bookReadStatus)
    })
}

const bookTheHobbit = new Book('The Hobbit','J.R.R. Tolkein', 310, false)
const bookFellowship = new Book('The Fellowship of the Ring','J.R.R. Tolkein', 423, false)
const bookTwoTowers = new Book('The Two Towers','J.R.R. Tolkein', 352,false)
const bookReturnKing = new Book('The Return of the King','J.R.R. Tolkein',416,false)
const bookMartian = new Book('The Martian','Andy Wier', 369, true)



// console.log(bookTheHobbit.info())
// console.log(myLibrary)

addBookToLibrary(bookTheHobbit)
addBookToLibrary(bookFellowship)
addBookToLibrary(bookTwoTowers)
addBookToLibrary(bookReturnKing)
addBookToLibrary(bookMartian)

// console.log(myLibrary)
// console.log(myLibrary[0].title)
addLibraryToPage()

