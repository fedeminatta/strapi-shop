// @ts-ignore
const stripe = require("stripe")(
  "sk_test_51O68nwDTioVtb2gxM9vX45FM1PLD7ShlNbhagMkTFddJ6Zi32MqEulWJr0adBwsrCtq3ANRXC4DAGt0WEZIJWjac00zLxCsere"
);

("use strict");

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    // @ts-ignore
    console.log("Datos del cuerpo de la solicitud:", ctx.request.body);
    // @ts-ignore
    const { products } = ctx.request.body;

    const lineItems = await Promise.all(
      products.map(async (product) => {
        const item = await strapi
          .service("api::product.product")
          .findOne(product.id);

        console.log(product.quantity);
        console.log(item);
        console.log(item.id);
        console.log(item.quantity);

        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.title,
            },
            unit_amount: item.price * 100,
          },
          quantity: product.quantity,
        };
      })
    );
    try {
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        success_url: `${process.env.CLIENT_URL}?success=true`,
        cancel_url: `${process.env.CLIENT_URL}?success=false`,
        line_items: lineItems,
        shipping_address_collection: { allowed_countries: ["US"] },
        payment_method_types: ["card"],
      });

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
