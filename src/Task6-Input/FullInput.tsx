import {ChangeEvent, MouseEventHandler, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

type FullInputProps = {
    addMessage: (mess:string) => void
}

export const FullInput = (props: FullInputProps) => {
    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        title = event.currentTarget.value
        setTitle(title);

    }

    const onClickButtonHandler = () => {
        props.addMessage(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    )
}