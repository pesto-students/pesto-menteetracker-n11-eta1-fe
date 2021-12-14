import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import SideNavBar from "../side-nav-bar/SideNavBar"
import { mentorTeamSelector, mentorTeamLoadFlow } from "../../middleware/mentorTeamSlice"
import Table from "../../../../shared/components/table/Table"
import { columns } from "./columns"

const MentorTeam = () => {
    const dispatch = useDispatch()
    const { loading, error, mentorTeamList } = useSelector(mentorTeamSelector)

    useEffect(() => {
        dispatch(mentorTeamLoadFlow())
    }, [])

    return (
        <div className="flex bg-gray-100">
            <SideNavBar />
            <div className="flex-1">
            <div className="h-14 bg-white text-center py-3 text-1xl text-yellow-500 shadow-md font-bold">
                    Teams
               </div>
                <Table columns={columns} data={mentorTeamList} />
            </div>
        </div>
    );
}

export default MentorTeam;