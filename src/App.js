import React from "react";
import Counter from "./components/counter/Counter";
import Title from "./components/title/Title";
import Button from "./components/button/Button";
import Posts from "./components/posts/Posts";

function App() {
  return (
    <>
      <Title />
      <Counter />
      <Counter />
      <Counter />
      <Button />
      <Posts />
    </>
  );
}

// function App() {
//   return <div className="App">Tatjana</div>;
// }

export default App;
