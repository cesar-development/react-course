import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Container from '../styled-elements/Container'
import EditExpense from './EditExpense'
import ExpenseByCategory from './ExpenseByCategory'
import ExpensesList from './ExpensesList'
import Home from './Home'
import Login from './Login'
import ProtectedRoute from './ProtectedRoute'
import Register from './Register'

export default function Router() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path='/login' element={<Login />} />          
          <Route path='/register' element={<Register />} />

          <Route path='/categories' element={
            <ProtectedRoute>
              <ExpenseByCategory />
            </ProtectedRoute>
          } />

          <Route path='/list' element={
            <ProtectedRoute>
              <ExpensesList />
            </ProtectedRoute>
          } />

          <Route path='/edit/:id' element={
            <ProtectedRoute>
              <EditExpense />
            </ProtectedRoute>
          } />

          <Route path='/' element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}
