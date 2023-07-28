import React, { useEffect, useState } from "react";
import { Box, Button, Container, Grid, Link, ListItemButton, ListItemIcon, Stack, Typography } from "@mui/material";
import { Outlet, useNavigate } from "react-router";
import { AnimatePresence,  motion } from "framer-motion";
import { Cross as Hamburger } from "hamburger-react";
import { wait } from "@testing-library/user-event/dist/utils";
import PageLoader from "./PageLoader";
import LoadingSimple from "./LoadingSimple";
import { Facebook, Instagram, Mail, Twitter } from "@mui/icons-material";
const NavBar = () => {
  const items = ["Home", "Portfolio", "Blog", "About", "Contact"];
  const navigate = useNavigate();
  const [state, setState] = useState(false);
  const [naving, setNaving] = useState(false);
  const [Letter, setLetter] = useState('H');
  const [navPage,setNavPage] = useState('')
  const animationVariants = {
    start: {
      y: "-100vh",
      opacity: 0,
      transition: { duration: 0.5, ease: "easeIn" },
    },
    end: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: "-100vh",
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  const textVariants = {
    ...animationVariants,
    start : {
      ...animationVariants.start
    },
     end : {
      ...animationVariants.end,
      transition : {duration : 1, ease : 'easeOut', dealy : 1}
     },
     exit: {
      opacity: 0,
      y: "-100vh",
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }
  useEffect(() => {
    setTimeout(() => {
      setNaving(false);
    }, 6000);
  }, [state]);
  return (
    <>
      <AnimatePresence>
        {state ? (
          <motion.div
            initial="start"
            animate="end"
            exit="exit"
            variants={animationVariants}
          >
            <Box
              sx={{
                backgroundImage:
                  'radial-gradient(circle, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)),url("https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")',
                p: 2,
                backgroundColor: "rgba(0, 0, 0, 0.3)",
              }}
            >
              <Grid container>
                <Grid item lg={2}>
                  <motion.div
                 initial="start"
                 animate="end"
                 exit="exit"
                 variants={textVariants}
                  >
                  <Stack direction={"column"} spacing={6}>
                    {items.map((item) => (
                      <Button
                        variant="standard"
                        key={item}
                        onClick={() => {
                          navigate(`${item.toLowerCase()}`);
                          setState(false);
                          setNaving(true);
                          setNavPage(item)
                        }}
                        onMouseEnter={()=>{
                          setLetter(item.charAt(0).toUpperCase());
                          console.log(item.charAt(0).toUpperCase())
                        }}
                      >
                        <Typography
                          variant="h4"
                          fontWeight={600}
                          fontStyle={"verdana"}
                          color="white"
                        >
                          {item}
                        </Typography>
                      </Button>
                    ))}
                  </Stack>
                  </motion.div>
                </Grid>
                <Grid item lg={8}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mt: 10,
                    }}
                  >
                    <LoadingSimple Letter={Letter}/>
                  </Box>
                </Grid>
                <Grid item lg={2}>
                  <motion.div
            
                   initial="start"
                   animate="end"
                   exit="exit"
                   variants={animationVariants}
                 >
                <Stack direction={'column'} sx={{width : '10%', color : 'white'}} >
            <ListItemButton component={Link} href="https://www.facebook.com">
              <ListItemIcon>
                <Facebook sx={{ color : 'white'}} fontSize="large" />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton component={Link} href="https://www.instagram.com">
              <ListItemIcon>
                <Instagram sx={{ color : 'white'}} fontSize="large"/>
              </ListItemIcon>
 
            </ListItemButton>
            <ListItemButton component={Link} href="mailto:example@gmail.com">
              <ListItemIcon>
                <Mail sx={{ color : 'white'}} fontSize="large" />
              </ListItemIcon>

            </ListItemButton>
            <ListItemButton component={Link} href="https://www.twitter.com">
              <ListItemIcon>
                <Twitter sx={{ color : 'white'}} fontSize="large" />
              </ListItemIcon>
            </ListItemButton>
          </Stack></motion.div>
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        ) : naving ? (
          <motion.div
          style={{
            backgroundColor : 'lightcyan'
          }}
            initial="start"
            animate="end"
            exit="exit"
            variants={animationVariants}
          >
            <PageLoader title={navPage} />
          </motion.div>
        ) : null}
      </AnimatePresence>
      
      <AnimatePresence mode={wait}>
        <Container
          sx={{
            display: "flex",
            justifyContent: !state ? "space-between" : "center",
            alignItems: "center",
          }}
        >
          {!state && (
            <motion.div
              initial={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, ease: "easeIn" },
              }}
              exit={{
                opacity: 0,
                x: "-100vw",
                transition: { duration: 0.5, ease: "easeIn" },
              }}
            >
              {" "}
              <Typography variant="h6">BookWorm</Typography>
            </motion.div>
          )}
          <Hamburger toggled={state} duration={0.6} toggle={setState} />
          {!state && <>
            <Stack direction={'row'} sx={{width : '10%'}} >
            <ListItemButton component={Link} href="https://www.facebook.com">
              <ListItemIcon>
                <Facebook />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton component={Link} href="https://www.instagram.com">
              <ListItemIcon>
                <Instagram />
              </ListItemIcon>
 
            </ListItemButton>
            <ListItemButton component={Link} href="mailto:example@gmail.com">
              <ListItemIcon>
                <Mail />
              </ListItemIcon>

            </ListItemButton>
            <ListItemButton component={Link} href="https://www.twitter.com">
              <ListItemIcon>
                <Twitter />
              </ListItemIcon>
            </ListItemButton>
          </Stack></>}
        </Container>
      </AnimatePresence>
      <AnimatePresence>
        {/* {naving && (
          <motion.div>
            <PageLoader title="New Page" />
          </motion.div>
        )} */}
        {!naving && (
          <motion.div>
            <Outlet />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
