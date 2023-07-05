import { Request, Response } from "express";

import { Product } from "../../models/Product";

export async function listProducts(req: Request, res: Response) {
  try {
    const products = await Product.find().populate("ingredients");

    res.status(200).json(products);
  } catch (error) {
    res.sendStatus(500);
  }
}
