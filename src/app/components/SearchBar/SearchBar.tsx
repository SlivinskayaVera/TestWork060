'use client';

import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [city, setCity] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col xs='auto'>
          <Form.Control
            type='text'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder='Search for city'
            className='mr-md-2'
          />
        </Col>
        <Col xs='auto'>
          <Button type='submit' variant='light'>
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBar;
