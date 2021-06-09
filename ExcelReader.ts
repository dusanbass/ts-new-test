import {readFile, utils} from 'xlsx';
import {promisify} from 'util';
import {writeFile} from 'fs';

const readExcel = () => {
    const data = readFile('./namesages.xls')
    console.log(data);
    const cats = data.Sheets.Cats;
    console.log(utils.sheet_to_json(cats));
    const dogs = data.Sheets.Dogs;
    console.log(utils.sheet_to_json(dogs));

    const writeLogger = promisify(writeFile);
    writeLogger('./loggerOfXLSX.json', JSON.stringify(dogs)).then(() => console.log('written!!!'))
  } 

export default readExcel;