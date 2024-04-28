import './Background.css'
import video1 from '../../../public/video1.mp4'
import image1 from '../../../public/image1.png'
import image2 from '../../../public/image2.png'
import image3 from '../../../public/image3.png'

const Background = ({playStatus,heroCount}) => {

if(playStatus){
  return (
    < video className='background fade-in' autoPlay loop muted>
<source src={video1} type='video/mp4'/>
    </video>
  )
}
else if(heroCount === 0){
    return(
        <img src={image1} className='background'/>

    )

}
else if(heroCount === 1){
    return <img src={image2} className='background'/>
}
else if(heroCount === 2){
    return <img src={image3} className='background'/>
}
}




export default Background