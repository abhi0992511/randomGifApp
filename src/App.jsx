import Random from "./components/Random";
import Tag from "./components/Tag";
export default function App() {
  return (
    <div className="flex flex-col background w-full h-full relative items-center">
      <h1 className="bg-white rounded-md mt-8 w-11/12 text-center p-2 font-bold text-3xl">RANDOM GIFS</h1>
      <div className="flex flex-col w-full">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
