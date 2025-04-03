import { useState } from "react";
import "./HomePage.css"; // Import du fichier CSS

function HomePage() {
    const [input, setInput] = useState("");
    const [tasks, setTasks] = useState([]);
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("Normal");

    // Ajouter une tâche
    const addTask = () => {
        if (input.trim()) {
            setTasks([...tasks, { text: input,description: description,priority: priority, completed: false }]);
            setInput(""); // Réinitialiser l'input
            setDescription("");
            setPriority("Normal")
        }
    };

    // Supprimer une tâche
    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    // Marquer une tâche comme terminée
    const completeTask = (index) => {
        setTasks(
            tasks.map((task, i) =>
                i === index ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <>
            <div>To-Do List</div>
            <div className="container">
                <label>Nouvelle tâche</label>
                <input value={input} onChange={(e) => setInput(e.target.value)} />
                <label>Description</label>
                <input value={description} onChange={(e) => setDescription(e.target.value)} />
                <label>Priorité</label>
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="Basse">Basse</option>
                    <option value="Normal">Normal</option>
                    <option value="Urgent">Urgent</option>
                </select>
                <button className="add-btn" onClick={addTask}>Ajouter</button>
            </div>
            <ul className="task-list">
                {tasks.map((task, index) => (
                    <li key={index} className={`task-item ${task.completed ? "completed" : ""}`}>
                        <div>
                            <h1>{task.text}</h1>
                            <p>{task.description}</p>
                            <span className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</span>
                        </div>
                        <button className="complete-btn" onClick={() => completeTask(index)}>✔️</button>
                        <button className="delete-btn" onClick={() => deleteTask(index)}>❌</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default HomePage;
