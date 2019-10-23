/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-11 10:40:58
 * @LastEditTime: 2019-10-11 10:40:58
 * @LastEditors: your name
 */
/*********************************************************************************/
/**********             所有小示例中用到的公共JS函数          ***********************/
/*********************************************************************************/

// 关闭浮动窗口
/**
 function closeDialog(dialog){
	$("#"+dialog).fadeOut(600); 
}
 */
// 向上向下滑动浮动窗口
function slideToggleDialog(dialog){
    /**
     $($("#" + dialog + " > div")[1]).slideToggle("slow", function(){
        if ($("#" + dialog + " > div")[1].style.display == "none") {
            $("#" + dialog + " > div").find("img")[0].src = "../../images/openD.png";
        }
        else {
            $("#" + dialog + " > div").find("img")[0].src = "../../images/closeD.png";
        }
    });
     */
    /**
     $(".bgiframe-bottom").slideToggle("slow");
     */
    //获取指定对象
    function getNode(parentDiv,nodeName){
        for(var i = 0,len = parentDiv.childNodes.length; i < len; i++){
            var node = parentDiv.childNodes[i];
            if(nodeName == "content"){
                if(node.className != "dtitle" && node.nodeName == "DIV"){
                    return node;
                }
            }
            else if(nodeName == "img"){
                if(node.className == "dtitle"){
                    var img = node.getElementsByTagName("img")[0];
                    return img;
                }
            }
            else if(nodeName == "iframe"){
                if(node.nodeName == "IFRAME" && node.className == "bgiframe bgiframe-bottom"){
                    return node;
                }
            }
        }
    }
    //获取弹出div对象
    var dialog = document.getElementById(dialog);
    //获取图片对象
    var img = getNode(dialog,"img");
    //获取弹出窗口中body内容的div对象
    var body = getNode(dialog,"content");
    //获取三维中的iframe
    var iframe = getNode(dialog,"iframe");
    //处理
    if(dialog.style.height == "auto"){
        dialog.style.height = "18px";
        img.src = "/geomap-api/JsCodeDemo_new/images/openD.png";
        body.style.display = "none";
        if(iframe != null)
            iframe.style.display = "none";
    }else{
        dialog.style.height = "auto";
        img.src = "/geomap-api/JsCodeDemo_new/images/closeD.png";
        body.style.display = "block";
        if(iframe != null)
            iframe.style.display = "block";
    }
}

/**
 * 覆盖setTimeout
 */
/*
var _st = window.setTimeout;

window.setTimeout = function(fRef, mDelay){
    if (typeof fRef == 'function') {
        var argu = Array.prototype.slice.call(arguments, 2);
        var f = (function(){
            fRef.apply(null, argu);
        });
        return _st(f, mDelay);
    }
    return _st(fRef, mDelay);
}

var shimsHandleDivObj = null;
*/
/**
 * 切换按钮div获取焦点
 */
/*
function shimsHandle(divId){
    if(!shimsHandleDivObj) {
        // 浮动窗口
        shimsHandleDivObj = document.getElementById(divId);
    }
    shimsHandleDivObj.onfocus = "true";
    setTimeout("shimsHandle('"+divId+"')", 300);
}
*/
