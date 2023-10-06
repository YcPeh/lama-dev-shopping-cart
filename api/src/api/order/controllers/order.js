"use strict";
const stripe = require("stripe")(process.env.STRIPE_KEY);

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { products } = ctx.request.body;
    try {
      // console.log("inside try section");
      const lineItems = await Promise.all(
        products.map(async (product) => {
          const item = await strapi
            .service("api::product.product")
            .findOne(product.id);
          console.log("item", item);
          return {
            price_data: {
              currency: "MYR",
              product_data: {
                name: item.title,
              },
              unit_amount: item.price * 100,
            },
            quantity: product.quantity,
            // quantity: 1,
          };
        })
      );
      // console.log("inside try section 2");
      // console.log("process.env.CLIENT_URL", process.env.CLIENT_URL);
      // console.log("process.env.STRIPE_KEY", process.env.STRIPE_KEY);
      // console.log("lineItems", lineItems);

      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        success_url: `${process.env.CLIENT_URL}?success=true`,
        cancel_url: `${process.env.CLIENT_URL}?success=false`,
        line_items: lineItems,
        // shipping_address_collection: { allowed_countries: ["MY"] },
        // payment_method_types: ["card"],
      });

      // console.log("inside try section3");

      await strapi.service("api::order.order").create({
        data: {
          products,
          stripeId: session.id,
        },
      });

      return { stripeSession: session };
    } catch (error) {
      ctx.response.status = 500;
      return error;
    }
  },
}));
