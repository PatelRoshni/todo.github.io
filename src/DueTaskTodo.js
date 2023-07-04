import React,{useState} from 'react';

function DueTaskTodo(props){
  return(
    <table>
        <tbody>
          <tr className="heading">
            <td className="spaced-cell">Task </td>
            <td className="spaced-cell">Due Date</td>
            <td></td>
            <td></td>
          </tr>
          <tr className="dueItem-list">
            <td className="spaced-cell">{props.dueList.text}</td>
            <td className="spaced-cell">{props.dueList.date}</td>

            <td className="spaced-cell">
              <spam className='icons-list'>
                 <i className="fa fa-trash icons-delete"
                 onClick={e=>{
                   props.deleteOverdueItem(props.index)
                 }}>
                 </i>
               </spam>
             </td>
             <td className="spaced-cell">
                <spam className='icons-list'>
                  <i class="fa-sharp fa-solid fa-check fa-xl icons-check"
                    onClick={e=>{
                      props.handleOverdueClick(props.index) //pass data in props instead index
                    }}>
                  </i>
               </spam>
             </td>
          </tr>
        </tbody>
      </table>
  )
}
export default DueTaskTodo
