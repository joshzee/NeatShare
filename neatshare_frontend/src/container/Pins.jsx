import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { NavBar, Feed, PinDetail, CreatePin, Search } from '../components';

const Pins = () => {
  const [SearchTerm, setSearchTerm] = useState('')
  return (
    <div className="px-2 md:px-5">
      <div className="bg-gray-50 ">
        <NavBar SearchTerm={SearchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="h-full ">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/category/:categoryId" element={<Feed />} />
          <Route path="/pin-detail/:pinId" element={<PinDetail />} />
          <Route path="/" element={<Feed />} />
          <Route path="/" element={<Feed />} />
          <Route path="/" element={<Feed />} />
        </Routes>
      </div>
    </div>
  )
}

export default Pins