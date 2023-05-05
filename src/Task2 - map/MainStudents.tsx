import {NewComponent} from "./NewComponent";

export const MainStudents = () => {
    const students = [
        {id: 1, name: 'Roma', age: 29},
        {id: 2, name: 'Dima', age: 30},
        {id: 3, name: 'Igor', age: 31},
    ]

    return (
        <NewComponent students={students}/>
    )
}