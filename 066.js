/**
 * Created by fengzijunkk on 2017/3/26.
 */
function pre() {
    var textx = document.getElementById('textIn');
    var button1 = document.getElementsByTagName('input')[0];
    var button2 = document.getElementsByTagName('input')[1];
    var textCopy = document.createElement('p');
    var bodyx = document.getElementsByTagName('body')[0];
    bodyx.appendChild(textCopy);
    var queryx = document.getElementById('query');
    var textSum=textCopy.innerHTML;
    button1.onclick = function () {
        textSum += textx.value;
        textCopy.innerHTML=textSum;
    }
    button2.onclick = function () {
        textCopy.innerHTML=textSum;
        var queryxValue = queryx.value;
        var pattern = new RegExp(queryxValue, 'g');
        //注意，replace并不能修改原字符串，这是个坑，它的返回值是修改后的字符串。
        textCopy.innerHTML=textCopy.innerHTML.replace(pattern,'<span>'+queryxValue+'</span>');
        if (document.getElementsByTagName('span')) {
            var spanx = document.getElementsByTagName('span');
            for(var i=0;i<spanx.length;i++){
                spanx[i].style.color='red';
            }
        }
    }
}
window.onload=pre;





