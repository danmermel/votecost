const { DatabaseSync } = require('node:sqlite')
const database = new DatabaseSync('votecost.sqlite')


const handler = async function (event, context) {
  if (event.body) {
    event.body = JSON.parse(event.body)
    const sql = event.body.sql
    const params = event.body.params
    //console.log("sql", sql )
    ///console.log("params ", params)
    //console.log("preparing statement")
    const query = database.prepare(sql)
    var ret = query.all(...params)
    //console.log (ret)

    return {
      statusCode: 200,
      body: JSON.stringify(ret)
    }
  }
}

module.exports = {
  handler: handler
}