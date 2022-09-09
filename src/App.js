import { Output } from "./components/output";
import { Select } from "./components/select";
import { Text } from "./components/text";

function App() {
  return (
    <div className="App container">
      <h1>React sample text generator app</h1>
      <hr />
      <form className="form-inline">
        <div className="form-group">
          <label>Paragraphs</label>
          <Text />
        </div>
        <div className="form-group">
          <label>Include HTML</label>
          <Select />
        </div>

      </form>
      <Output />
    </div>
  );
}

export default App;
