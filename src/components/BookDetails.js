import React from 'react';

function BookDetails({ book, onBack }) {
  return (
    <div>
      <h2>{book.title}</h2>
      <p>
        <strong>Authors:</strong>{' '}
        {book.author_name ? book.author_name.join(', ') : 'Unknown'}
      </p>
      <p>
        <strong>Publishers:</strong>{' '}
        {book.publisher ? book.publisher.join(', ') : 'Unknown'}
      </p>
      <p>
        <strong>Languages:</strong>{' '}
        {book.language ? book.language.join(', ') : 'Unknown'}
      </p>
      <p>
        <strong>Subjects:</strong>{' '}
        {book.subject ? book.subject.join(', ') : 'Unknown'}
      </p>
      {book.cover_i && (
        <img
          src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
          alt={book.title}
        />
      )}
      <button onClick={onBack}>Back to Results</button>
    </div>
  );
}

export default BookDetails;
