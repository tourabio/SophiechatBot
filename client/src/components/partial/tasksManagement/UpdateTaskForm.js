import React, { useState} from 'react'
import { Container, Form } from 'react-bootstrap'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { UpdateTask } from '../../redux/tasks/tasksActions'



const UpdateTaskForm = (props) => {
    const [task, setTask] = useState(props.task)

    const dispatch = useDispatch()
    //const [toRenderTask, setToRenderTask] = useState(task)
    const updateTask = () => { 
        dispatch(UpdateTask(task))
        props.unshowPopup()
    }


    return (
        
            <Container className="mt-2">  
             <Form>
                <FormSubTitle>Task title :</FormSubTitle>
                <Form.Control size="lg" type="text" 
                    value={task.title}
                    onChange={
                        (e) => setTask(
                            {...task, title : e.target.value}
                        )} 
                />
               <div className="d-flex justify-content-between mt-3">
                    <div >
                        <FormSubTitle>Begin date :</FormSubTitle>
                        <DatePicker className="form-control" 
                        value = {task.beginDate}
                        onChange = { date => setTask(
                            {...task, beginDate : date}
                        )}
                        dateFormat = "dd/MM/yyyy"
                        minDate={new Date()}
                        isClearable
                        showYearDropdown
                        />
                    </div>
                
                    <div>
                        <FormSubTitle>End date :</FormSubTitle>
                        <DatePicker className="form-control" 
                        value = {task.endDate}
                        onChange = { date => setTask(
                            {...task, endDate : date}
                        )}
                        dateFormat = "dd/MM/yyyy"
                        minDate={task.beginDate? task.beginDate : new Date()}
                        isClearable
                        showYearDropdown
                        />
                    </div>
               </div>


                    <FormSubTitle>Status</FormSubTitle>
                    <Form.Control as="select" 
                        onChange={
                            (e) => setTask({
                                ...task, status : e.target.value
                            })
                        }
                    >
                    <option value="ToDo" selected={task.status === "ToDo"}>To Do</option>
                    <option value="InProgress" selected={task.status === "InProgress"}>In Progress</option>
                    <option value="Done" selected={task.status === "Done"}>Done</option>
                    </Form.Control>

               
                <FormSubTitle className ="mt-3">Description :</FormSubTitle>
                <Form.Control size="lg" as="textarea"  rows={3} 
                    value={task.description}
                    onChange={
                        (e) => setTask(
                            {...task, description : e.target.value}
                        )
                } />


                <div className="d-flex justify-content-center mt-3">
                    <Button variant="outline-warning" onClick={updateTask}>Update Task</Button>{' '}
                </div>
                
            </Form>
        </Container>
        
    )
}

const FormSubTitle = styled.div`
font-family : Comic Sans Ms;
font-size : 1.35em;
font-weight : bolder;
color : #4F4F37;
`

export default UpdateTaskForm
