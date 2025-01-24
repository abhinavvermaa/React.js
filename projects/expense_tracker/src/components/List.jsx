import React from 'react';

const List = (props) => {
  return (
    <div className="list-container flex flex-col items-start bg-gray-100 p-4 rounded-md shadow-md mb-4">
      <div className="header text-lg font-bold text-gray-700 mb-2">
        <span className="name-label mr-4">Name</span>
        <span className="amount-label mr-4">Amount</span>
        <span className="date-label">Date</span>
      </div>
      <ul className="list-items text-gray-600">
        <li className="item flex justify-between">
          <span className="expense mr-4">{props.expense}</span>
          <span className="amount mr-4">{props.amount}</span>
          <span className="date">{props.date}</span>
      <button onClick={e=>{props.delete(props.index)}} className="border rounded focus:ring-blue-500 bg-green-200 ">Delete</button>
        </li>
      </ul>
    </div>
  );
};

export default List;
