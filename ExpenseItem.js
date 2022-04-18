import './ExpenseItem.css';

  function ExpenseItem(props) {
    return(  
    <div className="Expense-item">
      <h1>18/4/2022</h1>
              <div clasName="description" ><h1>{ props.title }</h1>
                </div>
                <div className="price"><h1>{props.amount}</h1></div>
        </div>
    );
  }
     export default ExpenseItem;