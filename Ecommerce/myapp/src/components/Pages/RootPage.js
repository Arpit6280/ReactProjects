import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

function RootPage(props) {
  return (
    <>
    <Header cartOpenHandler={props.cartOpenHandler} />
   <Outlet />
    </>
  )
}

export default RootPage