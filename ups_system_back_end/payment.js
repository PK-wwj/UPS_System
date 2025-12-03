const pool = require("./db")

async function addPayment(payment) {
    console.log("start addpayment")
    const sql = `
    INSERT INTO payment (customerid, method, cardinfo)
    VALUES ($1, $2, $3)
    RETURNING *
  `

    const values = [payment.customerid, payment.method, payment.cardinfo]
    console.log("values", values)
    const result = await pool.query(sql, values)
    return result.rows[0]
}

module.exports = { addPayment }
