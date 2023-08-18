import SectionDiscoverCarditem from "./SectionDiscoverCardItem";

export default function SectionDiscoverCard() {
    return (
        <div className="sec-dis-grid-container">
            <SectionDiscoverCarditem 
                disImage="./src/assets/images/teaching1.jpg"
                disHeading="Data Product Manager"
                disPara="Follow the step by step process to learn data and gain understandability of software based products in depth"
                disRating1="4.5"
                disRating2="⭐⭐⭐⭐⭐"
                disRating3="(100,212)"
                disPrice="$50.01"
            />
            <SectionDiscoverCarditem 
                disImage="./src/assets/images/teaching2.jpg"
                disHeading="Learning SQL"
                disPara="Get adeep knowledge from the beginning and learn how to use essential databases through SQl"
                disRating1="4.1"
                disRating2="⭐⭐⭐⭐"
                grayEmoji="⭐"
                disRating3="(80,212)"
                disPrice="$48.01"
            />
            <SectionDiscoverCarditem 
                disImage="./src/assets/images/teaching3.jpg"
                disHeading="Java Programming"
                disPara="Learn the fundamental programming concept of Java. It will open the right door for you as a Developer"
                disRating1="4.5"
                disRating2="⭐⭐⭐⭐"
                grayEmoji="⭐"
                disRating3="(30,212)"
                disPrice="$34.70"
            />
        </div>
    );
}