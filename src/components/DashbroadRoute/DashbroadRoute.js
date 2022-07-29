import React from 'react';
import { Outlet } from 'react-router-dom';

const DashbroadRoute = () => {
  return (
    <div className=' my-10'>
      <h1 className='text-6xl text-orange-600 text-center font-bold lg:p-20'>Dashbroad</h1>
      <div class="drawer bg-black drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
          <h1 className='text-4xl text-base-100 font-bold '>Please select side bar</h1>
          <Outlet></Outlet>


          <label for="my-drawer-2" class="btn btn-primary bg-orange-500 drawer-button lg:hidden">Open drawer</label>

        </div>
        <div class="drawer-side ">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-gray-400 text-base-content">


            {/* Sidebar content here */}


            <li ><a href=''>Performance</a></li>
            <li ><a href=''>Activity</a></li>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default DashbroadRoute;