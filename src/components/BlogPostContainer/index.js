"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var client_1 = require("@phenomic/preset-react-app/lib/client");
var BlogPost = function (props) {
    return (React.createElement("div", null, props.page.node &&
        React.createElement("article", null,
            React.createElement(client_1.BodyRenderer, null, props.page.node.body))));
};
var BlogPostContainer = client_1.createContainer(BlogPost, function (props) { return ({
    page: client_1.query({ collection: 'posts', id: props.params.splat })
}); });
exports.default = BlogPostContainer;
