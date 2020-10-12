import React, {Fragment} from 'react';
import Header from './components/Header/Header';
import Heading from './components/Heading/Heading';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';

const App = () => {
  return (
    <Fragment>
      <Header/>
      <Heading />
      <Form />
      <Footer />
    </Fragment>
    
  );
}

export default App;
