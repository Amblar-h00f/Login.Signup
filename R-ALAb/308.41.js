const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";


const csvArray = [
    ["ID", "Name", "Occupation", "Age"],
    ["42", "Bruce", "Knight", "41"],
    ["57", "Bob", "Fry Cook", "19"],
    ["63", "Blaine", "Quiz Master", "58"],
    ["98", "Bill", "Doctor’s Assistant", "26"]
  ];
  
  // Convert to array of objects
  function convertToObjects(data) {
    // Extract and normalize headers (lowercase)
    const headers = data[0].map(header => header.toLowerCase());
    
    // Process data rows (skip header row)
    return data.slice(1).map(row => {
      const obj = {};
      headers.forEach((key, index) => {
        obj[key] = row[index];
      });
      return obj;
    });
  }
  
  // Store results
  const objectArray = convertToObjects(csvArray);
  console.log(objectArray);