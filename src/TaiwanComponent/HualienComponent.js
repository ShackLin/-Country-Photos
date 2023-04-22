import React, { useState, useEffect, useRef } from 'react';
import '../RealPractice/Style.css';
import { gsap } from "gsap";
import axios from 'axios'

function HualienComponent() {
  const [showTaipei, setShowTaipei] = useState([])
  const [showTop, setShowTop] = useState(false)
  const [showOri, setShowOri] = useState(null)
  const [page, setPage] = useState(1)
  useEffect(() => {
    axios.get(`https://pixabay.com/api/?key=33654929-485f8c9f6f5b6038a1c1abc46&q=Hualien&image_type=photo/&page=${page}/&per_page=50`)
      .then(function (response) {
        setShowTaipei(response.data.hits);
      })
  }, [page])

  let comp = useRef(null)
  useEffect(() => {
    comp.style.backgroundColor = 'black';
    gsap.fromTo(".ImageGrid", { x: 400, y: 400, rotation: 90 }, { x: 0, y: 0, rotation: 0, duration: 1 })
  }, [])
  useEffect(() => {
    const listener = () => {
      setShowTop(window.scrollY > 400)
    }
    window.addEventListener('srcoll', listener)
    return () => {
      window.removeEventListener('scroll', listener)
    }
  }, [showTop])
  const HandlePage = (e) => {
    document.querySelector(".deleteImage").style.display = "block";
    setShowOri(e)
  }
  const DeletImages = () => {
    setShowOri(!showOri)
    document.querySelector(".deleteImage").style.display = "none";
  }
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
      setPage(page => page + 1)
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page]);
  // const { ref:myRef, inView:myElementIsVisiable } = useInView(); 
  return (
    <div>
      <p style={{ backgroundColor: "black", color: "white", fontSize: "50px", textAlign: "center", marginBottom: "-5px" }}>Hualien Images</p>
      <div className="ImageGrid" ref={el => { comp = el }}>

        {showOri ? (<img src={showOri} alt="" className="OriImage" style={{ transform: `translateY(${scrollPosition}px)` }} />) : ""}
        <span onClick={DeletImages} className="deleteImage" style={{ transform: `translateY(${scrollPosition}px)` }}>❌</span>
        {showTaipei && showTaipei.map(imgObj =>
          <div className="IamgeContainer" key={imgObj.id} onClick={() => HandlePage(imgObj.largeImageURL)}>
            <img src={imgObj.largeImageURL} alt="" className="StyleImage" />
            <h5>{imgObj.tags}</h5>
          </div>
        )}

        <div className="BackTop" onClick={() => window.scrollTo(0, 0)}>
          <span class="TopText"></span>
        </div>
      </div>
    </div>
  )
}

export default HualienComponent