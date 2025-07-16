import React, { useRef } from 'react';
import { lang } from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { apioptions, GPTKEY } from '../utils/constant';
import { addGptMovieResult } from '../utils/Gptslice';

const GptSearchbar = () => {
  const intext = useRef(null);
  const dispatch = useDispatch();
  const slang = useSelector((store) => store?.configLang?.preflang);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      apioptions
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearch = async () => {
    console.log(intext.current.value);
    if(intext.current.value.length===0)return;

    try {
      const gptquerey =
        "Act as a Movie Recommendation System and suggest movies for the following query: " +
        intext.current.value +
        ". Only give 5 movies and their names separated by commas in the format ahead. Example: Don, Hera Pheri, Dhoom, Padosan, Sholay";

      const genAi = new GoogleGenerativeAI(GPTKEY);
     
      const model = genAi.getGenerativeModel({ model: "gemini-1.5-flash" });
      const response = await model.generateContent(gptquerey);

      

      const gptMovies = response.response.candidates[0].content.parts[0].text.split(",");

      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      // [Promise, Promise, Promise, Promise, Promise]

      const tmdbResults = await Promise.all(promiseArray);

      console.log(tmdbResults);

      dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));
    } catch (err) {
      console.log(err);
      alert("Apologies!!! The Api budget has ended ");
    }
  };

  return (
    <div className="flex justify-center w-full py-8 z-20 mt-20">
      <form onSubmit={(e) => e.preventDefault()} className="w-[92%] md:w-1/2 bg-black grid grid-cols-12 gap-4">
        <input
          ref={intext}
          className="p-4 m-4 rounded-md col-span-9"
          type="text"
          placeholder={lang[slang]?.placeholder}
        />

        <button
          className="py-2 px-4 bg-red-800 rounded-lg col-span-3"
          onClick={handleGptSearch}
        >
          {lang[slang]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchbar;
