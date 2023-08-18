import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function ArrowEl() {
    return (
        <div className="arrow-box">
            <div className="arrow-box-item"><IoIosArrowBack  className="arrow-icon" /></div>
            <div className="arrow-box-item"><IoIosArrowForward  className="arrow-icon" /></div>
        </div>
    );
}