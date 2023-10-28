import React from 'react'
import './Cms.css'
import { Link, Outlet } from 'react-router-dom'

export default function Cms() {



    return (
        <>
            <div className="container">
                <div className="cms">
                    <div className="cms__left-side">
                        <h1 className="cms__left-side__title">Admin Dashboard</h1>
                        <div className="cms__left-side__admin-info">
                            <img src="/images/Main/Main-news-1.jpg" alt="img" className="cms__left-side__admin-info__image" />
                            <div className="cms__left-side__admin-info__infos-wrapper">
                                <h3 className="cms__left-side__admin-info__username">Randall Summers</h3>
                                <h5 className="cms__left-side__admin-info__role">admin company</h5>
                            </div>

                        </div>
                        <div className="cms__left-side__options">
                            <Link to="/cms/products" className="cms__left-side__option">Products</Link>
                            <Link to="/cms/products" className="cms__left-side__option">Users</Link>
                        </div>
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    )
}
