import { useState } from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

export default function Home() {
  const [text, setText] = useState("");
  const [toDos, setTodos] = useState([]);
  const [nextId, setNextId] = useState(1);
  const [isEditing, setIsEditing] = useState(false);

  // console.log("toDos", toDos);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      setNextId(nextId + 1);
      setTodos([...toDos, { text, id: nextId }]);
      setText("");
    }
  };

  const handleDelete = (id) => {
    setTodos(toDos.filter((todo) => todo.id !== id));
  };

  const handleSave = (id, newText) => {
    setTodos(
      toDos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="mx-auto w-full max-w-2xl">
      <h1 className="text-2xl font-bold mb-10 mt-2 text-center">
        React To Do App
      </h1>
      <AddTodo onSave={handleSubmit} onSet={setText} text={text} />
      <TodoList
        showText={toDos}
        onDeleteHandle={handleDelete}
        onSaveHandle={handleSave}
        onCancelHandle={handleCancel}
        isEditing={isEditing}
      />
    </div>
  );
}
