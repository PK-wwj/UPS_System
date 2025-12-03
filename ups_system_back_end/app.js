const express = require("express")
const cors = require("cors")
const pool = require("./db")
const { addPayment } = require("./payment")

const app = express()
app.use(cors())
app.use(express.json())

app.post("/api/payment/add", async (req, res) => {
  const { method, cardNumber, expiry, cvv } = req.body

  try {
    const cardinfo = `${cardNumber}-${expiry}-${cvv}`
    console.log("cardinfo:", cardinfo)
    console.log("method:", method)
    const newPayment = await addPayment({
      customerid: 1,
      method,
      cardinfo
    })

    res.json({
      message: "Payment added successfully",
      data: newPayment
    })
    console.log("cardinfo:", cardinfo)
    console.log("method:", method)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.listen(5000, () =>
  console.log("Backend running http://localhost:5000")
)
