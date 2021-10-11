import "./App.scss";
import Tooltip from "./Tooltip/Tooltip";

function App() {
  const Content = ({ text }) => <span style={{ color: "orange" }}>{text}</span>;
  return (
    <div className="App">
      <h2>Hello, this is a React Tooltip demo</h2>
      <Tooltip content={<Content text="top" />} position="top">
        <button type="button">This is Top button</button>
      </Tooltip>
      <div class="separator"></div>
      <Tooltip content={<Content text="right" />} position="right">
        <button type="button">This is Right button</button>
      </Tooltip>
      <div class="separator"></div>
      <Tooltip content={<Content text="left" />} position="left">
        <button type="button">This is Left button</button>
      </Tooltip>
      <div class="separator"></div>
      <Tooltip content={<Content text="bottom" />} position="bottom">
        <button type="button">This is Bottom button</button>
      </Tooltip>
    </div>
  );
}

export default App;
