import Todo from "./components/Todo";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Hi! I'm a prop!" />
      <Todo text="I'm another prop" />
      <Todo text="Luigi" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
