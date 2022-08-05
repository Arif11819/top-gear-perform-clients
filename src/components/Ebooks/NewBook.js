import React from 'react';

const NewBook = ({newbook}) => {
  
  const {name, url, btn, description} = newbook;
  
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
            <a target="_blank" className=" ebook-btn" href={btn} >Buy Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBook;