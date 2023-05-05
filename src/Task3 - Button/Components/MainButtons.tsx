import {Button} from "./Button";
import React from "react";


export const MainButtons = () => {
    const button1Foo = (subscriber: string, age: number) => {
        console.log(subscriber)
    }

    const buttonStupido = () => {
        console.log('just a button')
    }

    return (
        <div>
            <Button title={'MyYouTubeChanel-1'} callBack={() => button1Foo('IM VASYA', 21)}/>
            <Button title={'MyYouTubeChanel-2'} callBack={() => button1Foo('IM Ivvan', 27)}/>
            <Button title={'MyYouTubeChanel-3'} callBack={buttonStupido}/>
        </div>
    )
}