import React from 'react'
import {Routes, Route } from "react-router-dom";
import { FrontPage } from "../pages/front-page";
import { GroupPagePager, GroupPageList, GroupPageDetail } from "../pages/group-page";

export function AppRouter() {
  return (
    <Routes>
        <Route path="/" element={<FrontPage/>}/>
        <Route path="/home" element={<FrontPage/>}/>

        <Route path="/groups" element={<GroupPagePager/>}>
          <Route index element={<GroupPageList/>}/>
          <Route index path=":pageNr/page" element={<GroupPageList/>}/>
          <Route index path=":id/:prevPage" element={<GroupPageDetail/>}/>
        </Route>
    </Routes>
  )
}
