(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/ngx-bootstrap/datepicker/bs-datepicker.css":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/ngx-bootstrap/datepicker/bs-datepicker.css ***!
  \**********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* .bs-datepicker */\n.bs-datepicker {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row wrap;\n  background: #fff;\n  box-shadow: 0 0 10px 0 #aaa;\n  position: relative;\n  z-index: 1;\n  /* button */\n  /* .bs-datepicker-head */\n  /* .bs-datepicker-body */\n  /* .current-timedate */\n  /* .bs-datepicker-multiple */\n  /* .bs-datepicker-btns */\n  /*.bs-datepicker-custom-range */\n  /* .bs-datepicker-predefined-btns */\n  /* .bs-datepicker-buttons */ }\n.bs-datepicker:after {\n    clear: both;\n    content: '';\n    display: block; }\n.bs-datepicker bs-day-picker {\n    float: left; }\n.bs-datepicker button:hover,\n  .bs-datepicker button:focus,\n  .bs-datepicker button:active,\n  .bs-datepicker input:hover,\n  .bs-datepicker input:focus,\n  .bs-datepicker input:active,\n  .bs-datepicker-btns button:hover,\n  .bs-datepicker-btns button:focus,\n  .bs-datepicker-btns button:active,\n  .bs-datepicker-predefined-btns button:active,\n  .bs-datepicker-predefined-btns button:focus {\n    outline: none; }\n.bs-datepicker-head {\n    min-width: 270px;\n    height: 50px;\n    padding: 10px;\n    border-radius: 3px 3px 0 0;\n    text-align: justify;\n    /* .bs-datepicker-head button */ }\n.bs-datepicker-head:after {\n      content: \"\";\n      display: inline-block;\n      vertical-align: top;\n      width: 100%; }\n.bs-datepicker-head button {\n      display: inline-block;\n      vertical-align: top;\n      padding: 0;\n      height: 30px;\n      line-height: 30px;\n      border: 0;\n      background: transparent;\n      text-align: center;\n      cursor: pointer;\n      color: #fff;\n      -webkit-transition: 0.3s;\n      transition: 0.3s; }\n.bs-datepicker-head button[disabled], .bs-datepicker-head button[disabled]:hover, .bs-datepicker-head button[disabled]:active {\n        background: rgba(221, 221, 221, 0.3);\n        color: #f5f5f5;\n        cursor: not-allowed; }\n.bs-datepicker-head button.next, .bs-datepicker-head button.previous {\n        border-radius: 50%;\n        width: 30px;\n        height: 30px; }\n.bs-datepicker-head button.next span, .bs-datepicker-head button.previous span {\n          font-size: 28px;\n          line-height: 1;\n          display: inline-block;\n          position: relative;\n          height: 100%;\n          width: 100%;\n          border-radius: 50%; }\n.bs-datepicker-head button.current {\n        border-radius: 15px;\n        max-width: 155px;\n        padding: 0 13px; }\n.bs-datepicker-head button:hover {\n    background-color: rgba(0, 0, 0, 0.1); }\n.bs-datepicker-head button:active {\n    background-color: rgba(0, 0, 0, 0.2); }\n.bs-datepicker-body {\n    padding: 10px;\n    border-radius: 0 0 3px 3px;\n    min-height: 232px;\n    min-width: 278px;\n    border: 1px solid #e9edf0;\n    /* .bs-datepicker-body table */ }\n.bs-datepicker-body .days.weeks {\n      position: relative;\n      z-index: 1; }\n.bs-datepicker-body table {\n      width: 100%;\n      border-collapse: separate;\n      border-spacing: 0;\n      /* .bs-datepicker-body table.days */\n      /* .bs-datepicker-body table.weeks */ }\n.bs-datepicker-body table th {\n        font-size: 13px;\n        color: #9aaec1;\n        font-weight: 400;\n        text-align: center; }\n.bs-datepicker-body table td {\n        color: #54708b;\n        text-align: center;\n        position: relative;\n        padding: 0; }\n.bs-datepicker-body table td span {\n          display: block;\n          margin: 0 auto;\n          font-size: 13px;\n          border-radius: 50%;\n          position: relative;\n          /*z-index: 1;*/\n          -moz-user-select: none;\n          -webkit-user-select: none;\n          -ms-user-select: none; }\n.bs-datepicker-body table td:not(.disabled):not(.week) span:not(.disabled):not(.is-other-month) {\n          cursor: pointer; }\n.bs-datepicker-body table td.is-highlighted:not(.disabled):not(.selected) span,\n        .bs-datepicker-body table td span.is-highlighted:not(.disabled):not(.selected) {\n          background-color: #e9edf0;\n          -webkit-transition: 0s;\n          transition: 0s; }\n.bs-datepicker-body table td.is-active-other-month:not(.disabled):not(.selected) span,\n        .bs-datepicker-body table td span.is-active-other-month:not(.disabled):not(.selected) {\n          background-color: #e9edf0;\n          -webkit-transition: 0s;\n          transition: 0s;\n          cursor: pointer; }\n.bs-datepicker-body table td span.disabled,\n        .bs-datepicker-body table td.disabled span {\n          color: #9aaec1; }\n.bs-datepicker-body table td span.selected,\n        .bs-datepicker-body table td.selected span {\n          color: #fff; }\n.bs-datepicker-body table td span.is-other-month,\n        .bs-datepicker-body table td.is-other-month span {\n          color: rgba(0, 0, 0, 0.25); }\n.bs-datepicker-body table td.active {\n          position: relative; }\n.bs-datepicker-body table td.active.select-start:before {\n            left: 35%; }\n.bs-datepicker-body table td.active.select-end:before {\n            left: -85%; }\n.bs-datepicker-body table td span.active.select-start:after,\n        .bs-datepicker-body table td span.active.select-end:after,\n        .bs-datepicker-body table td.active.select-start span:after,\n        .bs-datepicker-body table td.active.select-end span:after {\n          content: \"\";\n          display: block;\n          position: absolute;\n          z-index: -1;\n          width: 100%;\n          height: 100%;\n          -webkit-transition: 0.3s;\n          transition: 0.3s;\n          top: 0;\n          border-radius: 50%; }\n.bs-datepicker-body table td:before,\n        .bs-datepicker-body table td span:before {\n          content: \"\";\n          display: block;\n          position: absolute;\n          z-index: -1;\n          top: 6px;\n          bottom: 6px;\n          left: -2px;\n          right: -2px;\n          box-sizing: content-box;\n          background: transparent; }\n.bs-datepicker-body table td.active.select-start + td.active:before {\n          left: -20%; }\n.bs-datepicker-body table td:last-child.active:before {\n          border-radius: 0 3px 3px 0;\n          width: 125%;\n          left: -25%; }\n.bs-datepicker-body table td span[class*=\"select-\"],\n        .bs-datepicker-body table td[class*=\"select-\"] span {\n          border-radius: 50%;\n          color: #fff; }\n.bs-datepicker-body table.days td.active:not(.select-start):before, .bs-datepicker-body table.days td.in-range:not(.select-start):before,\n      .bs-datepicker-body table.days span.active:not(.select-start):before,\n      .bs-datepicker-body table.days span.in-range:not(.select-start):before {\n        background: #e9edf0; }\n.bs-datepicker-body table.days span {\n        width: 32px;\n        height: 32px;\n        line-height: 32px; }\n.bs-datepicker-body table.days span.select-start {\n          z-index: 2; }\n.bs-datepicker-body table.days span.is-highlighted.in-range:before, .bs-datepicker-body table.days span.in-range.select-end:before {\n          background: none;\n          right: 0;\n          left: 0; }\n.bs-datepicker-body table.days td.select-start + td.select-end:before,\n      .bs-datepicker-body table.days td.select-start + td.is-highlighted:before,\n      .bs-datepicker-body table.days td.active + td.is-highlighted:before,\n      .bs-datepicker-body table.days td.active + td.select-end:before,\n      .bs-datepicker-body table.days td.in-range + td.is-highlighted:before,\n      .bs-datepicker-body table.days td.in-range + td.select-end:before {\n        background: #e9edf0;\n        width: 100%; }\n.bs-datepicker-body table.weeks tr td:nth-child(2).active:before {\n        border-radius: 3px 0 0 3px;\n        left: 0;\n        width: 100%; }\n.bs-datepicker-body table:not(.weeks) tr td:first-child:before {\n        border-radius: 3px 0 0 3px; }\n.bs-datepicker-body table.years td span {\n        width: 46px;\n        height: 46px;\n        line-height: 45px;\n        margin: 0 auto; }\n.bs-datepicker-body table.years tr:not(:last-child) td span {\n        margin-bottom: 8px; }\n.bs-datepicker-body table.months td {\n        height: 52px; }\n.bs-datepicker-body table.months td span {\n          padding: 6px;\n          border-radius: 15px; }\n.bs-datepicker .current-timedate {\n    color: #54708b;\n    font-size: 15px;\n    text-align: center;\n    height: 30px;\n    line-height: 30px;\n    border-radius: 20px;\n    border: 1px solid #e9edf0;\n    margin-bottom: 10px;\n    cursor: pointer;\n    text-transform: uppercase;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none; }\n.bs-datepicker .current-timedate span:not(:empty):before {\n      content: \"\";\n      width: 15px;\n      height: 16px;\n      display: inline-block;\n      margin-right: 4px;\n      vertical-align: text-bottom;\n      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAQCAYAAADJViUEAAABMklEQVQoU9VTwW3CQBCcOUgBtEBKSAukAnBKME+wFCAlYIhk8sQlxFABtJAScAsuAPBEewYcxCP8ouxrPDsza61uiVN1o6RNHD4htSCmq49RfO71BvMJqBBkITRf1kmUW49nQRC9h1I5AZlBClaL8aP1fKgOOxCx8aSLs+Q19eZuNO8QmPqJRtDFguy7OAcDbJPs+/BKVPDIPrvD2ZJgWAmVe7O0rI0Vqs1seyWUXpuJoppYCa5L+U++NpNPkr5OE2oMdARsb3gykJT5ydZcL8Z9Ww60nxg2LhjON9li9OwXZzo+xLbp3nC2s9CL2RrueGyVrgwNm8HpsCzZ9EEW6kqXlo1GQe03FzP/7W8Hl0dBtu7Bf7zt6mIwvX1RvzDCm7+q3mAW0Dl/GPdUCeXrZLT9BrDrGkm4qlPvAAAAAElFTkSuQmCC); }\n.bs-datepicker-multiple {\n    border-radius: 4px 0 0 4px; }\n.bs-datepicker-multiple + .bs-datepicker-multiple {\n      margin-left: 10px; }\n.bs-datepicker-multiple .bs-datepicker {\n      box-shadow: none;\n      position: relative; }\n.bs-datepicker-multiple .bs-datepicker:not(:last-child) {\n        padding-right: 10px; }\n.bs-datepicker-multiple .bs-datepicker + .bs-datepicker:after {\n        content: \"\";\n        display: block;\n        width: 14px;\n        height: 10px;\n        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAKCAYAAABrGwT5AAAA1ElEQVQoU42RsQrCUAxF77VuDu7O4oMWW//BURBBpZvgKk4uIrjoqKOTf+DopIO4uYggtFTfw3+pkQqCW1/G5J7kJiFy4m5MxUlxAzgIPHX+lzMPzupRYlYgxiR7vqsOP8YKzsTx0yxFMCUZ+q7aZzlr+OvgoWcAFyAHgat2jLWu48252DdqAihDJGSSJNUUxYmQjs3+hPQBlAh2rG2LCOPnaw3IiGDX99TRCs7ASJsNhUOA7d/LcuHvRG22FIZvsNXw1MX6VZExCilOQKEfeLXr/10+aC9Ho7arh7oAAAAASUVORK5CYII=);\n        position: absolute;\n        top: 25px;\n        left: -8px; }\n.bs-datepicker-multiple .bs-datepicker .left {\n        float: left; }\n.bs-datepicker-multiple .bs-datepicker .right {\n        float: right; }\n.bs-datepicker-container {\n    padding: 15px; }\n.bs-datepicker .bs-media-container {\n    display: -webkit-box;\n    display: flex; }\n@media (max-width: 768px) {\n      .bs-datepicker .bs-media-container {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n                flex-direction: column; } }\n.bs-datepicker-custom-range {\n    padding: 15px;\n    background: #eee; }\n.bs-datepicker-predefined-btns button {\n    width: 100%;\n    display: block;\n    height: 30px;\n    background-color: #9aaec1;\n    border-radius: 4px;\n    color: #fff;\n    border: 0;\n    margin-bottom: 10px;\n    padding: 0 18px;\n    text-align: left;\n    -webkit-transition: 0.3s;\n    transition: 0.3s; }\n.bs-datepicker-predefined-btns button:active, .bs-datepicker-predefined-btns button:hover {\n      background-color: #54708b; }\n.bs-datepicker-buttons {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-flow: row wrap;\n    -webkit-box-pack: end;\n            justify-content: flex-end;\n    padding-top: 10px;\n    border-top: 1px solid #e9edf0; }\n.bs-datepicker-buttons .btn-default {\n      margin-left: 10px; }\n/* .bs-timepicker */\n.bs-timepicker-container {\n  padding: 10px 0; }\n.bs-timepicker-label {\n  color: #54708b;\n  margin-bottom: 10px; }\n.bs-timepicker-controls {\n  display: inline-block;\n  vertical-align: top;\n  margin-right: 10px; }\n.bs-timepicker-controls button {\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    border: 0;\n    background-color: #e9edf0;\n    color: #54708b;\n    font-size: 16px;\n    font-weight: 700;\n    vertical-align: middle;\n    line-height: 0;\n    padding: 0;\n    -webkit-transition: 0.3s;\n    transition: 0.3s; }\n.bs-timepicker-controls button:hover {\n      background-color: #d5dadd; }\n.bs-timepicker-controls input {\n    width: 35px;\n    height: 25px;\n    border-radius: 13px;\n    text-align: center;\n    border: 1px solid #e9edf0; }\n.bs-timepicker .switch-time-format {\n  text-transform: uppercase;\n  min-width: 54px;\n  height: 25px;\n  border-radius: 20px;\n  border: 1px solid #e9edf0;\n  background: #fff;\n  color: #54708b;\n  font-size: 13px; }\n.bs-timepicker .switch-time-format img {\n    vertical-align: initial;\n    margin-left: 4px; }\nbs-datepicker-container,\nbs-daterangepicker-container {\n  z-index: 1080; }\n/* screen size < 1024px */\n@media (max-width: 768px) {\n  .bs-datepicker-multiple {\n    display: -webkit-box;\n    display: flex; }\n    .bs-datepicker-multiple + .bs-datepicker-multiple {\n      margin-top: 10px;\n      margin-left: 0; } }\n/* theming */\n.theme-default .bs-datepicker-head {\n  background-color: #777; }\n.theme-default .bs-datepicker-body table td span.selected,\n.theme-default .bs-datepicker-body table td.selected span,\n.theme-default .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-default .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #777; }\n.theme-default .bs-datepicker-body table td.week span {\n  color: #777; }\n.theme-default .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #777;\n  color: #fff;\n  opacity: 0.5;\n  -webkit-transition: 0s;\n  transition: 0s; }\n.theme-green .bs-datepicker-head {\n  background-color: #5cb85c; }\n.theme-green .bs-datepicker-body table td span.selected,\n.theme-green .bs-datepicker-body table td.selected span,\n.theme-green .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-green .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #5cb85c; }\n.theme-green .bs-datepicker-body table td.week span {\n  color: #5cb85c; }\n.theme-green .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #5cb85c;\n  color: #fff;\n  opacity: 0.5;\n  -webkit-transition: 0s;\n  transition: 0s; }\n.theme-blue .bs-datepicker-head {\n  background-color: #5bc0de; }\n.theme-blue .bs-datepicker-body table td span.selected,\n.theme-blue .bs-datepicker-body table td.selected span,\n.theme-blue .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-blue .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #5bc0de; }\n.theme-blue .bs-datepicker-body table td.week span {\n  color: #5bc0de; }\n.theme-blue .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #5bc0de;\n  color: #fff;\n  opacity: 0.5;\n  -webkit-transition: 0s;\n  transition: 0s; }\n.theme-dark-blue .bs-datepicker-head {\n  background-color: #337ab7; }\n.theme-dark-blue .bs-datepicker-body table td span.selected,\n.theme-dark-blue .bs-datepicker-body table td.selected span,\n.theme-dark-blue .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-dark-blue .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #337ab7; }\n.theme-dark-blue .bs-datepicker-body table td.week span {\n  color: #337ab7; }\n.theme-dark-blue .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #337ab7;\n  color: #fff;\n  opacity: 0.5;\n  -webkit-transition: 0s;\n  transition: 0s; }\n.theme-red .bs-datepicker-head {\n  background-color: #d9534f; }\n.theme-red .bs-datepicker-body table td span.selected,\n.theme-red .bs-datepicker-body table td.selected span,\n.theme-red .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-red .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #d9534f; }\n.theme-red .bs-datepicker-body table td.week span {\n  color: #d9534f; }\n.theme-red .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #d9534f;\n  color: #fff;\n  opacity: 0.5;\n  -webkit-transition: 0s;\n  transition: 0s; }\n.theme-orange .bs-datepicker-head {\n  background-color: #f0ad4e; }\n.theme-orange .bs-datepicker-body table td span.selected,\n.theme-orange .bs-datepicker-body table td.selected span,\n.theme-orange .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-orange .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #f0ad4e; }\n.theme-orange .bs-datepicker-body table td.week span {\n  color: #f0ad4e; }\n.theme-orange .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #f0ad4e;\n  color: #fff;\n  opacity: 0.5;\n  -webkit-transition: 0s;\n  transition: 0s; }\n/*# sourceMappingURL=bs-datepicker.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9zcmMvZGF0ZXBpY2tlci9icy1kYXRlcGlja2VyLnNjc3MiLCJub2RlX21vZHVsZXMvc3JjL2RhdGVwaWNrZXIvdXRpbHMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsIm5vZGVfbW9kdWxlcy9zcmMvZGF0ZXBpY2tlci91dGlscy9zY3NzL21peGlucy5zY3NzIiwibm9kZV9tb2R1bGVzL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9icy1kYXRlcGlja2VyLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxtQkFBQTtBQUNBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsMEJBQW9CO1VBQXBCLG9CQUFvQjtFQUNwQiw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixnQkNSb0I7RURTcEIsMkJDTm9CO0VET3BCLGtCQUFrQjtFQUNsQixVQUFVO0VBWVYsV0FBQTtFQWVBLHdCQUFBO0VBeUVBLHdCQUFBO0VBcU9BLHNCQUFBO0VBMkJBLDRCQUFBO0VBcUNBLHdCQUFBO0VBWUEsK0JBQUE7RUFNQSxtQ0FBQTtFQXNCQSwyQkFBQSxFQUE0QjtBQXhiOUI7SUFVSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWMsRUFBQTtBQVpsQjtJQWdCSSxXQUFXLEVBQUE7QUFoQmY7Ozs7Ozs7Ozs7O0lBK0JJLGFBQWEsRUFBQTtBQUlmO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQVNuQiwrQkFBQSxFQUFnQztBQWRqQztNQVFHLFdBQVc7TUFDWCxxQkFBcUI7TUFDckIsbUJBQW1CO01BQ25CLFdBQVcsRUFBQTtBQVhkO01BZ0JHLHFCQUFxQjtNQUNyQixtQkFBbUI7TUFDbkIsVUFBVTtNQUNWLFlBQVk7TUFDWixpQkFBaUI7TUFDakIsU0FBUztNQUNULHVCQUF1QjtNQUN2QixrQkFBa0I7TUFDbEIsZUFBZTtNQUNmLFdDM0RnQjtNRDREaEIsd0JBQWdCO01BQWhC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Q2hCdkI7RUFnQlUsY0RBYSxFQUFBO0FDaEJ2QjtFQW9CVSxlQUFlO0VBQ2YseUJETGE7RUNNYixXRHBCVTtFQ3FCVixZQUFZO0VBQ1osc0JBQWM7RUFBZCxjQUFjLEVBQUE7QUF4QnhCO0VBRUkseUJEZW1CLEVBQUE7QUNqQnZCOzs7O0VBWVUseUJES2EsRUFBQTtBQ2pCdkI7RUFnQlUsY0RDYSxFQUFBO0FDakJ2QjtFQW9CVSxlQUFlO0VBQ2YseUJESmE7RUNLYixXRHBCVTtFQ3FCVixZQUFZO0VBQ1osc0JBQWM7RUFBZCxjQUFjLEVBQUE7QUF4QnhCO0VBRUkseUJEZ0JtQixFQUFBO0FDbEJ2Qjs7OztFQVlVLHlCRE1hLEVBQUE7QUNsQnZCO0VBZ0JVLGNERWEsRUFBQTtBQ2xCdkI7RUFvQlUsZUFBZTtFQUNmLHlCREhhO0VDSWIsV0RwQlU7RUNxQlYsWUFBWTtFQUNaLHNCQUFjO0VBQWQsY0FBYyxFQUFBO0FBeEJ4QjtFQUVJLHlCRGlCbUIsRUFBQTtBQ25CdkI7Ozs7RUFZVSx5QkRPYSxFQUFBO0FDbkJ2QjtFQWdCVSxjREdhLEVBQUE7QUNuQnZCO0VBb0JVLGVBQWU7RUFDZix5QkRGYTtFQ0diLFdEcEJVO0VDcUJWLFlBQVk7RUFDWixzQkFBYztFQUFkLGNBQWMsRUFBQTtBQXhCeEI7RUFFSSx5QkRrQm1CLEVBQUE7QUNwQnZCOzs7O0VBWVUseUJEUWEsRUFBQTtBQ3BCdkI7RUFnQlUsY0RJYSxFQUFBO0FDcEJ2QjtFQW9CVSxlQUFlO0VBQ2YseUJERGE7RUNFYixXRHBCVTtFQ3FCVixZQUFZO0VBQ1osc0JBQWM7RUFBZCxjQUFjLEVBQUE7QUM2YjFCLDRDQUE0QyIsImZpbGUiOiJub2RlX21vZHVsZXMvbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2JzLWRhdGVwaWNrZXIuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndXRpbHMvc2Nzcy92YXJpYWJsZXMnO1xuQGltcG9ydCAndXRpbHMvc2Nzcy9taXhpbnMnO1xuXG4vKiAuYnMtZGF0ZXBpY2tlciAqL1xuLmJzLWRhdGVwaWNrZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgYmFja2dyb3VuZDogJG1haW4tYmc7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDAgJG1haW4tYm94LXNoYWRvdztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuXG4gICY6YWZ0ZXIge1xuICAgIGNsZWFyOiBib3RoO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgYnMtZGF5LXBpY2tlciB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cblxuICAvKiBidXR0b24gKi9cbiAgYnV0dG9uOmhvdmVyLFxuICBidXR0b246Zm9jdXMsXG4gIGJ1dHRvbjphY3RpdmUsXG4gIGlucHV0OmhvdmVyLFxuICBpbnB1dDpmb2N1cyxcbiAgaW5wdXQ6YWN0aXZlLFxuICAmLWJ0bnMgYnV0dG9uOmhvdmVyLFxuICAmLWJ0bnMgYnV0dG9uOmZvY3VzLFxuICAmLWJ0bnMgYnV0dG9uOmFjdGl2ZSxcbiAgJi1wcmVkZWZpbmVkLWJ0bnMgYnV0dG9uOmFjdGl2ZSxcbiAgJi1wcmVkZWZpbmVkLWJ0bnMgYnV0dG9uOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5cbiAgLyogLmJzLWRhdGVwaWNrZXItaGVhZCAqL1xuICAmLWhlYWQge1xuICAgIG1pbi13aWR0aDogMjcwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAwIDA7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAvKiAuYnMtZGF0ZXBpY2tlci1oZWFkIGJ1dHRvbiAqL1xuICAgIGJ1dHRvbiB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBjb2xvcjogJGZvbnQtY29sb3ItMDE7XG4gICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuXG4gICAgICAmW2Rpc2FibGVkXSxcbiAgICAgICZbZGlzYWJsZWRdOmhvdmVyLFxuICAgICAgJltkaXNhYmxlZF06YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogJGRpc2FibGVkLWJhY2tncm91bmQ7XG4gICAgICAgIGNvbG9yOiAkZGlzYWJsZWQtY29sb3I7XG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICB9XG5cbiAgICAgICYubmV4dCxcbiAgICAgICYucHJldmlvdXMge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLmN1cnJlbnQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICBtYXgtd2lkdGg6IDE1NXB4O1xuICAgICAgICBwYWRkaW5nOiAwIDEzcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi1oZWFkIHtcbiAgICBidXR0b24ge1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgIH1cbiAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qIC5icy1kYXRlcGlja2VyLWJvZHkgKi9cbiAgJi1ib2R5IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAzcHggM3B4O1xuICAgIG1pbi1oZWlnaHQ6IDIzMnB4O1xuICAgIG1pbi13aWR0aDogMjc4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcblxuICAgIC5kYXlzLndlZWtzIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgLyogLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSAqL1xuICAgIHRhYmxlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuXG4gICAgICB0aCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgY29sb3I6ICRmb250LWNvbG9yLTAyO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIHRkIHtcbiAgICAgICAgY29sb3I6ICRmb250LWNvbG9yLTAzO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAvKnotaW5kZXg6IDE7Ki9cbiAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdG9kbzogY2hlY2sgZmlyc3QgOm5vdCguZGlzYWJsZWQpIHVzYWdlXG4gICAgICAgICY6bm90KC5kaXNhYmxlZCk6bm90KC53ZWVrKSBzcGFuOm5vdCguZGlzYWJsZWQpOm5vdCguaXMtb3RoZXItbW9udGgpIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmLmlzLWhpZ2hsaWdodGVkOm5vdCguZGlzYWJsZWQpOm5vdCguc2VsZWN0ZWQpIHNwYW4sXG4gICAgICAgIHNwYW4uaXMtaGlnaGxpZ2h0ZWQ6bm90KC5kaXNhYmxlZCk6bm90KC5zZWxlY3RlZCkge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRoaWdobGlnaHRlZDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwcztcbiAgICAgICAgfVxuXG4gICAgICAgICYuaXMtYWN0aXZlLW90aGVyLW1vbnRoOm5vdCguZGlzYWJsZWQpOm5vdCguc2VsZWN0ZWQpIHNwYW4sXG4gICAgICAgIHNwYW4uaXMtYWN0aXZlLW90aGVyLW1vbnRoOm5vdCguZGlzYWJsZWQpOm5vdCguc2VsZWN0ZWQpIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGlnaGxpZ2h0ZWQ7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMHM7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgc3Bhbi5kaXNhYmxlZCxcbiAgICAgICAgJi5kaXNhYmxlZCBzcGFuIHtcbiAgICAgICAgICBjb2xvcjogJGZvbnQtY29sb3ItMDI7XG4gICAgICAgIH1cblxuICAgICAgICBzcGFuLnNlbGVjdGVkLFxuICAgICAgICAmLnNlbGVjdGVkIHNwYW4ge1xuICAgICAgICAgIGNvbG9yOiAkZm9udC1jb2xvci0wMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4uaXMtb3RoZXItbW9udGgsXG4gICAgICAgICYuaXMtb3RoZXItbW9udGggc3BhbiB7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgICAgIH1cblxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgJi5zZWxlY3Qtc3RhcnQ6YmVmb3JlIHtcbiAgICAgICAgICAgIGxlZnQ6IDM1JTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLnNlbGVjdC1lbmQ6YmVmb3JlIHtcbiAgICAgICAgICAgIGxlZnQ6IC04NSU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc3Bhbi5hY3RpdmUuc2VsZWN0LXN0YXJ0OmFmdGVyLFxuICAgICAgICBzcGFuLmFjdGl2ZS5zZWxlY3QtZW5kOmFmdGVyLFxuICAgICAgICAmLmFjdGl2ZS5zZWxlY3Qtc3RhcnQgc3BhbjphZnRlcixcbiAgICAgICAgJi5hY3RpdmUuc2VsZWN0LWVuZCBzcGFuOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpiZWZvcmUsXG4gICAgICAgIHNwYW46YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICB0b3A6IDZweDtcbiAgICAgICAgICBib3R0b206IDZweDtcbiAgICAgICAgICBsZWZ0OiAtMnB4O1xuICAgICAgICAgIHJpZ2h0OiAtMnB4O1xuICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJi5hY3RpdmUuc2VsZWN0LXN0YXJ0ICsgdGQuYWN0aXZlOmJlZm9yZSB7XG4gICAgICAgICAgbGVmdDogLTIwJTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZC5hY3RpdmU6YmVmb3JlIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcbiAgICAgICAgICB3aWR0aDogMTI1JTtcbiAgICAgICAgICBsZWZ0OiAtMjUlO1xuICAgICAgICB9XG5cbiAgICAgICAgc3BhbltjbGFzcyo9XCJzZWxlY3QtXCJdLFxuICAgICAgICAmW2NsYXNzKj1cInNlbGVjdC1cIl0gc3BhbiB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGNvbG9yOiAkZm9udC1jb2xvci0wMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKiAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlLmRheXMgKi9cbiAgICAgICYuZGF5cyB7XG4gICAgICAgIHRkLFxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAmLmFjdGl2ZTpub3QoLnNlbGVjdC1zdGFydCk6YmVmb3JlLFxuICAgICAgICAgICYuaW4tcmFuZ2U6bm90KC5zZWxlY3Qtc3RhcnQpOmJlZm9yZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkaGlnaGxpZ2h0ZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuXG4gICAgICAgICAgJi5zZWxlY3Qtc3RhcnQge1xuICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgJi5pcy1oaWdobGlnaHRlZC5pbi1yYW5nZTpiZWZvcmUsXG4gICAgICAgICAgJi5pbi1yYW5nZS5zZWxlY3QtZW5kOmJlZm9yZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRkIHtcbiAgICAgICAgICAmLnNlbGVjdC1zdGFydCArIHRkLnNlbGVjdC1lbmQ6YmVmb3JlLFxuICAgICAgICAgICYuc2VsZWN0LXN0YXJ0ICsgdGQuaXMtaGlnaGxpZ2h0ZWQ6YmVmb3JlLFxuICAgICAgICAgICYuYWN0aXZlICsgdGQuaXMtaGlnaGxpZ2h0ZWQ6YmVmb3JlLFxuICAgICAgICAgICYuYWN0aXZlICsgdGQuc2VsZWN0LWVuZDpiZWZvcmUsXG4gICAgICAgICAgJi5pbi1yYW5nZSArIHRkLmlzLWhpZ2hsaWdodGVkOmJlZm9yZSxcbiAgICAgICAgICAmLmluLXJhbmdlICsgdGQuc2VsZWN0LWVuZDpiZWZvcmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJGhpZ2hsaWdodGVkO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUud2Vla3MgKi9cbiAgICAgICYud2Vla3Mge1xuICAgICAgICB0ciB7XG4gICAgICAgICAgdGQge1xuICAgICAgICAgICAgJjpudGgtY2hpbGQoMikuYWN0aXZlOmJlZm9yZSB7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJjpub3QoLndlZWtzKSB7XG4gICAgICAgIHRyIHtcbiAgICAgICAgICB0ZHtcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYueWVhcnMge1xuICAgICAgICB0ZCB7XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICB3aWR0aDogNDZweDtcbiAgICAgICAgICAgIGhlaWdodDogNDZweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdHI6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgdGQge1xuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5tb250aHMge1xuICAgICAgICB0ZCB7XG4gICAgICAgICAgaGVpZ2h0OiA1MnB4O1xuXG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qIC5jdXJyZW50LXRpbWVkYXRlICovXG4gIC5jdXJyZW50LXRpbWVkYXRlIHtcbiAgICBjb2xvcjogJGZvbnQtY29sb3ItMDM7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcblxuICAgIHNwYW46bm90KDplbXB0eSk6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICB3aWR0aDogMTVweDtcbiAgICAgIGhlaWdodDogMTZweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICAgICAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQThBQUFBUUNBWUFBQURKVmlVRUFBQUJNa2xFUVZRb1U5VlR3VzNDUUJDY09VZ0J0RUJLU0F1a0FuQktNRSt3RkNBbFlJaGs4c1FseEZBQnRKQVNjQXN1QVBCRWV3WWN4Q1A4b3V4clBEc3phNjF1aVZOMW82Uk5IRDRodFNDbXE0OVJmTzcxQnZNSnFCQmtJVFJmMWttVVc0OW5RUkM5aDFJNUFabEJDbGFMOGFQMWZLZ09PeEN4OGFTTHMrUTE5ZVp1Tk84UW1QcUpSdERGZ3V5N09BY0RiSlBzKy9CS1ZQRElQcnZEMlpKZ1dBbVZlN08wckkwVnFzMXNleVdVWHB1Sm9wcFlDYTVMK1UrK05wTlBrcjVPRTJvTWRBUnNiM2d5a0pUNXlkWmNMOFo5V3c2MG54ZzJMaGpPTjlsaTlPd1haem8reExicDNuQzJzOUNMMlJydWVHeVZyZ3dObThIcHNDelo5RUVXNmtxWGxvMUdRZTAzRnpQLzdXOEhsMGRCdHU3QmY3enQ2bUl3dlgxUnZ6RENtNytxM21BVzBEbC9HUGRVQ2VYclpMVDlCckRyR2ttNHFsUHZBQUFBQUVsRlRrU3VRbUNDKTtcbiAgICB9XG4gIH1cblxuICAvKiAuYnMtZGF0ZXBpY2tlci1tdWx0aXBsZSAqL1xuICAmLW11bHRpcGxlIHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcblxuICAgICYgKyAmIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIH1cblxuICAgIC5icy1kYXRlcGlja2VyIHtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICB9XG5cbiAgICAgICYgKyAuYnMtZGF0ZXBpY2tlcjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBOEFBQUFLQ0FZQUFBQnJHd1Q1QUFBQTFFbEVRVlFvVTQyUnNRckNVQXhGNzdWdUR1N080b01XVy8vQlVSQkJwWnZnS2s0dUlyam9xS09UZitEb3BJTzR1WWdndEZUZnczK3BrUXFDVzEvRzVKN2tKaUZ5NG01TXhVbHhBemdJUEhYK2x6TVB6dXBSWWxZZ3hpUjd2cXNPUDhZS3pzVHgweXhGTUNVWitxN2FaemxyK092Z29XY0FGeUFIZ2F0MmpMV3U0ODI1MkRkcUFpaERKR1NTSk5VVXhZbVFqczMraFBRQmxBaDJyRzJMQ09QbmF3M0lpR0RYOTlUUkNzN0FTSnNOaFVPQTdkL0xjdUh2UkcyMkZJWnZzTlh3MU1YNlZaRXhDaWxPUUtFZmVMWHIvMTArYUM5SG83YXJoN29BQUFBQVNVVk9SSzVDWUlJPSk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAyNXB4O1xuICAgICAgICBsZWZ0OiAtOHB4O1xuICAgICAgfVxuXG4gICAgICAubGVmdCB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgfVxuXG4gICAgICAucmlnaHQge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyogLmJzLWRhdGVwaWNrZXItYnRucyAqL1xuICAmLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuXG4gIC5icy1tZWRpYS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICB9XG5cbiAgLyouYnMtZGF0ZXBpY2tlci1jdXN0b20tcmFuZ2UgKi9cbiAgJi1jdXN0b20tcmFuZ2Uge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogJGN1c3RvbS1yYW5nZS1iZztcbiAgfVxuXG4gIC8qIC5icy1kYXRlcGlja2VyLXByZWRlZmluZWQtYnRucyAqL1xuICAmLXByZWRlZmluZWQtYnRucyB7XG4gICAgYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnRuLWJnMjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGNvbG9yOiAkZm9udC1jb2xvci0wMTtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICBwYWRkaW5nOiAwIDE4cHg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgdHJhbnNpdGlvbjogMC4zcztcblxuICAgICAgJjphY3RpdmUsXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJ0bi1iZzItaG92ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyogLmJzLWRhdGVwaWNrZXItYnV0dG9ucyAqL1xuICAmLWJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xuXG4gICAgLmJ0bi1kZWZhdWx0IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIH1cbiAgfVxufVxuXG4vKiAuYnMtdGltZXBpY2tlciAqL1xuLmJzLXRpbWVwaWNrZXIge1xuICAmLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICB9XG5cbiAgJi1sYWJlbCB7XG4gICAgY29sb3I6ICRmb250LWNvbG9yLTAzO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cblxuICAmLWNvbnRyb2xzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cbiAgICBidXR0b24ge1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnRuLWJnO1xuICAgICAgY29sb3I6ICRmb250LWNvbG9yLTAzO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICBsaW5lLWhlaWdodDogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJ0bi1iZy1ob3ZlcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbnB1dCB7XG4gICAgICB3aWR0aDogMzVweDtcbiAgICAgIGhlaWdodDogMjVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5zd2l0Y2gtdGltZS1mb3JtYXQge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWluLXdpZHRoOiA1NHB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XG4gICAgYmFja2dyb3VuZDogJG1haW4tYmc7XG4gICAgY29sb3I6ICRmb250LWNvbG9yLTAzO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcblxuICAgIGltZyB7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogaW5pdGlhbDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgfVxuICB9XG59XG5cbmJzLWRhdGVwaWNrZXItY29udGFpbmVyLFxuYnMtZGF0ZXJhbmdlcGlja2VyLWNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDEwODA7XG59XG5cbi8qIHNjcmVlbiBzaXplIDwgMTAyNHB4ICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmJzLWRhdGVwaWNrZXIge1xuICAgICYtbXVsdGlwbGUge1xuICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgJiArICYge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogdGhlbWluZyAqL1xuQGVhY2ggJG5hbWUsICRjb2xvciBpbiAkdGhlbWUtbGlzdCB7XG4gIEBpbmNsdWRlIHRoZW1pbmcoJG5hbWUsICRjb2xvcik7XG59XG4iLCIkbWFpbi1iZzogICAgICAgICAjZmZmICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS1iZzogI2VlZSAhZGVmYXVsdDtcblxuJG1haW4tYm94LXNoYWRvdzogI2FhYSAhZGVmYXVsdDtcblxuJGZvbnQtY29sb3ItMDE6ICAgI2ZmZiAhZGVmYXVsdDtcbiRmb250LWNvbG9yLTAyOiAgICM5YWFlYzEgIWRlZmF1bHQ7XG4kZm9udC1jb2xvci0wMzogICAjNTQ3MDhiICFkZWZhdWx0O1xuXG4kYm9yZGVyLWNvbG9yOiAgICAjZTllZGYwICFkZWZhdWx0O1xuJGhpZ2hsaWdodGVkOiAgICAgI2U5ZWRmMCAhZGVmYXVsdDtcblxuJGJ0bi1iZzogICAgICAgICAgI2U5ZWRmMCAhZGVmYXVsdDtcbiRidG4tYmctaG92ZXI6ICAgICNkNWRhZGQgIWRlZmF1bHQ7XG5cbiRidG4tYmcyOiAgICAgICAgICM5YWFlYzEgIWRlZmF1bHQ7XG4kYnRuLWJnMi1ob3ZlcjogICAjNTQ3MDhiICFkZWZhdWx0O1xuXG4kdGhlbWUtZ3JheTogICAgICAjNzc3ICFkZWZhdWx0O1xuJHRoZW1lLWdyZWVuOiAgICAgIzVjYjg1YyAhZGVmYXVsdDtcbiR0aGVtZS1ibHVlOiAgICAgICM1YmMwZGUgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay1ibHVlOiAjMzM3YWI3ICFkZWZhdWx0O1xuJHRoZW1lLXJlZDogICAgICAgI2Q5NTM0ZiAhZGVmYXVsdDtcbiR0aGVtZS1vcmFuZ2U6ICAgICNmMGFkNGUgIWRlZmF1bHQ7XG5cbiRkaXNhYmxlZC1iYWNrZ3JvdW5kOiAgcmdiYSgyMjEsIDIyMSwgMjIxLCAwLjMpICFkZWZhdWx0O1xuJGRpc2FibGVkLWNvbG9yOiAgICAgICAjZjVmNWY1ICFkZWZhdWx0O1xuXG4kdGhlbWUtbGlzdDogKFxuICAnZGVmYXVsdCc6ICR0aGVtZS1ncmF5LFxuICAnZ3JlZW4nOiAkdGhlbWUtZ3JlZW4sXG4gICdibHVlJzogJHRoZW1lLWJsdWUsXG4gICdkYXJrLWJsdWUnOiAkdGhlbWUtZGFyay1ibHVlLFxuICAncmVkJzogJHRoZW1lLXJlZCxcbiAgJ29yYW5nZSc6ICR0aGVtZS1vcmFuZ2UsXG4pICFkZWZhdWx0O1xuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuQG1peGluIHRoZW1pbmcoJG5hbWUsICRjb2xvcikge1xuICAudGhlbWUtI3skbmFtZX0ge1xuICAgIC5icy1kYXRlcGlja2VyLWhlYWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuICAgIH1cblxuICAgIC5icy1kYXRlcGlja2VyLWJvZHkge1xuICAgICAgdGFibGUge1xuICAgICAgICB0ZCB7XG4gICAgICAgICAgc3Bhbi5zZWxlY3RlZCxcbiAgICAgICAgICAmLnNlbGVjdGVkIHNwYW4sXG4gICAgICAgICAgc3BhbltjbGFzcyo9XCJzZWxlY3QtXCJdOmFmdGVyLFxuICAgICAgICAgICZbY2xhc3MqPVwic2VsZWN0LVwiXSBzcGFuOmFmdGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLndlZWsgc3BhbiB7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYuYWN0aXZlLXdlZWsgc3Bhbjpob3ZlciB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG4gICAgICAgICAgICBjb2xvcjogJGZvbnQtY29sb3ItMDE7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwcztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8qIC5icy1kYXRlcGlja2VyICovXG4uYnMtZGF0ZXBpY2tlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAwICNhYWE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgLyogYnV0dG9uICovXG4gIC8qIC5icy1kYXRlcGlja2VyLWhlYWQgKi9cbiAgLyogLmJzLWRhdGVwaWNrZXItYm9keSAqL1xuICAvKiAuY3VycmVudC10aW1lZGF0ZSAqL1xuICAvKiAuYnMtZGF0ZXBpY2tlci1tdWx0aXBsZSAqL1xuICAvKiAuYnMtZGF0ZXBpY2tlci1idG5zICovXG4gIC8qLmJzLWRhdGVwaWNrZXItY3VzdG9tLXJhbmdlICovXG4gIC8qIC5icy1kYXRlcGlja2VyLXByZWRlZmluZWQtYnRucyAqL1xuICAvKiAuYnMtZGF0ZXBpY2tlci1idXR0b25zICovIH1cbiAgLmJzLWRhdGVwaWNrZXI6YWZ0ZXIge1xuICAgIGNsZWFyOiBib3RoO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gIC5icy1kYXRlcGlja2VyIGJzLWRheS1waWNrZXIge1xuICAgIGZsb2F0OiBsZWZ0OyB9XG4gIC5icy1kYXRlcGlja2VyIGJ1dHRvbjpob3ZlcixcbiAgLmJzLWRhdGVwaWNrZXIgYnV0dG9uOmZvY3VzLFxuICAuYnMtZGF0ZXBpY2tlciBidXR0b246YWN0aXZlLFxuICAuYnMtZGF0ZXBpY2tlciBpbnB1dDpob3ZlcixcbiAgLmJzLWRhdGVwaWNrZXIgaW5wdXQ6Zm9jdXMsXG4gIC5icy1kYXRlcGlja2VyIGlucHV0OmFjdGl2ZSxcbiAgLmJzLWRhdGVwaWNrZXItYnRucyBidXR0b246aG92ZXIsXG4gIC5icy1kYXRlcGlja2VyLWJ0bnMgYnV0dG9uOmZvY3VzLFxuICAuYnMtZGF0ZXBpY2tlci1idG5zIGJ1dHRvbjphY3RpdmUsXG4gIC5icy1kYXRlcGlja2VyLXByZWRlZmluZWQtYnRucyBidXR0b246YWN0aXZlLFxuICAuYnMtZGF0ZXBpY2tlci1wcmVkZWZpbmVkLWJ0bnMgYnV0dG9uOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lOyB9XG4gIC5icy1kYXRlcGlja2VyLWhlYWQge1xuICAgIG1pbi13aWR0aDogMjcwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAwIDA7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAvKiAuYnMtZGF0ZXBpY2tlci1oZWFkIGJ1dHRvbiAqLyB9XG4gICAgLmJzLWRhdGVwaWNrZXItaGVhZDphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgLmJzLWRhdGVwaWNrZXItaGVhZCBidXR0b24ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB0cmFuc2l0aW9uOiAwLjNzOyB9XG4gICAgICAuYnMtZGF0ZXBpY2tlci1oZWFkIGJ1dHRvbltkaXNhYmxlZF0sIC5icy1kYXRlcGlja2VyLWhlYWQgYnV0dG9uW2Rpc2FibGVkXTpob3ZlciwgLmJzLWRhdGVwaWNrZXItaGVhZCBidXR0b25bZGlzYWJsZWRdOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjIxLCAyMjEsIDIyMSwgMC4zKTtcbiAgICAgICAgY29sb3I6ICNmNWY1ZjU7XG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cbiAgICAgIC5icy1kYXRlcGlja2VyLWhlYWQgYnV0dG9uLm5leHQsIC5icy1kYXRlcGlja2VyLWhlYWQgYnV0dG9uLnByZXZpb3VzIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4OyB9XG4gICAgICAgIC5icy1kYXRlcGlja2VyLWhlYWQgYnV0dG9uLm5leHQgc3BhbiwgLmJzLWRhdGVwaWNrZXItaGVhZCBidXR0b24ucHJldmlvdXMgc3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgfVxuICAgICAgLmJzLWRhdGVwaWNrZXItaGVhZCBidXR0b24uY3VycmVudCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIG1heC13aWR0aDogMTU1cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMTNweDsgfVxuICAuYnMtZGF0ZXBpY2tlci1oZWFkIGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpOyB9XG4gIC5icy1kYXRlcGlja2VyLWhlYWQgYnV0dG9uOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpOyB9XG4gIC5icy1kYXRlcGlja2VyLWJvZHkge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XG4gICAgbWluLWhlaWdodDogMjMycHg7XG4gICAgbWluLXdpZHRoOiAyNzhweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllZGYwO1xuICAgIC8qIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgKi8gfVxuICAgIC5icy1kYXRlcGlja2VyLWJvZHkgLmRheXMud2Vla3Mge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogMTsgfVxuICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgICAvKiAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlLmRheXMgKi9cbiAgICAgIC8qIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUud2Vla3MgKi8gfVxuICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0aCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgY29sb3I6ICM5YWFlYzE7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZCB7XG4gICAgICAgIGNvbG9yOiAjNTQ3MDhiO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZzogMDsgfVxuICAgICAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHNwYW4ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIC8qei1pbmRleDogMTsqL1xuICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IH1cbiAgICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZDpub3QoLmRpc2FibGVkKTpub3QoLndlZWspIHNwYW46bm90KC5kaXNhYmxlZCk6bm90KC5pcy1vdGhlci1tb250aCkge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgICAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkLmlzLWhpZ2hsaWdodGVkOm5vdCguZGlzYWJsZWQpOm5vdCguc2VsZWN0ZWQpIHNwYW4sXG4gICAgICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQgc3Bhbi5pcy1oaWdobGlnaHRlZDpub3QoLmRpc2FibGVkKTpub3QoLnNlbGVjdGVkKSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWRmMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwczsgfVxuICAgICAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkLmlzLWFjdGl2ZS1vdGhlci1tb250aDpub3QoLmRpc2FibGVkKTpub3QoLnNlbGVjdGVkKSBzcGFuLFxuICAgICAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHNwYW4uaXMtYWN0aXZlLW90aGVyLW1vbnRoOm5vdCguZGlzYWJsZWQpOm5vdCguc2VsZWN0ZWQpIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllZGYwO1xuICAgICAgICAgIHRyYW5zaXRpb246IDBzO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgICAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHNwYW4uZGlzYWJsZWQsXG4gICAgICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQuZGlzYWJsZWQgc3BhbiB7XG4gICAgICAgICAgY29sb3I6ICM5YWFlYzE7IH1cbiAgICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZCBzcGFuLnNlbGVjdGVkLFxuICAgICAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkLnNlbGVjdGVkIHNwYW4ge1xuICAgICAgICAgIGNvbG9yOiAjZmZmOyB9XG4gICAgICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQgc3Bhbi5pcy1vdGhlci1tb250aCxcbiAgICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZC5pcy1vdGhlci1tb250aCBzcGFuIHtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTsgfVxuICAgICAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkLmFjdGl2ZSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZC5hY3RpdmUuc2VsZWN0LXN0YXJ0OmJlZm9yZSB7XG4gICAgICAgICAgICBsZWZ0OiAzNSU7IH1cbiAgICAgICAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkLmFjdGl2ZS5zZWxlY3QtZW5kOmJlZm9yZSB7XG4gICAgICAgICAgICBsZWZ0OiAtODUlOyB9XG4gICAgICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQgc3Bhbi5hY3RpdmUuc2VsZWN0LXN0YXJ0OmFmdGVyLFxuICAgICAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHNwYW4uYWN0aXZlLnNlbGVjdC1lbmQ6YWZ0ZXIsXG4gICAgICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQuYWN0aXZlLnNlbGVjdC1zdGFydCBzcGFuOmFmdGVyLFxuICAgICAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkLmFjdGl2ZS5zZWxlY3QtZW5kIHNwYW46YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7IH1cbiAgICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZDpiZWZvcmUsXG4gICAgICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQgc3BhbjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgIHRvcDogNnB4O1xuICAgICAgICAgIGJvdHRvbTogNnB4O1xuICAgICAgICAgIGxlZnQ6IC0ycHg7XG4gICAgICAgICAgcmlnaHQ6IC0ycHg7XG4gICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cbiAgICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZC5hY3RpdmUuc2VsZWN0LXN0YXJ0ICsgdGQuYWN0aXZlOmJlZm9yZSB7XG4gICAgICAgICAgbGVmdDogLTIwJTsgfVxuICAgICAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkOmxhc3QtY2hpbGQuYWN0aXZlOmJlZm9yZSB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XG4gICAgICAgICAgd2lkdGg6IDEyNSU7XG4gICAgICAgICAgbGVmdDogLTI1JTsgfVxuICAgICAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHNwYW5bY2xhc3MqPVwic2VsZWN0LVwiXSxcbiAgICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZFtjbGFzcyo9XCJzZWxlY3QtXCJdIHNwYW4ge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBjb2xvcjogI2ZmZjsgfVxuICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZS5kYXlzIHRkLmFjdGl2ZTpub3QoLnNlbGVjdC1zdGFydCk6YmVmb3JlLCAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlLmRheXMgdGQuaW4tcmFuZ2U6bm90KC5zZWxlY3Qtc3RhcnQpOmJlZm9yZSxcbiAgICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUuZGF5cyBzcGFuLmFjdGl2ZTpub3QoLnNlbGVjdC1zdGFydCk6YmVmb3JlLFxuICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZS5kYXlzIHNwYW4uaW4tcmFuZ2U6bm90KC5zZWxlY3Qtc3RhcnQpOmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlOWVkZjA7IH1cbiAgICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUuZGF5cyBzcGFuIHtcbiAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7IH1cbiAgICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZS5kYXlzIHNwYW4uc2VsZWN0LXN0YXJ0IHtcbiAgICAgICAgICB6LWluZGV4OiAyOyB9XG4gICAgICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUuZGF5cyBzcGFuLmlzLWhpZ2hsaWdodGVkLmluLXJhbmdlOmJlZm9yZSwgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZS5kYXlzIHNwYW4uaW4tcmFuZ2Uuc2VsZWN0LWVuZDpiZWZvcmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgbGVmdDogMDsgfVxuICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZS5kYXlzIHRkLnNlbGVjdC1zdGFydCArIHRkLnNlbGVjdC1lbmQ6YmVmb3JlLFxuICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZS5kYXlzIHRkLnNlbGVjdC1zdGFydCArIHRkLmlzLWhpZ2hsaWdodGVkOmJlZm9yZSxcbiAgICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUuZGF5cyB0ZC5hY3RpdmUgKyB0ZC5pcy1oaWdobGlnaHRlZDpiZWZvcmUsXG4gICAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlLmRheXMgdGQuYWN0aXZlICsgdGQuc2VsZWN0LWVuZDpiZWZvcmUsXG4gICAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlLmRheXMgdGQuaW4tcmFuZ2UgKyB0ZC5pcy1oaWdobGlnaHRlZDpiZWZvcmUsXG4gICAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlLmRheXMgdGQuaW4tcmFuZ2UgKyB0ZC5zZWxlY3QtZW5kOmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlOWVkZjA7XG4gICAgICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlLndlZWtzIHRyIHRkOm50aC1jaGlsZCgyKS5hY3RpdmU6YmVmb3JlIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlOm5vdCgud2Vla3MpIHRyIHRkOmZpcnN0LWNoaWxkOmJlZm9yZSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4OyB9XG4gICAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlLnllYXJzIHRkIHNwYW4ge1xuICAgICAgICB3aWR0aDogNDZweDtcbiAgICAgICAgaGVpZ2h0OiA0NnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDVweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87IH1cbiAgICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUueWVhcnMgdHI6bm90KDpsYXN0LWNoaWxkKSB0ZCBzcGFuIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4OyB9XG4gICAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlLm1vbnRocyB0ZCB7XG4gICAgICAgIGhlaWdodDogNTJweDsgfVxuICAgICAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlLm1vbnRocyB0ZCBzcGFuIHtcbiAgICAgICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDsgfVxuICAuYnMtZGF0ZXBpY2tlciAuY3VycmVudC10aW1lZGF0ZSB7XG4gICAgY29sb3I6ICM1NDcwOGI7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllZGYwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgfVxuICAgIC5icy1kYXRlcGlja2VyIC5jdXJyZW50LXRpbWVkYXRlIHNwYW46bm90KDplbXB0eSk6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICB3aWR0aDogMTVweDtcbiAgICAgIGhlaWdodDogMTZweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICAgICAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQThBQUFBUUNBWUFBQURKVmlVRUFBQUJNa2xFUVZRb1U5VlR3VzNDUUJDY09VZ0J0RUJLU0F1a0FuQktNRSt3RkNBbFlJaGs4c1FseEZBQnRKQVNjQXN1QVBCRWV3WWN4Q1A4b3V4clBEc3phNjF1aVZOMW82Uk5IRDRodFNDbXE0OVJmTzcxQnZNSnFCQmtJVFJmMWttVVc0OW5RUkM5aDFJNUFabEJDbGFMOGFQMWZLZ09PeEN4OGFTTHMrUTE5ZVp1Tk84UW1QcUpSdERGZ3V5N09BY0RiSlBzKy9CS1ZQRElQcnZEMlpKZ1dBbVZlN08wckkwVnFzMXNleVdVWHB1Sm9wcFlDYTVMK1UrK05wTlBrcjVPRTJvTWRBUnNiM2d5a0pUNXlkWmNMOFo5V3c2MG54ZzJMaGpPTjlsaTlPd1haem8reExicDNuQzJzOUNMMlJydWVHeVZyZ3dObThIcHNDelo5RUVXNmtxWGxvMUdRZTAzRnpQLzdXOEhsMGRCdHU3QmY3enQ2bUl3dlgxUnZ6RENtNytxM21BVzBEbC9HUGRVQ2VYclpMVDlCckRyR2ttNHFsUHZBQUFBQUVsRlRrU3VRbUNDKTsgfVxuICAuYnMtZGF0ZXBpY2tlci1tdWx0aXBsZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7IH1cbiAgICAuYnMtZGF0ZXBpY2tlci1tdWx0aXBsZSArIC5icy1kYXRlcGlja2VyLW11bHRpcGxlIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyB9XG4gICAgLmJzLWRhdGVwaWNrZXItbXVsdGlwbGUgLmJzLWRhdGVwaWNrZXIge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgICAgLmJzLWRhdGVwaWNrZXItbXVsdGlwbGUgLmJzLWRhdGVwaWNrZXI6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7IH1cbiAgICAgIC5icy1kYXRlcGlja2VyLW11bHRpcGxlIC5icy1kYXRlcGlja2VyICsgLmJzLWRhdGVwaWNrZXI6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQThBQUFBS0NBWUFBQUJyR3dUNUFBQUExRWxFUVZRb1U0MlJzUXJDVUF4Rjc3VnVEdTdPNG9NV1cvL0JVUkJCcFp2Z0trNHVJcmpvcUtPVGYrRG9wSU80dVlnZ3RGVGZ3Mytwa1FxQ1cxL0c1SjdrSmlGeTRtNU14VWx4QXpnSVBIWCtsek1QenVwUllsWWd4aVI3dnFzT1A4WUt6c1R4MHl4Rk1DVVorcTdhWnpscitPdmdvV2NBRnlBSGdhdDJqTFd1NDgyNTJEZHFBaWhESkdTU0pOVVV4WW1RanMzK2hQUUJsQWgyckcyTENPUG5hdzNJaUdEWDk5VFJDczdBU0pzTmhVT0E3ZC9MY3VIdlJHMjJGSVp2c05YdzFNWDZWWkV4Q2lsT1FLRWZlTFhyLzEwK2FDOUhvN2FyaDdvQUFBQUFTVVZPUks1Q1lJST0pO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMjVweDtcbiAgICAgICAgbGVmdDogLThweDsgfVxuICAgICAgLmJzLWRhdGVwaWNrZXItbXVsdGlwbGUgLmJzLWRhdGVwaWNrZXIgLmxlZnQge1xuICAgICAgICBmbG9hdDogbGVmdDsgfVxuICAgICAgLmJzLWRhdGVwaWNrZXItbXVsdGlwbGUgLmJzLWRhdGVwaWNrZXIgLnJpZ2h0IHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0OyB9XG4gIC5icy1kYXRlcGlja2VyLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTVweDsgfVxuICAuYnMtZGF0ZXBpY2tlciAuYnMtbWVkaWEtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4OyB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAuYnMtZGF0ZXBpY2tlciAuYnMtbWVkaWEtY29udGFpbmVyIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfSB9XG4gIC5icy1kYXRlcGlja2VyLWN1c3RvbS1yYW5nZSB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlOyB9XG4gIC5icy1kYXRlcGlja2VyLXByZWRlZmluZWQtYnRucyBidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWFhZWMxO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nOiAwIDE4cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzOyB9XG4gICAgLmJzLWRhdGVwaWNrZXItcHJlZGVmaW5lZC1idG5zIGJ1dHRvbjphY3RpdmUsIC5icy1kYXRlcGlja2VyLXByZWRlZmluZWQtYnRucyBidXR0b246aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU0NzA4YjsgfVxuICAuYnMtZGF0ZXBpY2tlci1idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U5ZWRmMDsgfVxuICAgIC5icy1kYXRlcGlja2VyLWJ1dHRvbnMgLmJ0bi1kZWZhdWx0IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyB9XG5cbi8qIC5icy10aW1lcGlja2VyICovXG4uYnMtdGltZXBpY2tlci1jb250YWluZXIge1xuICBwYWRkaW5nOiAxMHB4IDA7IH1cblxuLmJzLXRpbWVwaWNrZXItbGFiZWwge1xuICBjb2xvcjogIzU0NzA4YjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxuXG4uYnMtdGltZXBpY2tlci1jb250cm9scyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XG4gIC5icy10aW1lcGlja2VyLWNvbnRyb2xzIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWRmMDtcbiAgICBjb2xvcjogIzU0NzA4YjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdHJhbnNpdGlvbjogMC4zczsgfVxuICAgIC5icy10aW1lcGlja2VyLWNvbnRyb2xzIGJ1dHRvbjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVkYWRkOyB9XG4gIC5icy10aW1lcGlja2VyLWNvbnRyb2xzIGlucHV0IHtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWRmMDsgfVxuXG4uYnMtdGltZXBpY2tlciAuc3dpdGNoLXRpbWUtZm9ybWF0IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWluLXdpZHRoOiA1NHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWVkZjA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjNTQ3MDhiO1xuICBmb250LXNpemU6IDEzcHg7IH1cbiAgLmJzLXRpbWVwaWNrZXIgLnN3aXRjaC10aW1lLWZvcm1hdCBpbWcge1xuICAgIHZlcnRpY2FsLWFsaWduOiBpbml0aWFsO1xuICAgIG1hcmdpbi1sZWZ0OiA0cHg7IH1cblxuYnMtZGF0ZXBpY2tlci1jb250YWluZXIsXG5icy1kYXRlcmFuZ2VwaWNrZXItY29udGFpbmVyIHtcbiAgei1pbmRleDogMTA4MDsgfVxuXG4vKiBzY3JlZW4gc2l6ZSA8IDEwMjRweCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5icy1kYXRlcGlja2VyLW11bHRpcGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4OyB9XG4gICAgLmJzLWRhdGVwaWNrZXItbXVsdGlwbGUgKyAuYnMtZGF0ZXBpY2tlci1tdWx0aXBsZSB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7IH0gfVxuXG4vKiB0aGVtaW5nICovXG4udGhlbWUtZGVmYXVsdCAuYnMtZGF0ZXBpY2tlci1oZWFkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3NzsgfVxuXG4udGhlbWUtZGVmYXVsdCAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHNwYW4uc2VsZWN0ZWQsXG4udGhlbWUtZGVmYXVsdCAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkLnNlbGVjdGVkIHNwYW4sXG4udGhlbWUtZGVmYXVsdCAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHNwYW5bY2xhc3MqPVwic2VsZWN0LVwiXTphZnRlcixcbi50aGVtZS1kZWZhdWx0IC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGRbY2xhc3MqPVwic2VsZWN0LVwiXSBzcGFuOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3NzsgfVxuXG4udGhlbWUtZGVmYXVsdCAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkLndlZWsgc3BhbiB7XG4gIGNvbG9yOiAjNzc3OyB9XG5cbi50aGVtZS1kZWZhdWx0IC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQuYWN0aXZlLXdlZWsgc3Bhbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3NztcbiAgY29sb3I6ICNmZmY7XG4gIG9wYWNpdHk6IDAuNTtcbiAgdHJhbnNpdGlvbjogMHM7IH1cblxuLnRoZW1lLWdyZWVuIC5icy1kYXRlcGlja2VyLWhlYWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiODVjOyB9XG5cbi50aGVtZS1ncmVlbiAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHNwYW4uc2VsZWN0ZWQsXG4udGhlbWUtZ3JlZW4gLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZC5zZWxlY3RlZCBzcGFuLFxuLnRoZW1lLWdyZWVuIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQgc3BhbltjbGFzcyo9XCJzZWxlY3QtXCJdOmFmdGVyLFxuLnRoZW1lLWdyZWVuIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGRbY2xhc3MqPVwic2VsZWN0LVwiXSBzcGFuOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjYjg1YzsgfVxuXG4udGhlbWUtZ3JlZW4gLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZC53ZWVrIHNwYW4ge1xuICBjb2xvcjogIzVjYjg1YzsgfVxuXG4udGhlbWUtZ3JlZW4gLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZC5hY3RpdmUtd2VlayBzcGFuOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiODVjO1xuICBjb2xvcjogI2ZmZjtcbiAgb3BhY2l0eTogMC41O1xuICB0cmFuc2l0aW9uOiAwczsgfVxuXG4udGhlbWUtYmx1ZSAuYnMtZGF0ZXBpY2tlci1oZWFkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzViYzBkZTsgfVxuXG4udGhlbWUtYmx1ZSAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHNwYW4uc2VsZWN0ZWQsXG4udGhlbWUtYmx1ZSAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkLnNlbGVjdGVkIHNwYW4sXG4udGhlbWUtYmx1ZSAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHNwYW5bY2xhc3MqPVwic2VsZWN0LVwiXTphZnRlcixcbi50aGVtZS1ibHVlIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGRbY2xhc3MqPVwic2VsZWN0LVwiXSBzcGFuOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzViYzBkZTsgfVxuXG4udGhlbWUtYmx1ZSAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkLndlZWsgc3BhbiB7XG4gIGNvbG9yOiAjNWJjMGRlOyB9XG5cbi50aGVtZS1ibHVlIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQuYWN0aXZlLXdlZWsgc3Bhbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzViYzBkZTtcbiAgY29sb3I6ICNmZmY7XG4gIG9wYWNpdHk6IDAuNTtcbiAgdHJhbnNpdGlvbjogMHM7IH1cblxuLnRoZW1lLWRhcmstYmx1ZSAuYnMtZGF0ZXBpY2tlci1oZWFkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNzsgfVxuXG4udGhlbWUtZGFyay1ibHVlIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQgc3Bhbi5zZWxlY3RlZCxcbi50aGVtZS1kYXJrLWJsdWUgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZC5zZWxlY3RlZCBzcGFuLFxuLnRoZW1lLWRhcmstYmx1ZSAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHNwYW5bY2xhc3MqPVwic2VsZWN0LVwiXTphZnRlcixcbi50aGVtZS1kYXJrLWJsdWUgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZFtjbGFzcyo9XCJzZWxlY3QtXCJdIHNwYW46YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM3YWI3OyB9XG5cbi50aGVtZS1kYXJrLWJsdWUgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZC53ZWVrIHNwYW4ge1xuICBjb2xvcjogIzMzN2FiNzsgfVxuXG4udGhlbWUtZGFyay1ibHVlIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQuYWN0aXZlLXdlZWsgc3Bhbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNztcbiAgY29sb3I6ICNmZmY7XG4gIG9wYWNpdHk6IDAuNTtcbiAgdHJhbnNpdGlvbjogMHM7IH1cblxuLnRoZW1lLXJlZCAuYnMtZGF0ZXBpY2tlci1oZWFkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0ZjsgfVxuXG4udGhlbWUtcmVkIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQgc3Bhbi5zZWxlY3RlZCxcbi50aGVtZS1yZWQgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZC5zZWxlY3RlZCBzcGFuLFxuLnRoZW1lLXJlZCAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHNwYW5bY2xhc3MqPVwic2VsZWN0LVwiXTphZnRlcixcbi50aGVtZS1yZWQgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZFtjbGFzcyo9XCJzZWxlY3QtXCJdIHNwYW46YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk1MzRmOyB9XG5cbi50aGVtZS1yZWQgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZC53ZWVrIHNwYW4ge1xuICBjb2xvcjogI2Q5NTM0ZjsgfVxuXG4udGhlbWUtcmVkIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQuYWN0aXZlLXdlZWsgc3Bhbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0ZjtcbiAgY29sb3I6ICNmZmY7XG4gIG9wYWNpdHk6IDAuNTtcbiAgdHJhbnNpdGlvbjogMHM7IH1cblxuLnRoZW1lLW9yYW5nZSAuYnMtZGF0ZXBpY2tlci1oZWFkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwYWQ0ZTsgfVxuXG4udGhlbWUtb3JhbmdlIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQgc3Bhbi5zZWxlY3RlZCxcbi50aGVtZS1vcmFuZ2UgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZC5zZWxlY3RlZCBzcGFuLFxuLnRoZW1lLW9yYW5nZSAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHNwYW5bY2xhc3MqPVwic2VsZWN0LVwiXTphZnRlcixcbi50aGVtZS1vcmFuZ2UgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZFtjbGFzcyo9XCJzZWxlY3QtXCJdIHNwYW46YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhZDRlOyB9XG5cbi50aGVtZS1vcmFuZ2UgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZC53ZWVrIHNwYW4ge1xuICBjb2xvcjogI2YwYWQ0ZTsgfVxuXG4udGhlbWUtb3JhbmdlIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQuYWN0aXZlLXdlZWsgc3Bhbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwYWQ0ZTtcbiAgY29sb3I6ICNmZmY7XG4gIG9wYWNpdHk6IDAuNTtcbiAgdHJhbnNpdGlvbjogMHM7IH1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9YnMtZGF0ZXBpY2tlci5jc3MubWFwICovIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RSIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../postcss-loader/src??embedded!./bootstrap.min.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/bootstrap/dist/css/bootstrap.min.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./node_modules/ngx-bootstrap/datepicker/bs-datepicker.css":
/*!*****************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/datepicker/bs-datepicker.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../postcss-loader/src??embedded!./bs-datepicker.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/ngx-bootstrap/datepicker/bs-datepicker.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!********************************************************************************************************************************************!*\
  !*** multi ./node_modules/bootstrap/dist/css/bootstrap.min.css ./node_modules/ngx-bootstrap/datepicker/bs-datepicker.css ./src/styles.css ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\achra\Downloads\angular-nodejs-example-master\my-app\node_modules\bootstrap\dist\css\bootstrap.min.css */"./node_modules/bootstrap/dist/css/bootstrap.min.css");
__webpack_require__(/*! C:\Users\achra\Downloads\angular-nodejs-example-master\my-app\node_modules\ngx-bootstrap\datepicker\bs-datepicker.css */"./node_modules/ngx-bootstrap/datepicker/bs-datepicker.css");
module.exports = __webpack_require__(/*! C:\Users\achra\Downloads\angular-nodejs-example-master\my-app\src\styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map