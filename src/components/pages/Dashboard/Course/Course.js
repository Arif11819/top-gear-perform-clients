import React from 'react';
import useCourse from '../../../../hooks/useCourse';
import CourseCard from './CourseCard';

const Course = () => {

    const [productItems, setProductItems] = useCourse();







    return (
        <div>
            <h1 className='text-center text-4xl font-bold mt-20 mb-20'>Welcome to Our courses</h1>

            <div className='container'>
                <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5 mx-72 justify-center'>
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