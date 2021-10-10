import "./App.css";
import Tooltip from "./Tooltip/Tooltip";

function App() {
  const Content = ({ text }) => <span style={{ color: "orange" }}>{text}</span>;
  return (
    <div className="App">
      <h2>Hello, this is a React tooltip demo</h2>
      <Tooltip content={<Content text="top" />} direction="top">
        <button type="button">This is Top button</button>
      </Tooltip>
      <div class="separator"></div>
      <Tooltip content={<Content text="right" />} direction="right">
        <button type="button">This is Right button</button>
      </Tooltip>
      <div class="separator"></div>
      <Tooltip content={<Content text="left" />} direction="left">
        <button type="button">This is Left button</button>
      </Tooltip>
      <div class="separator"></div>
      <Tooltip content={<Content text="bottom" />} direction="bottom">
        <button type="button">This is Bottom button</button>
      </Tooltip>
    </div>
  );
}

export default App;
