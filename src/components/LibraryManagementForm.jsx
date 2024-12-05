import { useState } from 'react'
import { useDispatch } from "react-redux"
import { addBook } from '../actions'

const LibraryManagementForm = () => {

    const dispatch = useDispatch()

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [isbn, setIsbn] = useState()
    

    const clickHandler = () => {

        if(title && author && isbn) {
            const newBook = {
                title, author, id: isbn
            }
            // dispatch({ type: "ADD_BOOKS", payload: newBook})

            dispatch(addBook(newBook))
            
            setTitle("")
            setAuthor("")
            setIsbn("")
        }

    }
    return (
        <div>
            <h1>Library Management</h1>
            <input type="text" placeholder="Title" onChange={(event) => setTitle(event.target.value)} value={title} />
            <input type="text" placeholder="Author" onChange={(event) => setAuthor(event.target.value)} value={author} />
            <input type="number" placeholder="ISBN" onChange={(event) => setIsbn(event.target.value)} value={isbn} />
            <button onClick={clickHandler}>Add Book</button>
        </div>
    )
}

export default LibraryManagementForm;