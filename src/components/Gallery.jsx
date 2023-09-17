import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Images } from "./Images";

export const Gallery = () => {
  const [imgvalue, setimgvalue] = useState("");
  const [images, setimage] = useState([]);
  const UNSPLASH_ROOT = "https://api.unsplash.com";
  const clientId = "zElVJ34iPd3KsW4fqHigu2TJOS3Novfc9-iiPIpx3jA";

  
  useEffect(() => {
    requestApi();
  }, []);
  async function requestApi() {
    await axios
      .get(
        `${UNSPLASH_ROOT}/search/photos?query=${imgvalue}&client_id=${clientId}&per_page=20`,
      )
      .then((res) => {
        const data = res.data.results;
        setimage(data);
        console.log(data);
      });
  }
  return (
    <div>
      <form
        className="flex mt-4  justify-center items-center flex-col"
        onSubmit={(e) => {
          e.preventDefault(), requestApi();
        }}
      >
        <div className="flex flex-row">
          <label>
            <input
              className="border border-gray-500 outline-none w-[300px]  py-1 rounded-lg p-3 text-lg text-blue-950"
              value={imgvalue}
              placeholder="Enter Your Image Name"
              onChange={(e) => setimgvalue(e.target.value)}
            />
          </label>
          <button className="ml-6 border border-gray-700 py-1 px-8 rounded-lg hover:bg-blue-950 hover:text-white font-semibold bg-white text-blue-950 transition-all ease-in">
            Search
          </button>
        </div>
        
        <Images props={images} />
        {images.map((data) => (
          <div key={data.id}>
            {/* <h1>{img.description}</h1> */}
            <Images
              urls={data.urls.regular}
              username={data.user.username}
              des={data.alt_description}
              likes={data.likes}
              
            />
            {/* <img src={img.urls.regular} alt=""style={{width:'300px',height:'300px',objectFit:'cover'}}/> */}
            
          </div>
        ))}
      </form>
    </div>
  );
};
