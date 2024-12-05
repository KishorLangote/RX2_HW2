import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import {removeBook } from '../actions'

const LibrarySummary = () => {

    const books = useSelector((state) => state.books) // books list
    const count = useSelector((state) => state.totalBooks) // books count
    console.log(count)

    const dispatch = useDispatch()
    
    const removeBookHandler = (id) => {
        dispatch(removeBook({ id }))
    }
    return (
        <div>
            <h1>Library Summary</h1>
            <p>Total Books: {count}</p>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <p>{book.title} by {book.author} (ISBN: {book.id})</p><button onClick={()=> removeBookHandler(book.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LibrarySummary;