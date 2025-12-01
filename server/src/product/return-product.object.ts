import { Prisma } from '../../generated/prisma/client.js';
import { returnCategoryObject } from '../category/return-category.object.js';

export const returnProductObject: Prisma.ProductSelect = {
  id: true,
  name: true,
  description: true,
  price: true,
  createdAt: true,
  slug: true,
  image: true,
  category: { select: returnCategoryObject },
};
