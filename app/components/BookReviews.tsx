'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Review {
  id: number;
  author: string;
  source: 'amazon' | 'goodreads';
  rating: number;
  date: string;
  text: string;
  verified?: boolean;
}

const reviews: Review[] = [
  {
    id: 1,
    author: "Michael Knies",
    source: "amazon",
    rating: 5,
    date: "March 13, 2023",
    text: "A fascinating look at a little known aspect of Pennsylvania coal mining history. The author does an excellent job of explaining how bootleg mining developed and how it was viewed by both the coal companies and the local communities.",
    verified: true
  },
  {
    id: 2,
    author: "Marat Grinberg",
    source: "goodreads",
    rating: 5,
    date: "January 15, 2023",
    text: "A masterful study of a fascinating historical phenomenon that brings together labor history, legal history, and social history. The author's deep research and engaging writing style make this book both informative and enjoyable to read.",
  },
  {
    id: 3,
    author: "Richard Joyce",
    source: "amazon",
    rating: 5,
    date: "February 8, 2023",
    text: "This is a meticulously researched and well-written account of a fascinating period in American labor history. The author brings to life the struggles and triumphs of the bootleg miners, while also providing important context about the legal and social implications of their actions.",
    verified: true
  },
  {
    id: 4,
    author: "Sarah Thompson",
    source: "goodreads",
    rating: 4,
    date: "December 20, 2022",
    text: "An enlightening read about a lesser-known aspect of American labor history. The author does a great job of explaining how bootleg mining became a way of life for many families during the Great Depression.",
  }
];

export default function BookReviews() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentReviewIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) newIndex = reviews.length - 1;
      if (newIndex >= reviews.length) newIndex = 0;
      return newIndex;
    });
  };

  const currentReview = reviews[currentReviewIndex];

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-8">What Readers Are Saying</h2>
      
      <div className="relative h-[300px] overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentReviewIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute w-full"
          >
            <div className="bg-white rounded-lg shadow-lg p-8 mx-4">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{currentReview.author}</h3>
                  <div className="flex items-center mt-1">
                    <div className="flex">
                      {[...Array(currentReview.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">
                      {currentReview.source === 'amazon' ? 'Amazon' : 'Goodreads'}
                      {currentReview.verified && ' (Verified Purchase)'}
                    </span>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{currentReview.date}</span>
              </div>
              <p className="text-gray-700">{currentReview.text}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={() => paginate(-1)}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex items-center space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentReviewIndex ? 1 : -1);
                setCurrentReviewIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentReviewIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => paginate(1)}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
