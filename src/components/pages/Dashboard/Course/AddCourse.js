import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import useCourse from '../../../../hooks/useCourse';

const AddCourse = () => {
    const [productItems, setProductItems] = useCourse() ;

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

        fetch('http://localhost:5000/course', {
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
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left ">
                        <img src="https://cdn.dribbble.com/users/222905/screenshots/10786822/media/e774910b6ea55bfa1443b8c1178d0b6e.png?compress=1&resize=400x300&vertical=top" alt="" />
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow- bg-base-100">
                        <form onSubmit={hendelCourseSubmit}>



                            <div class="card-body">

                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Course Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="courseName" class="input input-bordered" />
                                </div>

                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Created by</span>
                                    </label>
                                    <input type="text" name='Created' placeholder="createdby" class="input input-bordered" />

                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Description</span>
                                    </label>
                                    <input type="text" name='description' placeholder="description" class="input input-bordered" />

                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Course Link</span>
                                    </label>
                                    <input type="text" name='link' placeholder="courselink" class="input input-bordered" />

                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Image</span>
                                    </label>
                                    <input type="link" name='image' placeholder="image" class="input input-bordered" />

                                </div>



                                <div class="form-control mt-6">
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