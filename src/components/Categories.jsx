import React, { useState } from 'react'

function Categories() {
    const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]

    const [activeIndex, setActiveIndex] = useState(0)

    function onClickCategory(index) {
        return setActiveIndex(index)
    }


    return (
        <div>
            <div className="categories">
                <ul>
                    {
                        categories.map((item, index) =>
                            <li
                                key={index}
                                className={activeIndex === index ? "active" : ""}
                                onClick={() => onClickCategory(index)}
                            >{item}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Categories