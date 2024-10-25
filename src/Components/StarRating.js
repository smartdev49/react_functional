import React from "react";
// import { FaStar } from "react-icons/fa";
import Star from "./Star";

const createArray = length => [...Array(length)];
export default function StarRating({
    style={}, 
    totalStars = 5, 
    selectedStars=0, 
    onRate = f => f,
    ...props }) {
    // const [selectedStars, setSelectedStars] = useState(0);
    return (
        <>
            {createArray(totalStars).map((n,i) => (
                <Star   
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => onRate(i+1)}
                />
            ))}
        </>
    );
}