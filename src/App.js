import "./App.css";
import { useRef } from "react";

function App() {
  const firstRef = useRef();
  const secondRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    const textData = firstRef.current.value;
    const dateData = secondRef.current.value;

    formData.append("d1", `${textData}`);
    formData.append("d2", `${dateData}`);

    fetch(`http://localhost/niko/datasqltestbackend/insertdata.php`, {
      method: "POST",
      body: formData,
    }).then((data) => {
      alert("siuraksiuraksiur");
    });
    alert(`text: ${textData}\ndate: ${dateData}`);
  }
  return (
    <div className="App">
      <input type={"text"} ref={firstRef} />
      <input type={"date"} ref={secondRef} />
      <div onClick={handleSubmit}>Send</div>
    </div>
  );
}

export default App;
