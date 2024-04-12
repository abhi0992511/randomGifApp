import Spinner from "./Spinner";
import useGif from "./useGif";
export default function Random() {
  const { gif, loader, fetchGif } = useGif();
  return (
    <div className="bg-green-400 w-1/2 mt-[30px] rounded-lg mx-auto border border-gray-950 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mt-5 underline">
        A RANDOM GIF
      </h1>
      {loader ? (
        <Spinner />
      ) : (
        <img src={gif} alt="Gif" loading="lazy" width={450} className="mt-5" />
      )}
      <button
        className="bg-yellow-400 text-center border rounded-md w-1/2 border-black font-bold mt-5 mb-4"
        onClick={() => fetchGif()}
      >
        {" "}
        GENERATE
      </button>
    </div>
  );
}
