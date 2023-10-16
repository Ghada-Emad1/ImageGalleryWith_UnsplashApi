import { useState } from "react";
import { saveAs } from "file-saver";
import { Link } from "react-router-dom";
export const Images = ({ images }) => {
  return (
    <div>
      <div className=" m-5  gap-3 sm:gap-2 md:gap-5  grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 ">
        {images.map((item) => {
          console.log(item);
          const downLoadImage = () => {
            saveAs(item.urls.regular, `${item.alt_description}.png`);
          };
          return (
            <div
              key={item.id}
              className="bg-orange-100 rounded-lg p-5 flex flex-col gap-2 items-center justify-center m-[5px] overflow-auto"
            >
              <Link to={`/photodetail${item.id}`}><img
                src={item.urls.regular}
                className="w-[250px] h-[250px] object-cover cursor-pointer hover:scale-[1.2] transition-all ease-in-out duration-200"
              /></Link>

              <p>
                <span className="font-bold font-mono text-lg">
                  Description:{" "}
                </span>
                {item.alt_description}
              </p>
              <p>
                <span className="font-bold font-mono text-lg">
                  Number of Likes❤️ :{" "}
                </span>
                {item.likes}
              </p>
              <p>
                <span className="font-bold font-mono text-lg">
                  created_at :
                </span>
                {item.created_at}
              </p>

              <div>
                <button
                  className="flex items-center justify-center mx-auto px-6 py-2 rounded-lg mb-2 bg-red-300 text-white text-3xl font-bold "
                  onClick={downLoadImage}
                >
                  DownLoad
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
