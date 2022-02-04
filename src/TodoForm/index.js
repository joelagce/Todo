import { Label } from "@material-ui/icons";
import React from "react";
import { TodoContext } from "../TodoContext";
import  './TodoForm.css';
function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,

    } =  React.useContext(TodoContext);
  const onCancel = () => {
      setOpenModal(false);
      //Funcion para cancelar el formulario
  }
  const onChange = (event) => {
    //Funcion para cancelar el formulario
    setNewTodoValue(event.target.value);
}
  const onSubmit = (event) => {
    //Funcion para cancelar el formulario
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
}


    return(
  <form onSubmit={onSubmit}>
      <h2>Una nueva tarea te espera</h2>
      <textarea
      
      value={newTodoValue}
      onChange={onChange}
      placeholder="Cortar la cebolla para el almuerzo">
          
      </textarea>
      <div>
          <button className="add" type="button" onClick={onSubmit}>Agregar</button>
          <button className="remove" type="submit" onClick={onCancel}>Cancelar</button>

      </div>
  </form>
    );
}
export { TodoForm };