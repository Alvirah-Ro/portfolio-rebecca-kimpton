import { useState } from "react";
import * as pdfjsLib from "pdfjs-dist/build/pdf";

pdfjsLib.GlobalWorkerOptions.workerSrc = false;

async function extractTableFromPDF(file) {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    let fullText = "";

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        const page = await pdf.getPage(pageNum);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map(item => item.str).join(" ");
        fullText += pageText + "\n";
    }

    const tableRows = [];
    const lines = fullText.split("\n");
    for (const line of lines) {
        const match = line.match(
            /Edition\s*#\s*([A-Za-z0-9/-]+).*Title\s*(.+?).*Order\s*(\d+).*Ship\s*(\d+).*List\s*(\d+\.\d{2}).*Disc\s*(\d+%).*Net\s*(\d+\.\d{2}).*Extension\s*(\d+\.\d{2})/i
        );
        if (match) {
            tableRows.push({
                edition: match[1],
                title: match[2],
                order: match[3],
                ship: match[4],
                list: match[5],
                disc: match[6],
                net: match[7],
                extension: match[8]
            });
        }
    }
    console.log(tableRows);
    return tableRows;
}

export default function ExtractTableComponent() {
  const [tableData, setTableData] = useState([]);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const data = await extractTableFromPDF(file);
      setTableData(data);
    }
  };

  return (
    <div>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <pre>{JSON.stringify(tableData, null, 2)}</pre>
    </div>
  );
}