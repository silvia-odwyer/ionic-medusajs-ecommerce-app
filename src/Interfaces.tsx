export interface Product {
    id: string;
    title: string;
    handle: string;
    images: Image[];
    description: string;
    variants: any[];
}

export interface Image {
    url: string;
}