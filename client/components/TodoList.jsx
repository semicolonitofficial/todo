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
    <div className="w-full mt-4">
      {showText?.map((text) => (
        <div
          key={text.id}
          className="flex items-center justify-between p-2 border-b"
        >
          {isEditing === text.id ? (
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              className="border p-1 flex-grow"
            />
          ) : (
            <span className="flex-grow">{text.text}</span>
          )}
          <div>
            {isEditing === text.id ? (
              <>
                <button
                  className="px-3 py-1 bg-green-500 text-white m-1"
                  onClick={() => handleSaveClick(text.id)}
                >
                  Save
                </button>
                <button
                  className="px-3 py-1 bg-gray-500 text-white m-1"
                  onClick={handleCancelClick}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  className="px-3 py-1 bg-yellow-600 m-1"
                  onClick={() => handleUpdateClick(text.id, text.text)}
                >
                  Edit
                </button>
                <button
                  className="px-3 py-1 bg-red-600 my-1"
                  onClick={() => onDeleteHandle(text.id)}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
