import "./App.css";
import { useEffect } from "react";

import YouTubeVideo from "./YoutubeVideo.js";

function App() {
  return (
    <YouTubeVideo id="YdQhxztj8Cc"></YouTubeVideo>
    // <div className="App">
    //   <p>testing4</p>
    //   {/* <IFrame /> */}
    //   <iframe
    //     id="player"
    //     type="text/html"
    //     width="640"
    //     height="390"
    //     src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
    //     frameborder="0"
    //   ></iframe>
    // </div>
  );
}

// function LoadVideo() {
//   console.info(`loadVideo called`);

//   (function loadYoutubeIFrameApiScript() {
//     const tag = document.createElement("script");
//     tag.src = "https://www.youtube.com/iframe_api";

//     const firstScriptTag = document.getElementsByTagName("script")[0];
//     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//     tag.onload = setupPlayer;
//   })();

//   let player = null;

//   function setupPlayer() {
//     /**
//      * THIS FAILS!!!!!
//      */
//     // player = new YT.Player("player", {
//     //   height: "390",
//     //   width: "640",
//     //   videoId: "M7lc1UVf-VE",
//     //   events: {
//     //     onReady: onPlayerReady,
//     //     onStateChange: onPlayerStateChange
//     //   }
//     // });

//     /**
//      * Need to wait until Youtube Player is ready!
//      *
//      * YT.ready is not documented in https://developers.google.com/youtube/iframe_api_reference
//      * but found from https://codesandbox.io/s/youtube-iframe-api-tpjwj
//      */
//     window.YT.ready(function () {
//       console.log("test");
//       player = new window.YT.Player("video", {
//         height: "390",
//         width: "640",
//         videoId: "M7lc1UVf-VE",
//         events: {
//           onReady: onPlayerReady,
//           onStateChange: onPlayerStateChange,
//         },
//       });
//       console.log(player);
//     });
//   }

//   function onPlayerReady(event) {
//     event.target.playVideo();
//   }

//   function onPlayerStateChange(event) {
//     var videoStatuses = Object.entries(window.YT.PlayerState);
//     console.log(videoStatuses.find((status) => status[1] === event.data)[0]);
//   }
// }

// if (document.readyState !== "loading") {
//   console.info(`document.readyState ==>`, document.readyState);
//   LoadVideo();
// } else {
//   document.addEventListener("DOMContentLoaded", function () {
//     console.info(`DOMContentLoaded ==>`, document.readyState);
//     LoadVideo();
//   });
// }

// function IFrame() {
//   <div id="player"></div>;

//   console.log("test");

//   useEffect(() => {
//     // 2. This code loads the IFrame Player API code asynchronously.
//     var tag = document.createElement("script");

//     tag.src = "https://www.youtube.com/iframe_api";
//     var firstScriptTag = document.getElementsByTagName("script")[0];
//     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//     // 3. This function creates an <iframe> (and YouTube player)
//     //    after the API code downloads.
//     var player;
//     // function onYouTubeIframeAPIReady() {
//     window.YT.ready(function () {
//       player = new window.YT.Player("player", {
//         height: "390",
//         width: "640",
//         videoId: "M7lc1UVf-VE",
//         playerVars: {
//           playsinline: 1,
//         },
//         events: {
//           onReady: onPlayerReady,
//           onStateChange: onPlayerStateChange,
//         },
//       });
//     });
//     console.log(player);
//     // }

//     // 4. The API will call this function when the video player is ready.
//     function onPlayerReady(event) {
//       event.target.playVideo();
//     }

//     // 5. The API calls this function when the player's state changes.
//     //    The function indicates that when playing a video (state=1),
//     //    the player should play for six seconds and then stop.
//     var done = false;
//     function onPlayerStateChange(event) {
//       if (event.data === window.YT.PlayerState.PLAYING && !done) {
//         setTimeout(stopVideo, 6000);
//         done = true;
//       }
//     }
//     function stopVideo() {
//       player.stopVideo();
//     }
//   });
// }

export default App;
