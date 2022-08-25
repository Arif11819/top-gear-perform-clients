import React from 'react';
import useChart from '../../hooks/useChart';
import Chart from './Chart';


const Charts = () => {
    const [chart] = useChart();
    return (
        <div className='flex flex-col pl-20'>
            {
                chart.map(ch => <Chart
                    key={ch._id}
                    ch={ch}

                >

                </Chart>)
            }
        </div>
    );
};

export default Charts;