import { useState } from "react";

const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ]);

  const [newBook, setNewBook] = useState({ title: "", author: "" });

  const handleInputChange = (event) => {
    setNewBook({ ...newBook, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setBooks([...books, newBook]);

    setNewBook({ title: "", author: "" });
  };

  return (
    <>
      <div className="bookshelfDiv">
        <div className="formDiv">
          <h3>Add a Book</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
              required
            />
            <br />
            <label htmlFor="author">Author:</label>
            <input
              id="author"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
              required
            />
            <br />
            <br />
            <button type="submit">Add Book</button>
          </form>
        </div>
        <div className="bookCardsDiv">
          <ul>
            {books.map((book) => (
              <div className="bookCard">
                <h3>{book.title}</h3>
                <p>by {book.author}</p>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Bookshelf;
