import React from 'react'
import { useParams } from 'react-router-dom'

const PagesPromotionForm = () => {
    // recebendo parametro na rota
    const { id } = useParams()

    return (

        <div>Form
            {id && <div>ID: {id}</div>}
        </div>
    )
}

export default PagesPromotionForm;