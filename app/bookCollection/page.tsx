'use client';

import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

interface Book {
  book_id: number;
  title: string;
  author: string;
  image: string;
  status: 'reading' | 'finished';
}

const BookCollection = () => {
  const [readingList, setReadingList] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [dropdownVisible, setDropdownVisible] = useState<number | null>(null);
  const [filter, setFilter] = useState<'All' | 'Reading' | 'Finished'>('All');
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchReadingList = async () => {
      try {
        setLoading(true);
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          const { data, error } = await supabase
            .from('reading_list')
            .select('*')
            .eq('user_id', user.id);

          if (error) {
            console.error('Error fetching reading list:', error);
          } else {
            setReadingList(data || []);
          }
        }
      } catch (error) {
        console.error('An error occurred while fetching the reading list:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReadingList();
  }, []);