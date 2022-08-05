import React from "react";

const Ebook = ({ book }) => {
  const { name, url, btn, description } = book;


  return (
    <div className=" ">
      <div className="card  shadow-xl ebookcard">
        <figure className="px-20 pt-10">
          <img
            src={url}
            alt="book pic"
            className=""
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-sm ">{name}</h2>
          <p className=" book-description">{description}</p>
          <div className="card-actions">
            <a target="_blank" className=" ebook-btn" href={btn} >Buy Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ebook;
