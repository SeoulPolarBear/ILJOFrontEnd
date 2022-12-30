import React from 'react'
import CreateRoom from '../Pages/CreateRoom';
import { Route, Routes } from 'react-router-dom';
import SimpleRoom from '../Pages/SimpleRoom';

const RoomRouter = () => {
  return (
    <div>
        <Routes>
        <Route path="/CreateRoom" element={<CreateRoom />} />
        <Route path="/SimpleRoom" element={<SimpleRoom />}/>
      </Routes>
    </div>
  )
}

export default RoomRouter