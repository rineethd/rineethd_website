import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const steps = [
  {
    label: 'Software Engineer',
    date: 'July 2023 - Present',
    companyName: 'Digital Hoop Technologies',
    description: [
      'Improved user experience by enhancing Compliance reports and Vulnerability reports in Business Value Dashboards.',
      'Spearheaded the migration of Python2 files to ensure compatibility with Python2 and Python3, enabling the successful import of benchmarks into Server Automation.'
    ]
  },
  {
    label: 'Software Engineer',
    date: 'Feb 2023 - Jun 2023',
    companyName: 'Opentext',
    description: [
      'Improved user experience by enhancing Compliance reports and Vulnerability reports in Business Value Dashboards.',
      'Spearheaded the migration of Python2 files to ensure compatibility with Python2 and Python3, enabling the successful import of benchmarks into Server Automation.'
    ]
  },
  {
    label: 'Software Engineer',
    date: 'Aug 2022 - Jan 2023',
    companyName: 'Microfocus',
    description: [
      'Contributed to driving the development of diverse platform support for controls (Unix, Windows).',
      'Integrated and tested various control libraries including UNIX, Windows, and benchmark compliance standards within the Server Automation Client and Data Center Automation.',
      'Created Compliance (Benchmark, Patch, Software) and Resource vulnerability reports in Business Value Dashboards.',
      'Automated User Interface test cases for the Business Value Dashboards.',
      'Products Worked on - Data Center Automation (DCA), Server Automation (SA).'
    ]
  },
  {
    label: 'Research & Development Intern',
    date: 'Mar 2022 - July 2022',
    companyName: 'Microfocus',
    description: [
      'Built a tool that generates entries to the XML files present in the Data Center Automation compliance content by providing a User Interface abstraction, thereby reducing human errors.',
      'Worked on building new Angular Components to populate large XMLs into interactive forms.',
      'Responsible for all phases of development and maintenance of the tool.'
    ]
  }
];

const StyledBulletPoint = styled(Typography)`
  font-size: 1.5em;
  color: rgb(94, 234, 212);
  margin-right: 0.5em;
`;

const StyledStep = styled(Step)`
  .MuiStepLabel-root.MuiStepLabel-active {
    cursor: pointer;
    color: rgb(204, 214, 246) !important;
  }

  .MuiStepIcon-root {
    color: teal !important;
  }
`;

const StyledButton = styled(Button)`
  border-radius: 100px;
  color: rgb(94, 234, 212) !important;
  background-color: rgba(45, 212, 191, 0.1) !important;
`;

const Work = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (stepIndex) => {
    setActiveStep(stepIndex);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    
    <Box sx={{ maxWidth: 600, margin: '0 auto',paddingLeft:{ xs: '10px', md: '65px' } }}>
        <Typography component="span" variant="span" sx={{ color: 'rgb(94, 234, 212)', fontFamily: 'SF Mono,Fira Code,Fira Mono,Roboto Mono,monospace',fontSize: '25px',
  paddingRight:'1px',fontWeight:'600',paddingLeft:'10px'}}>
          02.
        </Typography>
        <Typography component="span" variant="span" sx={{ color: 'rgb(204, 214, 246)', fontFamily: 'SF Mono,Fira Code,Fira Mono,Roboto Mono,monospace',fontSize: '30px',
  fontWeight:'600',paddingLeft:'10px'}}>
          Experience
        </Typography>
        <br></br>
        <br></br>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <StyledStep key={step.label}>
            <StepLabel onClick={() => handleStepClick(index)}>
              <Typography
                sx={{
                  color: 'rgb(204, 214, 246)',
                  fontFamily:
                    'SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace',
                  fontSize: '18px'
                }}
              >
                <strong>{step.label}</strong> @{' '}
                <span
                  style={{
                    color: 'rgb(94, 234, 212)',
                    fontFamily:
                      'SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace'
                  }}
                >
                  {step.companyName}
                </span>
              </Typography>
              <Typography
                sx={{
                  color: 'rgb(136, 146, 176)',
                  fontFamily:
                    'SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace'
                }}
              >
                {step.date}
              </Typography>
            </StepLabel>
            <StepContent
              style={{ display: activeStep === index ? 'block' : 'none' }}
            >
              <Typography
                sx={{
                  mb: 2,
                  width: '100%',
                  maxWidth: '500px',
                  color: 'rgb(136, 146, 176)',
                  fontFamily:
                    'SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace'
                }}
              >
                {step.description.map((point, i) => (
                  <Typography
                    key={i}
                    component="div"
                    sx={{
                      mt: 2,
                      color: 'rgb(136, 146, 176)',
                      fontFamily:
                        'SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace'
                    }}
                  >
                    <StyledBulletPoint component="span">▹</StyledBulletPoint>
                    {point}
                  </Typography>
                ))}
              </Typography>
              {activeStep < steps.length - 1 && (
                <StyledButton
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Next
                </StyledButton>
              )}
              {activeStep > 0 && (
                <Button
                  onClick={handleBack}
                  sx={{
                    mt: 1,
                    mr: 1,
                    borderRadius: '100px',
                    color: 'rgb(94, 234, 212)',
                    backgroundColor: 'rgba(45, 212, 191, 0.1)'
                  }}
                >
                  Back
                </Button>
              )}
            </StepContent>
          </StyledStep>
        ))}
      </Stepper>
    </Box>
  );
};

export default Work;
