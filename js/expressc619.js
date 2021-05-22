var isFramed = parent.frames.length > 0;
var target = isFramed ? parent.frames[0] : window;
var source = target.location.href;

function childOf(curr, nodeId) {
  var parent = curr.parentNode;
  while(parent.id != nodeId)
  {
    if (parent.nodeName == 'BODY' || parent.nodeName == "#document") return false;
    else
	{
		parent = parent.parentNode;
	}
  }
  return true;
}


function onLoadHandler() {

	var archivesId = 'archivesLink';
	var archives = document.getElementById(archivesId);
	
	function calendarClickHandler() {
		try
		{
			calendar.f_toggle();
		}
		catch(e)
		{
			//alert("Exception : "+e);
		}
		
		
	}
	
	function documentClickHandler(e) {
		var element;
		element = e.target || e.srcElement;
		if (!childOf(element, 'tcal') && element.id != archivesId && element.id != calendarIconId )
			calendar.f_hide();
		
	}
	
    archives.ClickHandler = calendarClickHandler;

	var calendarIconId = 'tcalico_cal';
	
	document.ClickHandler = documentClickHandler;
        
	XBrowserAddHandler(archives, 'click', 'ClickHandler');
	
	loadCalendar();
	    
    XBrowserAddHandler(document, 'click', 'ClickHandler');	
}

function addCloseEvent()
{
	var closeCalendarDiv = document.getElementById('closeCalendar');
	closeCalendarDiv.ClickHandler = CloseCalendar;
	function CloseCalendar()
	{
		calendar.f_hide();
	}
	XBrowserAddHandler(closeCalendarDiv, 'click', 'ClickHandler');
}
	
	




function XBrowserAddHandler(target,eventName,handlerName) { 
  if ( target.addEventListener ) { 
    target.addEventListener(eventName, function(e){target[handlerName](e);}, false);
  } else if ( target.attachEvent ) { 
    target.attachEvent("on" + eventName, function(e){target[handlerName](e);});
  } else { 
    var originalHandler = target["on" + eventName]; 
    if ( originalHandler ) { 
      target["on" + eventName] = function(e){originalHandler(e);target[handlerName](e);}; 
    } else { 
      target["on" + eventName] = target[handlerName]; 
    } 
  } 
}




// Dean Edwards/Matthias Miller/John Resig
function init() {
  // quit if this function has already been called
  if (arguments.callee.done) return;
  // flag this function so we don't do the same thing twice
  arguments.callee.done = true;
  // kill the timer
  if (_timer) clearInterval(_timer);


  onLoadHandler();

};

/* for Mozilla/Opera9 */
if (document.addEventListener) {
  document.addEventListener("DOMContentLoaded", init, false);
}

/* for Internet Explorer */
/*@cc_on @*/
/*@if (@_win32)
  document.write("<script id=__ie_onload defer src=javascript:void(0)><\/script>");
  var script = document.getElementById("__ie_onload");
  script.onreadystatechange = function() {
    if (this.readyState == "complete") {
      init(); // call the onload handler
    }
  };
/*@end @*/

/* for Safari */
if (/WebKit/i.test(navigator.userAgent)) { // sniff
  var _timer = setInterval(function() {
    if (/loaded|complete/.test(document.readyState)) {
      init(); // call the onload handler
    }
  }, 10);
}

/* for other browsers */
window.onload = init;
