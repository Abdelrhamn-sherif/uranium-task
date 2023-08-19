import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useOutletContext, useParams,Link,useNavigate} from "react-router-dom";
export default function Course({courseData,md}){
    const navigate = useNavigate();
    const {coursesList, deleteCourse} = useOutletContext();    
    if (!courseData) {
        courseData = coursesList.find(course => course.id == useParams().id);
    }   
    return(
        <Col className={ useParams().id? 'mx-3': '' } md={md}>
            <Card className='mt-3'>                
                <Card.Body>
                    <Card.Title> <div>{courseData.name}</div></Card.Title>
                    <Row>
                        <Col md="6">
                            <Card.Text className='mt-1'>
                                Start date: {courseData.startDate}
                            </Card.Text>
                        </Col>
                        <Col md="6">
                            <Card.Text className='mt-1 text-md-end'>
                                End date: {courseData.endDate}
                            </Card.Text>
                        </Col>
                        <Col className='mt-1 mt-md-2' md="4">
                            <Card.Text>
                                Cost: {courseData.cost}
                            </Card.Text>
                        </Col>
                        <Col className='mt-1 mt-md-2 text-md-center' md="4">
                            <Card.Text>
                            Capacity: {courseData.capacity}
                            </Card.Text>
                        </Col>
                        <Col className='mt-1 mt-md-2 text-md-end' md="4">
                            <Card.Text>
                                Status: {courseData.status}
                            </Card.Text>
                        </Col>
                    </Row>                   
                    {!useParams().id ? 
                        <Link to={`/courses/${courseData.id}`}><Button className='mt-2 mt-md-3 w-100' variant="outline-primary">View course</Button></Link>: 
                        (
                            <Row>
                                <Col md="6">                        
                                    <Link to={`/courses/${courseData.id}/edit`}><Button className='mt-2 mt-md-3 w-100' variant="outline-success">Edit course</Button> </Link>
                                </Col>
                                <Col md="6">                        
                                <Button onClick={() => { deleteCourse(courseData.id);navigate('/');}} className='mt-2 mt-md-3 w-100' variant="outline-danger">Delete course</Button> 
                                </Col>
                                     
                            </Row>
                        )
                    }
                </Card.Body>
            </Card>           
        </Col>
                    
    )
}