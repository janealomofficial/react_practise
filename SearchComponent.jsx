import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const SearchComponent = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`You searched for: ${query}`);
  };

  return (
    <Form className="d-flex" onSubmit={handleSearch}>
      <FormControl
        type="text"
        placeholder="Search"
        className="me-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="outline-light" type="submit">
        Search
      </Button>
    </Form>
  );
};

export default SearchComponent;