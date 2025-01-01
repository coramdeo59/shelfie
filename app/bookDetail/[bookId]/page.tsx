'use client';
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

  return (
    <div className="max-h-screen flex items-center font-mono justify-center p-6 w-full">
      <div>Book Detail Component</div>
    </div>
  );
};

export default BookDetail;