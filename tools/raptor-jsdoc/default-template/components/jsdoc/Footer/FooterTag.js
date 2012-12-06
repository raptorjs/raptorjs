raptor.define(
    "components.jsdoc.Footer.FooterTag",
    function(raptor) {
        var templating = require('raptor/templating');
        
        var FooterTag = function(config) {
            
        };
        
        FooterTag.prototype = {
            process: function(input, context) {
                templating.render("components/jsdoc/Footer", {
                }, context);
            }
        };
        
        return FooterTag;
    });