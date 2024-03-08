const { readExcel, writeExcel } = require('./excel-utils-phuongdh');

// Writing to Excel file
const dataToWrite = [
    { Name: 'John', Age: 30, City: 'New York' },
    { Name: 'Alice', Age: 25, City: 'Los Angeles' },
    { Name: 'Bob', Age: 35, City: 'Chicago' }
];

writeExcel('output.xlsx', dataToWrite)
    .catch(error => {
        console.error('Error writing Excel file:', error);
    });