
import React, {useState} from 'react';
import Card from '../UI/Card.js';
import ExpenseDate from './ExpenseDate.js';
import './ExpenseItem.css'


const ExpenseItem = (props) => {
    const [title, setTitles] = useState(props.title);
    
    console.log('expense item evaluated');
   
    function ClickHandler()
    {
        setTitles('Updated...');
        console.log(title);
    }

    
    return (
        <Card className='expense-item'>
                <ExpenseDate date={props.date}></ExpenseDate>
                <div className='expense-item__description'></div>
                <h2>{title}</h2>
                <div className='expense-item__price'>$ {props.amount}</div>     
                <button onClick={ClickHandler}> Change Title</button>           
        </Card>
    );
}

export default ExpenseItem;