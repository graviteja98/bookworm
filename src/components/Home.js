import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wait } from "@testing-library/user-event/dist/utils";
import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";
import { ArrowRightAlt } from "@mui/icons-material";

const images = [
  "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80",
  "https://images.unsplash.com/photo-1616400619175-5beda3a17896?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  // Add more image URLs here
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [progress, setProgress] = useState(0);
  const matter = [
    { title: "Premium Collections", Link: "collections" },
    { title: "Editors Choice", Link: "editors" },
    { title: "Decide for Yourself", Link: "dfy" },
  ];
  const navigate = useNavigate();
  // const handleNext = () => {
  //   setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  // };

  // const handlePrev = () => {
  //   setCurrentImage(
  //     (prevImage) => (prevImage - 1 + images.length) % images.length
  //   );
  // };
  useEffect(() => {
    // Auto-advance the slider every 5 seconds
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      setProgress(0);
    }, 6000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const progInterval = setInterval(() => {
      setProgress((progress) => progress + 20);
      console.log(progress);
    }, 1000);
    return () => {
      clearInterval(progInterval);
    };
  });
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "80vh",
          overflow: "hidden",
        }}
      >
        <AnimatePresence initial={false} mode={wait}>
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt={`Image ${currentImage + 1}`}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "blur(5px) brightness(50%)",
              marginBottom: 7,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, type: "tween" }}
          />
        </AnimatePresence>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "30%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "3rem",
              textAlign: "center",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            {matter[currentImage].title}
          </h1>
          <motion.div>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "rgba(0,0,0,0.5)",
                color: "white",
                "&:hover": {
                  backgroundColor: "rgba(0,255,255,0.5)",
                },
              }}
              onClick={() => navigate(matter[currentImage].Link)}
              endIcon={<ArrowRightAlt />}
            >
              Explore
            </Button>
          </motion.div>
        </div>
        {/* <div style={{ position: 'absolute', bottom: '20px', left: 0, right: 0, display: 'flex', justifyContent: 'center' }}>
        <button onClick={handlePrev} style={{ margin: '0 10px', padding: '10px 20px', fontSize: '1rem' }}>
          Prev
        </button>
        <button onClick={handleNext} style={{ margin: '0 10px', padding: '10px 20px', fontSize: '1rem' }}>
          Next
        </button>
      </div> */}
        <div
          style={{
            borderRadius: "2em",
            position: "absolute",
            bottom: "50px",
            left: "47%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            height: "1em",
            width: 70,
          }}
        >
          {images.map((item, index) => (
            <CircularProgress
              size={15}
              key={item}
              variant="determinate"
              value={currentImage === index ? progress : 100}
            />
          ))}
        </div>
      </div>
      <Card
        sx={{
          m: "5%",
        }}
        style={{
          width: "90%",
          textAlign: "center",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80" /* Replace with your image URL */
          alt=""
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderTopLeftRadius: "4px",
            borderTopRightRadius: "4px",
          }}
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Welcome to BookWorm Library!
          </Typography>
          <Typography variant="body2" align="left">
            BookWorm is a remarkable and user-friendly library designed to cater
            to the needs of book enthusiasts and avid readers. With an extensive
            collection of literary treasures from classic masterpieces to
            contemporary bestsellers, BookWorm offers a diverse and curated
            selection of reading material that captivates the imagination and
            satiates the thirst for knowledge. This innovative library platform
            provides a seamless reading experience, allowing users to access
            their favorite books across various devices and formats. Whether
            it's curling up with a captivating novel on a cozy evening or diving
            into a profound piece of non-fiction for intellectual enrichment,
            BookWorm delivers an immersive reading journey that transcends the
            boundaries of time and space. Navigating through BookWorm's
            user-friendly interface is a breeze, enabling users to explore
            different genres, authors, and literary themes with ease. The
            platform also empowers readers to create personalized reading lists,
            bookmark favorite passages, and engage in discussions with fellow
            book lovers through its vibrant community forums. Beyond its vast
            digital collection, BookWorm also fosters a commitment to promoting
            literacy and learning. Through partnerships with educational
            institutions and outreach programs, BookWorm strives to make books
            accessible to readers of all ages, empowering them to embark on
            lifelong journeys of discovery and enlightenment. BookWorm's
            dedication to nurturing a love for literature, fostering a thriving
            reading community, and supporting literacy initiatives makes it a
            true haven for bibliophiles. Whether you are a seasoned bookworm or
            just beginning your literary odyssey, this library remains a
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Home;
