import React,{useState , useEffect} from 'react';

function TodoInput(props){
  const [inputText,setInputText] = useState('');//initially state is empty then any text written in textbox gets into
  //setInputText(which is used to update state and re-render component) then it is pass into inputText, ultimately then it will print value
  const [selectedDate, setSelectedDate] = useState('');



  return(
    <div className="input-container">
      <input type="text" className='input-box-todo' placeholder="Enter your Todo..."
        value={inputText}
        onChange={e=>{
          setInputText(e.target.value)
        }}
      />

      <input type="date" className="cal-date"
        value={selectedDate}
        onChange={e=>{
          setSelectedDate(e.target.value)
        }}
      />

      <button className='add-btn'
        onClick={()=>{
          props.handleAddTask(inputText,selectedDate)
          setInputText("")
          setSelectedDate("")
        }}> Add </button>
    </div>
  )
}
export default TodoInput
