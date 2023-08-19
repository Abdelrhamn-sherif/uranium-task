import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Root from './pages/Root';
import Course from './components/Course';
import CourseEdit from './pages/CourseEdit';
import CourseCreate from './pages/CourseCreate';
import StudentsList from './pages/StudentsList';
import Student from './components/Student';
import StudentEdit from './pages/StudentEdit';
import StudentCreate from './pages/StudentCreate';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path='courses/:id' element={<Course />} />
      <Route path='courses/:id/edit' element={<CourseEdit />} />
      <Route path='courses/create' element={<CourseCreate />} />
      <Route path='/students' element={<StudentsList />} />    
      <Route path='/students/create' element={<StudentCreate />} />    
      <Route path='/students/:id' element={<Student />} />
      <Route path='students/:id/edit' element={<StudentEdit />} />
    </Route>
  )
)

function App() {

  return (
    <>
      <RouterProvider router={router}/>     
    </>
  );
}

export default App;