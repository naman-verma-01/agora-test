import logo from './logo.svg';
import './App.css';
import AgoraUIKit from "agora-react-uikit";
import { useState } from 'react';

function App() {


  const [videoCall, setVideoCall] = useState(true);

  const callbacks = {
    EndCall: () => setVideoCall(false),
  };
  const rtcProps = {
    appId: "6d076e70e67342b7ba83ed8b52687cc6",
    channel: "test-agora-channel",
    token: "007eJxTYDjdtyp5+bXfe5nu3XkZP9cw9MvUw84bkw2TRe5MCJQK/mukwGCWYmBulmpukGpmbmxilGSelGhhnJpikWRqZGZhnpxsZqJnktIQyMgwc8cHRkYGCATxhRhKUotLdBPT84sSdZMzEvPyUnMYGADlQiY6",
  };


  return videoCall ? (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />

    </div>
  ) : (
    <h3 onClick={() => setVideoCall(true)}>Join</h3>
  );
}

export default App;
