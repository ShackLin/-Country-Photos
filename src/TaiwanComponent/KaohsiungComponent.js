import React,{useState,useEffect,useRef} from 'react';
import '../RealPractice/Style.css';
import { gsap } from "gsap";
import axios from 'axios'

function KaohsiungComponent() { 
    const [PageNumbers,setPageNumbers]=useState(8)
    const[showTaipei,setShowTaipei]=useState([])
    const[showTop,setShowTop]=useState(false)
    const[showOri,setShowOri]=useState(null)
    useEffect(()=>{
        axios.get(`https://pixabay.com/api/?key=33654929-485f8c9f6f5b6038a1c1abc46&q=kaohsiung&image_type=photo/&per_page=${PageNumbers}`)
        .then(function(response){
          // console.log(response.data.hits)
            setShowTaipei(response.data.hits); 
            // console.log(response.data.hits.pageURL)
            // setPageNumbers(PageNumbers+8)
        })
    },[PageNumbers])
  
    let comp=useRef(null)
    useEffect(()=>{
       comp.style.backgroundColor='black';
       gsap.fromTo(".ImageGrid",{x:-400,y:-400,rotation:-90},{x:0,y:0,rotation:0,duration:1})
    },[])
    useEffect(()=>{
       const listener=()=>{
        setShowTop(window.scrollY>400)
       }
        window.addEventListener('srcoll',listener)
        return ()=>{
          window.removeEventListener('scroll',listener)
        }
    },[showTop])
    const HandlePage=(e)=>{
      document.querySelector(".deleteImage").style.display="block";
      setShowOri(e)
    }
    const DeletImages=()=>{
      setShowOri(!showOri)
      document.querySelector(".deleteImage").style.display="none";
    }
    const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    // const { ref:myRef, inView:myElementIsVisiable } = useInView(); 
  return (
    <div>
    <p style={{backgroundColor:"black",color:"white",fontSize:"50px",textAlign:"center",marginBottom:"-5px"}}>Kaohsiung Images</p>
      <div className="ImageGrid"  ref={el=>{comp=el}}>
      
       {showOri?(<img src={showOri} alt="" className="OriImage" style={{ transform: `translateY(${scrollPosition}px)` }}/> ):""}
       <span onClick={DeletImages} className="deleteImage" style={{ transform: `translateY(${scrollPosition}px)` }}>❌</span>
      {showTaipei && showTaipei.map(imgObj=>
        <div className="IamgeContainer" key={imgObj.id} onClick={()=>HandlePage(imgObj.largeImageURL)}>
          <img src={imgObj.largeImageURL} alt="" className="StyleImage"/>
          <h5>{imgObj.tags}</h5>
          </div>
         )}     
      <button className="showMore" onClick={()=>setPageNumbers(PageNumbers+8)}>Load More</button>
        <div className="BackTop" onClick={()=>window.scrollTo(0,0)}>
          <span class="TopText"></span>
        </div>
      </div>
    
    </div>
  )
}

export default KaohsiungComponent
