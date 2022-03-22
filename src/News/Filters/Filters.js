import React, {useCallback} from 'react';
import MultipleSelect from "../MultiSelect";
import Search from "../Search";
import styles from "./Filters.module.css";

function Filters({categories, filters, setFilters}) {
    const {category, search} = filters;

    const changeCategory = useCallback(el => {
        setFilters({...filters, "category": el});
    }, [filters]);

    const changeSearch = useCallback(el => {
        setFilters({...filters, "search": el});
    }, [filters]);

    return (
        <div className={styles.filters}>
            <div><MultipleSelect options={categories} value={category} handleChange={changeCategory}/></div>
            <div className={styles.search}><Search value={search} handleChange={changeSearch}/></div>
        </div>
    );
}

export default Filters;

