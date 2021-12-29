import React, {useState, useCallback, useMemo} from 'react';
import {useSearchParams} from "react-router-dom";
import CatalogFilters, {catalogFiltersValidation} from "../CatalogFilters/CatalogFilters";
import Header, {headerValidation} from "../Header/Header";
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

const initializationFilters = (params, ...validators) => {
    return validators.reduce((accumulator, validator) => {
        return {...accumulator, ...validator(params)}
    }, {});
}

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
    const [filters, setFilters] = useState(() => initializationFilters(params, catalogFiltersValidation, headerValidation));

    const addSearch = useCallback(parameter => {
        const newParameters = {...filters};
        Object.entries(parameter).forEach(([key, value]) => {
            if (value && value.length !== 0) newParameters[key] = value;
            else delete newParameters[key];
        });
        setSearchParams(newParameters);
        setFilters(newParameters);
    }, [filters]);

    return (
        <div className={styles.catalog}>
            <CatalogFilters
                addSearch={addSearch}
                filters={filters}
            />
            <div className={styles.content}>
                <Header
                    addSearch={addSearch}
                    filters={filters}
                />
                <ProductList
                    products={products}
                    filters={filters}
                />
            </div>
        </div>
    );
}

export default Catalog;