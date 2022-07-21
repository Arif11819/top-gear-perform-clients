import React from 'react';
import LogoCard from './LogoCard';


const Logo = () => {
  return (
    <div className='lg: m-20' >

      <h1 className='md:text-4xl text-white font-bold text-center mb-11 mt-7 '>Top Gear Perform is a great choice for:</h1>
      <div className='grid grid-cols-1 lg:grid-cols-4  md:grid-cols-2 gap-4   '>
        <LogoCard title='Online Communities' img='https://i.ibb.co/wLJKTKb/chat.png' />
        <LogoCard title='Internet/Extranet' img='https://i.ibb.co/NsJ8k60/worldwide.png' />
        <LogoCard title='Online Courses' img='https://i.ibb.co/K9fS4S7/online-learning.png' />
        <LogoCard title='Membership Website' img='https://i.ibb.co/zXsfx19/loyalty.png' />
        <LogoCard title='Job Board' img='https://i.ibb.co/DfrYR8S/online-shopping.png' />
        <LogoCard title='Online Store' img='https://i.ibb.co/FbhVYK5/job-search.png' />
        <LogoCard title='Konwledgebase' img='https://i.ibb.co/vQ2JhRc/light-bulbs.png' />
        <LogoCard title='Dashboard' img='https://i.ibb.co/34qp4qc/dashboard.png' />
      </div>
    </div>



  );
};

export default Logo;