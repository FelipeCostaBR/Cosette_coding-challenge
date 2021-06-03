import axios from 'axios';
import { Request, Response } from 'express';
import { URL } from '../config/credentials.config';

import { formatProduct } from '../utils/formatProduct';
import { products } from '../utils/readProductsFile';

export default class ProductsController {
    public async show(_: Request, response: Response): Promise<Response> {
        try {
            return response.json({ products });
        } catch (error) {
            return response.status(404).json({
                message: error.message,
                data: error.response.data.error,
                status: error.response.status,
            });
        }
    }

    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { product } = request.body;
        const productsFormatted = formatProduct(product);

        try {
            const data = await axios.post(URL, { product: productsFormatted });
            return response.status(201).json({
                status: data.status,
                message: 'product exported with Success',
            });
        } catch (error) {
            return response.status(404).json({
                message: error.message,
                data: error.response.data.error,
                status: error.response.status,
            });
        }
    }
}
