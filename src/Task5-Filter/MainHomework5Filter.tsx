import React, {useState} from "react";
import FilterComponent, {FilterType} from "./FilterComponent";


export const MainHomework5Filter = () => {
    const [money, setMoney] = useState(
        [
            {banknote: 'dollar', nominal: 100, number: ' a1234567890'},
            {banknote: 'dollar', nominal: 50, number: ' z 1234567890'},
            {banknote: 'ruble', nominal: 100, number: ' w1234567890'},
            {banknote: 'dollar', nominal: 100, number: ' e 1234567890'},
            {banknote: 'dollar', nominal: 50, number: ' c1234567890'},
            {banknote: 'ruble', nominal: 100, number: ' r1234567890'},
            {banknote: 'dollar', nominal: 50, number: ' x 1234567890'},
            {banknote: 'ruble', nominal: 50, number: ' v1234567890'},
        ]
    )

    let [banknotFilter, setBanknotFilter] = useState('all');

    const onClickFilterHandler = (banknotFilter: FilterType) => {
        setBanknotFilter(banknotFilter)
    }

    const filteredMoney = banknotFilter === 'all' ? money : money.filter(item => item.banknote === banknotFilter)


    return (
        <FilterComponent filteredMoney={filteredMoney} onClickFilterHandler={onClickFilterHandler}/>
    )
}