import { useState } from "react";

export default function AddTodo({ onSave, onSet, text }) {
  return (
    <div>
      <form onSubmit={onSave} className="flex flex-col">
        <label htmlFor="UserName">To Do</label>
        <input
          onChange={(e) => onSet(e.target.value)}
          className="border p-1"
          placeholder="User Name"
          type="text"
          name="UserName"
          value={text}
        />
        <button className="px-3 py-2 bg-blue-500" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
