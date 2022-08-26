import React from 'react'; 
import { BiCalendarMinus } from 'react-icons/bi'
import { BsCalendarCheck } from 'react-icons/bs'

const VacationCard = ({ vacation, setOpenModal }) => {
    return (
        <div>
            <div className='text-center px-20 rounded-md py-4 bg-gray-200'>
                <h4 className='text-xl'>{vacation.name}</h4>
                <div className='flex justify-center items-center gap-2 text-3xl font-bold text-[#527a00]'>
                    <BsCalendarCheck />
                    <h1>{vacation.day}</h1>
                </div>
                <p className='text-[#527a00]'>Days Available</p>
                <div className='flex justify-center tooltip ' data-tip="Record Day off">
                    <label onClick={() => setOpenModal(vacation)} htmlFor='DayOffModal' className='text-2xl mt-3 hover:text-[#527a00] cursor-pointer hover:scale-110 transition-all'>
                        <BiCalendarMinus />
                    </label>
                </div>
            </div>
            <p className='text-center text-sm mt-2'>{vacation.vName}</p>
        </div>
    );
};

export default VacationCard;