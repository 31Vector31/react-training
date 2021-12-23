import React, {useEffect, useState} from 'react';
import Checkbox from '@mui/material/Checkbox';
import Sliders from "../Sliders";
import styles from "./CatalogFilters.module.css";

const minPrice = 0;
const maxPrice = 30000;
const allBrands = ["Apple", "Asus"];

function CatalogFilters({addSearch, filters, setFilters}) {
    const [price, setPrice] = useState([minPrice, maxPrice]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        setFilters((filters) => {
            let validatedParams = {...filters};
            let {startPrice = minPrice, endPrice = maxPrice, brand = []} = validatedParams || {};
            if (!Array.isArray(brand)) brand = [brand];
            startPrice = Number(startPrice);
            endPrice = Number(endPrice);

            if (!endPrice || endPrice < minPrice || endPrice > maxPrice || endPrice < startPrice)
                delete validatedParams['endPrice'];
            if (!startPrice || startPrice < minPrice || startPrice > maxPrice || startPrice > endPrice)
                delete validatedParams['startPrice'];
            const validatedBrands = brand.filter(el => allBrands.indexOf(el) !== -1)
            if (validatedBrands.length) validatedParams['brand'] = validatedBrands;
            else delete validatedParams["brand"];

            return validatedParams;
        });
    }, []);

    useEffect(() => {
        let {startPrice = minPrice, endPrice = maxPrice, brand = []} = filters || {};
        if (!Array.isArray(brand)) brand = [brand];
        startPrice = Number(startPrice);
        endPrice = Number(endPrice);

        setPrice([startPrice, endPrice]);
        setBrands(brand);
    }, [filters]);

    const changeChecked = (value) => event => {
        if (event.target.checked) addSearch({brand: [...brands, value]});
        else addSearch({brand: brands.filter(el => el !== value)});
    }

    const handleChangePrice = (newValue) => {
        const [startPrice, endPrice] = newValue;
        addSearch({startPrice, endPrice});
    }

    const [startPrice, endPrice] = price;
    return (
        <div className={styles.filters}>
            <div className={styles.title}>
                Фильтры продуктов
            </div>
            <div className={styles.brand}>
                <div>
                    {allBrands.map(brand => {
                        return (
                            <div key={brand}>
                                <Checkbox checked={Boolean(brands.find(el => el === brand))}
                                          onChange={changeChecked(brand)}/>
                                {brand}
                            </div>
                        );
                    })}
                </div>
            </div>
            <hr/>
            <div className={styles.price}>
                Цена
                <Sliders
                    value={price}
                    minValue={minPrice}
                    maxValue={maxPrice}
                    change={handleChangePrice}
                />
                <div>От {startPrice} грн</div>
                <div>до {endPrice} грн</div>
            </div>
        </div>
    );
}

export default CatalogFilters;