import React from "react";
import Color from "./Color";
import { useColor } from "./ColorProvider";
export default function ColorList(){
    const { colors } = useColor();

    return <div className="color-list">
        {
            colors.map(color => <Color key={color.id} {...color} /> )
        }
    </div>
}