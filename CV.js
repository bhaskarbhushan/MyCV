import React from 'react';
import Button from '@mui/material/Button';


import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import AdjustIcon from '@mui/icons-material/Adjust';
import SchoolIcon from '@mui/icons-material/School';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ContactsIcon from '@mui/icons-material/Contacts';
import LaptopIcon from '@mui/icons-material/Laptop';


import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),

  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 70,
  },
}));

function CV() {
  return (
    <>
      <Card>
        <CardContent>
          <Box sx={{ flexGrow: 1, borderRadius: 30 }}>
            <AppBar position="static"
              sx={{ borderRadius: 250 }}
            >
              <StyledToolbar>
                <Typography
                  variant="h3"
                  // noWrap
                  // component="div"
                  sx={{ flexGrow: 1, alignSelf: 'flex-end', marginLeft: 20 }}
                >
                  Bhaskar Bhushan
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ flexGrow: 1, alignSelf: 'flex-end', marginLeft: '50' }}
                >
                  Designation - Front End Developer
                </Typography>
              </StyledToolbar>
            </AppBar>
          </Box>

          <Card sx={{ backgroundColor: 'greenyellow', marginTop: 2, borderRadius: 15 }}>
            <Timeline position="alternate">


              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  align="right"
                  fontSize='20px'
                  color="text.secondary"
                >
                  <b>Aim</b>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                  <TimelineDot sx={{ backgroundColor: 'blue' }}>
                    <AdjustIcon />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography>
                    Bringing one year of experience leading website design projects, including gathering user requirements, producing code, creating mockups and enhancing designs. Focused on creating clean, robust code with exceptional security. Achieves compatibility targets while meeting and exceeding customer demands.
                  </Typography>
                </TimelineContent>
              </TimelineItem>


              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  fontSize='20px'
                  color="text.secondary"
                >
                  <b>Work History</b>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                  <TimelineDot color="primary">
                    <LaptopMacIcon />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '5px', px: 2, maxWidth: 550 }}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography> 1. Digital Glyde ( May 2022 - Current )</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography textAlign='left' marginLeft='30px'>
                        1.  Hands on experience in developing user friendly web applications using HTML5, CSS3, JavaScript & React.<br />
                        2.  Maintain and improve website.<br />
                        3.  Design mobile-based features.<br />
                        4.  Write functional requirement documents and guides.<br />
                        5.  Get feedback from, and build solutions for, users and customers.<br />
                        6.  Stay up-to-date on emerging technologies<br/>
                        7.  Cooperating with the back-end developer in the process of building the RESTFUL API.<br />
                        8.  Good knowledge of JavaScript library, React.<br/>
                        9.  Knowledge of design patterns and architectural patterns.<br />
                        10. Working with the Product Team, Front-End Developers, and Backend Developers to develop new functionality in the product.<br />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </TimelineContent>
              </TimelineItem>


              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  align="right"
                  fontSize='20px'
                  color="text.secondary"
                >
                  <b>Education</b>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                  <TimelineDot sx={{ backgroundColor: 'blue' }}>
                    <SchoolIcon />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography>
                    <div>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>B.Tech in Electronics & Communication Technology</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            College Name: State Institute of Engineering & Technology, Nilokheri, Karnal<br />
                            Batch: July 2018 – June 2021<br />
                            Marks: 69.1%<br />
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>12th Standard</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            Board Name: HBSE<br />
                            Batch: April 2015 – March 2016<br />
                            Marks: 83%<br />
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>Polytechnic in Computer Science Engineering</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            College Name: G.B.N. Govt. Polytechnic, Nilokheri, Karnal, Haryana. <br />
                            Batch: July 2012 – June 2015<br />
                            Marks: 65.5%<br />
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>10th Standard</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            Board Name: CBSE<br />
                            Batch: April 2011 - March 2012 <br />
                            Marks: 8.2 CGPA<br />
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  </Typography>
                </TimelineContent>
              </TimelineItem>


              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  align="right"
                  fontSize='20px'
                  color="text.secondary"
                >
                  <b>Tech Skills</b>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                  <TimelineDot color="secondary">
                    <LaptopIcon />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography fontSize='14px' marginLeft='50px' textAlign='left'>
                    <b>-</b> HTML<br />
                    <b>-</b> CSS<br />
                    <b>-</b> Bootstrap<br />
                    <b>-</b> JavaScript<br />
                    <b>-</b> React<br />
                    <b>-</b> Ant Design<br />
                    <b>-</b> Material UI<br />
                    <b>-</b> SQL<br />
                    <b>-</b> MongoDB / NoSQL<br />
                    <b>-</b> Microsoft Office<br />
                    <b>-</b> Express<br />
                    <b>-</b> Node.js<br />
                    <b>-</b> GitHub<br />
                    <b>-</b> Devops<br />
                  </Typography>
                </TimelineContent>
              </TimelineItem>


              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  align="right"
                  fontSize='20px'
                  color="text.secondary"
                >
                  <b>Projects</b>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                  <TimelineDot color="primary" variant="outlined">
                    <EngineeringIcon />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <span sx={{ backgroundColor: 'greenyellow' }}>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography> 1. Bhaskar Bhusha CV </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography textAlign='left' marginLeft='30px'>
                          1.  Use languages like HTML, CSS, JavaScript & React to create user-friendly web pages.<br />
                          2.  Maintain and improve website.<br />
                          3.  Design mobile-based features.<br />
                          4.  Write functional requirement documents and guides.<br />
                          5.  Get feedback from, and build solutions for, users and customers.<br />
                          6.  Stay up-to-date on emerging technologies<br />
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </span>
                </TimelineContent>
              </TimelineItem>


              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  align="right"
                  fontSize='20px'
                  color="text.secondary"
                >
                  <b>Contact Details</b>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                  <TimelineDot color="primary" variant="outlined">
                    <ContactsIcon />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography fontSize='14px' marginLeft='50px' textAlign='left'>
                    <b>PHONE:</b>+91-9729729638<br />
                    <b>ADDRESS:</b>H.No. 219, new Ramesh Nagar, Karnal, Haryana<br />
                    <b>EMAIL:</b>Bhaskar.bhushan819@gmail.com<br />
                    <b>Linkedin:</b>Bhaskar.bhushan819@gmail.com<br />
                    <b>Date of Birth:</b>18/05/1997<br />
                    <b>Languages Known:</b>Hindi & English<br />
                  </Typography>
                </TimelineContent>
              </TimelineItem>


            </Timeline>
          </Card>
        </CardContent>
      </Card>
    </>
  );
}

export default CV;
