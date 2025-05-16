import React from "react";
import { useState } from "react";

function ToDoInput({ onAdd }) {
  const [todoItem, setTodoItem] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if(todoItem.trim() === ""){
      alert('Teks tidak boleh kosong');
      return;
    }
    if (todoItem.trim()) {
      onAdd(todoItem);
      setTodoItem("");
    }
  };

  return (
    <>
      <div className="max-w-xl mx-auto px-4 py-6 bg-gray-400 rounded-xl flex flex-col items-center">
        <p className="text-2xl font-bold mb-4 text-center">Masukkan List</p>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Input List"
            onChange={(e) => setTodoItem(e.target.value)}
            className="border rounded mr-4 w-sm bg-white p-2"
          />

          <button type="submit" className="bg-white p-2 rounded-lg border duration-300 ease-in-out hover:bg-black hover:text-white">
            Tambah
          </button>
        </form>
      </div>
    </>
  );
}

export default ToDoInput;
