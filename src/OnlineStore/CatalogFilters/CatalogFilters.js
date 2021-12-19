import React, {useEffect, useState} from 'react';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import styles from "./CatalogFilters.module.css";

const minDistance = 2000;
const minPrice = 0;
const maxPrice = 30000;

function CatalogFilters({allBrands, addSearch, params}) {
    const [price, setPrice] = useState([minPrice, maxPrice]);
    const [brands, setBrands] = useState([]);

    const changeChecked = (value) => event => {
        setBrands(brands.map(el => {
            const {brand} = el;
            if (brand === value) return {brand, isChecked: event.target.checked};
            return el;
        }));
    }

    useEffect(() => {
        setBrands(allBrands.map(brand => {
            return {brand, isChecked: false};
        }));
    }, [allBrands])

    useEffect(() => {
        let {startPrice = minPrice, endPrice = maxPrice, brand = []} = params || {};
        setPrice([Number(startPrice), Number(endPrice)]);
        if (!Array.isArray(brand)) brand = [brand];
        const selected = allBrands.map((element) => {
            if (brand.find(el => el === element)) return {brand: element, isChecked: true};
            return {brand: element, isChecked: false};
        });
        setBrands(selected);
    }, [params])

    useEffect(() => {
        const brand = brands.filter(el => {
            const {isChecked} = el;
            return isChecked;
        }).map(el => {
            const {brand} = el;
            return brand;
        });
        addSearch({brand});
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
                    {brands.map(el => {
                        const {brand, isChecked} = el;
                        return (
                            <div key={brand}>
                                <Checkbox checked={isChecked} onChange={changeChecked(brand)}/>
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