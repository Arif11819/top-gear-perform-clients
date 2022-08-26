import React, { useEffect, useState } from "react";
import { ImMobile } from "react-icons/im";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { HiOfficeBuilding } from "react-icons/hi";
import SingleEmgContact from "./SingleEmgContact";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import "./Emergency.css";

const Emergency = () => {
  const { register, reset, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const url = `https://dry-ravine-83506.herokuapp.com/emgcontact`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        toast.success("Successfully added!")
        reset();
      })
  };


  const [emgContacts, setEmgContacts] = useState([]);

  useEffect(() => {
    fetch("https://dry-ravine-83506.herokuapp.com/emgcontact")
      .then((res) => res.json())
      .then((data) => setEmgContacts(data));
  }, [emgContacts]);

  return (
    <div className="mx-8">
      <div className=" text-2xl text-sky-500 text-center font-bold items-center m-8">
        Emergency Contact
      </div>
      <div className="">
        <form className="lg:mx-72" onSubmit={handleSubmit(onSubmit)}>
          <div className=" lg:mx-24">
            <label className="input-group input-group-vertical emg-field m-auto lg:m-5">
              <span className="font-bold">Name</span>
              <input
                placeholder="Type Name"
                className="input input-bordered"
                required
                {...register("name")}
              />
            </label>

            <label className="input-group input-group-vertical emg-field m-auto lg:m-5">
              <span className="font-bold">Relationship</span>
              <select
                placeholder="Type Name"
                className="input input-bordered "
                required
                {...register("relationship")}
              >
                <option value="Father">Father</option>
                <option value="Mother">Mother</option>
                <option value="Son">Son</option>
                <option value="Daughter">Daughter</option>
                <option value="Husband">Husband</option>
                <option value="Wife">Wife</option>
                <option value="Sister">Sister</option>
                <option value="Brother">Brother</option>
                <option value="Friend">Friend</option>
                <option value="Uncle">Uncle</option>
                <option value="Others">Others</option>
              </select>
            </label>
          </div>

          <div className="lg:mx-48">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <label className="input-group input-group-md my-2">
              <span>
                <MdOutlineMapsHomeWork />
              </span>
              <input
                placeholder="Home number"
                className="input input-bordered input-md"
                type="number"
                {...register("phoneNumberone")}
              />
            </label>

            <label className="input-group input-group-md my-2">
              <span>
                <HiOfficeBuilding />
              </span>
              <input
                placeholder="Office number "
                className="input input-bordered input-md"
                type="number"
                {...register("phoneNumbertwo")}
              />
            </label>

            <label className="input-group input-group-md my-2">
              <span>
                <ImMobile />
              </span>
              <input
                placeholder="Emergency number"
                className="input input-bordered input-md"
                type="number"
                {...register("phoneNumberthree")}
              />
            </label>


            <label className="label">
              <span className="label-text lg:my-2">Add Email</span>
            </label>
            <label className="input-group input-group-md my-2">
              <span>Email</span>
              <input
                type="text"
                placeholder="info@site.com"
                className="input input-bordered"
                required
                {...register("email")}
              />
            </label>
            <label className="label">
              <span className="label-text my-2">Address</span>
            </label>
            <textarea
              className="textarea textarea-bordered mx-4 my-2 h-24"
              placeholder="Add Address"
              required
              {...register("address")}
            ></textarea>
          </div>

          <input className="btn bg-sky-400 text-black info" type="submit" value="Save Information" />
        </form>
      </div>


      <div className="divider"></div>


      <section>
        <div className="grid lg:grid-cols-2 lg:gap-5 lg:m-28">
          {emgContacts.map((emgContact) => (
            <SingleEmgContact
              key={emgContact._id}
              emgContact={emgContact}
            ></SingleEmgContact>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Emergency;
