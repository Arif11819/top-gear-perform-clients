import React from 'react';

const HelpCard = ({value}) => {
    const { author, description, url,  title} = value
    return (
    //     <div>
    //         <div className="card w-96 bg-base-100 ">
      
    //   <div className="card-body"> <a className="dataItem" href={value.link} target="_blank">
    //             <p>{value.title} </p>
    //           </a>    </div>
    // </div>
    //     </div>

//     <div className="card  ">
//   <div className="card-body">
//     <h2 className="card-title">Title:{author}</h2>
//     { <p>Country: {country}</p> }
//     { <p>Year: {year}</p> }
//     { <p>language: {language}</p>}
//     <div className="card-actions justify-end">
//       {<button className="btn btn-primary"><a href={link} target="_blank"  > 
//       <p>{`Read more ....... `}</p>
      
    
        
        
        
//          </a>
// </button> }



//     </div>
//   </div>
// </div>
<div className="card card-side bg-base-100 ">
  <div className="card-body">
    <h2 className="card-title">{description}</h2>
    <h2 className="card-title">{title}</h2>
    <p>author:  {author}</p>
    <div className="card-actions justify-end">
    <button className="btn btn-primary"><a href={url} target="_blank"  > 
       <p>{`Read more ....... `}</p>
      
    
        
        
        
          </a>
          </button>
    </div>
  </div>
</div>
    );
};

export default HelpCard;