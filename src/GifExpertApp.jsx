import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);
    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;
        setCategories([ newCategory,...categories])
    }

    return (
        <>
            <h3>Gif Expert App</h3>

            <AddCategory 
                onNewCategory = {onAddCategory}
            />

            { categories.map( (category) => (
                    <GifGrid 
                        key={category} 
                        category={category}
                    />
                ))
            }

            <a href="#" id="scroll-top">
            <i className="fas fa-arrow-up"></i>
            </a>
        </>
    )
}
