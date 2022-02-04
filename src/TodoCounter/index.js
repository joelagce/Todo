import React from 'react';
import './TodoCounter.css';
import { FaTasks } from "react-icons/fa";
import { TodoContext } from '../TodoContext';
function TodoCounter() {
  const {totalTodos, completedTodos} = React.useContext(TodoContext);
  return (
    <div className="todo-counter">
      <FaTasks className="task" />
    <h2 className= "Title">Bienvenido a tu To do</h2>
    <h4 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TO doS</h4>
    </div>
  );
}

export { TodoCounter };