// Parent component defines name and age and passes them to Child via props




import Child from "./Child";

function App() {
  const name = "Ayush";
  const age = 20;

  return (
    <div>
      <h1>Parent Component</h1>
      <Child name={name} age={age} />
    </div>
  );
}

export default App;