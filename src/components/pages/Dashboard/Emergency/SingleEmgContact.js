import React from "react";
import { BsPersonXFill, BsFillFileEarmarkPersonFill } from 'react-icons/bs';
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';

const SingleEmgContact = ({ emgContact }) => {

  const { name, relationship, phoneNumberone, phoneNumbertwo, phoneNumberthree, email, address } = emgContact;

  const [displays, setDisplays] = useState([]);

  useEffect(() => {

    fetch('https://dry-ravine-83506.herokuapp.com/emgcontact')
      .then(res => res.json())
      .then(data => setDisplays(data));
  }, [emgContact, displays]);


  const handleDelete = id => {

    const proceed = window.confirm('Are you sure?');
    if (proceed) {
      const url = `https://dry-ravine-83506.herokuapp.com/emgcontact/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          toast.success("Successfully deleted!")
          const remaining = displays.filter(display => display._id !== id)
          setDisplays(remaining);
        })
    }

  }

  return (
    <div>
      <div className=" emg-card  shadow-xl">
        <div className="flex">
          <div className="mr-44 text-3xl">
            <BsFillFileEarmarkPersonFill />
          </div>
          <div className="">
            <button className='ml-44 text-3xl'
              onClick={() => handleDelete(emgContact._id)}
            ><BsPersonXFill /></button>
          </div>
        </div>
        <div>
          <p className="text-2xl">Name: {name}</p>
          <p>Relationship: {relationship}</p>
          <p>Phone: <br /> {phoneNumberone} <br /> {phoneNumbertwo} <br /> {phoneNumberthree} </p>
          <p>Email: {email}</p>
          <p>Address: {address}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleEmgContact;
