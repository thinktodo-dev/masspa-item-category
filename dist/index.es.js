import React, { Component } from 'react';
import reactDom from 'react-dom';
import PropTypes from 'prop-types';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "/* add css styles here (optional) */\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  font-family: sans-serif;\r\n  line-height: 1.15;\r\n  -webkit-text-size-adjust: 100%;\r\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\na{\r\n  text-decoration: unset;\r\n}\r\n\r\n.masspa-item-arrow-left{\r\n  position : absolute;\r\n  top: 30%;\r\n  left: 0%;\r\n  width: 20px;\r\n  height: 20px;\r\n  z-index: 2;\r\n  cursor: pointer;\r\n}\r\n\r\n.masspa-item-arrow-right{\r\n  position : absolute;\r\n    top: 30%;\r\n    right: 0%;\r\n    width: 20px;\r\n    height: 20px;\r\n    z-index: 2;\r\n    cursor: pointer;\r\n}\r\n\r\n.masspa-item-link-03{\r\n  background-color: #ddd;\r\n  position: relative;\r\n  display: block;\r\n  z-index: 3;\r\n  overflow: hidden;\r\n  margin: 0px auto;\r\n  cursor: pointer;\r\n}\r\n\r\n.masspa-item-image-02{\r\n  /*mode 2*/\r\n  object-fit: cover;\r\n  position: absolute;\r\n  left: 50%;\r\n  top:0%;\r\n  transform : translate(-53%,-60%);\r\n  z-index: -1;\r\n}\r\n\r\n.masspa-item-image-01{\r\n  /*mode 1*/\r\n  object-fit: cover;\r\n  position: absolute;\r\n  left: 50%;\r\n  top:50%;\r\n  transform : translate(-50%,-50%);\r\n  z-index: -1;\r\n}\r\n\r\n.masspa-item-image-03{\r\n  /*layout 2*/\r\n  object-fit: cover;\r\n  position: absolute;\r\n  left: 50%;\r\n  transform: translate(-53%, -60%);\r\n  z-index: -1;\r\n}\r\n\r\n.masspa-item-image-04{\r\n  /*layout 2 mode 1*/\r\n  object-fit: cover;\r\n  position: absolute;\r\n  left: 50%;\r\n  transform: translate(-50%, 0%);\r\n  z-index: -1;\r\n}\r\n\r\n.ms-item-category-row {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n  flex-wrap: wrap;\r\n  margin-right: -15px;\r\n  margin-left: -15px;\r\n}\r\n\r\n.ms-item-category-no-gutter {\r\n  margin-right: 0;\r\n  margin-left: 0;\r\n}\r\n\r\n\r\n.ms-item-col-1, .ms-item-col-2, .ms-item-col-3, .ms-item-col-4, .ms-item-col-5, .ms-item-col-6, .ms-item-col-7, .ms-item-col-8, .ms-item-col-9, .ms-item-col-10, .ms-item-col-11, .ms-item-col-12, .ms-item-col,\r\n.ms-item-col-auto, .ms-item-col-sm-1, .ms-item-col-sm-2, .ms-item-col-sm-3, .ms-item-col-sm-4, .ms-item-col-sm-5, .ms-item-col-sm-6, .ms-item-col-sm-7, .ms-item-col-sm-8, .ms-item-col-sm-9, .ms-item-col-sm-10, .ms-item-col-sm-11, .ms-item-col-sm-12, .ms-item-col-sm,\r\n.ms-item-col-sm-auto, .ms-item-col-md-1, .ms-item-col-md-2, .ms-item-col-md-3, .ms-item-col-md-4, .ms-item-col-md-5, .ms-item-col-md-6, .ms-item-col-md-7, .ms-item-col-md-8, .ms-item-col-md-9, .ms-item-col-md-10, .ms-item-col-md-11, .ms-item-col-md-12, .ms-item-col-md,\r\n.ms-item-col-md-auto, .ms-item-col-lg-1, .ms-item-col-lg-2, .ms-item-col-lg-3, .ms-item-col-lg-4, .ms-item-col-lg-5, .ms-item-col-lg-6, .ms-item-col-lg-7, .ms-item-col-lg-8, .ms-item-col-lg-9, .ms-item-col-lg-10, .ms-item-col-lg-11, .ms-item-col-lg-12, .ms-item-col-lg,\r\n.ms-item-col-lg-auto, .ms-item-col-xl-1, .ms-item-col-xl-2, .ms-item-col-xl-3, .ms-item-col-xl-4, .ms-item-col-xl-5, .ms-item-col-xl-6, .ms-item-col-xl-7, .ms-item-col-xl-8, .ms-item-col-xl-9, .ms-item-col-xl-10, .ms-item-col-xl-11, .ms-item-col-xl-12, .ms-item-col-xl,\r\n.ms-item-col-xl-auto {\r\n  position: relative;\r\n  width: 100%;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n}\r\n\r\n.ms-item-col {\r\n  -ms-flex-preferred-size: 0;\r\n  flex-basis: 0;\r\n  -ms-flex-positive: 1;\r\n  flex-gms-item-category-row: 1;\r\n  max-width: 100%;\r\n}\r\n\r\n.ms-item-col-auto {\r\n  -ms-flex: 0 0 auto;\r\n  flex: 0 0 auto;\r\n  width: auto;\r\n  max-width: 100%;\r\n}\r\n\r\n.ms-item-col-1 {\r\n  -ms-flex: 0 0 8.333333%;\r\n  flex: 0 0 8.333333%;\r\n  max-width: 8.333333%;\r\n}\r\n\r\n.ms-item-col-2 {\r\n  -ms-flex: 0 0 16.666667%;\r\n  flex: 0 0 16.666667%;\r\n  max-width: 16.666667%;\r\n}\r\n\r\n.ms-item-col-3 {\r\n  -ms-flex: 0 0 25%;\r\n  flex: 0 0 25%;\r\n  max-width: 25%;\r\n}\r\n\r\n.ms-item-col-4 {\r\n  -ms-flex: 0 0 33.333333%;\r\n  flex: 0 0 33.333333%;\r\n  max-width: 33.333333%;\r\n}\r\n\r\n.ms-item-col-5 {\r\n  -ms-flex: 0 0 41.666667%;\r\n  flex: 0 0 41.666667%;\r\n  max-width: 41.666667%;\r\n}\r\n\r\n.ms-item-col-6 {\r\n  -ms-flex: 0 0 50%;\r\n  flex: 0 0 50%;\r\n  max-width: 50%;\r\n}\r\n\r\n.ms-item-col-7 {\r\n  -ms-flex: 0 0 58.333333%;\r\n  flex: 0 0 58.333333%;\r\n  max-width: 58.333333%;\r\n}\r\n\r\n.ms-item-col-8 {\r\n  -ms-flex: 0 0 66.666667%;\r\n  flex: 0 0 66.666667%;\r\n  max-width: 66.666667%;\r\n}\r\n\r\n.ms-item-col-9 {\r\n  -ms-flex: 0 0 75%;\r\n  flex: 0 0 75%;\r\n  max-width: 75%;\r\n}\r\n\r\n.ms-item-col-10 {\r\n  -ms-flex: 0 0 83.333333%;\r\n  flex: 0 0 83.333333%;\r\n  max-width: 83.333333%;\r\n}\r\n\r\n.ms-item-col-11 {\r\n  -ms-flex: 0 0 91.666667%;\r\n  flex: 0 0 91.666667%;\r\n  max-width: 91.666667%;\r\n}\r\n\r\n.ms-item-col-12 {\r\n  -ms-flex: 0 0 100%;\r\n  flex: 0 0 100%;\r\n  max-width: 100%;\r\n}\r\n.w-100{\r\n  width: 100%;\r\n}\r\n\r\np{\r\n  margin:0px;\r\n}\r\n.masspa-item-category-title-3{font-size:22px;line-height:25px;font-weight:300;font-family:open sans,sans-serif; text-align: left; color: #000000;}\r\n\r\n.masspa-item-category-slide-container{\r\n  position: relative;\r\n}\r\n.masspa-item-category-container{\r\n  display: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n  align-items: center;\r\n  padding: 40px 0px;\r\n}\r\n\r\n.masspa-item-category-title-1{\r\n    color: #141517;\r\n    line-height: 22px;\r\n    margin-bottom: 0;\r\n    text-transform: uppercase;\r\n}\r\n.masspa-item-category-title-2{\r\n  color: #ffffff;\r\n  line-height: 22px;\r\n  margin-bottom: 0;\r\n  text-align: center;\r\n  font-weight: 400;\r\n  text-transform: uppercase;\r\n  height: 100%;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.masspa-item-category-text{\r\n  height: 78px;\r\n  overflow: hidden;\r\n}\r\n\r\n.masspa-item-category-text-layout02 p , .masspa-item-category-text-layout02 p span,  .masspa-item-category-text-layout02 span{\r\n  color: #2c2e3f !important;\r\n  font-family: sans-serif !important;\r\n  line-height: 1.625 !important;\r\n  height: 50px;\r\n  overflow: hidden;\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 2;\r\n  -webkit-box-orient: vertical;\r\n  text-overflow: ellipsis;\r\n  font-size: 15px;\r\n  padding: 0px;\r\n}\r\n\r\n.masspa-item-category-text p , .masspa-item-category-text p span,  .masspa-item-category-text span{\r\n  color: #2c2e3f !important;\r\n  font-family: sans-serif !important;\r\n  line-height: 1.625 !important;\r\n  height: 70px;\r\n  overflow: hidden;\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 3;\r\n  -webkit-box-orient: vertical;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.masspa-item-category-overlay-2{\r\n  position: absolute;\r\n  background-image:  linear-gradient(to bottom, rgba(255,0,0,0), rgba(40,40,40,1));\r\n  bottom: 0;\r\n  height: 40%;\r\n  width: inherit;\r\n  display: inline-block;\r\n}\r\n\r\n.masspa-item-category-zoom, .masspa-item-category-rotate{\r\n  -webkit-transition: all .5s;\r\n  -moz-transition: all .5s;\r\n  -o-transition: all .5s;\r\n  transition: all .5s;\r\n}\r\n.masspa-item-category-zoom:hover , .masspa-item-category-zoom:focus {\r\n  -ms-transform: scale(1.2);\r\n  -moz-transform: scale(1.2);\r\n  -webkit-transform: scale(1.2);\r\n  -o-transform: scale(1.2);\r\n  transform: scale(1.2);\r\n}\r\n\r\n.masspa-item-category-rotate:hover , .masspa-item-category-rotate:focus{\r\n  -ms-transform: rotate(360deg);\r\n  -moz-transform: rotate(360deg);\r\n  -webkit-transform: rotate(360deg);\r\n  -o-transform: rotate(360deg);\r\n  transform: rotate(360deg);\r\n}\r\n\r\n\r\n@media only screen and (min-width: 768px){\r\n  .masspa-item-category-text p , .masspa-item-category-text p span,  .masspa-item-category-text span {\r\n    font-size: 14px;\r\n  }\r\n  .masspa-item-category-title-1{\r\n    font-size: 18px;\r\n  }\r\n  .masspa-item-category-title-2{\r\n    font-size: 15px;\r\n    padding: 16px 8px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 767.98px) {\r\n  .masspa-item-category-title-1{\r\n    font-size: 20px;\r\n    padding: 30px 8px 5px;\r\n  }\r\n \r\n  .masspa-item-category-text p , .masspa-item-category-text p span,  .masspa-item-category-text span{\r\n    font-size: 14px;\r\n  }\r\n\r\n}\r\n\r\n@media only screen and (max-width: 767.98px) and (min-width: 457px){\r\n  .masspa-item-category-title-2{\r\n    font-size: 18px;\r\n    padding: 15px 15px 0px;\r\n  }\r\n  .masspa-item-image-02 {\r\n    width: 200px !important;\r\n    height: 200px !important;\r\n  }\r\n  .masspa-item-category-container{\r\n    padding: 20px 0px;\r\n  }  \r\n\r\n}\r\n\r\n@media only screen and (max-width: 456.98px) {\r\n  .masspa-item-category-title-2{\r\n    font-size: 15px;\r\n    padding: 15px 15px 0px;\r\n  }\r\n  .masspa-item-category-text{\r\n    padding-top: 20px;\r\n  }\r\n\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .ms-item-col-sm {\r\n    -ms-flex-preferred-size: 0;\r\n    flex-basis: 0;\r\n    -ms-flex-positive: 1;\r\n    flex-gms-item-category-row: 1;\r\n    max-width: 100%;\r\n  }\r\n  .ms-item-col-sm-auto {\r\n    -ms-flex: 0 0 auto;\r\n    flex: 0 0 auto;\r\n    width: auto;\r\n    max-width: 100%;\r\n  }\r\n  .ms-item-col-sm-1 {\r\n    -ms-flex: 0 0 8.333333%;\r\n    flex: 0 0 8.333333%;\r\n    max-width: 8.333333%;\r\n  }\r\n  .ms-item-col-sm-2 {\r\n    -ms-flex: 0 0 16.666667%;\r\n    flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n  }\r\n  .ms-item-col-sm-3 {\r\n    -ms-flex: 0 0 25%;\r\n    flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n  .ms-item-col-sm-4 {\r\n    -ms-flex: 0 0 33.333333%;\r\n    flex: 0 0 33.333333%;\r\n    max-width: 33.333333%;\r\n  }\r\n  .ms-item-col-sm-5 {\r\n    -ms-flex: 0 0 41.666667%;\r\n    flex: 0 0 41.666667%;\r\n    max-width: 41.666667%;\r\n  }\r\n  .ms-item-col-sm-6 {\r\n    -ms-flex: 0 0 50%;\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n  .ms-item-col-sm-7 {\r\n    -ms-flex: 0 0 58.333333%;\r\n    flex: 0 0 58.333333%;\r\n    max-width: 58.333333%;\r\n  }\r\n  .ms-item-col-sm-8 {\r\n    -ms-flex: 0 0 66.666667%;\r\n    flex: 0 0 66.666667%;\r\n    max-width: 66.666667%;\r\n  }\r\n  .ms-item-col-sm-9 {\r\n    -ms-flex: 0 0 75%;\r\n    flex: 0 0 75%;\r\n    max-width: 75%;\r\n  }\r\n  .ms-item-col-sm-10 {\r\n    -ms-flex: 0 0 83.333333%;\r\n    flex: 0 0 83.333333%;\r\n    max-width: 83.333333%;\r\n  }\r\n  .ms-item-col-sm-11 {\r\n    -ms-flex: 0 0 91.666667%;\r\n    flex: 0 0 91.666667%;\r\n    max-width: 91.666667%;\r\n  }\r\n  .ms-item-col-sm-12 {\r\n    -ms-flex: 0 0 100%;\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n\r\n}\r\n@media (min-width: 768.98px) {\r\n  .masspa-item-category-card{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .ms-item-col-md {\r\n    -ms-flex-preferred-size: 0;\r\n    flex-basis: 0;\r\n    -ms-flex-positive: 1;\r\n    flex-gms-item-category-row: 1;\r\n    max-width: 100%;\r\n  }\r\n  .ms-item-col-md-auto {\r\n    -ms-flex: 0 0 auto;\r\n    flex: 0 0 auto;\r\n    width: auto;\r\n    max-width: 100%;\r\n  }\r\n  .ms-item-col-md-1 {\r\n    -ms-flex: 0 0 8.333333%;\r\n    flex: 0 0 8.333333%;\r\n    max-width: 8.333333%;\r\n  }\r\n  .ms-item-col-md-2 {\r\n    -ms-flex: 0 0 16.666667%;\r\n    flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n  }\r\n  .ms-item-col-md-3 {\r\n    -ms-flex: 0 0 25%;\r\n    flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n  .ms-item-col-md-4 {\r\n    -ms-flex: 0 0 33.333333%;\r\n    flex: 0 0 33.333333%;\r\n    max-width: 33.333333%;\r\n  }\r\n  .ms-item-col-md-5 {\r\n    -ms-flex: 0 0 41.666667%;\r\n    flex: 0 0 41.666667%;\r\n    max-width: 41.666667%;\r\n  }\r\n  .ms-item-col-md-6 {\r\n    -ms-flex: 0 0 50%;\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n  .ms-item-col-md-7 {\r\n    -ms-flex: 0 0 58.333333%;\r\n    flex: 0 0 58.333333%;\r\n    max-width: 58.333333%;\r\n  }\r\n  .ms-item-col-md-8 {\r\n    -ms-flex: 0 0 66.666667%;\r\n    flex: 0 0 66.666667%;\r\n    max-width: 66.666667%;\r\n  }\r\n  .ms-item-col-md-9 {\r\n    -ms-flex: 0 0 75%;\r\n    flex: 0 0 75%;\r\n    max-width: 75%;\r\n  }\r\n  .ms-item-col-md-10 {\r\n    -ms-flex: 0 0 83.333333%;\r\n    flex: 0 0 83.333333%;\r\n    max-width: 83.333333%;\r\n  }\r\n  .ms-item-col-md-11 {\r\n    -ms-flex: 0 0 91.666667%;\r\n    flex: 0 0 91.666667%;\r\n    max-width: 91.666667%;\r\n  }\r\n  .ms-item-col-md-12 {\r\n    -ms-flex: 0 0 100%;\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n}\r\n@media (min-width: 992px) {\r\n  .ms-item-col-lg {\r\n    -ms-flex-preferred-size: 0;\r\n    flex-basis: 0;\r\n    -ms-flex-positive: 1;\r\n    flex-gms-item-category-row: 1;\r\n    max-width: 100%;\r\n  }\r\n  .ms-item-col-lg-auto {\r\n    -ms-flex: 0 0 auto;\r\n    flex: 0 0 auto;\r\n    width: auto;\r\n    max-width: 100%;\r\n  }\r\n  .ms-item-col-lg-1 {\r\n    -ms-flex: 0 0 8.333333%;\r\n    flex: 0 0 8.333333%;\r\n    max-width: 8.333333%;\r\n  }\r\n  .ms-item-col-lg-2 {\r\n    -ms-flex: 0 0 16.666667%;\r\n    flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n  }\r\n  .ms-item-col-lg-3 {\r\n    -ms-flex: 0 0 25%;\r\n    flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n  .ms-item-col-lg-4 {\r\n    -ms-flex: 0 0 33.333333%;\r\n    flex: 0 0 33.333333%;\r\n    max-width: 33.333333%;\r\n  }\r\n  .ms-item-col-lg-5 {\r\n    -ms-flex: 0 0 41.666667%;\r\n    flex: 0 0 41.666667%;\r\n    max-width: 41.666667%;\r\n  }\r\n  .ms-item-col-lg-6 {\r\n    -ms-flex: 0 0 50%;\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n  .ms-item-col-lg-7 {\r\n    -ms-flex: 0 0 58.333333%;\r\n    flex: 0 0 58.333333%;\r\n    max-width: 58.333333%;\r\n  }\r\n  .ms-item-col-lg-8 {\r\n    -ms-flex: 0 0 66.666667%;\r\n    flex: 0 0 66.666667%;\r\n    max-width: 66.666667%;\r\n  }\r\n  .ms-item-col-lg-9 {\r\n    -ms-flex: 0 0 75%;\r\n    flex: 0 0 75%;\r\n    max-width: 75%;\r\n  }\r\n  .ms-item-col-lg-10 {\r\n    -ms-flex: 0 0 83.333333%;\r\n    flex: 0 0 83.333333%;\r\n    max-width: 83.333333%;\r\n  }\r\n  .ms-item-col-lg-11 {\r\n    -ms-flex: 0 0 91.666667%;\r\n    flex: 0 0 91.666667%;\r\n    max-width: 91.666667%;\r\n  }\r\n  .ms-item-col-lg-12 {\r\n    -ms-flex: 0 0 100%;\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .ms-item-col-xl {\r\n    -ms-flex-preferred-size: 0;\r\n    flex-basis: 0;\r\n    -ms-flex-positive: 1;\r\n    flex-gms-item-category-row: 1;\r\n    max-width: 100%;\r\n  }\r\n  .ms-item-col-xl-auto {\r\n    -ms-flex: 0 0 auto;\r\n    flex: 0 0 auto;\r\n    width: auto;\r\n    max-width: 100%;\r\n  }\r\n  .ms-item-col-xl-1 {\r\n    -ms-flex: 0 0 8.333333%;\r\n    flex: 0 0 8.333333%;\r\n    max-width: 8.333333%;\r\n  }\r\n  .ms-item-col-xl-2 {\r\n    -ms-flex: 0 0 16.666667%;\r\n    flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n  }\r\n  .ms-item-col-xl-3 {\r\n    -ms-flex: 0 0 25%;\r\n    flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n  .ms-item-col-xl-4 {\r\n    -ms-flex: 0 0 33.333333%;\r\n    flex: 0 0 33.333333%;\r\n    max-width: 33.333333%;\r\n  }\r\n  .ms-item-col-xl-5 {\r\n    -ms-flex: 0 0 41.666667%;\r\n    flex: 0 0 41.666667%;\r\n    max-width: 41.666667%;\r\n  }\r\n  .ms-item-col-xl-6 {\r\n    -ms-flex: 0 0 50%;\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n  .ms-item-col-xl-7 {\r\n    -ms-flex: 0 0 58.333333%;\r\n    flex: 0 0 58.333333%;\r\n    max-width: 58.333333%;\r\n  }\r\n  .ms-item-col-xl-8 {\r\n    -ms-flex: 0 0 66.666667%;\r\n    flex: 0 0 66.666667%;\r\n    max-width: 66.666667%;\r\n  }\r\n  .ms-item-col-xl-9 {\r\n    -ms-flex: 0 0 75%;\r\n    flex: 0 0 75%;\r\n    max-width: 75%;\r\n  }\r\n  .ms-item-col-xl-10 {\r\n    -ms-flex: 0 0 83.333333%;\r\n    flex: 0 0 83.333333%;\r\n    max-width: 83.333333%;\r\n  }\r\n  .ms-item-col-xl-11 {\r\n    -ms-flex: 0 0 91.666667%;\r\n    flex: 0 0 91.666667%;\r\n    max-width: 91.666667%;\r\n  }\r\n  .ms-item-col-xl-12 {\r\n    -ms-flex: 0 0 100%;\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 1440px) {\r\n  .masspa-item-link-03{\r\n    margin: 0px auto\r\n  }\r\n}\r\n\r\n@media screen and (min-width:992px){\r\n  .masspa-item-category-group-title-text{\r\n    padding-left: 0px;\r\n  }\r\n}\r\n@media screen  and (min-width:576px) and (max-width:991px){\r\n  .masspa-item-category-group-title-text{\r\n    padding-left: 30px;\r\n  }\r\n}\r\n\r\n@media screen  and (min-width:480px) and (max-width:575.98px){\r\n  .masspa-item-category-group-title-text{\r\n    padding-left: 0px;\r\n    padding-top: 20px;\r\n  }\r\n}\r\n\r\n@media screen  and (max-width:479.98px){\r\n  .masspa-item-category-group-title-text{\r\n    padding-left: 0px;\r\n    padding-top: 20px;\r\n    text-align: center;\r\n  }\r\n  .masspa-item-category-text-layout02{\r\n    padding-top: 20px;\r\n  }\r\n  .masspa-item-link-03{\r\n    margin: 0px auto\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 767.98px) and (min-width: 576px){\r\n  .masspa-item-link-03 , .masspa-item-image-03, .masspa-item-image-02, .masspa-item-image-04{\r\n    width: 200px !important;\r\n    height: 200px !important;\r\n}\r\n  .masspa-item-category-card{\r\n    display:flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 575.98px) {\r\n  .masspa-item-link-03 , .masspa-item-image-03, .masspa-item-image-02, .masspa-item-image-04{\r\n    width: 200px !important;\r\n    height: 200px !important;\r\n  }\r\n  .masspa-item-link-03{\r\n    margin: 0px auto\r\n  }\r\n  .masspa-item-category-title-3{\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 479.98px) {\r\n  .masspa-item-image-03{\r\n  margin: 0px auto\r\n  }\r\n  .masspa-item-category-card{display:flex;flex-direction:column;justify-content:center;align-items:center}\r\n}\r\n\r\n@media screen and (min-width: 240px) and (max-width:767.98px) {\r\n .ms-item-col-xs-6{flex:0 0 100%;max-width:100%}\r\n  }\r\n\r\n  @media screen and (min-width: 1024px) {\r\n    .ms-item-col-xs-6{flex:0 0 50%!important;max-width:50%!important}\r\n  }\r\n \r\n  @media screen and (min-width: 240px) {\r\n      .masspa-item-category-card{padding:15px 0}\r\n  }\r\n\r\n";
styleInject(css);

var _ref =
/*#__PURE__*/
React.createElement("path", {
  d: "M74.095 107.257s-1.593.225-2.707 1.354c-1.126 1.117-1.362 2.701-1.362 2.701s1.593-.225 2.707-1.354c1.125-1.111 1.362-2.701 1.362-2.701zM70.031 113.345s.23 1.584 1.356 2.707c1.12 1.117 2.707 1.348 2.707 1.348s-.236-1.584-1.362-2.707c-1.114-1.124-2.701-1.348-2.701-1.348zM70.451 112.328s1.282.958 2.875.958c1.584 0 2.873-.958 2.873-.958s-1.289-.957-2.873-.957c-1.593.006-2.875.957-2.875.957z"
});

var _ref2 =
/*#__PURE__*/
React.createElement("path", {
  d: "M69.021 98.946c-7.377 0-13.382 6.006-13.382 13.382 0 7.377 6.005 13.382 13.382 13.382 7.379 0 13.391-6.005 13.391-13.382-.001-7.376-6.012-13.382-13.391-13.382zm0 25.813c-6.868 0-12.424-5.562-12.424-12.431 0-6.856 5.556-12.425 12.424-12.425 6.865 0 12.427 5.557 12.427 12.425 0 6.874-5.562 12.431-12.427 12.431z"
});

var _ref3 =
/*#__PURE__*/
React.createElement("path", {
  d: "M63.949 107.257s.236 1.584 1.356 2.701c1.12 1.129 2.698 1.354 2.698 1.354s-.23-1.584-1.348-2.701c-1.119-1.118-2.706-1.354-2.706-1.354zM63.949 117.388s1.587-.219 2.707-1.336c1.117-1.123 1.348-2.707 1.348-2.707s-1.584.225-2.704 1.354c-1.12 1.116-1.351 2.689-1.351 2.689zM67.581 112.328s-1.276-.957-2.864-.957c-1.59 0-2.867.957-2.867.957s1.277.958 2.867.958c1.588 0 2.864-.958 2.864-.958zM68.066 116.632c0 1.578.955 2.872.955 2.872s.958-1.288.958-2.872-.958-2.873-.958-2.873-.955 1.289-.955 2.873zM91.67 152.273c-1.235 0-4.649-1.814-8.16-1.814-6.18 0-13.237 1.82-13.237 1.814 0 0 5.284 3.156 13.104 3.517 2.494.112 5.423-.656 8.287-.656 3.475 0 6.762.556 9.665.391 6.969-.379 11.727-3.251 11.727-3.251s-5.852-1.555-11.343-1.555c-4.424 0-8.518 1.554-10.043 1.554zM68.066 108.025c0 1.578.955 2.866.955 2.866s.958-1.288.958-2.866c0-1.584-.958-2.873-.958-2.873s-.955 1.289-.955 2.873zM109.261 107.257s.225 1.584 1.348 2.701c1.123 1.129 2.701 1.354 2.701 1.354s-.23-1.584-1.354-2.701c-1.117-1.118-2.695-1.354-2.695-1.354zM115.337 113.345s.23 1.584 1.348 2.707c1.123 1.117 2.707 1.348 2.707 1.348s-.236-1.584-1.359-2.707c-1.112-1.124-2.696-1.348-2.696-1.348zM113.363 116.632c0 1.578.957 2.872.957 2.872s.958-1.294.958-2.872c0-1.584-.958-2.873-.958-2.873s-.957 1.289-.957 2.873zM119.392 107.257s-1.584.225-2.707 1.354c-1.117 1.117-1.354 2.701-1.354 2.701s1.59-.225 2.701-1.354c1.123-1.111 1.36-2.701 1.36-2.701zM115.751 112.328s1.289.958 2.879.958 2.878-.958 2.878-.958-1.288-.957-2.878-.957c-1.59.006-2.879.957-2.879.957zM113.363 108.025c0 1.578.957 2.866.957 2.866s.958-1.288.958-2.866c0-1.584-.958-2.873-.958-2.873s-.957 1.289-.957 2.873zM109.249 117.388s1.59-.219 2.707-1.336c1.123-1.123 1.354-2.707 1.354-2.707s-1.59.225-2.713 1.354c-1.112 1.116-1.348 2.689-1.348 2.689zM112.89 112.328s-1.282-.957-2.872-.957c-1.584 0-2.86.957-2.86.957s1.276.958 2.86.958c1.589 0 2.872-.958 2.872-.958z"
});

var _ref4 =
/*#__PURE__*/
React.createElement("path", {
  d: "M168.688 81.252c.071-1.339.213-2.657.213-4.019C168.9 34.646 134.252 0 91.67 0 49.089 0 14.44 34.652 14.44 77.233c0 22.777 9.963 43.223 25.703 57.367 10.066 30.067 38.417 51.932 51.527 51.932s41.458-21.864 51.53-51.932c6.23-5.604 11.515-12.236 15.676-19.577.957-.721 1.773-1.542 2.317-2.506l1.82-3.168-.94-.485.012-.029 2.087-1.206c4.527-2.606 7.211-9.475 7.79-14.759.544-4.974-.632-9.07-3.274-11.618zm-7.27-6.235l.035.405-.272-.422.237.017zM91.67 7.356c33.26 0 61.094 23.368 68.098 54.538-3.398-5.06-8.99-8.872-14.387-8.872l-1.496.169C115.503 26.752 73.997 21.072 43.273 26.959 55.839 14.848 72.883 7.356 91.67 7.356zm39.662 44.94c-3.76.75-7.235 2.663-9.913 5.89-.62.739-1.058 1.608-1.578 2.427-8.245-4.333-17.862-6.476-28.17-6.476-9.685 0-18.787 1.856-26.693 5.678.535-.535 1.022-1.103 1.575-1.623 12.625-11.886 28.842-17.909 45.699-16.934 6.696 2.878 13.099 6.59 19.08 11.038zM36.5 112.979c0 2.565.166 5.095.461 7.589-9.466-11.922-15.167-26.965-15.167-43.334 0-15.212 4.938-29.253 13.219-40.734 16.559-5.06 38.299-6.186 59.465-1.12-12.146 2.627-23.483 8.521-32.967 17.455-9.206 8.668-15.882 19.508-19.121 30.263-3.739 8.152-5.89 18.036-5.89 29.881zm17.221-.651c0-8.44 6.856-15.297 15.294-15.297s15.297 6.856 15.297 15.297c0 8.435-6.865 15.291-15.297 15.291-8.438 0-15.294-6.856-15.294-15.291zm37.949 51.064c-13.358 0-21.391-11.118-21.391-11.118s11.851-8.394 14.668-8.192c2.813.201 6.723 3.186 6.723 3.186s4.915-3.186 8.334-3.186c3.416 0 13.057 8.192 13.057 8.192s-8.033 11.118-21.391 11.118zm22.65-35.773c-8.44 0-15.297-6.856-15.297-15.291 0-8.44 6.868-15.297 15.297-15.297 1.011 0 1.998.106 2.944.296l.461 1.135.827 1.229c-1.336-.449-2.743-.745-4.232-.745-7.376 0-13.382 6.006-13.382 13.382 0 7.377 6.006 13.382 13.382 13.382 7.377 0 13.388-6.005 13.388-13.382 0-2.229-.597-4.291-1.566-6.147.574.213 1.136.474 1.715.592l.721.142c.645 1.685 1.041 3.499 1.041 5.414-.001 8.434-6.858 15.29-15.299 15.29zm5.119-26.593c1.536 2.016 3.369 3.624 5.354 4.646 1.224 1.927 1.957 4.202 1.957 6.655 0 6.868-5.562 12.431-12.431 12.431s-12.424-5.562-12.424-12.431c0-6.856 5.556-12.425 12.424-12.425 1.834.001 3.554.415 5.12 1.124zm26.942 19.554c.106-.869.095-1.762.153-2.643.556.036 1.111.065 1.644.065-.616.852-1.148 1.75-1.797 2.578zm16.042-15.966c-6.62-12.82-15.972-15.223-15.972-15.223s3.605 17.257 11.716 21.4c-3.015 5.26-18.406 5.071-21.314-1.242-2.908-6.312 4.977-20.489 4.977-20.489s-16.207 8.302-13.305 14.289c-6.248-1.224-12.413-11.201-8.559-20.61 2.831-6.91 18.843.777 18.843.777s-15.185-13.161-18.767-6.836c-2.068-10.965 5.657-23.646 17.502-21.037-9.381 8.624 4.516 24.542 4.516 24.542s-5.172-17.357-1.342-21.648c5.687-6.38 18.702 3.414 18.779 12.824-6.662-.502-12.963 12.773-12.963 12.773s14.522-5.157 19.647-.496c5.107 4.684 1.277 18.075-3.758 20.976zm-5.634-2.547c-.248.65-.479 1.301-.738 1.938-1.39-2.01-2.643-4.463-3.653-7.034 1.418 1.29 2.919 2.992 4.391 5.096zm-2.057-23.448l-.656.053.408-.464.248.411z"
});

var imageDefaut = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Capa_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%22186.532px%22%20height%3D%22186.532px%22%20viewBox%3D%220%200%20186.532%20186.532%22%20style%3D%22enable-background%3Anew%200%200%20186.532%20186.532%3B%22%20%20xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%20%3Cg%3E%20%20%3Cpath%20d%3D%22M74.095%2C107.257c0%2C0-1.593%2C0.225-2.707%2C1.354c-1.126%2C1.117-1.362%2C2.701-1.362%2C2.701s1.593-0.225%2C2.707-1.354%20%20%20C73.858%2C108.847%2C74.095%2C107.257%2C74.095%2C107.257z%22%2F%3E%20%20%3Cpath%20d%3D%22M70.031%2C113.345c0%2C0%2C0.23%2C1.584%2C1.356%2C2.707c1.12%2C1.117%2C2.707%2C1.348%2C2.707%2C1.348s-0.236-1.584-1.362-2.707%20%20%20C71.618%2C113.569%2C70.031%2C113.345%2C70.031%2C113.345z%22%2F%3E%20%20%3Cpath%20d%3D%22M70.451%2C112.328c0%2C0%2C1.282%2C0.958%2C2.875%2C0.958c1.584%2C0%2C2.873-0.958%2C2.873-0.958s-1.289-0.957-2.873-0.957%20%20%20C71.733%2C111.377%2C70.451%2C112.328%2C70.451%2C112.328z%22%2F%3E%20%20%3Cpath%20d%3D%22M69.021%2C98.946c-7.377%2C0-13.382%2C6.006-13.382%2C13.382c0%2C7.377%2C6.005%2C13.382%2C13.382%2C13.382%20%20%20c7.379%2C0%2C13.391-6.005%2C13.391-13.382C82.411%2C104.952%2C76.4%2C98.946%2C69.021%2C98.946z%20M69.021%2C124.759%20%20%20c-6.868%2C0-12.424-5.562-12.424-12.431c0-6.856%2C5.556-12.425%2C12.424-12.425c6.865%2C0%2C12.427%2C5.557%2C12.427%2C12.425%20%20%20C81.448%2C119.202%2C75.886%2C124.759%2C69.021%2C124.759z%22%2F%3E%20%20%3Cpath%20d%3D%22M63.949%2C107.257c0%2C0%2C0.236%2C1.584%2C1.356%2C2.701c1.12%2C1.129%2C2.698%2C1.354%2C2.698%2C1.354s-0.23-1.584-1.348-2.701%20%20%20C65.536%2C107.493%2C63.949%2C107.257%2C63.949%2C107.257z%22%2F%3E%20%20%3Cpath%20d%3D%22M63.949%2C117.388c0%2C0%2C1.587-0.219%2C2.707-1.336c1.117-1.123%2C1.348-2.707%2C1.348-2.707s-1.584%2C0.225-2.704%2C1.354%20%20%20C64.18%2C115.815%2C63.949%2C117.388%2C63.949%2C117.388z%22%2F%3E%20%20%3Cpath%20d%3D%22M67.581%2C112.328c0%2C0-1.276-0.957-2.864-0.957c-1.59%2C0-2.867%2C0.957-2.867%2C0.957s1.277%2C0.958%2C2.867%2C0.958%20%20%20C66.305%2C113.286%2C67.581%2C112.328%2C67.581%2C112.328z%22%2F%3E%20%20%3Cpath%20d%3D%22M68.066%2C116.632c0%2C1.578%2C0.955%2C2.872%2C0.955%2C2.872s0.958-1.288%2C0.958-2.872s-0.958-2.873-0.958-2.873%20%20%20S68.066%2C115.048%2C68.066%2C116.632z%22%2F%3E%20%20%3Cpath%20d%3D%22M91.67%2C152.273c-1.235%2C0-4.649-1.814-8.16-1.814c-6.18%2C0-13.237%2C1.82-13.237%2C1.814c0%2C0%2C5.284%2C3.156%2C13.104%2C3.517%20%20%20c2.494%2C0.112%2C5.423-0.656%2C8.287-0.656c3.475%2C0%2C6.762%2C0.556%2C9.665%2C0.391c6.969-0.379%2C11.727-3.251%2C11.727-3.251%20%20%20s-5.852-1.555-11.343-1.555C97.289%2C150.719%2C93.195%2C152.273%2C91.67%2C152.273z%22%2F%3E%20%20%3Cpath%20d%3D%22M68.066%2C108.025c0%2C1.578%2C0.955%2C2.866%2C0.955%2C2.866s0.958-1.288%2C0.958-2.866c0-1.584-0.958-2.873-0.958-2.873%20%20%20S68.066%2C106.441%2C68.066%2C108.025z%22%2F%3E%20%20%3Cpath%20d%3D%22M109.261%2C107.257c0%2C0%2C0.225%2C1.584%2C1.348%2C2.701c1.123%2C1.129%2C2.701%2C1.354%2C2.701%2C1.354s-0.23-1.584-1.354-2.701%20%20%20C110.839%2C107.493%2C109.261%2C107.257%2C109.261%2C107.257z%22%2F%3E%20%20%3Cpath%20d%3D%22M115.337%2C113.345c0%2C0%2C0.23%2C1.584%2C1.348%2C2.707c1.123%2C1.117%2C2.707%2C1.348%2C2.707%2C1.348s-0.236-1.584-1.359-2.707%20%20%20C116.921%2C113.569%2C115.337%2C113.345%2C115.337%2C113.345z%22%2F%3E%20%20%3Cpath%20d%3D%22M113.363%2C116.632c0%2C1.578%2C0.957%2C2.872%2C0.957%2C2.872s0.958-1.294%2C0.958-2.872c0-1.584-0.958-2.873-0.958-2.873%20%20%20S113.363%2C115.048%2C113.363%2C116.632z%22%2F%3E%20%20%3Cpath%20d%3D%22M119.392%2C107.257c0%2C0-1.584%2C0.225-2.707%2C1.354c-1.117%2C1.117-1.354%2C2.701-1.354%2C2.701s1.59-0.225%2C2.701-1.354%20%20%20C119.155%2C108.847%2C119.392%2C107.257%2C119.392%2C107.257z%22%2F%3E%20%20%3Cpath%20d%3D%22M115.751%2C112.328c0%2C0%2C1.289%2C0.958%2C2.879%2C0.958s2.878-0.958%2C2.878-0.958s-1.288-0.957-2.878-0.957%20%20%20C117.04%2C111.377%2C115.751%2C112.328%2C115.751%2C112.328z%22%2F%3E%20%20%3Cpath%20d%3D%22M113.363%2C108.025c0%2C1.578%2C0.957%2C2.866%2C0.957%2C2.866s0.958-1.288%2C0.958-2.866c0-1.584-0.958-2.873-0.958-2.873%20%20%20S113.363%2C106.441%2C113.363%2C108.025z%22%2F%3E%20%20%3Cpath%20d%3D%22M109.249%2C117.388c0%2C0%2C1.59-0.219%2C2.707-1.336c1.123-1.123%2C1.354-2.707%2C1.354-2.707s-1.59%2C0.225-2.713%2C1.354%20%20%20C109.485%2C115.815%2C109.249%2C117.388%2C109.249%2C117.388z%22%2F%3E%20%20%3Cpath%20d%3D%22M112.89%2C112.328c0%2C0-1.282-0.957-2.872-0.957c-1.584%2C0-2.86%2C0.957-2.86%2C0.957s1.276%2C0.958%2C2.86%2C0.958%20%20%20C111.607%2C113.286%2C112.89%2C112.328%2C112.89%2C112.328z%22%2F%3E%20%20%3Cpath%20d%3D%22M168.688%2C81.252c0.071-1.339%2C0.213-2.657%2C0.213-4.019C168.9%2C34.646%2C134.252%2C0%2C91.67%2C0C49.089%2C0%2C14.44%2C34.652%2C14.44%2C77.233%20%20%20c0%2C22.777%2C9.963%2C43.223%2C25.703%2C57.367c10.066%2C30.067%2C38.417%2C51.932%2C51.527%2C51.932s41.458-21.864%2C51.53-51.932%20%20%20c6.23-5.604%2C11.515-12.236%2C15.676-19.577c0.957-0.721%2C1.773-1.542%2C2.317-2.506l1.82-3.168l-0.94-0.485l0.012-0.029l2.087-1.206%20%20%20c4.527-2.606%2C7.211-9.475%2C7.79-14.759C172.506%2C87.896%2C171.33%2C83.8%2C168.688%2C81.252z%20M161.418%2C75.017l0.035%2C0.405l-0.272-0.422%20%20%20L161.418%2C75.017z%20M91.67%2C7.356c33.26%2C0%2C61.094%2C23.368%2C68.098%2C54.538c-3.398-5.06-8.99-8.872-14.387-8.872l-1.496%2C0.169%20%20%20C115.503%2C26.752%2C73.997%2C21.072%2C43.273%2C26.959C55.839%2C14.848%2C72.883%2C7.356%2C91.67%2C7.356z%20M131.332%2C52.296%20%20%20c-3.76%2C0.75-7.235%2C2.663-9.913%2C5.89c-0.62%2C0.739-1.058%2C1.608-1.578%2C2.427c-8.245-4.333-17.862-6.476-28.17-6.476%20%20%20c-9.685%2C0-18.787%2C1.856-26.693%2C5.678c0.535-0.535%2C1.022-1.103%2C1.575-1.623c12.625-11.886%2C28.842-17.909%2C45.699-16.934%20%20%20C118.948%2C44.136%2C125.351%2C47.848%2C131.332%2C52.296z%20M36.5%2C112.979c0%2C2.565%2C0.166%2C5.095%2C0.461%2C7.589%20%20%20c-9.466-11.922-15.167-26.965-15.167-43.334c0-15.212%2C4.938-29.253%2C13.219-40.734c16.559-5.06%2C38.299-6.186%2C59.465-1.12%20%20%20c-12.146%2C2.627-23.483%2C8.521-32.967%2C17.455c-9.206%2C8.668-15.882%2C19.508-19.121%2C30.263C38.651%2C91.25%2C36.5%2C101.134%2C36.5%2C112.979z%20%20%20%20M53.721%2C112.328c0-8.44%2C6.856-15.297%2C15.294-15.297s15.297%2C6.856%2C15.297%2C15.297c0%2C8.435-6.865%2C15.291-15.297%2C15.291%20%20%20C60.577%2C127.619%2C53.721%2C120.763%2C53.721%2C112.328z%20M91.67%2C163.392c-13.358%2C0-21.391-11.118-21.391-11.118s11.851-8.394%2C14.668-8.192%20%20%20c2.813%2C0.201%2C6.723%2C3.186%2C6.723%2C3.186s4.915-3.186%2C8.334-3.186c3.416%2C0%2C13.057%2C8.192%2C13.057%2C8.192S105.028%2C163.392%2C91.67%2C163.392z%20%20%20%20M114.32%2C127.619c-8.44%2C0-15.297-6.856-15.297-15.291c0-8.44%2C6.868-15.297%2C15.297-15.297c1.011%2C0%2C1.998%2C0.106%2C2.944%2C0.296%20%20%20l0.461%2C1.135l0.827%2C1.229c-1.336-0.449-2.743-0.745-4.232-0.745c-7.376%2C0-13.382%2C6.006-13.382%2C13.382%20%20%20c0%2C7.377%2C6.006%2C13.382%2C13.382%2C13.382c7.377%2C0%2C13.388-6.005%2C13.388-13.382c0-2.229-0.597-4.291-1.566-6.147%20%20%20c0.574%2C0.213%2C1.136%2C0.474%2C1.715%2C0.592l0.721%2C0.142c0.645%2C1.685%2C1.041%2C3.499%2C1.041%2C5.414%20%20%20C129.618%2C120.763%2C122.761%2C127.619%2C114.32%2C127.619z%20M119.439%2C101.026c1.536%2C2.016%2C3.369%2C3.624%2C5.354%2C4.646%20%20%20c1.224%2C1.927%2C1.957%2C4.202%2C1.957%2C6.655c0%2C6.868-5.562%2C12.431-12.431%2C12.431s-12.424-5.562-12.424-12.431%20%20%20c0-6.856%2C5.556-12.425%2C12.424-12.425C116.153%2C99.903%2C117.873%2C100.317%2C119.439%2C101.026z%20M146.381%2C120.58%20%20%20c0.106-0.869%2C0.095-1.762%2C0.153-2.643c0.556%2C0.036%2C1.111%2C0.065%2C1.644%2C0.065C147.562%2C118.854%2C147.03%2C119.752%2C146.381%2C120.58z%20%20%20%20M162.423%2C104.614c-6.62-12.82-15.972-15.223-15.972-15.223s3.605%2C17.257%2C11.716%2C21.4c-3.015%2C5.26-18.406%2C5.071-21.314-1.242%20%20%20c-2.908-6.312%2C4.977-20.489%2C4.977-20.489s-16.207%2C8.302-13.305%2C14.289c-6.248-1.224-12.413-11.201-8.559-20.61%20%20%20c2.831-6.91%2C18.843%2C0.777%2C18.843%2C0.777s-15.185-13.161-18.767-6.836c-2.068-10.965%2C5.657-23.646%2C17.502-21.037%20%20%20c-9.381%2C8.624%2C4.516%2C24.542%2C4.516%2C24.542s-5.172-17.357-1.342-21.648c5.687-6.38%2C18.702%2C3.414%2C18.779%2C12.824%20%20%20c-6.662-0.502-12.963%2C12.773-12.963%2C12.773s14.522-5.157%2C19.647-0.496C171.288%2C88.322%2C167.458%2C101.713%2C162.423%2C104.614z%20%20%20%20M156.789%2C102.067c-0.248%2C0.65-0.479%2C1.301-0.738%2C1.938c-1.39-2.01-2.643-4.463-3.653-7.034%20%20%20C153.816%2C98.261%2C155.317%2C99.963%2C156.789%2C102.067z%20M154.732%2C78.619l-0.656%2C0.053l0.408-0.464L154.732%2C78.619z%22%2F%3E%20%3C%2Fg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

var css$1 = "/* Slider */\n.slick-slider\n{\n    position: relative;\n\n    display: block;\n    box-sizing: border-box;\n\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n\n    -webkit-touch-callout: none;\n    -khtml-user-select: none;\n    -ms-touch-action: pan-y;\n        touch-action: pan-y;\n    -webkit-tap-highlight-color: transparent;\n}\n\n.slick-list\n{\n    position: relative;\n\n    display: block;\n    overflow: hidden;\n\n    margin: 0;\n    padding: 0;\n}\n.slick-list:focus\n{\n    outline: none;\n}\n.slick-list.dragging\n{\n    cursor: pointer;\n    cursor: hand;\n}\n\n.slick-slider .slick-track,\n.slick-slider .slick-list\n{\n    -webkit-transform: translate3d(0, 0, 0);\n       -moz-transform: translate3d(0, 0, 0);\n        -ms-transform: translate3d(0, 0, 0);\n         -o-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n\n.slick-track\n{\n    position: relative;\n    top: 0;\n    left: 0;\n\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n.slick-track:before,\n.slick-track:after\n{\n    display: table;\n\n    content: '';\n}\n.slick-track:after\n{\n    clear: both;\n}\n.slick-loading .slick-track\n{\n    visibility: hidden;\n}\n\n.slick-slide\n{\n    display: none;\n    float: left;\n\n    height: 100%;\n    min-height: 1px;\n}\n[dir='rtl'] .slick-slide\n{\n    float: right;\n}\n.slick-slide img\n{\n    display: block;\n}\n.slick-slide.slick-loading img\n{\n    display: none;\n}\n.slick-slide.dragging img\n{\n    pointer-events: none;\n}\n.slick-initialized .slick-slide\n{\n    display: block;\n}\n.slick-loading .slick-slide\n{\n    visibility: hidden;\n}\n.slick-vertical .slick-slide\n{\n    display: block;\n\n    height: auto;\n\n    border: 1px solid transparent;\n}\n.slick-arrow.slick-hidden {\n    display: none;\n}\n";
styleInject(css$1);

var css$2 = "@charset 'UTF-8';\n/* Slider */\n.slick-loading .slick-list\n{\n    background: #fff url('./ajax-loader.gif') center center no-repeat;\n}\n\n/* Icons */\n@font-face\n{\n    font-family: 'slick';\n    font-weight: normal;\n    font-style: normal;\n\n    src: url('./fonts/slick.eot');\n    src: url('./fonts/slick.eot?#iefix') format('embedded-opentype'), url('./fonts/slick.woff') format('woff'), url('./fonts/slick.ttf') format('truetype'), url('./fonts/slick.svg#slick') format('svg');\n}\n/* Arrows */\n.slick-prev,\n.slick-next\n{\n    font-size: 0;\n    line-height: 0;\n\n    position: absolute;\n    top: 50%;\n\n    display: block;\n\n    width: 20px;\n    height: 20px;\n    padding: 0;\n    -webkit-transform: translate(0, -50%);\n    -ms-transform: translate(0, -50%);\n    transform: translate(0, -50%);\n\n    cursor: pointer;\n\n    color: transparent;\n    border: none;\n    outline: none;\n    background: transparent;\n}\n.slick-prev:hover,\n.slick-prev:focus,\n.slick-next:hover,\n.slick-next:focus\n{\n    color: transparent;\n    outline: none;\n    background: transparent;\n}\n.slick-prev:hover:before,\n.slick-prev:focus:before,\n.slick-next:hover:before,\n.slick-next:focus:before\n{\n    opacity: 1;\n}\n.slick-prev.slick-disabled:before,\n.slick-next.slick-disabled:before\n{\n    opacity: .25;\n}\n\n.slick-prev:before,\n.slick-next:before\n{\n    font-family: 'slick';\n    font-size: 20px;\n    line-height: 1;\n\n    opacity: .75;\n    color: white;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.slick-prev\n{\n    left: -25px;\n}\n[dir='rtl'] .slick-prev\n{\n    right: -25px;\n    left: auto;\n}\n.slick-prev:before\n{\n    content: '←';\n}\n[dir='rtl'] .slick-prev:before\n{\n    content: '→';\n}\n\n.slick-next\n{\n    right: -25px;\n}\n[dir='rtl'] .slick-next\n{\n    right: auto;\n    left: -25px;\n}\n.slick-next:before\n{\n    content: '→';\n}\n[dir='rtl'] .slick-next:before\n{\n    content: '←';\n}\n\n/* Dots */\n.slick-dotted.slick-slider\n{\n    margin-bottom: 30px;\n}\n\n.slick-dots\n{\n    position: absolute;\n    bottom: -25px;\n\n    display: block;\n\n    width: 100%;\n    padding: 0;\n    margin: 0;\n\n    list-style: none;\n\n    text-align: center;\n}\n.slick-dots li\n{\n    position: relative;\n\n    display: inline-block;\n\n    width: 20px;\n    height: 20px;\n    margin: 0 5px;\n    padding: 0;\n\n    cursor: pointer;\n}\n.slick-dots li button\n{\n    font-size: 0;\n    line-height: 0;\n\n    display: block;\n\n    width: 20px;\n    height: 20px;\n    padding: 5px;\n\n    cursor: pointer;\n\n    color: transparent;\n    border: 0;\n    outline: none;\n    background: transparent;\n}\n.slick-dots li button:hover,\n.slick-dots li button:focus\n{\n    outline: none;\n}\n.slick-dots li button:hover:before,\n.slick-dots li button:focus:before\n{\n    opacity: 1;\n}\n.slick-dots li button:before\n{\n    font-family: 'slick';\n    font-size: 6px;\n    line-height: 20px;\n\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    width: 20px;\n    height: 20px;\n\n    content: '•';\n    text-align: center;\n\n    opacity: .25;\n    color: black;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n.slick-dots li.slick-active button:before\n{\n    opacity: .75;\n    color: black;\n}\n";
styleInject(css$2);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var initialState_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var initialState = {
  animating: false,
  autoplaying: null,
  currentDirection: 0,
  currentLeft: null,
  currentSlide: 0,
  direction: 1,
  dragging: false,
  edgeDragged: false,
  initialized: false,
  lazyLoadedList: [],
  listHeight: null,
  listWidth: null,
  scrolling: false,
  slideCount: null,
  slideHeight: null,
  slideWidth: null,
  swipeLeft: null,
  swiped: false,
  // used by swipeEvent. differentites between touch and swipe.
  swiping: false,
  touchObject: {
    startX: 0,
    startY: 0,
    curX: 0,
    curY: 0
  },
  trackStyle: {},
  trackWidth: 0
};
var _default = initialState;
exports["default"] = _default;
});

unwrapExports(initialState_1);

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var lodash_debounce = debounce;

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var innerSliderUtils = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canUseDOM = exports.slidesOnLeft = exports.slidesOnRight = exports.siblingDirection = exports.getTotalSlides = exports.getPostClones = exports.getPreClones = exports.getTrackLeft = exports.getTrackAnimateCSS = exports.getTrackCSS = exports.checkSpecKeys = exports.getSlideCount = exports.checkNavigable = exports.getNavigableIndexes = exports.swipeEnd = exports.swipeMove = exports.swipeStart = exports.keyHandler = exports.changeSlide = exports.slideHandler = exports.initializedState = exports.extractObject = exports.canGoNext = exports.getSwipeDirection = exports.getHeight = exports.getWidth = exports.lazySlidesOnRight = exports.lazySlidesOnLeft = exports.lazyEndIndex = exports.lazyStartIndex = exports.getRequiredLazySlides = exports.getOnDemandLazySlides = void 0;

var _react = _interopRequireDefault(React);

var _reactDom = _interopRequireDefault(reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getOnDemandLazySlides = function getOnDemandLazySlides(spec) {
  var onDemandSlides = [];
  var startIndex = lazyStartIndex(spec);
  var endIndex = lazyEndIndex(spec);

  for (var slideIndex = startIndex; slideIndex < endIndex; slideIndex++) {
    if (spec.lazyLoadedList.indexOf(slideIndex) < 0) {
      onDemandSlides.push(slideIndex);
    }
  }

  return onDemandSlides;
}; // return list of slides that need to be present


exports.getOnDemandLazySlides = getOnDemandLazySlides;

var getRequiredLazySlides = function getRequiredLazySlides(spec) {
  var requiredSlides = [];
  var startIndex = lazyStartIndex(spec);
  var endIndex = lazyEndIndex(spec);

  for (var slideIndex = startIndex; slideIndex < endIndex; slideIndex++) {
    requiredSlides.push(slideIndex);
  }

  return requiredSlides;
}; // startIndex that needs to be present


exports.getRequiredLazySlides = getRequiredLazySlides;

var lazyStartIndex = function lazyStartIndex(spec) {
  return spec.currentSlide - lazySlidesOnLeft(spec);
};

exports.lazyStartIndex = lazyStartIndex;

var lazyEndIndex = function lazyEndIndex(spec) {
  return spec.currentSlide + lazySlidesOnRight(spec);
};

exports.lazyEndIndex = lazyEndIndex;

var lazySlidesOnLeft = function lazySlidesOnLeft(spec) {
  return spec.centerMode ? Math.floor(spec.slidesToShow / 2) + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : 0;
};

exports.lazySlidesOnLeft = lazySlidesOnLeft;

var lazySlidesOnRight = function lazySlidesOnRight(spec) {
  return spec.centerMode ? Math.floor((spec.slidesToShow - 1) / 2) + 1 + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : spec.slidesToShow;
}; // get width of an element


exports.lazySlidesOnRight = lazySlidesOnRight;

var getWidth = function getWidth(elem) {
  return elem && elem.offsetWidth || 0;
};

exports.getWidth = getWidth;

var getHeight = function getHeight(elem) {
  return elem && elem.offsetHeight || 0;
};

exports.getHeight = getHeight;

var getSwipeDirection = function getSwipeDirection(touchObject) {
  var verticalSwiping = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var xDist, yDist, r, swipeAngle;
  xDist = touchObject.startX - touchObject.curX;
  yDist = touchObject.startY - touchObject.curY;
  r = Math.atan2(yDist, xDist);
  swipeAngle = Math.round(r * 180 / Math.PI);

  if (swipeAngle < 0) {
    swipeAngle = 360 - Math.abs(swipeAngle);
  }

  if (swipeAngle <= 45 && swipeAngle >= 0 || swipeAngle <= 360 && swipeAngle >= 315) {
    return "left";
  }

  if (swipeAngle >= 135 && swipeAngle <= 225) {
    return "right";
  }

  if (verticalSwiping === true) {
    if (swipeAngle >= 35 && swipeAngle <= 135) {
      return "up";
    } else {
      return "down";
    }
  }

  return "vertical";
}; // whether or not we can go next


exports.getSwipeDirection = getSwipeDirection;

var canGoNext = function canGoNext(spec) {
  var canGo = true;

  if (!spec.infinite) {
    if (spec.centerMode && spec.currentSlide >= spec.slideCount - 1) {
      canGo = false;
    } else if (spec.slideCount <= spec.slidesToShow || spec.currentSlide >= spec.slideCount - spec.slidesToShow) {
      canGo = false;
    }
  }

  return canGo;
}; // given an object and a list of keys, return new object with given keys


exports.canGoNext = canGoNext;

var extractObject = function extractObject(spec, keys) {
  var newObject = {};
  keys.forEach(function (key) {
    return newObject[key] = spec[key];
  });
  return newObject;
}; // get initialized state


exports.extractObject = extractObject;

var initializedState = function initializedState(spec) {
  // spec also contains listRef, trackRef
  var slideCount = _react["default"].Children.count(spec.children);

  var listWidth = Math.ceil(getWidth(_reactDom["default"].findDOMNode(spec.listRef)));
  var trackWidth = Math.ceil(getWidth(_reactDom["default"].findDOMNode(spec.trackRef)));
  var slideWidth;

  if (!spec.vertical) {
    var centerPaddingAdj = spec.centerMode && parseInt(spec.centerPadding) * 2;

    if (typeof spec.centerPadding === "string" && spec.centerPadding.slice(-1) === "%") {
      centerPaddingAdj *= listWidth / 100;
    }

    slideWidth = Math.ceil((listWidth - centerPaddingAdj) / spec.slidesToShow);
  } else {
    slideWidth = listWidth;
  }

  var slideHeight = _reactDom["default"].findDOMNode(spec.listRef) && getHeight(_reactDom["default"].findDOMNode(spec.listRef).querySelector('[data-index="0"]'));
  var listHeight = slideHeight * spec.slidesToShow;
  var currentSlide = spec.currentSlide === undefined ? spec.initialSlide : spec.currentSlide;

  if (spec.rtl && spec.currentSlide === undefined) {
    currentSlide = slideCount - 1 - spec.initialSlide;
  }

  var lazyLoadedList = spec.lazyLoadedList || [];
  var slidesToLoad = getOnDemandLazySlides({
    currentSlide: currentSlide,
    lazyLoadedList: lazyLoadedList
  }, spec);
  lazyLoadedList.concat(slidesToLoad);
  var state = {
    slideCount: slideCount,
    slideWidth: slideWidth,
    listWidth: listWidth,
    trackWidth: trackWidth,
    currentSlide: currentSlide,
    slideHeight: slideHeight,
    listHeight: listHeight,
    lazyLoadedList: lazyLoadedList
  };

  if (spec.autoplaying === null && spec.autoplay) {
    state["autoplaying"] = "playing";
  }

  return state;
};

exports.initializedState = initializedState;

var slideHandler = function slideHandler(spec) {
  var waitForAnimate = spec.waitForAnimate,
      animating = spec.animating,
      fade = spec.fade,
      infinite = spec.infinite,
      index = spec.index,
      slideCount = spec.slideCount,
      lazyLoadedList = spec.lazyLoadedList,
      lazyLoad = spec.lazyLoad,
      currentSlide = spec.currentSlide,
      centerMode = spec.centerMode,
      slidesToScroll = spec.slidesToScroll,
      slidesToShow = spec.slidesToShow,
      useCSS = spec.useCSS;
  if (waitForAnimate && animating) return {};
  var animationSlide = index,
      finalSlide,
      animationLeft,
      finalLeft;
  var state = {},
      nextState = {};

  if (fade) {
    if (!infinite && (index < 0 || index >= slideCount)) return {};

    if (index < 0) {
      animationSlide = index + slideCount;
    } else if (index >= slideCount) {
      animationSlide = index - slideCount;
    }

    if (lazyLoad && lazyLoadedList.indexOf(animationSlide) < 0) {
      lazyLoadedList.push(animationSlide);
    }

    state = {
      animating: true,
      currentSlide: animationSlide,
      lazyLoadedList: lazyLoadedList
    };
    nextState = {
      animating: false
    };
  } else {
    finalSlide = animationSlide;

    if (animationSlide < 0) {
      finalSlide = animationSlide + slideCount;
      if (!infinite) finalSlide = 0;else if (slideCount % slidesToScroll !== 0) finalSlide = slideCount - slideCount % slidesToScroll;
    } else if (!canGoNext(spec) && animationSlide > currentSlide) {
      animationSlide = finalSlide = currentSlide;
    } else if (centerMode && animationSlide >= slideCount) {
      animationSlide = infinite ? slideCount : slideCount - 1;
      finalSlide = infinite ? 0 : slideCount - 1;
    } else if (animationSlide >= slideCount) {
      finalSlide = animationSlide - slideCount;
      if (!infinite) finalSlide = slideCount - slidesToShow;else if (slideCount % slidesToScroll !== 0) finalSlide = 0;
    }

    animationLeft = getTrackLeft(_objectSpread({}, spec, {
      slideIndex: animationSlide
    }));
    finalLeft = getTrackLeft(_objectSpread({}, spec, {
      slideIndex: finalSlide
    }));

    if (!infinite) {
      if (animationLeft === finalLeft) animationSlide = finalSlide;
      animationLeft = finalLeft;
    }

    lazyLoad && lazyLoadedList.concat(getOnDemandLazySlides(_objectSpread({}, spec, {
      currentSlide: animationSlide
    })));

    if (!useCSS) {
      state = {
        currentSlide: finalSlide,
        trackStyle: getTrackCSS(_objectSpread({}, spec, {
          left: finalLeft
        })),
        lazyLoadedList: lazyLoadedList
      };
    } else {
      state = {
        animating: true,
        currentSlide: finalSlide,
        trackStyle: getTrackAnimateCSS(_objectSpread({}, spec, {
          left: animationLeft
        })),
        lazyLoadedList: lazyLoadedList
      };
      nextState = {
        animating: false,
        currentSlide: finalSlide,
        trackStyle: getTrackCSS(_objectSpread({}, spec, {
          left: finalLeft
        })),
        swipeLeft: null
      };
    }
  }

  return {
    state: state,
    nextState: nextState
  };
};

exports.slideHandler = slideHandler;

var changeSlide = function changeSlide(spec, options) {
  var indexOffset, previousInt, slideOffset, unevenOffset, targetSlide;
  var slidesToScroll = spec.slidesToScroll,
      slidesToShow = spec.slidesToShow,
      slideCount = spec.slideCount,
      currentSlide = spec.currentSlide,
      lazyLoad = spec.lazyLoad,
      infinite = spec.infinite;
  unevenOffset = slideCount % slidesToScroll !== 0;
  indexOffset = unevenOffset ? 0 : (slideCount - currentSlide) % slidesToScroll;

  if (options.message === "previous") {
    slideOffset = indexOffset === 0 ? slidesToScroll : slidesToShow - indexOffset;
    targetSlide = currentSlide - slideOffset;

    if (lazyLoad && !infinite) {
      previousInt = currentSlide - slideOffset;
      targetSlide = previousInt === -1 ? slideCount - 1 : previousInt;
    }
  } else if (options.message === "next") {
    slideOffset = indexOffset === 0 ? slidesToScroll : indexOffset;
    targetSlide = currentSlide + slideOffset;

    if (lazyLoad && !infinite) {
      targetSlide = (currentSlide + slidesToScroll) % slideCount + indexOffset;
    }
  } else if (options.message === "dots") {
    // Click on dots
    targetSlide = options.index * options.slidesToScroll;

    if (targetSlide === options.currentSlide) {
      return null;
    }
  } else if (options.message === "children") {
    // Click on the slides
    targetSlide = options.index;

    if (targetSlide === options.currentSlide) {
      return null;
    }

    if (infinite) {
      var direction = siblingDirection(_objectSpread({}, spec, {
        targetSlide: targetSlide
      }));

      if (targetSlide > options.currentSlide && direction === "left") {
        targetSlide = targetSlide - slideCount;
      } else if (targetSlide < options.currentSlide && direction === "right") {
        targetSlide = targetSlide + slideCount;
      }
    }
  } else if (options.message === "index") {
    targetSlide = Number(options.index);

    if (targetSlide === options.currentSlide) {
      return null;
    }
  }

  return targetSlide;
};

exports.changeSlide = changeSlide;

var keyHandler = function keyHandler(e, accessibility, rtl) {
  if (e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !accessibility) return "";
  if (e.keyCode === 37) return rtl ? "next" : "previous";
  if (e.keyCode === 39) return rtl ? "previous" : "next";
  return "";
};

exports.keyHandler = keyHandler;

var swipeStart = function swipeStart(e, swipe, draggable) {
  e.target.tagName === "IMG" && e.preventDefault();
  if (!swipe || !draggable && e.type.indexOf("mouse") !== -1) return "";
  return {
    dragging: true,
    touchObject: {
      startX: e.touches ? e.touches[0].pageX : e.clientX,
      startY: e.touches ? e.touches[0].pageY : e.clientY,
      curX: e.touches ? e.touches[0].pageX : e.clientX,
      curY: e.touches ? e.touches[0].pageY : e.clientY
    }
  };
};

exports.swipeStart = swipeStart;

var swipeMove = function swipeMove(e, spec) {
  // spec also contains, trackRef and slideIndex
  var scrolling = spec.scrolling,
      animating = spec.animating,
      vertical = spec.vertical,
      swipeToSlide = spec.swipeToSlide,
      verticalSwiping = spec.verticalSwiping,
      rtl = spec.rtl,
      currentSlide = spec.currentSlide,
      edgeFriction = spec.edgeFriction,
      edgeDragged = spec.edgeDragged,
      onEdge = spec.onEdge,
      swiped = spec.swiped,
      swiping = spec.swiping,
      slideCount = spec.slideCount,
      slidesToScroll = spec.slidesToScroll,
      infinite = spec.infinite,
      touchObject = spec.touchObject,
      swipeEvent = spec.swipeEvent,
      listHeight = spec.listHeight,
      listWidth = spec.listWidth;
  if (scrolling) return;
  if (animating) return e.preventDefault();
  if (vertical && swipeToSlide && verticalSwiping) e.preventDefault();
  var swipeLeft,
      state = {};
  var curLeft = getTrackLeft(spec);
  touchObject.curX = e.touches ? e.touches[0].pageX : e.clientX;
  touchObject.curY = e.touches ? e.touches[0].pageY : e.clientY;
  touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2)));
  var verticalSwipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curY - touchObject.startY, 2)));

  if (!verticalSwiping && !swiping && verticalSwipeLength > 10) {
    return {
      scrolling: true
    };
  }

  if (verticalSwiping) touchObject.swipeLength = verticalSwipeLength;
  var positionOffset = (!rtl ? 1 : -1) * (touchObject.curX > touchObject.startX ? 1 : -1);
  if (verticalSwiping) positionOffset = touchObject.curY > touchObject.startY ? 1 : -1;
  var dotCount = Math.ceil(slideCount / slidesToScroll);
  var swipeDirection = getSwipeDirection(spec.touchObject, verticalSwiping);
  var touchSwipeLength = touchObject.swipeLength;

  if (!infinite) {
    if (currentSlide === 0 && swipeDirection === "right" || currentSlide + 1 >= dotCount && swipeDirection === "left" || !canGoNext(spec) && swipeDirection === "left") {
      touchSwipeLength = touchObject.swipeLength * edgeFriction;

      if (edgeDragged === false && onEdge) {
        onEdge(swipeDirection);
        state["edgeDragged"] = true;
      }
    }
  }

  if (!swiped && swipeEvent) {
    swipeEvent(swipeDirection);
    state["swiped"] = true;
  }

  if (!vertical) {
    if (!rtl) {
      swipeLeft = curLeft + touchSwipeLength * positionOffset;
    } else {
      swipeLeft = curLeft - touchSwipeLength * positionOffset;
    }
  } else {
    swipeLeft = curLeft + touchSwipeLength * (listHeight / listWidth) * positionOffset;
  }

  if (verticalSwiping) {
    swipeLeft = curLeft + touchSwipeLength * positionOffset;
  }

  state = _objectSpread({}, state, {
    touchObject: touchObject,
    swipeLeft: swipeLeft,
    trackStyle: getTrackCSS(_objectSpread({}, spec, {
      left: swipeLeft
    }))
  });

  if (Math.abs(touchObject.curX - touchObject.startX) < Math.abs(touchObject.curY - touchObject.startY) * 0.8) {
    return state;
  }

  if (touchObject.swipeLength > 10) {
    state["swiping"] = true;
    e.preventDefault();
  }

  return state;
};

exports.swipeMove = swipeMove;

var swipeEnd = function swipeEnd(e, spec) {
  var dragging = spec.dragging,
      swipe = spec.swipe,
      touchObject = spec.touchObject,
      listWidth = spec.listWidth,
      touchThreshold = spec.touchThreshold,
      verticalSwiping = spec.verticalSwiping,
      listHeight = spec.listHeight,
      currentSlide = spec.currentSlide,
      swipeToSlide = spec.swipeToSlide,
      scrolling = spec.scrolling,
      onSwipe = spec.onSwipe;

  if (!dragging) {
    if (swipe) e.preventDefault();
    return {};
  }

  var minSwipe = verticalSwiping ? listHeight / touchThreshold : listWidth / touchThreshold;
  var swipeDirection = getSwipeDirection(touchObject, verticalSwiping); // reset the state of touch related state variables.

  var state = {
    dragging: false,
    edgeDragged: false,
    scrolling: false,
    swiping: false,
    swiped: false,
    swipeLeft: null,
    touchObject: {}
  };

  if (scrolling) {
    return state;
  }

  if (!touchObject.swipeLength) {
    return state;
  }

  if (touchObject.swipeLength > minSwipe) {
    e.preventDefault();

    if (onSwipe) {
      onSwipe(swipeDirection);
    }

    var slideCount, newSlide;

    switch (swipeDirection) {
      case "left":
      case "up":
        newSlide = currentSlide + getSlideCount(spec);
        slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
        state["currentDirection"] = 0;
        break;

      case "right":
      case "down":
        newSlide = currentSlide - getSlideCount(spec);
        slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
        state["currentDirection"] = 1;
        break;

      default:
        slideCount = currentSlide;
    }

    state["triggerSlideHandler"] = slideCount;
  } else {
    // Adjust the track back to it's original position.
    var currentLeft = getTrackLeft(spec);
    state["trackStyle"] = getTrackAnimateCSS(_objectSpread({}, spec, {
      left: currentLeft
    }));
  }

  return state;
};

exports.swipeEnd = swipeEnd;

var getNavigableIndexes = function getNavigableIndexes(spec) {
  var max = spec.infinite ? spec.slideCount * 2 : spec.slideCount;
  var breakpoint = spec.infinite ? spec.slidesToShow * -1 : 0;
  var counter = spec.infinite ? spec.slidesToShow * -1 : 0;
  var indexes = [];

  while (breakpoint < max) {
    indexes.push(breakpoint);
    breakpoint = counter + spec.slidesToScroll;
    counter += Math.min(spec.slidesToScroll, spec.slidesToShow);
  }

  return indexes;
};

exports.getNavigableIndexes = getNavigableIndexes;

var checkNavigable = function checkNavigable(spec, index) {
  var navigables = getNavigableIndexes(spec);
  var prevNavigable = 0;

  if (index > navigables[navigables.length - 1]) {
    index = navigables[navigables.length - 1];
  } else {
    for (var n in navigables) {
      if (index < navigables[n]) {
        index = prevNavigable;
        break;
      }

      prevNavigable = navigables[n];
    }
  }

  return index;
};

exports.checkNavigable = checkNavigable;

var getSlideCount = function getSlideCount(spec) {
  var centerOffset = spec.centerMode ? spec.slideWidth * Math.floor(spec.slidesToShow / 2) : 0;

  if (spec.swipeToSlide) {
    var swipedSlide;

    var slickList = _reactDom["default"].findDOMNode(spec.listRef);

    var slides = slickList.querySelectorAll(".slick-slide");
    Array.from(slides).every(function (slide) {
      if (!spec.vertical) {
        if (slide.offsetLeft - centerOffset + getWidth(slide) / 2 > spec.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
      } else {
        if (slide.offsetTop + getHeight(slide) / 2 > spec.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
      }

      return true;
    });

    if (!swipedSlide) {
      return 0;
    }

    var currentIndex = spec.rtl === true ? spec.slideCount - spec.currentSlide : spec.currentSlide;
    var slidesTraversed = Math.abs(swipedSlide.dataset.index - currentIndex) || 1;
    return slidesTraversed;
  } else {
    return spec.slidesToScroll;
  }
};

exports.getSlideCount = getSlideCount;

var checkSpecKeys = function checkSpecKeys(spec, keysArray) {
  return keysArray.reduce(function (value, key) {
    return value && spec.hasOwnProperty(key);
  }, true) ? null : console.error("Keys Missing:", spec);
};

exports.checkSpecKeys = checkSpecKeys;

var getTrackCSS = function getTrackCSS(spec) {
  checkSpecKeys(spec, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
  var trackWidth, trackHeight;
  var trackChildren = spec.slideCount + 2 * spec.slidesToShow;

  if (!spec.vertical) {
    trackWidth = getTotalSlides(spec) * spec.slideWidth;
  } else {
    trackHeight = trackChildren * spec.slideHeight;
  }

  var style = {
    opacity: 1,
    transition: "",
    WebkitTransition: ""
  };

  if (spec.useTransform) {
    var WebkitTransform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
    var transform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
    var msTransform = !spec.vertical ? "translateX(" + spec.left + "px)" : "translateY(" + spec.left + "px)";
    style = _objectSpread({}, style, {
      WebkitTransform: WebkitTransform,
      transform: transform,
      msTransform: msTransform
    });
  } else {
    if (spec.vertical) {
      style["top"] = spec.left;
    } else {
      style["left"] = spec.left;
    }
  }

  if (spec.fade) style = {
    opacity: 1
  };
  if (trackWidth) style.width = trackWidth;
  if (trackHeight) style.height = trackHeight; // Fallback for IE8

  if (window && !window.addEventListener && window.attachEvent) {
    if (!spec.vertical) {
      style.marginLeft = spec.left + "px";
    } else {
      style.marginTop = spec.left + "px";
    }
  }

  return style;
};

exports.getTrackCSS = getTrackCSS;

var getTrackAnimateCSS = function getTrackAnimateCSS(spec) {
  checkSpecKeys(spec, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
  var style = getTrackCSS(spec); // useCSS is true by default so it can be undefined

  if (spec.useTransform) {
    style.WebkitTransition = "-webkit-transform " + spec.speed + "ms " + spec.cssEase;
    style.transition = "transform " + spec.speed + "ms " + spec.cssEase;
  } else {
    if (spec.vertical) {
      style.transition = "top " + spec.speed + "ms " + spec.cssEase;
    } else {
      style.transition = "left " + spec.speed + "ms " + spec.cssEase;
    }
  }

  return style;
};

exports.getTrackAnimateCSS = getTrackAnimateCSS;

var getTrackLeft = function getTrackLeft(spec) {
  if (spec.unslick) {
    return 0;
  }

  checkSpecKeys(spec, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
  var slideIndex = spec.slideIndex,
      trackRef = spec.trackRef,
      infinite = spec.infinite,
      centerMode = spec.centerMode,
      slideCount = spec.slideCount,
      slidesToShow = spec.slidesToShow,
      slidesToScroll = spec.slidesToScroll,
      slideWidth = spec.slideWidth,
      listWidth = spec.listWidth,
      variableWidth = spec.variableWidth,
      slideHeight = spec.slideHeight,
      fade = spec.fade,
      vertical = spec.vertical;
  var slideOffset = 0;
  var targetLeft;
  var targetSlide;
  var verticalOffset = 0;

  if (fade || spec.slideCount === 1) {
    return 0;
  }

  var slidesToOffset = 0;

  if (infinite) {
    slidesToOffset = -getPreClones(spec); // bring active slide to the beginning of visual area
    // if next scroll doesn't have enough children, just reach till the end of original slides instead of shifting slidesToScroll children

    if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
      slidesToOffset = -(slideIndex > slideCount ? slidesToShow - (slideIndex - slideCount) : slideCount % slidesToScroll);
    } // shift current slide to center of the frame


    if (centerMode) {
      slidesToOffset += parseInt(slidesToShow / 2);
    }
  } else {
    if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
      slidesToOffset = slidesToShow - slideCount % slidesToScroll;
    }

    if (centerMode) {
      slidesToOffset = parseInt(slidesToShow / 2);
    }
  }

  slideOffset = slidesToOffset * slideWidth;
  verticalOffset = slidesToOffset * slideHeight;

  if (!vertical) {
    targetLeft = slideIndex * slideWidth * -1 + slideOffset;
  } else {
    targetLeft = slideIndex * slideHeight * -1 + verticalOffset;
  }

  if (variableWidth === true) {
    var targetSlideIndex;

    var trackElem = _reactDom["default"].findDOMNode(trackRef);

    targetSlideIndex = slideIndex + getPreClones(spec);
    targetSlide = trackElem && trackElem.childNodes[targetSlideIndex];
    targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;

    if (centerMode === true) {
      targetSlideIndex = infinite ? slideIndex + getPreClones(spec) : slideIndex;
      targetSlide = trackElem && trackElem.children[targetSlideIndex];
      targetLeft = 0;

      for (var slide = 0; slide < targetSlideIndex; slide++) {
        targetLeft -= trackElem && trackElem.children[slide] && trackElem.children[slide].offsetWidth;
      }

      targetLeft -= parseInt(spec.centerPadding);
      targetLeft += targetSlide && (listWidth - targetSlide.offsetWidth) / 2;
    }
  }

  return targetLeft;
};

exports.getTrackLeft = getTrackLeft;

var getPreClones = function getPreClones(spec) {
  if (spec.unslick || !spec.infinite) {
    return 0;
  }

  if (spec.variableWidth) {
    return spec.slideCount;
  }

  return spec.slidesToShow + (spec.centerMode ? 1 : 0);
};

exports.getPreClones = getPreClones;

var getPostClones = function getPostClones(spec) {
  if (spec.unslick || !spec.infinite) {
    return 0;
  }

  return spec.slideCount;
};

exports.getPostClones = getPostClones;

var getTotalSlides = function getTotalSlides(spec) {
  return spec.slideCount === 1 ? 1 : getPreClones(spec) + spec.slideCount + getPostClones(spec);
};

exports.getTotalSlides = getTotalSlides;

var siblingDirection = function siblingDirection(spec) {
  if (spec.targetSlide > spec.currentSlide) {
    if (spec.targetSlide > spec.currentSlide + slidesOnRight(spec)) {
      return "left";
    }

    return "right";
  } else {
    if (spec.targetSlide < spec.currentSlide - slidesOnLeft(spec)) {
      return "right";
    }

    return "left";
  }
};

exports.siblingDirection = siblingDirection;

var slidesOnRight = function slidesOnRight(_ref) {
  var slidesToShow = _ref.slidesToShow,
      centerMode = _ref.centerMode,
      rtl = _ref.rtl,
      centerPadding = _ref.centerPadding;

  // returns no of slides on the right of active slide
  if (centerMode) {
    var right = (slidesToShow - 1) / 2 + 1;
    if (parseInt(centerPadding) > 0) right += 1;
    if (rtl && slidesToShow % 2 === 0) right += 1;
    return right;
  }

  if (rtl) {
    return 0;
  }

  return slidesToShow - 1;
};

exports.slidesOnRight = slidesOnRight;

var slidesOnLeft = function slidesOnLeft(_ref2) {
  var slidesToShow = _ref2.slidesToShow,
      centerMode = _ref2.centerMode,
      rtl = _ref2.rtl,
      centerPadding = _ref2.centerPadding;

  // returns no of slides on the left of active slide
  if (centerMode) {
    var left = (slidesToShow - 1) / 2 + 1;
    if (parseInt(centerPadding) > 0) left += 1;
    if (!rtl && slidesToShow % 2 === 0) left += 1;
    return left;
  }

  if (rtl) {
    return slidesToShow - 1;
  }

  return 0;
};

exports.slidesOnLeft = slidesOnLeft;

var canUseDOM = function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
};

exports.canUseDOM = canUseDOM;
});

unwrapExports(innerSliderUtils);
var innerSliderUtils_1 = innerSliderUtils.canUseDOM;
var innerSliderUtils_2 = innerSliderUtils.slidesOnLeft;
var innerSliderUtils_3 = innerSliderUtils.slidesOnRight;
var innerSliderUtils_4 = innerSliderUtils.siblingDirection;
var innerSliderUtils_5 = innerSliderUtils.getTotalSlides;
var innerSliderUtils_6 = innerSliderUtils.getPostClones;
var innerSliderUtils_7 = innerSliderUtils.getPreClones;
var innerSliderUtils_8 = innerSliderUtils.getTrackLeft;
var innerSliderUtils_9 = innerSliderUtils.getTrackAnimateCSS;
var innerSliderUtils_10 = innerSliderUtils.getTrackCSS;
var innerSliderUtils_11 = innerSliderUtils.checkSpecKeys;
var innerSliderUtils_12 = innerSliderUtils.getSlideCount;
var innerSliderUtils_13 = innerSliderUtils.checkNavigable;
var innerSliderUtils_14 = innerSliderUtils.getNavigableIndexes;
var innerSliderUtils_15 = innerSliderUtils.swipeEnd;
var innerSliderUtils_16 = innerSliderUtils.swipeMove;
var innerSliderUtils_17 = innerSliderUtils.swipeStart;
var innerSliderUtils_18 = innerSliderUtils.keyHandler;
var innerSliderUtils_19 = innerSliderUtils.changeSlide;
var innerSliderUtils_20 = innerSliderUtils.slideHandler;
var innerSliderUtils_21 = innerSliderUtils.initializedState;
var innerSliderUtils_22 = innerSliderUtils.extractObject;
var innerSliderUtils_23 = innerSliderUtils.canGoNext;
var innerSliderUtils_24 = innerSliderUtils.getSwipeDirection;
var innerSliderUtils_25 = innerSliderUtils.getHeight;
var innerSliderUtils_26 = innerSliderUtils.getWidth;
var innerSliderUtils_27 = innerSliderUtils.lazySlidesOnRight;
var innerSliderUtils_28 = innerSliderUtils.lazySlidesOnLeft;
var innerSliderUtils_29 = innerSliderUtils.lazyEndIndex;
var innerSliderUtils_30 = innerSliderUtils.lazyStartIndex;
var innerSliderUtils_31 = innerSliderUtils.getRequiredLazySlides;
var innerSliderUtils_32 = innerSliderUtils.getOnDemandLazySlides;

var track = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Track = void 0;

var _react = _interopRequireDefault(React);

var _classnames = _interopRequireDefault(classnames);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// given specifications/props for a slide, fetch all the classes that need to be applied to the slide
var getSlideClasses = function getSlideClasses(spec) {
  var slickActive, slickCenter, slickCloned;
  var centerOffset, index;

  if (spec.rtl) {
    index = spec.slideCount - 1 - spec.index;
  } else {
    index = spec.index;
  }

  slickCloned = index < 0 || index >= spec.slideCount;

  if (spec.centerMode) {
    centerOffset = Math.floor(spec.slidesToShow / 2);
    slickCenter = (index - spec.currentSlide) % spec.slideCount === 0;

    if (index > spec.currentSlide - centerOffset - 1 && index <= spec.currentSlide + centerOffset) {
      slickActive = true;
    }
  } else {
    slickActive = spec.currentSlide <= index && index < spec.currentSlide + spec.slidesToShow;
  }

  var slickCurrent = index === spec.currentSlide;
  return {
    "slick-slide": true,
    "slick-active": slickActive,
    "slick-center": slickCenter,
    "slick-cloned": slickCloned,
    "slick-current": slickCurrent // dubious in case of RTL

  };
};

var getSlideStyle = function getSlideStyle(spec) {
  var style = {};

  if (spec.variableWidth === undefined || spec.variableWidth === false) {
    style.width = spec.slideWidth;
  }

  if (spec.fade) {
    style.position = "relative";

    if (spec.vertical) {
      style.top = -spec.index * parseInt(spec.slideHeight);
    } else {
      style.left = -spec.index * parseInt(spec.slideWidth);
    }

    style.opacity = spec.currentSlide === spec.index ? 1 : 0;
    style.transition = "opacity " + spec.speed + "ms " + spec.cssEase + ", " + "visibility " + spec.speed + "ms " + spec.cssEase;
    style.WebkitTransition = "opacity " + spec.speed + "ms " + spec.cssEase + ", " + "visibility " + spec.speed + "ms " + spec.cssEase;
  }

  return style;
};

var getKey = function getKey(child, fallbackKey) {
  return child.key || fallbackKey;
};

var renderSlides = function renderSlides(spec) {
  var key;
  var slides = [];
  var preCloneSlides = [];
  var postCloneSlides = [];

  var childrenCount = _react["default"].Children.count(spec.children);

  var startIndex = (0, innerSliderUtils.lazyStartIndex)(spec);
  var endIndex = (0, innerSliderUtils.lazyEndIndex)(spec);

  _react["default"].Children.forEach(spec.children, function (elem, index) {
    var child;
    var childOnClickOptions = {
      message: "children",
      index: index,
      slidesToScroll: spec.slidesToScroll,
      currentSlide: spec.currentSlide
    }; // in case of lazyLoad, whether or not we want to fetch the slide

    if (!spec.lazyLoad || spec.lazyLoad && spec.lazyLoadedList.indexOf(index) >= 0) {
      child = elem;
    } else {
      child = _react["default"].createElement("div", null);
    }

    var childStyle = getSlideStyle(_objectSpread({}, spec, {
      index: index
    }));
    var slideClass = child.props.className || "";
    var slideClasses = getSlideClasses(_objectSpread({}, spec, {
      index: index
    })); // push a cloned element of the desired slide

    slides.push(_react["default"].cloneElement(child, {
      key: "original" + getKey(child, index),
      "data-index": index,
      className: (0, _classnames["default"])(slideClasses, slideClass),
      tabIndex: "-1",
      "aria-hidden": !slideClasses["slick-active"],
      style: _objectSpread({
        outline: "none"
      }, child.props.style || {}, {}, childStyle),
      onClick: function onClick(e) {
        child.props && child.props.onClick && child.props.onClick(e);

        if (spec.focusOnSelect) {
          spec.focusOnSelect(childOnClickOptions);
        }
      }
    })); // if slide needs to be precloned or postcloned

    if (spec.infinite && spec.fade === false) {
      var preCloneNo = childrenCount - index;

      if (preCloneNo <= (0, innerSliderUtils.getPreClones)(spec) && childrenCount !== spec.slidesToShow) {
        key = -preCloneNo;

        if (key >= startIndex) {
          child = elem;
        }

        slideClasses = getSlideClasses(_objectSpread({}, spec, {
          index: key
        }));
        preCloneSlides.push(_react["default"].cloneElement(child, {
          key: "precloned" + getKey(child, key),
          "data-index": key,
          tabIndex: "-1",
          className: (0, _classnames["default"])(slideClasses, slideClass),
          "aria-hidden": !slideClasses["slick-active"],
          style: _objectSpread({}, child.props.style || {}, {}, childStyle),
          onClick: function onClick(e) {
            child.props && child.props.onClick && child.props.onClick(e);

            if (spec.focusOnSelect) {
              spec.focusOnSelect(childOnClickOptions);
            }
          }
        }));
      }

      if (childrenCount !== spec.slidesToShow) {
        key = childrenCount + index;

        if (key < endIndex) {
          child = elem;
        }

        slideClasses = getSlideClasses(_objectSpread({}, spec, {
          index: key
        }));
        postCloneSlides.push(_react["default"].cloneElement(child, {
          key: "postcloned" + getKey(child, key),
          "data-index": key,
          tabIndex: "-1",
          className: (0, _classnames["default"])(slideClasses, slideClass),
          "aria-hidden": !slideClasses["slick-active"],
          style: _objectSpread({}, child.props.style || {}, {}, childStyle),
          onClick: function onClick(e) {
            child.props && child.props.onClick && child.props.onClick(e);

            if (spec.focusOnSelect) {
              spec.focusOnSelect(childOnClickOptions);
            }
          }
        }));
      }
    }
  });

  if (spec.rtl) {
    return preCloneSlides.concat(slides, postCloneSlides).reverse();
  } else {
    return preCloneSlides.concat(slides, postCloneSlides);
  }
};

var Track =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Track, _React$PureComponent);

  function Track() {
    _classCallCheck(this, Track);

    return _possibleConstructorReturn(this, _getPrototypeOf(Track).apply(this, arguments));
  }

  _createClass(Track, [{
    key: "render",
    value: function render() {
      var slides = renderSlides(this.props);
      var _this$props = this.props,
          onMouseEnter = _this$props.onMouseEnter,
          onMouseOver = _this$props.onMouseOver,
          onMouseLeave = _this$props.onMouseLeave;
      var mouseEvents = {
        onMouseEnter: onMouseEnter,
        onMouseOver: onMouseOver,
        onMouseLeave: onMouseLeave
      };
      return _react["default"].createElement("div", _extends({
        className: "slick-track",
        style: this.props.trackStyle
      }, mouseEvents), slides);
    }
  }]);

  return Track;
}(_react["default"].PureComponent);

exports.Track = Track;
});

unwrapExports(track);
var track_1 = track.Track;

var dots = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dots = void 0;

var _react = _interopRequireDefault(React);

var _classnames = _interopRequireDefault(classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var getDotCount = function getDotCount(spec) {
  var dots;

  if (spec.infinite) {
    dots = Math.ceil(spec.slideCount / spec.slidesToScroll);
  } else {
    dots = Math.ceil((spec.slideCount - spec.slidesToShow) / spec.slidesToScroll) + 1;
  }

  return dots;
};

var Dots =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Dots, _React$PureComponent);

  function Dots() {
    _classCallCheck(this, Dots);

    return _possibleConstructorReturn(this, _getPrototypeOf(Dots).apply(this, arguments));
  }

  _createClass(Dots, [{
    key: "clickHandler",
    value: function clickHandler(options, e) {
      // In Autoplay the focus stays on clicked button even after transition
      // to next slide. That only goes away by click somewhere outside
      e.preventDefault();
      this.props.clickHandler(options);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var dotCount = getDotCount({
        slideCount: this.props.slideCount,
        slidesToScroll: this.props.slidesToScroll,
        slidesToShow: this.props.slidesToShow,
        infinite: this.props.infinite
      }); // Apply join & split to Array to pre-fill it for IE8
      //
      // Credit: http://stackoverflow.com/a/13735425/1849458

      var _this$props = this.props,
          onMouseEnter = _this$props.onMouseEnter,
          onMouseOver = _this$props.onMouseOver,
          onMouseLeave = _this$props.onMouseLeave;
      var mouseEvents = {
        onMouseEnter: onMouseEnter,
        onMouseOver: onMouseOver,
        onMouseLeave: onMouseLeave
      };
      var dots = Array.apply(null, Array(dotCount + 1).join("0").split("")).map(function (x, i) {
        var leftBound = i * _this.props.slidesToScroll;
        var rightBound = i * _this.props.slidesToScroll + (_this.props.slidesToScroll - 1);
        var className = (0, _classnames["default"])({
          "slick-active": _this.props.currentSlide >= leftBound && _this.props.currentSlide <= rightBound
        });
        var dotOptions = {
          message: "dots",
          index: i,
          slidesToScroll: _this.props.slidesToScroll,
          currentSlide: _this.props.currentSlide
        };

        var onClick = _this.clickHandler.bind(_this, dotOptions);

        return _react["default"].createElement("li", {
          key: i,
          className: className
        }, _react["default"].cloneElement(_this.props.customPaging(i), {
          onClick: onClick
        }));
      });
      return _react["default"].cloneElement(this.props.appendDots(dots), _objectSpread({
        className: this.props.dotsClass
      }, mouseEvents));
    }
  }]);

  return Dots;
}(_react["default"].PureComponent);

exports.Dots = Dots;
});

unwrapExports(dots);
var dots_1 = dots.Dots;

var arrows = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NextArrow = exports.PrevArrow = void 0;

var _react = _interopRequireDefault(React);

var _classnames = _interopRequireDefault(classnames);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PrevArrow =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(PrevArrow, _React$PureComponent);

  function PrevArrow() {
    _classCallCheck(this, PrevArrow);

    return _possibleConstructorReturn(this, _getPrototypeOf(PrevArrow).apply(this, arguments));
  }

  _createClass(PrevArrow, [{
    key: "clickHandler",
    value: function clickHandler(options, e) {
      if (e) {
        e.preventDefault();
      }

      this.props.clickHandler(options, e);
    }
  }, {
    key: "render",
    value: function render() {
      var prevClasses = {
        "slick-arrow": true,
        "slick-prev": true
      };
      var prevHandler = this.clickHandler.bind(this, {
        message: "previous"
      });

      if (!this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow)) {
        prevClasses["slick-disabled"] = true;
        prevHandler = null;
      }

      var prevArrowProps = {
        key: "0",
        "data-role": "none",
        className: (0, _classnames["default"])(prevClasses),
        style: {
          display: "block"
        },
        onClick: prevHandler
      };
      var customProps = {
        currentSlide: this.props.currentSlide,
        slideCount: this.props.slideCount
      };
      var prevArrow;

      if (this.props.prevArrow) {
        prevArrow = _react["default"].cloneElement(this.props.prevArrow, _objectSpread({}, prevArrowProps, {}, customProps));
      } else {
        prevArrow = _react["default"].createElement("button", _extends({
          key: "0",
          type: "button"
        }, prevArrowProps), " ", "Previous");
      }

      return prevArrow;
    }
  }]);

  return PrevArrow;
}(_react["default"].PureComponent);

exports.PrevArrow = PrevArrow;

var NextArrow =
/*#__PURE__*/
function (_React$PureComponent2) {
  _inherits(NextArrow, _React$PureComponent2);

  function NextArrow() {
    _classCallCheck(this, NextArrow);

    return _possibleConstructorReturn(this, _getPrototypeOf(NextArrow).apply(this, arguments));
  }

  _createClass(NextArrow, [{
    key: "clickHandler",
    value: function clickHandler(options, e) {
      if (e) {
        e.preventDefault();
      }

      this.props.clickHandler(options, e);
    }
  }, {
    key: "render",
    value: function render() {
      var nextClasses = {
        "slick-arrow": true,
        "slick-next": true
      };
      var nextHandler = this.clickHandler.bind(this, {
        message: "next"
      });

      if (!(0, innerSliderUtils.canGoNext)(this.props)) {
        nextClasses["slick-disabled"] = true;
        nextHandler = null;
      }

      var nextArrowProps = {
        key: "1",
        "data-role": "none",
        className: (0, _classnames["default"])(nextClasses),
        style: {
          display: "block"
        },
        onClick: nextHandler
      };
      var customProps = {
        currentSlide: this.props.currentSlide,
        slideCount: this.props.slideCount
      };
      var nextArrow;

      if (this.props.nextArrow) {
        nextArrow = _react["default"].cloneElement(this.props.nextArrow, _objectSpread({}, nextArrowProps, {}, customProps));
      } else {
        nextArrow = _react["default"].createElement("button", _extends({
          key: "1",
          type: "button"
        }, nextArrowProps), " ", "Next");
      }

      return nextArrow;
    }
  }]);

  return NextArrow;
}(_react["default"].PureComponent);

exports.NextArrow = NextArrow;
});

unwrapExports(arrows);
var arrows_1 = arrows.NextArrow;
var arrows_2 = arrows.PrevArrow;

/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

var innerSlider = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InnerSlider = void 0;

var _react = _interopRequireDefault(React);

var _reactDom = _interopRequireDefault(reactDom);

var _initialState = _interopRequireDefault(initialState_1);

var _lodash = _interopRequireDefault(lodash_debounce);

var _classnames = _interopRequireDefault(classnames);









var _resizeObserverPolyfill = _interopRequireDefault(index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InnerSlider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InnerSlider, _React$Component);

  function InnerSlider(props) {
    var _this;

    _classCallCheck(this, InnerSlider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InnerSlider).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "listRefHandler", function (ref) {
      return _this.list = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "trackRefHandler", function (ref) {
      return _this.track = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "adaptHeight", function () {
      if (_this.props.adaptiveHeight && _this.list) {
        var elem = _this.list.querySelector("[data-index=\"".concat(_this.state.currentSlide, "\"]"));

        _this.list.style.height = (0, innerSliderUtils.getHeight)(elem) + "px";
      }
    });

    _defineProperty(_assertThisInitialized(_this), "UNSAFE_componentWillMount", function () {
      _this.ssrInit();

      _this.props.onInit && _this.props.onInit();

      if (_this.props.lazyLoad) {
        var slidesToLoad = (0, innerSliderUtils.getOnDemandLazySlides)(_objectSpread({}, _this.props, {}, _this.state));

        if (slidesToLoad.length > 0) {
          _this.setState(function (prevState) {
            return {
              lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
            };
          });

          if (_this.props.onLazyLoad) {
            _this.props.onLazyLoad(slidesToLoad);
          }
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      var spec = _objectSpread({
        listRef: _this.list,
        trackRef: _this.track
      }, _this.props);

      _this.updateState(spec, true, function () {
        _this.adaptHeight();

        _this.props.autoplay && _this.autoPlay("update");
      });

      if (_this.props.lazyLoad === "progressive") {
        _this.lazyLoadTimer = setInterval(_this.progressiveLazyLoad, 1000);
      }

      _this.ro = new _resizeObserverPolyfill["default"](function () {
        if (_this.state.animating) {
          _this.onWindowResized(false); // don't set trackStyle hence don't break animation


          _this.callbackTimers.push(setTimeout(function () {
            return _this.onWindowResized();
          }, _this.props.speed));
        } else {
          _this.onWindowResized();
        }
      });

      _this.ro.observe(_this.list);

      Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function (slide) {
        slide.onfocus = _this.props.pauseOnFocus ? _this.onSlideFocus : null;
        slide.onblur = _this.props.pauseOnFocus ? _this.onSlideBlur : null;
      }); // To support server-side rendering

      if (!window) {
        return;
      }

      if (window.addEventListener) {
        window.addEventListener("resize", _this.onWindowResized);
      } else {
        window.attachEvent("onresize", _this.onWindowResized);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
      if (_this.animationEndCallback) {
        clearTimeout(_this.animationEndCallback);
      }

      if (_this.lazyLoadTimer) {
        clearInterval(_this.lazyLoadTimer);
      }

      if (_this.callbackTimers.length) {
        _this.callbackTimers.forEach(function (timer) {
          return clearTimeout(timer);
        });

        _this.callbackTimers = [];
      }

      if (window.addEventListener) {
        window.removeEventListener("resize", _this.onWindowResized);
      } else {
        window.detachEvent("onresize", _this.onWindowResized);
      }

      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "UNSAFE_componentWillReceiveProps", function (nextProps) {
      var spec = _objectSpread({
        listRef: _this.list,
        trackRef: _this.track
      }, nextProps, {}, _this.state);

      var setTrackStyle = false;

      for (var _i = 0, _Object$keys = Object.keys(_this.props); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];

        if (!nextProps.hasOwnProperty(key)) {
          setTrackStyle = true;
          break;
        }

        if (_typeof(nextProps[key]) === "object" || typeof nextProps[key] === "function") {
          continue;
        }

        if (nextProps[key] !== _this.props[key]) {
          setTrackStyle = true;
          break;
        }
      }

      _this.updateState(spec, setTrackStyle, function () {
        if (_this.state.currentSlide >= _react["default"].Children.count(nextProps.children)) {
          _this.changeSlide({
            message: "index",
            index: _react["default"].Children.count(nextProps.children) - nextProps.slidesToShow,
            currentSlide: _this.state.currentSlide
          });
        }

        if (nextProps.autoplay) {
          _this.autoPlay("update");
        } else {
          _this.pause("paused");
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function () {
      _this.checkImagesLoad();

      _this.props.onReInit && _this.props.onReInit();

      if (_this.props.lazyLoad) {
        var slidesToLoad = (0, innerSliderUtils.getOnDemandLazySlides)(_objectSpread({}, _this.props, {}, _this.state));

        if (slidesToLoad.length > 0) {
          _this.setState(function (prevState) {
            return {
              lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
            };
          });

          if (_this.props.onLazyLoad) {
            _this.props.onLazyLoad(slidesToLoad);
          }
        }
      } // if (this.props.onLazyLoad) {
      //   this.props.onLazyLoad([leftMostSlide])
      // }


      _this.adaptHeight();
    });

    _defineProperty(_assertThisInitialized(_this), "onWindowResized", function (setTrackStyle) {
      if (_this.debouncedResize) _this.debouncedResize.cancel();
      _this.debouncedResize = (0, _lodash["default"])(function () {
        return _this.resizeWindow(setTrackStyle);
      }, 50);

      _this.debouncedResize();
    });

    _defineProperty(_assertThisInitialized(_this), "resizeWindow", function () {
      var setTrackStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (!_reactDom["default"].findDOMNode(_this.track)) return;

      var spec = _objectSpread({
        listRef: _this.list,
        trackRef: _this.track
      }, _this.props, {}, _this.state);

      _this.updateState(spec, setTrackStyle, function () {
        if (_this.props.autoplay) _this.autoPlay("update");else _this.pause("paused");
      }); // animating state should be cleared while resizing, otherwise autoplay stops working


      _this.setState({
        animating: false
      });

      clearTimeout(_this.animationEndCallback);
      delete _this.animationEndCallback;
    });

    _defineProperty(_assertThisInitialized(_this), "updateState", function (spec, setTrackStyle, callback) {
      var updatedState = (0, innerSliderUtils.initializedState)(spec);
      spec = _objectSpread({}, spec, {}, updatedState, {
        slideIndex: updatedState.currentSlide
      });
      var targetLeft = (0, innerSliderUtils.getTrackLeft)(spec);
      spec = _objectSpread({}, spec, {
        left: targetLeft
      });
      var trackStyle = (0, innerSliderUtils.getTrackCSS)(spec);

      if (setTrackStyle || _react["default"].Children.count(_this.props.children) !== _react["default"].Children.count(spec.children)) {
        updatedState["trackStyle"] = trackStyle;
      }

      _this.setState(updatedState, callback);
    });

    _defineProperty(_assertThisInitialized(_this), "ssrInit", function () {
      if (_this.props.variableWidth) {
        var _trackWidth = 0,
            _trackLeft = 0;
        var childrenWidths = [];
        var preClones = (0, innerSliderUtils.getPreClones)(_objectSpread({}, _this.props, {}, _this.state, {
          slideCount: _this.props.children.length
        }));
        var postClones = (0, innerSliderUtils.getPostClones)(_objectSpread({}, _this.props, {}, _this.state, {
          slideCount: _this.props.children.length
        }));

        _this.props.children.forEach(function (child) {
          childrenWidths.push(child.props.style.width);
          _trackWidth += child.props.style.width;
        });

        for (var i = 0; i < preClones; i++) {
          _trackLeft += childrenWidths[childrenWidths.length - 1 - i];
          _trackWidth += childrenWidths[childrenWidths.length - 1 - i];
        }

        for (var _i2 = 0; _i2 < postClones; _i2++) {
          _trackWidth += childrenWidths[_i2];
        }

        for (var _i3 = 0; _i3 < _this.state.currentSlide; _i3++) {
          _trackLeft += childrenWidths[_i3];
        }

        var _trackStyle = {
          width: _trackWidth + "px",
          left: -_trackLeft + "px"
        };

        if (_this.props.centerMode) {
          var currentWidth = "".concat(childrenWidths[_this.state.currentSlide], "px");
          _trackStyle.left = "calc(".concat(_trackStyle.left, " + (100% - ").concat(currentWidth, ") / 2 ) ");
        }

        _this.setState({
          trackStyle: _trackStyle
        });

        return;
      }

      var childrenCount = _react["default"].Children.count(_this.props.children);

      var spec = _objectSpread({}, _this.props, {}, _this.state, {
        slideCount: childrenCount
      });

      var slideCount = (0, innerSliderUtils.getPreClones)(spec) + (0, innerSliderUtils.getPostClones)(spec) + childrenCount;
      var trackWidth = 100 / _this.props.slidesToShow * slideCount;
      var slideWidth = 100 / slideCount;
      var trackLeft = -slideWidth * ((0, innerSliderUtils.getPreClones)(spec) + _this.state.currentSlide) * trackWidth / 100;

      if (_this.props.centerMode) {
        trackLeft += (100 - slideWidth * trackWidth / 100) / 2;
      }

      var trackStyle = {
        width: trackWidth + "%",
        left: trackLeft + "%"
      };

      _this.setState({
        slideWidth: slideWidth + "%",
        trackStyle: trackStyle
      });
    });

    _defineProperty(_assertThisInitialized(_this), "checkImagesLoad", function () {
      var images = document.querySelectorAll(".slick-slide img");
      var imagesCount = images.length,
          loadedCount = 0;
      Array.prototype.forEach.call(images, function (image) {
        var handler = function handler() {
          return ++loadedCount && loadedCount >= imagesCount && _this.onWindowResized();
        };

        if (!image.onclick) {
          image.onclick = function () {
            return image.parentNode.focus();
          };
        } else {
          var prevClickHandler = image.onclick;

          image.onclick = function () {
            prevClickHandler();
            image.parentNode.focus();
          };
        }

        if (!image.onload) {
          if (_this.props.lazyLoad) {
            image.onload = function () {
              _this.adaptHeight();

              _this.callbackTimers.push(setTimeout(_this.onWindowResized, _this.props.speed));
            };
          } else {
            image.onload = handler;

            image.onerror = function () {
              handler();
              _this.props.onLazyLoadError && _this.props.onLazyLoadError();
            };
          }
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "progressiveLazyLoad", function () {
      var slidesToLoad = [];

      var spec = _objectSpread({}, _this.props, {}, _this.state);

      for (var index$$1 = _this.state.currentSlide; index$$1 < _this.state.slideCount + (0, innerSliderUtils.getPostClones)(spec); index$$1++) {
        if (_this.state.lazyLoadedList.indexOf(index$$1) < 0) {
          slidesToLoad.push(index$$1);
          break;
        }
      }

      for (var _index = _this.state.currentSlide - 1; _index >= -(0, innerSliderUtils.getPreClones)(spec); _index--) {
        if (_this.state.lazyLoadedList.indexOf(_index) < 0) {
          slidesToLoad.push(_index);
          break;
        }
      }

      if (slidesToLoad.length > 0) {
        _this.setState(function (state) {
          return {
            lazyLoadedList: state.lazyLoadedList.concat(slidesToLoad)
          };
        });

        if (_this.props.onLazyLoad) {
          _this.props.onLazyLoad(slidesToLoad);
        }
      } else {
        if (_this.lazyLoadTimer) {
          clearInterval(_this.lazyLoadTimer);
          delete _this.lazyLoadTimer;
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "slideHandler", function (index$$1) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var _this$props = _this.props,
          asNavFor = _this$props.asNavFor,
          beforeChange = _this$props.beforeChange,
          onLazyLoad = _this$props.onLazyLoad,
          speed = _this$props.speed,
          afterChange = _this$props.afterChange; // capture currentslide before state is updated

      var currentSlide = _this.state.currentSlide;

      var _slideHandler = (0, innerSliderUtils.slideHandler)(_objectSpread({
        index: index$$1
      }, _this.props, {}, _this.state, {
        trackRef: _this.track,
        useCSS: _this.props.useCSS && !dontAnimate
      })),
          state = _slideHandler.state,
          nextState = _slideHandler.nextState;

      if (!state) return;
      beforeChange && beforeChange(currentSlide, state.currentSlide);
      var slidesToLoad = state.lazyLoadedList.filter(function (value) {
        return _this.state.lazyLoadedList.indexOf(value) < 0;
      });
      onLazyLoad && slidesToLoad.length > 0 && onLazyLoad(slidesToLoad);

      _this.setState(state, function () {
        asNavFor && asNavFor.innerSlider.slideHandler(index$$1);
        if (!nextState) return;
        _this.animationEndCallback = setTimeout(function () {
          var animating = nextState.animating,
              firstBatch = _objectWithoutProperties(nextState, ["animating"]);

          _this.setState(firstBatch, function () {
            _this.callbackTimers.push(setTimeout(function () {
              return _this.setState({
                animating: animating
              });
            }, 10));

            afterChange && afterChange(state.currentSlide);
            delete _this.animationEndCallback;
          });
        }, speed);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeSlide", function (options) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var spec = _objectSpread({}, _this.props, {}, _this.state);

      var targetSlide = (0, innerSliderUtils.changeSlide)(spec, options);
      if (targetSlide !== 0 && !targetSlide) return;

      if (dontAnimate === true) {
        _this.slideHandler(targetSlide, dontAnimate);
      } else {
        _this.slideHandler(targetSlide);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "clickHandler", function (e) {
      if (_this.clickable === false) {
        e.stopPropagation();
        e.preventDefault();
      }

      _this.clickable = true;
    });

    _defineProperty(_assertThisInitialized(_this), "keyHandler", function (e) {
      var dir = (0, innerSliderUtils.keyHandler)(e, _this.props.accessibility, _this.props.rtl);
      dir !== "" && _this.changeSlide({
        message: dir
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectHandler", function (options) {
      _this.changeSlide(options);
    });

    _defineProperty(_assertThisInitialized(_this), "disableBodyScroll", function () {
      var preventDefault = function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault) e.preventDefault();
        e.returnValue = false;
      };

      window.ontouchmove = preventDefault;
    });

    _defineProperty(_assertThisInitialized(_this), "enableBodyScroll", function () {
      window.ontouchmove = null;
    });

    _defineProperty(_assertThisInitialized(_this), "swipeStart", function (e) {
      if (_this.props.verticalSwiping) {
        _this.disableBodyScroll();
      }

      var state = (0, innerSliderUtils.swipeStart)(e, _this.props.swipe, _this.props.draggable);
      state !== "" && _this.setState(state);
    });

    _defineProperty(_assertThisInitialized(_this), "swipeMove", function (e) {
      var state = (0, innerSliderUtils.swipeMove)(e, _objectSpread({}, _this.props, {}, _this.state, {
        trackRef: _this.track,
        listRef: _this.list,
        slideIndex: _this.state.currentSlide
      }));
      if (!state) return;

      if (state["swiping"]) {
        _this.clickable = false;
      }

      _this.setState(state);
    });

    _defineProperty(_assertThisInitialized(_this), "swipeEnd", function (e) {
      var state = (0, innerSliderUtils.swipeEnd)(e, _objectSpread({}, _this.props, {}, _this.state, {
        trackRef: _this.track,
        listRef: _this.list,
        slideIndex: _this.state.currentSlide
      }));
      if (!state) return;
      var triggerSlideHandler = state["triggerSlideHandler"];
      delete state["triggerSlideHandler"];

      _this.setState(state);

      if (triggerSlideHandler === undefined) return;

      _this.slideHandler(triggerSlideHandler);

      if (_this.props.verticalSwiping) {
        _this.enableBodyScroll();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "slickPrev", function () {
      // this and fellow methods are wrapped in setTimeout
      // to make sure initialize setState has happened before
      // any of such methods are called
      _this.callbackTimers.push(setTimeout(function () {
        return _this.changeSlide({
          message: "previous"
        });
      }, 0));
    });

    _defineProperty(_assertThisInitialized(_this), "slickNext", function () {
      _this.callbackTimers.push(setTimeout(function () {
        return _this.changeSlide({
          message: "next"
        });
      }, 0));
    });

    _defineProperty(_assertThisInitialized(_this), "slickGoTo", function (slide) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      slide = Number(slide);
      if (isNaN(slide)) return "";

      _this.callbackTimers.push(setTimeout(function () {
        return _this.changeSlide({
          message: "index",
          index: slide,
          currentSlide: _this.state.currentSlide
        }, dontAnimate);
      }, 0));
    });

    _defineProperty(_assertThisInitialized(_this), "play", function () {
      var nextIndex;

      if (_this.props.rtl) {
        nextIndex = _this.state.currentSlide - _this.props.slidesToScroll;
      } else {
        if ((0, innerSliderUtils.canGoNext)(_objectSpread({}, _this.props, {}, _this.state))) {
          nextIndex = _this.state.currentSlide + _this.props.slidesToScroll;
        } else {
          return false;
        }
      }

      _this.slideHandler(nextIndex);
    });

    _defineProperty(_assertThisInitialized(_this), "autoPlay", function (playType) {
      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
      }

      var autoplaying = _this.state.autoplaying;

      if (playType === "update") {
        if (autoplaying === "hovered" || autoplaying === "focused" || autoplaying === "paused") {
          return;
        }
      } else if (playType === "leave") {
        if (autoplaying === "paused" || autoplaying === "focused") {
          return;
        }
      } else if (playType === "blur") {
        if (autoplaying === "paused" || autoplaying === "hovered") {
          return;
        }
      }

      _this.autoplayTimer = setInterval(_this.play, _this.props.autoplaySpeed + 50);

      _this.setState({
        autoplaying: "playing"
      });
    });

    _defineProperty(_assertThisInitialized(_this), "pause", function (pauseType) {
      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
        _this.autoplayTimer = null;
      }

      var autoplaying = _this.state.autoplaying;

      if (pauseType === "paused") {
        _this.setState({
          autoplaying: "paused"
        });
      } else if (pauseType === "focused") {
        if (autoplaying === "hovered" || autoplaying === "playing") {
          _this.setState({
            autoplaying: "focused"
          });
        }
      } else {
        // pauseType  is 'hovered'
        if (autoplaying === "playing") {
          _this.setState({
            autoplaying: "hovered"
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onDotsOver", function () {
      return _this.props.autoplay && _this.pause("hovered");
    });

    _defineProperty(_assertThisInitialized(_this), "onDotsLeave", function () {
      return _this.props.autoplay && _this.state.autoplaying === "hovered" && _this.autoPlay("leave");
    });

    _defineProperty(_assertThisInitialized(_this), "onTrackOver", function () {
      return _this.props.autoplay && _this.pause("hovered");
    });

    _defineProperty(_assertThisInitialized(_this), "onTrackLeave", function () {
      return _this.props.autoplay && _this.state.autoplaying === "hovered" && _this.autoPlay("leave");
    });

    _defineProperty(_assertThisInitialized(_this), "onSlideFocus", function () {
      return _this.props.autoplay && _this.pause("focused");
    });

    _defineProperty(_assertThisInitialized(_this), "onSlideBlur", function () {
      return _this.props.autoplay && _this.state.autoplaying === "focused" && _this.autoPlay("blur");
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      var className = (0, _classnames["default"])("slick-slider", _this.props.className, {
        "slick-vertical": _this.props.vertical,
        "slick-initialized": true
      });

      var spec = _objectSpread({}, _this.props, {}, _this.state);

      var trackProps = (0, innerSliderUtils.extractObject)(spec, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding"]);
      var pauseOnHover = _this.props.pauseOnHover;
      trackProps = _objectSpread({}, trackProps, {
        onMouseEnter: pauseOnHover ? _this.onTrackOver : null,
        onMouseLeave: pauseOnHover ? _this.onTrackLeave : null,
        onMouseOver: pauseOnHover ? _this.onTrackOver : null,
        focusOnSelect: _this.props.focusOnSelect ? _this.selectHandler : null
      });
      var dots$$1;

      if (_this.props.dots === true && _this.state.slideCount >= _this.props.slidesToShow) {
        var dotProps = (0, innerSliderUtils.extractObject)(spec, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]);
        var pauseOnDotsHover = _this.props.pauseOnDotsHover;
        dotProps = _objectSpread({}, dotProps, {
          clickHandler: _this.changeSlide,
          onMouseEnter: pauseOnDotsHover ? _this.onDotsLeave : null,
          onMouseOver: pauseOnDotsHover ? _this.onDotsOver : null,
          onMouseLeave: pauseOnDotsHover ? _this.onDotsLeave : null
        });
        dots$$1 = _react["default"].createElement(dots.Dots, dotProps);
      }

      var prevArrow, nextArrow;
      var arrowProps = (0, innerSliderUtils.extractObject)(spec, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
      arrowProps.clickHandler = _this.changeSlide;

      if (_this.props.arrows) {
        prevArrow = _react["default"].createElement(arrows.PrevArrow, arrowProps);
        nextArrow = _react["default"].createElement(arrows.NextArrow, arrowProps);
      }

      var verticalHeightStyle = null;

      if (_this.props.vertical) {
        verticalHeightStyle = {
          height: _this.state.listHeight
        };
      }

      var centerPaddingStyle = null;

      if (_this.props.vertical === false) {
        if (_this.props.centerMode === true) {
          centerPaddingStyle = {
            padding: "0px " + _this.props.centerPadding
          };
        }
      } else {
        if (_this.props.centerMode === true) {
          centerPaddingStyle = {
            padding: _this.props.centerPadding + " 0px"
          };
        }
      }

      var listStyle = _objectSpread({}, verticalHeightStyle, {}, centerPaddingStyle);

      var touchMove = _this.props.touchMove;
      var listProps = {
        className: "slick-list",
        style: listStyle,
        onClick: _this.clickHandler,
        onMouseDown: touchMove ? _this.swipeStart : null,
        onMouseMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
        onMouseUp: touchMove ? _this.swipeEnd : null,
        onMouseLeave: _this.state.dragging && touchMove ? _this.swipeEnd : null,
        onTouchStart: touchMove ? _this.swipeStart : null,
        onTouchMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
        onTouchEnd: touchMove ? _this.swipeEnd : null,
        onTouchCancel: _this.state.dragging && touchMove ? _this.swipeEnd : null,
        onKeyDown: _this.props.accessibility ? _this.keyHandler : null
      };
      var innerSliderProps = {
        className: className,
        dir: "ltr",
        style: _this.props.style
      };

      if (_this.props.unslick) {
        listProps = {
          className: "slick-list"
        };
        innerSliderProps = {
          className: className
        };
      }

      return _react["default"].createElement("div", innerSliderProps, !_this.props.unslick ? prevArrow : "", _react["default"].createElement("div", _extends({
        ref: _this.listRefHandler
      }, listProps), _react["default"].createElement(track.Track, _extends({
        ref: _this.trackRefHandler
      }, trackProps), _this.props.children)), !_this.props.unslick ? nextArrow : "", !_this.props.unslick ? dots$$1 : "");
    });

    _this.list = null;
    _this.track = null;
    _this.state = _objectSpread({}, _initialState["default"], {
      currentSlide: _this.props.initialSlide,
      slideCount: _react["default"].Children.count(_this.props.children)
    });
    _this.callbackTimers = [];
    _this.clickable = true;
    _this.debouncedResize = null;
    return _this;
  }

  return InnerSlider;
}(_react["default"].Component);

exports.InnerSlider = InnerSlider;
});

unwrapExports(innerSlider);
var innerSlider_1 = innerSlider.InnerSlider;

var camel2hyphen = function (str) {
  return str
          .replace(/[A-Z]/g, function (match) {
            return '-' + match.toLowerCase();
          })
          .toLowerCase();
};

var camel2hyphen_1 = camel2hyphen;

var isDimension = function (feature) {
  var re = /[height|width]$/;
  return re.test(feature);
};

var obj2mq = function (obj) {
  var mq = '';
  var features = Object.keys(obj);
  features.forEach(function (feature, index) {
    var value = obj[feature];
    feature = camel2hyphen_1(feature);
    // Add px to dimension features
    if (isDimension(feature) && typeof value === 'number') {
      value = value + 'px';
    }
    if (value === true) {
      mq += feature;
    } else if (value === false) {
      mq += 'not ' + feature;
    } else {
      mq += '(' + feature + ': ' + value + ')';
    }
    if (index < features.length-1) {
      mq += ' and ';
    }
  });
  return mq;
};

var json2mq = function (query) {
  var mq = '';
  if (typeof query === 'string') {
    return query;
  }
  // Handling array of media queries
  if (query instanceof Array) {
    query.forEach(function (q, index) {
      mq += obj2mq(q);
      if (index < query.length-1) {
        mq += ', ';
      }
    });
    return mq;
  }
  // Handling single media query
  return obj2mq(query);
};

var json2mq_1 = json2mq;

var defaultProps_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(React);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var defaultProps = {
  accessibility: true,
  adaptiveHeight: false,
  afterChange: null,
  appendDots: function appendDots(dots) {
    return _react["default"].createElement("ul", {
      style: {
        display: "block"
      }
    }, dots);
  },
  arrows: true,
  autoplay: false,
  autoplaySpeed: 3000,
  beforeChange: null,
  centerMode: false,
  centerPadding: "50px",
  className: "",
  cssEase: "ease",
  customPaging: function customPaging(i) {
    return _react["default"].createElement("button", null, i + 1);
  },
  dots: false,
  dotsClass: "slick-dots",
  draggable: true,
  easing: "linear",
  edgeFriction: 0.35,
  fade: false,
  focusOnSelect: false,
  infinite: true,
  initialSlide: 0,
  lazyLoad: null,
  nextArrow: null,
  onEdge: null,
  onInit: null,
  onLazyLoadError: null,
  onReInit: null,
  pauseOnDotsHover: false,
  pauseOnFocus: false,
  pauseOnHover: true,
  prevArrow: null,
  responsive: null,
  rows: 1,
  rtl: false,
  slide: "div",
  slidesPerRow: 1,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 500,
  swipe: true,
  swipeEvent: null,
  swipeToSlide: false,
  touchMove: true,
  touchThreshold: 5,
  useCSS: true,
  useTransform: true,
  variableWidth: false,
  vertical: false,
  waitForAnimate: true
};
var _default = defaultProps;
exports["default"] = _default;
});

unwrapExports(defaultProps_1);

/**
 * Delegate to handle a media query being matched and unmatched.
 *
 * @param {object} options
 * @param {function} options.match callback for when the media query is matched
 * @param {function} [options.unmatch] callback for when the media query is unmatched
 * @param {function} [options.setup] one-time callback triggered the first time a query is matched
 * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?
 * @constructor
 */
function QueryHandler(options) {
    this.options = options;
    !options.deferSetup && this.setup();
}

QueryHandler.prototype = {

    constructor : QueryHandler,

    /**
     * coordinates setup of the handler
     *
     * @function
     */
    setup : function() {
        if(this.options.setup) {
            this.options.setup();
        }
        this.initialised = true;
    },

    /**
     * coordinates setup and triggering of the handler
     *
     * @function
     */
    on : function() {
        !this.initialised && this.setup();
        this.options.match && this.options.match();
    },

    /**
     * coordinates the unmatch event for the handler
     *
     * @function
     */
    off : function() {
        this.options.unmatch && this.options.unmatch();
    },

    /**
     * called when a handler is to be destroyed.
     * delegates to the destroy or unmatch callbacks, depending on availability.
     *
     * @function
     */
    destroy : function() {
        this.options.destroy ? this.options.destroy() : this.off();
    },

    /**
     * determines equality by reference.
     * if object is supplied compare options, if function, compare match callback
     *
     * @function
     * @param {object || function} [target] the target for comparison
     */
    equals : function(target) {
        return this.options === target || this.options.match === target;
    }

};

var QueryHandler_1 = QueryHandler;

/**
 * Helper function for iterating over a collection
 *
 * @param collection
 * @param fn
 */
function each(collection, fn) {
    var i      = 0,
        length = collection.length,
        cont;

    for(i; i < length; i++) {
        cont = fn(collection[i], i);
        if(cont === false) {
            break; //allow early exit
        }
    }
}

/**
 * Helper function for determining whether target object is an array
 *
 * @param target the object under test
 * @return {Boolean} true if array, false otherwise
 */
function isArray(target) {
    return Object.prototype.toString.apply(target) === '[object Array]';
}

/**
 * Helper function for determining whether target object is a function
 *
 * @param target the object under test
 * @return {Boolean} true if function, false otherwise
 */
function isFunction(target) {
    return typeof target === 'function';
}

var Util = {
    isFunction : isFunction,
    isArray : isArray,
    each : each
};

var each$1 = Util.each;

/**
 * Represents a single media query, manages it's state and registered handlers for this query
 *
 * @constructor
 * @param {string} query the media query string
 * @param {boolean} [isUnconditional=false] whether the media query should run regardless of whether the conditions are met. Primarily for helping older browsers deal with mobile-first design
 */
function MediaQuery(query, isUnconditional) {
    this.query = query;
    this.isUnconditional = isUnconditional;
    this.handlers = [];
    this.mql = window.matchMedia(query);

    var self = this;
    this.listener = function(mql) {
        // Chrome passes an MediaQueryListEvent object, while other browsers pass MediaQueryList directly
        self.mql = mql.currentTarget || mql;
        self.assess();
    };
    this.mql.addListener(this.listener);
}

MediaQuery.prototype = {

    constuctor : MediaQuery,

    /**
     * add a handler for this query, triggering if already active
     *
     * @param {object} handler
     * @param {function} handler.match callback for when query is activated
     * @param {function} [handler.unmatch] callback for when query is deactivated
     * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
     * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
     */
    addHandler : function(handler) {
        var qh = new QueryHandler_1(handler);
        this.handlers.push(qh);

        this.matches() && qh.on();
    },

    /**
     * removes the given handler from the collection, and calls it's destroy methods
     *
     * @param {object || function} handler the handler to remove
     */
    removeHandler : function(handler) {
        var handlers = this.handlers;
        each$1(handlers, function(h, i) {
            if(h.equals(handler)) {
                h.destroy();
                return !handlers.splice(i,1); //remove from array and exit each early
            }
        });
    },

    /**
     * Determine whether the media query should be considered a match
     *
     * @return {Boolean} true if media query can be considered a match, false otherwise
     */
    matches : function() {
        return this.mql.matches || this.isUnconditional;
    },

    /**
     * Clears all handlers and unbinds events
     */
    clear : function() {
        each$1(this.handlers, function(handler) {
            handler.destroy();
        });
        this.mql.removeListener(this.listener);
        this.handlers.length = 0; //clear array
    },

    /*
        * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
        */
    assess : function() {
        var action = this.matches() ? 'on' : 'off';

        each$1(this.handlers, function(handler) {
            handler[action]();
        });
    }
};

var MediaQuery_1 = MediaQuery;

var each$2 = Util.each;
var isFunction$1 = Util.isFunction;
var isArray$1 = Util.isArray;

/**
 * Allows for registration of query handlers.
 * Manages the query handler's state and is responsible for wiring up browser events
 *
 * @constructor
 */
function MediaQueryDispatch () {
    if(!window.matchMedia) {
        throw new Error('matchMedia not present, legacy browsers require a polyfill');
    }

    this.queries = {};
    this.browserIsIncapable = !window.matchMedia('only all').matches;
}

MediaQueryDispatch.prototype = {

    constructor : MediaQueryDispatch,

    /**
     * Registers a handler for the given media query
     *
     * @param {string} q the media query
     * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
     * @param {function} options.match fired when query matched
     * @param {function} [options.unmatch] fired when a query is no longer matched
     * @param {function} [options.setup] fired when handler first triggered
     * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
     * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
     */
    register : function(q, options, shouldDegrade) {
        var queries         = this.queries,
            isUnconditional = shouldDegrade && this.browserIsIncapable;

        if(!queries[q]) {
            queries[q] = new MediaQuery_1(q, isUnconditional);
        }

        //normalise to object in an array
        if(isFunction$1(options)) {
            options = { match : options };
        }
        if(!isArray$1(options)) {
            options = [options];
        }
        each$2(options, function(handler) {
            if (isFunction$1(handler)) {
                handler = { match : handler };
            }
            queries[q].addHandler(handler);
        });

        return this;
    },

    /**
     * unregisters a query and all it's handlers, or a specific handler for a query
     *
     * @param {string} q the media query to target
     * @param {object || function} [handler] specific handler to unregister
     */
    unregister : function(q, handler) {
        var query = this.queries[q];

        if(query) {
            if(handler) {
                query.removeHandler(handler);
            }
            else {
                query.clear();
                delete this.queries[q];
            }
        }

        return this;
    }
};

var MediaQueryDispatch_1 = MediaQueryDispatch;

var src = new MediaQueryDispatch_1();

var slider = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(React);



var _json2mq = _interopRequireDefault(json2mq_1);

var _defaultProps = _interopRequireDefault(defaultProps_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var enquire = (0, innerSliderUtils.canUseDOM)() && src;

var Slider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Slider, _React$Component);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Slider).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "innerSliderRefHandler", function (ref) {
      return _this.innerSlider = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "slickPrev", function () {
      return _this.innerSlider.slickPrev();
    });

    _defineProperty(_assertThisInitialized(_this), "slickNext", function () {
      return _this.innerSlider.slickNext();
    });

    _defineProperty(_assertThisInitialized(_this), "slickGoTo", function (slide) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return _this.innerSlider.slickGoTo(slide, dontAnimate);
    });

    _defineProperty(_assertThisInitialized(_this), "slickPause", function () {
      return _this.innerSlider.pause("paused");
    });

    _defineProperty(_assertThisInitialized(_this), "slickPlay", function () {
      return _this.innerSlider.autoPlay("play");
    });

    _this.state = {
      breakpoint: null
    };
    _this._responsiveMediaHandlers = [];
    return _this;
  }

  _createClass(Slider, [{
    key: "media",
    value: function media(query, handler) {
      // javascript handler for  css media query
      enquire.register(query, handler);

      this._responsiveMediaHandlers.push({
        query: query,
        handler: handler
      });
    } // handles responsive breakpoints

  }, {
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      var _this2 = this;

      // performance monitoring
      //if (process.env.NODE_ENV !== 'production') {
      //const { whyDidYouUpdate } = require('why-did-you-update')
      //whyDidYouUpdate(React)
      //}
      if (this.props.responsive) {
        var breakpoints = this.props.responsive.map(function (breakpt) {
          return breakpt.breakpoint;
        }); // sort them in increasing order of their numerical value

        breakpoints.sort(function (x, y) {
          return x - y;
        });
        breakpoints.forEach(function (breakpoint, index) {
          // media query for each breakpoint
          var bQuery;

          if (index === 0) {
            bQuery = (0, _json2mq["default"])({
              minWidth: 0,
              maxWidth: breakpoint
            });
          } else {
            bQuery = (0, _json2mq["default"])({
              minWidth: breakpoints[index - 1] + 1,
              maxWidth: breakpoint
            });
          } // when not using server side rendering


          (0, innerSliderUtils.canUseDOM)() && _this2.media(bQuery, function () {
            _this2.setState({
              breakpoint: breakpoint
            });
          });
        }); // Register media query for full screen. Need to support resize from small to large
        // convert javascript object to media query string

        var query = (0, _json2mq["default"])({
          minWidth: breakpoints.slice(-1)[0]
        });
        (0, innerSliderUtils.canUseDOM)() && this.media(query, function () {
          _this2.setState({
            breakpoint: null
          });
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._responsiveMediaHandlers.forEach(function (obj) {
        enquire.unregister(obj.query, obj.handler);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var settings;
      var newProps;

      if (this.state.breakpoint) {
        newProps = this.props.responsive.filter(function (resp) {
          return resp.breakpoint === _this3.state.breakpoint;
        });
        settings = newProps[0].settings === "unslick" ? "unslick" : _objectSpread({}, _defaultProps["default"], {}, this.props, {}, newProps[0].settings);
      } else {
        settings = _objectSpread({}, _defaultProps["default"], {}, this.props);
      } // force scrolling by one if centerMode is on


      if (settings.centerMode) {
        if (settings.slidesToScroll > 1 && process.env.NODE_ENV !== "production") {
          console.warn("slidesToScroll should be equal to 1 in centerMode, you are using ".concat(settings.slidesToScroll));
        }

        settings.slidesToScroll = 1;
      } // force showing one slide and scrolling by one if the fade mode is on


      if (settings.fade) {
        if (settings.slidesToShow > 1 && process.env.NODE_ENV !== "production") {
          console.warn("slidesToShow should be equal to 1 when fade is true, you're using ".concat(settings.slidesToShow));
        }

        if (settings.slidesToScroll > 1 && process.env.NODE_ENV !== "production") {
          console.warn("slidesToScroll should be equal to 1 when fade is true, you're using ".concat(settings.slidesToScroll));
        }

        settings.slidesToShow = 1;
        settings.slidesToScroll = 1;
      } // makes sure that children is an array, even when there is only 1 child


      var children = _react["default"].Children.toArray(this.props.children); // Children may contain false or null, so we should filter them
      // children may also contain string filled with spaces (in certain cases where we use jsx strings)


      children = children.filter(function (child) {
        if (typeof child === "string") {
          return !!child.trim();
        }

        return !!child;
      }); // rows and slidesPerRow logic is handled here

      if (settings.variableWidth && (settings.rows > 1 || settings.slidesPerRow > 1)) {
        console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1");
        settings.variableWidth = false;
      }

      var newChildren = [];
      var currentWidth = null;

      for (var i = 0; i < children.length; i += settings.rows * settings.slidesPerRow) {
        var newSlide = [];

        for (var j = i; j < i + settings.rows * settings.slidesPerRow; j += settings.slidesPerRow) {
          var row = [];

          for (var k = j; k < j + settings.slidesPerRow; k += 1) {
            if (settings.variableWidth && children[k].props.style) {
              currentWidth = children[k].props.style.width;
            }

            if (k >= children.length) break;
            row.push(_react["default"].cloneElement(children[k], {
              key: 100 * i + 10 * j + k,
              tabIndex: -1,
              style: {
                width: "".concat(100 / settings.slidesPerRow, "%"),
                display: "inline-block"
              }
            }));
          }

          newSlide.push(_react["default"].createElement("div", {
            key: 10 * i + j
          }, row));
        }

        if (settings.variableWidth) {
          newChildren.push(_react["default"].createElement("div", {
            key: i,
            style: {
              width: currentWidth
            }
          }, newSlide));
        } else {
          newChildren.push(_react["default"].createElement("div", {
            key: i
          }, newSlide));
        }
      }

      if (settings === "unslick") {
        var className = "regular slider " + (this.props.className || "");
        return _react["default"].createElement("div", {
          className: className
        }, newChildren);
      } else if (newChildren.length <= settings.slidesToShow) {
        settings.unslick = true;
      }

      return _react["default"].createElement(innerSlider.InnerSlider, _extends({
        style: this.props.style,
        ref: this.innerSliderRefHandler
      }, settings), newChildren);
    }
  }]);

  return Slider;
}(_react["default"].Component);

exports["default"] = Slider;
});

unwrapExports(slider);

var lib = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slider = _interopRequireDefault(slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _slider["default"];
exports["default"] = _default;
});

var Slider = unwrapExports(lib);

var _ref$1 =
/*#__PURE__*/
React.createElement("path", {
  d: "M145.188 238.575l215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1 225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-215.4-215.5z"
});

var imgItemArrowLeft = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Capa_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20viewBox%3D%220%200%20477.175%20477.175%22%20style%3D%22enable-background%3Anew%200%200%20477.175%20477.175%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%20%3Cpath%20d%3D%22M145.188%2C238.575l215.5-215.5c5.3-5.3%2C5.3-13.8%2C0-19.1s-13.8-5.3-19.1%2C0l-225.1%2C225.1c-5.3%2C5.3-5.3%2C13.8%2C0%2C19.1l225.1%2C225%20%20c2.6%2C2.6%2C6.1%2C4%2C9.5%2C4s6.9-1.3%2C9.5-4c5.3-5.3%2C5.3-13.8%2C0-19.1L145.188%2C238.575z%22%2F%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

var _ref$2 =
/*#__PURE__*/
React.createElement("path", {
  d: "M360.731 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z"
});

var imgItemArrowRight = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Capa_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20viewBox%3D%220%200%20477.175%20477.175%22%20style%3D%22enable-background%3Anew%200%200%20477.175%20477.175%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%20%3Cpath%20d%3D%22M360.731%2C229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1%2C0s-5.3%2C13.8%2C0%2C19.1l215.5%2C215.5l-215.5%2C215.5%20%20c-5.3%2C5.3-5.3%2C13.8%2C0%2C19.1c2.6%2C2.6%2C6.1%2C4%2C9.5%2C4c3.4%2C0%2C6.9-1.3%2C9.5-4l225.1-225.1C365.931%2C242.875%2C365.931%2C234.275%2C360.731%2C229.075z%20%20%22%2F%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = process.env.NODE_ENV !== 'production';

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = process.env.NODE_ENV;

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

var invariant_1 = invariant;

var key = '__global_unique_id__';

var gud = function() {
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

var emptyFunction_1 = emptyFunction;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning$1 = emptyFunction_1;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning$1 = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var warning_1$1 = warning$1;

var implementation = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _react2 = _interopRequireDefault(React);



var _propTypes2 = _interopRequireDefault(PropTypes);



var _gud2 = _interopRequireDefault(gud);



var _warning2 = _interopRequireDefault(warning_1$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_SIGNED_31_BIT_INT = 1073741823;

// Inlined Object.is polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    function Provider() {
      var _temp, _this, _ret;

      _classCallCheck(this, Provider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
    }

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits = void 0;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0; // No change
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
          if (process.env.NODE_ENV !== 'production') {
            (0, _warning2.default)((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    Provider.prototype.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(React.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

  var Consumer = function (_Component2) {
    _inherits(Consumer, _Component2);

    function Consumer() {
      var _temp2, _this2, _ret2;

      _classCallCheck(this, Consumer);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
        value: _this2.getValue()
      }, _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;
        if ((observedBits & changedBits) !== 0) {
          _this2.setState({ value: _this2.getValue() });
        }
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }
      var observedBits = this.props.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    Consumer.prototype.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    Consumer.prototype.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(React.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);


  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

exports.default = createReactContext;
module.exports = exports['default'];
});

unwrapExports(implementation);

var lib$1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _react2 = _interopRequireDefault(React);



var _implementation2 = _interopRequireDefault(implementation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createContext || _implementation2.default;
module.exports = exports['default'];
});

var createContext = unwrapExports(lib$1);

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component$$1) {
  var prototype = Component$$1.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component$$1.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component$$1;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component$$1.displayName || Component$$1.name;
    var newApiName =
      typeof Component$$1.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component$$1.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component$$1;
}

////////////////////////////////////////////////////////////////////////////////
// startsWith(string, search) - Check if `string` starts with `search`
var startsWith = function startsWith(string, search) {
  return string.substr(0, search.length) === search;
};

////////////////////////////////////////////////////////////////////////////////
// pick(routes, uri)
//
// Ranks and picks the best route to match. Each segment gets the highest
// amount of points, then the type of segment gets an additional amount of
// points where
//
//     static > dynamic > splat > root
//
// This way we don't have to worry about the order of our routes, let the
// computers do it.
//
// A route looks like this
//
//     { path, default, value }
//
// And a returned match looks like:
//
//     { route, params, uri }
//
// I know, I should use TypeScript not comments for these types.
var pick = function pick(routes, uri) {
  var match = void 0;
  var default_ = void 0;

  var _uri$split = uri.split("?"),
      uriPathname = _uri$split[0];

  var uriSegments = segmentize(uriPathname);
  var isRootUri = uriSegments[0] === "";
  var ranked = rankRoutes(routes);

  for (var i = 0, l = ranked.length; i < l; i++) {
    var missed = false;
    var route = ranked[i].route;

    if (route.default) {
      default_ = {
        route: route,
        params: {},
        uri: uri
      };
      continue;
    }

    var routeSegments = segmentize(route.path);
    var params = {};
    var max = Math.max(uriSegments.length, routeSegments.length);
    var index = 0;

    for (; index < max; index++) {
      var routeSegment = routeSegments[index];
      var uriSegment = uriSegments[index];

      var _isSplat = routeSegment === "*";
      if (_isSplat) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/*
        params["*"] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      var dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        var matchIsNotReserved = reservedNames.indexOf(dynamicMatch[1]) === -1;
        !matchIsNotReserved ? process.env.NODE_ENV !== "production" ? invariant_1(false, "<Router> dynamic segment \"" + dynamicMatch[1] + "\" is a reserved name. Please use a different name in path \"" + route.path + "\".") : invariant_1(false) : void 0;
        var value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route: route,
        params: params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
};

////////////////////////////////////////////////////////////////////////////////
// resolve(to, basepath)
//
// Resolves URIs as though every path is a directory, no files.  Relative URIs
// in the browser can feel awkward because not only can you be "in a directory"
// you can be "at a file", too. For example
//
//     browserSpecResolve('foo', '/bar/') => /bar/foo
//     browserSpecResolve('foo', '/bar') => /foo
//
// But on the command line of a file system, it's not as complicated, you can't
// `cd` from a file, only directories.  This way, links have to know less about
// their current path. To go deeper you can do this:
//
//     <Link to="deeper"/>
//     // instead of
//     <Link to=`{${props.uri}/deeper}`/>
//
// Just like `cd`, if you want to go deeper from the command line, you do this:
//
//     cd deeper
//     # not
//     cd $(pwd)/deeper
//
// By treating every path as a directory, linking to relative paths should
// require less contextual information and (fingers crossed) be more intuitive.
var resolve = function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  var _to$split = to.split("?"),
      toPathname = _to$split[0],
      toQuery = _to$split[1];

  var _base$split = base.split("?"),
      basePathname = _base$split[0];

  var toSegments = segmentize(toPathname);
  var baseSegments = segmentize(basePathname);

  // ?a=b, /users?b=c => /users?a=b
  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  }

  // profile, /users/789 => /users/789/profile
  if (!startsWith(toSegments[0], ".")) {
    var pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  }

  // ./         /users/123  =>  /users/123
  // ../        /users/123  =>  /users
  // ../..      /users/123  =>  /
  // ../../one  /a/b/c/d    =>  /a/b/one
  // .././one   /a/b/c/d    =>  /a/b/c/one
  var allSegments = baseSegments.concat(toSegments);
  var segments = [];
  for (var i = 0, l = allSegments.length; i < l; i++) {
    var segment = allSegments[i];
    if (segment === "..") segments.pop();else if (segment !== ".") segments.push(segment);
  }

  return addQuery("/" + segments.join("/"), toQuery);
};

////////////////////////////////////////////////////////////////////////////////
// insertParams(path, params)
var insertParams = function insertParams(path, params) {
  var segments = segmentize(path);
  return "/" + segments.map(function (segment) {
    var match = paramRe.exec(segment);
    return match ? params[match[1]] : segment;
  }).join("/");
};

var validateRedirect = function validateRedirect(from, to) {
  var filter = function filter(segment) {
    return isDynamic(segment);
  };
  var fromString = segmentize(from).filter(filter).sort().join("/");
  var toString = segmentize(to).filter(filter).sort().join("/");
  return fromString === toString;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var paramRe = /^:(.+)/;

var SEGMENT_POINTS = 4;
var STATIC_POINTS = 3;
var DYNAMIC_POINTS = 2;
var SPLAT_PENALTY = 1;
var ROOT_POINTS = 1;

var isRootSegment = function isRootSegment(segment) {
  return segment === "";
};
var isDynamic = function isDynamic(segment) {
  return paramRe.test(segment);
};
var isSplat = function isSplat(segment) {
  return segment === "*";
};

var rankRoute = function rankRoute(route, index) {
  var score = route.default ? 0 : segmentize(route.path).reduce(function (score, segment) {
    score += SEGMENT_POINTS;
    if (isRootSegment(segment)) score += ROOT_POINTS;else if (isDynamic(segment)) score += DYNAMIC_POINTS;else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;else score += STATIC_POINTS;
    return score;
  }, 0);
  return { route: route, score: score, index: index };
};

var rankRoutes = function rankRoutes(routes) {
  return routes.map(rankRoute).sort(function (a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
  });
};

var segmentize = function segmentize(uri) {
  return uri
  // strip starting/ending slashes
  .replace(/(^\/+|\/+$)/g, "").split("/");
};

var addQuery = function addQuery(pathname, query) {
  return pathname + (query ? "?" + query : "");
};

var reservedNames = ["uri", "path"];

var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getLocation = function getLocation(source) {
  return _extends$3({}, source.location, {
    state: source.history.state,
    key: source.history.state && source.history.state.key || "initial"
  });
};

var createHistory = function createHistory(source, options) {
  var listeners = [];
  var location = getLocation(source);
  var transitioning = false;
  var resolveTransition = function resolveTransition() {};

  return {
    get location() {
      return location;
    },

    get transitioning() {
      return transitioning;
    },

    _onTransitionComplete: function _onTransitionComplete() {
      transitioning = false;
      resolveTransition();
    },
    listen: function listen(listener) {
      listeners.push(listener);

      var popstateListener = function popstateListener() {
        location = getLocation(source);
        listener({ location: location, action: "POP" });
      };

      source.addEventListener("popstate", popstateListener);

      return function () {
        source.removeEventListener("popstate", popstateListener);
        listeners = listeners.filter(function (fn) {
          return fn !== listener;
        });
      };
    },
    navigate: function navigate(to) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          state = _ref.state,
          _ref$replace = _ref.replace,
          replace = _ref$replace === undefined ? false : _ref$replace;

      state = _extends$3({}, state, { key: Date.now() + "" });
      // try...catch iOS Safari limits to 100 pushState calls
      try {
        if (transitioning || replace) {
          source.history.replaceState(state, null, to);
        } else {
          source.history.pushState(state, null, to);
        }
      } catch (e) {
        source.location[replace ? "replace" : "assign"](to);
      }

      location = getLocation(source);
      transitioning = true;
      var transition = new Promise(function (res) {
        return resolveTransition = res;
      });
      listeners.forEach(function (listener) {
        return listener({ location: location, action: "PUSH" });
      });
      return transition;
    }
  };
};

////////////////////////////////////////////////////////////////////////////////
// Stores history entries in memory for testing or other platforms like Native
var createMemorySource = function createMemorySource() {
  var initialPathname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";

  var index = 0;
  var stack = [{ pathname: initialPathname, search: "" }];
  var states = [];

  return {
    get location() {
      return stack[index];
    },
    addEventListener: function addEventListener(name, fn) {},
    removeEventListener: function removeEventListener(name, fn) {},

    history: {
      get entries() {
        return stack;
      },
      get index() {
        return index;
      },
      get state() {
        return states[index];
      },
      pushState: function pushState(state, _, uri) {
        var _uri$split = uri.split("?"),
            pathname = _uri$split[0],
            _uri$split$ = _uri$split[1],
            search = _uri$split$ === undefined ? "" : _uri$split$;

        index++;
        stack.push({ pathname: pathname, search: search });
        states.push(state);
      },
      replaceState: function replaceState(state, _, uri) {
        var _uri$split2 = uri.split("?"),
            pathname = _uri$split2[0],
            _uri$split2$ = _uri$split2[1],
            search = _uri$split2$ === undefined ? "" : _uri$split2$;

        stack[index] = { pathname: pathname, search: search };
        states[index] = state;
      }
    }
  };
};

////////////////////////////////////////////////////////////////////////////////
// global history - uses window.history as the source if available, otherwise a
// memory history
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var getSource = function getSource() {
  return canUseDOM ? window : createMemorySource();
};

var globalHistory = createHistory(getSource());
var navigate = globalHistory.navigate;

var _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

////////////////////////////////////////////////////////////////////////////////

var createNamedContext = function createNamedContext(name, defaultValue) {
  var Ctx = createContext(defaultValue);
  Ctx.Consumer.displayName = name + ".Consumer";
  Ctx.Provider.displayName = name + ".Provider";
  return Ctx;
};

////////////////////////////////////////////////////////////////////////////////
// Location Context/Provider
var LocationContext = createNamedContext("Location");

// sets up a listener if there isn't one already so apps don't need to be
// wrapped in some top level provider
var Location = function Location(_ref) {
  var children = _ref.children;
  return React.createElement(
    LocationContext.Consumer,
    null,
    function (context) {
      return context ? children(context) : React.createElement(
        LocationProvider,
        null,
        children
      );
    }
  );
};

var LocationProvider = function (_React$Component) {
  _inherits(LocationProvider, _React$Component);

  function LocationProvider() {
    var _temp, _this, _ret;

    _classCallCheck(this, LocationProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      context: _this.getContext(),
      refs: { unlisten: null }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  LocationProvider.prototype.getContext = function getContext() {
    var _props$history = this.props.history,
        navigate$$1 = _props$history.navigate,
        location = _props$history.location;

    return { navigate: navigate$$1, location: location };
  };

  LocationProvider.prototype.componentDidCatch = function componentDidCatch(error, info) {
    if (isRedirect(error)) {
      var _navigate = this.props.history.navigate;

      _navigate(error.uri, { replace: true });
    } else {
      throw error;
    }
  };

  LocationProvider.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevState.context.location !== this.state.context.location) {
      this.props.history._onTransitionComplete();
    }
  };

  LocationProvider.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var refs = this.state.refs,
        history = this.props.history;

    refs.unlisten = history.listen(function () {
      Promise.resolve().then(function () {
        // TODO: replace rAF with react deferred update API when it's ready https://github.com/facebook/react/issues/13306
        requestAnimationFrame(function () {
          if (!_this2.unmounted) {
            _this2.setState(function () {
              return { context: _this2.getContext() };
            });
          }
        });
      });
    });
  };

  LocationProvider.prototype.componentWillUnmount = function componentWillUnmount() {
    var refs = this.state.refs;

    this.unmounted = true;
    refs.unlisten();
  };

  LocationProvider.prototype.render = function render() {
    var context = this.state.context,
        children = this.props.children;

    return React.createElement(
      LocationContext.Provider,
      { value: context },
      typeof children === "function" ? children(context) : children || null
    );
  };

  return LocationProvider;
}(React.Component);

////////////////////////////////////////////////////////////////////////////////


LocationProvider.defaultProps = {
  history: globalHistory
};
process.env.NODE_ENV !== "production" ? LocationProvider.propTypes = {
  history: PropTypes.object.isRequired
} : void 0;

////////////////////////////////////////////////////////////////////////////////
// Sets baseuri and basepath for nested routers and links
var BaseContext = createNamedContext("Base", { baseuri: "/", basepath: "/" });

////////////////////////////////////////////////////////////////////////////////
// The main event, welcome to the show everybody.
var Router = function Router(props) {
  return React.createElement(
    BaseContext.Consumer,
    null,
    function (baseContext) {
      return React.createElement(
        Location,
        null,
        function (locationContext) {
          return React.createElement(RouterImpl, _extends$4({}, baseContext, locationContext, props));
        }
      );
    }
  );
};

var RouterImpl = function (_React$PureComponent) {
  _inherits(RouterImpl, _React$PureComponent);

  function RouterImpl() {
    _classCallCheck(this, RouterImpl);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  RouterImpl.prototype.render = function render() {
    var _props = this.props,
        location = _props.location,
        _navigate2 = _props.navigate,
        basepath = _props.basepath,
        primary = _props.primary,
        children = _props.children,
        baseuri = _props.baseuri,
        _props$component = _props.component,
        component = _props$component === undefined ? "div" : _props$component,
        domProps = _objectWithoutProperties(_props, ["location", "navigate", "basepath", "primary", "children", "baseuri", "component"]);

    var routes = React.Children.map(children, createRoute(basepath));
    var pathname = location.pathname;


    var match$$1 = pick(routes, pathname);

    if (match$$1) {
      var params = match$$1.params,
          uri = match$$1.uri,
          route = match$$1.route,
          element = match$$1.route.value;

      // remove the /* from the end for child routes relative paths

      basepath = route.default ? basepath : route.path.replace(/\*$/, "");

      var props = _extends$4({}, params, {
        uri: uri,
        location: location,
        navigate: function navigate$$1(to, options) {
          return _navigate2(resolve(to, uri), options);
        }
      });

      var clone = React.cloneElement(element, props, element.props.children ? React.createElement(
        Router,
        { primary: primary },
        element.props.children
      ) : undefined);

      // using 'div' for < 16.3 support
      var FocusWrapper = primary ? FocusHandler : component;
      // don't pass any props to 'div'
      var wrapperProps = primary ? _extends$4({ uri: uri, location: location, component: component }, domProps) : domProps;

      return React.createElement(
        BaseContext.Provider,
        { value: { baseuri: uri, basepath: basepath } },
        React.createElement(
          FocusWrapper,
          wrapperProps,
          clone
        )
      );
    } else {
      // Not sure if we want this, would require index routes at every level
      // warning(
      //   false,
      //   `<Router basepath="${basepath}">\n\nNothing matched:\n\t${
      //     location.pathname
      //   }\n\nPaths checked: \n\t${routes
      //     .map(route => route.path)
      //     .join(
      //       "\n\t"
      //     )}\n\nTo get rid of this warning, add a default NotFound component as child of Router:
      //   \n\tlet NotFound = () => <div>Not Found!</div>
      //   \n\t<Router>\n\t  <NotFound default/>\n\t  {/* ... */}\n\t</Router>`
      // );
      return null;
    }
  };

  return RouterImpl;
}(React.PureComponent);

RouterImpl.defaultProps = {
  primary: true
};


var FocusContext = createNamedContext("Focus");

var FocusHandler = function FocusHandler(_ref3) {
  var uri = _ref3.uri,
      location = _ref3.location,
      component = _ref3.component,
      domProps = _objectWithoutProperties(_ref3, ["uri", "location", "component"]);

  return React.createElement(
    FocusContext.Consumer,
    null,
    function (requestFocus) {
      return React.createElement(FocusHandlerImpl, _extends$4({}, domProps, {
        component: component,
        requestFocus: requestFocus,
        uri: uri,
        location: location
      }));
    }
  );
};

// don't focus on initial render
var initialRender = true;
var focusHandlerCount = 0;

var FocusHandlerImpl = function (_React$Component2) {
  _inherits(FocusHandlerImpl, _React$Component2);

  function FocusHandlerImpl() {
    var _temp2, _this4, _ret2;

    _classCallCheck(this, FocusHandlerImpl);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this4 = _possibleConstructorReturn(this, _React$Component2.call.apply(_React$Component2, [this].concat(args))), _this4), _this4.state = {}, _this4.requestFocus = function (node) {
      if (!_this4.state.shouldFocus) {
        node.focus();
      }
    }, _temp2), _possibleConstructorReturn(_this4, _ret2);
  }

  FocusHandlerImpl.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var initial = prevState.uri == null;
    if (initial) {
      return _extends$4({
        shouldFocus: true
      }, nextProps);
    } else {
      var myURIChanged = nextProps.uri !== prevState.uri;
      var navigatedUpToMe = prevState.location.pathname !== nextProps.location.pathname && nextProps.location.pathname === nextProps.uri;
      return _extends$4({
        shouldFocus: myURIChanged || navigatedUpToMe
      }, nextProps);
    }
  };

  FocusHandlerImpl.prototype.componentDidMount = function componentDidMount() {
    focusHandlerCount++;
    this.focus();
  };

  FocusHandlerImpl.prototype.componentWillUnmount = function componentWillUnmount() {
    focusHandlerCount--;
    if (focusHandlerCount === 0) {
      initialRender = true;
    }
  };

  FocusHandlerImpl.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevProps.location !== this.props.location && this.state.shouldFocus) {
      this.focus();
    }
  };

  FocusHandlerImpl.prototype.focus = function focus() {
    if (process.env.NODE_ENV === "test") {
      // getting cannot read property focus of null in the tests
      // and that bit of global `initialRender` state causes problems
      // should probably figure it out!
      return;
    }

    var requestFocus = this.props.requestFocus;


    if (requestFocus) {
      requestFocus(this.node);
    } else {
      if (initialRender) {
        initialRender = false;
      } else {
        // React polyfills [autofocus] and it fires earlier than cDM,
        // so we were stealing focus away, this line prevents that.
        if (!this.node.contains(document.activeElement)) {
          this.node.focus();
        }
      }
    }
  };

  FocusHandlerImpl.prototype.render = function render() {
    var _this5 = this;

    var _props2 = this.props,
        children = _props2.children,
        style = _props2.style,
        requestFocus = _props2.requestFocus,
        _props2$role = _props2.role,
        role = _props2$role === undefined ? "group" : _props2$role,
        _props2$component = _props2.component,
        Comp = _props2$component === undefined ? "div" : _props2$component,
        uri = _props2.uri,
        location = _props2.location,
        domProps = _objectWithoutProperties(_props2, ["children", "style", "requestFocus", "role", "component", "uri", "location"]);

    return React.createElement(
      Comp,
      _extends$4({
        style: _extends$4({ outline: "none" }, style),
        tabIndex: "-1",
        role: role,
        ref: function ref(n) {
          return _this5.node = n;
        }
      }, domProps),
      React.createElement(
        FocusContext.Provider,
        { value: this.requestFocus },
        this.props.children
      )
    );
  };

  return FocusHandlerImpl;
}(React.Component);

polyfill(FocusHandlerImpl);

var k = function k() {};

////////////////////////////////////////////////////////////////////////////////
var forwardRef = React.forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = function forwardRef(C) {
    return C;
  };
}

var Link = forwardRef(function (_ref4, ref) {
  var innerRef = _ref4.innerRef,
      props = _objectWithoutProperties(_ref4, ["innerRef"]);

  return React.createElement(
    BaseContext.Consumer,
    null,
    function (_ref5) {
      var basepath = _ref5.basepath,
          baseuri = _ref5.baseuri;
      return React.createElement(
        Location,
        null,
        function (_ref6) {
          var location = _ref6.location,
              navigate$$1 = _ref6.navigate;

          var to = props.to,
              state = props.state,
              replace = props.replace,
              _props$getProps = props.getProps,
              getProps = _props$getProps === undefined ? k : _props$getProps,
              anchorProps = _objectWithoutProperties(props, ["to", "state", "replace", "getProps"]);

          var href = resolve(to, baseuri);
          var isCurrent = location.pathname === href;
          var isPartiallyCurrent = startsWith(location.pathname, href);

          return React.createElement("a", _extends$4({
            ref: ref || innerRef,
            "aria-current": isCurrent ? "page" : undefined
          }, anchorProps, getProps({ isCurrent: isCurrent, isPartiallyCurrent: isPartiallyCurrent, href: href, location: location }), {
            href: href,
            onClick: function onClick(event) {
              if (anchorProps.onClick) anchorProps.onClick(event);
              if (shouldNavigate(event)) {
                event.preventDefault();
                navigate$$1(href, { state: state, replace: replace });
              }
            }
          }));
        }
      );
    }
  );
});

////////////////////////////////////////////////////////////////////////////////
function RedirectRequest(uri) {
  this.uri = uri;
}

var isRedirect = function isRedirect(o) {
  return o instanceof RedirectRequest;
};

var redirectTo = function redirectTo(to) {
  throw new RedirectRequest(to);
};

var RedirectImpl = function (_React$Component3) {
  _inherits(RedirectImpl, _React$Component3);

  function RedirectImpl() {
    _classCallCheck(this, RedirectImpl);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  // Support React < 16 with this hook
  RedirectImpl.prototype.componentDidMount = function componentDidMount() {
    var _props3 = this.props,
        navigate$$1 = _props3.navigate,
        to = _props3.to,
        from = _props3.from,
        _props3$replace = _props3.replace,
        replace = _props3$replace === undefined ? true : _props3$replace,
        state = _props3.state,
        noThrow = _props3.noThrow,
        props = _objectWithoutProperties(_props3, ["navigate", "to", "from", "replace", "state", "noThrow"]);

    Promise.resolve().then(function () {
      navigate$$1(insertParams(to, props), { replace: replace, state: state });
    });
  };

  RedirectImpl.prototype.render = function render() {
    var _props4 = this.props,
        navigate$$1 = _props4.navigate,
        to = _props4.to,
        from = _props4.from,
        replace = _props4.replace,
        state = _props4.state,
        noThrow = _props4.noThrow,
        props = _objectWithoutProperties(_props4, ["navigate", "to", "from", "replace", "state", "noThrow"]);

    if (!noThrow) redirectTo(insertParams(to, props));
    return null;
  };

  return RedirectImpl;
}(React.Component);

var Redirect = function Redirect(props) {
  return React.createElement(
    Location,
    null,
    function (locationContext) {
      return React.createElement(RedirectImpl, _extends$4({}, locationContext, props));
    }
  );
};

process.env.NODE_ENV !== "production" ? Redirect.propTypes = {
  from: PropTypes.string,
  to: PropTypes.string.isRequired
} : void 0;

////////////////////////////////////////////////////////////////////////////////
// Junk
var stripSlashes = function stripSlashes(str) {
  return str.replace(/(^\/+|\/+$)/g, "");
};

var createRoute = function createRoute(basepath) {
  return function (element) {
    if (!element) {
      return null;
    }

    !(element.props.path || element.props.default || element.type === Redirect) ? process.env.NODE_ENV !== "production" ? invariant_1(false, "<Router>: Children of <Router> must have a `path` or `default` prop, or be a `<Redirect>`. None found on element type `" + element.type + "`") : invariant_1(false) : void 0;

    !!(element.type === Redirect && (!element.props.from || !element.props.to)) ? process.env.NODE_ENV !== "production" ? invariant_1(false, "<Redirect from=\"" + element.props.from + " to=\"" + element.props.to + "\"/> requires both \"from\" and \"to\" props when inside a <Router>.") : invariant_1(false) : void 0;

    !!(element.type === Redirect && !validateRedirect(element.props.from, element.props.to)) ? process.env.NODE_ENV !== "production" ? invariant_1(false, "<Redirect from=\"" + element.props.from + " to=\"" + element.props.to + "\"/> has mismatched dynamic segments, ensure both paths have the exact same dynamic segments.") : invariant_1(false) : void 0;

    if (element.props.default) {
      return { value: element, default: true };
    }

    var elementPath = element.type === Redirect ? element.props.from : element.props.path;

    var path = elementPath === "/" ? basepath : stripSlashes(basepath) + "/" + stripSlashes(elementPath);

    return {
      value: element,
      default: element.props.default,
      path: element.props.children ? stripSlashes(path) + "/*" : path
    };
  };
};

var shouldNavigate = function shouldNavigate(event) {
  return !event.defaultPrevented && event.button === 0 && !(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends$5 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var MasspaItemCategory = function (_Component) {
  inherits(MasspaItemCategory, _Component);

  function MasspaItemCategory(props) {
    classCallCheck(this, MasspaItemCategory);

    var _this = possibleConstructorReturn(this, (MasspaItemCategory.__proto__ || Object.getPrototypeOf(MasspaItemCategory)).call(this, props));

    _this.handleClick = function (id) {
      var link = _this.props.link;

      navigate('' + link + id);
    };

    _this.nextMenuCategory = _this.nextMenuCategory.bind(_this);
    _this.previousMenuCategory = _this.previousMenuCategory.bind(_this);
    return _this;
  }

  createClass(MasspaItemCategory, [{
    key: 'nextMenuCategory',
    value: function nextMenuCategory() {
      this.sliderItemServices.slickNext();
    }
  }, {
    key: 'previousMenuCategory',
    value: function previousMenuCategory() {
      this.sliderItemServices.slickPrev();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          listItems = _props.listItems,
          link = _props.link,
          sizeImage = _props.sizeImage,
          borderImage = _props.borderImage,
          borderRadius = _props.borderRadius,
          mode = _props.mode,
          animation = _props.animation,
          layout = _props.layout,
          colorTitle = _props.colorTitle;

      if (listItems.length !== 0) {
        var featuredItems = listItems.filter(function (item) {
          return item.featured === 1;
        });
        if (featuredItems.length !== 0) {
          if (featuredItems.length > 4) {
            var settingItem = {
              dots: false,
              infinite: true,
              slidesToShow: 4,
              slidesToScroll: 4,
              pauseOnHover: false,
              arrows: false,
              responsive: [{
                breakpoint: 767.98,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }]

            };

            return React.createElement(
              'div',
              { className: 'masspa-item-category-slide-container' },
              React.createElement(
                Slider,
                _extends$5({ ref: function ref(c) {
                    return _this2.sliderItemServices = c;
                  } }, settingItem),
                featuredItems.map(function (item, i) {
                  if (item.image === "") {
                    if (mode === 2) {
                      if (animation === 'zoom') {
                        return React.createElement(
                          'div',
                          { className: 'masspa-item-category-container', key: i },
                          React.createElement(
                            'div',
                            { style: {
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                border: borderImage
                              },
                              className: 'masspa-item-link-03 masspa-item-category-zoom',
                              onClick: function onClick() {
                                return _this2.handleClick(item.itemCode);
                              }
                            },
                            React.createElement(
                              'span',
                              { className: 'masspa-item-category-overlay-2' },
                              React.createElement('img', { src: imageDefaut, alt: item.title,
                                style: {
                                  width: sizeImage + 'px',
                                  height: sizeImage + 'px',
                                  borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                },
                                className: 'masspa-item-image-02'
                              }),
                              React.createElement(
                                'div',
                                { className: 'masspa-item-category-title-2', style: { color: '' + colorTitle } },
                                item.title
                              )
                            )
                          ),
                          item.description !== null ? React.createElement('div', { className: 'masspa-item-category-text', dangerouslySetInnerHTML: { __html: '' + item.description } }) : React.createElement('div', null)
                        );
                      } else if (animation === 'rotate') {
                        return React.createElement(
                          'div',
                          { className: 'masspa-item-category-container', key: i },
                          React.createElement(
                            'div',
                            { style: {
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                border: borderImage
                              },
                              className: 'masspa-item-link-03 masspa-item-category-rotate',
                              onClick: function onClick() {
                                return _this2.handleClick(item.itemCode);
                              }
                            },
                            React.createElement(
                              'span',
                              { className: 'masspa-item-category-overlay-2' },
                              React.createElement('img', { src: imageDefaut, alt: item.title,
                                style: {
                                  width: sizeImage + 'px',
                                  height: sizeImage + 'px',
                                  borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                },
                                className: 'masspa-item-image-02'
                              }),
                              React.createElement(
                                'div',
                                { className: 'masspa-item-category-title-2', style: { color: '' + colorTitle } },
                                item.title
                              )
                            )
                          ),
                          item.description !== null ? React.createElement('div', { className: 'masspa-item-category-text', dangerouslySetInnerHTML: { __html: '' + item.description } }) : React.createElement('div', null)
                        );
                      } else {
                        return React.createElement(
                          'div',
                          { className: 'masspa-item-category-container', key: i },
                          React.createElement(
                            'div',
                            { style: {
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                border: borderImage
                              },
                              className: 'masspa-item-link-03',
                              onClick: function onClick() {
                                return _this2.handleClick(item.itemCode);
                              }
                            },
                            React.createElement(
                              'span',
                              { className: 'masspa-item-category-overlay-2' },
                              React.createElement('img', { src: imageDefaut, alt: item.title,
                                style: {
                                  width: sizeImage + 'px',
                                  height: sizeImage + 'px',
                                  borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                },
                                className: 'masspa-item-image-02'
                              }),
                              React.createElement(
                                'div',
                                { className: 'masspa-item-category-title-2', style: { color: '' + colorTitle } },
                                item.title
                              )
                            )
                          ),
                          item.description !== null ? React.createElement('div', { className: 'masspa-item-category-text', dangerouslySetInnerHTML: { __html: '' + item.description } }) : React.createElement('div', null)
                        );
                      }
                    } else {
                      if (animation === 'zoom') {
                        return React.createElement(
                          'div',
                          { className: 'masspa-item-category-container' },
                          React.createElement(
                            'div',
                            { style: {
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                border: borderImage
                              },
                              className: 'masspa-item-link-03 masspa-item-category-zoom',
                              onClick: function onClick() {
                                return _this2.handleClick(item.itemCode);
                              }
                            },
                            React.createElement('img', { src: imageDefaut, alt: item.title,
                              style: {
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                              },
                              className: 'masspa-item-image-01'
                            })
                          ),
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-title-1', style: { color: '' + colorTitle } },
                            item.title
                          ),
                          item.description !== null ? React.createElement('div', { className: 'masspa-item-category-text', dangerouslySetInnerHTML: { __html: '' + item.description } }) : React.createElement('div', null)
                        );
                      } else if (animation === 'rotate') {
                        return React.createElement(
                          'div',
                          { className: 'masspa-item-category-container' },
                          React.createElement(
                            'div',
                            { style: {
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                border: borderImage
                              },
                              className: 'masspa-item-link-03 masspa-item-category-rotate',
                              onClick: function onClick() {
                                return _this2.handleClick(item.itemCode);
                              }
                            },
                            React.createElement('img', { src: imageDefaut, alt: item.title,
                              style: {
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                              },
                              className: 'masspa-item-image-01'
                            })
                          ),
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-title-1', style: { color: '' + colorTitle } },
                            item.title
                          ),
                          item.description !== null ? React.createElement('div', { className: 'masspa-item-category-text', dangerouslySetInnerHTML: { __html: '' + item.description } }) : React.createElement('div', null)
                        );
                      } else {
                        return React.createElement(
                          'div',
                          { className: 'masspa-item-category-container' },
                          React.createElement(
                            'div',
                            { style: {
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                border: borderImage
                              },
                              className: 'masspa-item-link-03',
                              onClick: function onClick() {
                                return _this2.handleClick(item.itemCode);
                              }
                            },
                            React.createElement('img', { src: imageDefaut, alt: item.title,
                              style: {
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                              },
                              className: 'masspa-item-image-01'
                            })
                          ),
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-title-1', style: { color: '' + colorTitle } },
                            item.title
                          ),
                          item.description !== null ? React.createElement('div', { className: 'masspa-item-category-text', dangerouslySetInnerHTML: { __html: '' + item.description } }) : React.createElement('div', null)
                        );
                      }
                    }
                  } else {
                    // xet co anh
                    if (mode === 2) {
                      if (animation === 'zoom') {
                        return React.createElement(
                          'div',
                          { className: 'masspa-item-category-container', key: i },
                          React.createElement(
                            'div',
                            { style: {
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                border: borderImage
                              },
                              className: 'masspa-item-link-03 masspa-item-category-zoom',
                              onClick: function onClick() {
                                return _this2.handleClick(item.itemCode);
                              }
                            },
                            React.createElement(
                              'span',
                              { className: 'masspa-item-category-overlay-2' },
                              React.createElement('img', { src: item.image, alt: item.title,
                                style: {
                                  width: sizeImage + 'px',
                                  height: sizeImage + 'px',
                                  borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                },
                                className: 'masspa-item-image-02'
                              }),
                              React.createElement(
                                'div',
                                { className: 'masspa-item-category-title-2', style: { color: '' + colorTitle } },
                                item.title
                              )
                            )
                          ),
                          item.description !== null ? React.createElement('div', { className: 'masspa-item-category-text', dangerouslySetInnerHTML: { __html: '' + item.description } }) : React.createElement('div', null)
                        );
                      } else if (animation === 'rotate') {
                        return React.createElement(
                          'div',
                          { className: 'masspa-item-category-container', key: i },
                          React.createElement(
                            'div',
                            { style: {
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                border: borderImage
                              },
                              className: 'masspa-item-link-03 masspa-item-category-rotate',
                              onClick: function onClick() {
                                return _this2.handleClick(item.itemCode);
                              }
                            },
                            React.createElement(
                              'span',
                              { className: 'masspa-item-category-overlay-2' },
                              React.createElement('img', { src: item.image, alt: item.title,
                                style: {
                                  width: sizeImage + 'px',
                                  height: sizeImage + 'px',
                                  borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                },
                                className: 'masspa-item-image-02'
                              }),
                              React.createElement(
                                'div',
                                { className: 'masspa-item-category-title-2', style: { color: '' + colorTitle } },
                                item.title
                              )
                            )
                          ),
                          item.description !== null ? React.createElement('div', { className: 'masspa-item-category-text', dangerouslySetInnerHTML: { __html: '' + item.description } }) : React.createElement('div', null)
                        );
                      } else {
                        return React.createElement(
                          'div',
                          { className: 'masspa-item-category-container', key: i },
                          React.createElement(
                            'div',
                            { style: {
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                border: borderImage
                              },
                              className: 'masspa-item-link-03',
                              onClick: function onClick() {
                                return _this2.handleClick(item.itemCode);
                              }
                            },
                            React.createElement(
                              'span',
                              { className: 'masspa-item-category-overlay-2' },
                              React.createElement('img', { src: item.image, alt: item.title,
                                style: {
                                  width: sizeImage + 'px',
                                  height: sizeImage + 'px',
                                  borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                },
                                className: 'masspa-item-image-02'
                              }),
                              React.createElement(
                                'div',
                                { className: 'masspa-item-category-title-2', style: { color: '' + colorTitle } },
                                item.title
                              )
                            )
                          ),
                          item.description !== null ? React.createElement('div', { className: 'masspa-item-category-text', dangerouslySetInnerHTML: { __html: '' + item.description } }) : React.createElement('div', null)
                        );
                      }
                    } else {
                      if (animation === 'zoom') {
                        return React.createElement(
                          'div',
                          { className: 'masspa-item-category-container' },
                          React.createElement(
                            'div',
                            { style: {
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                border: borderImage
                              },
                              className: 'masspa-item-link-03 masspa-item-category-zoom',
                              onClick: function onClick() {
                                return _this2.handleClick(item.itemCode);
                              }
                            },
                            React.createElement('img', { src: item.image, alt: item.title,
                              style: {
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                              },
                              className: 'masspa-item-image-01'
                            })
                          ),
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-title-1', style: { color: '' + colorTitle } },
                            item.title
                          ),
                          item.description !== null ? React.createElement('div', { className: 'masspa-item-category-text', dangerouslySetInnerHTML: { __html: '' + item.description } }) : React.createElement('div', null)
                        );
                      } else if (animation === 'rotate') {
                        return React.createElement(
                          'div',
                          { className: 'masspa-item-category-container' },
                          React.createElement(
                            'div',
                            { style: {
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                border: borderImage
                              },
                              className: 'masspa-item-link-03 masspa-item-category-rotate',
                              onClick: function onClick() {
                                return _this2.handleClick(item.itemCode);
                              }
                            },
                            React.createElement('img', { src: item.image, alt: item.title,
                              style: {
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                              },
                              className: 'masspa-item-image-01'
                            })
                          ),
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-title-1', style: { color: '' + colorTitle } },
                            item.title
                          ),
                          item.description !== null ? React.createElement('div', { className: 'masspa-item-category-text', dangerouslySetInnerHTML: { __html: '' + item.description } }) : React.createElement('div', null)
                        );
                      } else {
                        return React.createElement(
                          'div',
                          { className: 'masspa-item-category-container' },
                          React.createElement(
                            'div',
                            { style: {
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                border: borderImage
                              },
                              className: 'masspa-item-link-03',
                              onClick: function onClick() {
                                return _this2.handleClick(item.itemCode);
                              }
                            },
                            React.createElement('img', { src: imageDefaut, alt: item.title,
                              style: {
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                              },
                              className: 'masspa-item-image-01'
                            })
                          ),
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-title-1', style: { color: '' + colorTitle } },
                            item.title
                          ),
                          item.description !== null ? React.createElement('div', { className: 'masspa-item-category-text', dangerouslySetInnerHTML: { __html: '' + item.description } }) : React.createElement('div', null)
                        );
                      }
                    }
                  }
                })
              ),
              React.createElement('img', { src: imgItemArrowLeft, onClick: this.previousMenuCategory, className: 'masspa-item-arrow-left' }),
              React.createElement('img', { src: imgItemArrowRight, onClick: this.nextMenuCategory, className: 'masspa-item-arrow-right' })
            );
          } else {

            return React.createElement(
              'div',
              { className: 'ms-item-category-row ms-item-category-no-gutter' },
              featuredItems.map(function (item, i) {
                if (item.image === "" || item.image === null) {
                  if (layout === 2) {
                    //dang dac biet
                    if (mode === 2) {
                      if (animation === 'zoom') {
                        return React.createElement(
                          'div',
                          { className: 'ms-item-col-md-6 ms-item-col-sm-12 ms-item-col-xs-6', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-card fade-in-left' },
                            React.createElement(
                              'div',
                              { className: 'ms-item-col-md-5 ms-item-col-sm-5' },
                              React.createElement(
                                'div',
                                { style: {
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                    border: borderImage
                                  },
                                  className: 'masspa-item-link-03 masspa-item-category-zoom',
                                  onClick: function onClick() {
                                    return _this2.handleClick(item.itemCode);
                                  }
                                },
                                React.createElement(
                                  'span',
                                  { className: 'masspa-item-category-overlay-2' },
                                  React.createElement('img', { src: imageDefaut, alt: item.title,
                                    style: {
                                      width: sizeImage + 'px',
                                      height: sizeImage + 'px',
                                      borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                    },
                                    className: 'masspa-item-image-03'
                                  }),
                                  React.createElement(
                                    'div',
                                    { className: 'masspa-item-category-title-2', style: { color: '' + colorTitle } },
                                    item.title
                                  )
                                )
                              )
                            ),
                            React.createElement(
                              'div',
                              { className: 'ms-item-col-md-7 ms-item-col-sm-7' },
                              React.createElement(
                                'div',
                                { className: 'masspa-item-category-group-title-text' },
                                item.description !== null ? React.createElement('div', { className: 'masspa-item-category-text-layout02', dangerouslySetInnerHTML: { __html: '' + item.description } }) : React.createElement('div', null)
                              )
                            )
                          )
                        );
                      } else if (animation === 'rotate') {
                        return React.createElement(
                          'div',
                          { className: 'ms-item-col-md-6 ms-item-col-sm-12 ms-item-col-xs-6', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-card fade-in-left' },
                            React.createElement(
                              'div',
                              { className: 'ms-item-col-md-5 ms-item-col-sm-5' },
                              React.createElement(
                                'div',
                                { style: {
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                    border: borderImage
                                  },
                                  className: 'masspa-item-link-03 masspa-item-category-rotate',
                                  onClick: function onClick() {
                                    return _this2.handleClick(item.itemCode);
                                  }
                                },
                                React.createElement(
                                  'span',
                                  { className: 'masspa-item-category-overlay-2' },
                                  React.createElement('img', { src: imageDefaut, alt: item.title,
                                    style: {
                                      width: sizeImage + 'px',
                                      height: sizeImage + 'px',
                                      borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                    },
                                    className: 'masspa-item-image-03'
                                  }),
                                  React.createElement(
                                    'div',
                                    { className: 'masspa-item-category-title-2', style: { color: '' + colorTitle } },
                                    item.title
                                  )
                                )
                              )
                            ),
                            React.createElement(
                              'div',
                              { className: 'ms-item-col-md-7 ms-item-col-sm-7' },
                              React.createElement(
                                'div',
                                { className: 'masspa-item-category-group-title-text' },
                                item.description !== null ? React.createElement('div', { className: 'masspa-item-category-text-layout02', dangerouslySetInnerHTML: { __html: '' + item.description } }) : React.createElement('div', null)
                              )
                            )
                          )
                        );
                      } else {
                        return React.createElement(
                          'div',
                          { className: 'ms-item-col-md-6 ms-item-col-sm-12 ms-item-col-xs-6', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-card fade-in-left' },
                            React.createElement(
                              'div',
                              { className: 'ms-item-col-md-5 ms-item-col-sm-5' },
                              React.createElement(
                                'div',
                                { style: {
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                    border: borderImage
                                  },
                                  className: 'masspa-item-link-03',
                                  onClick: function onClick() {
                                    return _this2.handleClick(item.itemCode);
                                  }
                                },
                                React.createElement(
                                  'span',
                                  { className: 'masspa-item-category-overlay-2' },
                                  React.createElement('img', { src: imageDefaut, alt: item.title,
                                    style: {
                                      width: sizeImage + 'px',
                                      height: sizeImage + 'px',
                                      borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                    },
                                    className: 'masspa-item-image-03'
                                  }),
                                  React.createElement(
                                    'div',
                                    { className: 'masspa-item-category-title-2', style: { color: '' + colorTitle } },
                                    item.title
                                  )
                                )
                              )
                            ),
                            React.createElement(
                              'div',
                              { className: 'ms-item-col-md-7 ms-item-col-sm-7' },
                              React.createElement(
                                'div',
                                { className: 'masspa-item-category-group-title-text' },
                                item.description !== null ? React.createElement('div', { className: 'masspa-item-category-text-layout02', dangerouslySetInnerHTML: { __html: '' + item.description } }) : React.createElement('div', null)
                              )
                            )
                          )
                        );
                      }
                    } else {
                      if (animation === 'zoom') {
                        return React.createElement(
                          'div',
                          { className: 'ms-item-col-md-6 ms-item-col-sm-12 ms-item-col-xs-6', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-card fade-in-left' },
                            React.createElement(
                              'div',
                              { className: 'ms-item-col-md-5 ms-item-col-sm-5' },
                              React.createElement(
                                'div',
                                { style: {
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                    border: borderImage
                                  },
                                  className: 'masspa-item-link-03 masspa-item-category-zoom',
                                  onClick: function onClick() {
                                    return _this2.handleClick(item.itemCode);
                                  }
                                },
                                React.createElement('img', { src: imageDefaut, alt: item.title,
                                  style: {
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                  },
                                  className: 'masspa-item-image-04'
                                })
                              )
                            ),
                            React.createElement(
                              'div',
                              { className: 'ms-item-col-md-7 ms-item-col-sm-7' },
                              React.createElement(
                                'div',
                                { className: 'masspa-item-category-group-title-text' },
                                React.createElement(
                                  'div',
                                  { className: 'masspa-item-category-title-1', style: { color: '' + colorTitle } },
                                  item.title
                                ),
                                item.description !== null ? React.createElement('div', { className: 'masspa-item-category-text', dangerouslySetInnerHTML: { __html: '' + item.description } }) : React.createElement('div', null)
                              )
                            )
                          )
                        );
                      } else if (animation === 'rotate') {
                        return React.createElement(
                          'div',
                          { className: 'ms-item-col-md-6 ms-item-col-sm-12 ms-item-col-xs-6', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-card fade-in-left' },
                            React.createElement(
                              'div',
                              { className: 'ms-item-col-md-5 ms-item-col-sm-5' },
                              React.createElement(
                                'div',
                                { style: {
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                    border: borderImage
                                  },
                                  className: 'masspa-item-link-03 masspa-item-category-rotate',
                                  onClick: function onClick() {
                                    return _this2.handleClick(item.itemCode);
                                  }
                                },
                                React.createElement('img', { src: imageDefaut, alt: item.title,
                                  style: {
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                  },
                                  className: 'masspa-item-image-04'
                                })
                              )
                            ),
                            React.createElement(
                              'div',
                              { className: 'ms-item-col-md-7 ms-item-col-sm-7' },
                              React.createElement(
                                'div',
                                { className: 'masspa-item-category-group-title-text' },
                                React.createElement(
                                  'div',
                                  { className: 'masspa-item-category-title-1', style: { color: '' + colorTitle } },
                                  item.title
                                ),
                                item.description !== null ? React.createElement('div', { className: 'masspa-item-category-text', dangerouslySetInnerHTML: { __html: '' + item.description } }) : React.createElement('div', null)
                              )
                            )
                          )
                        );
                      } else {
                        return React.createElement(
                          'div',
                          { className: 'ms-item-col-md-6 ms-item-col-sm-12 ms-item-col-xs-6', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-card fade-in-left' },
                            React.createElement(
                              'div',
                              { className: 'ms-item-col-md-5 ms-item-col-sm-5' },
                              React.createElement(
                                'div',
                                { style: {
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                    border: borderImage
                                  },
                                  className: 'masspa-item-link-03',
                                  onClick: function onClick() {
                                    return _this2.handleClick(item.itemCode);
                                  }
                                },
                                React.createElement('img', { src: imageDefaut, alt: item.title,
                                  style: {
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                  },
                                  className: 'masspa-item-image-04'
                                })
                              )
                            ),
                            React.createElement(
                              'div',
                              { className: 'ms-item-col-md-7 ms-item-col-sm-7' },
                              React.createElement(
                                'div',
                                { className: 'masspa-item-category-group-title-text' },
                                React.createElement(
                                  'div',
                                  { className: 'masspa-item-category-title-1', style: { color: '' + colorTitle } },
                                  item.title
                                ),
                                item.description !== null ? React.createElement('div', { className: 'masspa-item-category-text', dangerouslySetInnerHTML: { __html: '' + item.description } }) : React.createElement('div', null)
                              )
                            )
                          )
                        );
                      }
                    }
                  } else {
                    if (mode === 2) {
                      if (animation === 'zoom') {
                        return React.createElement(
                          'div',
                          { className: 'ms-item-col-sm-12 ms-item-col-md-3 ms-item-col-lg-3', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-container' },
                            React.createElement(
                              'div',
                              { style: {
                                  width: sizeImage + 'px',
                                  height: sizeImage + 'px',
                                  borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  border: borderImage
                                },
                                className: 'masspa-item-link-03 masspa-item-category-zoom',
                                onClick: function onClick() {
                                  return _this2.handleClick(item.itemCode);
                                }
                              },
                              React.createElement(
                                'span',
                                { className: 'masspa-item-category-overlay-2' },
                                React.createElement('img', { src: imageDefaut, alt: item.title,
                                  style: {
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                  },
                                  className: 'masspa-item-image-02'
                                }),
                                React.createElement(
                                  'div',
                                  { className: 'masspa-item-category-title-2', style: { color: '' + colorTitle } },
                                  item.title
                                )
                              )
                            ),
                            item.description !== null ? React.createElement('div', { className: 'masspa-item-category-text', dangerouslySetInnerHTML: { __html: '' + item.description } }) : React.createElement('div', null)
                          )
                        );
                      } else if (animation === 'rotate') {
                        return React.createElement(
                          'div',
                          { className: 'ms-item-col-sm-12 ms-item-col-md-3 ms-item-col-lg-3', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-container' },
                            React.createElement(
                              'div',
                              { style: {
                                  width: sizeImage + 'px',
                                  height: sizeImage + 'px',
                                  borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  border: borderImage
                                },
                                className: 'masspa-item-link-03 masspa-item-category-rotate',
                                onClick: function onClick() {
                                  return _this2.handleClick(item.itemCode);
                                }
                              },
                              React.createElement(
                                'span',
                                { className: 'masspa-item-category-overlay-2' },
                                React.createElement('img', { src: imageDefaut, alt: item.title,
                                  style: {
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                  },
                                  className: 'masspa-item-image-02'
                                }),
                                React.createElement(
                                  'div',
                                  { className: 'masspa-item-category-title-2', style: { color: '' + colorTitle } },
                                  item.title
                                )
                              )
                            ),
                            item.description !== null ? React.createElement('div', { className: 'masspa-item-category-text', dangerouslySetInnerHTML: { __html: '' + item.description } }) : React.createElement('div', null)
                          )
                        );
                      } else {
                        return React.createElement(
                          'div',
                          { className: 'ms-item-col-sm-12 ms-item-col-md-3 ms-item-col-lg-3', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-container' },
                            React.createElement(
                              'div',
                              { style: {
                                  width: sizeImage + 'px',
                                  height: sizeImage + 'px',
                                  borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  border: borderImage
                                },
                                className: 'masspa-item-link-03',
                                onClick: function onClick() {
                                  return _this2.handleClick(item.itemCode);
                                }
                              },
                              React.createElement(
                                'span',
                                { className: 'masspa-item-category-overlay-2' },
                                React.createElement('img', { src: imageDefaut, alt: item.title,
                                  style: {
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                  },
                                  className: 'masspa-item-image-02'
                                }),
                                React.createElement(
                                  'div',
                                  { className: 'masspa-item-category-title-2', style: { color: '' + colorTitle } },
                                  item.title
                                )
                              )
                            ),
                            item.description !== null ? React.createElement('div', { className: 'masspa-item-category-text', dangerouslySetInnerHTML: { __html: '' + item.description } }) : React.createElement('div', null)
                          )
                        );
                      }
                    } else {
                      if (animation === 'zoom') {
                        return React.createElement(
                          'div',
                          { className: 'ms-item-col-sm-12 ms-item-col-md-3 ms-item-col-lg-3', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-container' },
                            React.createElement(
                              'div',
                              { style: {
                                  width: sizeImage + 'px',
                                  height: sizeImage + 'px',
                                  borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  border: borderImage
                                },
                                className: 'masspa-item-link-03 masspa-item-category-zoom',
                                onClick: function onClick() {
                                  return _this2.handleClick(item.itemCode);
                                }
                              },
                              React.createElement('img', { src: imageDefaut, alt: item.title,
                                style: {
                                  width: sizeImage + 'px',
                                  height: sizeImage + 'px',
                                  borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                },
                                className: 'masspa-item-image-01'
                              })
                            ),
                            React.createElement(
                              'div',
                              { className: 'masspa-item-category-title-1', style: { color: '' + colorTitle } },
                              item.title
                            ),
                            item.description !== null ? React.createElement('div', { className: 'masspa-item-category-text', dangerouslySetInnerHTML: { __html: '' + item.description } }) : React.createElement('div', null)
                          )
                        );
                      } else if (animation === 'rotate') {
                        return React.createElement(
                          'div',
                          { className: 'ms-item-col-sm-12 ms-item-col-md-3 ms-item-col-lg-3', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-container' },
                            React.createElement(
                              'div',
                              { style: {
                                  width: sizeImage + 'px',
                                  height: sizeImage + 'px',
                                  borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  border: borderImage
                                },
                                className: 'masspa-item-link-03 masspa-item-category-rotate',
                                onClick: function onClick() {
                                  return _this2.handleClick(item.itemCode);
                                }
                              },
                              React.createElement('img', { src: imageDefaut, alt: item.title,
                                style: {
                                  width: sizeImage + 'px',
                                  height: sizeImage + 'px',
                                  borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                },
                                className: 'masspa-item-image-01'
                              })
                            ),
                            React.createElement(
                              'div',
                              { className: 'masspa-item-category-title-1', style: { color: '' + colorTitle } },
                              item.title
                            ),
                            item.description !== null ? React.createElement('div', { className: 'masspa-item-category-text', dangerouslySetInnerHTML: { __html: '' + item.description } }) : React.createElement('div', null)
                          )
                        );
                      } else {
                        return React.createElement(
                          'div',
                          { className: 'ms-item-col-sm-12 ms-item-col-md-3 ms-item-col-lg-3', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-container' },
                            React.createElement(
                              'div',
                              { style: {
                                  width: sizeImage + 'px',
                                  height: sizeImage + 'px',
                                  borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  border: borderImage
                                },
                                className: 'masspa-item-link-03',
                                onClick: function onClick() {
                                  return _this2.handleClick(item.itemCode);
                                }
                              },
                              React.createElement('img', { src: imageDefaut, alt: item.title,
                                style: {
                                  width: sizeImage + 'px',
                                  height: sizeImage + 'px',
                                  borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                },
                                className: 'masspa-item-image-01'
                              })
                            ),
                            React.createElement(
                              'div',
                              { className: 'masspa-item-category-title-1', style: { color: '' + colorTitle } },
                              item.title
                            ),
                            item.description !== null ? React.createElement('div', { className: 'masspa-item-category-text', dangerouslySetInnerHTML: { __html: '' + item.description } }) : React.createElement('div', null)
                          )
                        );
                      }
                    }
                  }
                } else {
                  if (layout === 2) {
                    //dang dac biet
                    if (mode === 2) {
                      if (animation === 'zoom') {
                        return React.createElement(
                          'div',
                          { className: 'ms-item-col-md-6 ms-item-col-sm-12 ms-item-col-xs-6', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-card fade-in-left' },
                            React.createElement(
                              'div',
                              { className: 'ms-item-col-md-5 ms-item-col-sm-5' },
                              React.createElement(
                                'div',
                                { style: {
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                    border: borderImage
                                  },
                                  className: 'masspa-item-link-03 masspa-item-category-zoom',
                                  onClick: function onClick() {
                                    return _this2.handleClick(item.itemCode);
                                  }
                                },
                                React.createElement(
                                  'span',
                                  { className: 'masspa-item-category-overlay-2' },
                                  React.createElement('img', { src: item.image, alt: item.title,
                                    style: {
                                      width: sizeImage + 'px',
                                      height: sizeImage + 'px',
                                      borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                    },
                                    className: 'masspa-item-image-03'
                                  }),
                                  React.createElement(
                                    'div',
                                    { className: 'masspa-item-category-title-2', style: { color: '' + colorTitle } },
                                    item.title
                                  )
                                )
                              )
                            ),
                            React.createElement(
                              'div',
                              { className: 'ms-item-col-md-7 ms-item-col-sm-7' },
                              React.createElement(
                                'div',
                                { className: 'masspa-item-category-group-title-text' },
                                item.description !== null ? React.createElement('div', { className: 'masspa-item-category-text-layout02', dangerouslySetInnerHTML: { __html: '' + item.description } }) : React.createElement('div', null)
                              )
                            )
                          )
                        );
                      } else if (animation === 'rotate') {
                        return React.createElement(
                          'div',
                          { className: 'ms-item-col-md-6 ms-item-col-sm-12 ms-item-col-xs-6', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-card fade-in-left' },
                            React.createElement(
                              'div',
                              { className: 'ms-item-col-md-5 ms-item-col-sm-5' },
                              React.createElement(
                                'div',
                                { style: {
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                    border: borderImage
                                  },
                                  className: 'masspa-item-link-03 masspa-item-category-rotate',
                                  onClick: function onClick() {
                                    return _this2.handleClick(item.itemCode);
                                  }
                                },
                                React.createElement(
                                  'span',
                                  { className: 'masspa-item-category-overlay-2' },
                                  React.createElement('img', { src: item.image, alt: item.title,
                                    style: {
                                      width: sizeImage + 'px',
                                      height: sizeImage + 'px',
                                      borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                    },
                                    className: 'masspa-item-image-03'
                                  }),
                                  React.createElement(
                                    'div',
                                    { className: 'masspa-item-category-title-2', style: { color: '' + colorTitle } },
                                    item.title
                                  )
                                )
                              )
                            ),
                            React.createElement(
                              'div',
                              { className: 'ms-item-col-md-7 ms-item-col-sm-7' },
                              React.createElement(
                                'div',
                                { className: 'masspa-item-category-group-title-text' },
                                item.description !== null ? React.createElement('div', { className: 'masspa-item-category-text-layout02', dangerouslySetInnerHTML: { __html: '' + item.description } }) : React.createElement('div', null)
                              )
                            )
                          )
                        );
                      } else {
                        return React.createElement(
                          'div',
                          { className: 'ms-item-col-md-6 ms-item-col-sm-12 ms-item-col-xs-6', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-card fade-in-left' },
                            React.createElement(
                              'div',
                              { className: 'ms-item-col-md-5 ms-item-col-sm-5' },
                              React.createElement(
                                'div',
                                { style: {
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                    border: borderImage
                                  },
                                  className: 'masspa-item-link-03',
                                  onClick: function onClick() {
                                    return _this2.handleClick(item.itemCode);
                                  }
                                },
                                React.createElement(
                                  'span',
                                  { className: 'masspa-item-category-overlay-2' },
                                  React.createElement('img', { src: item.image, alt: item.title,
                                    style: {
                                      width: sizeImage + 'px',
                                      height: sizeImage + 'px',
                                      borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                    },
                                    className: 'masspa-item-image-03'
                                  }),
                                  React.createElement(
                                    'div',
                                    { className: 'masspa-item-category-title-2', style: { color: '' + colorTitle } },
                                    item.title
                                  )
                                )
                              )
                            ),
                            React.createElement(
                              'div',
                              { className: 'ms-item-col-md-7 ms-item-col-sm-7' },
                              React.createElement(
                                'div',
                                { className: 'masspa-item-category-group-title-text' },
                                item.description !== null ? React.createElement('div', { className: 'masspa-item-category-text-layout02', dangerouslySetInnerHTML: { __html: '' + item.description } }) : React.createElement('div', null)
                              )
                            )
                          )
                        );
                      }
                    } else {
                      if (animation === 'zoom') {
                        return React.createElement(
                          'div',
                          { className: 'ms-item-col-md-6 ms-item-col-sm-12 ms-item-col-xs-6', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-card fade-in-left' },
                            React.createElement(
                              'div',
                              { className: 'ms-item-col-md-5 ms-item-col-sm-5' },
                              React.createElement(
                                'div',
                                { style: {
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                    border: borderImage
                                  },
                                  className: 'masspa-item-link-03 masspa-item-category-zoom',
                                  onClick: function onClick() {
                                    return _this2.handleClick(item.itemCode);
                                  }
                                },
                                React.createElement('img', { src: item.image, alt: item.title,
                                  style: {
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                  },
                                  className: 'masspa-item-image-04'
                                })
                              )
                            ),
                            React.createElement(
                              'div',
                              { className: 'ms-item-col-md-7 ms-item-col-sm-7' },
                              React.createElement(
                                'div',
                                { className: 'masspa-item-category-group-title-text' },
                                React.createElement(
                                  'div',
                                  { className: 'masspa-item-category-title-3', style: { color: '' + colorTitle } },
                                  item.title
                                ),
                                item.description !== null ? React.createElement('div', { className: 'masspa-item-category-text-layout02', dangerouslySetInnerHTML: { __html: '' + item.description } }) : React.createElement('div', null)
                              )
                            )
                          )
                        );
                      } else if (animation === 'rotate') {
                        return React.createElement(
                          'div',
                          { className: 'ms-item-col-md-6 ms-item-col-sm-12 ms-item-col-xs-6', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-card fade-in-left' },
                            React.createElement(
                              'div',
                              { className: 'ms-item-col-md-5 ms-item-col-sm-5' },
                              React.createElement(
                                'div',
                                { style: {
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                    border: borderImage
                                  },
                                  className: 'masspa-item-link-03 masspa-item-category-rotate',
                                  onClick: function onClick() {
                                    return _this2.handleClick(item.itemCode);
                                  }
                                },
                                React.createElement('img', { src: item.image, alt: item.title,
                                  style: {
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                  },
                                  className: 'masspa-item-image-04'
                                })
                              )
                            ),
                            React.createElement(
                              'div',
                              { className: 'ms-item-col-md-7 ms-item-col-sm-7' },
                              React.createElement(
                                'div',
                                { className: 'masspa-item-category-group-title-text' },
                                React.createElement(
                                  'div',
                                  { className: 'masspa-item-category-title-3', style: { color: '' + colorTitle } },
                                  item.title
                                ),
                                item.description !== null ? React.createElement('div', { className: 'masspa-item-category-text-layout02', dangerouslySetInnerHTML: { __html: '' + item.description } }) : React.createElement('div', null)
                              )
                            )
                          )
                        );
                      } else {
                        return React.createElement(
                          'div',
                          { className: 'ms-item-col-md-6 ms-item-col-sm-12 ms-item-col-xs-6', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-card fade-in-left' },
                            React.createElement(
                              'div',
                              { className: 'ms-item-col-md-5 ms-item-col-sm-5' },
                              React.createElement(
                                'div',
                                { style: {
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                    border: borderImage
                                  },
                                  className: 'masspa-item-link-03',
                                  onClick: function onClick() {
                                    return _this2.handleClick(item.itemCode);
                                  }
                                },
                                React.createElement('img', { src: imageDefaut, alt: item.title,
                                  style: {
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                  },
                                  className: 'masspa-item-image-04'
                                })
                              )
                            ),
                            React.createElement(
                              'div',
                              { className: 'ms-item-col-md-7 ms-item-col-sm-7' },
                              React.createElement(
                                'div',
                                { className: 'masspa-item-category-group-title-text' },
                                React.createElement(
                                  'div',
                                  { className: 'masspa-item-category-title-3', style: { color: '' + colorTitle } },
                                  item.title
                                ),
                                item.description !== null ? React.createElement('div', { className: 'masspa-item-category-text-layout02', dangerouslySetInnerHTML: { __html: '' + item.description } }) : React.createElement('div', null)
                              )
                            )
                          )
                        );
                      }
                    }
                  } else {
                    if (mode === 2) {
                      if (animation === 'zoom') {
                        return React.createElement(
                          'div',
                          { className: 'ms-item-col-sm-12 ms-item-col-md-3 ms-item-col-lg-3', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-container' },
                            React.createElement(
                              'div',
                              { style: {
                                  width: sizeImage + 'px',
                                  height: sizeImage + 'px',
                                  borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  border: borderImage
                                },
                                className: 'masspa-item-link-03 masspa-item-category-zoom' },
                              React.createElement(
                                'span',
                                { className: 'masspa-item-category-overlay-2' },
                                React.createElement('img', { src: item.image, alt: item.title,
                                  style: {
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                  },
                                  className: 'masspa-item-image-02'
                                }),
                                React.createElement(
                                  'div',
                                  { className: 'masspa-item-category-title-2', style: { color: '' + colorTitle } },
                                  item.title
                                )
                              )
                            ),
                            item.description !== null ? React.createElement('div', { className: 'masspa-item-category-text', dangerouslySetInnerHTML: { __html: '' + item.description } }) : React.createElement('div', null)
                          )
                        );
                      } else if (animation === 'rotate') {
                        return React.createElement(
                          'div',
                          { className: 'ms-item-col-sm-12 ms-item-col-md-3 ms-item-col-lg-3', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-container' },
                            React.createElement(
                              'div',
                              { style: {
                                  width: sizeImage + 'px',
                                  height: sizeImage + 'px',
                                  borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  border: borderImage
                                },
                                className: 'masspa-item-link-03 masspa-item-category-rotate' },
                              React.createElement(
                                'span',
                                { className: 'masspa-item-category-overlay-2' },
                                React.createElement('img', { src: item.image, alt: item.title,
                                  style: {
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                  },
                                  className: 'masspa-item-image-02'
                                }),
                                React.createElement(
                                  'div',
                                  { className: 'masspa-item-category-title-2', style: { color: '' + colorTitle } },
                                  item.title
                                )
                              )
                            ),
                            item.description !== null ? React.createElement('div', { className: 'masspa-item-category-text', dangerouslySetInnerHTML: { __html: '' + item.description } }) : React.createElement('div', null)
                          )
                        );
                      } else {
                        return React.createElement(
                          'div',
                          { className: 'ms-item-col-sm-12 ms-item-col-md-3 ms-item-col-lg-3', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-container' },
                            React.createElement(
                              'div',
                              { style: {
                                  width: sizeImage + 'px',
                                  height: sizeImage + 'px',
                                  borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  border: borderImage
                                },
                                className: 'masspa-item-link-03' },
                              React.createElement(
                                'span',
                                { className: 'masspa-item-category-overlay-2' },
                                React.createElement('img', { src: item.image, alt: item.title,
                                  style: {
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                  },
                                  className: 'masspa-item-image-02'
                                }),
                                React.createElement(
                                  'div',
                                  { className: 'masspa-item-category-title-2', style: { color: '' + colorTitle } },
                                  item.title
                                )
                              )
                            ),
                            item.description !== null ? React.createElement('div', { className: 'masspa-item-category-text', dangerouslySetInnerHTML: { __html: '' + item.description } }) : React.createElement('div', null)
                          )
                        );
                      }
                    } else {
                      if (animation === 'zoom') {
                        return React.createElement(
                          'div',
                          { className: 'ms-item-col-sm-12 ms-item-col-md-3 ms-item-col-lg-3', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-container' },
                            React.createElement(
                              'div',
                              { style: {
                                  width: sizeImage + 'px',
                                  height: sizeImage + 'px',
                                  borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  border: borderImage
                                },
                                className: 'masspa-item-link-03 masspa-item-category-zoom',
                                onClick: function onClick() {
                                  return _this2.handleClick(item.itemCode);
                                }
                              },
                              React.createElement('img', { src: item.image, alt: item.title,
                                style: {
                                  width: sizeImage + 'px',
                                  height: sizeImage + 'px',
                                  borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                },
                                className: 'masspa-item-image-01'
                              })
                            ),
                            React.createElement(
                              'div',
                              { className: 'masspa-item-category-title-1', style: { color: '' + colorTitle } },
                              item.title
                            ),
                            item.description !== null ? React.createElement('div', { className: 'masspa-item-category-text', dangerouslySetInnerHTML: { __html: '' + item.description } }) : React.createElement('div', null)
                          )
                        );
                      } else if (animation === 'rotate') {
                        return React.createElement(
                          'div',
                          { className: 'ms-item-col-sm-12 ms-item-col-md-3 ms-item-col-lg-3', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-container' },
                            React.createElement(
                              'div',
                              { style: {
                                  width: sizeImage + 'px',
                                  height: sizeImage + 'px',
                                  borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  border: borderImage
                                },
                                className: 'masspa-item-link-03 masspa-item-category-rotate',
                                onClick: function onClick() {
                                  return _this2.handleClick(item.itemCode);
                                }
                              },
                              React.createElement('img', { src: item.image, alt: item.title,
                                style: {
                                  width: sizeImage + 'px',
                                  height: sizeImage + 'px',
                                  borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                },
                                className: 'masspa-item-image-01'
                              })
                            ),
                            React.createElement(
                              'div',
                              { className: 'masspa-item-category-title-1', style: { color: '' + colorTitle } },
                              item.title
                            ),
                            item.description !== null ? React.createElement('div', { className: 'masspa-item-category-text', dangerouslySetInnerHTML: { __html: '' + item.description } }) : React.createElement('div', null)
                          )
                        );
                      } else {
                        return React.createElement(
                          'div',
                          { className: 'ms-item-col-sm-12 ms-item-col-md-3 ms-item-col-lg-3', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-container' },
                            React.createElement(
                              'div',
                              { style: {
                                  width: sizeImage + 'px',
                                  height: sizeImage + 'px',
                                  borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  border: borderImage
                                },
                                className: 'masspa-item-link-03',
                                onClick: function onClick() {
                                  return _this2.handleClick(item.itemCode);
                                }
                              },
                              React.createElement('img', { src: item.image, alt: item.title,
                                style: {
                                  width: sizeImage + 'px',
                                  height: sizeImage + 'px',
                                  borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius
                                },
                                className: 'masspa-item-image-01'
                              })
                            ),
                            React.createElement(
                              'div',
                              { className: 'masspa-item-category-title-1', style: { color: '' + colorTitle } },
                              item.title
                            ),
                            item.description !== null ? React.createElement('div', { className: 'masspa-item-category-text', dangerouslySetInnerHTML: { __html: '' + item.description } }) : React.createElement('div', null)
                          )
                        );
                      }
                    }
                  }
                }
              })
            );
          }
        } else {
          return React.createElement('div', null);
        }
      } else {
        return React.createElement('div', null);
      }
    }
  }]);
  return MasspaItemCategory;
}(Component);

MasspaItemCategory.propTypes = {
  listItems: PropTypes.array.isRequired,
  link: PropTypes.string.isRequired,
  sizeImage: PropTypes.number.isRequired,
  borderImage: PropTypes.string.isRequired,
  borderRadius: PropTypes.string.isRequired,
  mode: PropTypes.number.isRequired,
  animation: PropTypes.string.isRequired,
  layout: PropTypes.number.isRequired,
  colorTitle: PropTypes.string.isRequired
};


MasspaItemCategory.defaultProps = {
  listItems: [],
  link: '/category/?categoryId=',
  sizeImage: 140,
  borderImage: 'none',
  borderRadius: '49px 49px 49px 0',
  mode: 1,
  animation: 'zoom',
  layout: 1,
  colorTitle: "#fd7400"
};

export default MasspaItemCategory;
//# sourceMappingURL=index.es.js.map
