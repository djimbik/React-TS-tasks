type StudentType = {
    id: number
    name: string
    age: number
}

type NewComponentProps = {
    students: Array<StudentType>
}
export const NewComponent = (props: NewComponentProps) => {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <div>
            <ul>
                {props.students.map(student =>
                    <li key={student.id}>
                        <span>{student.name}</span>
                        <span> age: {student.age}</span>
                    </li>)}
            </ul>
            <table>
                <thead>
                    <tr>
                        <th>manufacturer</th>
                        <th>model</th>
                    </tr>
                </thead>
                <tbody>
                    {topCars.map((topCar, index) => {
                        return <tr key={index}>
                            <td>{topCar.manufacturer}</td>
                            <td>{topCar.model}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}