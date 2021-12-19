import React, {useState, useCallback, useMemo, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import CatalogFilters from "../CatalogFilters/CatalogFilters";
import Header from "../Header/Header";
import ProductList from "../ProductList/ProductList";
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

const brands = ["Apple", "Asus"];

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
    const params = useMemo(() => groupParamsByKey(searchParams), [searchParams]);

    useEffect(() => {
        let validatedParams = {};
        const sort = ["", "title", "increase", "decrease"];
        Object.entries(params).forEach(([key, value]) => {
            if (key === "startPrice" || key === "endPrice") if (!Number(value)) validatedParams[key] = [];
            if (key === "sort") if (sort.find((el) => el === value) === undefined) validatedParams[key] = [];
            if (key === "brand") {
                const brandValue = Array.isArray(value) ? value : [value];
                if (brandValue.every(item => brands.indexOf(item) === -1)) validatedParams[key] = [];
            }
        });
        setSearchParams({...params, ...validatedParams});
    }, [params]);

    const addSearch = useCallback(parameter => {
        const newParameter = {};
        Object.entries(parameter).forEach(([key, value]) => {
            if (value) newParameter[key] = value;
            else newParameter[key] = [];
        });
        setSearchParams({...params, ...newParameter});
    }, [params]);

    return (
        <div className={styles.catalog}>
            <CatalogFilters allBrands={brands} addSearch={addSearch} params={params}/>
            <div className={styles.content}>
                <Header addSearch={addSearch} params={params}/>
                <ProductList products={products} params={params}/>
            </div>
        </div>
    );
}

export default Catalog;