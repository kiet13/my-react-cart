import CartBuilder from './containers/CartBuilder';
import data from './data';

function App() {
  return (
    <CartBuilder initialState={data} />
  );
}

export default App;
  