import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import SideNavBar from "../side-nav-bar/SideNavBar"
import { adminTeamSelector, adminTeamLoadFlow } from "../../middleware/adminTeamSlice"
import Table from "../../../../shared/components/table/Table"
import { columns } from "./columns"

const AdminTeam = () => {
    const dispatch = useDispatch()
    const { loading, error, adminTeamList } = useSelector(adminTeamSelector)

    useEffect(() => {
        dispatch(adminTeamLoadFlow())
    }, [])

    return (
        <div className="flex bg-gray-100">
            <SideNavBar />
            <div>
                Admin Teams
            <Table columns={columns} data={adminTeamList} />
            </div>
        </div>
    );
}

export default AdminTeam;