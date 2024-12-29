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
  const formatBooks = (books) =>
    books.map((book) => {
      const volumeInfo = book.volumeInfo || {};
      const imageLinks = volumeInfo.imageLinks || {};
  
      const image = imageLinks.large || imageLinks.medium || imageLinks.thumbnail || '/path/to/default-image.jpg';
  
      return {
        id: book.id,
        title: volumeInfo.title || 'No title available',
        author: volumeInfo.authors?.join(', ') || 'No author available',
        image: image,
        description: volumeInfo.description || 'No description available',
        genre: volumeInfo.categories || 'No categories available',
        published_date: volumeInfo.publishedDate || 'No published date available',
        pageCount: volumeInfo.pageCount || 'No page count available',
      };
    });
  

export default BookSection;
