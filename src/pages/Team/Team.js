import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { Box, Typography, TextField, Dialog } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Pagination, CardItem, Select, Button } from "../../shared";
import { getSearchParameters, getMembers, getMemberById } from "../../services";
import { InviteMember, ViewProfile } from "./components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Team.css";

export function Team() {
    const [vp, setVp] = useState(0)
    const [vpId, setVpId] = useState(false)
    const [openPopUp, setOpenPopUp] = useState(false)
  const [cardItemInfo, setCardItemInfo] = useState([]);
  const [level, setLevel] = useState([]);
  const [speciality, setSpeciality] = useState([]);
  const [skill, setSkill] = useState([]);
  const [users, setUsers] = useState(0);
  const [levelID, setLevelID] = useState(0);
  const [specialityID, setSpecialityID] = useState(0);
  const [skillID, setSkillID] = useState(0);
  const [inputVal, setInputVal] = useState("");
  const [cardItemId, setCardItemId] = useState(28);
  const [teamPage, setTeamPage] = useState(1)
  const { page = 1 } = useParams();
  const navigate = useNavigate();
  const [invite, setInvite] = useState(false);
  let time = 0;
  let count = Math.floor((window.innerWidth - 429) / 251) * 2;
  //select info (fetch)
  useEffect(() => {
    getSearchParameters(setLevel, setSkill, setSpeciality)
      .then((data) => {
        setLevel(data.levels);
        setSkill(data.skills);
        setSpeciality(data.specialities);
      })
      .catch((error) => {
        return console.log(error, "Error in getSearchParameters");
      });
  }, []);
  useEffect(
    (e) => {
      getMemberById(cardItemId)
      .catch(error => error);
    },
    [cardItemId]
  );
  // card info (fetch)
  useEffect(() => {
    if (inputVal.length === 0 || inputVal.length > 2) {
      // toast.warning( "Hello",
      //     {icon:<img src={require("../../images/Taostr/warning.svg")} />})
      toast.promise(
        getMembers(page, count, inputVal, levelID, specialityID, skillID)
          .then((data) => {
            setUsers(data.countOfRows);
            setCardItemInfo(data.members);
          })
          .catch((error) => error),
        {
          pending: {
            render() {

              return (
                <>
                  <span className="headerToastr">Pending</span> <br />
                  <span className="textToastr">
                    Pending description goes here.
                  </span>
                </>
              );
            },
          },
          success: {
            render() {
              return (
                <>
                  <span className="headerToastr">Success</span> <br />
                  <span className="textToastr">
                    Success description goes here.
                  </span>
                </>
              );
            },
            icon: (
              <img
                src={require("../../images/Taostr/success.svg")}
                alt="success"
              />
            ),
          },
          error: {
            render() {
              return (
                <>
                  <span className="headerToastr">Error</span> <br />
                  <span className="textToastr">
                    Error description goes here.
                  </span>
                </>
              );
            },
            icon: (
              <img
                src={require("../../images/Taostr/error.svg")}
                alt="success"
              />
            ),
          },
        }
      );
    }
  }, [skillID, levelID, specialityID, inputVal, page]);

  const handleClose = () => setInvite(false);
  const closePopUp = () => {
      setOpenPopUp(false)
      navigate(teamPage === 1 ? "/team" : "/team/" + teamPage)
  };

  return (

    <>
      <Dialog open={invite} onClose={handleClose} maxWidth="650px">
        <InviteMember onClose={handleClose} />
      </Dialog>
      <Box display="flex" flexDirection="column">
        <Box width="100%" sx={{ backgroundColor: "#fff" }}>
          <Typography
            sx={{ color: "#405051", padding: "25px 0 30px 46px" }}
            variant="h1"
          >
            Team
          </Typography>
          <Typography
            sx={{
              fontWeight: "600",
              color: "#405051",
              padding: "0 0 14px 46px",
            }}
          >
            Filter by
          </Typography>
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="space-between"
            alignItems="center"
            gap="22px"
            pb="35px"
            margin="0 35px"
            borderBottom="1px solid lightgray"
          >
            <Box display="flex" paddingLeft="15px" gap="20px" flexWrap="wrap">
              <Box display="flex" alignItem="center" justifyContent="center">
                <Typography
                  variant="subtitle1"
                  display="flex"
                  alignItems="center"
                  sx={{
                    fontFamily: "MontserratMedium",
                    color: " rgba(64, 80, 81, 0.8);",
                    fontSize: "14px",
                    marginRight: "8px",
                  }}
                >
                  Name :
                </Typography>
                <TextField
                  onChange={(e) => {
                    clearTimeout(time);
                    time = setTimeout(() => {
                      setInputVal(e.target.value);
                      navigate("/team");
                    }, 1000);
                  }}
                  variant="standard"
                  border="0"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: "4px",
                    width: "140px",
                    padding: "0 5px ",
                    // border:0,
                    underline: 0,
                    boxShadow: "0px 4px 8px rgba(11, 42, 58, 0.12)",
                    "& .MuiInput-underline:before": {
                      borderBottom: 0,
                      display: "none",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottom: 0,
                      display: "none",
                    },
                    "&:hover": {
                      boxShadow: " 0px 4px 12px rgba(56, 150, 201, 0.19)", //lightblue
                    },
                  }}
                />
              </Box>
              <Select
                arr={level}
                marginLabel="0 10px 0 0"
                placeholder="All"
                fontSize="14px"
                fontWeight="500"
                padding="6.33px 0 6.33px 10px"
                label="Level:"
                fontSizeLabel="13px"
                onChange={(e) => {
                  navigate("/team");
                  setLevelID(e.target.value);
                }}
              />
              <Select
                arr={speciality}
                marginLabel="0 10px 0 0"
                placeholder="All"
                fontSize="14px"
                fontWeight="500"
                padding="6.33px 0 6.33px 10px"
                label="Speciality:"
                fontSizeLabel="13px"
                onChange={(e) => {
                  navigate("/team");
                  setSpecialityID(e.target.value);
                }}
              />
              <Select
                arr={skill}
                marginLabel="0 10px 0 0"
                placeholder="All"
                fontSize="14px"
                fontWeight="500"
                padding="6.33px 0 6.33px 10px"
                label="Skill:"
                fontSizeLabel="13px"
                onChange={(e) => {
                  navigate("/team");
                  setSkillID(e.target.value);
                }}
              />
            </Box>
            <Button
              fontSize="10px"
              startIcon={<AddIcon sx={{ width: "14px", height: "14px" }} />}
              sx={{
                marginRight: "15px",
                height: "30px",
                width: "110px",
                fontWeight: "500",
                padding: "0",
                "&.MuiButton-contained": {
                  fontSize: "10px",
                  fontWeight: "500",
                  "&:active": {
                    fontWeight: "500",
                  },
                },
              }}
              onClick={() => setInvite(true)}
            >
              Add member
            </Button>
          </Box>

          <Box display="flex" justifyContent="center">
            <Box
              width="100%"
              display="flex"
              flexWrap="wrap"
              justifyContent="flex-start"
              padding="30px 95px 0"
              gap="22px"
              sx={{
                width: "100%",
                overflowY: "scroll",
                height: "calc(100vh - 389px)",
              }}
            >
              {cardItemInfo.map((el) => {
                return (
                  <CardItem
                    onClick={() => {
                        setCardItemId(el.id)
                        setOpenPopUp(true)
                        setTeamPage(page)
                        setVpId(el.id)
                        localStorage.setItem("id", el.id)
                        navigate(`/viewProfile/${el.id}/all_tasks`)
                    }}
                    name={el.firstName}
                    lastName={el.lastName}
                    professia={el.speciality}
                    star={el.rating}
                    src={el.image}
                  />
                );
              })}
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          backgroundColor="#fff"
          padding="25px"
        >
          <Pagination countUsers={users} countOfPage={count} pathname="team" />
        </Box>

      </Box>
    </>

  );
}
