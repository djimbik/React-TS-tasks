import {useState} from "react";
import {FullInput} from "./FullInput";
import Input from "./Input";
import Button from "./Button";


export const MainInput = () => {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    const addMessage = (mess:string) => {
        setMessage((prevMessage) => [{message: mess}, ...message ]);
        // В React этот механизм называется callback для обновления состояния.
        //когда мы вызываем колбэк в функции set, то можем получить предыдущее состоянии и изменить его!
    }

    let [title, setTitle] = useState('')

    const onClickButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div>
            {/*<FullInput addMessage = {addMessage}/>*/}
            <Input title = {title} setTitle={setTitle} />
            <Button callBack={onClickButtonHandler} name = {'тык'}/>
            {message.map((item, index) => <div key={index}>{item.message}</div>)}
        </div>
    )
}