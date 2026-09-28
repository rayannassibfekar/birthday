
import { DotLottieReact } from '@dotlottie/react-player';
export default function Confetti({ src,
  loop=true,
  autoplay=false,
  width=300,
  height=300,}) {
    const [Playconfetti, setPlayconfetti] = usestate(null);

    if (Playconfetti) {
      if(play){
        Playconfetti.play();
      } else{
        Playconfetti.stop();
      }
      }
  
  return (
      <div style={{width, height}}>
        <DotLottieReact 
          src={src}       
          loop={loop}
          autoplay={autoplay}
          dotLottieRefCallback={setPlayconfetti}
        />
      </div>
  );
}