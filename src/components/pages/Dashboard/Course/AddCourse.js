import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import useCourse from '../../../../hooks/useCourse';

const AddCourse = () => {
    const [productItems, setProductItems] = useCourse();

    const hendelCourseSubmit = (event) => {
        event.preventDefault();
        toast("Add Successfully")

        const name = event.target.name.value;
        const Created = event.target.Created.value;
        const description = event.target.description.value;
        const link = event.target.link.value;
        const image = event.target.image.value;
        console.log(name, Created, description, link, image);
        const course = { name, Created, description, link, image }
        event.target.reset()


        // post data to server

        fetch('https://dry-ravine-83506.herokuapp.com/course', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(course),
        })
            .then((response) => response.json())
            .then((data) => {
                const newCoure = [...productItems, data];
                setProductItems(newCoure)
            })
            .catch((error) => {
                console.error('Error:', error);
            });


    }


    return (
        <div className='bg-sky-50'>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left ">
                        <img src="https://cdn.dribbble.com/users/222905/screenshots/10786822/media/e774910b6ea55bfa1443b8c1178d0b6e.png?compress=1&resize=400x300&vertical=top" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow- bg-slate-50">
                        <form onSubmit={hendelCourseSubmit}>



                            <div className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Course Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="courseName" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Created by</span>
                                    </label>
                                    <input type="text" name='Created' placeholder="createdby" className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <input type="text" name='description' placeholder="description" className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Course Link</span>
                                    </label>
                                    <input type="text" name='link' placeholder="courselink" className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input type="link" name='image' placeholder="image" className="input input-bordered" />

                                </div>



                                <div className="form-control mt-6">
                                    <input type="submit" className='btn' placeholder='Add-course' />
                                </div>

                            </div>
                            <ToastContainer />

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCourse;