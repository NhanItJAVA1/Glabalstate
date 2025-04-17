import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, removeTodo, setFilter } from "../store/todoSlice";

function generateId() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export default function TodoList() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todo.todos);
    const filter = useSelector((state) => state.todo.filter);

    const handleAdd = () => {
        if (text.trim()) {
            dispatch(addTodo({ id: generateId(), text: text.trim() }));
            setText("");
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") handleAdd();
    };

    const filteredTodos =
        filter === "active"
            ? todos.filter((todo) => !todo.completed)
            : filter === "completed"
                ? todos.filter((todo) => todo.completed)
                : todos;

    const getTodoColor = (id) => {
        const colors = [
            "bg-gradient-to-r from-blue-100 to-sky-100 border-blue-300",
            "bg-gradient-to-r from-sky-100 to-cyan-100 border-sky-300",
            "bg-gradient-to-r from-cyan-100 to-teal-100 border-cyan-300",
            "bg-gradient-to-r from-teal-100 to-emerald-100 border-teal-300",
            "bg-gradient-to-r from-blue-100 to-indigo-100 border-blue-300",
            "bg-gradient-to-r from-indigo-100 to-violet-100 border-indigo-300",
            "bg-gradient-to-r from-sky-100 to-blue-100 border-sky-300",
        ];
        const index = Number.parseInt(id.slice(-1), 36) % colors.length;
        return colors[index];
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-800 via-blue-600 to-cyan-400 p-6 flex items-center justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-blue-300 to-cyan-400 rounded-full mix-blend-overlay filter blur-xl opacity-70 motion-safe:animate-pulse"></div>
                <div className="absolute top-[60%] right-10 w-60 h-60 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full mix-blend-overlay filter blur-xl opacity-70 motion-safe:animate-pulse motion-safe:delay-1000"></div>
                <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-gradient-to-r from-cyan-300 to-teal-400 rounded-full mix-blend-overlay filter blur-xl opacity-70 motion-safe:animate-pulse motion-safe:delay-2000"></div>
            </div>
            <div className="max-w-md w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border-2 border-blue-200 relative z-10">
                <header className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-blue-300">
                    <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M8 2v4"></path>
                            <path d="M16 2v4"></path>
                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                            <path d="M3 10h18"></path>
                            <path d="m9 16 2 2 4-4"></path>
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">Danh sách công việc</h2>
                </header>
                <section className="mb-6">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Nhập công việc..."
                            className="flex-1 px-4 py-3 border-2 border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-white shadow-sm transition-all"
                        />
                        <button
                            onClick={handleAdd}
                            className="flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl hover:from-blue-700 hover:to-cyan-600 shadow-md hover:shadow-lg transition-all duration-300 font-medium"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M12 8v8"></path>
                                <path d="M8 12h8"></path>
                            </svg>
                            Thêm
                        </button>
                    </div>
                </section>
                <section className="mb-4">
                    <div className="grid grid-cols-3 gap-2 mb-4 bg-white/80 p-1 rounded-xl shadow-sm">
                        {[
                            { label: "Tất cả", value: "all" },
                            { label: "Đang làm", value: "active" },
                            { label: "Hoàn thành", value: "completed" },
                        ].map((tab) => (
                            <button
                                key={tab.value}
                                onClick={() => dispatch(setFilter(tab.value))}
                                className={`flex items-center justify-center gap-1 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 ${filter === tab.value
                                    ? tab.value === "all"
                                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md"
                                        : tab.value === "active"
                                            ? "bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-md"
                                            : "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-md"
                                    : "text-gray-600 hover:bg-blue-100"
                                    }`}
                            >
                                {tab.label} ({
                                    tab.value === "active"
                                        ? todos.filter((t) => !t.completed).length
                                        : tab.value === "completed"
                                            ? todos.filter((t) => t.completed).length
                                            : todos.length
                                })
                            </button>
                        ))}
                    </div>
                    <div className="min-h-[200px]">
                        {filteredTodos.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-[150px] bg-white/80 rounded-xl shadow-sm text-gray-500 text-center p-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-300 mb-3">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                </svg>
                                {filter === "all"
                                    ? "Chưa có công việc nào. Hãy thêm công việc mới!"
                                    : filter === "active"
                                        ? "Không có công việc đang làm."
                                        : "Chưa có công việc nào hoàn thành."}
                            </div>
                        ) : (
                            <ul className="space-y-3">
                                {filteredTodos.map((todo) => (
                                    <li
                                        key={todo.id}
                                        className={`flex items-center justify-between p-4 rounded-xl border-2 shadow-sm transition-all duration-300 transform hover:scale-[1.02] ${todo.completed
                                            ? "bg-gradient-to-r from-teal-100 to-cyan-100 border-teal-300"
                                            : getTodoColor(todo.id)
                                            }`}
                                    >
                                        <div
                                            className="flex items-center gap-3 cursor-pointer flex-1"
                                            onClick={() => dispatch(toggleTodo(todo.id))}
                                        >
                                            <div
                                                className={`flex items-center justify-center w-6 h-6 rounded-full border-2 transition-colors duration-300 ${todo.completed
                                                    ? "bg-gradient-to-r from-teal-500 to-cyan-500 border-teal-500"
                                                    : "border-blue-400 hover:border-blue-500"
                                                    }`}
                                            >
                                                {todo.completed && (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                                        <path d="M20 6 9 17l-5-5"></path>
                                                    </svg>
                                                )}
                                            </div>
                                            <span className={`transition-all text-base ${todo.completed ? "line-through text-gray-500" : "text-gray-700 font-medium"}`}>{todo.text}</span>
                                        </div>
                                        <button
                                            onClick={() => dispatch(removeTodo(todo.id))}
                                            className="text-red-500 hover:text-white hover:bg-gradient-to-r hover:from-red-500 hover:to-rose-500 p-2 rounded-lg transition-colors duration-300"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M3 6h18"></path>
                                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                            </svg>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </section>
                <footer className="pt-4 border-t-2 border-blue-300 flex justify-between text-sm">
                    <div className="px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-medium shadow-sm">
                        Tổng số: {todos.length}
                    </div>
                    <div className="px-3 py-1 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full font-medium shadow-sm">
                        Hoàn thành: {todos.filter((t) => t.completed).length}
                    </div>
                </footer>
            </div>
        </div>
    );
}