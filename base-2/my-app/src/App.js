import Video from "./components/video";
import "./App.css";
import videos from "./data/data";
import PLayButton from "./components/playbutton";
function App() {
  return (
    <div className="App" onClick={()=>console.log('App')}>
      <div>videos</div>
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
    </div>
  );
}

export default App;
