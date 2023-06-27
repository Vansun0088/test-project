import './App.css'
import { Login } from "./features/auth/Login";

import { Routes, Route } from 'react-router-dom'

import { PrivateOutlet } from './utils/PrivateOutlet'

import Layout from "antd/es/layout/layout";
import { Campaigns } from "./features/campaigns/Campaigns";



function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateOutlet />}>
            <Route index element={<Campaigns />} />
          </Route>
        </Routes>
      </Layout>
  )
}
export default App
