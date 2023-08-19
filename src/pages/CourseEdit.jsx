import { useState } from 'react'
import { useOutletContext, useParams, useNavigate } from "react-router-dom";
import CourseForm from '../components/CourseForm'
import '../css/input.css'
export default function CourseEdit() {
    const navigate = useNavigate();
    const {coursesList, editCourse} = useOutletContext();
    const courseItem = coursesList.find(course => course.id == useParams().id);
    const [formData, setFormData] = useState({ ...courseItem });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(formData => ({ ...formData, [name]: value }))
    }
    function handleSubmit(e) {
        e.preventDefault();
        editCourse(courseItem.id, formData);
        navigate('/')
    }
    return (

        <CourseForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>

    )
}