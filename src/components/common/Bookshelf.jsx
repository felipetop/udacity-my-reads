import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Book from './Book.jsx';

class BookShelf extends Component {
    static propTypes = {
        books: PropTypes.arrayOf(PropTypes.any),
        title: PropTypes.string,
        changeBookShelf: PropTypes.func.isRequired,
    };

    static defaultProps = {
        books: [],
        title: '',
    };

    render() {
        const { books, title, changeBookShelf } = this.props;
        const shelf = books.map(
            book => (
                <Book
                    key={book.id}
                    book={book}
                    onChangeShelf={changeBookShelf}
                />
            ),
        );
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {shelf}
                    </ol>
                </div>
            </div>
        );
    }
}

export default BookShelf;