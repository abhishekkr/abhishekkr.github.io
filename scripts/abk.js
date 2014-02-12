/*
abk.js
*/

function markdown_to_html(_markdown){
    var converter = new Showdown.converter();
    return converter.makeHtml(_markdown);
};

/* AngularStuff ->  */
ngabk = angular.module('ngabk', []);

ngabk.directive('markdown', function(){
		var previewTemplate = '<div>PREVIEW:</div>'

		return {
			restrict: 'E',
			scope:{}, //for multiple markdown components to have isolate scope
			compile:function(tElement, tAttrs, transclude){
				var markdown = tElement.text();
        tElement.html( markdown_to_html(markdown) );
			}//end-of-compile-function
		}
});
/* <- AngularStuff  */

function get_blogs(){ // loading Blogs
    var url='/blogs.md';
    var oReq = new XMLHttpRequest();
    oReq.onreadystatechange = function(e) {
        if (this.readyState == 4 && this.status == 200) {
              document.getElementById('blogs').innerHTML = markdown_to_html(this.responseText);
        }
    }
    oReq.open('GET', url, true);
    oReq.send();
};
get_blogs();
