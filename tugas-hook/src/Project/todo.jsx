import React, { useEffect, useMemo, useRef, useState } from "react";

export default function TodoApp() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  // Simpan ke localStorage setiap kali todos berubah
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Fokus input saat pertama kali render
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Hitung jumlah todo selesai
  const completedCount = useMemo(
    () => todos.filter((t) => t.done).length,
    [todos]
  );

  // Tambah todo baru
  const addTodo = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now(), text, done: false }]);
    setText("");
    inputRef.current?.focus();
  };

  // Tandai selesai
  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  // Hapus todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div style={{ maxWidth: 350, margin: "20px auto", fontFamily: "sans-serif" }}>
      <h2>To-Do List</h2>
      <form onSubmit={addTodo}>
        <input
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Tambah tugas..."
        />
        <button type="submit">Tambah</button>
      </form>

      <p>Selesai: {completedCount} / {todos.length}</p>

      <ul style={{ padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ margin: "6px 0" }}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleTodo(todo.id)}
            />
            <span
              style={{
                marginLeft: 8,
                textDecoration: todo.done ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{ marginLeft: 8 }}
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
