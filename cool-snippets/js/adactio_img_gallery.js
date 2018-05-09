function showPic (pic) {
  if (!document.getElementById) { return true; }
  document.getElementById('placeholder').src = pic.href;
  var desc = pic.title ? pic.title : pic.childNodes[0].nodeValue;
  document.getElementById('desc').childNodes[0].nodeValue = desc;
  return false;
}