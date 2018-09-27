var sheetID = "1aCb25ef3FNF7QkoQ-LEWh7S0HUk1I4V7KSvjGZoTVqc";
var ss = SpreadsheetApp.openById(sheetID);
var s1 = ss.getSheetByName("Sheet1")

function tr(str){
	return str.replace(/_AMP_/g, '&').replace(/_QST_/g, '?').replace(/_HSH_/g, '#'); 
}
function linkFrom(str){
  return /linkedin/.test(str)
}

function doGet(req) {
  var nextRow = s1.getLastRow()+1;
  var now = new Date();
  
  var name = tr(req.parameter.name);
  var title = tr(req.parameter.title);
  var empl = tr(req.parameter.empl);
  var email = tr(req.parameter.email);
  var links = tr(req.parameter.links);
  var comment = tr(req.parameter.comment);  
  var url = tr(req.parameter.url);
  var user = Session.getActiveUser();
  
if(linkFrom(url) === true){
  var arr = new Array([now,user,name,title,empl,email,comment,links,url]);
}else{
  var arr = new Array([now,user,name,title,empl,email,comment,'',url,links]);
}

  s1.getRange(nextRow,1,arr.length,arr[0].length).setValues(arr);
  return ContentService.createTextOutput(name+" was sent to your sheet\nhttps://docs.google.com/spreadsheets/d/"+sheetID);
}
