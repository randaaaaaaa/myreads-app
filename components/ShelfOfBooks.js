 import Book from "./Book";

 const ShelfOfBooks= ({branch, book,update, changeShelf}) =>{

 const booksCategory = book.filter((book) => book.shelf === branch)

console.log(book);

    return(
<div className="list-books-content">
  <div>
    <div className="bookshelf">
      <h2 className="bookshelf-title">{branch}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {/* mapping over the books in each shelf */}
          {booksCategory.map((book)=>(
             <Book book = {book} key = {book.id} update={update} changeShelf ={changeShelf}/>

          ))}
        
          </ol>
         
          </div>
          </div>
      </div>
      </div>
    )
}
export default ShelfOfBooks;
