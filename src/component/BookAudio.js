 import React from 'react' 
import ReactAudioPlayer from 'react-audio-player';
//صفحة تشغسل الكتب الصوتيه 

export default function BookAudio({url}) {
    const audio = new Audio(url)
    const play = () => {
      
        audio.play();
      };
    
      const pause = () => {
        console.log("iiiiiiiiiiiiiii");
        if(audio) 
    
        audio.pause();
      };
      
    return (
        <div>
         <ReactAudioPlayer
  src={url}
  autoPlay={false}
  controls
/>
        </div>
    )
}
