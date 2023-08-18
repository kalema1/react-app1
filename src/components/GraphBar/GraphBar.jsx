export default function GraphBar({ BarHeight1, BarHeight2, BarWidth="bar" }) {
    return (
        <div className="graph-bar">
            <div className={`${BarHeight1} ${BarWidth}`}></div>
            <div className={`${BarHeight2} ${BarWidth}`}></div>
        </div>
    );
}