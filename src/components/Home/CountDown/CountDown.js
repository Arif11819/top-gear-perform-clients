import React, { useEffect, useState } from "react";
import './CountDown.css';

const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 20 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const CountDown = ({ targetDate }) =>  {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <div className="">
      <div className="text-center my-20">
        <h1 className="text-center text-black text-3xl lg:text-5xl pt-10 lg:pt-20 lg:pb-5 font-bold">Wait For Our <span className="text-sky-500">New Services</span></h1>
        <p className="text-center text-sky-500 mb-10 text-md lg:text-xl">After this update you can get much more experience!</p>
        <div className="divider"></div>
        <div className="grid lg:grid-flow-col gap-5 text-center bg-base p-20 rounded justify-center  auto-cols-max">
          <div className="items-center w-64 p-10 bg-sky-200 rounded-box text-neutral-content">
            <span className="countdown font-mono text-black text-7xl">
            {days}
            </span>
          </div>
          <div className="items-center  w-64 p-10 bg-sky-200 rounded-box text-neutral-content">
            <span className="countdown font-mono text-black text-7xl">
            {hours}
            </span>
          </div>
          <div className="items-center w-64 p-10 bg-sky-200 rounded-box text-neutral-content">
            <span className="countdown font-mono text-black text-7xl">
             {minutes}
            </span>
          </div>
          <div className="items-center  w-64  p-10 bg-sky-200 rounded-box text-neutral-content">
            <span className="countdown font-mono text-black text-7xl">
            {seconds} 
            </span>
          </div>
        </div>
        <div className="divider"></div>
      </div>
      </div>
    );
  }
};

export default CountDown;
