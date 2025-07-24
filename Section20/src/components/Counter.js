import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import  {counterActions} from "../store/index"

const Counter = () => {
const dispatch = useDispatch();  //dispatch to send action to reducer
const counter= useSelector(state =>state.counter.counter); // useSelector to get state from reducer
const show = useSelector(state=>state.counter.showCounter)

const incrementHandler = () =>{
  dispatch(counterActions.increment());  
};

const increaseHandler = () =>{
  dispatch(counterActions.increase(5));
};

const decrementHandler = () =>{
  dispatch(counterActions.decrement());
};

const toggleCounterHandler = () => {
  dispatch(counterActions.toggleCounter());
};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
 