import {Money} from "./Money";
import React, {useState} from "react";


export const MainHomework3 = () => {
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
    const giveMoney = (bank: string) => {
        const newMoney = money.filter(item => item.banknote === bank)
        const moneyOut = newMoney.reduce((sum, item) => sum + item.nominal, 0)
        console.log(`${moneyOut} ${newMoney[0].banknote}s`)
    }
    const giveAllMoney = () => {
        const allMoney = money.reduce((sum, item) => sum + item.nominal, 0)
        console.log(allMoney)
    }

    return (
        <div className={'homework3'}>
            <Money title={'выдать рубли'} callBack={() => {
                giveMoney('ruble')
            }}/>
            <Money title={'выдать USD'} callBack={() => {
                giveMoney('dollar')
            }}/>
            <Money title={'выдать Все'} callBack={giveAllMoney}/>
        </div>
    )
}