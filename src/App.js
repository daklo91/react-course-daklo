import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Hi! I'm a prop!" />
      <Todo text="I'm another prop" />
      <Todo text="Luigi" />
    </div>
  );
}

export default App;
