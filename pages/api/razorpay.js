// pages/api/razorpay.js
import Razorpay from 'razorpay';
import { nanoid } from 'nanoid';

// Initialize Razorpay object
const razorpay = new Razorpay({
  key_id: "rzp_test_VghPtJYubxrOEC",
  key_secret: "KKNINTWCk6zB1ZzrASKKyxih",
});

async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Extract details from the request body
      const {
        fullName,
        email,
        mobileNumber,
        courseID,
        courseAmount,
        currency
      } = req.body;

      const payment_capture = 1;
      const amount = courseAmount; // Assuming courseAmount is in the smallest currency unit, e.g., paisa for INR
      const options = {
        amount: amount,
        currency,
        receipt: nanoid(), // Generate a unique receipt ID with nanoid
        payment_capture,
        notes: {
          fullName,
          email,
          mobileNumber,
          courseID
        }
      };

      const order = await razorpay.orders.create(options);
      res.status(200).json(order);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default handler;

