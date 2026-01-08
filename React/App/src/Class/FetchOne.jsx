import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchOne = () => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://mimic-server-api.vercel.app/movies");
      // console.info(res.data)
      setVideo(res.data);
      // console.info(video)
    };

    fetchData();
  }, []);
  return (
    <>
      <section className="grid grid-cols-4">
        {video.length > 0 ? (
          video.map((item) => (
            <figure>
              <div>
                <img src={item.poster_path} alt="" />
              </div>
            </figure>
          ))
        ) : (
          <p>No videos</p>
        )}
      </section>
    </>
  );
};

export default FetchOne;
