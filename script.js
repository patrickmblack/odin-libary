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

const bookTheHobbit = new Book('The Hobbit','J.R.R. Tolkein', 150, true)

console.log(bookTheHobbit.info())