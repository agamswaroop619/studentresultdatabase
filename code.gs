function doGet(e) {
  return HtmlService.createTemplateFromFile("Index")
    .evaluate()
    .setTitle("Student Database")
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function processForm(formObject) {
  var spreadsheetId = '1BO6E4WHB0fq7BBIF9Tbuc_85HgFkZChb3vUEkg0BDoU'; // ** CHANGE !!!!
  var sheetName = "Data";
  var sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);
  var data = sheet.getDataRange().getValues();
  var ar = [];

  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    if (row[0] && row[0].toString() === formObject.rollNumber) {
      ar.push(row.slice(0)); // Exclude the first two elements (rollNumber and date)
    }
  }

  var headers = data[0].slice(0); // Extract headers from the first row, excluding rollNumber and date

  console.log('Form Object:', formObject);
  console.log('Search Results:', ar);
  console.log('Headers:', headers);

  return { searchResults: ar, headers: headers };
}
