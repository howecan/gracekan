


  var loaded = 0;
  completeLoading();
  setTimeout(loadingmake,200);
  function loadingmake(){
    console.log(loaded);
    if(loaded == 0){
      //获取浏览器页面可见高度和宽度  
      var _PageHeight = document.documentElement.clientHeight,  
          _PageWidth = document.documentElement.clientWidth;  
      //计算loading框距离顶部和左部的距离（loading框的宽度为100px，高度为100px）  
      var _LoadingTop = _PageHeight > 100 ? (_PageHeight - 100) / 2 : 0,  
          _LoadingLeft = _PageWidth > 100 ? (_PageWidth - 100) / 2 : 0;  
      //在页面未加载完毕之前显示的loading Html自定义内容  
      var _LoadingHtml = '<div id="loadingDiv" style="position:absolute;left:0;width:100%;height:' + _PageHeight + 'px;top:0;background:#000;opacity:1;filter:alpha(opacity=80);z-index:1000000;"><div style="position: absolute; cursor: wait; left: ' + _LoadingLeft + 'px; top:' + _LoadingTop + 'px; width: 100px; height: 100px; line-height: 100px; color: #696969; font-family:\'Arial\';font-size:100px" id="loadingtxt">0</div></div>';  
      //呈现loading效果  
      document.write(_LoadingHtml);  


        var loadingMask = document.getElementById('loadingDiv'); 
        var loadingtxt = document.getElementById("loadingtxt"); 
        var c = 0;
        var i = setInterval(function(){
            loadingtxt.innerHTML = c+"%";
            completeLoading();
            
          if(c < 99) {
            c++;
          }
          if(c == 99 && loaded == 0 ){
            
              c = 99;
          }
          if(c == 99 && loaded == 1 ) {
              loadingtxt.innerHTML = '100';
              loadingMask.parentNode.removeChild(loadingMask);  
              clearInterval(i);
          }
        }, 50);
    }
  }
//window.onload = function () {  
//    var loadingMask = document.getElementById('loadingDiv');  
//    loadingMask.parentNode.removeChild(loadingMask);  
//};  
  
//监听加载状态改变  
//document.onreadystatechange = completeLoading;  
  
//加载状态为complete时移除loading效果  
function completeLoading() {  
  var iframe = window.frames[0];
  if (iframe.attachEvent){ 
  iframe.attachEvent("onload", function(){ 
   loaded = 1;  
  }); 
  
  } else { 
  iframe.onload = function(){ 
   loaded = 1;  
  }; 
    
  } 
 
  
}  
