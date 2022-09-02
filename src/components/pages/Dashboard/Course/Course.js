import React from 'react';
import useCourse from '../../../../hooks/useCourse';
import CourseCard from './CourseCard';

const Course = () => {

    const [productItems, setProductItems] = useCourse() ;

    

    
   

   
    return (
        <div>
            <h1 className='text-center text-4xl font-bold mt-20 mb-20'>welcome to our free course</h1>

            <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 '>
                {
                    productItems.map(item => <CourseCard
                    item={item}
                    key={item._id}
                    setProductItems={setProductItems}
                    productItems={productItems}
                    
                    
                    ></CourseCard>)
                }
            </div>
            </div>
        </div>
    );
};

export default Course;