import React from 'react';

export type FilterType = 'all' | 'dollar' | 'ruble'

type MoneyType = {
    banknote: string
    nominal: number
    number: string
}

type FilterComponentType = {
    filteredMoney: Array<MoneyType>
    onClickFilterHandler: (filter: FilterType) => void
}

const FilterComponent = (props: FilterComponentType) => {
    return (
        <div className={'task5'}>
            <ul>
                {props.filteredMoney.map((item, index) => {
                    return (
                        <li key={index}>
                            <span> {item.banknote}</span>
                            <span> {item.nominal}</span>
                            <span> {item.number}</span>
                        </li>
                    )
                })}
            </ul>
            <button onClick={() => props.onClickFilterHandler('all')}>all</button>
            <button onClick={() => props.onClickFilterHandler('ruble')}>ruble</button>
            <button onClick={() => props.onClickFilterHandler('dollar')}>dollar</button>
        </div>
    );
};

export default FilterComponent;