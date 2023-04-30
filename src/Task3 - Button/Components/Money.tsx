
type MoneyType = {
    title: string

    callBack: () => void
}
export const Money = (props: MoneyType) => {
    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onClickHandler}>{props.title}</button>
    )
}