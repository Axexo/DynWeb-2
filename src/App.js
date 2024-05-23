import React, { useState } from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import BookDetails from './components/BookDetails';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [totalResults, setTotalResults] = useState(0);

  const handleSearch = (results, total) => {
    setSearchResults(results.slice(0, 30));
    setTotalResults(total);
  };

  const handleSelectBook = (book) => {
    setSelectedBook(book);
  };

  const handleBackToResults = () => {
    setSelectedBook(null);
  };

  return (
    <div className="App">
      <Header title="Open Library Sökapplikation" />
      {selectedBook ? (
        <BookDetails book={selectedBook} onBack={handleBackToResults} />
      ) : (
        <>
          <SearchForm onSearch={handleSearch} />
          <p>Total found: {totalResults}</p>
          <SearchResults
            results={searchResults}
            onSelectBook={handleSelectBook}
          />
        </>
      )}
    </div>
  );
}

export default App;
