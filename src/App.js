import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [answered, setAnswered] = useState([]);
  const [right, setRight] = useState(0);
  const [bad, setBad] = useState(0);
  // const [axel2, setAxel2] = useState([
  //   { word: "what", correct: false },
  //   { word: "want", correct: false },
  //   { word: "with", correct: false },
  //   { word: "where", correct: false },
  // ])
  const [axel2, setAxel2] = useState([
    { word: "I", correct: false },
    { word: "like", correct: false },
    { word: "am", correct: false },
    { word: "the", correct: false },
    { word: "we", correct: false },
    { word: "go", correct: false },
    { word: "see", correct: false },
    { word: "at", correct: false },
    { word: "can", correct: false },
    { word: "she", correct: false },
    { word: "a", correct: false },
    { word: "is", correct: false },
    { word: "in", correct: false },
    { word: "it", correct: false },
    { word: "an", correct: false },
    { word: "if", correct: false },
    { word: "he", correct: false },
    { word: "has", correct: false },
    { word: "little", correct: false },
    { word: "play", correct: false },
    { word: "on", correct: false },
    { word: "not", correct: false },
    { word: "and", correct: false },
    { word: "you", correct: false },
    { word: "big", correct: false },
    { word: "with", correct: false },
    { word: "up", correct: false },
    { word: "for", correct: false },
    { word: "no", correct: false },
    { word: "jump", correct: false },
    { word: "one", correct: false },
    { word: "get", correct: false },
    { word: "did", correct: false },
    { word: "are", correct: false },
    { word: "have", correct: false },
    { word: "said", correct: false },
    { word: "two", correct: false },
    { word: "look", correct: false },
    { word: "me", correct: false },
    { word: "come", correct: false },
    { word: "here", correct: false },
    { word: "yes", correct: false },
    { word: "my", correct: false },
    { word: "to", correct: false },
    { word: "of", correct: false },
    { word: "what", correct: false },
    { word: "put", correct: false },
    { word: "want", correct: false },
    { word: "saw", correct: false },
    { word: "this", correct: false },
  ]);

  // const [axel2, setAxel2] = useState([
  //   { word: "want", correct: false },
  //   { word: "here", correct: false },
  //   { word: "what", correct: false },
  //   { word: "want", correct: false },
  //   { word: "on", correct: false },
  //   { word: "no", correct: false },
  //   { word: "put", correct: false },
  // ])
  const random = Math.floor(Math.random() * axel2.length);
  console.log(answered);

  const correct = (index) => {
    setRight(right + 1);
    setAxel2(axel2.filter((word, i) => i !== index));
  };
  const wrong = (index) => {
    setBad(bad + 1);
    setAxel2(axel2.filter((word, i) => i !== index));
  };

  useEffect(() => {
    console.log("right", right);
    console.log("wrong", bad);
  }, [answered, axel2]);

  const wordMap = axel2.map((word, index) => {
    const hideDiv = () => {
      var div = document.getElementById("div1");
      div.style.display = "none";
    };
    if (index === random) {
      // setAnswered([...answered, { word: word.word, correct: true}]);
      return (
        <>
        <div className="App" key={index} style={{ textAlign: "center" }}>
          <p
            id="div1"
            style={{ fontSize: "100px" }}
            // {...setTimeout(hideDiv, 2000)}
          >
            {word.word}
          </p>
          </div>
          <div>
          <button
            onClick={() => correct(index)}
            style={{ margin: "10px", fontSize: "24px" }}
          >
            ✔️
          </button>
          <button
            onClick={() => wrong(index)}
            style={{ margin: "10px", fontSize: "24px" }}
          >
            ❌
          </button>
        </div>
        </>
      );
    }
  });

  if (axel2.length > 0) {
    return <>{wordMap}</>;
  } else {
    return (
      <div style={{ fontSize: "100px" }}>
        You Are Done!
        <p>Right: {right}</p>
        <p>Wrong: {bad}</p>
      </div>
    );
  }
}

export default App;
