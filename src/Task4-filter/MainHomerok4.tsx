import React, {useState} from "react";


export const MainHomerok4 = () => {
    let [a, setA] = useState(0)
    const onClickHandler2 = () => {
        ++a
        setA(a)
        console.log(a)
    }

    const onClickHandler3 = () => {
        a = 0;
        setA(a)
    }
    return (
        <div className={'task4'}>
            <h1>{a}</h1>
            <button onClick={onClickHandler2}>number</button>
            <button onClick={onClickHandler3}>0</button>
        </div>
    )
}