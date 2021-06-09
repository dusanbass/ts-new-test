import {readFile, utils} from 'xlsx';
import {promisify} from 'util';
import {writeFile} from 'fs';

const writeLogger = promisify(writeFile);

const  readExcel = async () => {
    const data = readFile('./namesages.xls')
    console.log(data);
    const cats = data.Sheets.Cats;
    console.log(utils.sheet_to_json(cats));
    const dogs = data.Sheets.Dogs;
    console.log(utils.sheet_to_json(dogs));

    await writeLogger('./loggerOfXLSX_cats.json', JSON.stringify(cats));
    console.log('cats are converted to JSON too!!')

    writeLogger('./loggerOfXLSX.json', JSON.stringify(dogs)).then(() => console.log('written!!!'))
    console.log('this is the end of readExcel function!')
  } 

export default readExcel;