import React from "react"
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
 import './App.css';
import { TodoContext } from "../TodoContext";
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import empty from './note-paper.png';
function AppUi(

   ) {
       const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
      } = React.useContext(TodoContext);
return (
<React.Fragment>
    <div className="hola">
   
    <div className="bar">
      
    <TodoCounter
    />
    <TodoSearch 
    
    />
    <CreateTodoButton 
    setOpenModal={setOpenModal}/>
    </div>
    
          <TodoList>
            {error && <p>Desespérate, hubo un error...</p>}
            {loading && 
            <div className="empty">
            
            
            <div>

           
            <div class="loading loading--full-height"></div>
  
           </div>
           
           <p className="">Estamos cargando, no desesperes...</p>
           
           </div>}
           
    
            {(!loading && !searchedTodos.length) &&  
            <div className="empty">
             <div>

            
            <img src={empty}/>
            </div>
            
            <p>¡Crea tu primer TO do!</p>
            
            </div>}
            
            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
          
          {!!openModal && (
              <Modal>
                  <TodoForm/>
              </Modal>)}
       
    </div>
   
    
  </React.Fragment>
  )
  }

  export { AppUi };