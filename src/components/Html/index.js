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
        return (
        //
        // DONTODO somewhere mangle js and css paths for CDN
        // ("link", { key: "phenomic.css." + i, rel: "stylesheet", href: "//az707230.vo.msecnd.net/201704test02"+file })
        // ( "script", { key: "phenomic.js." + i, src: "//az707230.vo.msecnd.net/201704test02"+file } 
        //
        React.createElement("html", __assign({}, helmet.htmlAttributes.toComponent(), { "data-loginid": "{% if customer %}shp-{{ customer.id }}{% endif %}", "data-username": "{% if customer %}{{ customer.metafields.filmmaker.username }}{% endif %}" }),
            React.createElement("head", null,
                helmet.base.toComponent(),
                helmet.title.toComponent(),
                React.createElement("meta", { name: "robots", content: "noindex, nofollow" }),
                helmet.meta.toComponent(),
                module.hot ? "" : React.createElement("link", { rel: "canonical", href: "{{ canonical_url }}" }),
                helmet.link.toComponent(),
                helmet.style.toComponent(),
                helmet.script.toComponent(),
                helmet.noscript.toComponent(),
                module.hot ? "" : "{{ content_for_header }}"),
            React.createElement("body", __assign({}, helmet.bodyAttributes.toComponent(), { className: "hold-transition skin-blue sidebar-mini" }),
                module.hot ? React.createElement(mobx_react_devtools_1.default, null) : "",
                this.props.body,
                this.props.state,
                this.props.script,
                module.hot ? "" : "{{content_for_layout}}")));
    };
    return Html;
}(React.Component));
exports.default = Html;
