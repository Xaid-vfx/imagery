require("dotenv").config()

const express = require("express")
const app = express()
const cors = require("cors")
app.use(express.json())
app.use(
  cors({
    origin: "https://imagery-tan.vercel.app",
  })
)

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)

const storeItems = new Map([
  [1, { priceInCents: 10000, name: "A LandScape Image" }],
  [2, { priceInCents: 20000, name: "Flowers on the roof" }],
])

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map(item => {
        const storeItem = storeItems.get(item.id)
        return {
          price_data: {
            currency: "inr",
            product_data: {
              name: item.name,
              images: [item.image]
            },
            unit_amount: item.price * 100,
          },
          quantity: item.quantity,
        }
      }),
      success_url: `${process.env.CLIENT_URL}`,
      cancel_url: `${process.env.CLIENT_URL}`,
    })
    res.json({ url: session.url })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})
app.use('/', (req,res) => {
  res.json({message: "Hello ji"})
}); 

app.listen(5500, () => {
  console.log('Server Started on Port 5500');
})