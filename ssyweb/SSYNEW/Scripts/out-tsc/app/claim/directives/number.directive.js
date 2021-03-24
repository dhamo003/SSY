var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, HostListener } from '@angular/core';
var NumberOnlyDirective = /** @class */ (function () {
    function NumberOnlyDirective(el) {
        var _this = this;
        this.el = el;
        this.DIGITS_REGEXP = new RegExp(/\D/g);
        // Sanatize clipboard by removing any non-numeric input after pasting
        this.el.nativeElement.onpaste = function (e) {
            e.preventDefault();
            var text;
            var clp = (e.originalEvent || e).clipboardData;
            if (clp === undefined || clp === null) {
                text = window.clipboardData.getData('text') || '';
                if (text !== '') {
                    text = text.replace(_this.DIGITS_REGEXP, '');
                    if (window.getSelection) {
                        var newNode = document.createElement('span');
                        newNode.innerHTML = text;
                        window.getSelection().getRangeAt(0).insertNode(newNode);
                    }
                    else {
                        window.selection.createRange().pasteHTML(text);
                    }
                }
            }
            else {
                text = clp.getData('text/plain') || '';
                if (text !== '') {
                    text = text.replace(_this.DIGITS_REGEXP, '');
                    document.execCommand('insertText', false, text);
                }
            }
        };
    }
    NumberOnlyDirective.prototype.onKeyDown = function (event) {
        var e = event;
        if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+C
            (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+V
            (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+X
            (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    };
    __decorate([
        HostListener('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NumberOnlyDirective.prototype, "onKeyDown", null);
    NumberOnlyDirective = __decorate([
        Directive({
            selector: '[NumbersOnly]'
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], NumberOnlyDirective);
    return NumberOnlyDirective;
}());
export { NumberOnlyDirective };
//# sourceMappingURL=number.directive.js.map