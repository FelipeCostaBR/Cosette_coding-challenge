import fs from 'fs';
import path from 'path';

const rawData = fs.readFileSync(
    path.resolve(__dirname, '../../../products_file/products.json'),
    'utf8',
);
export const products = JSON.parse(rawData);
