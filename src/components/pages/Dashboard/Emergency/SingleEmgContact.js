import React from "react";
import { MdDeleteForever } from 'react-icons/md';
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
      <div className="card emg-card  shadow-xl">
        <div className="card-body">
          <div className="card-actions justify-end">
            <button className='mx-2 text-3xl'
              onClick={() => handleDelete(emgContact._id)}
            ><MdDeleteForever /></button>
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
    </div>
  );
};

export default SingleEmgContact;
