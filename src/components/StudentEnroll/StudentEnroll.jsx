import GraphBar from "../GraphBar/GraphBar"

export default function StudentEnroll() {
    return (
        <div className="student-enroll-box">
            <p className="student-enrol-heading">Student Enroll</p>
            <div className="hero-graph-box">
                <GraphBar BarHeight1 = "bar1" BarHeight2="bar2" />
                <GraphBar BarHeight1 = "bar3" BarHeight2="bar4" />
                <GraphBar BarHeight1 = "bar5" BarHeight2="bar6" />
                <GraphBar BarHeight1 = "bar7" BarHeight2="bar8" />
                <GraphBar BarHeight1 = "bar9" BarHeight2="bar10" />
            </div>
            <p className="hero-graph-para">100% than last month</p>

        </div>
    )
}