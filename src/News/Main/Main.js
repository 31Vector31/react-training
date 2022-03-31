import React, {useCallback, useEffect, useState} from 'react';
import Header from "../Header/Header";
import Filters from "../Filters/Filters";
import styles from "./Main.module.css";
import NewsList from "../NewsList/NewsList";
import {getNewsAPIRequests} from "../APIRequests";

export const LangContext = React.createContext();
const languages = {en: "English", fr: "French", de: "German"};
const categories = ["business", "entertainment", "environment", "food", "health", "politics", "science", "sports", "technology", "top", "world"];
const defaultPage = 0;
const defaultParameters = {category: [categories[0]], search: null, page: defaultPage};

const validation = (str) => {
    const strTrim = str ? str.trim() : "";
    return strTrim ? strTrim : null;
}

function Main() {

    const [news, setNews] = useState([]);
    const [language, setLanguage] = useState(Object.keys(languages)[0]);
    const [parameters, setParameters] = useState(defaultParameters);

    const getNews = () => {
        const {category, search, page} = parameters;
        getNewsAPIRequests(language, validation(category.join()), page, validation(search)).then(news => {
            setNews(prevNews => {
                return [...prevNews, ...news.results];
            });
        });
    }

    useEffect(() => {
        getNews();
    }, [language, parameters]);

    const changeLanguage = useCallback((lang) => {
        setLanguage(lang);
        setParameters(defaultParameters);
        setNews([]);
    }, []);

    const setFilters = useCallback((filter) => {
        setParameters({...filter, page: defaultPage});
        setNews([]);
    }, []);

    const nextPage = useCallback(() => {
        setParameters(prevParameters => {
            const {page} = prevParameters;
            return {
                ...prevParameters,
                page: page + 1,
            };
        });
    }, []);

    return (
        <LangContext.Provider value={{language, changeLanguage}}>
            <div className={styles.container}>
                <Header languages={languages}/>
                <Filters categories={categories} filters={parameters} setFilters={setFilters}/>
                <NewsList news={news} nextPage={nextPage}/>
            </div>
        </LangContext.Provider>
    );
}

export default Main;

