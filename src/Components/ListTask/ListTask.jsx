import React from 'react'
import Task from '../Task/Task'
import "./ListTask.css"
import { Button } from "react-bootstrap"
import { useSelector } from "react-redux"

function ListTask() {
    const todos = useSelector(state => state.todosReducer.todos)
    return (
        <div className="listTask">
            <div className="filter_btns" style={{ marginBottom: "25px" }}>
                <Button variant="outline-success" >Show Done</Button>
                <Button variant="outline-danger" > Show Not Done</Button>
                <Button variant="info">Remove All Filters</Button>
            </div>
            {todos.map((task, index) => (<Task toDo_task={task} key={index} index={index} />))}
        </div >
    )
}

export default ListTask
