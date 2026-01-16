function updateMasterSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var masterSheet = ss.getSheetByName("Master Sheet");

  // Create Master Sheet if missing
  if (!masterSheet) {
    masterSheet = ss.insertSheet("Master Sheet");
  }

  // Header row (row 2)
  var headers = [
    "SNO","INSTITUTE CODE","CANDIDATE NAME","CONTACT NO.","EMAIL ID",
    "FATHER/MOTHER NAME","FATHER/MOTHER CONTACT NO.","CITY","COLLEGE NAME",
    "QUALIFICATION","BRANCH","PASSOUT YEAR","COURSE NAME","TRAINING MODE",
    "DATE OF BIRTH","ADMISSION DATE","TOTAL FEES CHARGED","TOTAL FEES RECEIVED",
    "TOTAL FEES PENDING","BOOKING AMOUNT","INSTALLMENT 1","PAYMENT DATE (1)",
    "PAYMENT MODE (1)","INSTALLMENT 2","PAYMENT DATE (2)","PAYMENT MODE (2)",
    "INSTALLMENT 3","PAYMENT DATE (3)","PAYMENT MODE (3)","PAYMENT STATUS",
    "OPT - OUT","PLACEMENT STATUS","PLACEMENT COMPANY NAME",
    "Admission Month","Admission Quarter","Admission Year"
  ];

  // Set headers only once
  if (masterSheet.getLastRow() < 2) {
    masterSheet.getRange(2, 1, 1, headers.length).setValues([headers]);
  }

  // Clear old data (content only)
  var lastRow = masterSheet.getLastRow();
  if (lastRow > 2) {
    masterSheet.getRange(3, 1, lastRow - 2, headers.length).clearContent();
  }

  var pasteRow = 3;

  // Pull data from year sheets
  ss.getSheets().forEach(function(sheet) {
    var name = sheet.getName();

    if (
      name !== "Master Sheet" &&
      name !== "Template" &&
      name !== "Fee Alert Console" &&
      name !== "Config"
    ) {
      var lastRowSrc = sheet.getLastRow();
      if (lastRowSrc > 2) {
        var data = sheet
          .getRange(3, 1, lastRowSrc - 2, headers.length)
          .getValues();

        masterSheet
          .getRange(pasteRow, 1, data.length, headers.length)
          .setValues(data);

        pasteRow += data.length;
      }
    }
  });

  // Ensure at least one data row always exists (row 3)
  var finalDataLastRow = Math.max(pasteRow - 1, 3);
  var maxRows = masterSheet.getMaxRows();

  // Delete extra unused rows safely
  if (finalDataLastRow < maxRows) {
    masterSheet.deleteRows(
      finalDataLastRow + 1,
      maxRows - finalDataLastRow
    );
  }

  // Sort by Admission Date (Column 16)
  if (finalDataLastRow > 3) {
    masterSheet
      .getRange(3, 1, finalDataLastRow - 2, headers.length)
      .sort({ column: 16, ascending: false });
  }
}
