(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/forms'], factory) :
	(factory((global['plugin-a'] = {}),global.core,global.common,global.forms));
}(this, (function (exports,core,common,forms) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */







function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}



function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

var PluginAComponent = /** @class */ (function () {
    function PluginAComponent(el) {
        this.el = el;
        this.cancelWfl = new core.EventEmitter();
    }
    PluginAComponent.prototype.activityConfObject = function () {
        return this.activityConf;
    };
    PluginAComponent.prototype.cancelWorkflow = function () {
        this.cancelWfl.emit("cancel workflow (EventEmmitter)");
    };
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], PluginAComponent.prototype, "activityConf", void 0);
    __decorate([
        core.Output(),
        __metadata("design:type", Object)
    ], PluginAComponent.prototype, "cancelWfl", void 0);
    PluginAComponent = __decorate([
        core.Component({
            selector: 'plugin-a-component',
            template: "<form #myForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"name\" required>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"alterEgo\">Alter Ego</label>\n      <input type=\"text\" class=\"form-control\" id=\"alterEgo\">\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n    <div>Activity Configuration: {{activityConfObject() | json }}</div>\n    <button (click)=\"cancelWorkflow()\">Cancel Workflow</button>\n</form>\n"
        }),
        __metadata("design:paramtypes", [core.ElementRef])
    ], PluginAComponent);
    return PluginAComponent;
}());

var PluginAModule = /** @class */ (function () {
    function PluginAModule() {
    }
    PluginAModule = __decorate([
        core.NgModule({
            imports: [
                common.CommonModule,
                forms.FormsModule
            ],
            declarations: [PluginAComponent],
            entryComponents: [PluginAComponent],
            providers: [{
                    provide: 'plugins',
                    useValue: [{
                            name: 'plugin-a-component',
                            component: PluginAComponent
                        }],
                    multi: true
                }]
        })
    ], PluginAModule);
    return PluginAModule;
}());

exports.PluginAModule = PluginAModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
