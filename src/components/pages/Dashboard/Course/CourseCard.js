// import { id } from 'date-fns/locale';
import React from 'react';

const CourseCard = ({ item, setProductItems, productItems }) => {

  const hendelDeleteCourse = (id) => {
    const proceed = window.confirm('are you sure delete')
    if (proceed) {
      console.log('delete with id', id)
      const url = (`https://dry-ravine-83506.herokuapp.com/course/${id}`);

      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            console.log('deleted')
            const remeningData = productItems.filter(product => product._id !== id)
            setProductItems(remeningData);

          }
        })
    }
  }



  return (
    <>

      <div class="card w-96 glass">
        <figure><img src={item.image} alt="car!" /></figure>
        <div class="card-body">
          <h2 class="card-title">{item.name}</h2>
          <h2 class="card-title">{item.Created}</h2>
          <p>{item.description}</p>
          <div className='flex justify-between align-center'>
            <div class="card-actions justify-end">
              <button className='card-btn btn-primary p-4 rounded-lg'>
                <a href={item.link} target="_blank" >
                  <p>{`enable course`} </p> </a>
              </button>

            </div>
            <div class="card-actions justify-start">
              <button onClick={() => hendelDeleteCourse(item._id)} className='card-btn btn-primary p-4 rounded-lg'>
                <p>Delete course</p>
              </button>
            </div>
          </div>

        </div>
      </div>


    </>
  );
};

export default CourseCard;


