import React from 'react';
import './App.css';
import Greeting from './components/greeting';
import Anime from './components/anime';
import { animes, persons, contacts } from './data';
import LifeCycleExample from './components/lifecycle-example';
import FormsExample from './components/forms-example';
import PropsParent from './components/props-parent';
import AvatarList from './components/avatar-list';
import FetchExample from './components/fetch-example';
import Sentiment from './components/sentiments';
import CounterContainer from './components/counter-container';
import FilterComponentExample from './components/filter-component-example';
import CustomHookExample from './components/custom-hook-example';

function App() {

  return (
    <React.Fragment>
      {/* {persons.map((p, i) => <Greeting key={i} name={p} extended={p.length < 6}></Greeting>)} */}
      {/* <h1>Top Anime</h1>
      <Anime animes={animes}></Anime> */}
      {/* <LifeCycleExample></LifeCycleExample> */}
      {/* <FormsExample></FormsExample> */}
      {/* <PropsParent></PropsParent> */}
      {/* <AvatarList avatars={contacts}></AvatarList> */}
      {/* <FetchExample></FetchExample> */}
      {/* <Sentiment></Sentiment> */}
      {/* <div style={{display:'flex', gap: '30px'}}>
        <button>POST ok</button>
        <button>PUT ok</button>
        <button>DELETE ok</button>
        <button>POST ko</button>
      </div>
      <pre style={{margin: '1rem'}} id="json">
        <code>
          {JSON.stringify({"status": "Awesome!"},undefined, 2)}
        </code>
      </pre>
      <p style={{marginTop: '1rem'}} >Status code: 200</p> */}
      {/* <CounterContainer></CounterContainer> */}
      {/* <FilterComponentExample></FilterComponentExample> */}
      <CustomHookExample></CustomHookExample>
    </React.Fragment>
  );
}

export default App;
