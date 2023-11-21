import React from 'react'

function Categories({value,clickCategory}) {
    const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]

    return (
        <div>
            <div className="categories">
                <ul>
                    {
                        categories.map((categoryName, index) =>
                            <li
                                key={index}
                                className={value === index ? "active" : ""}
                                onClick={() => clickCategory(index)}
                            >{categoryName}</li>)
                    }

                </ul>
            </div>
        </div>
    )
}

export default Categories