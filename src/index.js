import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import imageDefaut from './images/lotus.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import imgItemArrowLeft from './images/back.svg'
import imgItemArrowRight from './images/next.svg'
import { navigate } from "@reach/router"

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

  handleClick=(id)=>{
    const {link} = this.props;
    navigate(`${link}${id}`)
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
                                
                                    <div style={{
                                        width: sizeImage + 'px',
                                        height: sizeImage + 'px',
                                        borderRadius : borderRadius === 'rounded' ? '50%' : borderRadius,
                                        border: borderImage
                                    }} 
                                     className="masspa-item-link-03 masspa-item-category-zoom"
                                     onClick={()=>this.handleClick(item.itemCode)}
                                     >
                                    <span className="masspa-item-category-overlay-2">
                                    <img  src={imageDefaut}  alt={item.title} 
                                    style={{
                                      width: sizeImage + 'px',
                                      height: sizeImage + 'px',
                                      borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                    }}
                                    className="masspa-item-image-02"
                                    />
                                    <div  className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                                    </span>
                                  </div>
                                  {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                                </div>
        
                            )
                          }else if(animation === 'rotate'){
                            return (
                                <div className="masspa-item-category-container" key={i}>
                                    <div style={{
                                        width: sizeImage + 'px',
                                        height: sizeImage + 'px',
                                        borderRadius : borderRadius === 'rounded' ? '50%' : borderRadius,
                                        border: borderImage
                                    }} 
                                     className="masspa-item-link-03 masspa-item-category-rotate"
                                     onClick={()=>this.handleClick(item.itemCode)}
                                     >
                                    <span className="masspa-item-category-overlay-2">
                                    <img  src={imageDefaut}  alt={item.title} 
                                    style={{
                                      width: sizeImage + 'px',
                                      height: sizeImage + 'px',
                                      borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                    }}
                                    className="masspa-item-image-02"
                                    />
                                    <div  className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                                    </span>
                                  </div>
                                  {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}

                                </div>
        
                            )
                          }else{
                            return (
                           
                                <div className="masspa-item-category-container" key={i}>
                                    <div style={{
                                        width: sizeImage + 'px',
                                        height: sizeImage + 'px',
                                        borderRadius : borderRadius === 'rounded' ? '50%' : borderRadius,
                                        border: borderImage
                                    }} 
                                     className="masspa-item-link-03"
                                     onClick={()=>this.handleClick(item.itemCode)}
                                     >
                                    <span className="masspa-item-category-overlay-2">
                                    <img  src={imageDefaut}  alt={item.title} 
                                    style={{
                                      width: sizeImage + 'px',
                                      height: sizeImage + 'px',
                                      borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                    }}
                                    className="masspa-item-image-02"
                                    />
                                    <div  className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                                    </span>
                                  </div>
                                  {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}

                                </div>
        
                            )
                          }
                     
                         }else{
                          if(animation === 'zoom'){
                           return (
                           
                            <div className="masspa-item-category-container">
                            <div style={{
                                  width: sizeImage + 'px',
                                  height: sizeImage + 'px',
                                  borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  border: borderImage
                                }}
                                  className="masspa-item-link-03 masspa-item-category-zoom"
                                  onClick={()=>this.handleClick(item.itemCode)}
                                  >
                                  <img src={imageDefaut} alt={item.title}
                                    style={{
                                      width: sizeImage + 'px',
                                      height: sizeImage + 'px',
                                      borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                    }}
                                    className="masspa-item-image-01"
                                  />
                                </div>
                           
                              <div className="masspa-item-category-title-1" style={{color : `${colorTitle}`}}>{item.title}</div>
                              {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                            </div>
                           
       
                           )
                          }else if(animation === 'rotate'){
                           return (
                          
                            <div className="masspa-item-category-container">
                            <div style={{
                                  width: sizeImage + 'px',
                                  height: sizeImage + 'px',
                                  borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  border: borderImage
                                }}
                                  className="masspa-item-link-03 masspa-item-category-rotate"
                                  onClick={()=>this.handleClick(item.itemCode)}
                                  >
                                  <img src={imageDefaut} alt={item.title}
                                    style={{
                                      width: sizeImage + 'px',
                                      height: sizeImage + 'px',
                                      borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                    }}
                                    className="masspa-item-image-01"
                                  />
                                </div>
                           
                              <div className="masspa-item-category-title-1" style={{color : `${colorTitle}`}}>{item.title}</div>
                              {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                            </div>
                          
       
                           )
                          }else{
                           return (
                         
                            <div className="masspa-item-category-container">
                            <div style={{
                                  width: sizeImage + 'px',
                                  height: sizeImage + 'px',
                                  borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  border: borderImage
                                }}
                                  className="masspa-item-link-03"
                                  onClick={()=>this.handleClick(item.itemCode)}
                                  >
                                  <img src={imageDefaut} alt={item.title}
                                    style={{
                                      width: sizeImage + 'px',
                                      height: sizeImage + 'px',
                                      borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                    }}
                                    className="masspa-item-image-01"
                                  />
                                </div>
                           
                              <div className="masspa-item-category-title-1" style={{color : `${colorTitle}`}}>{item.title}</div>
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
                                    <div style={{
                                        width: sizeImage + 'px',
                                        height: sizeImage + 'px',
                                        borderRadius : borderRadius === 'rounded' ? '50%' : borderRadius,
                                        border: borderImage
                                    }} 
                                     className="masspa-item-link-03 masspa-item-category-zoom"
                                     onClick={()=>this.handleClick(item.itemCode)}
                                     >
                                    <span className="masspa-item-category-overlay-2">
                                    <img  src={item.image}  alt={item.title} 
                                    style={{
                                      width: sizeImage + 'px',
                                      height: sizeImage + 'px',
                                      borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                    }}
                                    className="masspa-item-image-02"
                                    />
                                    <div  className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                                    </span>
                                  </div>
                                  {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}

                                </div>
                            
        
                            )
                          }else if(animation === 'rotate'){
                            return (
                            
                                <div className="masspa-item-category-container" key={i}>
                                    <div style={{
                                        width: sizeImage + 'px',
                                        height: sizeImage + 'px',
                                        borderRadius : borderRadius === 'rounded' ? '50%' : borderRadius,
                                        border: borderImage
                                    }} 
                                     className="masspa-item-link-03 masspa-item-category-rotate"
                                     onClick={()=>this.handleClick(item.itemCode)}
                                     >
                                    <span className="masspa-item-category-overlay-2">
                                    <img  src={item.image}  alt={item.title} 
                                    style={{
                                      width: sizeImage + 'px',
                                      height: sizeImage + 'px',
                                      borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                    }}
                                    className="masspa-item-image-02"
                                    />
                                    <div  className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                                    </span>
                                  </div>
                                  {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}

                                </div>
                           
        
                            )
                          }else{
                            return (
                           
                                <div className="masspa-item-category-container" key={i}>
                                  <div style={{
                                        width: sizeImage + 'px',
                                        height: sizeImage + 'px',
                                        borderRadius : borderRadius === 'rounded' ? '50%' : borderRadius,
                                        border: borderImage
                                    }} 
                                     className="masspa-item-link-03"
                                     onClick={()=>this.handleClick(item.itemCode)}
                                     >
                                    <span className="masspa-item-category-overlay-2">
                                    <img  src={item.image}  alt={item.title} 
                                    style={{
                                      width: sizeImage + 'px',
                                      height: sizeImage + 'px',
                                      borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                    }}
                                    className="masspa-item-image-02"
                                    />
                                    <div  className="masspa-item-category-title-2" style={{color : `${colorTitle}`}}>{item.title}</div>
                                    </span>
                                  </div>
                                  {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}

                                </div>
                            
        
                            )
                          }
                     
                         }else{
                          if(animation === 'zoom'){
                           return (
                           
                            <div className="masspa-item-category-container">
                            <div style={{
                                  width: sizeImage + 'px',
                                  height: sizeImage + 'px',
                                  borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  border: borderImage
                                }}
                                  className="masspa-item-link-03 masspa-item-category-zoom"
                                  onClick={()=>this.handleClick(item.itemCode)}
                                  >
                                  <img src={item.image} alt={item.title}
                                    style={{
                                      width: sizeImage + 'px',
                                      height: sizeImage + 'px',
                                      borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                    }}
                                    className="masspa-item-image-01"
                                  />
                                </div>
                           
                              <div className="masspa-item-category-title-1" style={{color : `${colorTitle}`}}>{item.title}</div>
                              {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                            </div>
                          
       
                           )
                          }else if(animation === 'rotate'){
                           return (
                            <div className="masspa-item-category-container">
                            <div style={{
                                  width: sizeImage + 'px',
                                  height: sizeImage + 'px',
                                  borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  border: borderImage
                                }}
                                  className="masspa-item-link-03 masspa-item-category-rotate"
                                  onClick={()=>this.handleClick(item.itemCode)}
                                  >
                                  <img src={item.image} alt={item.title}
                                    style={{
                                      width: sizeImage + 'px',
                                      height: sizeImage + 'px',
                                      borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                    }}
                                    className="masspa-item-image-01"
                                  />
                                </div>
                           
                              <div className="masspa-item-category-title-1" style={{color : `${colorTitle}`}}>{item.title}</div>
                              {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                            </div>
       
                           )
                          }else{
                           return (
                            <div className="masspa-item-category-container">
                            <div style={{
                                  width: sizeImage + 'px',
                                  height: sizeImage + 'px',
                                  borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  border: borderImage
                                }}
                                  className="masspa-item-link-03"
                                  onClick={()=>this.handleClick(item.itemCode)}
                                  >
                                  <img src={imageDefaut} alt={item.title}
                                    style={{
                                      width: sizeImage + 'px',
                                      height: sizeImage + 'px',
                                      borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                    }}
                                    className="masspa-item-image-01"
                                  />
                                </div>
                           
                              <div className="masspa-item-category-title-1" style={{color : `${colorTitle}`}}>{item.title}</div>
                              {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                            </div>
       
                           )
                          }
                     
                        }
             
                     }
               
                })
              }
              </Slider>
              <img src={imgItemArrowLeft} onClick={this.previousMenuCategory} className="masspa-item-arrow-left"/>
              <img src={imgItemArrowRight} onClick={this.nextMenuCategory} className="masspa-item-arrow-right"/>
            </div>
          )

         } else {

          return  <div className="ms-item-category-row ms-item-category-no-gutter">
          {featuredItems.map((item, i) => {
            if (item.image === "" || item.image === null) {
              if(layout === 2){
                //dang dac biet
                if (mode === 2) {
                  if(animation === 'zoom'){
                    return (
                      <div className="ms-item-col-md-6 ms-item-col-sm-12 ms-item-col-xs-6" key={i}>
                      <div className="masspa-item-category-card fade-in-left">
                          <div className="ms-item-col-md-5 ms-item-col-sm-5">
                            <div style={{
                              width: sizeImage + 'px',
                              height: sizeImage + 'px',
                              borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                              border: borderImage
                            }}
                              className="masspa-item-link-03 masspa-item-category-zoom"
                              onClick={()=>this.handleClick(item.itemCode)}
                              >
                              <span className="masspa-item-category-overlay-2">
                                <img src={imageDefaut} alt={item.title}
                                  style={{
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                  }}
                                  className="masspa-item-image-03"
                                />
                                <div className="masspa-item-category-title-2" style={{ color: `${colorTitle}` }}>{item.title}</div>
                              </span>
                            </div>

                          </div>
                      <div className="ms-item-col-md-7 ms-item-col-sm-7">
                      <div className="masspa-item-category-group-title-text">
                          {item.description !== null ? <div className="masspa-item-category-text-layout02" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                        </div>
                      </div>
                      </div>
                    </div>
                    )
                  }else if(animation === 'rotate'){
                    return (
                      <div className="ms-item-col-md-6 ms-item-col-sm-12 ms-item-col-xs-6" key={i}>
                      <div className="masspa-item-category-card fade-in-left">
                          <div className="ms-item-col-md-5 ms-item-col-sm-5">
                            <div style={{
                              width: sizeImage + 'px',
                              height: sizeImage + 'px',
                              borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                              border: borderImage
                            }}
                              className="masspa-item-link-03 masspa-item-category-rotate"
                              onClick={()=>this.handleClick(item.itemCode)}
                              >
                              <span className="masspa-item-category-overlay-2">
                                <img src={imageDefaut} alt={item.title}
                                  style={{
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                  }}
                                  className="masspa-item-image-03"
                                />
                                <div className="masspa-item-category-title-2" style={{ color: `${colorTitle}` }}>{item.title}</div>
                              </span>
                            </div>

                          </div>
                      <div className="ms-item-col-md-7 ms-item-col-sm-7">
                      <div className="masspa-item-category-group-title-text">
                          {item.description !== null ? <div className="masspa-item-category-text-layout02" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                        </div>
                      </div>
                      </div>
                    </div>
                    )
                  }else{
                    return(
                      <div className="ms-item-col-md-6 ms-item-col-sm-12 ms-item-col-xs-6" key={i}>
                        <div className="masspa-item-category-card fade-in-left">
                          <div className="ms-item-col-md-5 ms-item-col-sm-5">
                            <div style={{
                              width: sizeImage + 'px',
                              height: sizeImage + 'px',
                              borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                              border: borderImage
                            }}
                              className="masspa-item-link-03"
                              onClick={()=>this.handleClick(item.itemCode)}
                              >
                              <span className="masspa-item-category-overlay-2">
                                <img src={imageDefaut} alt={item.title}
                                  style={{
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                  }}
                                  className="masspa-item-image-03"
                                />
                                <div className="masspa-item-category-title-2" style={{ color: `${colorTitle}` }}>{item.title}</div>
                              </span>
                            </div>

                          </div>
                        <div className="ms-item-col-md-7 ms-item-col-sm-7">
                        <div className="masspa-item-category-group-title-text">
                            {item.description !== null ? <div className="masspa-item-category-text-layout02" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                          </div>
                        </div>
                        </div>
                      </div>
                    )
                  }
                }else{
                  if(animation === 'zoom'){
                    return(
                      <div className="ms-item-col-md-6 ms-item-col-sm-12 ms-item-col-xs-6" key={i}>
                        <div className="masspa-item-category-card fade-in-left">
                          <div className="ms-item-col-md-5 ms-item-col-sm-5">
                            <div style={{
                              width: sizeImage + 'px',
                              height: sizeImage + 'px',
                              borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                              border: borderImage
                            }}
                              className="masspa-item-link-03 masspa-item-category-zoom"
                              onClick={()=>this.handleClick(item.itemCode)}
                              >
                              <img src={imageDefaut} alt={item.title}
                                style={{
                                  width: sizeImage + 'px',
                                  height: sizeImage + 'px',
                                  borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                }}
                                className="masspa-item-image-04"
                              />
                            </div>

                          </div>
                        <div className="ms-item-col-md-7 ms-item-col-sm-7">
                        <div className="masspa-item-category-group-title-text">
                        <div  className="masspa-item-category-title-1" style={{color : `${colorTitle}`}}>{item.title}</div>
                        {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                          </div>
                        </div>
                        </div>
                      </div>
                    )
  
                  }else if(animation === 'rotate'){
                    return(
                      <div className="ms-item-col-md-6 ms-item-col-sm-12 ms-item-col-xs-6" key={i}>
                        <div className="masspa-item-category-card fade-in-left">
                          <div className="ms-item-col-md-5 ms-item-col-sm-5">
                            <div style={{
                              width: sizeImage + 'px',
                              height: sizeImage + 'px',
                              borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                              border: borderImage
                            }}
                              className="masspa-item-link-03 masspa-item-category-rotate"
                              onClick={()=>this.handleClick(item.itemCode)}
                              >
                              <img src={imageDefaut} alt={item.title}
                                style={{
                                  width: sizeImage + 'px',
                                  height: sizeImage + 'px',
                                  borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                }}
                                className="masspa-item-image-04"
                              />
                            </div>

                          </div>
                        <div className="ms-item-col-md-7 ms-item-col-sm-7">
                        <div className="masspa-item-category-group-title-text">
                        <div  className="masspa-item-category-title-1" style={{color : `${colorTitle}`}}>{item.title}</div>
                        {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                          </div>
                        </div>
                        </div>
                      </div>
                    )
  
                  }else{
                    return(
                      <div className="ms-item-col-md-6 ms-item-col-sm-12 ms-item-col-xs-6" key={i}>
                        <div className="masspa-item-category-card fade-in-left">
                          <div className="ms-item-col-md-5 ms-item-col-sm-5">
                            <div style={{
                              width: sizeImage + 'px',
                              height: sizeImage + 'px',
                              borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                              border: borderImage
                            }}
                              className="masspa-item-link-03"
                              onClick={()=>this.handleClick(item.itemCode)}
                              >
                              <img src={imageDefaut} alt={item.title}
                                style={{
                                  width: sizeImage + 'px',
                                  height: sizeImage + 'px',
                                  borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                }}
                                className="masspa-item-image-04"
                              />
                            </div>

                          </div>
                        <div className="ms-item-col-md-7 ms-item-col-sm-7">
                        <div className="masspa-item-category-group-title-text">
                        <div  className="masspa-item-category-title-1" style={{color : `${colorTitle}`}}>{item.title}</div>
                        {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
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
                      <div className="ms-item-col-sm-12 ms-item-col-md-3 ms-item-col-lg-3" key={i}>
                        <div className="masspa-item-category-container">
                        <div style={{
                              width: sizeImage + 'px',
                              height: sizeImage + 'px',
                              borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                              border: borderImage
                            }}
                              className="masspa-item-link-03 masspa-item-category-zoom"
                              onClick={()=>this.handleClick(item.itemCode)}
                              >
                              <span className="masspa-item-category-overlay-2">
                                <img src={imageDefaut} alt={item.title}
                                  style={{
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                  }}
                                  className="masspa-item-image-02"
                                />
                                <div className="masspa-item-category-title-2" style={{ color: `${colorTitle}` }}>{item.title}</div>
                              </span>
                            </div>
                        
                          {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                        </div>
                      </div>
  
                    )
                  } else if (animation === 'rotate') {
                    return (
                      <div className="ms-item-col-sm-12 ms-item-col-md-3 ms-item-col-lg-3" key={i}>
                        <div className="masspa-item-category-container">
                        <div style={{
                              width: sizeImage + 'px',
                              height: sizeImage + 'px',
                              borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                              border: borderImage
                            }}
                              className="masspa-item-link-03 masspa-item-category-rotate"
                              onClick={()=>this.handleClick(item.itemCode)}
                              >
                              <span className="masspa-item-category-overlay-2">
                                <img src={imageDefaut} alt={item.title}
                                  style={{
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                  }}
                                  className="masspa-item-image-02"
                                />
                                <div className="masspa-item-category-title-2" style={{ color: `${colorTitle}` }}>{item.title}</div>
                              </span>
                            </div>
                        
                          {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                        </div>
                      </div>
  
                    )
                  } else {
                    return (
                      <div className="ms-item-col-sm-12 ms-item-col-md-3 ms-item-col-lg-3" key={i}>
                        <div className="masspa-item-category-container">
                        <div style={{
                              width: sizeImage + 'px',
                              height: sizeImage + 'px',
                              borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                              border: borderImage
                            }}
                              className="masspa-item-link-03"
                              onClick={()=>this.handleClick(item.itemCode)}
                              >
                              <span className="masspa-item-category-overlay-2">
                                <img src={imageDefaut} alt={item.title}
                                  style={{
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                  }}
                                  className="masspa-item-image-02"
                                />
                                <div className="masspa-item-category-title-2" style={{ color: `${colorTitle}` }}>{item.title}</div>
                              </span>
                            </div>
                        
                          {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                        </div>
                      </div>
  
                    )
                  }
  
                } else {
                  if (animation === 'zoom') {
                    return (
                      <div className="ms-item-col-sm-12 ms-item-col-md-3 ms-item-col-lg-3" key={i}>
                        <div className="masspa-item-category-container">
                        <div style={{
                              width: sizeImage + 'px',
                              height: sizeImage + 'px',
                              borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                              border: borderImage
                            }}
                              className="masspa-item-link-03 masspa-item-category-zoom"
                              onClick={()=>this.handleClick(item.itemCode)}
                              >
                              <img src={imageDefaut} alt={item.title}
                                style={{
                                  width: sizeImage + 'px',
                                  height: sizeImage + 'px',
                                  borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                }}
                                className="masspa-item-image-01"
                              />
                            </div>
                       
                          <div className="masspa-item-category-title-1" style={{color : `${colorTitle}`}}>{item.title}</div>
                          {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                        </div>
                      </div>
  
                    )
                  } else if (animation === 'rotate') {
                    return (
                      <div className="ms-item-col-sm-12 ms-item-col-md-3 ms-item-col-lg-3" key={i}>
                        <div className="masspa-item-category-container">
                        <div style={{
                              width: sizeImage + 'px',
                              height: sizeImage + 'px',
                              borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                              border: borderImage
                            }}
                              className="masspa-item-link-03 masspa-item-category-rotate"
                              onClick={()=>this.handleClick(item.itemCode)}
                              >
                              <img src={imageDefaut} alt={item.title}
                                style={{
                                  width: sizeImage + 'px',
                                  height: sizeImage + 'px',
                                  borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                }}
                                className="masspa-item-image-01"
                              />
                            </div>
                        
                          <div className="masspa-item-category-title-1" style={{color : `${colorTitle}`}}>{item.title}</div>
                          {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                        </div>
                      </div>
  
                    )
                  } else {
                    return (
                      <div className="ms-item-col-sm-12 ms-item-col-md-3 ms-item-col-lg-3" key={i}>
                        <div className="masspa-item-category-container">
                        <div style={{
                              width: sizeImage + 'px',
                              height: sizeImage + 'px',
                              borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                              border: borderImage
                            }}
                              className="masspa-item-link-03"
                              onClick={()=>this.handleClick(item.itemCode)}
                              >
                              <img src={imageDefaut} alt={item.title}
                                style={{
                                  width: sizeImage + 'px',
                                  height: sizeImage + 'px',
                                  borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                }}
                                className="masspa-item-image-01"
                              />
                            </div>
                        
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
                      <div className="ms-item-col-md-6 ms-item-col-sm-12 ms-item-col-xs-6" key={i}>
                      <div className="masspa-item-category-card fade-in-left">
                        <div className="ms-item-col-md-5 ms-item-col-sm-5">
                        <div style={{
                              width: sizeImage + 'px',
                              height: sizeImage + 'px',
                              borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                              border: borderImage
                            }}
                              className="masspa-item-link-03 masspa-item-category-zoom"
                              onClick={()=>this.handleClick(item.itemCode)}
                              >
                              <span className="masspa-item-category-overlay-2">
                                <img src={item.image} alt={item.title}
                                  style={{
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                  }}
                                  className="masspa-item-image-03"
                                />
                                <div className="masspa-item-category-title-2" style={{ color: `${colorTitle}` }}>{item.title}</div>
                              </span>
                            </div>
                    
                        </div>
                      <div className="ms-item-col-md-7 ms-item-col-sm-7">
                      <div className="masspa-item-category-group-title-text">
                          {item.description !== null ? <div className="masspa-item-category-text-layout02" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                        </div>
                      </div>
                      </div>
                    </div>
                    )
                  }else if(animation === 'rotate'){
                    return (
                      <div className="ms-item-col-md-6 ms-item-col-sm-12 ms-item-col-xs-6" key={i}>
                      <div className="masspa-item-category-card fade-in-left">
                        <div className="ms-item-col-md-5 ms-item-col-sm-5">
                        <div style={{
                              width: sizeImage + 'px',
                              height: sizeImage + 'px',
                              borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                              border: borderImage
                            }}
                              className="masspa-item-link-03 masspa-item-category-rotate"
                              onClick={()=>this.handleClick(item.itemCode)}
                              >
                              <span className="masspa-item-category-overlay-2">
                                <img src={item.image} alt={item.title}
                                  style={{
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                  }}
                                  className="masspa-item-image-03"
                                />
                                <div className="masspa-item-category-title-2" style={{ color: `${colorTitle}` }}>{item.title}</div>
                              </span>
                            </div>
                      
                        </div>
                      <div className="ms-item-col-md-7 ms-item-col-sm-7">
                      <div className="masspa-item-category-group-title-text">
                          {item.description !== null ? <div className="masspa-item-category-text-layout02" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                        </div>
                      </div>
                      </div>
                    </div>
                    )
                  }else{
                    return(
                      <div className="ms-item-col-md-6 ms-item-col-sm-12 ms-item-col-xs-6" key={i}>
                        <div className="masspa-item-category-card fade-in-left">
                          <div className="ms-item-col-md-5 ms-item-col-sm-5">
                          <div style={{
                              width: sizeImage + 'px',
                              height: sizeImage + 'px',
                              borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                              border: borderImage
                            }}
                              className="masspa-item-link-03"
                              onClick={()=>this.handleClick(item.itemCode)}
                              >
                              <span className="masspa-item-category-overlay-2">
                                <img src={item.image} alt={item.title}
                                  style={{
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                  }}
                                  className="masspa-item-image-03"
                                />
                                <div className="masspa-item-category-title-2" style={{ color: `${colorTitle}` }}>{item.title}</div>
                              </span>
                            </div>
                       
                          </div>
                        <div className="ms-item-col-md-7 ms-item-col-sm-7">
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
                      <div className="ms-item-col-md-6 ms-item-col-sm-12 ms-item-col-xs-6" key={i}>
                        <div className="masspa-item-category-card fade-in-left">
                          <div className="ms-item-col-md-5 ms-item-col-sm-5">
                          <div style={{
                              width: sizeImage + 'px',
                              height: sizeImage + 'px',
                              borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                              border: borderImage
                            }}
                              className="masspa-item-link-03 masspa-item-category-zoom"
                              onClick={()=>this.handleClick(item.itemCode)}
                              >
                              <img src={item.image} alt={item.title}
                                style={{
                                  width: sizeImage + 'px',
                                  height: sizeImage + 'px',
                                  borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                }}
                                className="masspa-item-image-04"
                              />
                            </div>
                         
                          </div>
                        <div className="ms-item-col-md-7 ms-item-col-sm-7">
                        <div className="masspa-item-category-group-title-text">
                           
                              <div className="masspa-item-category-title-3" style={{color : `${colorTitle}`}}>
                                {item.title}
                              </div>
                           
                            {item.description !== null ? <div className="masspa-item-category-text-layout02" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                          </div>
                        </div>
                        </div>
                      </div>
                    )
                  }else if(animation === 'rotate'){
                    return(
                      <div className="ms-item-col-md-6 ms-item-col-sm-12 ms-item-col-xs-6" key={i}>
                        <div className="masspa-item-category-card fade-in-left">
                          <div className="ms-item-col-md-5 ms-item-col-sm-5">
                          <div style={{
                              width: sizeImage + 'px',
                              height: sizeImage + 'px',
                              borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                              border: borderImage
                            }}
                              className="masspa-item-link-03 masspa-item-category-rotate"
                              onClick={()=>this.handleClick(item.itemCode)}
                              >
                              <img src={item.image} alt={item.title}
                                style={{
                                  width: sizeImage + 'px',
                                  height: sizeImage + 'px',
                                  borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                }}
                                className="masspa-item-image-04"
                              />
                            </div>
                        
                          </div>
                        <div className="ms-item-col-md-7 ms-item-col-sm-7">
                        <div className="masspa-item-category-group-title-text">
                            
                              <div className="masspa-item-category-title-3" style={{color : `${colorTitle}`}}>
                                {item.title}
                              </div>
                          
                            {item.description !== null ? <div className="masspa-item-category-text-layout02" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                          </div>
                        </div>
                        </div>
                      </div>
                    )
                  }else{
                    return(
                      <div className="ms-item-col-md-6 ms-item-col-sm-12 ms-item-col-xs-6" key={i}>
                        <div className="masspa-item-category-card fade-in-left">
                          <div className="ms-item-col-md-5 ms-item-col-sm-5">
                          <div style={{
                              width: sizeImage + 'px',
                              height: sizeImage + 'px',
                              borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                              border: borderImage
                            }}
                              className="masspa-item-link-03"
                              onClick={()=>this.handleClick(item.itemCode)}
                              >
                              <img src={imageDefaut} alt={item.title}
                                style={{
                                  width: sizeImage + 'px',
                                  height: sizeImage + 'px',
                                  borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                }}
                                className="masspa-item-image-04"
                              />
                            </div>
                       
                          </div>
                        <div className="ms-item-col-md-7 ms-item-col-sm-7">
                        <div className="masspa-item-category-group-title-text">
                           
                              <div className="masspa-item-category-title-3" style={{color : `${colorTitle}`}}>
                                {item.title}
                              </div>
                       
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
                      <div className="ms-item-col-sm-12 ms-item-col-md-3 ms-item-col-lg-3" key={i}>
                        <div className="masspa-item-category-container">
                        <div style={{
                              width: sizeImage + 'px',
                              height: sizeImage + 'px',
                              borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                              border: borderImage
                            }}
                              className="masspa-item-link-03 masspa-item-category-zoom">
                              <span className="masspa-item-category-overlay-2">
                                <img src={item.image} alt={item.title}
                                  style={{
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                  }}
                                  className="masspa-item-image-02"
                                />
                                <div className="masspa-item-category-title-2" style={{ color: `${colorTitle}` }}>{item.title}</div>
                              </span>
                            </div>
                   
                          {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                        </div>
                      </div>
  
                    )
                  } else if (animation === 'rotate') {
                    return (
                      <div className="ms-item-col-sm-12 ms-item-col-md-3 ms-item-col-lg-3" key={i}>
                        <div className="masspa-item-category-container">
                        <div style={{
                              width: sizeImage + 'px',
                              height: sizeImage + 'px',
                              borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                              border: borderImage
                            }}
                              className="masspa-item-link-03 masspa-item-category-rotate">
                              <span className="masspa-item-category-overlay-2">
                                <img src={item.image} alt={item.title}
                                  style={{
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                  }}
                                  className="masspa-item-image-02"
                                />
                                <div className="masspa-item-category-title-2" style={{ color: `${colorTitle}` }}>{item.title}</div>
                              </span>
                            </div>
                         
                          {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                        </div>
                      </div>
  
                    )
                  } else {
                    return (
                      <div className="ms-item-col-sm-12 ms-item-col-md-3 ms-item-col-lg-3" key={i}>
                        <div className="masspa-item-category-container">
                        <div style={{
                              width: sizeImage + 'px',
                              height: sizeImage + 'px',
                              borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                              border: borderImage
                            }}
                              className="masspa-item-link-03">
                              <span className="masspa-item-category-overlay-2">
                                <img src={item.image} alt={item.title}
                                  style={{
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                  }}
                                  className="masspa-item-image-02"
                                />
                                <div className="masspa-item-category-title-2" style={{ color: `${colorTitle}` }}>{item.title}</div>
                              </span>
                            </div>
                       
                          {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                        </div>
                      </div>
  
                    )
                  }
  
                } else {
                  if (animation === 'zoom') {
                    return (
                      <div className="ms-item-col-sm-12 ms-item-col-md-3 ms-item-col-lg-3" key={i}>
                      <div className="masspa-item-category-container">
                      <div style={{
                            width: sizeImage + 'px',
                            height: sizeImage + 'px',
                            borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                            border: borderImage
                          }}
                            className="masspa-item-link-03 masspa-item-category-zoom"
                            onClick={()=>this.handleClick(item.itemCode)}
                            >
                            <img src={item.image} alt={item.title}
                              style={{
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                              }}
                              className="masspa-item-image-01"
                            />
                          </div>
                     
                        <div className="masspa-item-category-title-1" style={{color : `${colorTitle}`}}>{item.title}</div>
                        {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                      </div>
                    </div>
  
                    )
                  } else if (animation === 'rotate') {
                    return (
                      <div className="ms-item-col-sm-12 ms-item-col-md-3 ms-item-col-lg-3" key={i}>
                      <div className="masspa-item-category-container">
                      <div style={{
                            width: sizeImage + 'px',
                            height: sizeImage + 'px',
                            borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                            border: borderImage
                          }}
                            className="masspa-item-link-03 masspa-item-category-rotate"
                            onClick={()=>this.handleClick(item.itemCode)}
                            >
                            <img src={item.image} alt={item.title}
                              style={{
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                              }}
                              className="masspa-item-image-01"
                            />
                          </div>
                     
                        <div className="masspa-item-category-title-1" style={{color : `${colorTitle}`}}>{item.title}</div>
                        {item.description !== null ? <div className="masspa-item-category-text" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div> : <div></div>}
                      </div>
                    </div>
  
                    )
                  } else {
                    return (
                      <div className="ms-item-col-sm-12 ms-item-col-md-3 ms-item-col-lg-3" key={i}>
                        <div className="masspa-item-category-container">
                        <div style={{
                              width: sizeImage + 'px',
                              height: sizeImage + 'px',
                              borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                              border: borderImage
                            }}
                              className="masspa-item-link-03"
                              onClick={()=>this.handleClick(item.itemCode)}
                              >
                              <img src={item.image} alt={item.title}
                                style={{
                                  width: sizeImage + 'px',
                                  height: sizeImage + 'px',
                                  borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                }}
                                className="masspa-item-image-01"
                              />
                            </div>
                       
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