import React, { useEffect, useState } from 'react'
import { TodoForm } from '../components/TodoForm'
import { TodoList } from '../components/TodoList'
import { ITodo } from '../interfaces'

declare var confirm: (question: string) => boolean

export const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
      const saved = JSON.parse(localStorage.getItem('todos') || '||') as ITodo[]
     
      setTodos(saved)
    }, [])
   
    useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
     
   }, [todos])
   
   const addHandler = (title: string) => {
     const newTodo: ITodo = {
       title: title,
       id: Date.now(),
       completed: false
     }
   //  setTodos([newTodo, ...todos])
   setTodos((prev) => [newTodo, ...prev])
   
   }
   const toggleHandler = (id: number) => {
       console.log({id});
       const newTodos = todos.map((todo) => {
        if (todo.id === id ) {
          todo.completed = !todo.completed
        }
        return todo
      })
    //  setTodos((prev) => prev.map((todo) => {
    //    if (todo.id === id ) {
    //      todo.completed = !todo.completed
    //    }
    //    return todo
    //  }))
    setTodos(newTodos);
   }
   
   
   const removeHandler = (id: number) => {
    const shouldRemove = confirm('Are you sure that you want to delete the element? ')
    if (shouldRemove) {
     setTodos((prev) => prev.filter(todo => todo.id !== id ))
    }
   
   }
 return (
     <React.Fragment>
         <TodoForm onAdd={addHandler} />
       <TodoList todos={todos} onRemove={removeHandler} onToggle={toggleHandler} />
     </React.Fragment>
 )
}