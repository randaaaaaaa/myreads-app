import { Link } from "react-router-dom";
import Book from "./Book";
//reciveing the sates i need to haddel the search quer 
const SearchPage = ({handelInputChange, newbooks, changeShelf,books}) =>{
  // https://www.freecodecamp.org/news/search-and-filter-component-in-reactjs/
console.log(newbooks)

    return(
    <div className="search-books">
    <div className="search-books-bar">
{/* using link from react router documentation to make sure the user can go back to the main page from the search page */}
     <Link to="/" className="close-search">close</Link>
      <div className="search-books-input-wrapper">
       <input
         icon='search'
         type="text"
         placeholder="Search by title, author, or ISBN"
        // using the onchange to lisent for event when the user write any inpute and send to the functio handelInputChange
        onChange={(e) => handelInputChange(e.target.value)}
       />
     </div>
   </div>
   <div className="search-books-results">
   <ol className="books-grid">
    {/* here i am maping over the new book i got from the search and passed it here as a state and setting book the same compenent used in the mainpage  */}
     
      {
         newbooks?.map((newbook) =>
         
         <Book
         book = {newbook}
         key = {Book.id}
        //  key = {Book.id+"search"}
         changeShelf={changeShelf}
        
         />
      )}
      </ol>
   </div>
 </div>
 )

}
export default SearchPage;
