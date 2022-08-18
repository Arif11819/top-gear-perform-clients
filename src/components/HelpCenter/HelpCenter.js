import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import HelpCard from './HelpCard';


const HelpCenter = () => {

    const [data, setData] = useState([])
    const [search, setSearch] = useState([])
    const [wordEntered, setWordEntered] = useState("");


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setData(data)
                setSearch(data)
                console.log(data)
            }
            )
            
    }, [])

    const hendelSearch = (e) => {
        const searchWork = e.target.value
        setWordEntered(searchWork)
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(wordEntered.toLowerCase());
        });

        if (searchWork === "") {
            setData(search);
        } else {
            setData(newFilter);
        }
        setWordEntered(e.target.value)


    }




    return (
        <div className='min-h-screen  bg-cyan-50 '>
            <h1 className='4xl text-center font-bold'>How can we help you?</h1>
            <div className='relative flex justify-center items-center '>
                    
                <div>
                    <SearchIcon className='absolute ml-4 mt-3 text-sky-400 '></SearchIcon>

                    <input type="text" placeholder="Find help, articles, ueser guides" value={wordEntered} onChange={hendelSearch} className="  grid w-96 mx-auto   input input-bordered input-success  text-center " />
                </div>



            </div>


            <div className='grid grid-cols-1 gap-6 mt-32 m-3.5'>

                {
                    data.slice(0,5).map(value => <HelpCard

                        value={value}
                        key={value.id}

                    ></HelpCard>)

                }


            </div>



        </div>
    );
};

export default HelpCenter;