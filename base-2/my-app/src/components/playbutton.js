import "./playbutton.css";
function PLayButton({ message, children, onClick, onPlay }) {
  let Playing = false; //don't use this approach
  function handleClick(e) {
    console.log(e);
    e.stopPropagation()
    e.preventDefault()
    if (Playing) onPlay();
    else onClick();

    Playing = !Playing;
  }
  return (
    <button onClick={handleClick}>
      {children} : {Playing ? ">" : "||"}
    </button>
  );
}

export default PLayButton;
