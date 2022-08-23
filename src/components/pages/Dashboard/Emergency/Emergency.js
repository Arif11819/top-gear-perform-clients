import React, { useEffect, useState } from "react";
import { ImMobile } from "react-icons/im";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { HiOfficeBuilding } from "react-icons/hi";
import "./Emergency.css";
import SingleEmgContact from "./SingleEmgContact";
import { useForm } from "react-hook-form";

const Emergency = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/emgcontact`;
    fetch(url, {
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(result =>{
      console.log(result);
    })
  };


  const [emgContacts, setEmgContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/emgcontact")
      .then((res) => res.json())
      .then((data) => setEmgContacts(data));
  }, []);

  return (
    <div className="m-36">
      <div className=" text-4xl text-sky-500 text-center font-bold items-center m-8">
        Emergency Contact
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-3">
          <label className="input-group input-group-vertical ">
            <span className="font-bold">Name</span>
            <input
              placeholder="Type Name"
              className="input input-bordered"
              required
              {...register("name")}
            />
          </label>

          <label className="input-group input-group-vertical">
            <span className="font-bold">Relationship</span>
            <select
              placeholder="Type Name"
              className="input input-bordered"
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
          <label className="label cursor-pointer">
                  <input
                    required
                    type="checkbox"
                    className="checkbox "
                    autoComplete="off"
                  />
                  <span className="label-text font-bold text-sky-500 w-96">
                    Primary Contact
                  </span>
                </label>
        </div>
        <div className="  mx-8">
          <h1 className="font-bold text-start text-md m-5">Phone</h1>
          <label className="input-group input-group-md lg:my-2">
            <span>
              <MdOutlineMapsHomeWork />
            </span>
            <input
              placeholder="Phone number 01"
              className="input input-bordered input-md"
              type="number"
              {...register("phoneNumberone")}
            />
          </label>

          <label className="input-group input-group-md lg:my-2">
            <span>
              <HiOfficeBuilding />
            </span>
            <input
              placeholder="Phone number 02"
              className="input input-bordered input-md"
              type="number"
              {...register("phoneNumbertwo")}
            />
          </label> 

          <label className="input-group input-group-md lg:my-2">
            <span>
              <ImMobile />
            </span>
            <input
              placeholder="Phone number 03"
              className="input input-bordered input-md"
              type="number"
              {...register("phoneNumberthree")}
            />
          </label> 
        
        <div className="grid grid-cols-2">
          <div className="">
          <label className="label">
            <span className="label-text font-bold text-md my-5">Add Email</span>
          </label>
          <label className="input-group">
            <span>Email</span>
            <input
              type="text"
              placeholder="info@site.com"
              className="input input-bordered"
              required
              {...register("email")}
            />
          </label>
          </div>
          <div className="m-5">
          <label className="label my-2 font-bold">
            <span className="label-text font-bold">Address</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Add Address"
            required
            {...register("address")}
          ></textarea>
          </div>
          </div>
        </div>

        <input className="btn bg-sky-400 text-white info" type="submit" value="Save Information" />
      </form>

    
      <div className="divider"></div>
      <button className="btn bg-sky-400 text-white info ">
        Add New Information
      </button>

      <section>
        <div className="grid grid-cols-2 gap-5 m-28">
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
