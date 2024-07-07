import { db } from "../../db.js";

export const resolvers = {
  Query: {
    products: () => db.products,
    product: (parent: any, args: { id: String }, context: any) => {
      const result = db.products.find((item) => item.id === args.id);
      return result;
    },
    categories: () => db.categories,
    category: (parent: any, args: { id: String }, context: any) => {
      const result = db.categories.find((item) => item.id === args.id);
      return result;
    },
  },
  Product: {
    category: (parent: any, args: any, context: any) => {
      const category = db.categories.find(
        (item) => item.id === parent.categoryId
      );
      return category;
    },
    reviews: (parent: any, args: any, context: any) => {
      const reviews = db.reviews.filter((item) => item.productId === parent.id);
      return reviews;
    },
  },
  Category: {
    products: (parent: any, args: any, context: any) => {
      const products = db.products.filter(
        (item) => item.categoryId === parent.id
      );
      return products;
    },
  },
};
