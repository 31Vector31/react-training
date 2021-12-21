import React, {useEffect, useState} from 'react';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import styles from "./CatalogFilters.module.css";

const minDistance = 2000;
const minPrice = 0;
const maxPrice = 30000;

function CatalogFilters({allBrands, addSearch, params, setSearchParams}) {
    const [price, setPrice] = useState([minPrice, maxPrice]);
    const [brands, setBrands] = useState([]);

    const changeChecked = (value) => event => {
        if (event.target.checked) setBrands([...brands, value]);
        else setBrands(brands.filter(el => el !== value));
    }

    useEffect(() => {
        let {startPrice = minPrice, endPrice = maxPrice, brand = []} = params || {};
        if (!Array.isArray(brand)) brand = [brand];
        startPrice = Number(startPrice);
        endPrice = Number(endPrice);

        let validatedParams = {};
        if (!endPrice || endPrice < minPrice || endPrice > maxPrice || endPrice < startPrice) validatedParams['endPrice'] = [];
        if (!startPrice || startPrice < minPrice || startPrice > maxPrice || startPrice > endPrice) validatedParams['startPrice'] = [];
        if (brand.every(item => allBrands.indexOf(item) === -1)) validatedParams["brand"] = [];
        setSearchParams({...params, ...validatedParams});

        if (JSON.stringify(validatedParams) === "{}") {
            setPrice([startPrice, endPrice]);
            setBrands(brand);
        }
    }, [params])

    useEffect(() => {
        addSearch({brand: brands});
    }, [brands])

    const handleChangePrice = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], maxPrice - minDistance);
                setPrice([clamped, clamped + minDistance]);
            } else {
                const clamped = Math.max(newValue[1], minDistance);
                setPrice([clamped - minDistance, clamped]);
            }
        } else {
            setPrice(newValue);
            const [startPrice, endPrice] = newValue;
            addSearch({startPrice, endPrice});
        }
    };

    const [startPrice, endPrice] = price;
    return (
        <div className={styles.filters}>
            <div className={styles.title}>
                Фильтры продуктов
            </div>
            <div className={styles.brand}>
                <div className={styles.checkboxGroup}>
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
                <Slider
                    value={price}
                    onChange={handleChangePrice}
                    valueLabelDisplay="auto"
                    disableSwap
                    min={minPrice}
                    max={maxPrice}
                />
                <div>От {startPrice} грн</div>
                <div>до {endPrice} грн</div>
            </div>
        </div>
    );
}

export default CatalogFilters;