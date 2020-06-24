const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgres://fimobwue:GtL0MZLIaJOpI2hUnSuVpeZAQMJZnHMW@ruby.db.elephantsql.com:5432/fimobwue',
  password: 'GtL0MZLIaJOpI2hUnSuVpeZAQMJZnHMW'
})

const db = {};

db.deCapitalize = (string) => {
  let decapitalized = string[0].toLowerCase();
  decapitalized += string.slice(1);
  return decapitalized
}

db.getTable = (tableName, callback) => {
  let command = `SELECT * FROM ${tableName};`
  pool.query(command, (error, dbResponse) => {
    if (error) console.log("ERROR", error);
    else return callback(dbResponse);
  })
}
db.deleteRow = (table, key, value, callback) => {
  let command = `DELETE FROM ${table} WHERE ${key}='${value}';`
  pool.query(command, (error, dbResponse) => {
    if (error) console.log("ERROR", error);
    else return callback(dbResponse);
  })
}
db.getColumnNames = (table, callback) => {
  console.log(db.deCapitalize(table));
  let command = `SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME ='${table}' ORDER BY ORDINAL_POSITION;`
  console.log('command', command)
  pool.query(command, (error, dbResponse) => {
    console.log('inside query callback')
    if (error) console.log("ERROR", error);
    else return callback(dbResponse);
  })
}

module.exports = {
  getTable: db.getTable,
  deleteRow: db.deleteRow,
  getColumnNames: db.getColumnNames,
  deCapitalize: db.deCapitalize
}