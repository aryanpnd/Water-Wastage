import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
    {
        label: 'Primary treatment (stage 1)',
        img:'https://cfdflowengineering.com/wp-content/uploads/2020/11/word-image-3.png'
        ,

        description: `Primary wastewater treatment involves sedimentation. This is when wastewater is temporarily held in large sedimentation tanks to remove settleable solids.

        With gravity, heavier solids sink to the bottom while lighter solids rise to the top. Chemicals can also be added as coagulants to remove more solids.  
        
        Sedimentation creates sewage sludge as a by-product at the bottom of the tank. Once this has settled, the treated water is released for secondary treatment. The sludge, meanwhile, may find use in anaerobic digestion or as a liming material.`,
    },
    {
        label: 'Secondary treatment (stage 2)',
        img:'https://www.thewatertreatments.com/wp-content/uploads/2009/10/secondary-treatment.gif',
        description:
            'Secondary treatment involves removing soluble organic matter solids that escaped primary treatment. It also deals with smaller suspended solids. \nSecondary treatment methods include:\n·       Bioreactors\n·       Filter beds\n·       Aerated ponds\n·       Activated sludge\n·       Rotating biological contactors\nMembranes\nMembranes Housing\n Removal of organic contaminants is best achieved using a membrane bio reactor, where a biological process takes place in the reactor where microorganisms consume the organic matter for energy.The microorganisms replicate to create solids.The solids are then filtered by the membrane to produce effluent.\n The key benefit to this technology is it eliminates the need for a secondary clarifier or filtration system for solids.The biological process in the reactor and the physical separation of solids takes place efficiently in one system.\nOther methods of secondary treatment include filter beds, aerated ponds, biofilters, activated sludge and rotating biological contactors.However, membrane bioreactors are the most efficient technology and the most modern.Water that has gone through secondary treatment can be released into the environment without damaging aquatic life and ecosystems.',
    },
    {
        label: 'Tertiary treatment (stage 3)',
        img:"https://www.netsolwater.com/netsol-water/assets/img/product-images/Tertiary_treatment_of_Sewage_Water_with_process_flow_chart.jpg",
        description: `Tertiary treatment, also known as polishing, disinfects water to the highest standards. This stage is necessary to produce water to specification, such as technical waters, and to treat wastewater for public water systems.

 

        Tertiary treatment methods include:
        
         
        
        ·       UV disinfection 
        
        ·       Chemical disinfection 
        
         
        
        UV disinfection requires no chemicals, and it can be used in place of chemicals. This means no extra filtering stage for additives. UV does not affect the pH, appearance, taste or smell of water, but it does destroy microorganisms. 
        
        UV Bacterial Control
        UV light wastewater treatment is typically used for bacterial control, ensuring organisms are unable to replicate. It can also remove chlorine, chloramines, ozone, and bromine, making it ideal for producing extremely pure technical waters.
        
         
        
        Chemical disinfection requires adding a chemical to the water. The most common is chlorine. Chlorination kills bacteria and viruses, but this treatment has the disadvantage of requiring a stage for dichlorination before discharge into the environment.
        
         
        
        Another chemical used to disinfect water is iodine. This is equally as effective as chlorine at killing viruses and bacteria.
        
         
        
        All things being equal, the best water disinfection technique is Ultraviolet Disinfection. A correctly sized UV system can be used to de-chlorinate or de-ozonate process water and it can control microorganisms equal to chemicals.`,
    },
];

export default function Hero4() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ width: "100%", height: "160%" }}>

            <Box sx={{ display: "flex", width: "100%", height: "15%", justifyContent: "center", alignItems: "center", }}>
                <Typography color={"#00ffff99"} fontWeight={"bold"} variant="h1" gutterBottom>How waste water Treated</Typography>
            </Box>

            <Box sx={{ height: "75%",padding:"1rem" }}>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                        <Step key={step.label}>
                            <StepLabel
                                optional={
                                    index === 2 ? (
                                        <Typography variant="caption">Last step</Typography>
                                    ) : null
                                }
                            >

                                <Typography fontWeight={"bold"} variant="h4" color={"white"}>{step.label}</Typography>
                            </StepLabel>
                            <StepContent>
                                <Box sx={{display:"flex"}}>
                                <Typography fontWeight={"bold"} variant="h6" color={"#ffffff8c"}>{step.description}</Typography>
                                <img src={step.img} alt="" style={{width:"30%"}} />
                                </Box>
                                <Box sx={{ mb: 2 }}>
                                    <div>
                                        <Button
                                            variant="contained"
                                            color='secondary'
                                            onClick={handleNext}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                        </Button>
                                        <Button
                                            disabled={index === 0}
                                            onClick={handleBack}
                                            sx={{ mt: 1, mr: 1 }}
                                            variant={"outlined"}
                                            color='warning'
                                        >
                                            Back
                                        </Button>
                                    </div>
                                </Box>
                            </StepContent>
                        </Step>
                    ))}

                </Stepper>
                {activeStep === steps.length && (
                    <Paper sx={{display:"flex",justifyContent:"center",alignItems:"center",background:"#010928", p: 3,width:"inherit",color:"white"}} square elevation={3} >
                        <Button variant='contained' color={"primary"} onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                            Watch again ?
                        </Button>
                    </Paper>
                )}
            </Box>
        </Box>
    );
}