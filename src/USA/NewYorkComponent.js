import React,{useState,useEffect,useRef} from 'react';
import '../RealPractice/Style.css';
import { gsap } from "gsap";
import axios from 'axios'

function NewYorkComponent() { 
    const [PageNumbers,setPageNumbers]=useState(20)
    const[showTaipei,setShowTaipei]=useState([])
    const[showTop,setShowTop]=useState(false)
    const[showOri,setShowOri]=useState(null)
    const [page,setPage]=useState(1)
    useEffect(()=>{
        axios.get(`https://pixabay.com/api/?key=33654929-485f8c9f6f5b6038a1c1abc46&q=NewYork&image_type=photo/&page=${page}/&per_page=${PageNumbers}`)
        .then(function(response){
          // console.log(response.data.hits)
            setShowTaipei(response.data.hits); 
            // console.log(response.data.hits.pageURL)
            // setPageNumbers(PageNumbers+8)
        })
    },[PageNumbers,page])
  
    let comp=useRef(null)
    useEffect(()=>{
        comp.style.backgroundColor="#eeffef"
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
          setPage(page=>page+1)
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [page]);
    // const { ref:myRef, inView:myElementIsVisiable } = useInView(); 
  return (
    <div>
    <p style={{backgroundColor:"black",color:"white",fontSize:"50px",textAlign:"center",marginBottom:"-1px",padding:"6px 0"}}>NewYork Images</p>
      <div className="ImageGrid"  ref={el=>{comp=el}}>
      
       {showOri?(<img src={showOri} alt="" className="OriImage" style={{ transform: `translateY(${scrollPosition}px)` }}/> ):""}
       <span onClick={DeletImages} className="deleteImage" style={{ transform: `translateY(${scrollPosition}px)` }}>❌</span>
      {showTaipei && showTaipei.map(imgObj=>
        <div className="IamgeContainer" key={imgObj.id} onClick={()=>HandlePage(imgObj.largeImageURL)}>
          <img src={imgObj.largeImageURL} alt="" className="StyleImage2"/>
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

export default NewYorkComponent;