import { useState } from 'react'
import axios from 'axios';
import { useOutletContext, useNavigate } from "react-router-dom";
import StudentForm from '../components/StudentForm'
import '../css/input.css'
export default function StudentCreate() {
    const navigate = useNavigate();
    const { studentsList, createStudent, coursesList } = useOutletContext();   
    const studentId = parseInt(studentsList[studentsList.length - 1].id) + 1;
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState(
        { 
            id: studentId,
            name: '', 
            email: '', 
            phone: '', 
            address: "", 
            courses: [],             
        }
    );

    function handleChange(e, isMultipleSelect) {
        if (isMultipleSelect) {
            const getCoursesId = e.map(course => course.value);           
            setFormData(formData => ({ ...formData, courses: getCoursesId }))
        }else{
            const { name, value } = e.target;
            setFormData(formData => ({ ...formData, [name]: value }))
        }
    }  
    function handleSubmit(e) {
        if (e.currentTarget.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
          }else{
            e.preventDefault();
              setValidated(true);
              createStudent(formData);
            //   axios.post('https://sheet.best/api/sheets/77f1e5ea-1184-4e39-b6b9-d972bc3adcb8', formData);
              navigate('/students')
          }      
    }
    return (
        <StudentForm coursesData={coursesList} formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} validate={validated}/>
    )
}