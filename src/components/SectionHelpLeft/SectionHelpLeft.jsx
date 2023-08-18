import FreeCourses from "../FreeCourses/FreeCourses";
import SmCirclEle from "../SmCirclEle/SmCirclEle";
import AwardEle from "../AwardEle/AwardEle";

export default function SectionHelpLeft() {
    return (
        <div className="sec-help-l-box">
            <div className="sec-help-l-img-box">
                <img className="sec-help-l-img" src="./src/assets/images/img2b.png" alt="student with books" />
            </div>
            <FreeCourses freeCoursesClassName="sec-help-free-courses"/>
            <SmCirclEle smallCircleClass="sec-help-sm-cl-1" />
            <SmCirclEle smallCircleClass="sec-help-sm-cl-2" />
            <SmCirclEle smallCircleClass="sec-help-bg-cl" />
            <AwardEle AwardEleClass="sec-help-award-el" />

        </div>
    );
}