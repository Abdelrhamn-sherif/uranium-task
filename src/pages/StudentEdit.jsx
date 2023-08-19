import { useState } from 'react'
import { useOutletContext, useParams,useNavigate } from "react-router-dom";
import StudentForm from '../components/StudentForm'
import '../css/input.css'
export default function CourseEdit() {
    const navigate = useNavigate();
    const {studentsList, editStudent, coursesList} = useOutletContext();
    const courseItem = studentsList.find(course => course.id == useParams().id);
    const [formData, setFormData] = useState({ ...courseItem });
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
        e.preventDefault();
        editStudent(courseItem.id, formData);
        navigate('/students')
    }
    return (

        <StudentForm coursesData={coursesList} formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>

    )
}