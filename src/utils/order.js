import { phoneWithoutFormatting } from ".";

const customer = (data, values) => {
  return {
    first_name: data.firstName,
    last_name: values.lastName,
    middle_name: '',
    birth_day: values.birth_day,
    phone: phoneWithoutFormatting(data.phone),
    email: values.email,
  };
};

const products = (data, values, item) => {
  return [
    {
      name: item.product.product_name,
      price: item.product.product_price,
      price_id: values.club_id,
    },
    {
      name: item.subscription.product_name,
      price: item.subscription.product_price,
      price_id: values.club_id,
    },
  ];
};

export const orderData = (data, values, item) => {
  return {
    customer: customer(data, values),
    products: products(data, values, item),
    recurrentable: true,
  };
};
