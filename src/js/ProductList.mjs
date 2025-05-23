const baseURL = import.meta.env.VITE_SERVER_URL;

import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
    return `<li class="product-card">
    <a href="product_pages/index.html?product=${product.id}"
    < img
    src="${product.Image}"
    alt="image of ${product.Name}"
    <a/>
    <h3 class="card_brand"> ${product.Brand.Name} </h3>
    <h2 class="card_name"> ${product.Name} </h2>
    <p class="product-card_price"> ${product.FinalPrice}</p> </a>
    </li>`;
}

export default class ProductList {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }
    async init() {
        const list = await
            this.renderList(list);
    }

    renderList(list) {
        renderListWithTemplate(productCardTemplate, this.listElement, list)
    }
}
