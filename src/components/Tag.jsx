import { useState } from "react";
import Spinner from "./Spinner";
import useGif from "./useGif";

export default function Tag() {
  const [gifName, setGifName] = useState("");
  const {gif,loader,fetchGif}=useGif(gifName);
  return (
    <div className="bg-blue-400 w-1/2 mt-[30px] rounded-lg mx-auto border border-gray-950 flex flex-col items-center mb-[20px]">
      <h1 className="text-3xl font-bold text-center mt-5 underline">
       A RANDOM {gifName.toUpperCase()} GIF
      </h1>
      {loader ? (
        <Spinner />
      ) : (
        <img src={gif} alt="Gif" loading="lazy" width={450} className="mt-5" />
      )}
      <input
        type="text"
        className="text-center border rounded-s w-1/2 font-bold mt-5"
        onChange={(event)=>setGifName(event.target.value)}
        value={gifName}
        name="gifName"
      ></input>
      <button
        className="bg-yellow-400 text-center border rounded-md w-1/2 border-black font-bold mt-5 mb-4"
        onClick={()=>fetchGif(gifName)}
      >
        {" "}
        GENERATE
      </button>
    </div>
  );
}
