import React from 'react';

const HelpCard = ({value}) => {
    const { link, title,} = value
    return (
        <div>
            <div class="card w-96 bg-base-100 ">
      
      <div class="card-body"> <a className="dataItem" href={value.link} target="_blank">
                <p>{value.title} </p>
              </a>    </div>
    </div>
        </div>
    );
};

export default HelpCard;