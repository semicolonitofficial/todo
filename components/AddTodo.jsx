import { useState } from "react";

export default function AddTodo() {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    console.log(e);

    e.preventDefault();
    console.log("text", text);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="UserName">User Name</label>
        <input
          onChange={(e) => setText(e.target.value)}
          className="border p-1"
          placeholder="User Name"
          type="text"
          name="UserName"
        />
        <button className="px-3 py-2 bg-blue-500" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
