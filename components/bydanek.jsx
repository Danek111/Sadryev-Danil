import React from 'react'
import "../bydanek.css"

function bydanek() {
  
const initNotes = [ 
    {text: 'Task 1', isEdit: false,ola:false},
    {text: 'Task 2', isEdit: false,ola:false},
    {text: 'Task 3', isEdit: false,ola:false},
    ]

const [ notes, setNotes ] = React.useState(initNotes)
const [ value, setValue ] = React.useState('')
const [ checked, setChecked] = React.useState('')


function delTask(index) {
    setNotes(
      notes.filter((item, newindex) => {
        if (newindex !== index) {
          return item;
        }
      })
    );
  } 
function addTask() {
    let obj = {
        text: value,
        isEdit: false,
      }
      setNotes([...notes, obj])
};
console.log(checked)

function startEdit(index) {
    const copy = Object.assign([], notes); 
    copy[index].isEdit = true;
    setNotes(copy); 
  }

function endEdit(index) {
    const copy = Object.assign([], notes); 
    copy[index].isEdit = false;
    setNotes(copy);
  }
function changeNote(index, event) {
    const copy = Object.assign([], notes); 
    copy[index].text = event.target.value;
    setNotes(copy);
  }
function changeCheck(id) {
    setNotes(notes.map((note) => {
        if (note.id === id ){
            note.ola = !note.ola
        }
        return note
    }))

}

const result = notes.map((item, index) => {
    let element;

    if (!item.isEdit) {
    element = 
    <div>
        <div className = "todo">
            <div className = "todo-left"> 
                <input className = "checkbox" checked={item.checked} onChange={() => changeCheck(item.id)} type="checkbox"/>
                <p className = {item.ola ? "task": "task"} key = {index} onClick={() => startEdit(index)} >{item.text}</p>
            </div>   
            <button className='btn' onClick={() => delTask(index)}>Delete</button>
        </div>
    </div>;
    } else {
    element = 
        <div className = "todo">
            <div className = "todo-left"> 
                <input className = "checkbox" checked={item.checked} onChange={() => setChecked(!checked)} type="checkbox"/>
                <input value={item.text} onChange={event => changeNote(index, event)} onBlur={() => endEdit(index)}/>
            </div>   
            <button className='btn' onClick={() => delTask(index)}>Delete</button>
        </div>;
    }
    return <p   key={index}>{element}</p>;
  });

    return (
    <div className='root'>
        <div>
            <input className='mainInput' placeholder='Add Todo...' value = {value} onChange={event => setValue(event.target.value)}></input>
            <button className='btn-none' onClick={addTask}>Отправить</button>
        </div>
        {result}
    </div>
    
  )
}

export default bydanek