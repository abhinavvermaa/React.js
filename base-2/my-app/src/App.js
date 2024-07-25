import Video from "./components/video";
import "./App.css";

let obj = {
  title:"React Js tutorial",
        className:"aanfoja",
        views:"10k",
        time:"1 yr ago",
        channel:"coder Dost"
}
function App() {
  return (
    <div className="App">
      <div>videos</div>
      <Video
        {...obj}
      ></Video>
      <Video
        title="Node Js tutorial"
        className="aanfoja"
        views="100k"
        time="2 yr ago"
      ></Video>
      <Video
        title="Node Js full tutorial"
        className="aanfoja"
        views="100k"
        time="2 yr ago"
        channel="amanoit"
      ></Video>
    </div>
  );
}

export default App;
