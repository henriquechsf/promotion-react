import React, { useEffect, useState } from 'react'
import PromotionCard from 'components/Promotion/Card/Card';

import axios from 'axios'

const PagesPromotionSearch = () => {

    // estado que armazena as promoções
    const [promotions, setPromotions] = useState([])

    // passado o array vazio para definir que a função somente seja executada uma só vez quando o componente é montado
    useEffect(() => {
        axios.get('http://localhost:5000/promotions?_embed=comments')
            .then((response) => {
                setPromotions(response.data)
                console.log(response.data)
            })
    }, []);

    return (

        <div
            style={{
                maxWidth: 800,
                margin: '30px auto',
            }}
        >
            {promotions.map(promotion => (
                <PromotionCard promotion={promotion} key={promotion.id} />
            ))}
        </div>

    )
}

export default PagesPromotionSearch;