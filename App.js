import ExpenseItem from './components/ExpenseItem'
function App()
{
    let expenseDate= new Date(18-4-2022);
    let expenseTitle="Schools Fees";
    let expenseAmount= 500;
 return (
        <div>
            <h1>Let's  get started</h1>
            <ExpenseItem
                date={expenseDate}
                title={expenseTitle}
                amount={expenseAmount}>
            </ExpenseItem>
            
            
        </div>
        
         
    );
}
export default App;