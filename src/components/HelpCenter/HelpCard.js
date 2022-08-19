import React from 'react';

const HelpCard = ({value}) => {
    const { author, description, url, urlToImage, title} = value
    return (
    //     <div>
    //         <div class="card w-96 bg-base-100 ">
      
    //   <div class="card-body"> <a className="dataItem" href={value.link} target="_blank">
    //             <p>{value.title} </p>
    //           </a>    </div>
    // </div>
    //     </div>

//     <div class="card  ">
//   <div class="card-body">
//     <h2 class="card-title">Title:{author}</h2>
//     { <p>Country: {country}</p> }
//     { <p>Year: {year}</p> }
//     { <p>language: {language}</p>}
//     <div class="card-actions justify-end">
//       {<button class="btn btn-primary"><a href={link} target="_blank"  > 
//       <p>{`Read more ....... `}</p>
      
    
        
        
        
//          </a>
// </button> }



//     </div>
//   </div>
// </div>
<div class="card card-side bg-base-100 ">
  <div class="card-body">
    <h2 class="card-title">{description}</h2>
    <h2 class="card-title">{title}</h2>
    <p>author:  {author}</p>
    <div class="card-actions justify-end">
    <button class="btn btn-primary"><a href={url} target="_blank"  > 
       <p>{`Read more ....... `}</p>
      
    
        
        
        
          </a>
          </button>
    </div>
  </div>
</div>
    );
};

export default HelpCard;