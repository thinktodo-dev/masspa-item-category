import React, { cloneElement, createContext, Component, createElement } from 'react';
import stream from 'stream';
import PropTypes from 'prop-types';
import reactDom from 'react-dom';

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

var css = "/* add css styles here (optional) */\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  font-family: sans-serif;\r\n  line-height: 1.15;\r\n  -webkit-text-size-adjust: 100%;\r\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\na{\r\n  text-decoration: unset;\r\n}\r\n\r\n.row {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n  flex-wrap: wrap;\r\n  margin-right: -15px;\r\n  margin-left: -15px;\r\n}\r\n\r\n.no-gutters {\r\n  margin-right: 0;\r\n  margin-left: 0;\r\n}\r\n\r\n.no-gutters > .col,\r\n.no-gutters > [class*=\"col-\"] {\r\n  padding-right: 0;\r\n  padding-left: 0;\r\n}\r\n\r\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\r\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\r\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\r\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\r\n.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\r\n.col-xl-auto {\r\n  position: relative;\r\n  width: 100%;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n}\r\n\r\n.col {\r\n  -ms-flex-preferred-size: 0;\r\n  flex-basis: 0;\r\n  -ms-flex-positive: 1;\r\n  flex-grow: 1;\r\n  max-width: 100%;\r\n}\r\n\r\n.col-auto {\r\n  -ms-flex: 0 0 auto;\r\n  flex: 0 0 auto;\r\n  width: auto;\r\n  max-width: 100%;\r\n}\r\n\r\n.col-1 {\r\n  -ms-flex: 0 0 8.333333%;\r\n  flex: 0 0 8.333333%;\r\n  max-width: 8.333333%;\r\n}\r\n\r\n.col-2 {\r\n  -ms-flex: 0 0 16.666667%;\r\n  flex: 0 0 16.666667%;\r\n  max-width: 16.666667%;\r\n}\r\n\r\n.col-3 {\r\n  -ms-flex: 0 0 25%;\r\n  flex: 0 0 25%;\r\n  max-width: 25%;\r\n}\r\n\r\n.col-4 {\r\n  -ms-flex: 0 0 33.333333%;\r\n  flex: 0 0 33.333333%;\r\n  max-width: 33.333333%;\r\n}\r\n\r\n.col-5 {\r\n  -ms-flex: 0 0 41.666667%;\r\n  flex: 0 0 41.666667%;\r\n  max-width: 41.666667%;\r\n}\r\n\r\n.col-6 {\r\n  -ms-flex: 0 0 50%;\r\n  flex: 0 0 50%;\r\n  max-width: 50%;\r\n}\r\n\r\n.col-7 {\r\n  -ms-flex: 0 0 58.333333%;\r\n  flex: 0 0 58.333333%;\r\n  max-width: 58.333333%;\r\n}\r\n\r\n.col-8 {\r\n  -ms-flex: 0 0 66.666667%;\r\n  flex: 0 0 66.666667%;\r\n  max-width: 66.666667%;\r\n}\r\n\r\n.col-9 {\r\n  -ms-flex: 0 0 75%;\r\n  flex: 0 0 75%;\r\n  max-width: 75%;\r\n}\r\n\r\n.col-10 {\r\n  -ms-flex: 0 0 83.333333%;\r\n  flex: 0 0 83.333333%;\r\n  max-width: 83.333333%;\r\n}\r\n\r\n.col-11 {\r\n  -ms-flex: 0 0 91.666667%;\r\n  flex: 0 0 91.666667%;\r\n  max-width: 91.666667%;\r\n}\r\n\r\n.col-12 {\r\n  -ms-flex: 0 0 100%;\r\n  flex: 0 0 100%;\r\n  max-width: 100%;\r\n}\r\n.w-100{\r\n  width: 100%;\r\n}\r\n\r\np{\r\n  margin:0px;\r\n}\r\n.masspa-item-category-title-3{font-size:22px;line-height:25px;font-weight:300;font-family:open sans,sans-serif; text-align: left; color: #000000;}\r\n\r\n.masspa-item-category-slide-container{\r\n  position: relative;\r\n}\r\n.masspa-item-category-container{\r\n  display: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n  align-items: center;\r\n  padding: 40px 0px;\r\n}\r\n\r\n.masspa-item-category-title-1{\r\n    color: #141517;\r\n    line-height: 22px;\r\n  \r\n    margin-bottom: 0;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n}\r\n.masspa-item-category-title-2{\r\n  color: #ffffff;\r\n  line-height: 22px;\r\n  margin-bottom: 0;\r\n  text-align: center;\r\n  font-weight: 400;\r\n  text-transform: uppercase;\r\n  height: 100%;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.masspa-item-category-text{\r\n  height: 78px;\r\n  overflow: hidden;\r\n}\r\n\r\n.masspa-item-category-text-layout02 p , .masspa-item-category-text-layout02 p span,  .masspa-item-category-text-layout02 span{\r\n  color: #2c2e3f !important;\r\n  font-family: sans-serif !important;\r\n  line-height: 1.625 !important;\r\n  height: 50px;\r\n  overflow: hidden;\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 2;\r\n  -webkit-box-orient: vertical;\r\n  text-overflow: ellipsis;\r\n  font-size: 15px;\r\n  padding: 0px;\r\n}\r\n\r\n.masspa-item-category-text p , .masspa-item-category-text p span,  .masspa-item-category-text span{\r\n  color: #2c2e3f !important;\r\n  font-family: sans-serif !important;\r\n  line-height: 1.625 !important;\r\n  height: 70px;\r\n  overflow: hidden;\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 3;\r\n  -webkit-box-orient: vertical;\r\n  text-overflow: ellipsis;\r\n  text-align: center;\r\n}\r\n\r\n.masspa-item-category-overlay-2{\r\n  position: absolute;\r\n  background-image:  linear-gradient(to bottom, rgba(255,0,0,0), rgba(40,40,40,1));\r\n  bottom: 0;\r\n  height: 40%;\r\n  width: inherit;\r\n  display: inline-block;\r\n}\r\n\r\n.masspa-item-category-zoom, .masspa-item-category-rotate{\r\n  -webkit-transition: all .5s;\r\n  -moz-transition: all .5s;\r\n  -o-transition: all .5s;\r\n  transition: all .5s;\r\n}\r\n.masspa-item-category-zoom:hover , .masspa-item-category-zoom:focus {\r\n  -ms-transform: scale(1.2);\r\n  -moz-transform: scale(1.2);\r\n  -webkit-transform: scale(1.2);\r\n  -o-transform: scale(1.2);\r\n  transform: scale(1.2);\r\n}\r\n\r\n.masspa-item-category-rotate:hover , .masspa-item-category-rotate:focus{\r\n  -ms-transform: rotate(360deg);\r\n  -moz-transform: rotate(360deg);\r\n  -webkit-transform: rotate(360deg);\r\n  -o-transform: rotate(360deg);\r\n  transform: rotate(360deg);\r\n}\r\n\r\n\r\n@media only screen and (min-width: 768px){\r\n  .masspa-item-category-text p , .masspa-item-category-text p span,  .masspa-item-category-text span {\r\n    font-size: 14px;\r\n  }\r\n  .masspa-item-category-title-1{\r\n    font-size: 18px;\r\n    padding: 30px 8px 5px;\r\n  }\r\n  .masspa-item-category-title-2{\r\n    font-size: 15px;\r\n    padding: 16px 8px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 767.98px) {\r\n  .masspa-item-category-title-1{\r\n    font-size: 20px;\r\n    padding: 30px 8px 5px;\r\n  }\r\n \r\n  .masspa-item-category-text p , .masspa-item-category-text p span,  .masspa-item-category-text span{\r\n    font-size: 14px;\r\n  }\r\n\r\n}\r\n\r\n@media only screen and (max-width: 767.98px) and (min-width: 457px){\r\n  .masspa-item-category-title-2{\r\n    font-size: 18px;\r\n    padding: 40px 15px 0px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 456.98px) {\r\n  .masspa-item-category-title-2{\r\n    font-size: 15px;\r\n    padding: 15px 15px 0px;\r\n  }\r\n  .masspa-item-category-text{\r\n    padding-top: 20px;\r\n  }\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .col-sm {\r\n    -ms-flex-preferred-size: 0;\r\n    flex-basis: 0;\r\n    -ms-flex-positive: 1;\r\n    flex-grow: 1;\r\n    max-width: 100%;\r\n  }\r\n  .col-sm-auto {\r\n    -ms-flex: 0 0 auto;\r\n    flex: 0 0 auto;\r\n    width: auto;\r\n    max-width: 100%;\r\n  }\r\n  .col-sm-1 {\r\n    -ms-flex: 0 0 8.333333%;\r\n    flex: 0 0 8.333333%;\r\n    max-width: 8.333333%;\r\n  }\r\n  .col-sm-2 {\r\n    -ms-flex: 0 0 16.666667%;\r\n    flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n  }\r\n  .col-sm-3 {\r\n    -ms-flex: 0 0 25%;\r\n    flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n  .col-sm-4 {\r\n    -ms-flex: 0 0 33.333333%;\r\n    flex: 0 0 33.333333%;\r\n    max-width: 33.333333%;\r\n  }\r\n  .col-sm-5 {\r\n    -ms-flex: 0 0 41.666667%;\r\n    flex: 0 0 41.666667%;\r\n    max-width: 41.666667%;\r\n  }\r\n  .col-sm-6 {\r\n    -ms-flex: 0 0 50%;\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n  .col-sm-7 {\r\n    -ms-flex: 0 0 58.333333%;\r\n    flex: 0 0 58.333333%;\r\n    max-width: 58.333333%;\r\n  }\r\n  .col-sm-8 {\r\n    -ms-flex: 0 0 66.666667%;\r\n    flex: 0 0 66.666667%;\r\n    max-width: 66.666667%;\r\n  }\r\n  .col-sm-9 {\r\n    -ms-flex: 0 0 75%;\r\n    flex: 0 0 75%;\r\n    max-width: 75%;\r\n  }\r\n  .col-sm-10 {\r\n    -ms-flex: 0 0 83.333333%;\r\n    flex: 0 0 83.333333%;\r\n    max-width: 83.333333%;\r\n  }\r\n  .col-sm-11 {\r\n    -ms-flex: 0 0 91.666667%;\r\n    flex: 0 0 91.666667%;\r\n    max-width: 91.666667%;\r\n  }\r\n  .col-sm-12 {\r\n    -ms-flex: 0 0 100%;\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .col-md {\r\n    -ms-flex-preferred-size: 0;\r\n    flex-basis: 0;\r\n    -ms-flex-positive: 1;\r\n    flex-grow: 1;\r\n    max-width: 100%;\r\n  }\r\n  .col-md-auto {\r\n    -ms-flex: 0 0 auto;\r\n    flex: 0 0 auto;\r\n    width: auto;\r\n    max-width: 100%;\r\n  }\r\n  .col-md-1 {\r\n    -ms-flex: 0 0 8.333333%;\r\n    flex: 0 0 8.333333%;\r\n    max-width: 8.333333%;\r\n  }\r\n  .col-md-2 {\r\n    -ms-flex: 0 0 16.666667%;\r\n    flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n  }\r\n  .col-md-3 {\r\n    -ms-flex: 0 0 25%;\r\n    flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n  .col-md-4 {\r\n    -ms-flex: 0 0 33.333333%;\r\n    flex: 0 0 33.333333%;\r\n    max-width: 33.333333%;\r\n  }\r\n  .col-md-5 {\r\n    -ms-flex: 0 0 41.666667%;\r\n    flex: 0 0 41.666667%;\r\n    max-width: 41.666667%;\r\n  }\r\n  .col-md-6 {\r\n    -ms-flex: 0 0 50%;\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n  .col-md-7 {\r\n    -ms-flex: 0 0 58.333333%;\r\n    flex: 0 0 58.333333%;\r\n    max-width: 58.333333%;\r\n  }\r\n  .col-md-8 {\r\n    -ms-flex: 0 0 66.666667%;\r\n    flex: 0 0 66.666667%;\r\n    max-width: 66.666667%;\r\n  }\r\n  .col-md-9 {\r\n    -ms-flex: 0 0 75%;\r\n    flex: 0 0 75%;\r\n    max-width: 75%;\r\n  }\r\n  .col-md-10 {\r\n    -ms-flex: 0 0 83.333333%;\r\n    flex: 0 0 83.333333%;\r\n    max-width: 83.333333%;\r\n  }\r\n  .col-md-11 {\r\n    -ms-flex: 0 0 91.666667%;\r\n    flex: 0 0 91.666667%;\r\n    max-width: 91.666667%;\r\n  }\r\n  .col-md-12 {\r\n    -ms-flex: 0 0 100%;\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n}\r\n@media (min-width: 992px) {\r\n  .col-lg {\r\n    -ms-flex-preferred-size: 0;\r\n    flex-basis: 0;\r\n    -ms-flex-positive: 1;\r\n    flex-grow: 1;\r\n    max-width: 100%;\r\n  }\r\n  .col-lg-auto {\r\n    -ms-flex: 0 0 auto;\r\n    flex: 0 0 auto;\r\n    width: auto;\r\n    max-width: 100%;\r\n  }\r\n  .col-lg-1 {\r\n    -ms-flex: 0 0 8.333333%;\r\n    flex: 0 0 8.333333%;\r\n    max-width: 8.333333%;\r\n  }\r\n  .col-lg-2 {\r\n    -ms-flex: 0 0 16.666667%;\r\n    flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n  }\r\n  .col-lg-3 {\r\n    -ms-flex: 0 0 25%;\r\n    flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n  .col-lg-4 {\r\n    -ms-flex: 0 0 33.333333%;\r\n    flex: 0 0 33.333333%;\r\n    max-width: 33.333333%;\r\n  }\r\n  .col-lg-5 {\r\n    -ms-flex: 0 0 41.666667%;\r\n    flex: 0 0 41.666667%;\r\n    max-width: 41.666667%;\r\n  }\r\n  .col-lg-6 {\r\n    -ms-flex: 0 0 50%;\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n  .col-lg-7 {\r\n    -ms-flex: 0 0 58.333333%;\r\n    flex: 0 0 58.333333%;\r\n    max-width: 58.333333%;\r\n  }\r\n  .col-lg-8 {\r\n    -ms-flex: 0 0 66.666667%;\r\n    flex: 0 0 66.666667%;\r\n    max-width: 66.666667%;\r\n  }\r\n  .col-lg-9 {\r\n    -ms-flex: 0 0 75%;\r\n    flex: 0 0 75%;\r\n    max-width: 75%;\r\n  }\r\n  .col-lg-10 {\r\n    -ms-flex: 0 0 83.333333%;\r\n    flex: 0 0 83.333333%;\r\n    max-width: 83.333333%;\r\n  }\r\n  .col-lg-11 {\r\n    -ms-flex: 0 0 91.666667%;\r\n    flex: 0 0 91.666667%;\r\n    max-width: 91.666667%;\r\n  }\r\n  .col-lg-12 {\r\n    -ms-flex: 0 0 100%;\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .col-xl {\r\n    -ms-flex-preferred-size: 0;\r\n    flex-basis: 0;\r\n    -ms-flex-positive: 1;\r\n    flex-grow: 1;\r\n    max-width: 100%;\r\n  }\r\n  .col-xl-auto {\r\n    -ms-flex: 0 0 auto;\r\n    flex: 0 0 auto;\r\n    width: auto;\r\n    max-width: 100%;\r\n  }\r\n  .col-xl-1 {\r\n    -ms-flex: 0 0 8.333333%;\r\n    flex: 0 0 8.333333%;\r\n    max-width: 8.333333%;\r\n  }\r\n  .col-xl-2 {\r\n    -ms-flex: 0 0 16.666667%;\r\n    flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n  }\r\n  .col-xl-3 {\r\n    -ms-flex: 0 0 25%;\r\n    flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n  .col-xl-4 {\r\n    -ms-flex: 0 0 33.333333%;\r\n    flex: 0 0 33.333333%;\r\n    max-width: 33.333333%;\r\n  }\r\n  .col-xl-5 {\r\n    -ms-flex: 0 0 41.666667%;\r\n    flex: 0 0 41.666667%;\r\n    max-width: 41.666667%;\r\n  }\r\n  .col-xl-6 {\r\n    -ms-flex: 0 0 50%;\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n  .col-xl-7 {\r\n    -ms-flex: 0 0 58.333333%;\r\n    flex: 0 0 58.333333%;\r\n    max-width: 58.333333%;\r\n  }\r\n  .col-xl-8 {\r\n    -ms-flex: 0 0 66.666667%;\r\n    flex: 0 0 66.666667%;\r\n    max-width: 66.666667%;\r\n  }\r\n  .col-xl-9 {\r\n    -ms-flex: 0 0 75%;\r\n    flex: 0 0 75%;\r\n    max-width: 75%;\r\n  }\r\n  .col-xl-10 {\r\n    -ms-flex: 0 0 83.333333%;\r\n    flex: 0 0 83.333333%;\r\n    max-width: 83.333333%;\r\n  }\r\n  .col-xl-11 {\r\n    -ms-flex: 0 0 91.666667%;\r\n    flex: 0 0 91.666667%;\r\n    max-width: 91.666667%;\r\n  }\r\n  .col-xl-12 {\r\n    -ms-flex: 0 0 100%;\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n}\r\n\r\n@media screen and (min-width:992px){\r\n  .masspa-item-category-group-title-text{\r\n    padding-left: 0px;\r\n  }\r\n}\r\n@media screen  and (min-width:576px) and (max-width:991px){\r\n  .masspa-item-category-group-title-text{\r\n    padding-left: 30px;\r\n  }\r\n}\r\n\r\n@media screen  and (min-width:480px) and (max-width:575.98px){\r\n  .masspa-item-category-group-title-text{\r\n    padding-left: 0px;\r\n  }\r\n}\r\n\r\n@media screen  and (max-width:479.98px){\r\n  .masspa-item-category-group-title-text{\r\n    padding-left: 0px;\r\n    padding-top: 20px;\r\n    text-align: center;\r\n  }\r\n  .masspa-item-category-text-layout02{\r\n    padding-top: 20px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 240px) and (max-width:767.98px) {\r\n .col-xs-6{flex:0 0 100%;max-width:100%}\r\n  }\r\n\r\n  @media screen and (min-width: 1024px) {\r\n    .col-xs-6{flex:0 0 50%!important;max-width:50%!important}\r\n  }\r\n \r\n  @media screen and (min-width: 240px) {\r\n      .masspa-item-category-card{padding:15px 0}\r\n      .masspa-item-category-card{display:flex;flex-direction:column;justify-content:center;align-items:center}\r\n  }\r\n\r\n  @media screen and (min-width: 480px) {\r\n    .masspa-item-category-card{display:flex;flex-direction:row;justify-content:unset}\r\n  }";
styleInject(css);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var stylis_min = createCommonjsModule(function (module, exports) {
!function(e){module.exports=e(null);}(function e(a){var r=/^\0+/g,c=/[\0\r\f]/g,s=/: */g,t=/zoo|gra/,i=/([,: ])(transform)/g,f=/,+\s*(?![^(]*[)])/g,n=/ +\s*(?![^(]*[)])/g,l=/ *[\0] */g,o=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,u=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,d=/\W+/g,b=/@(k\w+)\s*(\S*)\s*/,p=/::(place)/g,k=/:(read-only)/g,g=/\s+(?=[{\];=:>])/g,A=/([[}=:>])\s+/g,C=/(\{[^{]+?);(?=\})/g,w=/\s{2,}/g,v=/([^\(])(:+) */g,m=/[svh]\w+-[tblr]{2}/,x=/\(\s*(.*)\s*\)/g,$=/([\s\S]*?);/g,y=/-self|flex-/g,O=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,z=/([^-])(image-set\()/,N="-webkit-",S="-moz-",F="-ms-",W=59,q=125,B=123,D=40,E=41,G=91,H=93,I=10,J=13,K=9,L=64,M=32,P=38,Q=45,R=95,T=42,U=44,V=58,X=39,Y=34,Z=47,_=62,ee=43,ae=126,re=0,ce=12,se=11,te=107,ie=109,fe=115,ne=112,le=111,oe=105,he=99,ue=100,de=112,be=1,pe=1,ke=0,ge=1,Ae=1,Ce=1,we=0,ve=0,me=0,xe=[],$e=[],ye=0,Oe=null,je=-2,ze=-1,Ne=0,Se=1,Fe=2,We=3,qe=0,Be=1,De="",Ee="",Ge="";function He(e,a,s,t,i){for(var f,n,o=0,h=0,u=0,d=0,g=0,A=0,C=0,w=0,m=0,$=0,y=0,O=0,j=0,z=0,R=0,we=0,$e=0,Oe=0,je=0,ze=s.length,Je=ze-1,Re="",Te="",Ue="",Ve="",Xe="",Ye="";R<ze;){if(C=s.charCodeAt(R),R===Je)if(h+d+u+o!==0){if(0!==h)C=h===Z?I:Z;d=u=o=0,ze++,Je++;}if(h+d+u+o===0){if(R===Je){if(we>0)Te=Te.replace(c,"");if(Te.trim().length>0){switch(C){case M:case K:case W:case J:case I:break;default:Te+=s.charAt(R);}C=W;}}if(1===$e)switch(C){case B:case q:case W:case Y:case X:case D:case E:case U:$e=0;case K:case J:case I:case M:break;default:for($e=0,je=R,g=C,R--,C=W;je<ze;)switch(s.charCodeAt(je++)){case I:case J:case W:++R,C=g,je=ze;break;case V:if(we>0)++R,C=g;case B:je=ze;}}switch(C){case B:for(g=(Te=Te.trim()).charCodeAt(0),y=1,je=++R;R<ze;){switch(C=s.charCodeAt(R)){case B:y++;break;case q:y--;break;case Z:switch(A=s.charCodeAt(R+1)){case T:case Z:R=Qe(A,R,Je,s);}break;case G:C++;case D:C++;case Y:case X:for(;R++<Je&&s.charCodeAt(R)!==C;);}if(0===y)break;R++;}if(Ue=s.substring(je,R),g===re)g=(Te=Te.replace(r,"").trim()).charCodeAt(0);switch(g){case L:if(we>0)Te=Te.replace(c,"");switch(A=Te.charCodeAt(1)){case ue:case ie:case fe:case Q:f=a;break;default:f=xe;}if(je=(Ue=He(a,f,Ue,A,i+1)).length,me>0&&0===je)je=Te.length;if(ye>0)if(f=Ie(xe,Te,Oe),n=Pe(We,Ue,f,a,pe,be,je,A,i,t),Te=f.join(""),void 0!==n)if(0===(je=(Ue=n.trim()).length))A=0,Ue="";if(je>0)switch(A){case fe:Te=Te.replace(x,Me);case ue:case ie:case Q:Ue=Te+"{"+Ue+"}";break;case te:if(Ue=(Te=Te.replace(b,"$1 $2"+(Be>0?De:"")))+"{"+Ue+"}",1===Ae||2===Ae&&Le("@"+Ue,3))Ue="@"+N+Ue+"@"+Ue;else Ue="@"+Ue;break;default:if(Ue=Te+Ue,t===de)Ve+=Ue,Ue="";}else Ue="";break;default:Ue=He(a,Ie(a,Te,Oe),Ue,t,i+1);}Xe+=Ue,O=0,$e=0,z=0,we=0,Oe=0,j=0,Te="",Ue="",C=s.charCodeAt(++R);break;case q:case W:if((je=(Te=(we>0?Te.replace(c,""):Te).trim()).length)>1){if(0===z)if((g=Te.charCodeAt(0))===Q||g>96&&g<123)je=(Te=Te.replace(" ",":")).length;if(ye>0)if(void 0!==(n=Pe(Se,Te,a,e,pe,be,Ve.length,t,i,t)))if(0===(je=(Te=n.trim()).length))Te="\0\0";switch(g=Te.charCodeAt(0),A=Te.charCodeAt(1),g){case re:break;case L:if(A===oe||A===he){Ye+=Te+s.charAt(R);break}default:if(Te.charCodeAt(je-1)===V)break;Ve+=Ke(Te,g,A,Te.charCodeAt(2));}}O=0,$e=0,z=0,we=0,Oe=0,Te="",C=s.charCodeAt(++R);}}switch(C){case J:case I:if(h+d+u+o+ve===0)switch($){case E:case X:case Y:case L:case ae:case _:case T:case ee:case Z:case Q:case V:case U:case W:case B:case q:break;default:if(z>0)$e=1;}if(h===Z)h=0;else if(ge+O===0&&t!==te&&Te.length>0)we=1,Te+="\0";if(ye*qe>0)Pe(Ne,Te,a,e,pe,be,Ve.length,t,i,t);be=1,pe++;break;case W:case q:if(h+d+u+o===0){be++;break}default:switch(be++,Re=s.charAt(R),C){case K:case M:if(d+o+h===0)switch(w){case U:case V:case K:case M:Re="";break;default:if(C!==M)Re=" ";}break;case re:Re="\\0";break;case ce:Re="\\f";break;case se:Re="\\v";break;case P:if(d+h+o===0&&ge>0)Oe=1,we=1,Re="\f"+Re;break;case 108:if(d+h+o+ke===0&&z>0)switch(R-z){case 2:if(w===ne&&s.charCodeAt(R-3)===V)ke=w;case 8:if(m===le)ke=m;}break;case V:if(d+h+o===0)z=R;break;case U:if(h+u+d+o===0)we=1,Re+="\r";break;case Y:case X:if(0===h)d=d===C?0:0===d?C:d;break;case G:if(d+h+u===0)o++;break;case H:if(d+h+u===0)o--;break;case E:if(d+h+o===0)u--;break;case D:if(d+h+o===0){if(0===O)switch(2*w+3*m){case 533:break;default:y=0,O=1;}u++;}break;case L:if(h+u+d+o+z+j===0)j=1;break;case T:case Z:if(d+o+u>0)break;switch(h){case 0:switch(2*C+3*s.charCodeAt(R+1)){case 235:h=Z;break;case 220:je=R,h=T;}break;case T:if(C===Z&&w===T&&je+2!==R){if(33===s.charCodeAt(je+2))Ve+=s.substring(je,R+1);Re="",h=0;}}}if(0===h){if(ge+d+o+j===0&&t!==te&&C!==W)switch(C){case U:case ae:case _:case ee:case E:case D:if(0===O){switch(w){case K:case M:case I:case J:Re+="\0";break;default:Re="\0"+Re+(C===U?"":"\0");}we=1;}else switch(C){case D:if(z+7===R&&108===w)z=0;O=++y;break;case E:if(0==(O=--y))we=1,Re+="\0";}break;case K:case M:switch(w){case re:case B:case q:case W:case U:case ce:case K:case M:case I:case J:break;default:if(0===O)we=1,Re+="\0";}}if(Te+=Re,C!==M&&C!==K)$=C;}}m=w,w=C,R++;}if(je=Ve.length,me>0)if(0===je&&0===Xe.length&&0===a[0].length==false)if(t!==ie||1===a.length&&(ge>0?Ee:Ge)===a[0])je=a.join(",").length+2;if(je>0){if(f=0===ge&&t!==te?function(e){for(var a,r,s=0,t=e.length,i=Array(t);s<t;++s){for(var f=e[s].split(l),n="",o=0,h=0,u=0,d=0,b=f.length;o<b;++o){if(0===(h=(r=f[o]).length)&&b>1)continue;if(u=n.charCodeAt(n.length-1),d=r.charCodeAt(0),a="",0!==o)switch(u){case T:case ae:case _:case ee:case M:case D:break;default:a=" ";}switch(d){case P:r=a+Ee;case ae:case _:case ee:case M:case E:case D:break;case G:r=a+r+Ee;break;case V:switch(2*r.charCodeAt(1)+3*r.charCodeAt(2)){case 530:if(Ce>0){r=a+r.substring(8,h-1);break}default:if(o<1||f[o-1].length<1)r=a+Ee+r;}break;case U:a="";default:if(h>1&&r.indexOf(":")>0)r=a+r.replace(v,"$1"+Ee+"$2");else r=a+r+Ee;}n+=r;}i[s]=n.replace(c,"").trim();}return i}(a):a,ye>0)if(void 0!==(n=Pe(Fe,Ve,f,e,pe,be,je,t,i,t))&&0===(Ve=n).length)return Ye+Ve+Xe;if(Ve=f.join(",")+"{"+Ve+"}",Ae*ke!=0){if(2===Ae&&!Le(Ve,2))ke=0;switch(ke){case le:Ve=Ve.replace(k,":"+S+"$1")+Ve;break;case ne:Ve=Ve.replace(p,"::"+N+"input-$1")+Ve.replace(p,"::"+S+"$1")+Ve.replace(p,":"+F+"input-$1")+Ve;}ke=0;}}return Ye+Ve+Xe}function Ie(e,a,r){var c=a.trim().split(o),s=c,t=c.length,i=e.length;switch(i){case 0:case 1:for(var f=0,n=0===i?"":e[0]+" ";f<t;++f)s[f]=Je(n,s[f],r,i).trim();break;default:f=0;var l=0;for(s=[];f<t;++f)for(var h=0;h<i;++h)s[l++]=Je(e[h]+" ",c[f],r,i).trim();}return s}function Je(e,a,r,c){var s=a,t=s.charCodeAt(0);if(t<33)t=(s=s.trim()).charCodeAt(0);switch(t){case P:switch(ge+c){case 0:case 1:if(0===e.trim().length)break;default:return s.replace(h,"$1"+e.trim())}break;case V:switch(s.charCodeAt(1)){case 103:if(Ce>0&&ge>0)return s.replace(u,"$1").replace(h,"$1"+Ge);break;default:return e.trim()+s.replace(h,"$1"+e.trim())}default:if(r*ge>0&&s.indexOf("\f")>0)return s.replace(h,(e.charCodeAt(0)===V?"":"$1")+e.trim())}return e+s}function Ke(e,a,r,c){var l,o=0,h=e+";",u=2*a+3*r+4*c;if(944===u)return function(e){var a=e.length,r=e.indexOf(":",9)+1,c=e.substring(0,r).trim(),s=e.substring(r,a-1).trim();switch(e.charCodeAt(9)*Be){case 0:break;case Q:if(110!==e.charCodeAt(10))break;default:for(var t=s.split((s="",f)),i=0,r=0,a=t.length;i<a;r=0,++i){for(var l=t[i],o=l.split(n);l=o[r];){var h=l.charCodeAt(0);if(1===Be&&(h>L&&h<90||h>96&&h<123||h===R||h===Q&&l.charCodeAt(1)!==Q))switch(isNaN(parseFloat(l))+(-1!==l.indexOf("("))){case 1:switch(l){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:l+=De;}}o[r++]=l;}s+=(0===i?"":",")+o.join(" ");}}if(s=c+s+";",1===Ae||2===Ae&&Le(s,1))return N+s+s;return s}(h);else if(0===Ae||2===Ae&&!Le(h,1))return h;switch(u){case 1015:return 97===h.charCodeAt(10)?N+h+h:h;case 951:return 116===h.charCodeAt(3)?N+h+h:h;case 963:return 110===h.charCodeAt(5)?N+h+h:h;case 1009:if(100!==h.charCodeAt(4))break;case 969:case 942:return N+h+h;case 978:return N+h+S+h+h;case 1019:case 983:return N+h+S+h+F+h+h;case 883:if(h.charCodeAt(8)===Q)return N+h+h;if(h.indexOf("image-set(",11)>0)return h.replace(z,"$1"+N+"$2")+h;return h;case 932:if(h.charCodeAt(4)===Q)switch(h.charCodeAt(5)){case 103:return N+"box-"+h.replace("-grow","")+N+h+F+h.replace("grow","positive")+h;case 115:return N+h+F+h.replace("shrink","negative")+h;case 98:return N+h+F+h.replace("basis","preferred-size")+h}return N+h+F+h+h;case 964:return N+h+F+"flex-"+h+h;case 1023:if(99!==h.charCodeAt(8))break;return l=h.substring(h.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),N+"box-pack"+l+N+h+F+"flex-pack"+l+h;case 1005:return t.test(h)?h.replace(s,":"+N)+h.replace(s,":"+S)+h:h;case 1e3:switch(o=(l=h.substring(13).trim()).indexOf("-")+1,l.charCodeAt(0)+l.charCodeAt(o)){case 226:l=h.replace(m,"tb");break;case 232:l=h.replace(m,"tb-rl");break;case 220:l=h.replace(m,"lr");break;default:return h}return N+h+F+l+h;case 1017:if(-1===h.indexOf("sticky",9))return h;case 975:switch(o=(h=e).length-10,u=(l=(33===h.charCodeAt(o)?h.substring(0,o):h).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|l.charCodeAt(7))){case 203:if(l.charCodeAt(8)<111)break;case 115:h=h.replace(l,N+l)+";"+h;break;case 207:case 102:h=h.replace(l,N+(u>102?"inline-":"")+"box")+";"+h.replace(l,N+l)+";"+h.replace(l,F+l+"box")+";"+h;}return h+";";case 938:if(h.charCodeAt(5)===Q)switch(h.charCodeAt(6)){case 105:return l=h.replace("-items",""),N+h+N+"box-"+l+F+"flex-"+l+h;case 115:return N+h+F+"flex-item-"+h.replace(y,"")+h;default:return N+h+F+"flex-line-pack"+h.replace("align-content","").replace(y,"")+h}break;case 973:case 989:if(h.charCodeAt(3)!==Q||122===h.charCodeAt(4))break;case 931:case 953:if(true===j.test(e))if(115===(l=e.substring(e.indexOf(":")+1)).charCodeAt(0))return Ke(e.replace("stretch","fill-available"),a,r,c).replace(":fill-available",":stretch");else return h.replace(l,N+l)+h.replace(l,S+l.replace("fill-",""))+h;break;case 962:if(h=N+h+(102===h.charCodeAt(5)?F+h:"")+h,r+c===211&&105===h.charCodeAt(13)&&h.indexOf("transform",10)>0)return h.substring(0,h.indexOf(";",27)+1).replace(i,"$1"+N+"$2")+h}return h}function Le(e,a){var r=e.indexOf(1===a?":":"{"),c=e.substring(0,3!==a?r:10),s=e.substring(r+1,e.length-1);return Oe(2!==a?c:c.replace(O,"$1"),s,a)}function Me(e,a){var r=Ke(a,a.charCodeAt(0),a.charCodeAt(1),a.charCodeAt(2));return r!==a+";"?r.replace($," or ($1)").substring(4):"("+a+")"}function Pe(e,a,r,c,s,t,i,f,n,l){for(var o,h=0,u=a;h<ye;++h)switch(o=$e[h].call(Te,e,u,r,c,s,t,i,f,n,l)){case void 0:case false:case true:case null:break;default:u=o;}if(u!==a)return u}function Qe(e,a,r,c){for(var s=a+1;s<r;++s)switch(c.charCodeAt(s)){case Z:if(e===T)if(c.charCodeAt(s-1)===T&&a+2!==s)return s+1;break;case I:if(e===Z)return s+1}return s}function Re(e){for(var a in e){var r=e[a];switch(a){case"keyframe":Be=0|r;break;case"global":Ce=0|r;break;case"cascade":ge=0|r;break;case"compress":we=0|r;break;case"semicolon":ve=0|r;break;case"preserve":me=0|r;break;case"prefix":if(Oe=null,!r)Ae=0;else if("function"!=typeof r)Ae=1;else Ae=2,Oe=r;}}return Re}function Te(a,r){if(void 0!==this&&this.constructor===Te)return e(a);var s=a,t=s.charCodeAt(0);if(t<33)t=(s=s.trim()).charCodeAt(0);if(Be>0)De=s.replace(d,t===G?"":"-");if(t=1,1===ge)Ge=s;else Ee=s;var i,f=[Ge];if(ye>0)if(void 0!==(i=Pe(ze,r,f,f,pe,be,0,0,0,0))&&"string"==typeof i)r=i;var n=He(xe,f,r,0,0);if(ye>0)if(void 0!==(i=Pe(je,n,f,f,pe,be,n.length,0,0,0))&&"string"!=typeof(n=i))t=0;return De="",Ge="",Ee="",ke=0,pe=1,be=1,we*t==0?n:n.replace(c,"").replace(g,"").replace(A,"$1").replace(C,"$1").replace(w," ")}if(Te.use=function e(a){switch(a){case void 0:case null:ye=$e.length=0;break;default:if("function"==typeof a)$e[ye++]=a;else if("object"==typeof a)for(var r=0,c=a.length;r<c;++r)e(a[r]);else qe=0|!!a;}return e},Te.set=Re,void 0!==a)Re(a);return Te});

});

var stylisRuleSheet = createCommonjsModule(function (module, exports) {
(function (factory) {
	module['exports'] = factory();
}(function () {

	return function (insertRule) {
		var delimiter = '/*|*/';
		var needle = delimiter+'}';

		function toSheet (block) {
			if (block)
				try {
					insertRule(block + '}');
				} catch (e) {}
		}

		return function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {
			switch (context) {
				// property
				case 1:
					// @import
					if (depth === 0 && content.charCodeAt(0) === 64)
						return insertRule(content+';'), ''
					break
				// selector
				case 2:
					if (ns === 0)
						return content + delimiter
					break
				// at-rule
				case 3:
					switch (ns) {
						// @font-face, @page
						case 102:
						case 112:
							return insertRule(selectors[0]+content), ''
						default:
							return content + (at === 0 ? delimiter : '')
					}
				case -2:
					content.split(needle).forEach(toSheet);
			}
		}
	}
}));
});

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

var reactIs_production_min = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):
60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.fundamental"):60117,w=b?Symbol.for("react.responder"):60118,x=b?Symbol.for("react.scope"):60119;function y(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case t:case r:case d:return u}}}function z(a){return y(a)===m}
exports.typeOf=y;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;
exports.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===v||a.$$typeof===w||a.$$typeof===x)};exports.isAsyncMode=function(a){return z(a)||y(a)===l};exports.isConcurrentMode=z;exports.isContextConsumer=function(a){return y(a)===k};exports.isContextProvider=function(a){return y(a)===h};
exports.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return y(a)===n};exports.isFragment=function(a){return y(a)===e};exports.isLazy=function(a){return y(a)===t};exports.isMemo=function(a){return y(a)===r};exports.isPortal=function(a){return y(a)===d};exports.isProfiler=function(a){return y(a)===g};exports.isStrictMode=function(a){return y(a)===f};exports.isSuspense=function(a){return y(a)===p};
});

unwrapExports(reactIs_production_min);
var reactIs_production_min_1 = reactIs_production_min.typeOf;
var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
var reactIs_production_min_6 = reactIs_production_min.Element;
var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
var reactIs_production_min_8 = reactIs_production_min.Fragment;
var reactIs_production_min_9 = reactIs_production_min.Lazy;
var reactIs_production_min_10 = reactIs_production_min.Memo;
var reactIs_production_min_11 = reactIs_production_min.Portal;
var reactIs_production_min_12 = reactIs_production_min.Profiler;
var reactIs_production_min_13 = reactIs_production_min.StrictMode;
var reactIs_production_min_14 = reactIs_production_min.Suspense;
var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
var reactIs_production_min_20 = reactIs_production_min.isElement;
var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
var reactIs_production_min_22 = reactIs_production_min.isFragment;
var reactIs_production_min_23 = reactIs_production_min.isLazy;
var reactIs_production_min_24 = reactIs_production_min.isMemo;
var reactIs_production_min_25 = reactIs_production_min.isPortal;
var reactIs_production_min_26 = reactIs_production_min.isProfiler;
var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
var reactIs_production_min_28 = reactIs_production_min.isSuspense;

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var lowPriorityWarningWithoutStack = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.warn(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarningWithoutStack = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(void 0, [format].concat(args));
    }
  };
}

var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarningWithoutStack$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}
});

unwrapExports(reactIs_development);
var reactIs_development_1 = reactIs_development.typeOf;
var reactIs_development_2 = reactIs_development.AsyncMode;
var reactIs_development_3 = reactIs_development.ConcurrentMode;
var reactIs_development_4 = reactIs_development.ContextConsumer;
var reactIs_development_5 = reactIs_development.ContextProvider;
var reactIs_development_6 = reactIs_development.Element;
var reactIs_development_7 = reactIs_development.ForwardRef;
var reactIs_development_8 = reactIs_development.Fragment;
var reactIs_development_9 = reactIs_development.Lazy;
var reactIs_development_10 = reactIs_development.Memo;
var reactIs_development_11 = reactIs_development.Portal;
var reactIs_development_12 = reactIs_development.Profiler;
var reactIs_development_13 = reactIs_development.StrictMode;
var reactIs_development_14 = reactIs_development.Suspense;
var reactIs_development_15 = reactIs_development.isValidElementType;
var reactIs_development_16 = reactIs_development.isAsyncMode;
var reactIs_development_17 = reactIs_development.isConcurrentMode;
var reactIs_development_18 = reactIs_development.isContextConsumer;
var reactIs_development_19 = reactIs_development.isContextProvider;
var reactIs_development_20 = reactIs_development.isElement;
var reactIs_development_21 = reactIs_development.isForwardRef;
var reactIs_development_22 = reactIs_development.isFragment;
var reactIs_development_23 = reactIs_development.isLazy;
var reactIs_development_24 = reactIs_development.isMemo;
var reactIs_development_25 = reactIs_development.isPortal;
var reactIs_development_26 = reactIs_development.isProfiler;
var reactIs_development_27 = reactIs_development.isStrictMode;
var reactIs_development_28 = reactIs_development.isSuspense;

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});
var reactIs_1 = reactIs.isElement;
var reactIs_2 = reactIs.isValidElementType;
var reactIs_3 = reactIs.ForwardRef;

function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (newInputs[i] !== lastInputs[i]) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/**
 * Returns the object type of the given payload
 *
 * @param {*} payload
 * @returns {string}
 */
function getType(payload) {
    return Object.prototype.toString.call(payload).slice(8, -1);
}
/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is {[key: string]: any}}
 */
function isPlainObject(payload) {
    if (getType(payload) !== 'Object')
        return false;
    return (payload.constructor === Object && Object.getPrototypeOf(payload) === Object.prototype);
}
/**
 * Returns whether the payload is an array
 *
 * @param {*} payload
 * @returns {payload is undefined}
 */
function isArray(payload) {
    return getType(payload) === 'Array';
}
/**
 * Returns whether the payload is a Symbol
 *
 * @param {*} payload
 * @returns {payload is symbol}
 */
function isSymbol(payload) {
    return (getType(payload) === 'Symbol');
}

function assignProp(carry, key, newVal, originalObject) {
    var propType = originalObject.propertyIsEnumerable(key)
        ? 'enumerable'
        : 'nonenumerable';
    if (propType === 'enumerable')
        carry[key] = newVal;
    if (propType === 'nonenumerable') {
        Object.defineProperty(carry, key, {
            value: newVal,
            enumerable: false,
            writable: true,
            configurable: true
        });
    }
}
function mergeRecursively(origin, newComer, extensions) {
    // work directly on newComer if its not an object
    if (!isPlainObject(newComer)) {
        // extend merge rules
        if (extensions && isArray(extensions)) {
            extensions.forEach(function (extend) {
                newComer = extend(origin, newComer);
            });
        }
        return newComer;
    }
    // define newObject to merge all values upon
    var newObject = {};
    if (isPlainObject(origin)) {
        var props_1 = Object.getOwnPropertyNames(origin);
        var symbols_1 = Object.getOwnPropertySymbols(origin);
        newObject = props_1.concat(symbols_1).reduce(function (carry, key) {
            // @ts-ignore
            var targetVal = origin[key];
            if ((!isSymbol(key) && !Object.getOwnPropertyNames(newComer).includes(key)) ||
                (isSymbol(key) && !Object.getOwnPropertySymbols(newComer).includes(key))) {
                assignProp(carry, key, targetVal, origin);
            }
            return carry;
        }, {});
    }
    var props = Object.getOwnPropertyNames(newComer);
    var symbols = Object.getOwnPropertySymbols(newComer);
    var result = props.concat(symbols).reduce(function (carry, key) {
        // re-define the origin and newComer as targetVal and newVal
        var newVal = newComer[key];
        var targetVal = (isPlainObject(origin))
            // @ts-ignore
            ? origin[key]
            : undefined;
        // extend merge rules
        if (extensions && isArray(extensions)) {
            extensions.forEach(function (extend) {
                newVal = extend(targetVal, newVal);
            });
        }
        // When newVal is an object do the merge recursively
        if (targetVal !== undefined && isPlainObject(newVal)) {
            newVal = mergeRecursively(targetVal, newVal, extensions);
        }
        assignProp(carry, key, newVal, newComer);
        return carry;
    }, newObject);
    return result;
}
/**
 * Merge anything recursively.
 * Objects get merged, special objects (classes etc.) are re-assigned "as is".
 * Basic types overwrite objects or other basic types.
 *
 * @param {(IConfig | any)} origin
 * @param {...any[]} newComers
 * @returns the result
 */
function merge(origin) {
    var newComers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        newComers[_i - 1] = arguments[_i];
    }
    var extensions = null;
    var base = origin;
    if (isPlainObject(origin) && origin.extensions && Object.keys(origin).length === 1) {
        base = {};
        extensions = origin.extensions;
    }
    return newComers.reduce(function (result, newComer) {
        return mergeRecursively(result, newComer, extensions);
    }, base);
}

// 

var interleave = (function (strings, interpolations) {
  var result = [strings[0]];

  for (var i = 0, len = interpolations.length; i < len; i += 1) {
    result.push(interpolations[i], strings[i + 1]);
  }

  return result;
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
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

var _extends = Object.assign || function (target) {
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

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

// 
var isPlainObject$1 = (function (x) {
  return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x.constructor === Object;
});

// 
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});

// 
function isFunction$1(test) {
  return typeof test === 'function';
}

// 

function getComponentName(target) {
  return (process.env.NODE_ENV !== 'production' ? typeof target === 'string' && target : false) || target.displayName || target.name || 'Component';
}

// 
function isStatelessFunction(test) {
  return typeof test === 'function' && !(test.prototype && test.prototype.isReactComponent);
}

// 
function isStyledComponent(target) {
  return target && typeof target.styledComponentId === 'string';
}

// 

var SC_ATTR = typeof process !== 'undefined' && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || 'data-styled';

var SC_VERSION_ATTR = 'data-styled-version';

var SC_STREAM_ATTR = 'data-styled-streamed';

var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;

var DISABLE_SPEEDY = typeof SC_DISABLE_SPEEDY === 'boolean' && SC_DISABLE_SPEEDY || typeof process !== 'undefined' && (process.env.REACT_APP_SC_DISABLE_SPEEDY || process.env.SC_DISABLE_SPEEDY) || process.env.NODE_ENV !== 'production';

// 


/**
 * Parse errors.md and turn it into a simple hash of code: message
 */
var ERRORS = process.env.NODE_ENV !== 'production' ? {
  "1": "Cannot create styled-component for component: %s.\n\n",
  "2": "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
  "3": "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
  "4": "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
  "5": "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
  "6": "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
  "7": "ThemeProvider: Please return an object from your \"theme\" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n",
  "8": "ThemeProvider: Please make your \"theme\" prop an object.\n\n",
  "9": "Missing document `<head>`\n\n",
  "10": "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
  "11": "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
  "12": "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
  "13": "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n"
} : {};

/**
 * super basic version of sprintf
 */
function format() {
  var a = arguments.length <= 0 ? undefined : arguments[0];
  var b = [];

  for (var c = 1, len = arguments.length; c < len; c += 1) {
    b.push(arguments.length <= c ? undefined : arguments[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });

  return a;
}

/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 */

var StyledComponentsError = function (_Error) {
  inherits(StyledComponentsError, _Error);

  function StyledComponentsError(code) {
    classCallCheck(this, StyledComponentsError);

    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    if (process.env.NODE_ENV === 'production') {
      var _this = possibleConstructorReturn(this, _Error.call(this, 'An error occurred. See https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/utils/errors.md#' + code + ' for more information.' + (interpolations.length > 0 ? ' Additional arguments: ' + interpolations.join(', ') : '')));
    } else {
      var _this = possibleConstructorReturn(this, _Error.call(this, format.apply(undefined, [ERRORS[code]].concat(interpolations)).trim()));
    }
    return possibleConstructorReturn(_this);
  }

  return StyledComponentsError;
}(Error);

// 
var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm;

var extractComps = (function (maybeCSS) {
  var css = '' + (maybeCSS || ''); // Definitely a string, and a clone
  var existingComponents = [];
  css.replace(SC_COMPONENT_ID, function (match, componentId, matchIndex) {
    existingComponents.push({ componentId: componentId, matchIndex: matchIndex });
    return match;
  });
  return existingComponents.map(function (_ref, i) {
    var componentId = _ref.componentId,
        matchIndex = _ref.matchIndex;

    var nextComp = existingComponents[i + 1];
    var cssFromDOM = nextComp ? css.slice(matchIndex, nextComp.matchIndex) : css.slice(matchIndex);
    return { componentId: componentId, cssFromDOM: cssFromDOM };
  });
});

// 

var COMMENT_REGEX = /^\s*\/\/.*$/gm;

// NOTE: This stylis instance is only used to split rules from SSR'd style tags
var stylisSplitter = new stylis_min({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: false,
  compress: false,
  semicolon: true
});

var stylis = new stylis_min({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: true,
  compress: false,
  semicolon: false // NOTE: This means "autocomplete missing semicolons"
});

// Wrap `insertRulePlugin to build a list of rules,
// and then make our own plugin to return the rules. This
// makes it easier to hook into the existing SSR architecture

var parsingRules = [];

// eslint-disable-next-line consistent-return
var returnRulesPlugin = function returnRulesPlugin(context) {
  if (context === -2) {
    var parsedRules = parsingRules;
    parsingRules = [];
    return parsedRules;
  }
};

var parseRulesPlugin = stylisRuleSheet(function (rule) {
  parsingRules.push(rule);
});

var _componentId = void 0;
var _selector = void 0;
var _selectorRegexp = void 0;

var selfReferenceReplacer = function selfReferenceReplacer(match, offset, string) {
  if (
  // the first self-ref is always untouched
  offset > 0 &&
  // there should be at least two self-refs to do a replacement (.b > .b)
  string.slice(0, offset).indexOf(_selector) !== -1 &&
  // no consecutive self refs (.b.b); that is a precedence boost and treated differently
  string.slice(offset - _selector.length, offset) !== _selector) {
    return '.' + _componentId;
  }

  return match;
};

/**
 * When writing a style like
 *
 * & + & {
 *   color: red;
 * }
 *
 * The second ampersand should be a reference to the static component class. stylis
 * has no knowledge of static class so we have to intelligently replace the base selector.
 */
var selfReferenceReplacementPlugin = function selfReferenceReplacementPlugin(context, _, selectors) {
  if (context === 2 && selectors.length && selectors[0].lastIndexOf(_selector) > 0) {
    // eslint-disable-next-line no-param-reassign
    selectors[0] = selectors[0].replace(_selectorRegexp, selfReferenceReplacer);
  }
};

stylis.use([selfReferenceReplacementPlugin, parseRulesPlugin, returnRulesPlugin]);
stylisSplitter.use([parseRulesPlugin, returnRulesPlugin]);

var splitByRules = function splitByRules(css) {
  return stylisSplitter('', css);
};

function stringifyRules(rules, selector, prefix) {
  var componentId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '&';

  var flatCSS = rules.join('').replace(COMMENT_REGEX, ''); // replace JS comments

  var cssStr = selector && prefix ? prefix + ' ' + selector + ' { ' + flatCSS + ' }' : flatCSS;

  // stylis has no concept of state to be passed to plugins
  // but since JS is single=threaded, we can rely on that to ensure
  // these properties stay in sync with the current stylis run
  _componentId = componentId;
  _selector = selector;
  _selectorRegexp = new RegExp('\\' + _selector + '\\b', 'g');

  return stylis(prefix || !selector ? '' : selector, cssStr);
}

// 
/* eslint-disable camelcase, no-undef */

var getNonce = (function () {
  return typeof __webpack_nonce__ !== 'undefined' ? __webpack_nonce__ : null;
});

// 
/* These are helpers for the StyleTags to keep track of the injected
 * rule names for each (component) ID that they're keeping track of.
 * They're crucial for detecting whether a name has already been
 * injected.
 * (This excludes rehydrated names) */

/* adds a new ID:name pairing to a names dictionary */
var addNameForId = function addNameForId(names, id, name) {
  if (name) {
    // eslint-disable-next-line no-param-reassign
    var namesForId = names[id] || (names[id] = Object.create(null));
    namesForId[name] = true;
  }
};

/* resets an ID entirely by overwriting it in the dictionary */
var resetIdNames = function resetIdNames(names, id) {
  // eslint-disable-next-line no-param-reassign
  names[id] = Object.create(null);
};

/* factory for a names dictionary checking the existance of an ID:name pairing */
var hasNameForId = function hasNameForId(names) {
  return function (id, name) {
    return names[id] !== undefined && names[id][name];
  };
};

/* stringifies names for the html/element output */
var stringifyNames = function stringifyNames(names) {
  var str = '';
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    str += Object.keys(names[id]).join(' ') + ' ';
  }
  return str.trim();
};

/* clones the nested names dictionary */
var cloneNames = function cloneNames(names) {
  var clone = Object.create(null);
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    clone[id] = _extends({}, names[id]);
  }
  return clone;
};

// 

/* These are helpers that deal with the insertRule (aka speedy) API
 * They are used in the StyleTags and specifically the speedy tag
 */

/* retrieve a sheet for a given style tag */
var sheetForTag = function sheetForTag(tag) {
  // $FlowFixMe
  if (tag.sheet) return tag.sheet;

  /* Firefox quirk requires us to step through all stylesheets to find one owned by the given tag */
  var size = tag.ownerDocument.styleSheets.length;
  for (var i = 0; i < size; i += 1) {
    var sheet = tag.ownerDocument.styleSheets[i];
    // $FlowFixMe
    if (sheet.ownerNode === tag) return sheet;
  }

  /* we should always be able to find a tag */
  throw new StyledComponentsError(10);
};

/* insert a rule safely and return whether it was actually injected */
var safeInsertRule = function safeInsertRule(sheet, cssRule, index$$1) {
  /* abort early if cssRule string is falsy */
  if (!cssRule) return false;

  var maxIndex = sheet.cssRules.length;

  try {
    /* use insertRule and cap passed index with maxIndex (no of cssRules) */
    sheet.insertRule(cssRule, index$$1 <= maxIndex ? index$$1 : maxIndex);
  } catch (err) {
    /* any error indicates an invalid rule */
    return false;
  }

  return true;
};

/* deletes `size` rules starting from `removalIndex` */
var deleteRules = function deleteRules(sheet, removalIndex, size) {
  var lowerBound = removalIndex - size;
  for (var i = removalIndex; i > lowerBound; i -= 1) {
    sheet.deleteRule(i);
  }
};

// 

/* this marker separates component styles and is important for rehydration */
var makeTextMarker = function makeTextMarker(id) {
  return '\n/* sc-component-id: ' + id + ' */\n';
};

/* add up all numbers in array up until and including the index */
var addUpUntilIndex = function addUpUntilIndex(sizes, index$$1) {
  var totalUpToIndex = 0;
  for (var i = 0; i <= index$$1; i += 1) {
    totalUpToIndex += sizes[i];
  }

  return totalUpToIndex;
};

/* create a new style tag after lastEl */
var makeStyleTag = function makeStyleTag(target, tagEl, insertBefore) {
  var targetDocument = document;
  if (target) targetDocument = target.ownerDocument;else if (tagEl) targetDocument = tagEl.ownerDocument;

  var el = targetDocument.createElement('style');
  el.setAttribute(SC_ATTR, '');
  el.setAttribute(SC_VERSION_ATTR, "4.4.1");

  var nonce = getNonce();
  if (nonce) {
    el.setAttribute('nonce', nonce);
  }

  /* Work around insertRule quirk in EdgeHTML */
  el.appendChild(targetDocument.createTextNode(''));

  if (target && !tagEl) {
    /* Append to target when no previous element was passed */
    target.appendChild(el);
  } else {
    if (!tagEl || !target || !tagEl.parentNode) {
      throw new StyledComponentsError(6);
    }

    /* Insert new style tag after the previous one */
    tagEl.parentNode.insertBefore(el, insertBefore ? tagEl : tagEl.nextSibling);
  }

  return el;
};

/* takes a css factory function and outputs an html styled tag factory */
var wrapAsHtmlTag = function wrapAsHtmlTag(css, names) {
  return function (additionalAttrs) {
    var nonce = getNonce();
    var attrs = [nonce && 'nonce="' + nonce + '"', SC_ATTR + '="' + stringifyNames(names) + '"', SC_VERSION_ATTR + '="' + "4.4.1" + '"', additionalAttrs];

    var htmlAttr = attrs.filter(Boolean).join(' ');
    return '<style ' + htmlAttr + '>' + css() + '</style>';
  };
};

/* takes a css factory function and outputs an element factory */
var wrapAsElement = function wrapAsElement(css, names) {
  return function () {
    var _props;

    var props = (_props = {}, _props[SC_ATTR] = stringifyNames(names), _props[SC_VERSION_ATTR] = "4.4.1", _props);

    var nonce = getNonce();
    if (nonce) {
      // $FlowFixMe
      props.nonce = nonce;
    }

    // eslint-disable-next-line react/no-danger
    return React.createElement('style', _extends({}, props, { dangerouslySetInnerHTML: { __html: css() } }));
  };
};

var getIdsFromMarkersFactory = function getIdsFromMarkersFactory(markers) {
  return function () {
    return Object.keys(markers);
  };
};

/* speedy tags utilise insertRule */
var makeSpeedyTag = function makeSpeedyTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);
  var sizes = [];

  var extractImport = getImportRuleTag !== undefined;
  /* indicates whether getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    markers[id] = sizes.length;
    sizes.push(0);
    resetIdNames(names, id);

    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var sheet = sheetForTag(el);
    var insertIndex = addUpUntilIndex(sizes, marker);

    var injectedRules = 0;
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var cssRule = cssRules[i];
      var mayHaveImport = extractImport; /* @import rules are reordered to appear first */
      if (mayHaveImport && cssRule.indexOf('@import') !== -1) {
        importRules.push(cssRule);
      } else if (safeInsertRule(sheet, cssRule, insertIndex + injectedRules)) {
        mayHaveImport = false;
        injectedRules += 1;
      }
    }

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }

    sizes[marker] += injectedRules; /* add up no of injected rules */
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;
    // $FlowFixMe
    if (el.isConnected === false) return;

    var size = sizes[marker];
    var sheet = sheetForTag(el);
    var removalIndex = addUpUntilIndex(sizes, marker) - 1;
    deleteRules(sheet, removalIndex, size);
    sizes[marker] = 0;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var _sheetForTag = sheetForTag(el),
        cssRules = _sheetForTag.cssRules;

    var str = '';

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += makeTextMarker(id);
      var marker = markers[id];
      var end = addUpUntilIndex(sizes, marker);
      var size = sizes[marker];
      for (var i = end - size; i < end; i += 1) {
        var rule = cssRules[i];
        if (rule !== undefined) {
          str += rule.cssText;
        }
      }
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },

    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeTextNode = function makeTextNode(targetDocument, id) {
  return targetDocument.createTextNode(makeTextMarker(id));
};

var makeBrowserTag = function makeBrowserTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);

  var extractImport = getImportRuleTag !== undefined;

  /* indicates whether getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    markers[id] = makeTextNode(el.ownerDocument, id);
    el.appendChild(markers[id]);
    names[id] = Object.create(null);

    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var rule = cssRules[i];
      var mayHaveImport = extractImport;
      if (mayHaveImport && rule.indexOf('@import') !== -1) {
        importRules.push(rule);
      } else {
        mayHaveImport = false;
        var separator = i === cssRulesSize - 1 ? '' : ' ';
        marker.appendData('' + rule + separator);
      }
    }

    addNameForId(names, id, name);

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;

    /* create new empty text node and replace the current one */
    var newMarker = makeTextNode(el.ownerDocument, id);
    el.replaceChild(newMarker, marker);
    markers[id] = newMarker;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var str = '';

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += markers[id].data;
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },

    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeServerTag = function makeServerTag(namesArg, markersArg) {
  var names = namesArg === undefined ? Object.create(null) : namesArg;
  var markers = markersArg === undefined ? Object.create(null) : markersArg;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    return markers[id] = [''];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    marker[0] += cssRules.join(' ');
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;
    marker[0] = '';
    resetIdNames(names, id);
  };

  var css = function css() {
    var str = '';
    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      var cssForId = markers[id][0];
      if (cssForId) {
        str += makeTextMarker(id) + cssForId;
      }
    }
    return str;
  };

  var clone = function clone() {
    var namesClone = cloneNames(names);
    var markersClone = Object.create(null);

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      markersClone[id] = [markers[id][0]];
    }

    return makeServerTag(namesClone, markersClone);
  };

  var tag = {
    clone: clone,
    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: null,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };

  return tag;
};

var makeTag = function makeTag(target, tagEl, forceServer, insertBefore, getImportRuleTag) {
  if (IS_BROWSER && !forceServer) {
    var el = makeStyleTag(target, tagEl, insertBefore);

    if (DISABLE_SPEEDY) {
      return makeBrowserTag(el, getImportRuleTag);
    } else {
      return makeSpeedyTag(el, getImportRuleTag);
    }
  }

  return makeServerTag();
};

var rehydrate = function rehydrate(tag, els, extracted) {
  /* add all extracted components to the new tag */
  for (var i = 0, len = extracted.length; i < len; i += 1) {
    var _extracted$i = extracted[i],
        componentId = _extracted$i.componentId,
        cssFromDOM = _extracted$i.cssFromDOM;

    var cssRules = splitByRules(cssFromDOM);
    tag.insertRules(componentId, cssRules);
  }

  /* remove old HTMLStyleElements, since they have been rehydrated */
  for (var _i = 0, _len = els.length; _i < _len; _i += 1) {
    var el = els[_i];
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  }
};

// 

var SPLIT_REGEX = /\s+/;

/* determine the maximum number of components before tags are sharded */
var MAX_SIZE = void 0;
if (IS_BROWSER) {
  /* in speedy mode we can keep a lot more rules in a sheet before a slowdown can be expected */
  MAX_SIZE = DISABLE_SPEEDY ? 40 : 1000;
} else {
  /* for servers we do not need to shard at all */
  MAX_SIZE = -1;
}

var sheetRunningId = 0;
var master = void 0;

var StyleSheet = function () {

  /* a map from ids to tags */

  /* deferred rules for a given id */

  /* this is used for not reinjecting rules via hasNameForId() */

  /* when rules for an id are removed using remove() we have to ignore rehydratedNames for it */

  /* a list of tags belonging to this StyleSheet */

  /* a tag for import rules */

  /* current capacity until a new tag must be created */

  /* children (aka clones) of this StyleSheet inheriting all and future injections */

  function StyleSheet() {
    var _this = this;

    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : IS_BROWSER ? document.head : null;
    var forceServer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    classCallCheck(this, StyleSheet);

    this.getImportRuleTag = function () {
      var importRuleTag = _this.importRuleTag;

      if (importRuleTag !== undefined) {
        return importRuleTag;
      }

      var firstTag = _this.tags[0];
      var insertBefore = true;

      return _this.importRuleTag = makeTag(_this.target, firstTag ? firstTag.styleTag : null, _this.forceServer, insertBefore);
    };

    sheetRunningId += 1;
    this.id = sheetRunningId;
    this.forceServer = forceServer;
    this.target = forceServer ? null : target;
    this.tagMap = {};
    this.deferred = {};
    this.rehydratedNames = {};
    this.ignoreRehydratedNames = {};
    this.tags = [];
    this.capacity = 1;
    this.clones = [];
  }

  /* rehydrate all SSR'd style tags */


  StyleSheet.prototype.rehydrate = function rehydrate$$1() {
    if (!IS_BROWSER || this.forceServer) return this;

    var els = [];
    var extracted = [];
    var isStreamed = false;

    /* retrieve all of our SSR style elements from the DOM */
    var nodes = document.querySelectorAll('style[' + SC_ATTR + '][' + SC_VERSION_ATTR + '="' + "4.4.1" + '"]');

    var nodesSize = nodes.length;

    /* abort rehydration if no previous style tags were found */
    if (!nodesSize) return this;

    for (var i = 0; i < nodesSize; i += 1) {
      var el = nodes[i];

      /* check if style tag is a streamed tag */
      if (!isStreamed) isStreamed = !!el.getAttribute(SC_STREAM_ATTR);

      /* retrieve all component names */
      var elNames = (el.getAttribute(SC_ATTR) || '').trim().split(SPLIT_REGEX);
      var elNamesSize = elNames.length;
      for (var j = 0, name; j < elNamesSize; j += 1) {
        name = elNames[j];
        /* add rehydrated name to sheet to avoid re-adding styles */
        this.rehydratedNames[name] = true;
      }

      /* extract all components and their CSS */
      extracted.push.apply(extracted, extractComps(el.textContent));

      /* store original HTMLStyleElement */
      els.push(el);
    }

    /* abort rehydration if nothing was extracted */
    var extractedSize = extracted.length;
    if (!extractedSize) return this;

    /* create a tag to be used for rehydration */
    var tag = this.makeTag(null);

    rehydrate(tag, els, extracted);

    /* reset capacity and adjust MAX_SIZE by the initial size of the rehydration */
    this.capacity = Math.max(1, MAX_SIZE - extractedSize);
    this.tags.push(tag);

    /* retrieve all component ids */
    for (var _j = 0; _j < extractedSize; _j += 1) {
      this.tagMap[extracted[_j].componentId] = tag;
    }

    return this;
  };

  /* retrieve a "master" instance of StyleSheet which is typically used when no other is available
   * The master StyleSheet is targeted by createGlobalStyle, keyframes, and components outside of any
    * StyleSheetManager's context */


  /* reset the internal "master" instance */
  StyleSheet.reset = function reset() {
    var forceServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    master = new StyleSheet(undefined, forceServer).rehydrate();
  };

  /* adds "children" to the StyleSheet that inherit all of the parents' rules
   * while their own rules do not affect the parent */


  StyleSheet.prototype.clone = function clone() {
    var sheet = new StyleSheet(this.target, this.forceServer);

    /* add to clone array */
    this.clones.push(sheet);

    /* clone all tags */
    sheet.tags = this.tags.map(function (tag) {
      var ids = tag.getIds();
      var newTag = tag.clone();

      /* reconstruct tagMap */
      for (var i = 0; i < ids.length; i += 1) {
        sheet.tagMap[ids[i]] = newTag;
      }

      return newTag;
    });

    /* clone other maps */
    sheet.rehydratedNames = _extends({}, this.rehydratedNames);
    sheet.deferred = _extends({}, this.deferred);

    return sheet;
  };

  /* force StyleSheet to create a new tag on the next injection */


  StyleSheet.prototype.sealAllTags = function sealAllTags() {
    this.capacity = 1;

    this.tags.forEach(function (tag) {
      // eslint-disable-next-line no-param-reassign
      tag.sealed = true;
    });
  };

  StyleSheet.prototype.makeTag = function makeTag$$1(tag) {
    var lastEl = tag ? tag.styleTag : null;
    var insertBefore = false;

    return makeTag(this.target, lastEl, this.forceServer, insertBefore, this.getImportRuleTag);
  };

  /* get a tag for a given componentId, assign the componentId to one, or shard */
  StyleSheet.prototype.getTagForId = function getTagForId(id) {
    /* simply return a tag, when the componentId was already assigned one */
    var prev = this.tagMap[id];
    if (prev !== undefined && !prev.sealed) {
      return prev;
    }

    var tag = this.tags[this.tags.length - 1];

    /* shard (create a new tag) if the tag is exhausted (See MAX_SIZE) */
    this.capacity -= 1;

    if (this.capacity === 0) {
      this.capacity = MAX_SIZE;
      tag = this.makeTag(tag);
      this.tags.push(tag);
    }

    return this.tagMap[id] = tag;
  };

  /* mainly for createGlobalStyle to check for its id */


  StyleSheet.prototype.hasId = function hasId(id) {
    return this.tagMap[id] !== undefined;
  };

  /* caching layer checking id+name to already have a corresponding tag and injected rules */


  StyleSheet.prototype.hasNameForId = function hasNameForId(id, name) {
    /* exception for rehydrated names which are checked separately */
    if (this.ignoreRehydratedNames[id] === undefined && this.rehydratedNames[name]) {
      return true;
    }

    var tag = this.tagMap[id];
    return tag !== undefined && tag.hasNameForId(id, name);
  };

  /* registers a componentId and registers it on its tag */


  StyleSheet.prototype.deferredInject = function deferredInject(id, cssRules) {
    /* don't inject when the id is already registered */
    if (this.tagMap[id] !== undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].deferredInject(id, cssRules);
    }

    this.getTagForId(id).insertMarker(id);
    this.deferred[id] = cssRules;
  };

  /* injects rules for a given id with a name that will need to be cached */


  StyleSheet.prototype.inject = function inject(id, cssRules, name) {
    var clones = this.clones;


    for (var i = 0; i < clones.length; i += 1) {
      clones[i].inject(id, cssRules, name);
    }

    var tag = this.getTagForId(id);

    /* add deferred rules for component */
    if (this.deferred[id] !== undefined) {
      // Combine passed cssRules with previously deferred CSS rules
      // NOTE: We cannot mutate the deferred array itself as all clones
      // do the same (see clones[i].inject)
      var rules = this.deferred[id].concat(cssRules);
      tag.insertRules(id, rules, name);

      this.deferred[id] = undefined;
    } else {
      tag.insertRules(id, cssRules, name);
    }
  };

  /* removes all rules for a given id, which doesn't remove its marker but resets it */


  StyleSheet.prototype.remove = function remove(id) {
    var tag = this.tagMap[id];
    if (tag === undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].remove(id);
    }

    /* remove all rules from the tag */
    tag.removeRules(id);

    /* ignore possible rehydrated names */
    this.ignoreRehydratedNames[id] = true;

    /* delete possible deferred rules */
    this.deferred[id] = undefined;
  };

  StyleSheet.prototype.toHTML = function toHTML() {
    return this.tags.map(function (tag) {
      return tag.toHTML();
    }).join('');
  };

  StyleSheet.prototype.toReactElements = function toReactElements() {
    var id = this.id;


    return this.tags.map(function (tag, i) {
      var key = 'sc-' + id + '-' + i;
      return cloneElement(tag.toElement(), { key: key });
    });
  };

  createClass(StyleSheet, null, [{
    key: 'master',
    get: function get$$1() {
      return master || (master = new StyleSheet().rehydrate());
    }

    /* NOTE: This is just for backwards-compatibility with jest-styled-components */

  }, {
    key: 'instance',
    get: function get$$1() {
      return StyleSheet.master;
    }
  }]);
  return StyleSheet;
}();

// 

var Keyframes = function () {
  function Keyframes(name, rules) {
    var _this = this;

    classCallCheck(this, Keyframes);

    this.inject = function (styleSheet) {
      if (!styleSheet.hasNameForId(_this.id, _this.name)) {
        styleSheet.inject(_this.id, _this.rules, _this.name);
      }
    };

    this.toString = function () {
      throw new StyledComponentsError(12, String(_this.name));
    };

    this.name = name;
    this.rules = rules;

    this.id = 'sc-keyframes-' + name;
  }

  Keyframes.prototype.getName = function getName() {
    return this.name;
  };

  return Keyframes;
}();

// 

/**
 * inlined version of
 * https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/hyphenateStyleName.js
 */

var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return string.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

// 

// Taken from https://github.com/facebook/react/blob/b87aabdfe1b7461e7331abb3601d9e6bb27544bc/packages/react-dom/src/shared/dangerousStyleValue.js
function addUnitIfNeeded(name, value) {
  // https://github.com/amilajack/eslint-plugin-flowtype-errors/issues/133
  // $FlowFixMe
  if (value == null || typeof value === 'boolean' || value === '') {
    return '';
  }

  if (typeof value === 'number' && value !== 0 && !(name in unitlessKeys)) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return String(value).trim();
}

// 

/**
 * It's falsish not falsy because 0 is allowed.
 */
var isFalsish = function isFalsish(chunk) {
  return chunk === undefined || chunk === null || chunk === false || chunk === '';
};

var objToCssArray = function objToCssArray(obj, prevKey) {
  var rules = [];
  var keys = Object.keys(obj);

  keys.forEach(function (key) {
    if (!isFalsish(obj[key])) {
      if (isPlainObject$1(obj[key])) {
        rules.push.apply(rules, objToCssArray(obj[key], key));

        return rules;
      } else if (isFunction$1(obj[key])) {
        rules.push(hyphenateStyleName(key) + ':', obj[key], ';');

        return rules;
      }
      rules.push(hyphenateStyleName(key) + ': ' + addUnitIfNeeded(key, obj[key]) + ';');
    }
    return rules;
  });

  return prevKey ? [prevKey + ' {'].concat(rules, ['}']) : rules;
};

function flatten(chunk, executionContext, styleSheet) {
  if (Array.isArray(chunk)) {
    var ruleSet = [];

    for (var i = 0, len = chunk.length, result; i < len; i += 1) {
      result = flatten(chunk[i], executionContext, styleSheet);

      if (result === null) continue;else if (Array.isArray(result)) ruleSet.push.apply(ruleSet, result);else ruleSet.push(result);
    }

    return ruleSet;
  }

  if (isFalsish(chunk)) {
    return null;
  }

  /* Handle other components */
  if (isStyledComponent(chunk)) {
    return '.' + chunk.styledComponentId;
  }

  /* Either execute or defer the function */
  if (isFunction$1(chunk)) {
    if (isStatelessFunction(chunk) && executionContext) {
      var _result = chunk(executionContext);

      if (process.env.NODE_ENV !== 'production' && reactIs_1(_result)) {
        // eslint-disable-next-line no-console
        console.warn(getComponentName(chunk) + ' is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.');
      }

      return flatten(_result, executionContext, styleSheet);
    } else return chunk;
  }

  if (chunk instanceof Keyframes) {
    if (styleSheet) {
      chunk.inject(styleSheet);
      return chunk.getName();
    } else return chunk;
  }

  /* Handle objects */
  return isPlainObject$1(chunk) ? objToCssArray(chunk) : chunk.toString();
}

// 

function css$1(styles) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (isFunction$1(styles) || isPlainObject$1(styles)) {
    // $FlowFixMe
    return flatten(interleave(EMPTY_ARRAY, [styles].concat(interpolations)));
  }

  // $FlowFixMe
  return flatten(interleave(styles, interpolations));
}

// 

function constructWithOptions(componentConstructor, tag) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT;

  if (!reactIs_2(tag)) {
    throw new StyledComponentsError(1, String(tag));
  }

  /* This is callable directly as a template function */
  // $FlowFixMe: Not typed to avoid destructuring arguments
  var templateFunction = function templateFunction() {
    return componentConstructor(tag, options, css$1.apply(undefined, arguments));
  };

  /* If config methods are called, wrap up a new template function and merge options */
  templateFunction.withConfig = function (config) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, config));
  };

  /* Modify/inject new props at runtime */
  templateFunction.attrs = function (attrs) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {
      attrs: Array.prototype.concat(options.attrs, attrs).filter(Boolean)
    }));
  };

  return templateFunction;
}

// 
// Source: https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash(c) {
  for (var e = c.length | 0, a = e | 0, d = 0, b; e >= 4;) {
    b = c.charCodeAt(d) & 255 | (c.charCodeAt(++d) & 255) << 8 | (c.charCodeAt(++d) & 255) << 16 | (c.charCodeAt(++d) & 255) << 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), b ^= b >>> 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16) ^ b, e -= 4, ++d;
  }
  switch (e) {
    case 3:
      a ^= (c.charCodeAt(d + 2) & 255) << 16;
    case 2:
      a ^= (c.charCodeAt(d + 1) & 255) << 8;
    case 1:
      a ^= c.charCodeAt(d) & 255, a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
  }
  a ^= a >>> 13;
  a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
  return (a ^ a >>> 15) >>> 0;
}

// 
/* eslint-disable no-bitwise */

/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */
var charsLength = 52;

/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */
var getAlphabeticChar = function getAlphabeticChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
};

/* input a number, usually a hash and convert it to base-52 */
function generateAlphabeticName(code) {
  var name = '';
  var x = void 0;

  /* get a char and divide by alphabet-length */
  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return getAlphabeticChar(x % charsLength) + name;
}

// 

function hasFunctionObjectKey(obj) {
  // eslint-disable-next-line guard-for-in, no-restricted-syntax
  for (var key in obj) {
    if (isFunction$1(obj[key])) {
      return true;
    }
  }

  return false;
}

function isStaticRules(rules, attrs) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i];

    // recursive case
    if (Array.isArray(rule) && !isStaticRules(rule, attrs)) {
      return false;
    } else if (isFunction$1(rule) && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled component
      return false;
    }
  }

  if (attrs.some(function (x) {
    return isFunction$1(x) || hasFunctionObjectKey(x);
  })) return false;

  return true;
}

// 

/* combines hashStr (murmurhash) and nameGenerator for convenience */
var hasher = function hasher(str) {
  return generateAlphabeticName(murmurhash(str));
};

/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */

var ComponentStyle = function () {
  function ComponentStyle(rules, attrs, componentId) {
    classCallCheck(this, ComponentStyle);

    this.rules = rules;
    this.isStatic = process.env.NODE_ENV === 'production' && isStaticRules(rules, attrs);
    this.componentId = componentId;

    if (!StyleSheet.master.hasId(componentId)) {
      StyleSheet.master.deferredInject(componentId, []);
    }
  }

  /*
   * Flattens a rule set into valid CSS
   * Hashes it, wraps the whole chunk in a .hash1234 {}
   * Returns the hash to be injected on render()
   * */


  ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet) {
    var isStatic = this.isStatic,
        componentId = this.componentId,
        lastClassName = this.lastClassName;

    if (IS_BROWSER && isStatic && typeof lastClassName === 'string' && styleSheet.hasNameForId(componentId, lastClassName)) {
      return lastClassName;
    }

    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var name = hasher(this.componentId + flatCSS.join(''));
    if (!styleSheet.hasNameForId(componentId, name)) {
      styleSheet.inject(this.componentId, stringifyRules(flatCSS, '.' + name, undefined, componentId), name);
    }

    this.lastClassName = name;
    return name;
  };

  ComponentStyle.generateName = function generateName(str) {
    return hasher(str);
  };

  return ComponentStyle;
}();

// 

var LIMIT = 200;

var createWarnTooManyClasses = (function (displayName) {
  var generatedClasses = {};
  var warningSeen = false;

  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;
      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.
        /* eslint-disable no-console, prefer-template */
        console.warn('Over ' + LIMIT + ' classes were generated for component ' + displayName + '. \n' + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs(props => ({\n' + '    style: {\n' + '      background: props.background,\n' + '    },\n' + '  }))`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
});

// 

var determineTheme = (function (props, fallbackTheme) {
  var defaultProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT;

  // Props should take precedence over ThemeProvider, which should take precedence over
  // defaultProps, but React automatically puts defaultProps on props.

  /* eslint-disable react/prop-types, flowtype-errors/show-errors */
  var isDefaultTheme = defaultProps ? props.theme === defaultProps.theme : false;
  var theme = props.theme && !isDefaultTheme ? props.theme : fallbackTheme || defaultProps.theme;
  /* eslint-enable */

  return theme;
});

// 
var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
var dashesAtEnds = /(^-|-$)/g;

/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */
function escape(str) {
  return str
  // Replace all possible CSS selectors
  .replace(escapeRegex, '-')

  // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
}

// 

function isTag(target) {
  return typeof target === 'string' && (process.env.NODE_ENV !== 'production' ? target.charAt(0) === target.charAt(0).toLowerCase() : true);
}

// 

function generateDisplayName(target) {
  // $FlowFixMe
  return isTag(target) ? 'styled.' + target : 'Styled(' + getComponentName(target) + ')';
}

var _TYPE_STATICS;

var REACT_STATICS = {
  childContextTypes: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDerivedStateFromProps: true,
  propTypes: true,
  type: true
};

var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};

var TYPE_STATICS = (_TYPE_STATICS = {}, _TYPE_STATICS[reactIs_3] = {
  $$typeof: true,
  render: true
}, _TYPE_STATICS);

var defineProperty$1 = Object.defineProperty,
    getOwnPropertyNames = Object.getOwnPropertyNames,
    _Object$getOwnPropert = Object.getOwnPropertySymbols,
    getOwnPropertySymbols = _Object$getOwnPropert === undefined ? function () {
  return [];
} : _Object$getOwnPropert,
    getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
    getPrototypeOf = Object.getPrototypeOf,
    objectPrototype = Object.prototype;
var arrayPrototype = Array.prototype;


function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components

    var inheritedComponent = getPrototypeOf(sourceComponent);

    if (inheritedComponent && inheritedComponent !== objectPrototype) {
      hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
    }

    var keys = arrayPrototype.concat(getOwnPropertyNames(sourceComponent),
    // $FlowFixMe
    getOwnPropertySymbols(sourceComponent));

    var targetStatics = TYPE_STATICS[targetComponent.$$typeof] || REACT_STATICS;

    var sourceStatics = TYPE_STATICS[sourceComponent.$$typeof] || REACT_STATICS;

    var i = keys.length;
    var descriptor = void 0;
    var key = void 0;

    // eslint-disable-next-line no-plusplus
    while (i--) {
      key = keys[i];

      if (
      // $FlowFixMe
      !KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) &&
      // $FlowFixMe
      !(targetStatics && targetStatics[key])) {
        descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        if (descriptor) {
          try {
            // Avoid failures from read-only properties
            defineProperty$1(targetComponent, key, descriptor);
          } catch (e) {
            /* fail silently */
          }
        }
      }
    }

    return targetComponent;
  }

  return targetComponent;
}

// 
function isDerivedReactComponent(fn) {
  return !!(fn && fn.prototype && fn.prototype.isReactComponent);
}

// 
// Helper to call a given function, only once
var once = (function (cb) {
  var called = false;

  return function () {
    if (!called) {
      called = true;
      cb.apply(undefined, arguments);
    }
  };
});

// 

var ThemeContext = createContext();

var ThemeConsumer = ThemeContext.Consumer;

/**
 * Provide a theme to an entire react component tree via context
 */

var ThemeProvider = function (_Component) {
  inherits(ThemeProvider, _Component);

  function ThemeProvider(props) {
    classCallCheck(this, ThemeProvider);

    var _this = possibleConstructorReturn(this, _Component.call(this, props));

    _this.getContext = memoizeOne(_this.getContext.bind(_this));
    _this.renderInner = _this.renderInner.bind(_this);
    return _this;
  }

  ThemeProvider.prototype.render = function render() {
    if (!this.props.children) return null;

    return React.createElement(
      ThemeContext.Consumer,
      null,
      this.renderInner
    );
  };

  ThemeProvider.prototype.renderInner = function renderInner(outerTheme) {
    var context = this.getContext(this.props.theme, outerTheme);

    return React.createElement(
      ThemeContext.Provider,
      { value: context },
      this.props.children
    );
  };

  /**
   * Get the theme from the props, supporting both (outerTheme) => {}
   * as well as object notation
   */


  ThemeProvider.prototype.getTheme = function getTheme(theme, outerTheme) {
    if (isFunction$1(theme)) {
      var mergedTheme = theme(outerTheme);

      if (process.env.NODE_ENV !== 'production' && (mergedTheme === null || Array.isArray(mergedTheme) || (typeof mergedTheme === 'undefined' ? 'undefined' : _typeof(mergedTheme)) !== 'object')) {
        throw new StyledComponentsError(7);
      }

      return mergedTheme;
    }

    if (theme === null || Array.isArray(theme) || (typeof theme === 'undefined' ? 'undefined' : _typeof(theme)) !== 'object') {
      throw new StyledComponentsError(8);
    }

    return _extends({}, outerTheme, theme);
  };

  ThemeProvider.prototype.getContext = function getContext(theme, outerTheme) {
    return this.getTheme(theme, outerTheme);
  };

  return ThemeProvider;
}(Component);

// 

var CLOSING_TAG_R = /^\s*<\/[a-z]/i;

var ServerStyleSheet = function () {
  function ServerStyleSheet() {
    classCallCheck(this, ServerStyleSheet);

    /* The master sheet might be reset, so keep a reference here */
    this.masterSheet = StyleSheet.master;
    this.instance = this.masterSheet.clone();
    this.sealed = false;
  }

  /**
   * Mark the ServerStyleSheet as being fully emitted and manually GC it from the
   * StyleSheet singleton.
   */


  ServerStyleSheet.prototype.seal = function seal() {
    if (!this.sealed) {
      /* Remove sealed StyleSheets from the master sheet */
      var index$$1 = this.masterSheet.clones.indexOf(this.instance);
      this.masterSheet.clones.splice(index$$1, 1);
      this.sealed = true;
    }
  };

  ServerStyleSheet.prototype.collectStyles = function collectStyles(children) {
    if (this.sealed) {
      throw new StyledComponentsError(2);
    }

    return React.createElement(
      StyleSheetManager,
      { sheet: this.instance },
      children
    );
  };

  ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
    this.seal();
    return this.instance.toHTML();
  };

  ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
    this.seal();
    return this.instance.toReactElements();
  };

  ServerStyleSheet.prototype.interleaveWithNodeStream = function interleaveWithNodeStream(readableStream) {
    var _this = this;

    if (IS_BROWSER) {
      throw new StyledComponentsError(3);
    }

    /* the tag index keeps track of which tags have already been emitted */
    var instance = this.instance;

    var instanceTagIndex = 0;

    var streamAttr = SC_STREAM_ATTR + '="true"';

    var transformer = new stream.Transform({
      transform: function appendStyleChunks(chunk, /* encoding */_, callback) {
        var tags = instance.tags;

        var html = '';

        /* retrieve html for each new style tag */
        for (; instanceTagIndex < tags.length; instanceTagIndex += 1) {
          var tag = tags[instanceTagIndex];
          html += tag.toHTML(streamAttr);
        }

        /* force our StyleSheets to emit entirely new tags */
        instance.sealAllTags();

        var renderedHtml = chunk.toString();

        /* prepend style html to chunk, unless the start of the chunk is a closing tag in which case append right after that */
        if (CLOSING_TAG_R.test(renderedHtml)) {
          var endOfClosingTag = renderedHtml.indexOf('>');

          this.push(renderedHtml.slice(0, endOfClosingTag + 1) + html + renderedHtml.slice(endOfClosingTag + 1));
        } else this.push(html + renderedHtml);

        callback();
      }
    });

    readableStream.on('end', function () {
      return _this.seal();
    });

    readableStream.on('error', function (err) {
      _this.seal();

      // forward the error to the transform stream
      transformer.emit('error', err);
    });

    return readableStream.pipe(transformer);
  };

  return ServerStyleSheet;
}();

// 

var StyleSheetContext = createContext();
var StyleSheetConsumer = StyleSheetContext.Consumer;

var StyleSheetManager = function (_Component) {
  inherits(StyleSheetManager, _Component);

  function StyleSheetManager(props) {
    classCallCheck(this, StyleSheetManager);

    var _this = possibleConstructorReturn(this, _Component.call(this, props));

    _this.getContext = memoizeOne(_this.getContext);
    return _this;
  }

  StyleSheetManager.prototype.getContext = function getContext(sheet, target) {
    if (sheet) {
      return sheet;
    } else if (target) {
      return new StyleSheet(target);
    } else {
      throw new StyledComponentsError(4);
    }
  };

  StyleSheetManager.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        sheet = _props.sheet,
        target = _props.target;


    return React.createElement(
      StyleSheetContext.Provider,
      { value: this.getContext(sheet, target) },
      process.env.NODE_ENV !== 'production' ? React.Children.only(children) : children
    );
  };

  return StyleSheetManager;
}(Component);
process.env.NODE_ENV !== "production" ? StyleSheetManager.propTypes = {
  sheet: PropTypes.oneOfType([PropTypes.instanceOf(StyleSheet), PropTypes.instanceOf(ServerStyleSheet)]),

  target: PropTypes.shape({
    appendChild: PropTypes.func.isRequired
  })
} : void 0;

// 

var identifiers = {};

/* We depend on components having unique IDs */
function generateId(_ComponentStyle, _displayName, parentComponentId) {
  var displayName = typeof _displayName !== 'string' ? 'sc' : escape(_displayName);

  /**
   * This ensures uniqueness if two components happen to share
   * the same displayName.
   */
  var nr = (identifiers[displayName] || 0) + 1;
  identifiers[displayName] = nr;

  var componentId = displayName + '-' + _ComponentStyle.generateName(displayName + nr);

  return parentComponentId ? parentComponentId + '-' + componentId : componentId;
}

// $FlowFixMe

var StyledComponent = function (_Component) {
  inherits(StyledComponent, _Component);

  function StyledComponent() {
    classCallCheck(this, StyledComponent);

    var _this = possibleConstructorReturn(this, _Component.call(this));

    _this.attrs = {};

    _this.renderOuter = _this.renderOuter.bind(_this);
    _this.renderInner = _this.renderInner.bind(_this);

    if (process.env.NODE_ENV !== 'production') {
      _this.warnInnerRef = once(function (displayName) {
        return (
          // eslint-disable-next-line no-console
          console.warn('The "innerRef" API has been removed in styled-components v4 in favor of React 16 ref forwarding, use "ref" instead like a typical component. "innerRef" was detected on component "' + displayName + '".')
        );
      });

      _this.warnAttrsFnObjectKeyDeprecated = once(function (key, displayName) {
        return (
          // eslint-disable-next-line no-console
          console.warn('Functions as object-form attrs({}) keys are now deprecated and will be removed in a future version of styled-components. Switch to the new attrs(props => ({})) syntax instead for easier and more powerful composition. The attrs key in question is "' + key + '" on component "' + displayName + '".', '\n ' + new Error().stack)
        );
      });

      _this.warnNonStyledComponentAttrsObjectKey = once(function (key, displayName) {
        return (
          // eslint-disable-next-line no-console
          console.warn('It looks like you\'ve used a non styled-component as the value for the "' + key + '" prop in an object-form attrs constructor of "' + displayName + '".\n' + 'You should use the new function-form attrs constructor which avoids this issue: attrs(props => ({ yourStuff }))\n' + "To continue using the deprecated object syntax, you'll need to wrap your component prop in a function to make it available inside the styled component (you'll still get the deprecation warning though.)\n" + ('For example, { ' + key + ': () => InnerComponent } instead of { ' + key + ': InnerComponent }'))
        );
      });
    }
    return _this;
  }

  StyledComponent.prototype.render = function render() {
    return React.createElement(
      StyleSheetConsumer,
      null,
      this.renderOuter
    );
  };

  StyledComponent.prototype.renderOuter = function renderOuter() {
    var styleSheet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : StyleSheet.master;

    this.styleSheet = styleSheet;

    // No need to subscribe a static component to theme changes, it won't change anything
    if (this.props.forwardedComponent.componentStyle.isStatic) return this.renderInner();

    return React.createElement(
      ThemeConsumer,
      null,
      this.renderInner
    );
  };

  StyledComponent.prototype.renderInner = function renderInner(theme) {
    var _props$forwardedCompo = this.props.forwardedComponent,
        componentStyle = _props$forwardedCompo.componentStyle,
        defaultProps = _props$forwardedCompo.defaultProps,
        displayName = _props$forwardedCompo.displayName,
        foldedComponentIds = _props$forwardedCompo.foldedComponentIds,
        styledComponentId = _props$forwardedCompo.styledComponentId,
        target = _props$forwardedCompo.target;


    var generatedClassName = void 0;
    if (componentStyle.isStatic) {
      generatedClassName = this.generateAndInjectStyles(EMPTY_OBJECT, this.props);
    } else {
      generatedClassName = this.generateAndInjectStyles(determineTheme(this.props, theme, defaultProps) || EMPTY_OBJECT, this.props);
    }

    var elementToBeCreated = this.props.as || this.attrs.as || target;
    var isTargetTag = isTag(elementToBeCreated);

    var propsForElement = {};
    var computedProps = _extends({}, this.props, this.attrs);

    var key = void 0;
    // eslint-disable-next-line guard-for-in
    for (key in computedProps) {
      if (process.env.NODE_ENV !== 'production' && key === 'innerRef' && isTargetTag) {
        this.warnInnerRef(displayName);
      }

      if (key === 'forwardedComponent' || key === 'as') {
        continue;
      } else if (key === 'forwardedRef') propsForElement.ref = computedProps[key];else if (key === 'forwardedAs') propsForElement.as = computedProps[key];else if (!isTargetTag || index(key)) {
        // Don't pass through non HTML tags through to HTML elements
        propsForElement[key] = computedProps[key];
      }
    }

    if (this.props.style && this.attrs.style) {
      propsForElement.style = _extends({}, this.attrs.style, this.props.style);
    }

    propsForElement.className = Array.prototype.concat(foldedComponentIds, styledComponentId, generatedClassName !== styledComponentId ? generatedClassName : null, this.props.className, this.attrs.className).filter(Boolean).join(' ');

    return createElement(elementToBeCreated, propsForElement);
  };

  StyledComponent.prototype.buildExecutionContext = function buildExecutionContext(theme, props, attrs) {
    var _this2 = this;

    var context = _extends({}, props, { theme: theme });

    if (!attrs.length) return context;

    this.attrs = {};

    attrs.forEach(function (attrDef) {
      var resolvedAttrDef = attrDef;
      var attrDefWasFn = false;
      var attr = void 0;
      var key = void 0;

      if (isFunction$1(resolvedAttrDef)) {
        // $FlowFixMe
        resolvedAttrDef = resolvedAttrDef(context);
        attrDefWasFn = true;
      }

      /* eslint-disable guard-for-in */
      // $FlowFixMe
      for (key in resolvedAttrDef) {
        attr = resolvedAttrDef[key];

        if (!attrDefWasFn) {
          if (isFunction$1(attr) && !isDerivedReactComponent(attr) && !isStyledComponent(attr)) {
            if (process.env.NODE_ENV !== 'production') {
              _this2.warnAttrsFnObjectKeyDeprecated(key, props.forwardedComponent.displayName);
            }

            attr = attr(context);

            if (process.env.NODE_ENV !== 'production' && React.isValidElement(attr)) {
              _this2.warnNonStyledComponentAttrsObjectKey(key, props.forwardedComponent.displayName);
            }
          }
        }

        _this2.attrs[key] = attr;
        context[key] = attr;
      }
      /* eslint-enable */
    });

    return context;
  };

  StyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(theme, props) {
    var _props$forwardedCompo2 = props.forwardedComponent,
        attrs = _props$forwardedCompo2.attrs,
        componentStyle = _props$forwardedCompo2.componentStyle,
        warnTooManyClasses = _props$forwardedCompo2.warnTooManyClasses;

    // statically styled-components don't need to build an execution context object,
    // and shouldn't be increasing the number of class names

    if (componentStyle.isStatic && !attrs.length) {
      return componentStyle.generateAndInjectStyles(EMPTY_OBJECT, this.styleSheet);
    }

    var className = componentStyle.generateAndInjectStyles(this.buildExecutionContext(theme, props, attrs), this.styleSheet);

    if (process.env.NODE_ENV !== 'production' && warnTooManyClasses) warnTooManyClasses(className);

    return className;
  };

  return StyledComponent;
}(Component);

function createStyledComponent(target, options, rules) {
  var isTargetStyledComp = isStyledComponent(target);
  var isClass = !isTag(target);

  var _options$displayName = options.displayName,
      displayName = _options$displayName === undefined ? generateDisplayName(target) : _options$displayName,
      _options$componentId = options.componentId,
      componentId = _options$componentId === undefined ? generateId(ComponentStyle, options.displayName, options.parentComponentId) : _options$componentId,
      _options$ParentCompon = options.ParentComponent,
      ParentComponent = _options$ParentCompon === undefined ? StyledComponent : _options$ParentCompon,
      _options$attrs = options.attrs,
      attrs = _options$attrs === undefined ? EMPTY_ARRAY : _options$attrs;


  var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + '-' + options.componentId : options.componentId || componentId;

  // fold the underlying StyledComponent attrs up (implicit extend)
  var finalAttrs =
  // $FlowFixMe
  isTargetStyledComp && target.attrs ? Array.prototype.concat(target.attrs, attrs).filter(Boolean) : attrs;

  var componentStyle = new ComponentStyle(isTargetStyledComp ? // fold the underlying StyledComponent rules up (implicit extend)
  // $FlowFixMe
  target.componentStyle.rules.concat(rules) : rules, finalAttrs, styledComponentId);

  /**
   * forwardRef creates a new interim component, which we'll take advantage of
   * instead of extending ParentComponent to create _another_ interim class
   */
  var WrappedStyledComponent = void 0;
  var forwardRef = function forwardRef(props, ref) {
    return React.createElement(ParentComponent, _extends({}, props, { forwardedComponent: WrappedStyledComponent, forwardedRef: ref }));
  };
  forwardRef.displayName = displayName;
  WrappedStyledComponent = React.forwardRef(forwardRef);
  WrappedStyledComponent.displayName = displayName;

  // $FlowFixMe
  WrappedStyledComponent.attrs = finalAttrs;
  // $FlowFixMe
  WrappedStyledComponent.componentStyle = componentStyle;

  // $FlowFixMe
  WrappedStyledComponent.foldedComponentIds = isTargetStyledComp ? // $FlowFixMe
  Array.prototype.concat(target.foldedComponentIds, target.styledComponentId) : EMPTY_ARRAY;

  // $FlowFixMe
  WrappedStyledComponent.styledComponentId = styledComponentId;

  // fold the underlying StyledComponent target up since we folded the styles
  // $FlowFixMe
  WrappedStyledComponent.target = isTargetStyledComp ? target.target : target;

  // $FlowFixMe
  WrappedStyledComponent.withComponent = function withComponent(tag) {
    var previousComponentId = options.componentId,
        optionsToCopy = objectWithoutProperties(options, ['componentId']);


    var newComponentId = previousComponentId && previousComponentId + '-' + (isTag(tag) ? tag : escape(getComponentName(tag)));

    var newOptions = _extends({}, optionsToCopy, {
      attrs: finalAttrs,
      componentId: newComponentId,
      ParentComponent: ParentComponent
    });

    return createStyledComponent(tag, newOptions, rules);
  };

  // $FlowFixMe
  Object.defineProperty(WrappedStyledComponent, 'defaultProps', {
    get: function get$$1() {
      return this._foldedDefaultProps;
    },
    set: function set$$1(obj) {
      // $FlowFixMe
      this._foldedDefaultProps = isTargetStyledComp ? merge(target.defaultProps, obj) : obj;
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    // $FlowFixMe
    WrappedStyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName);
  }

  // $FlowFixMe
  WrappedStyledComponent.toString = function () {
    return '.' + WrappedStyledComponent.styledComponentId;
  };

  if (isClass) {
    hoistNonReactStatics(WrappedStyledComponent, target, {
      // all SC-specific things should not be hoisted
      attrs: true,
      componentStyle: true,
      displayName: true,
      foldedComponentIds: true,
      styledComponentId: true,
      target: true,
      withComponent: true
    });
  }

  return WrappedStyledComponent;
}

// 
// Thanks to ReactDOMFactories for this handy list!

var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',

// SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'marker', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

// 

var styled = function styled(tag) {
  return constructWithOptions(createStyledComponent, tag);
};

// Shorthands for all valid HTML Elements
domElements.forEach(function (domElement) {
  styled[domElement] = styled(domElement);
});

// 

var GlobalStyle = function () {
  function GlobalStyle(rules, componentId) {
    classCallCheck(this, GlobalStyle);

    this.rules = rules;
    this.componentId = componentId;
    this.isStatic = isStaticRules(rules, EMPTY_ARRAY);

    if (!StyleSheet.master.hasId(componentId)) {
      StyleSheet.master.deferredInject(componentId, []);
    }
  }

  GlobalStyle.prototype.createStyles = function createStyles(executionContext, styleSheet) {
    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var css = stringifyRules(flatCSS, '');

    styleSheet.inject(this.componentId, css);
  };

  GlobalStyle.prototype.removeStyles = function removeStyles(styleSheet) {
    var componentId = this.componentId;

    if (styleSheet.hasId(componentId)) {
      styleSheet.remove(componentId);
    }
  };

  // TODO: overwrite in-place instead of remove+create?


  GlobalStyle.prototype.renderStyles = function renderStyles(executionContext, styleSheet) {
    this.removeStyles(styleSheet);
    this.createStyles(executionContext, styleSheet);
  };

  return GlobalStyle;
}();

// 

// place our cache into shared context so it'll persist between HMRs
if (IS_BROWSER) {
  window.scCGSHMRCache = {};
}

// 

/* Warning if you've imported this file on React Native */
if (process.env.NODE_ENV !== 'production' && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
  // eslint-disable-next-line no-console
  console.warn("It looks like you've imported 'styled-components' on React Native.\n" + "Perhaps you're looking to import 'styled-components/native'?\n" + 'Read more about this at https://www.styled-components.com/docs/basics#react-native');
}

/* Warning if there are several instances of styled-components */
if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test' && typeof window !== 'undefined' && typeof navigator !== 'undefined' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Node.js') === -1 && navigator.userAgent.indexOf('jsdom') === -1) {
  window['__styled-components-init__'] = window['__styled-components-init__'] || 0;

  if (window['__styled-components-init__'] === 1) {
    // eslint-disable-next-line no-console
    console.warn("It looks like there are several instances of 'styled-components' initialized in this application. " + 'This may cause dynamic styles not rendering properly, errors happening during rehydration process ' + 'and makes your application bigger without a good reason.\n\n' + 'See https://s-c.sh/2BAXzed for more info.');
  }

  window['__styled-components-init__'] += 1;
}

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

var css$2 = "/* Slider */\n.slick-slider\n{\n    position: relative;\n\n    display: block;\n    box-sizing: border-box;\n\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n\n    -webkit-touch-callout: none;\n    -khtml-user-select: none;\n    -ms-touch-action: pan-y;\n        touch-action: pan-y;\n    -webkit-tap-highlight-color: transparent;\n}\n\n.slick-list\n{\n    position: relative;\n\n    display: block;\n    overflow: hidden;\n\n    margin: 0;\n    padding: 0;\n}\n.slick-list:focus\n{\n    outline: none;\n}\n.slick-list.dragging\n{\n    cursor: pointer;\n    cursor: hand;\n}\n\n.slick-slider .slick-track,\n.slick-slider .slick-list\n{\n    -webkit-transform: translate3d(0, 0, 0);\n       -moz-transform: translate3d(0, 0, 0);\n        -ms-transform: translate3d(0, 0, 0);\n         -o-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n\n.slick-track\n{\n    position: relative;\n    top: 0;\n    left: 0;\n\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n.slick-track:before,\n.slick-track:after\n{\n    display: table;\n\n    content: '';\n}\n.slick-track:after\n{\n    clear: both;\n}\n.slick-loading .slick-track\n{\n    visibility: hidden;\n}\n\n.slick-slide\n{\n    display: none;\n    float: left;\n\n    height: 100%;\n    min-height: 1px;\n}\n[dir='rtl'] .slick-slide\n{\n    float: right;\n}\n.slick-slide img\n{\n    display: block;\n}\n.slick-slide.slick-loading img\n{\n    display: none;\n}\n.slick-slide.dragging img\n{\n    pointer-events: none;\n}\n.slick-initialized .slick-slide\n{\n    display: block;\n}\n.slick-loading .slick-slide\n{\n    visibility: hidden;\n}\n.slick-vertical .slick-slide\n{\n    display: block;\n\n    height: auto;\n\n    border: 1px solid transparent;\n}\n.slick-arrow.slick-hidden {\n    display: none;\n}\n";
styleInject(css$2);

var css$3 = "@charset 'UTF-8';\n/* Slider */\n.slick-loading .slick-list\n{\n    background: #fff url('./ajax-loader.gif') center center no-repeat;\n}\n\n/* Icons */\n@font-face\n{\n    font-family: 'slick';\n    font-weight: normal;\n    font-style: normal;\n\n    src: url('./fonts/slick.eot');\n    src: url('./fonts/slick.eot?#iefix') format('embedded-opentype'), url('./fonts/slick.woff') format('woff'), url('./fonts/slick.ttf') format('truetype'), url('./fonts/slick.svg#slick') format('svg');\n}\n/* Arrows */\n.slick-prev,\n.slick-next\n{\n    font-size: 0;\n    line-height: 0;\n\n    position: absolute;\n    top: 50%;\n\n    display: block;\n\n    width: 20px;\n    height: 20px;\n    padding: 0;\n    -webkit-transform: translate(0, -50%);\n    -ms-transform: translate(0, -50%);\n    transform: translate(0, -50%);\n\n    cursor: pointer;\n\n    color: transparent;\n    border: none;\n    outline: none;\n    background: transparent;\n}\n.slick-prev:hover,\n.slick-prev:focus,\n.slick-next:hover,\n.slick-next:focus\n{\n    color: transparent;\n    outline: none;\n    background: transparent;\n}\n.slick-prev:hover:before,\n.slick-prev:focus:before,\n.slick-next:hover:before,\n.slick-next:focus:before\n{\n    opacity: 1;\n}\n.slick-prev.slick-disabled:before,\n.slick-next.slick-disabled:before\n{\n    opacity: .25;\n}\n\n.slick-prev:before,\n.slick-next:before\n{\n    font-family: 'slick';\n    font-size: 20px;\n    line-height: 1;\n\n    opacity: .75;\n    color: white;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.slick-prev\n{\n    left: -25px;\n}\n[dir='rtl'] .slick-prev\n{\n    right: -25px;\n    left: auto;\n}\n.slick-prev:before\n{\n    content: '←';\n}\n[dir='rtl'] .slick-prev:before\n{\n    content: '→';\n}\n\n.slick-next\n{\n    right: -25px;\n}\n[dir='rtl'] .slick-next\n{\n    right: auto;\n    left: -25px;\n}\n.slick-next:before\n{\n    content: '→';\n}\n[dir='rtl'] .slick-next:before\n{\n    content: '←';\n}\n\n/* Dots */\n.slick-dotted.slick-slider\n{\n    margin-bottom: 30px;\n}\n\n.slick-dots\n{\n    position: absolute;\n    bottom: -25px;\n\n    display: block;\n\n    width: 100%;\n    padding: 0;\n    margin: 0;\n\n    list-style: none;\n\n    text-align: center;\n}\n.slick-dots li\n{\n    position: relative;\n\n    display: inline-block;\n\n    width: 20px;\n    height: 20px;\n    margin: 0 5px;\n    padding: 0;\n\n    cursor: pointer;\n}\n.slick-dots li button\n{\n    font-size: 0;\n    line-height: 0;\n\n    display: block;\n\n    width: 20px;\n    height: 20px;\n    padding: 5px;\n\n    cursor: pointer;\n\n    color: transparent;\n    border: 0;\n    outline: none;\n    background: transparent;\n}\n.slick-dots li button:hover,\n.slick-dots li button:focus\n{\n    outline: none;\n}\n.slick-dots li button:hover:before,\n.slick-dots li button:focus:before\n{\n    opacity: 1;\n}\n.slick-dots li button:before\n{\n    font-family: 'slick';\n    font-size: 6px;\n    line-height: 20px;\n\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    width: 20px;\n    height: 20px;\n\n    content: '•';\n    text-align: center;\n\n    opacity: .25;\n    color: black;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n.slick-dots li.slick-active button:before\n{\n    opacity: .75;\n    color: black;\n}\n";
styleInject(css$3);

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
  if (isObject$1(options)) {
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
function isObject$1(value) {
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
function isObjectLike$1(value) {
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
function isSymbol$1(value) {
  return typeof value == 'symbol' ||
    (isObjectLike$1(value) && objectToString.call(value) == symbolTag);
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
  if (isSymbol$1(value)) {
    return NAN;
  }
  if (isObject$1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject$1(other) ? (other + '') : other;
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

var index$1 = (function () {
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









var _resizeObserverPolyfill = _interopRequireDefault(index$1);

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

      for (var index = _this.state.currentSlide; index < _this.state.slideCount + (0, innerSliderUtils.getPostClones)(spec); index++) {
        if (_this.state.lazyLoadedList.indexOf(index) < 0) {
          slidesToLoad.push(index);
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

    _defineProperty(_assertThisInitialized(_this), "slideHandler", function (index) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var _this$props = _this.props,
          asNavFor = _this$props.asNavFor,
          beforeChange = _this$props.beforeChange,
          onLazyLoad = _this$props.onLazyLoad,
          speed = _this$props.speed,
          afterChange = _this$props.afterChange; // capture currentslide before state is updated

      var currentSlide = _this.state.currentSlide;

      var _slideHandler = (0, innerSliderUtils.slideHandler)(_objectSpread({
        index: index
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
        asNavFor && asNavFor.innerSlider.slideHandler(index);
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
function isArray$1(target) {
    return Object.prototype.toString.apply(target) === '[object Array]';
}

/**
 * Helper function for determining whether target object is a function
 *
 * @param target the object under test
 * @return {Boolean} true if function, false otherwise
 */
function isFunction$2(target) {
    return typeof target === 'function';
}

var Util = {
    isFunction : isFunction$2,
    isArray : isArray$1,
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
var isFunction$3 = Util.isFunction;
var isArray$2 = Util.isArray;

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
        if(isFunction$3(options)) {
            options = { match : options };
        }
        if(!isArray$2(options)) {
            options = [options];
        }
        each$2(options, function(handler) {
            if (isFunction$3(handler)) {
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

var imgArrowLeft = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Capa_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20viewBox%3D%220%200%20477.175%20477.175%22%20style%3D%22enable-background%3Anew%200%200%20477.175%20477.175%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%20%3Cpath%20d%3D%22M145.188%2C238.575l215.5-215.5c5.3-5.3%2C5.3-13.8%2C0-19.1s-13.8-5.3-19.1%2C0l-225.1%2C225.1c-5.3%2C5.3-5.3%2C13.8%2C0%2C19.1l225.1%2C225%20%20c2.6%2C2.6%2C6.1%2C4%2C9.5%2C4s6.9-1.3%2C9.5-4c5.3-5.3%2C5.3-13.8%2C0-19.1L145.188%2C238.575z%22%2F%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

var _ref$2 =
/*#__PURE__*/
React.createElement("path", {
  d: "M360.731 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z"
});

var imgArrowRight = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Capa_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20viewBox%3D%220%200%20477.175%20477.175%22%20style%3D%22enable-background%3Anew%200%200%20477.175%20477.175%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%20%3Cpath%20d%3D%22M360.731%2C229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1%2C0s-5.3%2C13.8%2C0%2C19.1l215.5%2C215.5l-215.5%2C215.5%20%20c-5.3%2C5.3-5.3%2C13.8%2C0%2C19.1c2.6%2C2.6%2C6.1%2C4%2C9.5%2C4c3.4%2C0%2C6.9-1.3%2C9.5-4l225.1-225.1C365.931%2C242.875%2C365.931%2C234.275%2C360.731%2C229.075z%20%20%22%2F%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

var classCallCheck$1 = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass$1 = function () {
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

var _extends$4 = Object.assign || function (target) {
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

var inherits$1 = function (subClass, superClass) {
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

var possibleConstructorReturn$1 = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

var _templateObject = taggedTemplateLiteral(['\n    background-color: #ddd;\n    position: relative;\n    display: block;\n    margin: 0px auto;\n    width: ', ';\n    height: ', ';\n    ', ';\n    border: ', ';\n    z-index: 3;\n    overflow: hidden;\n\n    @media only screen and (min-width: 1440px) {\n      margin: 0px auto\n    }\n    @media only screen and (max-width: 767.98px) and (min-width: 457px){\n      width: ', ';\n      height: ', ';\n    }\n    @media only screen and (max-width: 456.98px) {\n      width: 200px;\n      height: 200px;\n    }\n'], ['\n    background-color: #ddd;\n    position: relative;\n    display: block;\n    margin: 0px auto;\n    width: ', ';\n    height: ', ';\n    ', ';\n    border: ', ';\n    z-index: 3;\n    overflow: hidden;\n\n    @media only screen and (min-width: 1440px) {\n      margin: 0px auto\n    }\n    @media only screen and (max-width: 767.98px) and (min-width: 457px){\n      width: ', ';\n      height: ', ';\n    }\n    @media only screen and (max-width: 456.98px) {\n      width: 200px;\n      height: 200px;\n    }\n']),
    _templateObject2 = taggedTemplateLiteral(['\n    background-color: #ddd;\n    position: relative;\n    display: block;\n    width: ', ';\n    height: ', ';\n    ', ';\n    border: ', ';\n    z-index: 3;\n    overflow: hidden;\n\n    @media only screen and (min-width: 1440px) {\n      margin: 0px auto\n    }\n\n    @media only screen and (max-width: 767.98px) and (min-width: 576px){\n      width: 250px;\n      height: 250px;\n    }\n    @media only screen and (max-width: 575.98px) {\n      width: 200px;\n      height: 200px;\n    }\n    @media only screen and (max-width: 479.98px) {\n      margin: 0px auto\n    }\n'], ['\n    background-color: #ddd;\n    position: relative;\n    display: block;\n    width: ', ';\n    height: ', ';\n    ', ';\n    border: ', ';\n    z-index: 3;\n    overflow: hidden;\n\n    @media only screen and (min-width: 1440px) {\n      margin: 0px auto\n    }\n\n    @media only screen and (max-width: 767.98px) and (min-width: 576px){\n      width: 250px;\n      height: 250px;\n    }\n    @media only screen and (max-width: 575.98px) {\n      width: 200px;\n      height: 200px;\n    }\n    @media only screen and (max-width: 479.98px) {\n      margin: 0px auto\n    }\n']),
    _templateObject3 = taggedTemplateLiteral(['\n  background-color: #ddd;\n  position: relative;\n  display: block;\n  width: ', ';\n  height: ', ';\n  ', ';\n  border: ', ';\n  z-index: 3;\n  overflow: hidden;\n\n  @media only screen and (min-width: 1440px) {\n    margin: 0px auto\n  }\n  @media only screen and (max-width: 767.98px) and (min-width: 576px){\n    width: 250px;\n    height: 250px;\n  }\n  @media only screen and (max-width: 575.98px) {\n    width: 200px;\n    height: 200px;\n  }\n  @media only screen and (max-width: 479.98px) {\n    margin: 0px auto\n  }\n  '], ['\n  background-color: #ddd;\n  position: relative;\n  display: block;\n  width: ', ';\n  height: ', ';\n  ', ';\n  border: ', ';\n  z-index: 3;\n  overflow: hidden;\n\n  @media only screen and (min-width: 1440px) {\n    margin: 0px auto\n  }\n  @media only screen and (max-width: 767.98px) and (min-width: 576px){\n    width: 250px;\n    height: 250px;\n  }\n  @media only screen and (max-width: 575.98px) {\n    width: 200px;\n    height: 200px;\n  }\n  @media only screen and (max-width: 479.98px) {\n    margin: 0px auto\n  }\n  ']),
    _templateObject4 = taggedTemplateLiteral(['\n    object-fit: cover;\n    position: absolute;\n    left: 50%;\n    transform: translate(-50%, 0%);\n    width: ', ';\n    height: ', ';\n    z-index: -1;\n    ', ';\n   \n    @media only screen and (max-width: 767.98px) and (min-width: 576px){\n      width: 250px;\n      height: 250px;\n    }\n    @media only screen and (max-width: 575.98px) {\n      width: 200px;\n      height: 200px;\n    }\n    @media only screen and (max-width: 479.98px) {\n      margin: 0px auto\n    }\n'], ['\n    object-fit: cover;\n    position: absolute;\n    left: 50%;\n    transform: translate(-50%, 0%);\n    width: ', ';\n    height: ', ';\n    z-index: -1;\n    ', ';\n   \n    @media only screen and (max-width: 767.98px) and (min-width: 576px){\n      width: 250px;\n      height: 250px;\n    }\n    @media only screen and (max-width: 575.98px) {\n      width: 200px;\n      height: 200px;\n    }\n    @media only screen and (max-width: 479.98px) {\n      margin: 0px auto\n    }\n']),
    _templateObject5 = taggedTemplateLiteral(['\n    object-fit: cover;\n    position: absolute;\n    left: 50%;\n    ', ';\n    ', ';\n    width: ', ';\n    height: ', ';\n    z-index: -1;\n    ', ';\n   \n    @media only screen and (max-width: 767.98px) and (min-width: 457px){\n      width: ', ';\n      height: ', ';\n    }\n    @media only screen and (max-width: 456.98px) {\n      width: 200px;\n      height: 200px;\n    }\n'], ['\n    object-fit: cover;\n    position: absolute;\n    left: 50%;\n    ', ';\n    ', ';\n    width: ', ';\n    height: ', ';\n    z-index: -1;\n    ', ';\n   \n    @media only screen and (max-width: 767.98px) and (min-width: 457px){\n      width: ', ';\n      height: ', ';\n    }\n    @media only screen and (max-width: 456.98px) {\n      width: 200px;\n      height: 200px;\n    }\n']),
    _templateObject6 = taggedTemplateLiteral(['\n    position : absolute;\n    top: 30%;\n    left: 0%;\n    width: 20px;\n    height: 20px;\n    z-index: 2;\n    cursor: pointer;\n   \n'], ['\n    position : absolute;\n    top: 30%;\n    left: 0%;\n    width: 20px;\n    height: 20px;\n    z-index: 2;\n    cursor: pointer;\n   \n']),
    _templateObject7 = taggedTemplateLiteral(['\n    position : absolute;\n    top: 30%;\n    right: 0%;\n    width: 20px;\n    height: 20px;\n    z-index: 2;\n    cursor: pointer;\n'], ['\n    position : absolute;\n    top: 30%;\n    right: 0%;\n    width: 20px;\n    height: 20px;\n    z-index: 2;\n    cursor: pointer;\n']);

function getBorderRadius(value) {
  return 'border-radius: ' + value + '%;';
}

function setImagePosition(value) {
  if (value === 2) {
    return 'transform : translate(-53%,-60%);';
  } else {
    return 'transform : translate(-50%,-50%);';
  }
}

var MasspaMenuLink01 = styled.a(_templateObject, function (props) {
  return props.sizeImage + 'px';
}, function (props) {
  return props.sizeImage + 'px';
}, function (_ref) {
  var borderRadius = _ref.borderRadius;
  return borderRadius === 'rounded' ? getBorderRadius(50) : 'border-radius: ' + borderRadius;
}, function (props) {
  return props.borderImage;
}, function (props) {
  return props.sizeImage * 2 + 'px';
}, function (props) {
  return props.sizeImage * 2 + 'px';
});
var MasspaMenuLink02 = styled.a(_templateObject2, function (props) {
  return props.sizeImage + 'px';
}, function (props) {
  return props.sizeImage + 'px';
}, function (_ref2) {
  var borderRadius = _ref2.borderRadius;
  return borderRadius === 'rounded' ? getBorderRadius(50) : 'border-radius: ' + borderRadius;
}, function (props) {
  return props.borderImage;
});
var MasspaMenuLink03 = styled.div(_templateObject3, function (props) {
  return props.sizeImage + 'px';
}, function (props) {
  return props.sizeImage + 'px';
}, function (_ref3) {
  var borderRadius = _ref3.borderRadius;
  return borderRadius === 'rounded' ? getBorderRadius(50) : 'border-radius: ' + borderRadius;
}, function (props) {
  return props.borderImage;
});
var MasspaMenuImage02 = styled.img(_templateObject4, function (props) {
  return props.sizeImage + 'px';
}, function (props) {
  return props.sizeImage + 'px';
}, function (_ref4) {
  var borderRadius = _ref4.borderRadius;
  return borderRadius === 'rounded' ? getBorderRadius(50) : 'border-radius: ' + borderRadius;
});

var MasspaMenuImage = styled.img(_templateObject5, function (_ref5) {
  var mode = _ref5.mode;
  return mode === 1 ? "top:50%" : "top:0%";
}, function (_ref6) {
  var mode = _ref6.mode;
  return mode === 1 ? setImagePosition(1) : setImagePosition(2);
}, function (props) {
  return props.sizeImage + 'px';
}, function (props) {
  return props.sizeImage + 'px';
}, function (_ref7) {
  var borderRadius = _ref7.borderRadius;
  return borderRadius === 'rounded' ? getBorderRadius(50) : 'border-radius: ' + borderRadius;
}, function (props) {
  return props.sizeImage * 2 + 'px';
}, function (props) {
  return props.sizeImage * 2 + 'px';
});
var ArrowLeft = styled.img(_templateObject6);

var ArrowRight = styled.img(_templateObject7);

var MasspaItemCategory = function (_Component) {
  inherits$1(MasspaItemCategory, _Component);

  function MasspaItemCategory(props) {
    classCallCheck$1(this, MasspaItemCategory);

    var _this = possibleConstructorReturn$1(this, (MasspaItemCategory.__proto__ || Object.getPrototypeOf(MasspaItemCategory)).call(this, props));

    _this.nextMenuCategory = _this.nextMenuCategory.bind(_this);
    _this.previousMenuCategory = _this.previousMenuCategory.bind(_this);
    return _this;
  }

  createClass$1(MasspaItemCategory, [{
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
    key: 'handleClickLink',
    value: function handleClickLink(id, link) {
      if (typeof navigate !== 'undefined') {
        navigate('' + link + id);
      }
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
                _extends$4({ ref: function ref(c) {
                    return _this2.sliderItemServices = c;
                  } }, settingItem),
                featuredItems.map(function (item, i) {
                  if (item.image === "") {
                    if (mode === 2) {
                      if (animation === 'zoom') {
                        return React.createElement(
                          'div',
                          { className: 'masspa-item-category-container', key: i },
                          typeof navigate !== 'undefined' ? React.createElement(
                            MasspaMenuLink03,
                            { onClick: function onClick() {
                                return _this2.handleClickLink(item.itemCode, link);
                              }, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-zoom' },
                            React.createElement(
                              'span',
                              { className: 'masspa-item-category-overlay-2' },
                              React.createElement(MasspaMenuImage, { src: imageDefaut, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode }),
                              React.createElement(
                                'div',
                                { className: 'masspa-item-category-title-2', style: { color: '' + colorTitle } },
                                item.title
                              )
                            )
                          ) : React.createElement(
                            MasspaMenuLink01,
                            { href: '' + link + item.itemCode, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-zoom' },
                            React.createElement(
                              'span',
                              { className: 'masspa-item-category-overlay-2' },
                              React.createElement(MasspaMenuImage, { src: imageDefaut, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode }),
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
                          typeof navigate !== 'undefined' ? React.createElement(
                            MasspaMenuLink03,
                            { onClick: function onClick() {
                                return _this2.handleClickLink(item.itemCode, link);
                              }, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-rotate' },
                            React.createElement(
                              'span',
                              { className: 'masspa-item-category-overlay-2' },
                              React.createElement(MasspaMenuImage, { src: imageDefaut, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode }),
                              React.createElement(
                                'div',
                                { className: 'masspa-item-category-title-2', style: { color: '' + colorTitle } },
                                item.title
                              )
                            )
                          ) : React.createElement(
                            MasspaMenuLink01,
                            { href: '' + link + item.itemCode, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-rotate' },
                            React.createElement(
                              'span',
                              { className: 'masspa-item-category-overlay-2' },
                              React.createElement(MasspaMenuImage, { src: imageDefaut, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode }),
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
                          typeof navigate !== 'undefined' ? React.createElement(
                            MasspaMenuLink03,
                            { onClick: function onClick() {
                                return _this2.handleClickLink(item.itemCode, link);
                              }, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage },
                            React.createElement(
                              'span',
                              { className: 'masspa-item-category-overlay-2' },
                              React.createElement(MasspaMenuImage, { src: imageDefaut, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode }),
                              React.createElement(
                                'div',
                                { className: 'masspa-item-category-title-2', style: { color: '' + colorTitle } },
                                item.title
                              )
                            )
                          ) : React.createElement(
                            MasspaMenuLink01,
                            { href: '' + link + item.itemCode, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage },
                            React.createElement(
                              'span',
                              { className: 'masspa-item-category-overlay-2' },
                              React.createElement(MasspaMenuImage, { src: imageDefaut, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode }),
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
                          { className: 'masspa-item-category-container', key: i },
                          typeof navigate !== 'undefined' ? React.createElement(
                            MasspaMenuLink03,
                            { onClick: function onClick() {
                                return _this2.handleClickLink(item.itemCode, link);
                              }, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-zoom' },
                            React.createElement(MasspaMenuImage, { src: imageDefaut, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode })
                          ) : React.createElement(
                            MasspaMenuLink01,
                            { href: '' + link + item.itemCode, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-zoom' },
                            React.createElement(MasspaMenuImage, { src: imageDefaut, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode })
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
                          { className: 'masspa-item-category-container', key: i },
                          typeof navigate !== 'undefined' ? React.createElement(
                            MasspaMenuLink03,
                            { onClick: function onClick() {
                                return _this2.handleClickLink(item.itemCode, link);
                              }, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-rotate' },
                            React.createElement(MasspaMenuImage, { src: imageDefaut, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode })
                          ) : React.createElement(
                            MasspaMenuLink01,
                            { href: '' + link + item.itemCode, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-rotate' },
                            React.createElement(MasspaMenuImage, { src: imageDefaut, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode })
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
                          { className: 'masspa-item-category-container', key: i },
                          typeof navigate !== 'undefined' ? React.createElement(
                            MasspaMenuLink03,
                            { onClick: function onClick() {
                                return _this2.handleClickLink(item.itemCode, link);
                              }, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage },
                            React.createElement(MasspaMenuImage, { src: imageDefaut, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode })
                          ) : React.createElement(
                            MasspaMenuLink01,
                            { href: '' + link + item.itemCode, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage },
                            React.createElement(MasspaMenuImage, { src: imageDefaut, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode })
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
                          typeof navigate !== 'undefined' ? React.createElement(
                            MasspaMenuLink03,
                            { onClick: function onClick() {
                                return _this2.handleClickLink(item.itemCode, link);
                              }, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-zoom' },
                            React.createElement(
                              'span',
                              { className: 'masspa-item-category-overlay-2' },
                              React.createElement(MasspaMenuImage, { src: item.image, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode }),
                              React.createElement(
                                'div',
                                { className: 'masspa-item-category-title-2', style: { color: '' + colorTitle } },
                                item.title
                              )
                            )
                          ) : React.createElement(
                            MasspaMenuLink01,
                            { href: '' + link + item.itemCode, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-zoom' },
                            React.createElement(
                              'span',
                              { className: 'masspa-item-category-overlay-2' },
                              React.createElement(MasspaMenuImage, { src: item.image, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode }),
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
                          typeof navigate !== 'undefined' ? React.createElement(
                            MasspaMenuLink03,
                            { onClick: function onClick() {
                                return _this2.handleClickLink(item.itemCode, link);
                              }, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-rotate' },
                            React.createElement(
                              'span',
                              { className: 'masspa-item-category-overlay-2' },
                              React.createElement(MasspaMenuImage, { src: item.image, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode }),
                              React.createElement(
                                'div',
                                { className: 'masspa-item-category-title-2', style: { color: '' + colorTitle } },
                                item.title
                              )
                            )
                          ) : React.createElement(
                            MasspaMenuLink01,
                            { href: '' + link + item.itemCode, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-rotate' },
                            React.createElement(
                              'span',
                              { className: 'masspa-item-category-overlay-2' },
                              React.createElement(MasspaMenuImage, { src: item.image, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode }),
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
                          typeof navigate !== 'undefined' ? React.createElement(
                            MasspaMenuLink03,
                            { onClick: function onClick() {
                                return _this2.handleClickLink(item.itemCode, link);
                              }, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage },
                            React.createElement(
                              'span',
                              { className: 'masspa-item-category-overlay-2' },
                              React.createElement(MasspaMenuImage, { src: item.image, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode }),
                              React.createElement(
                                'div',
                                { className: 'masspa-item-category-title-2', style: { color: '' + colorTitle } },
                                item.title
                              )
                            )
                          ) : React.createElement(
                            MasspaMenuLink01,
                            { href: '' + link + item.itemCode, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage },
                            React.createElement(
                              'span',
                              { className: 'masspa-item-category-overlay-2' },
                              React.createElement(MasspaMenuImage, { src: item.image, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode }),
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
                          { className: 'masspa-item-category-container', key: i },
                          typeof navigate !== 'undefined' ? React.createElement(
                            MasspaMenuLink01,
                            { onClick: function onClick() {
                                return _this2.handleClickLink(item.itemCode, link);
                              }, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-zoom' },
                            React.createElement(MasspaMenuImage, { src: item.image, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode })
                          ) : React.createElement(
                            MasspaMenuLink01,
                            { href: '' + link + item.itemCode, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-zoom' },
                            React.createElement(MasspaMenuImage, { src: item.image, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode })
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
                          { className: 'masspa-item-category-container', key: i },
                          typeof navigate !== 'undefined' ? React.createElement(
                            MasspaMenuLink03,
                            { onClick: function onClick() {
                                return _this2.handleClickLink(item.itemCode, link);
                              }, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-rotate' },
                            React.createElement(MasspaMenuImage, { src: item.image, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode })
                          ) : React.createElement(
                            MasspaMenuLink01,
                            { href: '' + link + item.itemCode, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-rotate' },
                            React.createElement(MasspaMenuImage, { src: item.image, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode })
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
                          { className: 'masspa-item-category-container', key: i },
                          typeof navigate !== 'undefined' ? React.createElement(
                            MasspaMenuLink03,
                            { onClick: function onClick() {
                                return _this2.handleClickLink(item.itemCode, link);
                              }, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage },
                            React.createElement(MasspaMenuImage, { src: item.image, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode })
                          ) : React.createElement(
                            MasspaMenuLink01,
                            { href: '' + link + item.itemCode, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage },
                            React.createElement(MasspaMenuImage, { src: item.image, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode })
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
              React.createElement(ArrowLeft, { src: imgArrowLeft, onClick: this.previousMenuCategory }),
              React.createElement(ArrowRight, { src: imgArrowRight, onClick: this.nextMenuCategory })
            );
          } else {

            return React.createElement(
              'div',
              { className: 'row no-gutters' },
              featuredItems.map(function (item, i) {
                if (item.image === "" || item.image === null) {
                  if (layout === 2) {
                    //dang dac biet
                    if (mode === 2) {
                      if (animation === 'zoom') {
                        return React.createElement(
                          'div',
                          { className: 'col-md-6 col-sm-12 col-xs-6', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-card fade-in-left' },
                            React.createElement(
                              'div',
                              { className: 'col-md-5 col-sm-5' },
                              typeof navigate !== 'undefined' ? React.createElement(
                                MasspaMenuLink03,
                                { onClick: function onClick() {
                                    return _this2.handleClickLink(item.itemCode, link);
                                  }, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-zoom' },
                                React.createElement(
                                  'span',
                                  { className: 'masspa-item-category-overlay-2' },
                                  React.createElement(MasspaMenuImage, { src: imageDefaut, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode }),
                                  React.createElement(
                                    'div',
                                    { className: 'masspa-item-category-title-2', style: { color: '' + colorTitle } },
                                    item.title
                                  )
                                )
                              ) : React.createElement(
                                MasspaMenuLink02,
                                { href: '' + link + item.itemCode, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-zoom' },
                                React.createElement(
                                  'span',
                                  { className: 'masspa-item-category-overlay-2' },
                                  React.createElement(MasspaMenuImage, { src: imageDefaut, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode }),
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
                              { className: 'col-md-7 col-sm-7' },
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
                          { className: 'col-md-6 col-sm-12 col-xs-6', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-card fade-in-left' },
                            React.createElement(
                              'div',
                              { className: 'col-md-5 col-sm-5' },
                              typeof navigate !== 'undefined' ? React.createElement(
                                MasspaMenuLink03,
                                { onClick: function onClick() {
                                    return _this2.handleClickLink(item.itemCode, link);
                                  }, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-rotate' },
                                React.createElement(
                                  'span',
                                  { className: 'masspa-item-category-overlay-2' },
                                  React.createElement(MasspaMenuImage, { src: imageDefaut, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode }),
                                  React.createElement(
                                    'div',
                                    { className: 'masspa-item-category-title-2', style: { color: '' + colorTitle } },
                                    item.title
                                  )
                                )
                              ) : React.createElement(
                                MasspaMenuLink02,
                                { href: '' + link + item.itemCode, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-rotate' },
                                React.createElement(
                                  'span',
                                  { className: 'masspa-item-category-overlay-2' },
                                  React.createElement(MasspaMenuImage, { src: imageDefaut, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode }),
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
                              { className: 'col-md-7 col-sm-7' },
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
                          { className: 'col-md-6 col-sm-12 col-xs-6', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-card fade-in-left' },
                            React.createElement(
                              'div',
                              { className: 'col-md-5 col-sm-5' },
                              typeof navigate !== 'undefined' ? React.createElement(
                                MasspaMenuLink03,
                                { onClick: function onClick() {
                                    return _this2.handleClickLink(item.itemCode, link);
                                  }, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage },
                                React.createElement(
                                  'span',
                                  { className: 'masspa-item-category-overlay-2' },
                                  React.createElement(MasspaMenuImage, { src: imageDefaut, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode }),
                                  React.createElement(
                                    'div',
                                    { className: 'masspa-item-category-title-2', style: { color: '' + colorTitle } },
                                    item.title
                                  )
                                )
                              ) : React.createElement(
                                MasspaMenuLink02,
                                { href: '' + link + item.itemCode, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage },
                                React.createElement(
                                  'span',
                                  { className: 'masspa-item-category-overlay-2' },
                                  React.createElement(MasspaMenuImage, { src: imageDefaut, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode }),
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
                              { className: 'col-md-7 col-sm-7' },
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
                      return React.createElement(
                        'div',
                        { className: 'col-md-6 col-sm-12 col-xs-6', key: i },
                        React.createElement(
                          'div',
                          { className: 'masspa-item-category-card fade-in-left' },
                          React.createElement(
                            'div',
                            { className: 'col-md-5 col-sm-5' },
                            typeof navigate !== 'undefined' ? React.createElement(
                              MasspaMenuLink03,
                              { onClick: function onClick() {
                                  return _this2.handleClickLink(item.itemCode, link);
                                }, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-zoom' },
                              React.createElement(MasspaMenuImage02, { src: imageDefaut, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius })
                            ) : React.createElement(
                              MasspaMenuLink02,
                              { href: '' + link + item.itemCode, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-zoom' },
                              React.createElement(MasspaMenuImage02, { src: imageDefaut, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius })
                            )
                          ),
                          React.createElement(
                            'div',
                            { className: 'col-md-7 col-sm-7' },
                            React.createElement(
                              'div',
                              { className: 'masspa-item-category-group-title-text' },
                              React.createElement(
                                'a',
                                { href: link },
                                React.createElement(
                                  'span',
                                  { className: 'masspa-item-category-title-3', style: { color: '' + colorTitle } },
                                  item.title
                                )
                              ),
                              item.description !== null ? React.createElement('div', { className: 'masspa-item-category-text-layout02', dangerouslySetInnerHTML: { __html: '' + item.description } }) : React.createElement('div', null)
                            )
                          )
                        )
                      );
                    }
                  } else {
                    if (mode === 2) {
                      if (animation === 'zoom') {
                        return React.createElement(
                          'div',
                          { className: 'col-sm-12 col-md-3 col-lg-3', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-container' },
                            typeof navigate !== 'undefined' ? React.createElement(
                              MasspaMenuLink03,
                              { onClick: function onClick() {
                                  return _this2.handleClickLink(item.itemCode, link);
                                }, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-zoom' },
                              React.createElement(
                                'span',
                                { className: 'masspa-item-category-overlay-2' },
                                React.createElement(MasspaMenuImage, { src: imageDefaut, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode }),
                                React.createElement(
                                  'div',
                                  { className: 'masspa-item-category-title-2', style: { color: '' + colorTitle } },
                                  item.title
                                )
                              )
                            ) : React.createElement(
                              MasspaMenuLink01,
                              { href: '' + link + item.itemCode, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-zoom' },
                              React.createElement(
                                'span',
                                { className: 'masspa-item-category-overlay-2' },
                                React.createElement(MasspaMenuImage, { src: imageDefaut, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode }),
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
                          { className: 'col-sm-12 col-md-3 col-lg-3', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-container' },
                            typeof navigate !== 'undefined' ? React.createElement(
                              MasspaMenuLink03,
                              { onClick: function onClick() {
                                  return _this2.handleClickLink(item.itemCode, link);
                                }, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-rotate' },
                              React.createElement(
                                'span',
                                { className: 'masspa-item-category-overlay-2' },
                                React.createElement(MasspaMenuImage, { src: imageDefaut, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode }),
                                React.createElement(
                                  'div',
                                  { className: 'masspa-item-category-title-2', style: { color: '' + colorTitle } },
                                  item.title
                                )
                              )
                            ) : React.createElement(
                              MasspaMenuLink01,
                              { href: '' + link + item.itemCode, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-rotate' },
                              React.createElement(
                                'span',
                                { className: 'masspa-item-category-overlay-2' },
                                React.createElement(MasspaMenuImage, { src: imageDefaut, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode }),
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
                          { className: 'col-sm-12 col-md-3 col-lg-3', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-container' },
                            typeof navigate !== 'undefined' ? React.createElement(
                              MasspaMenuLink03,
                              { onClick: function onClick() {
                                  return _this2.handleClickLink(item.itemCode, link);
                                }, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage },
                              React.createElement(
                                'span',
                                { className: 'masspa-item-category-overlay-2' },
                                React.createElement(MasspaMenuImage, { src: imageDefaut, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode }),
                                React.createElement(
                                  'div',
                                  { className: 'masspa-item-category-title-2', style: { color: '' + colorTitle } },
                                  item.title
                                )
                              )
                            ) : React.createElement(
                              MasspaMenuLink01,
                              { href: '' + link + item.itemCode, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage },
                              React.createElement(
                                'span',
                                { className: 'masspa-item-category-overlay-2' },
                                React.createElement(MasspaMenuImage, { src: imageDefaut, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode }),
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
                          { className: 'col-sm-12 col-md-3 col-lg-3', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-container' },
                            typeof navigate !== 'undefined' ? React.createElement(
                              MasspaMenuLink03,
                              { onClick: function onClick() {
                                  return _this2.handleClickLink(item.itemCode, link);
                                }, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-zoom' },
                              React.createElement(MasspaMenuImage, { src: imageDefaut, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode })
                            ) : React.createElement(
                              MasspaMenuLink01,
                              { href: '' + link + item.itemCode, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-zoom' },
                              React.createElement(MasspaMenuImage, { src: imageDefaut, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode })
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
                          { className: 'col-sm-12 col-md-3 col-lg-3', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-container' },
                            typeof navigate !== 'undefined' ? React.createElement(
                              MasspaMenuLink03,
                              { onClick: function onClick() {
                                  return _this2.handleClickLink(item.itemCode, link);
                                }, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-rotate' },
                              React.createElement(MasspaMenuImage, { src: imageDefaut, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode })
                            ) : React.createElement(
                              MasspaMenuLink01,
                              { href: '' + link + item.itemCode, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-rotate' },
                              React.createElement(MasspaMenuImage, { src: imageDefaut, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode })
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
                          { className: 'col-sm-12 col-md-3 col-lg-3', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-container' },
                            typeof navigate !== 'undefined' ? React.createElement(
                              MasspaMenuLink03,
                              { onClick: function onClick() {
                                  return _this2.handleClickLink(item.itemCode, link);
                                }, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage },
                              React.createElement(MasspaMenuImage, { src: imageDefaut, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode })
                            ) : React.createElement(
                              MasspaMenuLink01,
                              { href: '' + link + item.itemCode, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage },
                              React.createElement(MasspaMenuImage, { src: imageDefaut, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode })
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
                          { className: 'col-md-6 col-sm-12 col-xs-6', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-card fade-in-left' },
                            React.createElement(
                              'div',
                              { className: 'col-md-5 col-sm-5' },
                              typeof navigate !== 'undefined' ? React.createElement(
                                MasspaMenuLink03,
                                { onClick: function onClick() {
                                    return _this2.handleClickLink(item.itemCode, link);
                                  }, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-zoom' },
                                React.createElement(
                                  'span',
                                  { className: 'masspa-item-category-overlay-2' },
                                  React.createElement(MasspaMenuImage, { src: item.image, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode }),
                                  React.createElement(
                                    'div',
                                    { className: 'masspa-item-category-title-2', style: { color: '' + colorTitle } },
                                    item.title
                                  )
                                )
                              ) : React.createElement(
                                MasspaMenuLink02,
                                { href: '' + link + item.itemCode, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-zoom' },
                                React.createElement(
                                  'span',
                                  { className: 'masspa-item-category-overlay-2' },
                                  React.createElement(MasspaMenuImage, { src: item.image, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode }),
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
                              { className: 'col-md-7 col-sm-7' },
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
                          { className: 'col-md-6 col-sm-12 col-xs-6', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-card fade-in-left' },
                            React.createElement(
                              'div',
                              { className: 'col-md-5 col-sm-5' },
                              typeof navigate !== 'undefined' ? React.createElement(
                                MasspaMenuLink03,
                                { onClick: function onClick() {
                                    return _this2.handleClickLink(item.itemCode, link);
                                  }, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-rotate' },
                                React.createElement(
                                  'span',
                                  { className: 'masspa-item-category-overlay-2' },
                                  React.createElement(MasspaMenuImage, { src: item.image, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode }),
                                  React.createElement(
                                    'div',
                                    { className: 'masspa-item-category-title-2', style: { color: '' + colorTitle } },
                                    item.title
                                  )
                                )
                              ) : React.createElement(
                                MasspaMenuLink02,
                                { href: '' + link + item.itemCode, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-rotate' },
                                React.createElement(
                                  'span',
                                  { className: 'masspa-item-category-overlay-2' },
                                  React.createElement(MasspaMenuImage, { src: item.image, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode }),
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
                              { className: 'col-md-7 col-sm-7' },
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
                          { className: 'col-md-6 col-sm-12 col-xs-6', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-card fade-in-left' },
                            React.createElement(
                              'div',
                              { className: 'col-md-5 col-sm-5' },
                              typeof navigate !== 'undefined' ? React.createElement(
                                MasspaMenuLink03,
                                { onClick: function onClick() {
                                    return _this2.handleClickLink(item.itemCode, link);
                                  }, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage },
                                React.createElement(
                                  'span',
                                  { className: 'masspa-item-category-overlay-2' },
                                  React.createElement(MasspaMenuImage, { src: item.image, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode }),
                                  React.createElement(
                                    'div',
                                    { className: 'masspa-item-category-title-2', style: { color: '' + colorTitle } },
                                    item.title
                                  )
                                )
                              ) : React.createElement(
                                MasspaMenuLink02,
                                { href: '' + link + item.itemCode, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage },
                                React.createElement(
                                  'span',
                                  { className: 'masspa-item-category-overlay-2' },
                                  React.createElement(MasspaMenuImage, { src: item.image, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode }),
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
                              { className: 'col-md-7 col-sm-7' },
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
                          { className: 'col-md-6 col-sm-12 col-xs-6', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-card fade-in-left' },
                            React.createElement(
                              'div',
                              { className: 'col-md-5 col-sm-5' },
                              typeof navigate !== 'undefined' ? React.createElement(
                                MasspaMenuLink03,
                                { onClick: function onClick() {
                                    return _this2.handleClickLink(item.itemCode, link);
                                  }, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-zoom' },
                                React.createElement(MasspaMenuImage02, { src: item.image, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius })
                              ) : React.createElement(
                                MasspaMenuLink02,
                                { href: '' + link + item.itemCode, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-zoom' },
                                React.createElement(MasspaMenuImage02, { src: item.image, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius })
                              )
                            ),
                            React.createElement(
                              'div',
                              { className: 'col-md-7 col-sm-7' },
                              React.createElement(
                                'div',
                                { className: 'masspa-item-category-group-title-text' },
                                React.createElement(
                                  'a',
                                  { href: link },
                                  React.createElement(
                                    'span',
                                    { className: 'masspa-item-category-title-3', style: { color: '' + colorTitle } },
                                    item.title
                                  )
                                ),
                                item.description !== null ? React.createElement('div', { className: 'masspa-item-category-text-layout02', dangerouslySetInnerHTML: { __html: '' + item.description } }) : React.createElement('div', null)
                              )
                            )
                          )
                        );
                      } else if (animation === 'rotate') {
                        return React.createElement(
                          'div',
                          { className: 'col-md-6 col-sm-12 col-xs-6', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-card fade-in-left' },
                            React.createElement(
                              'div',
                              { className: 'col-md-5 col-sm-5' },
                              typeof navigate !== 'undefined' ? React.createElement(
                                MasspaMenuLink03,
                                { onClick: function onClick() {
                                    return _this2.handleClickLink(item.itemCode, link);
                                  }, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-rotate' },
                                React.createElement(MasspaMenuImage02, { src: item.image, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius })
                              ) : React.createElement(
                                MasspaMenuLink02,
                                { href: '' + link + item.itemCode, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-rotate' },
                                React.createElement(MasspaMenuImage02, { src: item.image, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius })
                              )
                            ),
                            React.createElement(
                              'div',
                              { className: 'col-md-7 col-sm-7' },
                              React.createElement(
                                'div',
                                { className: 'masspa-item-category-group-title-text' },
                                React.createElement(
                                  'a',
                                  { href: link },
                                  React.createElement(
                                    'span',
                                    { className: 'masspa-item-category-title-3', style: { color: '' + colorTitle } },
                                    item.title
                                  )
                                ),
                                item.description !== null ? React.createElement('div', { className: 'masspa-item-category-text-layout02', dangerouslySetInnerHTML: { __html: '' + item.description } }) : React.createElement('div', null)
                              )
                            )
                          )
                        );
                      } else {
                        return React.createElement(
                          'div',
                          { className: 'col-md-6 col-sm-12 col-xs-6', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-card fade-in-left' },
                            React.createElement(
                              'div',
                              { className: 'col-md-5 col-sm-5' },
                              typeof navigate !== 'undefined' ? React.createElement(
                                MasspaMenuLink03,
                                { onClick: function onClick() {
                                    return _this2.handleClickLink(item.itemCode, link);
                                  }, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage },
                                React.createElement(MasspaMenuImage02, { src: item.image, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius })
                              ) : React.createElement(
                                MasspaMenuLink02,
                                { href: '' + link + item.itemCode, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage },
                                React.createElement(MasspaMenuImage02, { src: item.image, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius })
                              )
                            ),
                            React.createElement(
                              'div',
                              { className: 'col-md-7 col-sm-7' },
                              React.createElement(
                                'div',
                                { className: 'masspa-item-category-group-title-text' },
                                React.createElement(
                                  'a',
                                  { href: link },
                                  React.createElement(
                                    'span',
                                    { className: 'masspa-item-category-title-3', style: { color: '' + colorTitle } },
                                    item.title
                                  )
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
                          { className: 'col-sm-12 col-md-3 col-lg-3', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-container' },
                            typeof navigate !== 'undefined' ? React.createElement(
                              MasspaMenuLink03,
                              { onClick: function onClick() {
                                  return _this2.handleClickLink(item.itemCode, link);
                                }, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-zoom' },
                              React.createElement(
                                'span',
                                { className: 'masspa-item-category-overlay-2' },
                                React.createElement(MasspaMenuImage, { src: item.image, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode }),
                                React.createElement(
                                  'div',
                                  { className: 'masspa-item-category-title-2', style: { color: '' + colorTitle } },
                                  item.title
                                )
                              )
                            ) : React.createElement(
                              MasspaMenuLink01,
                              { href: '' + link + item.itemCode, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-zoom' },
                              React.createElement(
                                'span',
                                { className: 'masspa-item-category-overlay-2' },
                                React.createElement(MasspaMenuImage, { src: item.image, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode }),
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
                          { className: 'col-sm-12 col-md-3 col-lg-3', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-container' },
                            typeof navigate !== 'undefined' ? React.createElement(
                              MasspaMenuLink03,
                              { onClick: function onClick() {
                                  return _this2.handleClickLink(item.itemCode, link);
                                }, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-rotate' },
                              React.createElement(
                                'span',
                                { className: 'masspa-item-category-overlay-2' },
                                React.createElement(MasspaMenuImage, { src: item.image, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode }),
                                React.createElement(
                                  'div',
                                  { className: 'masspa-item-category-title-2', style: { color: '' + colorTitle } },
                                  item.title
                                )
                              )
                            ) : React.createElement(
                              MasspaMenuLink01,
                              { href: '' + link + item.itemCode, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-rotate' },
                              React.createElement(
                                'span',
                                { className: 'masspa-item-category-overlay-2' },
                                React.createElement(MasspaMenuImage, { src: item.image, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode }),
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
                          { className: 'col-sm-12 col-md-3 col-lg-3', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-container' },
                            typeof navigate !== 'undefined' ? React.createElement(
                              MasspaMenuLink03,
                              { onClick: function onClick() {
                                  return _this2.handleClickLink(item.itemCode, link);
                                }, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage },
                              React.createElement(
                                'span',
                                { className: 'masspa-item-category-overlay-2' },
                                React.createElement(MasspaMenuImage, { src: item.image, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode }),
                                React.createElement(
                                  'div',
                                  { className: 'masspa-item-category-title-2', style: { color: '' + colorTitle } },
                                  item.title
                                )
                              )
                            ) : React.createElement(
                              MasspaMenuLink01,
                              { href: '' + link + item.itemCode, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage },
                              React.createElement(
                                'span',
                                { className: 'masspa-item-category-overlay-2' },
                                React.createElement(MasspaMenuImage, { src: item.image, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode }),
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
                          { className: 'col-sm-12 col-md-3 col-lg-3', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-container' },
                            typeof navigate !== 'undefined' ? React.createElement(
                              MasspaMenuLink03,
                              { onClick: function onClick() {
                                  return _this2.handleClickLink(item.itemCode, link);
                                }, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-zoom' },
                              React.createElement(MasspaMenuImage, { src: item.image, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode })
                            ) : React.createElement(
                              MasspaMenuLink01,
                              { href: '' + link + item.itemCode, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-zoom' },
                              React.createElement(MasspaMenuImage, { src: item.image, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode })
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
                          { className: 'col-sm-12 col-md-3 col-lg-3', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-container' },
                            typeof navigate !== 'undefined' ? React.createElement(
                              MasspaMenuLink03,
                              { onClick: function onClick() {
                                  return _this2.handleClickLink(item.itemCode, link);
                                }, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-rotate' },
                              React.createElement(MasspaMenuImage, { src: item.image, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode })
                            ) : React.createElement(
                              MasspaMenuLink01,
                              { href: '' + link + item.itemCode, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage, className: 'masspa-item-category-rotate' },
                              React.createElement(MasspaMenuImage, { src: item.image, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode })
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
                          { className: 'col-sm-12 col-md-3 col-lg-3', key: i },
                          React.createElement(
                            'div',
                            { className: 'masspa-item-category-container' },
                            typeof navigate !== 'undefined' ? React.createElement(
                              MasspaMenuLink03,
                              { onClick: function onClick() {
                                  return _this2.handleClickLink(item.itemCode, link);
                                }, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage },
                              React.createElement(MasspaMenuImage, { src: item.image, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode })
                            ) : React.createElement(
                              MasspaMenuLink01,
                              { href: '' + link + item.itemCode, sizeImage: sizeImage, borderRadius: borderRadius, borderImage: borderImage },
                              React.createElement(MasspaMenuImage, { src: item.image, alt: item.title, sizeImage: sizeImage, borderRadius: borderRadius, mode: mode })
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
