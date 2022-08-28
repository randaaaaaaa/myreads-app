import React from "react";
import { Link } from "react-router-dom";
import ShelfOfBooks from "./ShelfOfBooks";
//reciveing all the state i need from other components 
const MainList  = ({book,update, changeShelf}) =>{

return (
<div className="list-books">

<div className="list-books-title">
  <h1>MyReads</h1>
</div>
<div className="Llis-books-content">
  {/* using the state i recived to set the book and shelf of it in the component of shelf of books */}
  <ShelfOfBooks branch="currentlyReading" book= {book} update={update} changeShelf ={changeShelf}/>
  <ShelfOfBooks branch="wantToRead" book= {book} update={update} changeShelf ={changeShelf} />
  <ShelfOfBooks branch="read" book= {book} update={update} changeShelf ={changeShelf}/>
</div>

 <div className="open-search">
  {/* linking to the search page to navigate  */}
 <Link to="/searchPage">Add a book</Link>

 </div>
</div>

)
}

export default MainList;