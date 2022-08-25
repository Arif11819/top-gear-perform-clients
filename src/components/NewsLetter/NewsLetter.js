import React, { useState } from 'react';
import './NewsLetter.css';
const NewsLetter = () => {
    const [input, setInput] = useState("");
    const inputHandler = (e) => {
        setInput(e.target.value);

    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (input) {
            console.log(input);
        }
    }

    return (
        <div className="hero w-auto bg-slate-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/jHK4FTY/istockphoto-1351881144-612x612.jpg" alt='' className="max-w-sm rounded-lg" />
                <div className='pt-20 pb-20'>
                    <h2 className="text-xl font-bold text-start">Keep Yourself Updated With All  </h2>
                    <h2 className="text-xl font-bold text-start"> The Latest News About</h2>
                    <h2 className="text-xl font-bold text-start"> TopgearPerform</h2>
                    <p className="py-6">Subscribe to our newsletter to get all the latest updates about our offers, promotion, Partnerships, and so on. But promise we will not spam your mail. So you can consider subscribing to us.</p>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text font-semibold">Subscribe to our NewsLetter</span>
                        </label>
                        <div className="relative">
                            <form onSubmit={submitHandler}>
                                <input type="email" placeholder="Enter your valid email" className="input input-bordered w-full pr-16" required onChange={inputHandler} />
                                <button type='submit' className="btn newsbtn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;