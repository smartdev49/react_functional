import React from "react";
import { useInput } from "./hooks"; 
import { useColor } from "./ColorProvider";

export default function AddColorForm() {
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput('#000000');
    const { addColor } = useColor();
    const submit = e => {
        e.preventDefault();
        addColor(titleProps.value, colorProps.value);
        resetTitle();
        resetColor();
    }
    return (
        <form onSubmit={submit}>
            <input {...titleProps} type="text" placeholder="color title" required/>
            <input {...colorProps} type="color" required />
            <input type="submit" value={`Add`}/>
        </form>
    )
}