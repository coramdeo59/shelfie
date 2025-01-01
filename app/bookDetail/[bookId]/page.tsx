'use client';
import { supabase } from '@/lib/supabaseClient';
import { useEffect, useState } from 'react';
import { FaBookOpen, FaCheckCircle, FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image';
import myImage from '/home/pom/shelfie/shelfie/public/images/ai.png';
import WaveAnimation from '@/app/components/animations/waveAnimation';

const BookDetail = ({ params }) => {
  const { bookId } = params;
  const [bookDetails, setBookDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState('');
  const [message, setMessage] = useState('');
  const [summaryLength, setSummaryLength] = useState('short');
  const [showSummary, setShowSummary] = useState(false);



const BookDetail = ({ params }) => {
    
  
    const updateBookStatus = async (status) => {
      if (!bookDetails?.book_id) return;
      setLoading(true); 
      try {
        const { error } = await supabase
          .from('reading_list')
          .update({ status })
          .eq('book_id', bookDetails.book_id);
  
        if (error) {
          console.error('Error updating book status:', error);
          setMessage('Failed to update book status.'); 
        } else {
          setMessage(`Book marked as ${status}.`); 
          fetchBookDetails(); 
        }
      } catch (error) {
        console.error('Error occurred while updating book status:', error);
        setMessage('An error occurred while updating the status.'); 
      } finally {
        setLoading(false); 
      }
    };
  
    return (
      <div className="max-h-screen flex items-center font-mono justify-center p-6 w-full">
        <div>Book Detail Component</div>
      </div>
    );
  };
};

export default BookDetail;