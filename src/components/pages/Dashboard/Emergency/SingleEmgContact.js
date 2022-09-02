import React from "react";
import { BsPersonXFill, BsFillFileEarmarkPersonFill } from 'react-icons/bs';
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import { useQuery } from "react-query";

const SingleEmgContact = ({ emgContact }) => {
  const [displays, setDisplays] = useState([]);




  useEffect(() => {

    fetch(`https://dry-ravine-83506.herokuapp.com/emgcontact/${user?.email}`)
      .then(res => res.json())
      .then(data => setDisplays(data));
  }, [emgContact, displays]);

  const [user] = useAuthState(auth);

  const { data: emgcontact, isLoading, refetch } = useQuery('emgcontact', () => fetch(`https://dry-ravine-83506.herokuapp.com/emgcontact/${user?.email}`, {
    method: 'GET',
  })
    .then(res => res.json()))
  refetch()
  if (isLoading) {
    return <p>Loading...</p>
  }



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
    <div className="mx-10">
      <div className=" emg-card text-center lg:mx-2  shadow-xl">
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

        <div className="lg:mr-44 mr-20 lg:text-3xl">
          <BsFillFileEarmarkPersonFill />
        </div>
        <div className="">
          <button className='lg:ml-44 ml-24 lg:text-3xl'
            onClick={() => handleDelete(emgContact._id)}
          ><BsPersonXFill /></button>
        </div>
      </div>
      <div>
        <p className="text-2xl">Name: {emgContact.form.name}</p>
        <p>Relationship: {emgContact.form.relationship}</p>
        <p>Phone: <br /> {emgContact.form.phoneNumberone} <br /> {emgContact.form.phoneNumbertwo} <br /> {emgContact.form.phoneNumberthree} </p>
        <p>Email: {emgContact.form.email}</p>
        <p>Address: {emgContact.form.address}</p>
      </div>

    </div>
    </div >
  );
};

export default SingleEmgContact;
