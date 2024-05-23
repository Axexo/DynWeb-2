import React from 'react';

function SearchResults({ results, onSelectBook }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Author</th>
          <th>Title</th>
          <th>First Publish Year</th>
        </tr>
      </thead>
      <tbody>
        {results.map((book) => (
          <tr key={book.key} onClick={() => onSelectBook(book)}>
            <td>{book.author_name ? book.author_name[0] : 'Unknown'}</td>
            <td>{book.title}</td>
            <td>{book.first_publish_year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SearchResults;
