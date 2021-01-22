
import Navbar from './Header';
import Content from './Content';
import { Fragment } from 'react';

function App() {

  return (
    <Fragment>
      <div className="dark">
        <Navbar />
        <Content />
      </div>
    </Fragment>
  );
}

export default App;
