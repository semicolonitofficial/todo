import { useState } from "react";

export default function TodoList({
  showText,
  onDeleteHandle,
  onSaveHandle,
  onCancelHandle,
}) {
  // console.log("show", showText);

  const [isEditing, setIsEditing] = useState(null);
  const [editedText, setEditedText] = useState("");

  console.log("isEditing", isEditing);

  const handleUpdateClick = (id, text) => {
    setIsEditing(id);
    setEditedText(text);
  };

  const handleSaveClick = (id) => {
    onSaveHandle(id, editedText);
    setIsEditing(null);
  };

  const handleCancelClick = () => {
    setIsEditing(null);
    onCancelHandle();
  };

  return (
    <div className="w-full mt-6 bg-white shadow-md rounded-lg p-4">
      {showText.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No todos yet! Add some above.
        </p>
      ) : (
        showText?.map((text) => (
          <div
            key={text.id}
            className="flex items-center justify-between p-3 border-b border-gray-200 last:border-b-0"
          >
            {isEditing === text.id ? (
              <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                className="border border-gray-300 p-2 rounded-md flex-grow mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <span className="flex-grow text-gray-800 text-lg">
                {text.text}
              </span>
            )}
            <div className="flex space-x-2">
              {isEditing === text.id ? (
                <>
                  <button
                    className="px-4 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                    onClick={() => handleSaveClick(text.id)}
                  >
                    Save
                  </button>
                  <button
                    className="px-4 py-2 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200"
                    onClick={handleCancelClick}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                    onClick={() => handleUpdateClick(text.id, text.text)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
                    onClick={() => onDeleteHandle(text.id)}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
