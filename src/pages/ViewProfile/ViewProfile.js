import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import { Box } from "@mui/material";
import { Navigate, NavLink } from "react-router-dom";
import {SidebarRight} from "../../layouts/MainLayout/components";
import { VPAllTasks, VPInProgress, VPSidebar, VPAbout } from "./components";
import { getMemberDetails } from "../../services";
import { connect } from "react-redux";
import "./ViewProfile.css";

const mapStateToProps = (state) => {
    return {
        role : state.memberDetails.memberDetails.role
    }
}


export const ViewProfile = connect(mapStateToProps)( ({role}) => {


    const [birthDate, setBirthDate] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [education, setEducation] = useState([])
    const [experiences, setExperiences] = useState([])
    const [position, setPosition] = useState([])
    const [rating, setRating] = useState(0)
    const [roles, setRoles] = useState("")
    const [skills, setSkills] = useState([])
    const [data, setData] = useState()


    let id = window.location.pathname.split("/")[2]
    useEffect(() => {
        getMemberDetails(id)
        .then(data => {
            setData(data)
            setBirthDate(data.birthDate)
            setDescription(data.description)
            setEducation(data.educations)
            setExperiences(data.experiences)
            setFirstName(data.firstName)
            setLastName(data.lastName)
            setImage(data.image)
            setPosition(data.position)
            setRating(data.rating)
            setRoles(data.role)
            setSkills(data.skills)
        })
        .catch(error => error)
    }, [id])

    return (
        <>
            <Box>
                <Box display="flex" justifyContent="space-between" overflow="hidden">
                    <Box
                        width="100%"
                        height="100%"
                        // pb="20px"
                        backgroundColor="#fff"
                    >
                        <Box
                            width="100%"
                            backgroundColor="#fff"
                            height="70px"
                            padding="0 0px 40px"
                            display="flex"
                        >
                            <Box
                                display="flex"
                                alignItems="flex-end"
                                width="100%"
                                justifyContent="space-around"
                                borderBottom="1px solid rgba(11, 42, 58, 0.18)"
                                margin=" 3px 35px"
                            >
                                <NavLink className="nav-item" to={`/viewProfile/${id}/all_tasks`}>
                                    All tasks
                                </NavLink>
                                <NavLink className="nav-item" to={`/viewProfile/${id}/in_progress`}>
                                    In Progress
                                </NavLink>
                                <NavLink className="nav-item" to={`/viewProfile/${id}/about`}>
                                    About
                                </NavLink>
                            </Box>
                        </Box>
                        <Routes>
                            <Route
                                path=""
                                element={<Navigate to={`/viewProfile/${id}/all_tasks`} />}
                            ></Route>
                            <Route path={`${id}/all_tasks`} element={<VPAllTasks />}></Route>
                            <Route path={`${id}/all_tasks/:page`} element={<VPAllTasks />}></Route>
                            <Route path={`${id}/in_progress/*`} element={<VPInProgress />}></Route>
                            <Route path={`${id}/about/*`} element={<VPAbout />}></Route>
                        </Routes>
                    </Box>
                    { lastName ?
                        <VPSidebar data={data} description={description} birthDate={birthDate} experiences={experiences}
                                   educations={education} firstName={firstName} lastName={lastName} image={image}
                                   role={role} position={position} rating={rating} skills={skills}/>
                        :""

                    }
                </Box>
            </Box>
        </>
    );
});