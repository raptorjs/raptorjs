/*
 * Copyright 2011 eBay Software Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

raptor.define(
    "packager.Include_css",
    "packager.Include",
    function() {
        "use strict";
        
        var Include_css = function() {
            Include_css.superclass.constructor.apply(this, arguments);
            this.addProperty("path", {
                type: "string"
            });
        };
        
        Include_css.prototype = {
            
            getKey: function() {
                return "css:" + this.resolvePathKey(this.path);
            },
            
            toString: function() {
                return this.getResource().getPath();
            },
            
            getCode: function(context) {
                return this.getResource(context).readAsString("UTF-8");
            },
            
            getResourcePath: function() {
                return this.path;
            },
            
            getContentType: function() {
                return "text/css";
            },
            
            isInPlaceDeploymentAllowed: function() {
                return true;
            }
        };
        
        return Include_css;
    });
