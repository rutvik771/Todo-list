import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Addroledata } from '../Roles/Addroledata'
import { UpdateData } from '../Roles/UpdateData'
import { AddList } from '../Lists/AddList'
import { List } from '../Lists/List'
import { UpdateList } from '../Lists/UpdateList'
import { AddReminder } from '../Reminders/AddReminder'



import { Reminder } from '../Reminders/Reminder'
import { UpdateReminder } from '../Reminders/UpdateReminder'
import { Sidebar } from './Sidebar'
import { AddTask } from '../Tasks/AddTask'
import { Task } from '../Tasks/Task'
import { UpdateTask } from '../Tasks/UpdateTask'
import { UpdateuserData } from '../Users/UpdateuserData'
import { UserTable } from '../Users/UserTable'
import { Role } from '../Roles/Role'

export const Dashboard = () => {
  return (
    <div className="container-scroller">
      <Sidebar />

      <Routes>

        
        //role route

        <Route path='roles/role' element={<Role />}></Route>
        <Route path='roles/role/updatedata/:id' element={<UpdateData />}></Route>
        <Route path='roles/addroledata' element={<Addroledata />}></Route>

        //user route

        <Route path='users/usertable' element={<UserTable />}></Route>
        <Route path='users/usertable/updateuserdata/:id' element={<UpdateuserData />}></Route>
        
        //list route

        <Route path='lists/list' element={<List />}></Route>
        <Route path='list/addlist' element={<AddList />}></Route>
        <Route path='lists/list/updatelist/:id' element={<UpdateList />}></Route>
        
        //task route

        <Route path='tasks/task' element={<Task />}></Route>
        <Route path='task/addtask' element={<AddTask />}></Route>
        <Route path='tasks/task/updatetask/:id' element={<UpdateTask />}></Route>
        
        //reminder route
        
        <Route path='reminders/reminder' element={<Reminder />}></Route>
        <Route path='reminder/addreminder' element={<AddReminder />}></Route>
        <Route path='reminders/reminder/updatereminder/:id' element={<UpdateReminder />}></Route>
      </Routes>
    </div>

  )
}
