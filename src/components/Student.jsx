import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useOutletContext, useParams,Link,useNavigate} from "react-router-dom";
export default function Student({studentData,md}){
    const navigate = useNavigate();
    const {coursesList, studentsList, deleteStudent} = useOutletContext(); 
    if (!studentData) {
        studentData = studentsList.find(student => student.id == useParams().id);        
    }    
    const studentCoursesArr = studentData.courses.map(function(studentCourse){
       return coursesList.find(course => course.id == studentCourse)
    });
    const studentCourse = studentCoursesArr.map(course => course.name ).join(', ');
    return(        
        <Col className={ useParams().id? 'mx-3': '' } md={md}>
            <Card className='mt-3'>                
                <Card.Body>
                    <Card.Title> <div>{studentData.name}</div></Card.Title>
                    <Row>
                        <Col md="6">
                            <Card.Text className='mt-1'>
                                Email: {studentData.email}
                            </Card.Text>
                        </Col>
                        <Col md="6">
                            <Card.Text className='mt-1 text-md-end'>
                                Telephone: {studentData.phone}
                            </Card.Text>
                        </Col>
                        <Col className='mt-1 mt-md-2' md="12">
                            <Card.Text>
                                Address: {studentData.address}
                            </Card.Text>
                        </Col>
                        <Col className='mt-1 mt-md-2' md="12">
                            <Card.Text>
                                Courses: {studentCourse}
                            </Card.Text>
                        </Col>                      
                    </Row>                   
                    {!useParams().id ? 
                        <Link to={`/students/${studentData.id}`}><Button className='mt-2 mt-md-3 w-100' variant="outline-primary">View student</Button></Link>: 
                        (
                            <Row>
                                <Col md="6">                        
                                    <Link to={`/students/${studentData.id}/edit`}><Button className='mt-2 mt-md-3 w-100' variant="outline-success">Edit student</Button> </Link>
                                </Col>
                                <Col md="6">                        
                                <Button onClick={() => { deleteStudent(studentData.id);navigate('/students');}} className='mt-2 mt-md-3 w-100' variant="outline-danger">Delete student</Button> 
                                </Col>
                                     
                            </Row>
                        )
                    }
                </Card.Body>
            </Card>           
        </Col>                    
    )
}