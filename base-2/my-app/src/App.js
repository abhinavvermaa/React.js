import Video from "./components/video";
import { useState } from "react";
import Counter from "./components/counter"
import "./App.css";
import videoDB from "./data/data";
import PLayButton from "./components/playbutton";
function App() {
  
  console.log('render App');
  const [videos,setVideos] = useState(videoDB);
  return (
    <div className="App" onClick={()=>console.log('App')}>
      <div><button onClick={()=>{
       
        setVideos([...videos,{
          id: videos.length+1,
          title:"React Js tutorial",
        className:"aanfoja",
        views:"100k",
        time:"1 yr ago",
        channel:"coder Dost",
        verified: true,
        id:videos.length+1
        }]);
      }}>Add Video</button></div>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          className={video.className}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        >
          <PLayButton
            onClick={() => console.log('Playing', video.title)}
            onPlay={() => console.log("paused",video.title)}
          >
            {video.title}
          </PLayButton>
        </Video>
      ))}
      <div style={{ clear: "both" }}>
        {/* <PLayButton  message="pause-message" onClick={(msg)=>alert(msg)}>Pause</PLayButton> */}
      </div>
      <Counter></Counter>
    </div>
  );
}

export default App;
