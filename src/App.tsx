import './App.css';
import {NewComponent} from "./Task2 - map/NewComponent";
import React, {MouseEvent, useState} from 'react';
import {Button} from "./Task3 - Button/Components/Button";
import {Money} from "./Task3 - Button/Components/Money";


function App() {
    const students = [
        {id: 1, name: 'Roma', age: 29},
        {id: 2, name: 'Dima', age: 30},
        {id: 3, name: 'Igor', age: 31},
    ]

    const money = [
        {banknote: 'dollar', nominal: 100, number: ' a1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' z 1234567890'},
        {banknote: 'ruble', nominal: 100, number: ' w1234567890'},
        {banknote: 'dollar', nominal: 100, number: ' e 1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' c1234567890'},
        {banknote: 'ruble', nominal: 100, number: ' r1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' x 1234567890'},
        {banknote: 'ruble', nominal: 50, number: ' v1234567890'},
    ]
    const onClickHandler = (name: string,) => {
        console.log(`its me, ${name}`)
    }

    const button1Foo = (subscriber: string, age: number) => {
        console.log(subscriber)
    }

    const buttonStupido = () => {
        console.log('just a button')
    }

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
        <div>
            <NewComponent students={students}/>
            {/*<button onClick={(event) => {console.log('hello')}}>MyYouTubeChanel-1</button>*/}
            <Button title={'MyYouTubeChanel-1'} callBack={() => button1Foo('IM VASYA', 21)}/>
            <Button title={'MyYouTubeChanel-2'} callBack={() => button1Foo('IM Ivvan', 27)}/>
            <Button title={'MyYouTubeChanel-3'} callBack={buttonStupido}/>

            <div className={'homework3'}>
                <Money title={'выдать рубли'} callBack = {() => {giveMoney('ruble')}}/>
                <Money title={'выдать USD'} callBack = {() => {giveMoney('dollar')}}/>
                <Money title={'выдать Все'} callBack = {giveAllMoney}/>
            </div>
        </div>
    );
}

export default App;