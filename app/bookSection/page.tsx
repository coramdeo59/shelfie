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
    const fetchBooks = async () => {
      if (searchTerm.length < 2) {
        setSearchResults([]);
        return;
      }
  
      try {
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`);
        const data = await res.json();
        setSearchResults(data.items ? formatBooks(data.items) : []);
      } catch (err) {
        setError('Failed to fetch search results. Please try again.');
      }
    };
  
    const debounceTimeout = setTimeout(fetchBooks, 300);
    return () => clearTimeout(debounceTimeout);
  }, [searchTerm]);
  

export default BookSection;
