const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT' :
      return state + 1;
    case 'DECREMENT' :
      return state - 1;
    default:
      return state;
  }
}

//DOM Component
const Counter = ({
  value,
  onIncrement,
  onDecrement }) => (
  <div>
    <h1>{value}</h1>
    <button onCLick={onIncrement}>+</button>
    <button onCLick={onDecrement}>-</button>
  </div>
);

const { createStore } = Redux;

//Initializes the store - this    is where the data for the state is stored
const store = createStore(counter);

// When we render a React component, we set the calue to the value currently stored in the State
// And when the buttons are clicked - we dispatch the corresponding actions to the Redux store
const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() =>
        store.dispatch({
          type: 'INCREMENT'
        })
      }
      onDecrement={() =>
        store.dispatch({
          type: 'DECREMENT'
        })
      }
    />,
    document.getElementById('root')
  );
};

// create a callback that is dispatched whenever a action has been dispatched so the UI can be updated
store.subscribe(render);
render();

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});