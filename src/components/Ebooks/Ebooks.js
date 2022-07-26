import React, { useEffect, useState } from "react";
import Ebook from "./Ebook";
import "./Ebook.css";
import NewBooks from "./NewBooks";

const Ebooks = () => {
  const [books, setbooks] = useState([]);

  useEffect(() => {
    fetch(`https://top-gear-perform-server.up.railway.app/ebook`)
      .then((res) => res.json())
      .then((data) => setbooks(data));
  }, []);

  return (
    <div className="bg-slate-50 pb-20">
      <section>
        <div className="hero book-head bg-slate-50">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="lg:p-20 ">
              <img
                src="https://i.ibb.co/3B1ZhZ4/books-removebg-preview.png"
                className="small-pic"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-5xl px-5 font-bold text-start">Top-Gear eBooks</h1>
              <p className="py-20 px-5">
                Download free ebooks from our library and learn more about the Objectives and Key Results (TopGear) goal-setting <br /> framework and bridge the gap between strategy and execution.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-3xl font-bold text-center m-16">
          Our Free Top-Gear Resources
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-20 lg:mx-20 lg:px-24 mx-8 px-5">
          {books.map((book) => (
            <Ebook key={book._id} book={book}></Ebook>
          ))}
        </div>
      </section>
      <NewBooks />
    </div>
  );
};

export default Ebooks;
