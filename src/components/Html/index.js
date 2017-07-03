"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_helmet_1 = require("react-helmet");
var mobx_react_devtools_1 = require("mobx-react-devtools");
var Html = (function (_super) {
    __extends(Html, _super);
    function Html() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Html.prototype.render = function () {
        var helmet = react_helmet_1.default.renderStatic();
        return (React.createElement("html", __assign({}, helmet.htmlAttributes.toComponent()),
            React.createElement("head", null,
                helmet.base.toComponent(),
                helmet.title.toComponent(),
                helmet.meta.toComponent(),
                helmet.link.toComponent(),
                helmet.style.toComponent(),
                helmet.script.toComponent(),
                helmet.noscript.toComponent()),
            React.createElement("body", __assign({}, helmet.bodyAttributes.toComponent()),
                module.hot ? React.createElement(mobx_react_devtools_1.default, null) : "",
                this.props.body,
                this.props.state,
                this.props.script)));
    };
    return Html;
}(React.Component));
exports.default = Html;
