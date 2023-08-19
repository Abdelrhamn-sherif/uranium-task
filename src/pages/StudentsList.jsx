import { useOutletContext, Link } from "react-router-dom";
import Student from '../components/Student';
import { Row } from "react-bootstrap";

export default function StudentsList() {
    const {studentsList} = useOutletContext();
    const studentList = studentsList.map(student => <Student md="4" studentData={student} key={student.id} />);
    return (
        <div>
            <div className="row mx-0 mt-2">
                <div className="col-12 col-md-6">
                    <h3>Students page</h3>

                </div>
                <div className="col-12 col-md-6 text-end">
                    <Link to={`/students/create`}><button className="btn btn-success">Create student</button></Link>
                </div>
            </div>
            <Row className="mx-0">
                {studentList}
            </Row>
        </div>
    )
}
