import React, { useEffect, useState } from "react";
import { ImMobile } from "react-icons/im";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { HiOfficeBuilding } from "react-icons/hi";
import SingleEmgContact from "./SingleEmgContact";
import { useForm } from "react-hook-form";
import "./Emergency.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";



const Emergency = () => {
  const [user] = useAuthState(auth);
  

  const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const emgcontact = {
            form: data,
            user: user.email
        }
        fetch('https://dry-ravine-83506.herokuapp.com/emgcontact', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(emgcontact)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    console.log(data);
                    reset();
                }
            })

    };

  const [emgContacts, setEmgContacts] = useState([]);

  useEffect(() => {
    fetch(`https://dry-ravine-83506.herokuapp.com/emgcontact/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setEmgContacts(data));
  }, [user?.email]);

  return (
    <div className="lg:mx-28 lg:my-10">
      <div className=" text-3xl text-sky-500 m-4 font-bold ">
        Emergency Contact
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-5 ">
      <section className="">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <label className="input-group input-group-vertical emg-field ">
              <span className="font-bold">Name</span>
              <input
                placeholder="Type Name"
                className="input input-bordered"
                required
                {...register("name")}
              />
            </label>

            <label className="input-group input-group-vertical emg-field">
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

          
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <label className="input-group lg:input-group-md w-52 lg:w-72 lg:my-2">
              <span>
                <MdOutlineMapsHomeWork />
              </span>
              <input
                placeholder="Home number"
                className="input input-bordered lg:input-md"
                type="number"
                {...register("phoneNumberone")}
              />
            </label>

            <label className="input-group input-group-md w-52 lg:w-72 my-2">
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

            <label className="input-group input-group-md w-52 lg:w-72 my-2">
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
              <span className="label-text  lg:my-2">Add Email</span>
            </label>
            <label className="input-group input-group-md my-2 w-52 lg:w-72">
              <span>Email</span>
              <input
                type="text"
                placeholder="info@site.com"
                className="input input-bordered w-52  lg:w-72"
                required
                {...register("email")}
              />
            </label>
            <label className="label">
              <span className="label-text lg:my-2">Address</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-8 w-52  lg:w-72 mx-4 lg:my-2 lg:h-24"
              placeholder="Add Address"
              required
              {...register("address")}
            ></textarea>

          <input className="btn bg-sky-400 text-black info " type="submit" value="Save Information" />
        </form>
      </section>



      <section>
        <div >
          {emgContacts.map((emgContact) => (
            <SingleEmgContact
              key={emgContact._id}
              emgContact={emgContact}
            ></SingleEmgContact>
          ))}
        </div>
      </section>
      </div>
    </div>
  );
};

export default Emergency;
