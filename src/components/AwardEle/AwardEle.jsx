import { IoIosRibbon } from "react-icons/io";

export default function AwardEle({ AwardEleClass }) {
    return (
        <div className={AwardEleClass}>
            <div className="award-icon-box"><IoIosRibbon className="award-icon"/></div>
            <p className="award-para">340</p>
        </div>
    );
}