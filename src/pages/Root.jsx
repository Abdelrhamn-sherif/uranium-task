import { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import axios from 'axios';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Root() {
    // Students courses and functions
    const [coursesList, setcourses] = useState([]);
    useEffect(() => {
        axios.get('https://sheet.best/api/sheets/77f1e5ea-1184-4e39-b6b9-d972bc3adcb8').then((data) => { setcourses(data.data) })
    }, [0]);
    function editCourse(id, newcorseData) {
        setcourses(coursesList.map(course => course.id == id ? {
            ...course,
            startDate: newcorseData.startDate,
            endDate: newcorseData.endDate,
            cost: newcorseData.cost,
            capacity: newcorseData.capacity,
            status: newcorseData.status,
        } : course))
        axios.patch(`https://sheet.best/api/sheets/77f1e5ea-1184-4e39-b6b9-d972bc3adcb8/id/${id}`, {
            startDate: newcorseData.startDate,
            endDate: newcorseData.endDate,
            cost: newcorseData.cost,
            capacity: newcorseData.capacity,
            status: newcorseData.status,
        })
    }
    function createCourse(formData) {
        setcourses(oldCoursesArr => [...oldCoursesArr, formData])
        console.log({ ...formData });
        axios.post(`https://sheet.best/api/sheets/77f1e5ea-1184-4e39-b6b9-d972bc3adcb8`, {
            ...formData
        })
    }
    function deleteCourse(id) {
        setcourses(coursesList.filter(course => course.id != id))
        axios.delete(`https://sheet.best/api/sheets/77f1e5ea-1184-4e39-b6b9-d972bc3adcb8/id/${id}`)
    }


    // Students data and functions
    const [studentsList, setStudents] = useState([]);
    useEffect(() => {
        axios.get('https://sheet.best/api/sheets/77f1e5ea-1184-4e39-b6b9-d972bc3adcb8/tabs/students?_raw=1').then((data) => {
            const fixedData = data.data.map(data => ({
                id: data.id,
                name: data.name,
                email: data.email,
                phone: data.phone,
                address: data.address,
                courses: JSON.parse(data.courses)
            }))
            setStudents(fixedData)
        })
    }, [0]);
    function editStudent(id, newStudentData) {
        setStudents(studentsList.map(student => student.id == id ? {
            ...student,
            name: newStudentData.name,
            email: newStudentData.email,
            phone: newStudentData.phone,
            address: newStudentData.address,
            courses: newStudentData.courses
        } : student))
        axios.patch(`https://sheet.best/api/sheets/77f1e5ea-1184-4e39-b6b9-d972bc3adcb8/tabs/students/id/${id}?_raw=1`, {
            name: newStudentData.name,
            email: newStudentData.email,
            phone: newStudentData.phone,
            address: newStudentData.address,
            courses: newStudentData.courses
        })
    }
    function createStudent(formData) {
        setStudents(oldStudentsArr => [...oldStudentsArr, formData])
        axios.post(`https://sheet.best/api/sheets/77f1e5ea-1184-4e39-b6b9-d972bc3adcb8/tabs/students`, {
            ...formData
        })
    }
    function deleteStudent(id) {
        setStudents(studentsList.filter(student => student.id != id))
        axios.delete(`https://sheet.best/api/sheets/77f1e5ea-1184-4e39-b6b9-d972bc3adcb8/tabs/students/id/${id}`)
    }

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link className='mx-3' to={`/`}>Courses</Link></Nav.Link>
                        <Nav.Link> <Link className='mx-3' to={`/students`}>Students</Link></Nav.Link>                      
                    </Nav>
                </Navbar.Collapse>

            </Navbar>           
            <Outlet context={{ coursesList, editCourse, deleteCourse, createCourse, studentsList, editStudent, createStudent, deleteStudent }} />
        </>
    )
}