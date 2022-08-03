import React, { useState } from 'react'
import Accordian from './Accordion';
import './Faq.css'
import { faqs } from './FaqsData'



const Faq = () => {
    const [data, setData] = useState(faqs);
    return (
        <>
            <section className="main-div">
                <h1 className='text-4xl mb-4 mt-5 text-center  font-extrabold text-black'>Frequently Asked Questions</h1>
                {
                    data.map((Element) => {
                        return <Accordian key={Element.id} {...Element} />

                    })
                }
            </section>
        </>
    )
}

export default Faq;