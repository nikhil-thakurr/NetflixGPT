import React, { useRef } from 'react'
import openai from './utils/openAI';
import { API_OPTIONS } from './utils/constants';
import { useDispatch } from 'react-redux';
import { addGPTMovies } from './utils/gptSlice';

const GptSearchBar = () => {

    const dispatch=useDispatch();
    const searchtext=useRef(null);

    //Individual Movie Search
    const searchTMDB =async(movie)=>{

        const data= await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie +'&include_adult=true&language=en-US&page=1', API_OPTIONS);

        const json = await data.json();

        // console.log(json);

        return json.results;

    }

    const handlegptsearchbtn =async()=>{

        const gptQuery = "Act as a movie recommendation system and suggest movies for this "+  searchtext.current.value + "Give me only 5 movies seperated by comma Like this sholay,lagan,PK,idiots and dont give it in numbering"

        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
          });

        // console.log(gptResults.choices?.[0]?.message.content.split(","));

        const gptMovies =gptResults.choices?.[0]?.message.content.split(",");

       const promiseresults= gptMovies.map(movie=>searchTMDB(movie));

       const resolvedresults =await Promise.all(promiseresults);

       console.log(gptMovies);
       dispatch(addGPTMovies({ searchMovies:gptMovies,detailsMovies:resolvedresults}));


    }
  return (
    <div className='pt-[10%]  flex justify-center' >

        <form action="" className='bg-black  w-1/2 grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>

            <input ref={searchtext} type="text" placeholder='What you would like to watch today  '  className='col-span-9 p-4 m-4'/>
            <button className='bg-red-700 col-span-3 p-4 m-4 rounded-lg' onClick={handlegptsearchbtn}>Search</button>

        </form>

    </div>
  )
}

export default GptSearchBar