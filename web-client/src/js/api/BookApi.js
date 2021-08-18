export class BookApi {

    saveBook(book){
        return fetch("/books",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: book
            }
        )
    }

    getBooks(){
        return fetch("/books")
            .then(response => response.json())
    }

}