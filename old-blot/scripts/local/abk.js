/*
abk.js
*/

var ActiveTab = 'projects'

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

function replace_page(_elemById){ // loading Blogs
          $('#profile').html(
                $compile('<b>AAAA</b>' )($scope)
                              );
    console.log("Hiding div#<b>" + ActiveTab + "</b>")
    console.log("Showing div#<b>" + _elemById + "</b>")
    ActiveTab = _elemById
    var url='/www-data/' + _elemById + '.html';
    var oReq = new XMLHttpRequest();
    oReq.onreadystatechange = function(e) {
        if (this.readyState == 4 && this.status == 200) {
          //document.getElementById(_elemById).innerHTML = this.responseText;
        }
    }
    oReq.open('GET', url, true);
    oReq.send();
};

replace_page(ActiveTab);
