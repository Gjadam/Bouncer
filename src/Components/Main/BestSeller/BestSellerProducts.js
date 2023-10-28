import React from 'react'
import BestSellerProductBox from './BestSellerProductBox'
import { useParams } from 'react-router-dom'
export default function BestSellerProducts(props) {

    let params = useParams()

    return (


        <>
            {params.productID === 'all' &&
                <BestSellerProductBox {...props} />
            }

            {params.productID === 'mac' && props.category === 'mac' &&
                <BestSellerProductBox {...props} />
            }

            {params.productID === 'iphone' && props.category === 'iphone' &&
                <BestSellerProductBox {...props} />
            }

            {params.productID === 'ipad' && props.category === 'ipad' &&
                <BestSellerProductBox {...props} />
            }

            {params.productID === 'accessories' && props.category === 'accessories' &&
                <BestSellerProductBox {...props} />
            }
        </>
    )
}
