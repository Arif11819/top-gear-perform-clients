import React from 'react';
import './Faq.css'
const Faq = () => {
    return (
        <section className='bg-black'>
            <h1 className='text-4xl mb-4 mt-5  text-center font-bold text-white'>Frequently Asked Questions</h1>
            <ul className='text-white ' id='accordion'>
                <li>
                    <label for='fifth'>How to get started?<span>&#x3e;</span></label>
                    <input type='radio' name='accordion' id='fifth' />
                    <div className='content'>
                        <p>
                            Wrike has a variety of different options available to suit your team, including three types of user licenses – regular users, external users, and collaborators. For regular and external users, there is a charge per user. You’ll get 20 collaborator invites or 15% of your license count (whichever is greater) with no additional charge included with your subscription. If this is not enough, please speak with your Wrike representative to discuss other options.
                        </p>
                    </div>
                </li>
                <li>
                    <label for='first'>What services Topgear perform provide?<span>&#x3e;</span></label>
                    <input type='radio' name='accordion' id='first' checked />
                    <div className='content'>
                        <p>
                            Wrike has a variety of different options available to suit your team, including three types of user licenses – regular users, external users, and collaborators. For regular and external users, there is a charge per user. You’ll get 20 collaborator invites or 15% of your license count (whichever is greater) with no additional charge included with your subscription. If this is not enough, please speak with your Wrike representative to discuss other options.
                        </p>
                    </div>
                </li>
                <li>
                    <label for='second'>Where is this company office located?<span>&#x3e;</span></label>
                    <input type='radio' name='accordion' id='second' />
                    <div className='content'>
                        <p>
                            Wrike has a variety of different options available to suit your team, including three types of user licenses – regular users, external users, and collaborators. For regular and external users, there is a charge per user. You’ll get 20 collaborator invites or 15% of your license count (whichever is greater) with no additional charge included with your subscription. If this is not enough, please speak with your Wrike representative to discuss other options.
                        </p>
                    </div>
                </li>
                <li>
                    <label for='third'>Do you guys take payment for the services you provide?<span>&#x3e;</span></label>
                    <input type='radio' name='accordion' id='third' />
                    <div className='content'>
                        <p>
                            Wrike has a variety of different options available to suit your team, including three types of user licenses – regular users, external users, and collaborators. For regular and external users, there is a charge per user. You’ll get 20 collaborator invites or 15% of your license count (whichever is greater) with no additional charge included with your subscription. If this is not enough, please speak with your Wrike representative to discuss other options.
                        </p>
                    </div>
                </li>
                <li>
                    <label for='fourth'>Is there any free trial?<span>&#x3e;</span></label>
                    <input type='radio' name='accordion' id='fourth' />
                    <div className='content'>
                        <p>
                            Wrike has a variety of different options available to suit your team, including three types of user licenses – regular users, external users, and collaborators. For regular and external users, there is a charge per user. You’ll get 20 collaborator invites or 15% of your license count (whichever is greater) with no additional charge included with your subscription. If this is not enough, please speak with your Wrike representative to discuss other options.
                        </p>
                    </div>
                </li>
                <li>
                    <label for='fifth'>Why should i choose you?<span>&#x3e;</span></label>
                    <input type='radio' name='accordion' id='fifth' />
                    <div className='content'>
                        <p>
                            Wrike has a variety of different options available to suit your team, including three types of user licenses – regular users, external users, and collaborators. For regular and external users, there is a charge per user. You’ll get 20 collaborator invites or 15% of your license count (whichever is greater) with no additional charge included with your subscription. If this is not enough, please speak with your Wrike representative to discuss other options.
                        </p>
                    </div>
                </li>
                <li>
                    <label for='sixth'>How does your support system work?<span>&#x3e;</span></label>
                    <input type='radio' name='accordion' id='sixth' />
                    <div className='content'>
                        <p>
                            Wrike has a variety of different options available to suit your team, including three types of user licenses – regular users, external users, and collaborators. For regular and external users, there is a charge per user. You’ll get 20 collaborator invites or 15% of your license count (whichever is greater) with no additional charge included with your subscription. If this is not enough, please speak with your Wrike representative to discuss other options.
                        </p>
                    </div>
                </li>
                <li>
                    <label for='seventh'>How to i unsubscribe TopGear from mailing list?<span>&#x3e;</span></label>
                    <input type='radio' name='accordion' id='seventh' />
                    <div className='content'>
                        <p>
                            Wrike has a variety of different options available to suit your team, including three types of user licenses – regular users, external users, and collaborators. For regular and external users, there is a charge per user. You’ll get 20 collaborator invites or 15% of your license count (whichever is greater) with no additional charge included with your subscription. If this is not enough, please speak with your Wrike representative to discuss other options.
                        </p>
                    </div>
                </li>
            </ul>
        </section>
    );
};

export default Faq;