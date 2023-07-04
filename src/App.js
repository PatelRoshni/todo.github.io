import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import TodoInput from './TodoInput';
import CompletedTodo from './CompletedTodo';
import ListTodo from './ListTodo';
import DueTaskTodo from './DueTaskTodo';
import "./App.css";

function App() {


  const [listTodo,setListTodo] = useState([]);// creating a list of array
  const [overdueTasks, setOverdueTasks] = useState([]);
//putting to fields into one array
  const handleAddTask = (inputText,selectedDate) => {
    const newTask = {
      text: inputText,
      date: selectedDate
    };

    setListTodo([...listTodo, newTask]);
  };

//delete from listTodo
  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1);
    setListTodo([...newListTodo]);
  }

// moving selected item from listTodo to destinationArray
  // const [destinationArray, setDestinationArray] = useState([]);
  // const handleItemClick = (item) => {
  //   setListTodo(listTodo.filter((el) => el !== item));
  //   setDestinationArray([...destinationArray, item]);
  // };

  const [destinationArray, setDestinationArray] = useState([]);

  const handleItemClick = (index) => {
    const currentDate = new Date().toLocaleDateString();
    const selectedData = listTodo.splice(index, 1).map(item => ({ ...item, currentDate }));
    setDestinationArray(prevDestinationArray => [...prevDestinationArray, ...selectedData]);
    setListTodo([...listTodo]);
  };

//deleting from completed section
  const deleteCompItem = (key)=>{
    let newCompTodo = [...destinationArray];
    newCompTodo.splice(key,1);
    setDestinationArray([...newCompTodo]);
  }
//moving from overdue to completed
  const handleOverdueItemClick = (index) => {
     // const item = overdueTasks.splice(index, 1)[0]; // Remove the item from the source array
     // setDestinationArray([...destinationArray, item]); // Add the item to the target array
     // setOverdueTasks([...overdueTasks]); // Update the source array state
     const currentDate = new Date().toLocaleDateString();
     const selectedData = overdueTasks.splice(index, 1).map(item => ({ ...item, currentDate }));
     setDestinationArray(prevDestinationArray => [...prevDestinationArray, ...selectedData]);
     setOverdueTasks([...overdueTasks]);

  };

//deleting from overdue section
  const deleteOverdueItem = (key)=>{
    let newOverdueTodo = [...overdueTasks];
    newOverdueTodo.splice(key,1);
    setOverdueTasks([...newOverdueTodo]);
  }

//overdue logic
useEffect(() => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1); // Subtract 2 days from the current date

    // Filter the tasks based on the date condition
    const filteredTasks = [];
    const tasksToMove = [];

    listTodo.forEach(task => {
      const taskDate = new Date(task.date);
      if (taskDate >= currentDate) {
        //tasksToMove.push(task);
        filteredTasks.push(task);
      } else {
        //filteredTasks.push(task);
        tasksToMove.push(task);
      }
    });

    // Move tasks from currentArray to movedArray using splice
    setListTodo(filteredTasks);
    setOverdueTasks(prevMovedArray => prevMovedArray.concat(tasksToMove));

  }, [listTodo]);



  return (
    <div className="main-container">
        <div className="main-top-container">
        <TodoInput handleAddTask={handleAddTask}/>
        {listTodo.map((listItem,i)=>{
          return(
            <ListTodo key={i} index={i} item={listItem}
              deleteItem={deleteListItem}
              handleClick={handleItemClick}
            />
          )
        })}
      </div>

      <div class="bottom-container">
        <div class="bottom-right-component">
          <h2><center>Completed Task</center></h2>
          {destinationArray.map((compList,i)=>{
             return(
               <CompletedTodo key={i} index={i} compList={compList} deleteItem={deleteCompItem}
               />
             )
           })}
        </div>

        <div class="bottom-left-component">
          <h2><center>OverDue Task</center></h2>
            {overdueTasks.map((dueList,i)=>{
              return(
                <DueTaskTodo key={i} index={i} dueList={dueList}
                deleteOverdueItem={deleteOverdueItem}
                handleOverdueClick={handleOverdueItemClick}
                />
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default App;
