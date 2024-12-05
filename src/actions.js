export const addBook = (book) => {
    return {
        type: "ADD_BOOKS" ,
        payload: book
    }
}

export const removeBook = (bookId) => {
    return {
        type: "REMOVE_BOOKS",
        payload: bookId
    }
}