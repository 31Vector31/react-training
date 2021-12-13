import React, {useEffect, useState, useCallback, useMemo} from 'react';
import {useSearchParams} from "react-router-dom";
import CatalogFilters from "../CatalogFilters/CatalogFilters";
import Header from "../Header/Header";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Catalog.module.css";

const groupParamsByKey = (params) => [...params.entries()].reduce((acc, tuple) => {
    const [key, val] = tuple;
    if (acc.hasOwnProperty(key)) {
        if (Array.isArray(acc[key])) {
            acc[key] = [...acc[key], val]
        } else {
            acc[key] = [acc[key], val];
        }
    } else {
        acc[key] = val;
    }
    return acc;
}, {});

function Catalog() {
    const [products, setProducts] = useState([
        {
            title: "Телефон",
            brand: "Apple",
            price: 2460,
            image: "https://cdn.pixabay.com/photo/2020/11/22/11/53/iphone-12-5766344_960_720.jpg"
        },
        {
            title: "Ноутбук",
            brand: "Asus",
            price: 24600,
            image: "https://cdn.comfy.ua/media/catalog/product/cache/4/small_image/270x265/62defc7f46f3fbfc8afcd112227d1181/a/c/acer-aspire-3-a315-22-22g-34-wp-01.png.jpg"
        }
    ]);

    const [searchParams, setSearchParams] = useSearchParams();
    const [params, setSearch] = useState({});

    const {startPrice, endPrice, brand, search, sort} = params;
    const searchLowerCase = (search && search.length !== 0) ? search.toLowerCase() || null : null;

    const requiredProducts = useMemo(() => products.filter(product => {
        const {price, brand: brandProduct, title} = product;
        if (startPrice)
            if (price < startPrice) return false;

        if (endPrice)
            if (price > endPrice) return false;

        if (brand && brand.length !== 0) {
            if (Array.isArray(brand)) {
                if (brand.find(el => el === brandProduct) === undefined) return false;
            } else if (brand !== brandProduct) return false;
        }

        if (searchLowerCase)
            if (!title.toLowerCase().includes(searchLowerCase)) return false;

        return true;
    }), [params, products]);

    const addSearch = useCallback((key, value) => {
        if (!value) value = [];
        setSearch(prevSearch => {
            return {...prevSearch, [`${key}`]: value}
        });
    }, []);


    useEffect(() => {
        setSearch(groupParamsByKey(searchParams));
    }, [])

    useEffect(() => {
        setSearchParams(params);
    }, [params])

    const sortProduct = (a, b) => {
        if (!sort) return;
        if (sort === "increase") return a.price > b.price ? 1 : -1;
        if (sort === "decrease") return a.price < b.price ? 1 : -1;
        return a.title.localeCompare(b.title);
    }

    return (
        <div className={styles.catalog}>
            <CatalogFilters addSearch={addSearch} params={params}/>
            <div className={styles.content}>
                <Header addSearch={addSearch} params={params}/>
                <div className={styles.products}>
                    {requiredProducts.length !== 0 ? requiredProducts.sort(sortProduct).map((product, index) =>
                            <ProductCard key={index} product={product}/>)
                        :
                        <h3>Выбранных продуктов нет</h3>}
                </div>
            </div>
        </div>
    );
}

export default Catalog;