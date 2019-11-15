import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import styled from 'styled-components';
import imageDefaut from './images/lotus.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import imgArrowLeft from './images/back.svg'
import imgArrowRight from './images/next.svg'


function getBorderRadius(value) {
  return `border-radius: ${value}%;`
}

function setImagePosition(value) {
  if (value === 2) {
    return (`transform : translate(-53%,-60%);`)
  } else {
    return (`transform : translate(-50%,-50%);`)
  }
}



const MasspaMenuLink01 = styled.a`
    background-color: #ddd;
    position: relative;
    display: block;
    margin: 0px auto;
    width: ${props => props.sizeImage + 'px'};
    height: ${props => props.sizeImage + 'px'};
    ${({ borderRadius }) => (borderRadius === 'rounded' ? getBorderRadius(50) : `border-radius: ${borderRadius}`)};
    border: ${props => props.borderImage};
    z-index: 3;
    overflow: hidden;

    @media only screen and (min-width: 1440px) {
      margin: 0px auto
    }
    @media only screen and (max-width: 767.98px) and (min-width: 457px){
      width: ${props => props.sizeImage * 2 + 'px'};
      height: ${props => props.sizeImage * 2 + 'px'};
    }
    @media only screen and (max-width: 456.98px) {
      width: 200px;
      height: 200px;
    }
`
const MasspaMenuLink02 = styled.a`
    background-color: #ddd;
    position: relative;
    display: block;
    width: ${props => props.sizeImage + 'px'};
    height: ${props => props.sizeImage + 'px'};
    ${({ borderRadius }) => (borderRadius === 'rounded' ? getBorderRadius(50) : `border-radius: ${borderRadius}`)};
    border: ${props => props.borderImage};
    z-index: 3;
    overflow: hidden;

    @media only screen and (min-width: 1440px) {
      margin: 0px auto
    }

    @media only screen and (max-width: 767.98px) and (min-width: 576px){
      width: 250px;
      height: 250px;
    }
    @media only screen and (max-width: 575.98px) {
      width: 200px;
      height: 200px;
    }
    @media only screen and (max-width: 479.98px) {
      margin: 0px auto
    }
`
  const MasspaMenuLink03 = styled.div`
  background-color: #ddd;
  position: relative;
  display: block;
  width: ${props => props.sizeImage + 'px'};
  height: ${props => props.sizeImage + 'px'};
  ${({ borderRadius }) => (borderRadius === 'rounded' ? getBorderRadius(50) : `border-radius: ${borderRadius}`)};
  border: ${props => props.borderImage};
  z-index: 3;
  overflow: hidden;

  @media only screen and (min-width: 1440px) {
    margin: 0px auto
  }
  @media only screen and (max-width: 767.98px) and (min-width: 576px){
    width: 250px;
    height: 250px;
  }
  @media only screen and (max-width: 575.98px) {
    width: 200px;
    height: 200px;
  }
  @media only screen and (max-width: 479.98px) {
    margin: 0px auto
  }
  `
const MasspaMenuImage02 = styled.img`
    object-fit: cover;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%);
    width: ${props => props.sizeImage + 'px'};
    height: ${props => props.sizeImage + 'px'};
    z-index: -1;
    ${({ borderRadius }) => (borderRadius === 'rounded' ? getBorderRadius(50) : `border-radius: ${borderRadius}`)};
   
    @media only screen and (max-width: 767.98px) and (min-width: 576px){
      width: 250px;
      height: 250px;
    }
    @media only screen and (max-width: 575.98px) {
      width: 200px;
      height: 200px;
    }
    @media only screen and (max-width: 479.98px) {
      margin: 0px auto
    }
`

const MasspaMenuImage = styled.img`
    object-fit: cover;
    position: absolute;
    left: 50%;
    ${({ mode }) => (mode === 1 ? "top:50%" : "top:0%")};
    ${({ mode }) => (mode === 1 ? setImagePosition(1) : setImagePosition(2))};
    width: ${props => props.sizeImage + 'px'};
    height: ${props => props.sizeImage + 'px'};
    z-index: -1;
    ${({ borderRadius }) => (borderRadius === 'rounded' ? getBorderRadius(50) : `border-radius: ${borderRadius}`)};
   
    @media only screen and (max-width: 767.98px) and (min-width: 457px){
      width: ${props => props.sizeImage * 2 + 'px'};
      height: ${props => props.sizeImage * 2 + 'px'};
    }
    @media only screen and (max-width: 456.98px) {
      width: 200px;
      height: 200px;
    }
`
const ArrowLeft = styled.img`
    position : absolute;
    top: 30%;
    left: 0%;
    width: 20px;
    height: 20px;
    z-index: 2;
    cursor: pointer;
   
`

const ArrowRight = styled.img`
    position : absolute;
    top: 30%;
    right: 0%;
    width: 20px;
    height: 20px;
    z-index: 2;
    cursor: pointer;
`


export default class MasspaItemCategory extends Component {
  constructor(props) {
    super(props)
    this.nextMenuCategory = this.nextMenuCategory.bind(this)
    this.previousMenuCategory = this.previousMenuCategory.bind(this)
  }

  static propTypes = {
    listItems: PropTypes.array.isRequired,
    link: PropTypes.string.isRequired,
    sizeImage: PropTypes.number.isRequired,
    borderImage: PropTypes.string.isRequired,
    borderRadius: PropTypes.string.isRequired,
    mode: PropTypes.number.isRequired,
    animation: PropTypes.string.isRequired,
    layout:PropTypes.number.isRequired,
    colorTitle: PropTypes.string.isRequired
  }

  nextMenuCategory() {
    this.sliderItemServices.slickNext();
  }
  previousMenuCategory() {
    this.sliderItemServices.slickPrev();
  }

  handleClickLink(id, link) {
    if (typeof navigate !== `undefined`) {
      navigate(`${link}${id}`)
    }
  }

  render() {
    const { listItems, link, sizeImage, borderImage, borderRadius, mode, animation , layout , colorTitle } = this.props
    if (listItems.length !== 0) {
      let featuredItems = listItems.filter(item => item.featured === 1);
      if (featuredItems.length !== 0) {
        if (featuredItems.length > 4) {
          let settingItem = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            pauseOnHover: false,
            arrows:false,
            responsive: [
              {
                breakpoint: 767.98,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          
          };

          return (
            <div className="masspa-item-category-slide-container">
              <Slider ref={c => (this.sliderItemServices = c)} {...settingItem} >
              {featuredItems.map((item, i) => {
                     if(item.image === ""){
                        if(mode === 2){
                          if(animation === 'zoom'){
                            return (
                                <div className="masspa-item-category-container"  key={i}>
                                   {(typeof navigate !== `undefined`) ? (
                                      <MasspaMenuLink03 onClick={() => this.handleClickLink(item.itemCode, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-zoom">
                                      <span className="masspa-item-category-overlay-2">
                                      <MasspaMenuImage  src={imageDefaut}  alt={item.title} sizeImage={sizeImage}   borderRadius={borderRadius} mode={mode}/>
                                      <div  className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                                      </span>
                                    </MasspaMenuLink03>
                                   ):(
                                    <MasspaMenuLink01 href={`${link}${item.itemCode}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-zoom">
                                    <span className="masspa-item-category-overlay-2">
                                    <MasspaMenuImage  src={imageDefaut}  alt={item.title} sizeImage={sizeImage}   borderRadius={borderRadius} mode={mode}/>
                                    <div  className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                                    </span>
                                  </MasspaMenuLink01>
                                   )}
                              
                                  {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                                </div>
        
                            )
                          }else if(animation === 'rotate'){
                            return (
                             
                                <div className="masspa-item-category-container" key={i}>
                                    {(typeof navigate !== `undefined`) ? (
                                      <MasspaMenuLink03 onClick={() => this.handleClickLink(item.itemCode, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-rotate">
                                      <span className="masspa-item-category-overlay-2">
                                      <MasspaMenuImage  src={imageDefaut}  alt={item.title} sizeImage={sizeImage}   borderRadius={borderRadius} mode={mode}/>
                                      <div  className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                                      </span>
                                      </MasspaMenuLink03>
                                    ):(
                                      <MasspaMenuLink01 href={`${link}${item.itemCode}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-rotate">
                                      <span className="masspa-item-category-overlay-2">
                                      <MasspaMenuImage  src={imageDefaut}  alt={item.title} sizeImage={sizeImage}   borderRadius={borderRadius} mode={mode}/>
                                      <div  className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                                      </span>
                                    </MasspaMenuLink01>
                                    )}
                                 
                                  {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                                </div>
                            
        
                            )
                          }else{
                            return (
                           
                                <div className="masspa-item-category-container" key={i}>
                                    {(typeof navigate !== `undefined`) ? (
                                        <MasspaMenuLink03 onClick={() => this.handleClickLink(item.itemCode, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                                        <span className="masspa-item-category-overlay-2">
                                        <MasspaMenuImage  src={imageDefaut}  alt={item.title} sizeImage={sizeImage}   borderRadius={borderRadius} mode={mode}/>
                                        <div  className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                                        </span>
                                      </MasspaMenuLink03>
                                    ):(
                                      <MasspaMenuLink01 href={`${link}${item.itemCode}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                                      <span className="masspa-item-category-overlay-2">
                                      <MasspaMenuImage  src={imageDefaut}  alt={item.title} sizeImage={sizeImage}   borderRadius={borderRadius} mode={mode}/>
                                      <div  className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                                      </span>
                                    </MasspaMenuLink01>
                                    )}
                                 
                                  {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                                </div>
                           
        
                            )
                          }
                     
                         }else{
                          if(animation === 'zoom'){
                           return (
                           
                               <div className="masspa-item-category-container" key={i}>
                                  {(typeof navigate !== `undefined`) ? (
                                    <MasspaMenuLink03 onClick={() => this.handleClickLink(item.itemCode, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-zoom">
                                    <MasspaMenuImage  src={imageDefaut}  alt={item.title} sizeImage={sizeImage}   borderRadius={borderRadius} mode={mode}/>
                                    </MasspaMenuLink03>
                                  ):(
                                    <MasspaMenuLink01 href={`${link}${item.itemCode}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-zoom">
                                    <MasspaMenuImage  src={imageDefaut}  alt={item.title} sizeImage={sizeImage}   borderRadius={borderRadius} mode={mode}/>
                                    </MasspaMenuLink01>
                                  )}
                                
                                 <div  className="masspa-item-category-title-1" style={{color : `${colorTitle}`}}>{item.title}</div>
                                 {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                               </div>
                           
       
                           )
                          }else if(animation === 'rotate'){
                           return (
                          
                               <div className="masspa-item-category-container" key={i}>
                                 {(typeof navigate !== `undefined`) ? (
                                  <MasspaMenuLink03 onClick={() => this.handleClickLink(item.itemCode, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage}  className="masspa-item-category-rotate">
                                  <MasspaMenuImage  src={imageDefaut}  alt={item.title} sizeImage={sizeImage}   borderRadius={borderRadius} mode={mode}/>
                                  </MasspaMenuLink03>
                                 ):(
                                  <MasspaMenuLink01 href={`${link}${item.itemCode}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage}  className="masspa-item-category-rotate">
                                  <MasspaMenuImage  src={imageDefaut}  alt={item.title} sizeImage={sizeImage}   borderRadius={borderRadius} mode={mode}/>
                                  </MasspaMenuLink01>
                                 )}
                             
                                 <div  className="masspa-item-category-title-1" style={{color : `${colorTitle}`}}>{item.title}</div>
                                 {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                               </div>
                          
       
                           )
                          }else{
                           return (
                         
                               <div className="masspa-item-category-container" key={i}>
                                  {(typeof navigate !== `undefined`) ? (
                                    <MasspaMenuLink03  onClick={() => this.handleClickLink(item.itemCode, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage}  >
                                    <MasspaMenuImage  src={imageDefaut}  alt={item.title} sizeImage={sizeImage}   borderRadius={borderRadius} mode={mode}/>
                                    </MasspaMenuLink03>
                                  ):(
                                    <MasspaMenuLink01 href={`${link}${item.itemCode}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage}  >
                                    <MasspaMenuImage  src={imageDefaut}  alt={item.title} sizeImage={sizeImage}   borderRadius={borderRadius} mode={mode}/>
                                    </MasspaMenuLink01>
                                  )}
                                 
                                 <div  className="masspa-item-category-title-1" style={{color : `${colorTitle}`}}>{item.title}</div>
                                 {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                               </div>
                           
       
                           )
                          }
                     
                        }
                       
                  
                     }else{
                       // xet co anh
                        if(mode === 2){
                          if(animation === 'zoom'){
                            return (
                         
                                <div className="masspa-item-category-container" key={i}>
                                  {(typeof navigate !== `undefined`) ? (
                                    <MasspaMenuLink03 onClick={() => this.handleClickLink(item.itemCode, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-zoom">
                                    <span className="masspa-item-category-overlay-2">
                                    <MasspaMenuImage  src={item.image}  alt={item.title} sizeImage={sizeImage}   borderRadius={borderRadius} mode={mode}/>
                                    <div  className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                                    </span>
                                  </MasspaMenuLink03>
                                  ):(
                                    <MasspaMenuLink01 href={`${link}${item.itemCode}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-zoom">
                                    <span className="masspa-item-category-overlay-2">
                                    <MasspaMenuImage  src={item.image}  alt={item.title} sizeImage={sizeImage}   borderRadius={borderRadius} mode={mode}/>
                                    <div  className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                                    </span>
                                  </MasspaMenuLink01>
                                  )}
                                
                                  {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                                </div>
                            
        
                            )
                          }else if(animation === 'rotate'){
                            return (
                            
                                <div className="masspa-item-category-container" key={i}>
                                    {(typeof navigate !== `undefined`) ? (
                                        <MasspaMenuLink03 onClick={() => this.handleClickLink(item.itemCode, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-rotate">
                                        <span className="masspa-item-category-overlay-2">
                                        <MasspaMenuImage  src={item.image}  alt={item.title} sizeImage={sizeImage}   borderRadius={borderRadius} mode={mode}/>
                                        <div  className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                                        </span>
                                      </MasspaMenuLink03>
                                    ):(
                                      <MasspaMenuLink01 href={`${link}${item.itemCode}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-rotate">
                                      <span className="masspa-item-category-overlay-2">
                                      <MasspaMenuImage  src={item.image}  alt={item.title} sizeImage={sizeImage}   borderRadius={borderRadius} mode={mode}/>
                                      <div  className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                                      </span>
                                    </MasspaMenuLink01>
                                    )}
                               
                                  {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                                </div>
                           
        
                            )
                          }else{
                            return (
                           
                                <div className="masspa-item-category-container" key={i}>
                                    {(typeof navigate !== `undefined`) ? (
                                        <MasspaMenuLink03 onClick={() => this.handleClickLink(item.itemCode, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                                        <span className="masspa-item-category-overlay-2">
                                        <MasspaMenuImage  src={item.image}  alt={item.title} sizeImage={sizeImage}   borderRadius={borderRadius} mode={mode}/>
                                        <div  className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                                        </span>
                                      </MasspaMenuLink03>
                                    ):(
                                      <MasspaMenuLink01 href={`${link}${item.itemCode}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                                      <span className="masspa-item-category-overlay-2">
                                      <MasspaMenuImage  src={item.image}  alt={item.title} sizeImage={sizeImage}   borderRadius={borderRadius} mode={mode}/>
                                      <div  className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                                      </span>
                                    </MasspaMenuLink01>
                                    )}
                                 
                                  {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                                </div>
                            
        
                            )
                          }
                     
                         }else{
                          if(animation === 'zoom'){
                           return (
                           
                               <div className="masspa-item-category-container" key={i}>
                                   {(typeof navigate !== `undefined`) ? (
                                        <MasspaMenuLink01 onClick={() => this.handleClickLink(item.itemCode, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-zoom">
                                        <MasspaMenuImage  src={item.image}  alt={item.title} sizeImage={sizeImage}   borderRadius={borderRadius} mode={mode} />
                                      </MasspaMenuLink01>
                                   ):(
                                    <MasspaMenuLink01 href={`${link}${item.itemCode}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-zoom">
                                    <MasspaMenuImage  src={item.image}  alt={item.title} sizeImage={sizeImage}   borderRadius={borderRadius} mode={mode} />
                                  </MasspaMenuLink01>
                                   )}
                               
                                 <div  className="masspa-item-category-title-1" style={{color : `${colorTitle}`}}>{item.title}</div>
                                 {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                               </div>
                          
       
                           )
                          }else if(animation === 'rotate'){
                           return (
                               <div className="masspa-item-category-container" key={i}>
                                  {(typeof navigate !== `undefined`) ? (
                                      <MasspaMenuLink03 onClick={() => this.handleClickLink(item.itemCode, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-rotate">
                                      <MasspaMenuImage  src={item.image}  alt={item.title} sizeImage={sizeImage}   borderRadius={borderRadius} mode={mode} />
                                    </MasspaMenuLink03>
                                  ):(
                                    <MasspaMenuLink01 href={`${link}${item.itemCode}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-rotate">
                                    <MasspaMenuImage  src={item.image}  alt={item.title} sizeImage={sizeImage}   borderRadius={borderRadius} mode={mode} />
                                  </MasspaMenuLink01>
                                  )}
                               
                                 <div  className="masspa-item-category-title-1" style={{color : `${colorTitle}`}}>{item.title}</div>
                                 {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                               </div>
       
                           )
                          }else{
                           return (
                               <div className="masspa-item-category-container" key={i}>
                                  {(typeof navigate !== `undefined`) ? (
                                    <MasspaMenuLink03 onClick={() => this.handleClickLink(item.itemCode, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                                    <MasspaMenuImage  src={item.image}  alt={item.title} sizeImage={sizeImage}   borderRadius={borderRadius} mode={mode} />
                                    </MasspaMenuLink03>
                                  ):(
                                    <MasspaMenuLink01 href={`${link}${item.itemCode}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                                    <MasspaMenuImage  src={item.image}  alt={item.title} sizeImage={sizeImage}   borderRadius={borderRadius} mode={mode} />
                                  </MasspaMenuLink01>
                                  )}
                                
                                 <div  className="masspa-item-category-title-1" style={{color : `${colorTitle}`}}>{item.title}</div>
                                 {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                               </div>
       
                           )
                          }
                     
                        }
                       
                
             
                     }
               
                })
              }
              </Slider>
              <ArrowLeft src={imgArrowLeft} onClick={this.previousMenuCategory} />
              <ArrowRight src={imgArrowRight} onClick={this.nextMenuCategory} />
            </div>
          )

         } else {

          return  <div className="row no-gutters">
          {featuredItems.map((item, i) => {
            if (item.image === "" || item.image === null) {
              if(layout === 2){
                //dang dac biet
                if (mode === 2) {
                  if(animation === 'zoom'){
                    return (
                      <div className="col-md-6 col-sm-12 col-xs-6" key={i}>
                      <div className="masspa-item-category-card fade-in-left">
                        <div className="col-md-5 col-sm-5">
                        {(typeof navigate !== `undefined`) ? (
                          <MasspaMenuLink03 onClick={() => this.handleClickLink(item.itemCode, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-zoom">
                          <span className="masspa-item-category-overlay-2">
                            <MasspaMenuImage src={imageDefaut} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                            <div className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                          </span>
                          </MasspaMenuLink03>
                        ):(
                          <MasspaMenuLink02 href={`${link}${item.itemCode}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-zoom">
                          <span className="masspa-item-category-overlay-2">
                            <MasspaMenuImage src={imageDefaut} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                            <div className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                          </span>
                        </MasspaMenuLink02>
                        )}
                      
                        </div>
                      <div className="col-md-7 col-sm-7">
                      <div className="masspa-item-category-group-title-text">
                          {item.description !== null ? <div className="masspa-item-category-text-layout02" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                        </div>
                      </div>
                      </div>
                    </div>
                    )
                  }else if(animation === 'rotate'){
                    return (
                      <div className="col-md-6 col-sm-12 col-xs-6" key={i}>
                      <div className="masspa-item-category-card fade-in-left">
                        <div className="col-md-5 col-sm-5">
                        {(typeof navigate !== `undefined`) ? (
                            <MasspaMenuLink03 onClick={() => this.handleClickLink(item.itemCode, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-rotate">
                            <span className="masspa-item-category-overlay-2">
                              <MasspaMenuImage src={imageDefaut} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                              <div className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                            </span>
                          </MasspaMenuLink03>
                        ):(
                          <MasspaMenuLink02 href={`${link}${item.itemCode}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-rotate">
                          <span className="masspa-item-category-overlay-2">
                            <MasspaMenuImage src={imageDefaut} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                            <div className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                          </span>
                        </MasspaMenuLink02>
                        )}
                     
                        </div>
                      <div className="col-md-7 col-sm-7">
                      <div className="masspa-item-category-group-title-text">
                          {item.description !== null ? <div className="masspa-item-category-text-layout02" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                        </div>
                      </div>
                      </div>
                    </div>
                    )
                  }else{
                    return(
                      <div className="col-md-6 col-sm-12 col-xs-6" key={i}>
                        <div className="masspa-item-category-card fade-in-left">
                          <div className="col-md-5 col-sm-5">
                          {(typeof navigate !== `undefined`) ? (
                            <MasspaMenuLink03 onClick={() => this.handleClickLink(item.itemCode, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                            <span className="masspa-item-category-overlay-2">
                              <MasspaMenuImage src={imageDefaut} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                              <div className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                            </span>
                          </MasspaMenuLink03>
                          ):(
                            <MasspaMenuLink02 href={`${link}${item.itemCode}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                            <span className="masspa-item-category-overlay-2">
                              <MasspaMenuImage src={imageDefaut} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                              <div className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                            </span>
                          </MasspaMenuLink02>
                          )}
                         
                          </div>
                        <div className="col-md-7 col-sm-7">
                        <div className="masspa-item-category-group-title-text">
                            {item.description !== null ? <div className="masspa-item-category-text-layout02" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                          </div>
                        </div>
                        </div>
                      </div>
                    )
                  }
                }else{
                  return(
                    <div className="col-md-6 col-sm-12 col-xs-6" key={i}>
                      <div className="masspa-item-category-card fade-in-left">
                        <div className="col-md-5 col-sm-5">
                        {(typeof navigate !== `undefined`) ? (
                          <MasspaMenuLink03 onClick={() => this.handleClickLink(item.itemCode, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-zoom">
                          <MasspaMenuImage02 src={imageDefaut} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} />
                          </MasspaMenuLink03>
                        ):(
                          <MasspaMenuLink02 href={`${link}${item.itemCode}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-zoom">
                          <MasspaMenuImage02 src={imageDefaut} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} />
                        </MasspaMenuLink02>
                        )}
                     
                        </div>
                      <div className="col-md-7 col-sm-7">
                      <div className="masspa-item-category-group-title-text">
                          <a href={link}>
                            <span className="masspa-item-category-title-3" style={{color : `${colorTitle}`}}>
                              {item.title}
                            </span>
                          </a>
                          {item.description !== null ? <div className="masspa-item-category-text-layout02" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                        </div>
                      </div>
                      </div>
                    </div>
                  )
                }
            
              }else{
                if (mode === 2) {
                  if (animation === 'zoom') {
                    return (
                      <div className="col-sm-12 col-md-3 col-lg-3" key={i}>
                        <div className="masspa-item-category-container">
                        {(typeof navigate !== `undefined`) ? (
                          <MasspaMenuLink03 onClick={() => this.handleClickLink(item.itemCode, link)}  sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-zoom">
                          <span className="masspa-item-category-overlay-2">
                            <MasspaMenuImage src={imageDefaut} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                            <div className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                          </span>
                        </MasspaMenuLink03>
                        ):(
                          <MasspaMenuLink01 href={`${link}${item.itemCode}`}  sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-zoom">
                          <span className="masspa-item-category-overlay-2">
                            <MasspaMenuImage src={imageDefaut} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                            <div className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                          </span>
                        </MasspaMenuLink01>
                        )}
                        
                          {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                        </div>
                      </div>
  
                    )
                  } else if (animation === 'rotate') {
                    return (
                      <div className="col-sm-12 col-md-3 col-lg-3" key={i}>
                        <div className="masspa-item-category-container">
                        {(typeof navigate !== `undefined`) ? (
                          <MasspaMenuLink03 onClick={() => this.handleClickLink(item.itemCode, link)}   sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-rotate">
                          <span className="masspa-item-category-overlay-2">
                            <MasspaMenuImage src={imageDefaut} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                            <div className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                          </span>
                        </MasspaMenuLink03>
                        ):(
                          <MasspaMenuLink01 href={`${link}${item.itemCode}`}  sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-rotate">
                          <span className="masspa-item-category-overlay-2">
                            <MasspaMenuImage src={imageDefaut} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                            <div className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                          </span>
                        </MasspaMenuLink01>
                        )}
                        
                          {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                        </div>
                      </div>
  
                    )
                  } else {
                    return (
                      <div className="col-sm-12 col-md-3 col-lg-3" key={i}>
                        <div className="masspa-item-category-container">
                        {(typeof navigate !== `undefined`) ? (
                            <MasspaMenuLink03 onClick={() => this.handleClickLink(item.itemCode, link)}   sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                            <span className="masspa-item-category-overlay-2">
                              <MasspaMenuImage src={imageDefaut} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                              <div className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                            </span>
                          </MasspaMenuLink03>
                        ):(
                          <MasspaMenuLink01 href={`${link}${item.itemCode}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                          <span className="masspa-item-category-overlay-2">
                            <MasspaMenuImage src={imageDefaut} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                            <div className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                          </span>
                        </MasspaMenuLink01>
                        )}
                        
                          {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                        </div>
                      </div>
  
                    )
                  }
  
                } else {
                  if (animation === 'zoom') {
                    return (
                      <div className="col-sm-12 col-md-3 col-lg-3" key={i}>
                        <div className="masspa-item-category-container">
                        {(typeof navigate !== `undefined`) ? (
                          <MasspaMenuLink03 onClick={() => this.handleClickLink(item.itemCode, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-zoom">
                          <MasspaMenuImage src={imageDefaut} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                          </MasspaMenuLink03>
                        ):(
                          <MasspaMenuLink01 href={`${link}${item.itemCode}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-zoom">
                          <MasspaMenuImage src={imageDefaut} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                        </MasspaMenuLink01>
                        )}
                       
                          <div className="masspa-item-category-title-1" style={{color : `${colorTitle}`}}>{item.title}</div>
                          {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                        </div>
                      </div>
  
                    )
                  } else if (animation === 'rotate') {
                    return (
                      <div className="col-sm-12 col-md-3 col-lg-3" key={i}>
                        <div className="masspa-item-category-container">
                        {(typeof navigate !== `undefined`) ? (
                            <MasspaMenuLink03 onClick={() => this.handleClickLink(item.itemCode, link)}  sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-rotate">
                            <MasspaMenuImage src={imageDefaut} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                          </MasspaMenuLink03>
                        ):(
                          <MasspaMenuLink01 href={`${link}${item.itemCode}`}  sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-rotate">
                          <MasspaMenuImage src={imageDefaut} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                        </MasspaMenuLink01>
                        )}
                        
                          <div className="masspa-item-category-title-1" style={{color : `${colorTitle}`}}>{item.title}</div>
                          {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                        </div>
                      </div>
  
                    )
                  } else {
                    return (
                      <div className="col-sm-12 col-md-3 col-lg-3" key={i}>
                        <div className="masspa-item-category-container">
                        {(typeof navigate !== `undefined`) ? (
                          <MasspaMenuLink03  onClick={() => this.handleClickLink(item.itemCode, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                          <MasspaMenuImage src={imageDefaut} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                          </MasspaMenuLink03>
                        ):(
                          <MasspaMenuLink01 href={`${link}${item.itemCode}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                          <MasspaMenuImage src={imageDefaut} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                        </MasspaMenuLink01>
                        )}
                        
                          <div className="masspa-item-category-title-1" style={{color : `${colorTitle}`}}>{item.title}</div>
                          {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                        </div>
                      </div>
  
                    )
                  }
  
                }
              }
         
            } else {
              if(layout === 2){
                //dang dac biet
                if (mode === 2) {
                  if(animation === 'zoom'){
                    return (
                      <div className="col-md-6 col-sm-12 col-xs-6" key={i}>
                      <div className="masspa-item-category-card fade-in-left">
                        <div className="col-md-5 col-sm-5">
                        {(typeof navigate !== `undefined`) ? (
                          <MasspaMenuLink03 onClick={() => this.handleClickLink(item.itemCode, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-zoom">
                          <span className="masspa-item-category-overlay-2">
                            <MasspaMenuImage src={item.image} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                            <div className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                          </span>
                        </MasspaMenuLink03>
                        ):(
                          <MasspaMenuLink02 href={`${link}${item.itemCode}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-zoom">
                          <span className="masspa-item-category-overlay-2">
                            <MasspaMenuImage src={item.image} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                            <div className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                          </span>
                        </MasspaMenuLink02>
                        )}
                    
                        </div>
                      <div className="col-md-7 col-sm-7">
                      <div className="masspa-item-category-group-title-text">
                          {item.description !== null ? <div className="masspa-item-category-text-layout02" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                        </div>
                      </div>
                      </div>
                    </div>
                    )
                  }else if(animation === 'rotate'){
                    return (
                      <div className="col-md-6 col-sm-12 col-xs-6" key={i}>
                      <div className="masspa-item-category-card fade-in-left">
                        <div className="col-md-5 col-sm-5">
                        {(typeof navigate !== `undefined`) ? (
                          <MasspaMenuLink03  onClick={() => this.handleClickLink(item.itemCode, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-rotate">
                          <span className="masspa-item-category-overlay-2">
                            <MasspaMenuImage src={item.image} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                            <div className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                          </span>
                        </MasspaMenuLink03>
                        ):(
                          <MasspaMenuLink02  href={`${link}${item.itemCode}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-rotate">
                          <span className="masspa-item-category-overlay-2">
                            <MasspaMenuImage src={item.image} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                            <div className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                          </span>
                        </MasspaMenuLink02>
                        )}
                      
                        </div>
                      <div className="col-md-7 col-sm-7">
                      <div className="masspa-item-category-group-title-text">
                          {item.description !== null ? <div className="masspa-item-category-text-layout02" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                        </div>
                      </div>
                      </div>
                    </div>
                    )
                  }else{
                    return(
                      <div className="col-md-6 col-sm-12 col-xs-6" key={i}>
                        <div className="masspa-item-category-card fade-in-left">
                          <div className="col-md-5 col-sm-5">
                          {(typeof navigate !== `undefined`) ? (
                              <MasspaMenuLink03 onClick={() => this.handleClickLink(item.itemCode, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                              <span className="masspa-item-category-overlay-2">
                                <MasspaMenuImage src={item.image} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                                <div className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                              </span>
                            </MasspaMenuLink03>
                          ):(
                            <MasspaMenuLink02 href={`${link}${item.itemCode}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                            <span className="masspa-item-category-overlay-2">
                              <MasspaMenuImage src={item.image} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                              <div className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                            </span>
                          </MasspaMenuLink02>
                          )}
                       
                          </div>
                        <div className="col-md-7 col-sm-7">
                        <div className="masspa-item-category-group-title-text">
                            {item.description !== null ? <div className="masspa-item-category-text-layout02" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                          </div>
                        </div>
                        </div>
                      </div>
                    )
                  }
                }else{
                  if (animation === 'zoom') {
                    return(
                      <div className="col-md-6 col-sm-12 col-xs-6" key={i}>
                        <div className="masspa-item-category-card fade-in-left">
                          <div className="col-md-5 col-sm-5">
                          {(typeof navigate !== `undefined`) ? (
                              <MasspaMenuLink03 onClick={() => this.handleClickLink(item.itemCode, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-zoom">
                              <MasspaMenuImage02 src={item.image} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} />
                            </MasspaMenuLink03>
                          ):(
                            <MasspaMenuLink02 href={`${link}${item.itemCode}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-zoom">
                            <MasspaMenuImage02 src={item.image} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} />
                          </MasspaMenuLink02>
                          )}
                         
                          </div>
                        <div className="col-md-7 col-sm-7">
                        <div className="masspa-item-category-group-title-text">
                            <a href={link}>
                              <span className="masspa-item-category-title-3" style={{color : `${colorTitle}`}}>
                                {item.title}
                              </span>
                            </a>
                            {item.description !== null ? <div className="masspa-item-category-text-layout02" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                          </div>
                        </div>
                        </div>
                      </div>
                    )
                  }else if(animation === 'rotate'){
                    return(
                      <div className="col-md-6 col-sm-12 col-xs-6" key={i}>
                        <div className="masspa-item-category-card fade-in-left">
                          <div className="col-md-5 col-sm-5">
                          {(typeof navigate !== `undefined`) ? (
                              <MasspaMenuLink03  onClick={() => this.handleClickLink(item.itemCode, link)}  sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-rotate">
                              <MasspaMenuImage02 src={item.image} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} />
                            </MasspaMenuLink03>
                          ):(
                            <MasspaMenuLink02  href={`${link}${item.itemCode}`}  sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-rotate">
                            <MasspaMenuImage02 src={item.image} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} />
                          </MasspaMenuLink02>
                          )}
                        
                          </div>
                        <div className="col-md-7 col-sm-7">
                        <div className="masspa-item-category-group-title-text">
                            <a href={link}>
                              <span className="masspa-item-category-title-3" style={{color : `${colorTitle}`}}>
                                {item.title}
                              </span>
                            </a>
                            {item.description !== null ? <div className="masspa-item-category-text-layout02" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                          </div>
                        </div>
                        </div>
                      </div>
                    )
                  }else{
                    return(
                      <div className="col-md-6 col-sm-12 col-xs-6" key={i}>
                        <div className="masspa-item-category-card fade-in-left">
                          <div className="col-md-5 col-sm-5">
                          {(typeof navigate !== `undefined`) ? (
                            <MasspaMenuLink03 onClick={() => this.handleClickLink(item.itemCode, link)}  sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                            <MasspaMenuImage02 src={item.image} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} />
                          </MasspaMenuLink03>
                          ):(
                            <MasspaMenuLink02 href={`${link}${item.itemCode}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                            <MasspaMenuImage02 src={item.image} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} />
                          </MasspaMenuLink02>
                          )}
                       
                          </div>
                        <div className="col-md-7 col-sm-7">
                        <div className="masspa-item-category-group-title-text">
                            <a href={link}>
                              <span className="masspa-item-category-title-3" style={{color : `${colorTitle}`}}>
                                {item.title}
                              </span>
                            </a>
                            {item.description !== null ? <div className="masspa-item-category-text-layout02" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                          </div>
                        </div>
                        </div>
                      </div>
                    )
                  }
                }
         
              }else{
                if (mode === 2) {
                  if (animation === 'zoom') {
                    return (
                      <div className="col-sm-12 col-md-3 col-lg-3" key={i}>
                        <div className="masspa-item-category-container">
                        {(typeof navigate !== `undefined`) ? (
                          <MasspaMenuLink03 onClick={() => this.handleClickLink(item.itemCode, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-zoom">
                          <span className="masspa-item-category-overlay-2">
                            <MasspaMenuImage src={item.image} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                            <div className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                          </span>
                        </MasspaMenuLink03>
                        ):(
                          <MasspaMenuLink01 href={`${link}${item.itemCode}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-zoom">
                          <span className="masspa-item-category-overlay-2">
                            <MasspaMenuImage src={item.image} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                            <div className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                          </span>
                        </MasspaMenuLink01>
                        )}
                   
                          {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                        </div>
                      </div>
  
                    )
                  } else if (animation === 'rotate') {
                    return (
                      <div className="col-sm-12 col-md-3 col-lg-3" key={i}>
                        <div className="masspa-item-category-container">
                        {(typeof navigate !== `undefined`) ? (
                            <MasspaMenuLink03 onClick={() => this.handleClickLink(item.itemCode, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-rotate">
                            <span className="masspa-item-category-overlay-2">
                              <MasspaMenuImage src={item.image} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                              <div className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                            </span>
                          </MasspaMenuLink03>
                        ):(
                          <MasspaMenuLink01 href={`${link}${item.itemCode}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-rotate">
                          <span className="masspa-item-category-overlay-2">
                            <MasspaMenuImage src={item.image} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                            <div className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                          </span>
                        </MasspaMenuLink01>
                        )}
                         
                          {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                        </div>
                      </div>
  
                    )
                  } else {
                    return (
                      <div className="col-sm-12 col-md-3 col-lg-3" key={i}>
                        <div className="masspa-item-category-container">
                        {(typeof navigate !== `undefined`) ? (
                            <MasspaMenuLink03 onClick={() => this.handleClickLink(item.itemCode, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                            <span className="masspa-item-category-overlay-2">
                              <MasspaMenuImage src={item.image} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                              <div className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                            </span>
                          </MasspaMenuLink03>
                        ):(
                          <MasspaMenuLink01 href={`${link}${item.itemCode}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                          <span className="masspa-item-category-overlay-2">
                            <MasspaMenuImage src={item.image} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                            <div className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                          </span>
                        </MasspaMenuLink01>
                        )}
                       
                          {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                        </div>
                      </div>
  
                    )
                  }
  
                } else {
                  if (animation === 'zoom') {
                    return (
                      <div className="col-sm-12 col-md-3 col-lg-3" key={i}>
                        <div className="masspa-item-category-container">
                        {(typeof navigate !== `undefined`) ? (
                          <MasspaMenuLink03 onClick={() => this.handleClickLink(item.itemCode, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-zoom">
                          <MasspaMenuImage src={item.image} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                        </MasspaMenuLink03>
                        ):(
                          <MasspaMenuLink01 href={`${link}${item.itemCode}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-zoom">
                          <MasspaMenuImage src={item.image} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                        </MasspaMenuLink01>
                        )}
                        
                          <div className="masspa-item-category-title-1" style={{color : `${colorTitle}`}}>{item.title}</div>
                          {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                        </div>
                      </div>
  
                    )
                  } else if (animation === 'rotate') {
                    return (
                      <div className="col-sm-12 col-md-3 col-lg-3" key={i}>
                        <div className="masspa-item-category-container">
                        {(typeof navigate !== `undefined`) ? (
                          <MasspaMenuLink03 onClick={() => this.handleClickLink(item.itemCode, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-rotate">
                          <MasspaMenuImage src={item.image} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                          </MasspaMenuLink03>
                        ):(
                          <MasspaMenuLink01 href={`${link}${item.itemCode}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-rotate">
                          <MasspaMenuImage src={item.image} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                        </MasspaMenuLink01>
                        )}
                         
                          <div className="masspa-item-category-title-1" style={{color : `${colorTitle}`}}>{item.title}</div>
                          {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                        </div>
                      </div>
  
                    )
                  } else {
                    return (
                      <div className="col-sm-12 col-md-3 col-lg-3" key={i}>
                        <div className="masspa-item-category-container">
                        {(typeof navigate !== `undefined`) ? (
                            <MasspaMenuLink03 onClick={() => this.handleClickLink(item.itemCode, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                            <MasspaMenuImage src={item.image} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                          </MasspaMenuLink03>
                        ):(
                          <MasspaMenuLink01 href={`${link}${item.itemCode}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                          <MasspaMenuImage src={item.image} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                        </MasspaMenuLink01>
                        )}
                         
                          <div className="masspa-item-category-title-1" style={{color : `${colorTitle}`}}>{item.title}</div>
                          {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                        </div>
                      </div>
  
                    )
                  }
  
                }
              }
        
            }
          })
        }
        </div>
      }

      } else {
        return <div></div>
      }

    } else {
      return <div></div>
    }
  }

}



MasspaItemCategory.defaultProps = {
  listItems: [],
  link: `/category/?categoryId=`,
  sizeImage: 140,
  borderImage: 'none',
  borderRadius: '49px 49px 49px 0',
  mode: 1,
  animation: 'zoom',
  layout: 1,
  colorTitle:"#fd7400"
}