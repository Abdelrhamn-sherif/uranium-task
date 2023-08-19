import { useState } from 'react'
import axios from 'axios';
import { useOutletContext, useNavigate } from "react-router-dom";
import CourseForm from '../components/CourseForm'
import '../css/input.css'
export default function CourseEdit() {
    const navigate = useNavigate();
    const { coursesList, createCourse } = useOutletContext();   
    const courseId = parseInt(coursesList[coursesList.length - 1].id) + 1;
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState(
        { 
            id: courseId,
            name: '', 
            startDate: '', 
            endDate: '', 
            cost: "", 
            capacity: "", 
            status: 'Not Started'
        }
    );

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(formData => ({ ...formData, [name]: value }))
    }
    function handleSubmit(e) {
        if (e.currentTarget.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
          }else{
            e.preventDefault();
              setValidated(true);
              createCourse(formData);
            //   axios.post('https://sheet.best/api/sheets/77f1e5ea-1184-4e39-b6b9-d972bc3adcb8', formData);
              navigate('/')
          }      
    }
    return (
        <CourseForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} validate={validated} isCreate={true} />
    )
}