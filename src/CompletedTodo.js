import React,{useState} from 'react';

function CompletedTodo(props){
  return(
    <table>
        <tbody>
          <tr className="heading">
            <td className="spaced-cell">Task </td>
            <td className="spaced-cell">Due Date...</td>
            <td className="spaced-cell">Completed On...</td>
            <td></td>
          </tr>
          <tr className="compItem-list">
            <td className="spaced-cell">{props.compList.text}</td>
            <td className="spaced-cell">{props.compList.date}</td>
            <td className="spaced-cell">{props.compList.currentDate}</td>
            <td className="spaced-cell">
              <spam className='icons-list'>
                 <i className="fa fa-trash icons-delete"
                 onClick={e=>{
                   props.deleteItem(props.index)
                 }}>
                 </i>
               </spam>
             </td>
          </tr>
        </tbody>
      </table>
  )
}
export default CompletedTodo
