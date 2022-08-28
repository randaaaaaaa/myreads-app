// heresending book and changeshelf state from app.js 
const Book = ({book, changeShelf }) => {
 //defing a fnction that lisent for an event and update using changeshelf in app.js to change the shlf of the book
const updateShelf = (event) =>{
  changeShelf(book , event.target.value)
};
console.log(book);
// here is the jsx retured by this component which is the book with it's drop down list 
  return(
    <li>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage:
                     `url( ${book.imageLinks.smallThumbnail}  )` ,
                  }}
                ></div>
                <div className="book-shelf-changer">
                  {/* here i call the updateshelf function i defined on the top  when change happen or the user write and set the shelf it's on in the select and if it it's dosen't a shelf it's on set to none */}

                  <select onChange={updateShelf} value={book.shelf? book.shelf: "none" }  > 
                    <option  value="none" disabled>
                      Move to...
                    </option>
                    <option value="currentlyReading">
                      Currently Reading
                    </option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors}</div>
              {/* <div className="book-authors">{book.shelf? book.shelf:"none"}</div> */}

              
            </div>
          </li>

  );

}
export default Book;