import React from "react";
import { FaTwitterSquare, FaFacebookSquare, FaLinkedin, FaGitAlt } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs'

const Team = () => {
  return (
    <div className=" lg:p-10">
      <h1 className="text-5xl lg:p-20 font-bold text-black text-center">Our Team Members</h1>
      <div className="grid lg:grid-cols-3 lg:gap:5 lg:gap-10 lg:mx-40">
        {/* card-01 */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          class="card lg:w-80 lg:h-86 lg:m-2 m-10 pt-2 bg-slate-100 shadow-xl"
        >
          <figure class="lg:px-10  lg:pt-10">
            <div class="avatar">
              <div class="lg:w-24 w-28 rounded-full">
                <img
                  src="https://i.ibb.co/b5k4jFX/279926739-1322176401592416-7681994299822122901-n-removebg.jpg"
                  alt="Ariful Islam's pic"
                />
              </div>
            </div>
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title font-bold text-2xl text-fuchsia-900 ">Ariful Islam</h2>
            <p className="font-bold py-7 ">Team Leader of Team The Errors</p>
          </div>
          <div className="grid gap-8 grid-cols-4 mb-10 mx-20 text-center ">
            <a href="https://twitter.com/ArifulI12455813 " class="link text-sky-500 link-hover text-3xl"> <FaTwitterSquare /></a>
            <a href="https://www.linkedin.com/in/md-ariful-islam-032243241/" class="link link-hover text-3xl text-blue-900">< FaLinkedin /></a>
            <a href="https://github.com/Arif11819" class="link link-hover text-3xl "><BsGithub /></a>
            <a href="https://www.facebook.com/profile.php?id=100014002066391" class="link link-hover text-sky-600 text-3xl  "><FaFacebookSquare /></a>
          </div>
        </div>

        {/* card-02 */}

        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          class="card lg:w-80 lg:h-96 lg:m-2 pt-2 m-10 bg-slate-100 shadow-xl"
        >
          <figure class="lg:px-10 lg:pt-10">
            <div class="avatar">
              <div class="lg:w-24 w-28 rounded-full">
                <img
                  src="https://i.ibb.co/tJSjPgz/Md-Mehady-Hasan-Akash.jpg"
                  alt="Person pic"
                />
              </div>
            </div>
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title font-bold text-fuchsia-900 text-2xl ">Mehady Hasan</h2>
            <p className="font-bold py-5 ">Member of Team The Errors</p>
          </div>
          <div className="grid gap-8 grid-cols-4 mb-10 mx-20 text-center ">
            <a href="https://twitter.com/mehadyhasan1000" class="link link-hover text-sky-500 text-3xl "> <FaTwitterSquare /></a>
            <a href="https://www.linkedin.com/in/md-mehady-hasan-akash-64400721a/" class="link link-hover text-blue-900 text-3xl ">< FaLinkedin /></a>
            <a href="https://github.com/Mehadyhasanakash" class="link link-hover text-3xl "><BsGithub /></a>
            <a href="https://www.facebook.com/md.mehadyhasanakash" class="link link-hover text-sky-600 text-3xl "><FaFacebookSquare /></a>
          </div>
        </div>

        {/* card-03 */}

        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          class="card lg:w-80 lg:m-2 pt-2 m-10 lg:h-96 bg-slate-100 shadow-xl"
        >
          <figure class="lg:px-10 lg:pt-10">
            <div class="avatar">
              <div class="lg:w-24 w-28 rounded-full">
                <img
                  src="https://i.ibb.co/RhByzhb/me.jpg"
                  alt="Person pic"
                />
              </div>
            </div>
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title font-bold text-fuchsia-900 text-2xl ">Torikul Islam</h2>
            <p className="font-bold py-5 ">Member of Team The Errors</p>
          </div>
          <div className="grid gap-8 grid-cols-4 mb-10 mx-20 text-center ">
            <a href="https://www.facebook.com/timutorikul/" class="link link-hover text-sky-500 text-3xl "> <FaTwitterSquare /></a>
            <a href="https://twitter.com/timutorikul" class="link link-hover text-3xl text-blue-900">< FaLinkedin /></a>
            <a href="https://github.com/torikul00" class="link link-hover text-3xl "><BsGithub /></a>
            <a href="https://www.linkedin.com/in/torikul1/" class="link link-hover text-sky-600 text-3xl "><FaFacebookSquare /></a>
          </div>
        </div>

        {/* card-04 */}

        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          class="card lg:w-80 lg:m-2 pt-2 m-10 lg:h-96 bg-slate-100 shadow-xl"
        >
          <figure class="lg:px-10 lg:pt-10">
            <div class="avatar">
              <div class="lg:w-24 w-28 rounded-full">
                <img
                  src="https://i.ibb.co/0cSDn55/IMG-20211214-214627.jpg"
                  alt="Person pic"
                />
              </div>
            </div>
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title font-bold text-fuchsia-900 text-2xl ">Sumaya  Islam</h2>
            <p className="font-bold py-5 ">Member of Team The Errors</p>
          </div>
          <div className="grid gap-8 grid-cols-4 mb-10 mx-20 text-center ">
            <a href="https://twitter.com/eshita_sumaya" class="link link-hover text-sky-500 text-3xl "> <FaTwitterSquare /></a>
            <a href="https://www.linkedin.com/in/sheikh-sumaya-37454b217/" class="link link-hover text-blue-900 text-3xl ">< FaLinkedin /></a>
            <a href="https://github.com/sheikhsumaya" class="link link-hover text-3xl "><BsGithub /></a>
            <a href="https://www.facebook.com/sumaya.eshita" class="link link-hover text-sky-600 text-3xl "><FaFacebookSquare /></a>
          </div>
        </div>

        {/* card-05 */}

        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          class="card lg:w-80 lg:m-2 m-10 pt-2 lg:h-96 bg-slate-100 shadow-xl"
        >
          <figure class="lg:px-10 lg:pt-10">
            <div class="avatar">
              <div class="lg:w-24 w-28 rounded-full">
                <img
                  src="https://i.ibb.co/cL7TdVW/IMG-20220721-192831.jpg"
                  alt="Person pic"
                />
              </div>
            </div>
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title font-bold text-fuchsia-900 text-2xl ">Badhon Chaki</h2>
            <p className="font-bold py-5 ">Member of Team The Errors</p>
          </div>
          <div className="grid gap-8 grid-cols-4 mb-10 mx-20 text-center ">
            <a href="https://twitter.com/badhonchaki3" class="link link-hover text-sky-500 text-3xl "> <FaTwitterSquare /></a>
            <a href="https://www.linkedin.com/in/badhon-chaki-utsho-762128175" class="link link-hover text-blue-900 text-3xl ">< FaLinkedin /></a>
            <a href="https://github.com/Chaki360" class="link link-hover text-3xl "><BsGithub /></a>
            <a href="https://www.facebook.com/Chaki360" class="link link-hover text-sky-600 text-3xl "><FaFacebookSquare /></a>
          </div>
        </div>

        {/* card-06 */}

        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          class="card lg:w-80 lg:m-2 pt-2 m-10 lg:h-96 bg-slate-100 shadow-xl"
        >
          <figure class="lg:px-10 lg:pt-10">
            <div class="avatar">
              <div class="lg:w-24 w-28 rounded-full">
                <img
                  src="https://i.ibb.co/jRCyJ3S/296137484-3900390096853472-296651066539726617-n.jpg"
                  alt="Person pic"
                />
              </div>
            </div>
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title font-bold text-fuchsia-900 text-2xl ">Mazharul Islam</h2>
            <p className="font-bold py-5 ">Member of Team The Errors</p>
          </div>
          <div className="grid gap-5 lg:gap-8 grid-cols-4 mb-10 mx-20  text-center ">
            <a href="https://www.facebook.com/timutorikul/" class="link link-hover text-sky-500 text-3xl "> <FaTwitterSquare /></a>
            <a href="https://twitter.com/timutorikul" class="link link-hover text-blue-900 text-3xl ">< FaLinkedin /></a>
            <a href="https://github.com/torikul00" class="link link-hover text-3xl "><BsGithub /></a>
            <a href="https://www.linkedin.com/in/torikul1/" class="link link-hover text-sky-600 text-3xl "><FaFacebookSquare /></a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Team;
