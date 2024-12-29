'use client';
import React, { useState, useEffect } from 'react';
import BookCard from '../components/common/bookCard';

const BookSection = () => {
  const [activeCategory, setActiveCategory] = useState<'popular' | 'mostRead'>('popular');
  const [activeGenre, setActiveGenre] = useState('Fiction');
  const [booksData, setBooksData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  return (
    <section className="pb-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div>BookSection Component</div>
      </div>
    </section>
  );
};

useEffect(() => {
  const loadBooks = async () => {
    setIsLoading(true);
    setError('');
    try {
      const { books } = await fetchBooks(activeCategory, activeGenre);
      setBooksData(books);
    } catch (err) {
      setError('Failed to load books. Please try again.');
    } finally {
      setIsLoading(false);
    }
    setVisibleCount(5);
  };
  loadBooks();
}, [activeCategory, activeGenre]);

export default BookSection;
