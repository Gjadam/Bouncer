import React from 'react'
import BestSellerProductBox from '../../BestSeller/BestSellerProductBox';
import { Navigate, useParams } from 'react-router-dom'

export default function StoreLinks(props) {
  let params = useParams()

  return (
    <>
      {
        params.shopID === 'shop-store' &&
          <BestSellerProductBox {...props} />
      }

      {params.shopID === 'shop-iphone' && props.category === 'iphone' &&
        <BestSellerProductBox {...props} />
      }

      {params.shopID === 'shop-ipad' && props.category === 'ipad' &&
        <BestSellerProductBox {...props} />
      }

      {params.shopID === 'shop-macbook' && props.category === 'mac' &&
        <BestSellerProductBox {...props} />
      }

      {params.shopID === 'shop-accessories' && props.category === 'accessories' &&
        <BestSellerProductBox {...props} />
      }
    </>
  )
}
