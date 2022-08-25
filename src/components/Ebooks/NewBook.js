import React from 'react';

const NewBook = ({ newbook }) => {

  const { name, url, btn, description } = newbook;

  return (
    <div>
      <div className="card  shadow-xl newbookcard">
        <figure className="px-20 pt-5">
          <img
            src={url}
            alt="book pic"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-sm">{name}</h2>
          <p className=" book-description">{description}</p>
          <div className="card-actions">
            <a href={btn} target="_blank" className="px-3 py-1 border border-blue-300 relative rounded group overflow-hidden font-medium bg-purple-50 text-blue-600 inline-block">
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue-500 group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-white">Read Free PDF</span>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBook;