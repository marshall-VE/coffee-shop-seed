import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(req: NextRequest) {
  const { items } = await req.json();          // [{name, price, qty}]
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: items.map((i: any) => ({
      price_data: {
        currency: 'usd',
        product_data: { name: i.name },
        unit_amount: Math.round(i.price * 100),
      },
      quantity: i.qty,
    })),
    mode: 'payment',
    success_url: `${req.headers.get('origin')}/success`,
    cancel_url: `${req.headers.get('origin')}/`,
  });
  return NextResponse.json({ id: session.id });
}