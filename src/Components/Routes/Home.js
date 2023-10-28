import React from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import Nav from '../Header/Nav/Nav'
import { Outlet } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <Header />
            <Main />
        </>
    )
}
