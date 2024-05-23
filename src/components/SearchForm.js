import React, { useState } from 'react';

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('title');

  const handleSearch = async () => {
    let uri = `https://openlibrary.org/search.json?${category}=${query}`;
    const response = await fetch(uri);
    const data = await response.json();
    onSearch(data.docs, data.numFound);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="subject">Subject</option>
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchForm;
