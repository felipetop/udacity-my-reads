import React, { Component } from 'react';
import Bookshelf from '../common/Bookshelf.jsx';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

class BookList extends Component {
    static propTypes = {
        myBooks: PropTypes.arrayOf(PropTypes.any),
    }
    
    static defaultProps = {
        myBooks: [],
    }
    
    filterBooks = (shelf) => {
        const { myBooks } = this.props;
        return myBooks.filter(book => (book.shelf === shelf));
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <Bookshelf books={this.filterBooks('currentlyReading')} title="Currently Reading"/>
                    <Bookshelf books={this.filterBooks('wantToRead')} title="Want to Read"/>
                    <Bookshelf books={this.filterBooks('read')} title="Read"/>  
                </div>
                <div className="open-search">
                    <Link to="/search">
                        Add a book
                    </Link>
                </div>
            </div>
        );
    }
}

export default BookList;