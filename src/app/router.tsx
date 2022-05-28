import React from 'react'
import HomePage from 'pages/HomePage'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
