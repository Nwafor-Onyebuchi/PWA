import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import video from "./videos/pwa.mp4";

function App() {
  const [data, setData] = useState([]);

  // const getVideos = async () => {
  //   try {
  //     const res = await axios.get("http://orangevalleycaa.org/api/videos");
  //     setData(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // // console.log(data);
  // useEffect(() => {
  //   // getVideos();
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Art Videos</h1>

        {/* {data.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <video src={item.video_url} controls height={200} />
          </div>
        ))} */}
      </header>
      <div>
        <video src={video} height={200} controls />
      </div>
    </div>
  );
}

export default App;
