import React, {useEffect, useState} from 'react';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import styles from "./CatalogFilters.module.css";

const minDistance = 2000;
const minPrice = 0;
const maxPrice = 30000;

function CatalogFilters({addSearch, params}) {
    const [price, setPrice] = useState([minPrice, maxPrice]);
    const [checkedApple, setCheckedApple] = useState(false);
    const [checkedAsus, setCheckedAsus] = useState(false);

    const changeChecked = (state) => event => {
        state(event.target.checked);
    }

    useEffect(() => {
        let {startPrice = minPrice, endPrice = maxPrice, brand = []} = params || {};
        setPrice([Number(startPrice), Number(endPrice)]);
        if (!Array.isArray(brand)) brand = [brand];
        brand.forEach(el => {
            if (el === "Apple") setCheckedApple(true);
            if (el === "Asus") setCheckedAsus(true);
        });
    }, [params])

    useEffect(() => {
        let brand = [];
        if (checkedApple) brand.push("Apple");
        if (checkedAsus) brand.push("Asus");
        addSearch("brand", brand);
    }, [checkedApple, checkedAsus])

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
            addSearch("startPrice", startPrice);
            addSearch("endPrice", endPrice);
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
                    <div>
                        <Checkbox checked={checkedApple} onChange={changeChecked(setCheckedApple)}/>
                        Apple
                    </div>
                    <div>
                        <Checkbox checked={checkedAsus} onChange={changeChecked(setCheckedAsus)}/>
                        Asus
                    </div>
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