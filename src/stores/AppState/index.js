"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var AppState = (function () {
    function AppState() {
        var _this = this;
        this.timer = 0;
        setInterval(function () {
            _this.incrementTimer();
        }, 1000);
    }
    AppState.prototype.incrementTimer = function () {
        this.timer += 1;
    };
    AppState.prototype.resetTimer = function () {
        this.timer = 0;
    };
    return AppState;
}());
__decorate([
    mobx_1.observable
], AppState.prototype, "timer", void 0);
__decorate([
    mobx_1.action
], AppState.prototype, "incrementTimer", null);
__decorate([
    mobx_1.action
], AppState.prototype, "resetTimer", null);
var appState = new AppState();
exports.default = appState;
