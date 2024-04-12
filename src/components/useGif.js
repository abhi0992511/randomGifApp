import axios from "axios";
import { useEffect, useState } from "react";
const useGif = (gifName) => {
  const [gif, setGif] = useState("");
  const [loader, setLoader] = useState(false);
  const url=`https://api.giphy.com/v1/gifs/random?api_key=CZlPEDhbpgQ2XWf7Au83iWK57DQQGRez`
  async function fetchGif() {
    setLoader(true);
    const { data } = await axios.get(gifName?`${url}&tag=${gifName}`:url);
    const imageurl = data.data.images.downsized_large.url;
    console.log(imageurl);
    setGif(imageurl);
    setLoader(false);
  }
  useEffect(() => {
    fetchGif();
  }, []);
  
  return {gif,loader,fetchGif}
};
export default useGif;
