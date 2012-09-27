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

raptor.defineClass(
    'templating.taglibs.core.AssignNode',
    'templating.compiler.Node',
    function(raptor) {
        "use strict";
        
        var varNameRegExp = /^[A-Za-z_][A-Za-z0-9_]*$/;
        
        var AssignNode = function(props) {
            AssignNode.superclass.constructor.call(this);
            if (props) {
                this.setProperties(props);
            }
        };
        
        AssignNode.prototype = {
            
            doGenerateCode: function(template) {
                var varName = this.getProperty("var"),
                    value = this.getProperty("value");
                
                if (!varName) {
                    this.addError('"var" attribute is required');
                }
                else if (!varNameRegExp.test(varName)) {
                        varName = null;
                        this.addError('Invalid variable name of "' + withVar.name + '" in "' + vars + '"');
                }
                
                if (!value) {
                    this.addError('"value" attribute is required');
                }
                
                
                if (varName) {
                    template.statement(varName + "=" + value + ";");    
                }
                
            }
            
        };
        
        return AssignNode;
    });