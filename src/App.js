import './App.css';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import LoadingBar from 'react-top-loading-bar';
import React, {useState} from 'react'

function App() {
  const [progress, setProgress] = useState();
  function setProgressBar(progress) {
    setProgress(progress);
  }
  return (
    <>
    <LoadingBar
      height={3}
      color='#f11946'
      progress={progress}
    />
    <div className="container-fluid">
      <div className="card-group">
        <Sidebar setProgressBar = {setProgressBar}/>
        <Profile setProgressBar = {setProgressBar}/>
      </div>
    </div>
    </>
  );
}

export default App;
