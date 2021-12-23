import ProductCard from "../ProductCard/ProductCard";
import React, {useMemo} from "react";
import styles from "./ProductList.module.css";

function ProductList({products, filters}) {

    const {startPrice, endPrice, brand, search, sort} = filters;

    const brandParams = useMemo(() => {
        return typeof brand === "string" ? [brand] : brand;
    }, [brand]);

    const searchLowerCase = useMemo(() => {
        return (search && search.length !== 0) ? search.toLowerCase() || null : null;
    }, [search]);

    const requiredProducts = useMemo(() => products.filter(product => {
        const {price, brand: brandProduct, title} = product;
        return (startPrice ? (price > startPrice) : true) &&
            (endPrice ? (price < endPrice) : true) &&
            (brandParams ? (brandParams.find(el => el === brandProduct)) : true) &&
            (searchLowerCase ? (title.toLowerCase().includes(searchLowerCase)) : true);
    }), [filters, products]);

    const sortProduct = (a, b) => {
        if (!sort) return;
        if (sort === "increase") return a.price > b.price ? 1 : -1;
        if (sort === "decrease") return a.price < b.price ? 1 : -1;
        return a.title.localeCompare(b.title);
    }

    return (
        <div className={styles.products}>
            {requiredProducts.length !== 0 ? requiredProducts.sort(sortProduct).map((product, index) =>
                    <ProductCard key={index} product={product}/>)
                :
                <h3>Выбранных продуктов нет</h3>}
        </div>
    );
}

export default ProductList;