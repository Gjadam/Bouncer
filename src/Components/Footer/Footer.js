import React from 'react'
import FooterTop from './FooterTop/FooterTop'
import FooterBottom from './FooterBottom/FooterBottom'
import { useParams } from 'react-router-dom'
export default function Footer() {

  let params = useParams()

  return (
    <>
        <FooterTop />
        <FooterBottom />
    </>
  )
}
