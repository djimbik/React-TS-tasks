import './App.css';
import React, {useState} from 'react';
import {Money} from "./Task3 - Button/Components/Money";
import FilterComponent, {FilterType} from "./Task5-Filter/FilterComponent";
import {MainStudents} from "./Task2 - map/MainStudents";
import {MainButtons} from "./Task3 - Button/Components/MainButtons";
import {MainHomework3} from "./Task3 - Button/Components/MainHomework3";
import {MainHomerok4} from "./Task4-filter/MainHomerok4";
import {MainHomework5Filter} from "./Task5-Filter/MainHomework5Filter";
import {MainInput} from "./Task6-Input/MainInput";

function App() {

    return (
        <div>
            <MainStudents/>
            <MainButtons/>
            <MainHomework3/>
            <MainHomerok4/>
            <MainHomework5Filter/>
            <MainInput/>
        </div>
    );
}

export default App;