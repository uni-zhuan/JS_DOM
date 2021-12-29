function showPic(whichpic) {
  var source = whichpic.getAttribute("href");//得到所需图片的文件路径
  var placeholder = document.getElementById("placeholder");//获取占位符图片
  // placeholder.setAttribute("src",source);//设置占位符位置的图片
  placeholder.src=source;//另一种改变元素属性的方法，但不是第一层dom
}

window.onload=function countBodyChildren(){
  var body_element=document.getElementsByTagName("body")[0];
  // alert(body_element.childNodes.length);
  alert(body_element.nodeType);
}
