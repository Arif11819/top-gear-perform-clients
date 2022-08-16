import React from 'react';

const HelpCard = ({value}) => {
    const { link, title,country, year, language} = value
    return (
    //     <div>
    //         <div class="card w-96 bg-base-100 ">
      
    //   <div class="card-body"> <a className="dataItem" href={value.link} target="_blank">
    //             <p>{value.title} </p>
    //           </a>    </div>
    // </div>
    //     </div>

    <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Title:{title}</h2>
    <p>Country: {country}</p>
    <p>Year: {year}</p>
    <p>language: {language}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary"><a href={link} target="_blank"  > 
      <p>{`Read more ....... `}</p>
      
    
        
        
        
         </a>
</button>



    </div>
  </div>
</div>
    );
};

export default HelpCard;