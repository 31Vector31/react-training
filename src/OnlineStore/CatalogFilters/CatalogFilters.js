import React, {useEffect, useState} from 'react';
import Checkbox from '@mui/material/Checkbox';
import Sliders from "../Sliders";
import styles from "./CatalogFilters.module.css";

const minPrice = 0;
const maxPrice = 30000;
const allBrands = ["Apple", "Asus"];

const initialValue = (obj) => {
    let {startPrice = minPrice, endPrice = maxPrice, brand = []} = {...obj};
    if (!Array.isArray(brand)) brand = [brand];
    startPrice = Number(startPrice);
    endPrice = Number(endPrice);
    return {startPrice, endPrice, brand};
}

export const catalogFiltersValidation = (searchParams) => {
    let validatedParams = {};
    const {startPrice, endPrice, brand} = initialValue(searchParams);

    if (endPrice && endPrice > minPrice && endPrice < maxPrice && endPrice > startPrice)
        validatedParams['endPrice'] = endPrice;
    if (startPrice && startPrice > minPrice && startPrice < maxPrice && startPrice < endPrice)
        validatedParams['startPrice'] = startPrice;
    const validatedBrands = brand.filter(el => allBrands.indexOf(el) !== -1)
    if (validatedBrands.length) validatedParams['brand'] = validatedBrands;

    return validatedParams;
}

function CatalogFilters({addSearch, filters}) {
    const [price, setPrice] = useState([minPrice, maxPrice]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        const {startPrice, endPrice, brand} = initialValue(filters);
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