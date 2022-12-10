import React, { useEffect, useState } from 'react';
import NewBook from './NewBook';

const NewBooks = () => {
  const [newBooks, setBewBooks] = useState([]);

  useEffect(() => {
    fetch("https://top-gear-perform-server.vercel.app/new-ebook")
      .then((res) => res.json())
      .then((data) => setBewBooks(data));
  }, []);
  return (
    <div>
      <section>
        <h1 className="text-3xl font-bold text-center m-16">Our Newly Launched Iterate Faster Series</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-20 lg:mx-20 lg:px-24 mx-8 px-5">
          {newBooks.map((newbook) => (
            <NewBook
              key={newbook._id}
              newbook={newbook}
            ></NewBook>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewBooks;