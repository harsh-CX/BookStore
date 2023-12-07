import React from 'react';
import Image from 'next/image';
import Book1 from '../../images/Book1.jpg';
import Book2 from '../../images/Book2.jpg';
import Book3 from '../../images/Book3.jpg';
import Book4 from '../../images/Book4.jpg';
import Book5 from '../../images/Book5.jpeg';
import Book6 from '../../images/Book6.jpg';
import Book7 from '../../images/Book7.jpg';
import Book8 from '../../images/Book8.jpg';
import Book9 from '../../images/Book9.jpeg';
import Book10 from '../../images/Book10.jpeg';

export const bookData = [
    {
      title: "The Book of Names",
      image: Book1,
      price: '$19.99',
      quantity: 50,
      storeAddress: '123 Main Street, Cityville',
      isbnNumber: '978-1-1234-5678-9',
    },
    {
      title: 'The English baby Name ',
      image: Book2,
      price: '$24.99',
      quantity: 30,
      storeAddress: '456 Oak Avenue, Townsville',
      isbnNumber: '978-2-3456-7890-1',
    },
    {
      title: 'The Mystery',
      image: Book3,
      price: '$15.99',
      quantity: 20,
      storeAddress: '789 Pine Lane, Villagetown',
      isbnNumber: '978-3-4567-8901-2',
    },
    {
      title: 'Adventure Awaits',
      image: Book4,
      price: '$29.99',
      quantity: 40,
      storeAddress: '101 Forest Street, Natureville',
      isbnNumber: '978-4-5678-9012-3',
    },
    {
      title: 'Journey to the Stars',
      image: Book5,
      price: '$22.50',
      quantity: 25,
      storeAddress: '222 Galaxy Road, Star City',
      isbnNumber: '978-5-6789-0123-4',
    },
    {
      title: 'Underwater Wonders',
      image: Book6,
      price: '$18.75',
      quantity: 35,
      storeAddress: '456 Ocean Avenue, Atlantis',
      isbnNumber: '978-6-7890-1234-5',
    },
    {
      title: 'Time Traveler’s Journal',
      image: Book7,
      price: '$32.99',
      quantity: 15,
      storeAddress: '789 Time Lane, Temporal City',
      isbnNumber: '978-7-8901-2345-6',
    },
    {
      title: 'The Enchanted Forest',
      image: Book8,
      price: '$26.50',
      quantity: 28,
      storeAddress: '14 Street-ground ,Townhall',
      isbnNumber: '978-8-9012-3456-7',
    },
    {
      title: 'Robots of the Future',
      image: Book9,
      price: '$21.25',
      quantity: 42,
      storeAddress: '789 Tech Avenue, Robotropolis',
      isbnNumber: '978-9-0123-4567-8',
    },
    {
      title: 'Secrets of the Pyramids',
      image: Book10,
      price: '$27.99',
      quantity: 18,
      storeAddress: '456 Pyramid Road, Ancient City',
      isbnNumber: '978-10-1234-5678-9',
    },
    {
        title: 'The Enchanted Forest',
        image: Book8,
        price: '$26.50',
        quantity: 18,
        storeAddress: '123 Magic Street, Wonderland',
        isbnNumber: '978-8-9012-3456-7',
      },
      {
        title: 'The English baby Name ',
        image: Book2,
        price: '$24.99',
        quantity: 24,
        storeAddress: '563-B Park  Avenue',
        isbnNumber: '978-2-3456-7890-1',
      },
    
  ];

export const ImgComponent = () => {

  return (
    <div className="flex flex-wrap -mx-4 mt-5 p-5">
  {bookData.map((book, index) => (
    <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8 ">
      <div className="border border-gray-300 p-4 rounded-md transition-transform transform hover:scale-105">
        <Image
          src={book.image}
          alt={`${book.title} cover`}
          width={100}
          height={100}
          className="rounded-md"
        />
        <h2 className="text-xl font-semibold mt-2">{book.title}</h2>
        <p className="text-black font-semibold ">Price: {book.price}</p>
        {/* <p className="text-black ">Quantity: {book.quantity}</p>
        <p className="text-black ">Store Address: {book.storeAddress}</p>
        <p className="text-black ">ISBN Number: {book.isbnNumber}</p> */}
      </div>
    </div>
  ))}
</div>
  );
};

