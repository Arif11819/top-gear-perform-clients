import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, ResponsiveContainer } from 'recharts';
import { } from 'recharts';

const Chart = ({ ch }) => {
    const { image, TotalGoal, Target, Achieved, _id, name, Role, Experience } = ch;

    const data = [
        {
            uv: 4000,
            pv: 2400,
            amt: 2400,
            av: 2200,
            pt: 3000
        }
    ];

    return (
        <div className='mt-10'>
            <div className='flex shadow items-center gap-8 pl-6 bg-slate-100'>
                <div className='flex flex-col gap-3 items-center'>
                    <div class="avatar mt-2">
                        <div className="w-16 h-16 mx-auto rounded-full ring ring-primary">
                            <img src={image} alt="" />
                        </div>
                    </div>
                    <div>
                        <h2 className='font-bold text-blue-600 text-center'>{name}</h2>
                        <p className='text-center'>{Role}</p>
                        <p className='text-center'>{Experience}</p>
                    </div>
                </div>
                <div className='pl-72'>
                    <ResponsiveContainer width={100} height={100}>
                        <BarChart width={150} height={40} data={data}>
                            <Bar dataKey='uv' fill="#8884d8" />
                            <Bar dataKey='pv' fill="#7FFF00" />
                            <Bar dataKey='amt' fill="#8FBC8F" />
                            <Bar dataKey='av' fill="#A9A9A9" />
                            <Bar dataKey='pt' fill="#006400" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className='pl-72'>
                    <ResponsiveContainer width={100} height={100}>
                        <BarChart width={150} height={40} data={data}>
                            <Bar dataKey='uv' fill="#3CB371" />
                            <Bar dataKey='pv' fill="#663399" />
                            <Bar dataKey='amt' fill="#F0E68C" />
                            <Bar dataKey='av' fill="#ADD8E6" />
                            <Bar dataKey='pt' fill="#20B2AA" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

        </div>
    );
};

export default Chart;