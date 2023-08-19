import Course from '../components/Course';
import Row from 'react-bootstrap/Row';
export default function Courses({courses}){   
    
    const coursesList = courses.map(course => <Course md="4" courseData={course} key={course.id} />);
    return (
        <Row className='mx-0'>
            {coursesList}
        </Row>
    )
}