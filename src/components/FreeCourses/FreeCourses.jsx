import {BsFillBoomboxFill} from "react-icons/bs"
export default function FreeCourses ({ freeCoursesClassName="free-courses-container" }) {
    return (
        <div className={freeCoursesClassName}>
            <div className="free-course-icon-container">
                <BsFillBoomboxFill className="free-course-icon" />
            </div>
            <div>
                <p className="free-courses-para"><span>100,000+</span></p>
                <p className="free-courses-para">Free Courses</p>
            </div>
        </div>
    );
}