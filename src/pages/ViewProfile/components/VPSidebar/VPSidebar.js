import React, { useState } from "react"
import {Avatar, Box, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {CardStars, getDateAllTasks} from "../../../../shared";


const useStyles = makeStyles({
    rightSidebar: {
        minWidth: "300px",
        maxWidth: "300px",
        backgroundColor: "#fff",
        height: "calc(100vh - 63px)",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginLeft: "3px",
    },
    textNum: {
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "600" /*400*/,
        fontSize: "9px",
        lineHeight: "0",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        paddingBottom: "10px",
    },
    starDiv: {
        width: "82%",
        padding: "3px 0 20px 0",
    },
    title: {
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "600",
    },
});



export function VPSidebar( {  birthDate,
                              image,
    data,
                              firstName,
                              lastName,
                              position,
                              role,
                              rating,
                              maximumAbsences,
                              maximumVecations,
                              userAbsences,
                              userVecations,
                              skills,
                              experiences,
                              educations,
                              description,}){
    function year() {
        let newDate = new Date();
        let newYear = newDate.getFullYear();
        let newMonth = newDate.getMonth() + 1;
        let newDay = newDate.getDate();

        let birthYear = +birthDate.slice(0, 4);
        let birthMonth = +birthDate.slice(5, 7);
        let birthDay = +birthDate.slice(8, 10);

        if (newMonth > birthMonth) {
            return newYear - birthYear;
        } else if ((newMonth = birthMonth && newDay >= birthDay)) {
            return newYear - birthYear;
        }
        return newYear - birthYear - 1;
    }
    const [stateSkills, setStateSkills] = useState(true);
    const [stateExperiences, setStateExperiences] = useState(true);
    const [stateEducation, setStateEducation] = useState(true);
    const [stateDescription, setStateDescription] = useState(true);
    const css = useStyles();
    return (
        <Box className={css.rightSidebar} sx={{ overflow: "hidden" }}>
            <Avatar
                className="avatarSidebarRight"
                src={image ? require(`${image}`) : ""}
                sx={{
                    width: "79px",
                    height: "79px",
                    marginTop: "27px",
                    marginBottom: "10px",
                }}
            />
            <Typography
                variant="h1"
                mb="5px"
                fontSize="13px"
                color="rgba(10, 12, 26, 0.89)"
            >
                {firstName} {lastName}
            </Typography>
            <Typography
                className="UI_UX"
                sx={{
                    textAlign: "center",
                    fontSize: "12px",
                    lineHeight: "15px",
                }}
            >
                {position
                    ? position.map((e) => {
                        return (
                            <span key={e} style={{ marginBottom: "5px" }}>
                    {e}
                  </span>
                        );
                    })
                    : ""}
                <p>
            <span style={{ color: "#405051" }}>
              {birthDate
                  ? getDateAllTasks(birthDate) + ` ( ${year()} y.o. )`
                  : ""}
            </span>
                </p>
            </Typography>
            <Box display="flex" justifyContent="center" className={css.starDiv}>
                <CardStars num={rating} />
            </Box>
            {role === "Admin" ? (
                <Box
                    width="82%"
                    display="flex"
                    justifyContent="space-evenly"
                    sx={{
                        padding: "10px 0",
                        marginBottom: "20px",
                        borderBottom: "1px solid #F6F6F6",
                        borderTop: "1px solid #F6F6F6",
                    }}
                >
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Box display="flex" alignItems="flex-end">
                <span className="numNum" style={{ fontSize: "18px" }}>
                  {userAbsences}/
                </span>
                            <span className="numNum" style={{ fontSize: "16px" }}>
                  {maximumAbsences}
                </span>
                        </Box>
                        <Typography className={css.textNum} sx={{ fontSize: "9px" }}>
                            Absence
                        </Typography>
                    </Box>

                    <Box className="box"></Box>

                    <Box display="flex" flexDirection="column">
                        <Box display="flex" alignItems="flex-end">
                <span className="numNum" style={{ fontSize: "18px" }}>
                  {userVecations}/
                </span>
                            <span className="numNum" style={{ fontSize: "16px" }}>
                  {maximumVecations}
                </span>
                        </Box>
                        <Typography className={css.textNum} sx={{ fontSize: "9px" }}>
                            Vacation
                        </Typography>
                    </Box>
                </Box>
            ) : (
                <Box className="hr"></Box>
            )}

            <Box
                sx={{
                    overflowY: "auto",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Box sx={{ width: "82%" }}>
                    <Box>
                        <Typography
                            className={css.title}
                            sx={{
                                fontSize: "15px",
                                lineHeight: "18px",
                                color: " rgba(10, 12, 26, 0.65)",
                                marginBottom: "5px",
                            }}
                        >
                            Skills
                        </Typography>
                        <ul className="ul">
                            {skills[0] ? (
                                stateSkills ? (
                                    <>
                                        <li>
                                            <span>{skills[0]}</span>
                                        </li>
                                        {skills[1] ? <li>
                                            <span>{skills[1]}</span>
                                        </li> : ""}
                                    </>
                                ) : (
                                    <>
                                        {skills.map((skill) => {
                                            return (
                                                <li key={skill}>
                                                    <span>{skill}</span>
                                                </li>
                                            );
                                        })}
                                    </>
                                )
                            ) : (
                                ""
                            )}
                        </ul>

                                <a
                                    className="tegA"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setStateSkills(!stateSkills);
                                    }}
                                >
                                    { skills.length > 2 ? stateSkills ? "More" : "Show less" : "" }
                                </a>


                        <Typography
                            className={css.title}
                            sx={{
                                fontSize: "15px",
                                lineHeight: "18px",
                                color: " rgba(10, 12, 26, 0.65)",
                            }}
                        >
                            Experiences
                        </Typography>
                        {experiences[0] ? (
                            stateExperiences ? (
                                <Box>
                                    <span className="span">{experiences[0].experience}</span>
                                    <span className="graySpan">
                      {experiences[0].startDate.slice(0, 4) +
                          " - " +
                          experiences[0].endDate.slice(0, 4)}
                    </span>
                                </Box>
                            ) : (
                                experiences.map((e) => {
                                    return (
                                        <Box key={e}>
                                            <span className="span">{e.experience}</span>
                                            <span className="graySpan">
                          {e.startDate.slice(0, 4) +
                              " - " +
                              e.endDate.slice(0, 4)}
                        </span>
                                        </Box>
                                    );
                                })
                            )
                        ) : (
                            ""
                        )}

                                <a
                                    className="tegA"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setStateExperiences(!stateExperiences);
                                    }}
                                >
                                    {experiences.length > 1 ? stateExperiences ? "More" : "Show less" : ""}
                                </a>


                        <Typography
                            className={css.title}
                            sx={{
                                fontSize: "15px",
                                lineHeight: "18px",
                                color: " rgba(10, 12, 26, 0.65)",
                            }}
                        >
                            Education
                        </Typography>

                        {educations[0] ? (
                            stateEducation ? (
                                <Box>
                                    <span className="span">{educations[0].education}</span>
                                    <span className="graySpan">
                      {educations[0].startDate.slice(0, 4) +
                          " - " +
                          educations[0].endDate.slice(0, 4)}
                    </span>
                                </Box>
                            ) : (
                                <Box>
                                    {educations.map((e) => {
                                        return (
                                            <Box key={e}>
                                                <span className="span">{e.education}</span>
                                                <span className="graySpan">
                            {e.startDate.slice(0, 4) +
                                " - " +
                                e.endDate.slice(0, 4)}
                          </span>
                                            </Box>
                                        );
                                    })}
                                </Box>
                            )
                        ) : (
                            ""
                        )}
                        <a
                            className="tegA"
                            onClick={(e) => {
                                e.preventDefault();
                                setStateEducation(!stateEducation);
                            }}
                        >
                            {educations.length > 1 ? stateEducation ? "More" : "Show less" : ""}
                        </a>
                        <Typography
                            className={css.title}
                            sx={{
                                fontSize: "15px",
                                lineHeight: "18px",
                                color: " rgba(10, 12, 26, 0.65)",
                                marginBottom: "5px",
                            }}
                        >
                            Description
                        </Typography>
                        {description ? (
                            <span className="graySpan">
                  {stateDescription
                      ? `${description.substring(0, 60)}...`
                      : description}
                </span>
                        ) : (
                            ""
                        )}
                        <a
                            className="tegA"
                            style={{ paddingBottom: "10px" }}
                            onClick={(e) => {
                                e.preventDefault();
                                setStateDescription(!stateDescription);
                            }}
                        >
                            {description ? stateDescription ? "More" : "Show less" : ""}
                        </a>
                    </Box>
                </Box>
            </Box>
        </Box>
    );}
