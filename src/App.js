import CartBuilder from './containers/CartBuilder';
import Layout from './components/Layout/Layout';
import data from './data';

function App() {
  return (
    <Layout>
      <CartBuilder initialState={data} />
    </Layout>
  );
}

export default App;
  