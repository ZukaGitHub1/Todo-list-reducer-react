import React from 'react'
import Loader from './Components/Loader/Loader';

import PostLists from './Components/PostLists/PostLists';
import withLoading from './hocs/withLoading';




function App() {
    


 const Pagacalist = withLoading(PostLists, Loader);

  return (
    <div className="App">

       
       <Pagacalist/>
        
       

        

    </div>
  );
}

export default App;
