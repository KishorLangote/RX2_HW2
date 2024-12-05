const initialState = {
    books: [],
     totalBooks: 0, // initially count is 0..
}

const libraryReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_BOOKS":
            return {
                ...state, 
                books: [...state.books, action.payload], // add the new book to the array..
                totalBooks: state.books.length + 1
            }
        case "REMOVE_BOOKS":
            return {
                ...state, 
                books: state.books.filter((book) => book.id !== action.payload.id),
                totalBooks: state.books.length - 1 // decrease book count
            }
      
        default: 
        return state;
    }
}

export default libraryReducer;