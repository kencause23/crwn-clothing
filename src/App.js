import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';


import HomePage from './pages/homepage/homepage.component';

// const HomePage = props => {
//   console.log(props);
//   return (
//     <div>
//     <button onClick={() => props.history.push('/topics')} ></button>
//     <h1>HOME PAGE</h1>
//   </div>
//   );
// }

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

// const TopicsList = (props) => {
//   return (
//     <div>
//       <h1>TOPIC LIST PAGE</h1>
//     </div>
//   );
// }

// const TopicDetail = () => {
//   return (
//     <div>
//       <h1>TOPIC DETAIL PAGE</h1>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}  />
        <Route exact path='/hats' component={HatsPage}  />
      </Switch>
    </div>
  );
}

export default App;
