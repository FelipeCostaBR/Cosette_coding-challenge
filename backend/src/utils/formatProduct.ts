interface Images {
    src: string;
}

interface Product {
    name: string;
    description: string;
    brand: string;
    price: string;
    images: [string];
    sku: string;
    qty: number;
}

interface ProductShopify {
    title: string;
    body_html: string;
    vendor: string;
    images: Images[];
    variants: [{ price: string; inventory_quantity: number; sku: string }];
}

export const formatProduct = (product: Product): ProductShopify => {
    const images = product.images?.map((image: string) => ({
        src: image,
    }));

    return {
        title: product.name,
        body_html: product.description,
        vendor: product.brand,
        images,
        variants: [
            {
                price: product.price,
                inventory_quantity: product.qty,
                sku: product.sku,
            },
        ],
    };
};
