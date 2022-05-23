import { useEffect } from 'react';
import './App.css';
import './css/6f8ea0baa648607391f4.css';
import './css/8bcd2d85ebdf1d1771e9.css';
import './css/0e698843c987cb0e.css';

function App() {
  useEffect(() => {
    const videoElement = document.getElementById('my-video');
    console.log(videoElement)
  }, [])

  return (
    <div className="App">
      <video className="background-video" id="my-video" src="https://res.cloudinary.com/dnzambf4m/video/upload/v1641930582/ICE_Landing_Page_rusy2d.webm" type="video/mp4" frameBorder="0" autoPlay loop muted />
      <div id="__next">
        <span>
          <div class="MenuTop_dashboard_menu_container__hiJPw">
            <div class="ui MenuTop_menu_container__3JkBI menu">
              <img class="MenuTop_menu_logo__2Cp5g" alt="Decentral Games Logo" src="./Decentral Games _ Be The House_files/android-chrome-512x512_rmiw1y.png" />
              <div class="MenuTop_menu_items_to_hide__1Dq1z">
                <a class="item MenuTop_menu_style__WFCTT">ICE Poker</a>
                <a class="item MenuTop_menu_style__WFCTT">DAO</a>
                <a class="item MenuTop_menu_style__WFCTT">Events</a>
                <a class="item MenuTop_menu_style__WFCTT">News &amp; Blog</a>
                <a href="https://ice.decentral.games/" id="docs-top-menu" class="d-flex" target="_blank">
                  <div class="item MenuTop_menu_style__WFCTT">Docs</div>
                </a>
              </div>
              <span class="MenuTop_right_menu_items__2EMFw">
                <div class="ButtonConnect_main_right_panel__1vwA_">
                  <button class="ui blue button ButtonConnect_metamask_button__3it3b">
                    <img src="./Decentral Games _ Be The House_files/metamask-fox_szuois.png" class="ButtonConnect_metamask_icon__-q19j" />
                    Connect MetaMask
                  </button>
                  <a href="https://docs.decentral.games/getting-started/play-to-mine/get-metamask" target="_blank" class="ButtonConnect_get_metamask__2iJOi">?</a>
                </div>
              </span>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
}

export default App;
