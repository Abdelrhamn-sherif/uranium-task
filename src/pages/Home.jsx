import { useOutletContext, Link } from "react-router-dom";
import Courses from './CoursesList';
export default function Home() {
    const {coursesList} = useOutletContext();
    return (
        <div>
            <div className="row mx-0 mt-2">
                <div className="col-12 col-md-6">
                    <h3>Courses page</h3>

                </div>
                <div className="col-12 col-md-6 text-end">
                    <Link to={`/courses/create`}><button className="btn btn-success">Create course</button></Link>
                </div>
            </div>
            <Courses courses={coursesList} />
        </div>
    )
}