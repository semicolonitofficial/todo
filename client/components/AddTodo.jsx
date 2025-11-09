export default function AddTodo({ onSave, onSet, text }) {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <form onSubmit={onSave} className="flex flex-col space-y-4">
        <label
          htmlFor="todo-input"
          className="text-lg font-semibold text-gray-700"
        >
          Add New Todo
        </label>
        <input
          id="todo-input"
          onChange={(e) => onSet(e.target.value)}
          className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="What needs to be done?"
          type="text"
          name="todo-input"
          value={text}
        />
        <button
          className="px-5 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}
