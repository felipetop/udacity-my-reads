import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css';
import Booklist from './components/pages/BookList';
import Booksearch from './components/pages/BookSearch';

class BooksApp extends React.Component {
  state = {
    myBooks: []
  }

  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({
          myBooks: books,
        });
      });
  };

  changeBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.fetchBooks();
    });
  };

  render() {
    const { myBooks } = this.state;
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route path="/" exact render={() => <Booklist myBooks={myBooks} changeBookShelf={this.changeBookShelf} title="MyReads" />} />
            <Route path="/search" render={() => <Booksearch myBooks={myBooks} changeBookShelf={this.changeBookShelf} />} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
