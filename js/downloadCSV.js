function getTimestamp() {
    const now = new Date();
    return now.getFullYear() + '-' +
           String(now.getMonth() + 1).padStart(2, '0') + '-' +
           String(now.getDate()).padStart(2, '0') + '_' +
           String(now.getHours()).padStart(2, '0') + '-' +
           String(now.getMinutes()).padStart(2, '0') + '-' +
           String(now.getSeconds()).padStart(2, '0');
}

// ... (your existing code)




const dataTable = document.getElementById("invTable");
const btnExportToCsv = document.getElementById("btnExportToCsv");

btnExportToCsv.addEventListener("click", () => {
  const exporter = new TableCSVExporter(dataTable);
  const csvOutput = exporter.convertToCSV();
  const csvBlob = new Blob([csvOutput], { type: "text/csv" });
  const blobUrl = URL.createObjectURL(csvBlob);
  const anchorElement = document.createElement("a");

  anchorElement.href = blobUrl;
  const timestamp = getTimestamp();
anchorElement.download = `table-export_${timestamp}.csv`;
  anchorElement.click();

  setTimeout(() => {
    URL.revokeObjectURL(blobUrl);
  }, 500);
});
