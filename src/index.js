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



const MasspaMenuLink = styled.a`
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
    @media only screen and (max-width: 767.98px) and (min-width: 457px){
      width: ${props => props.sizeImage * 2 + 'px'};
      height: ${props => props.sizeImage * 2 + 'px'};
    }
    @media only screen and (max-width: 456.98px) {
      width: 200px;
      height: 200px;
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
  }

  nextMenuCategory() {
    this.sliderItemServices.slickNext();
  }
  previousMenuCategory() {
    this.sliderItemServices.slickPrev();
  }

  render() {
    const { listItems, link, sizeImage, borderImage, borderRadius, mode, animation } = this.props
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
                                <MasspaMenuLink href={link} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-zoom">
                                  <span className="masspa-item-category-overlay-2">
                                  <MasspaMenuImage  src={imageDefaut}  alt={item.title} sizeImage={sizeImage}   borderRadius={borderRadius} mode={mode}/>
                                  <div  className="masspa-item-category-title-2">{item.title}</div>
                                  </span>
                                </MasspaMenuLink>
                                {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                              </div>
      
                          )
                        }else if(animation === 'rotate'){
                          return (
                           
                              <div className="masspa-item-category-container" key={i}>
                                <MasspaMenuLink href={link} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-rotate">
                                  <span className="masspa-item-category-overlay-2">
                                  <MasspaMenuImage  src={imageDefaut}  alt={item.title} sizeImage={sizeImage}   borderRadius={borderRadius} mode={mode}/>
                                  <div  className="masspa-item-category-title-2">{item.title}</div>
                                  </span>
                                </MasspaMenuLink>
                                {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                              </div>
                          
      
                          )
                        }else{
                          return (
                         
                              <div className="masspa-item-category-container" key={i}>
                                <MasspaMenuLink href={link} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                                  <span className="masspa-item-category-overlay-2">
                                  <MasspaMenuImage  src={imageDefaut}  alt={item.title} sizeImage={sizeImage}   borderRadius={borderRadius} mode={mode}/>
                                  <div  className="masspa-item-category-title-2">{item.title}</div>
                                  </span>
                                </MasspaMenuLink>
                                {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                              </div>
                         
      
                          )
                        }
                   
                       }else{
                        if(animation === 'zoom'){
                         return (
                         
                             <div className="masspa-item-category-container" key={i}>
                               <MasspaMenuLink href={link} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-zoom">
                               <MasspaMenuImage  src={imageDefaut}  alt={item.title} sizeImage={sizeImage}   borderRadius={borderRadius} mode={mode}/>
                               </MasspaMenuLink>
                               <div  className="masspa-item-category-title-1">{item.title}</div>
                               {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                             </div>
                         
     
                         )
                        }else if(animation === 'rotate'){
                         return (
                        
                             <div className="masspa-item-category-container" key={i}>
                               <MasspaMenuLink href={link} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage}  className="masspa-item-category-rotate">
                               <MasspaMenuImage  src={imageDefaut}  alt={item.title} sizeImage={sizeImage}   borderRadius={borderRadius} mode={mode}/>
                               </MasspaMenuLink>
                               <div  className="masspa-item-category-title-1">{item.title}</div>
                               {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                             </div>
                        
     
                         )
                        }else{
                         return (
                       
                             <div className="masspa-item-category-container" key={i}>
                               <MasspaMenuLink href={link} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage}  >
                               <MasspaMenuImage  src={imageDefaut}  alt={item.title} sizeImage={sizeImage}   borderRadius={borderRadius} mode={mode}/>
                               </MasspaMenuLink>
                               <div  className="masspa-item-category-title-1">{item.title}</div>
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
                                <MasspaMenuLink href={link} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-zoom">
                                  <span className="masspa-item-category-overlay-2">
                                  <MasspaMenuImage  src={item.image}  alt={item.title} sizeImage={sizeImage}   borderRadius={borderRadius} mode={mode}/>
                                  <div  className="masspa-item-category-title-2">{item.title}</div>
                                  </span>
                                </MasspaMenuLink>
                                {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                              </div>
                          
      
                          )
                        }else if(animation === 'rotate'){
                          return (
                          
                              <div className="masspa-item-category-container" key={i}>
                                <MasspaMenuLink href={link} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-rotate">
                                  <span className="masspa-item-category-overlay-2">
                                  <MasspaMenuImage  src={item.image}  alt={item.title} sizeImage={sizeImage}   borderRadius={borderRadius} mode={mode}/>
                                  <div  className="masspa-item-category-title-2">{item.title}</div>
                                  </span>
                                </MasspaMenuLink>
                                {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                              </div>
                         
      
                          )
                        }else{
                          return (
                         
                              <div className="masspa-item-category-container" key={i}>
                                <MasspaMenuLink href={link} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                                  <span className="masspa-item-category-overlay-2">
                                  <MasspaMenuImage  src={item.image}  alt={item.title} sizeImage={sizeImage}   borderRadius={borderRadius} mode={mode}/>
                                  <div  className="masspa-item-category-title-2">{item.title}</div>
                                  </span>
                                </MasspaMenuLink>
                                {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                              </div>
                          
      
                          )
                        }
                   
                       }else{
                        if(animation === 'zoom'){
                         return (
                         
                             <div className="masspa-item-category-container" key={i}>
                               <MasspaMenuLink href={link} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-zoom">
                                 <MasspaMenuImage  src={item.image}  alt={item.title} sizeImage={sizeImage}   borderRadius={borderRadius} mode={mode} />
                               </MasspaMenuLink>
                               <div  className="masspa-item-category-title-1">{item.title}</div>
                               {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                             </div>
                        
     
                         )
                        }else if(animation === 'rotate'){
                         return (
                             <div className="masspa-item-category-container" key={i}>
                               <MasspaMenuLink href={link} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-rotate">
                                 <MasspaMenuImage  src={item.image}  alt={item.title} sizeImage={sizeImage}   borderRadius={borderRadius} mode={mode} />
                               </MasspaMenuLink>
                               <div  className="masspa-item-category-title-1">{item.title}</div>
                               {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                             </div>
     
                         )
                        }else{
                         return (
                             <div className="masspa-item-category-container" key={i}>
                               <MasspaMenuLink href={link} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                                 <MasspaMenuImage  src={item.image}  alt={item.title} sizeImage={sizeImage}   borderRadius={borderRadius} mode={mode} />
                               </MasspaMenuLink>
                               <div  className="masspa-item-category-title-1">{item.title}</div>
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
          return  <div className="row w-100">
          {featuredItems.map((item, i) => {
            if (item.image === "" || item.image === null) {
              if (mode === 2) {
                if (animation === 'zoom') {
                  return (
                    <div className="col-sm-12 col-md-3 col-lg-3" key={i}>
                      <div className="masspa-item-category-container">
                        <MasspaMenuLink href={link}  sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-zoom">
                          <span className="masspa-item-category-overlay-2">
                            <MasspaMenuImage src={imageDefaut} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                            <div className="masspa-item-category-title-2">{item.title}</div>
                          </span>
                        </MasspaMenuLink>
                        {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                      </div>
                    </div>

                  )
                } else if (animation === 'rotate') {
                  return (
                    <div className="col-sm-12 col-md-3 col-lg-3" key={i}>
                      <div className="masspa-item-category-container">
                        <MasspaMenuLink href={link}  sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-rotate">
                          <span className="masspa-item-category-overlay-2">
                            <MasspaMenuImage src={imageDefaut} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                            <div className="masspa-item-category-title-2">{item.title}</div>
                          </span>
                        </MasspaMenuLink>
                        {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                      </div>
                    </div>

                  )
                } else {
                  return (
                    <div className="col-sm-12 col-md-3 col-lg-3" key={i}>
                      <div className="masspa-item-category-container">
                        <MasspaMenuLink href={link} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                          <span className="masspa-item-category-overlay-2">
                            <MasspaMenuImage src={imageDefaut} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                            <div className="masspa-item-category-title-2">{item.title}</div>
                          </span>
                        </MasspaMenuLink>
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
                        <MasspaMenuLink href={link} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-zoom">
                          <MasspaMenuImage src={imageDefaut} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                        </MasspaMenuLink>
                        <div className="masspa-item-category-title-1">{item.title}</div>
                        {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                      </div>
                    </div>

                  )
                } else if (animation === 'rotate') {
                  return (
                    <div className="col-sm-12 col-md-3 col-lg-3" key={i}>
                      <div className="masspa-item-category-container">
                        <MasspaMenuLink href={link}  sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-rotate">
                          <MasspaMenuImage src={imageDefaut} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                        </MasspaMenuLink>
                        <div className="masspa-item-category-title-1">{item.title}</div>
                        {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                      </div>
                    </div>

                  )
                } else {
                  return (
                    <div className="col-sm-12 col-md-3 col-lg-3" key={i}>
                      <div className="masspa-item-category-container">
                        <MasspaMenuLink href={link} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                          <MasspaMenuImage src={imageDefaut} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                        </MasspaMenuLink>
                        <div className="masspa-item-category-title-1">{item.name}</div>
                        {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                      </div>
                    </div>

                  )
                }

              }
            } else {
              if (mode === 2) {
                if (animation === 'zoom') {
                  return (
                    <div className="col-sm-12 col-md-3 col-lg-3" key={i}>
                      <div className="masspa-item-category-container">
                        <MasspaMenuLink href={link} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-zoom">
                          <span className="masspa-item-category-overlay-2">
                            <MasspaMenuImage src={item.image} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                            <div className="masspa-item-category-title-2">{item.title}</div>
                          </span>
                        </MasspaMenuLink>
                        {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                      </div>
                    </div>

                  )
                } else if (animation === 'rotate') {
                  return (
                    <div className="col-sm-12 col-md-3 col-lg-3" key={i}>
                      <div className="masspa-item-category-container">
                        <MasspaMenuLink href={link} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-rotate">
                          <span className="masspa-item-category-overlay-2">
                            <MasspaMenuImage src={item.image} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                            <div className="masspa-item-category-title-2">{item.title}</div>
                          </span>
                        </MasspaMenuLink>
                        {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                      </div>
                    </div>

                  )
                } else {
                  return (
                    <div className="col-sm-12 col-md-3 col-lg-3" key={i}>
                      <div className="masspa-item-category-container">
                        <MasspaMenuLink href={link} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                          <span className="masspa-item-category-overlay-2">
                            <MasspaMenuImage src={item.image} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                            <div className="masspa-item-category-title-2">{item.title}</div>
                          </span>
                        </MasspaMenuLink>
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
                        <MasspaMenuLink href={link} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-zoom">
                          <MasspaMenuImage src={item.image} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                        </MasspaMenuLink>
                        <div className="masspa-item-category-title-1">{item.title}</div>
                        {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                      </div>
                    </div>

                  )
                } else if (animation === 'rotate') {
                  return (
                    <div className="col-sm-12 col-md-3 col-lg-3" key={i}>
                      <div className="masspa-item-category-container">
                        <MasspaMenuLink href={link} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-item-category-rotate">
                          <MasspaMenuImage src={item.image} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                        </MasspaMenuLink>
                        <div className="masspa-item-category-title-1">{item.title}</div>
                        {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                      </div>
                    </div>

                  )
                } else {
                  return (
                    <div className="col-sm-12 col-md-3 col-lg-3" key={i}>
                      <div className="masspa-item-category-container">
                        <MasspaMenuLink href={link} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                          <MasspaMenuImage src={item.image} alt={item.title} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                        </MasspaMenuLink>
                        <div className="masspa-item-category-title-1">{item.name}</div>
                        {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                      </div>
                    </div>

                  )
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
  link: "#",
  sizeImage: 140,
  borderImage: 'none',
  borderRadius: '49px 49px 49px 0',
  mode: 1,
  animation: 'zoom',
}