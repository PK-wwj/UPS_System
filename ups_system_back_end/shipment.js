const pool = require("./db")

async function getShipmentById(id) {
  const result = await pool.query(
    "SELECT * FROM shipment WHERE shipmentid = $1",
    [id]
  )
  return result.rows[0] || null
}

module.exports = { getShipmentById }
