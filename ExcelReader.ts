import {readFile, utils} from 'xlsx'

const readExcel = () => {
    const data = readFile('./namesages.xls')
    console.log(data);
    const cats = data.Sheets.Cats;
    console.log(utils.sheet_to_json(cats));
    const dogs = data.Sheets.Dogs;
    console.log(utils.sheet_to_json(dogs));
  } 

export default readExcel;