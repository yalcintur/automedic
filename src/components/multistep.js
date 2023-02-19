import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import axios from "axios";
import { useState, useEffect } from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';


const steps = [
    {
        label: 'SYMPTOMS',
        description: `Enter all of the medical procedures applied, press enter after writing each entry. You may write the name of the procedure with its intended aim. 
        Ex: Cleaning the wound, administering numbing agent to reduce the pain, applying stitches in order to repair the laceration....`,
    },
    {
        label: 'INSTRUCTION FOR THE PATIENT',
        description:
            'Enter the immideate actions to be done, medications to be taken and actions to be avoided by the patient. You may write the instruction with its intended aim. Ex: Keep the wound cleaned to lower the chance of infection, take X drug for the effets of Y, avoid taking a shower for 2 days...',
    },
    {
        label: 'AFTERCARE GUIDE',
        description: `Enter instructions regarding the aftercare process. 
        Ex: Please follow up with your primary care provider in 2 days...`,
    },
    {
        label: 'RETRUN TO EMERGENCY DEPARTMENT IF',
        description: `Enter the symptoms which, upon seeing, the patient should return to the Emergency Department.
        Ex: Vomiting, blurred or double vision, confusion...`,
    },
];

export default function VerticalLinearStepper() {

    const [symptomsList, setSymptomsList] = useState("");
    const [symptomsListArray, setSymptomsListArray] = useState([""]);

    const [treatmentList, setTreatmentList] = useState("");
    const [treatmentListArray, setTreatmentListArray] = useState([""]);

    const [actionsList, setActionsList] = useState("");
    const [actionsListArray, setActionsListArray] = useState([""]);

    const [medicineList, setMedicineList] = useState("");
    const [medicineListArray, setMedicineListArray] = useState([""]);

    const [avoidList, setAvoidList] = useState("");
    const [avoidListArray, setAvoidListArray] = useState([""]);

    const [fsymptomsList, setFsymptomsList] = useState("");
    const [fsymptomsListArray, setFsymptomsListArray] = useState([""]);

    const [loading, setLoading] = useState("Please wait... Loading ...");
    const [activeStep, setActiveStep] = React.useState(0);
    const [prompt, setPrompt] = useState("");
    const [parlist, setParList] = useState([""]);
    const [parelement, setParElement] = useState("");

    const [parlist2, setParList2] = useState([""]);
    const [parelement2, setParElement2] = useState("");

    const [parlist3, setParList3] = useState([""]);
    const [parelement3, setParElement3] = useState("");
    const [parlist4, setParList4] = useState([""]);
    const [parelement4, setParElement4] = useState("");

    const [parlist5, setParList5] = useState([""]);
    const [parelement5, setParElement5] = useState("");

    const [parlist6, setParList6] = useState([""]);
    const [parelement6, setParElement6] = useState("");

    const [prompttwo, setPromptTwo] = useState("how old is trump?");
    const [promptthree, setPromptThree] = useState("hello how are you?");

    const [response, setResponse] = useState("Loading");
    const [response2, setResponse2] = useState("");
    const [response3, setResponse3] = useState("");
    const [response4, setResponse4] = useState("");
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
        setLoading("Please wait... Loading ...");
    };

    useEffect(() => {
        var clearedTreat = treatmentList;
        var treatmentArray = clearedTreat.split('+');
        setTreatmentListArray(treatmentArray);
    }, [treatmentList, setTreatmentList]);

    useEffect(() => {
        var clearedSymp = symptomsList;
        var symptomsArray = clearedSymp.split('+');
        setSymptomsListArray(symptomsArray);
    }, [symptomsList, setSymptomsList]);

    useEffect(() => {
        var clearedMed = medicineList;
        var medicArray = clearedMed.split('+');
        setMedicineListArray(medicArray);
    }, [medicineList, setMedicineList]);

    useEffect(() => {
        var clearedAct = actionsList;
        var actionsslist = clearedAct.split('+');
        setActionsListArray(actionsslist);
    }, [actionsList, setActionsList]);

    useEffect(() => {
        var listavoid = avoidList;
        var avoidArray = listavoid.split('+');
        setAvoidListArray(avoidArray);
    }, [avoidList, setAvoidList]);

    useEffect(() => {
        var fsymplist = fsymptomsList;
        var fsympArray = fsymplist.split('+');
        setFsymptomsListArray(fsympArray);
        if (fsympArray.length > 1) {
            setLoading("Successful");
        }
    }, [fsymptomsList, setFsymptomsList]);

    const handleSubmitList = (e) => {
        e.preventDefault();

        var symptomquestion = "What are all the symptoms for " + prompt + " as an array separated with with plus symbols?"
        var treatmentquestion = "What are all the treatments applied in hospital for " + prompt + " as an array separated with with plus symbols?"

        var listofactions = "What are all the actions patient should perform after getting care for " + prompt + " as an array separated with plus symbols?"

        var listofmedicines = "What are all the medicines given for " + prompt + " as an array separated with plus symbols?"

        var listofavoid = "What are all activities the patient should avoid after getting care at hospital for" + prompt + " as an array separated with plus symbols?"
        var importantsymptoms = "What are all the symptoms which, upon seeing, the patient should return to the Emergency Department after getting care for " + prompt + " as an array separated with plus symbols?"

        axios
            .post("https://warm-badlands-89821.herokuapp.com/chat", { prompt: symptomquestion })
            .then((res) => {
                setSymptomsList(res.data);
                console.log(response);
            })
            .catch((err) => {
                console.error(err);
            });

        axios
            .post("https://warm-badlands-89821.herokuapp.com/chat", { prompt: treatmentquestion })
            .then((res) => {
                setTreatmentList(res.data);
                console.log(response);
            })
            .catch((err) => {
                console.error(err);
            });

        axios
            .post("https://warm-badlands-89821.herokuapp.com/chat", { prompt: listofactions })
            .then((res) => {
                setActionsList(res.data);
                console.log(response);
            })
            .catch((err) => {
                console.error(err);
            });

        axios
            .post("https://warm-badlands-89821.herokuapp.com/chat", { prompt: listofmedicines })
            .then((res) => {
                setMedicineList(res.data);
                console.log(response);
            })
            .catch((err) => {
                console.error(err);
            });


        axios
            .post("https://warm-badlands-89821.herokuapp.com/chat", { prompt: listofavoid })
            .then((res) => {
                setAvoidList(res.data);
                console.log(response);
            })
            .catch((err) => {
                console.error(err);
            });

        axios
            .post("https://warm-badlands-89821.herokuapp.com/chat", { prompt: importantsymptoms })
            .then((res) => {
                setFsymptomsList(res.data);
                console.log(response);
            })
            .catch((err) => {
                console.error(err);
            });


        console.log(treatmentList);
        console.log(symptomsList);
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        var paragraph1 = "Inform the reader that they were seen in the emergency department for X; their symptoms were [list_symp]. Use the second person. Explain the procedures briefly. Give the information plainly."
        paragraph1 = paragraph1.replace("X", prompt)
        var symptomList = ""
        parlist.forEach(element => symptomList += element + " and ");
        paragraph1 = paragraph1.replace("[list_symp]", symptomList);

        axios
            .post("https://warm-badlands-89821.herokuapp.com/chat", { prompt: paragraph1 })
            .then((res) => {
                setResponse(res.data);
                console.log(response);
            })
            .catch((err) => {
                console.error(err);
            });

        var paragraph2 = "Inform the reader that [list_proc] procedures were done. Use the second person. Explain the procedures briefly. Give the information plainly."
        var procedureList = ""
        parlist2.forEach(element => procedureList += element + " and ");
        paragraph2 = paragraph2.replace("[list_proc]", procedureList);

        axios
            .post("https://warm-badlands-89821.herokuapp.com/chat", { prompt: paragraph2 })
            .then((res) => {
                setResponse2(res.data);
                console.log(response);
            })
            .catch((err) => {
                console.error(err);
            });

        var paragraph3 = "Inform the reader that [list_act] should be done; [list_med] should be taken. Use the second person. Explain the procedures briefly. Give the information plainly. Kindly warn the reader to avoid [list_avoid]. the second person. Explain the procedures briefly. Give the information plainly."
        var actionslist = ""
        parlist3.forEach(element => actionslist += element + " and ");
        paragraph3 = paragraph3.replace("[list_act]", actionslist);

        var medicinelist = ""
        parlist4.forEach(element => medicinelist += element + " and ");
        paragraph3 = paragraph3.replace("[list_med]", medicinelist);

        var avoidlist = ""
        parlist5.forEach(element => avoidlist += element + " and ");
        paragraph3 = paragraph3.replace("[list_avoid]", avoidlist);


        axios
            .post("https://warm-badlands-89821.herokuapp.com/chat", { prompt: paragraph3 })
            .then((res) => {
                setResponse3(res.data);
                console.log(response);
            })
            .catch((err) => {
                console.error(err);
            });

        var paragraph4 = "Tell the reader to follow up with their primary care provider in [DAYS] for a follow-up of their symptoms. Tell the reader to return to the emergency department if the reader develops [list_fsymp] or any other concerning symptoms. Give the information plainly."
        paragraph4 = paragraph4.replace("[DAYS]", promptthree);
        var fsymptoms = ""
        parlist6.forEach(element => fsymptoms += element + " and ");
        paragraph4 = paragraph4.replace("[list_fsymp]", fsymptoms);

        axios
            .post("https://warm-badlands-89821.herokuapp.com/chat", { prompt: paragraph4 })
            .then((res) => {
                setResponse4(res.data);
                console.log(response);
            })
            .catch((err) => {
                console.error(err);
            });
        setActiveStep((prevActiveStep) => prevActiveStep + 1);

    };

    return (
        <>
            <Stack alignItems="center" justifyContent="center">
                <Stack sx={{ width: "50%", margin: 5, alignContent: 'center' }}>

                    <Stack container justifyContent="flex-end" spacing={2}>
                        <Typography>INITIAL ENCOUNTER / DIAGNOSIS</Typography>
                        <Typography>Enter the diagnos(i/e)s or the reason of the ER visit.
                            Ex: Bike crash, kitchen accident...</Typography>
                        <TextField id="outlined-basic"
                            label="Reason"
                            color="secondary"
                            type="text"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                        />
                        <Button variant="outlined" color="secondary" onClick={(e) => { handleSubmitList(e) }}>
                            Submit
                        </Button>
                    </Stack>

                    <p>{loading}</p>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((step, index) => (
                            <Step key={step.label}>
                                <StepLabel
                                    optional={
                                        index === 3 ? (
                                            <Typography variant="caption">Last step</Typography>
                                        ) : null
                                    }
                                >
                                    {step.label}
                                </StepLabel>
                                <StepContent>
                                    <Typography>{step.description}</Typography>
                                    <div>
                                        {index === 0 ?
                                            <>
                                                <Autocomplete
                                                    label="Common Symptoms"
                                                    id="autocomplete"
                                                    multiple
                                                    freeSolo
                                                    autoSelect
                                                    onChange={(event, newValue) => {
                                                        setParList(newValue);
                                                    }}
                                                    inputValue={parelement}
                                                    onInputChange={(event, newInputValue) => {
                                                        setParElement(newInputValue);
                                                        console.log(parlist);
                                                    }}
                                                    color="secondary"
                                                    options={symptomsListArray}
                                                    renderInput={params => (
                                                        <TextField
                                                            {...params}
                                                            color="secondary"
                                                            label="Symptoms for the disease"
                                                            margin="normal"
                                                            variant="outlined"
                                                        />
                                                    )
                                                    }
                                                /> </>
                                            : <div />}
                                        {index === 1 ?
                                            <Autocomplete
                                                label="Common Symptoms"
                                                id="autocomplete"
                                                multiple
                                                freeSolo
                                                autoSelect
                                                onChange={(event, newValue) => {
                                                    setParList2(newValue);
                                                }}
                                                inputValue={parelement2}
                                                onInputChange={(event, newInputValue) => {
                                                    setParElement2(newInputValue);
                                                    console.log(parlist2);
                                                }}
                                                color="secondary"
                                                options={treatmentListArray}
                                                renderInput={params => (
                                                    <TextField
                                                        {...params}
                                                        color="secondary"
                                                        label="List of procedures applied"
                                                        margin="normal"
                                                        variant="outlined"
                                                    />
                                                )
                                                }
                                            />
                                            : <div />}

                                        {index === 2 ?
                                            <>
                                                <Autocomplete
                                                    label="Common Symptoms"
                                                    id="autocomplete"
                                                    multiple
                                                    freeSolo
                                                    autoSelect
                                                    onChange={(event, newValue) => {
                                                        setParList3(newValue);
                                                    }}
                                                    inputValue={parelement3}
                                                    onInputChange={(event, newInputValue) => {
                                                        setParElement3(newInputValue);
                                                        console.log(parlist3);
                                                    }}
                                                    color="secondary"
                                                    options={actionsListArray}
                                                    renderInput={params => (
                                                        <TextField
                                                            {...params}
                                                            color="secondary"
                                                            label="List of actions to be done by the patient"
                                                            margin="normal"
                                                            variant="outlined"
                                                        />
                                                    )
                                                    }
                                                />

                                                <Autocomplete
                                                    label="Common Symptoms"
                                                    id="autocomplete"
                                                    multiple
                                                    freeSolo
                                                    autoSelect
                                                    onChange={(event, newValue) => {
                                                        setParList4(newValue);
                                                    }}
                                                    inputValue={parelement4}
                                                    onInputChange={(event, newInputValue) => {
                                                        setParElement4(newInputValue);
                                                        console.log(parlist4);
                                                    }}
                                                    color="secondary"
                                                    options={medicineListArray}
                                                    renderInput={params => (
                                                        <TextField
                                                            {...params}
                                                            color="secondary"
                                                            label="List of medicine given to the patient"
                                                            margin="normal"
                                                            variant="outlined"
                                                        />
                                                    )
                                                    }
                                                />

                                                <Autocomplete
                                                    label="Common Symptoms"
                                                    id="autocomplete"
                                                    multiple
                                                    freeSolo
                                                    autoSelect
                                                    onChange={(event, newValue) => {
                                                        setParList5(newValue);
                                                    }}
                                                    inputValue={parelement5}
                                                    onInputChange={(event, newInputValue) => {
                                                        setParElement5(newInputValue);
                                                        console.log(parlist5);
                                                    }}
                                                    color="secondary"
                                                    options={avoidListArray}
                                                    renderInput={params => (
                                                        <TextField
                                                            {...params}
                                                            color="secondary"
                                                            label="Which actions should be avoided by the patient"
                                                            margin="normal"
                                                            variant="outlined"
                                                        />
                                                    )
                                                    }
                                                />   </>
                                            : <div />}

                                        {index === 3 ?
                                            <>
                                                <TextField
                                                    type="text"
                                                    label="After how many days should the patient revisit?"
                                                    value={2}
                                                    onChange={(e) => setPromptThree(e.target.value)}
                                                />

                                                <Autocomplete
                                                    label="Common Symptoms"
                                                    id="autocomplete"
                                                    multiple
                                                    freeSolo
                                                    autoSelect
                                                    onChange={(event, newValue) => {
                                                        setParList6(newValue);
                                                    }}
                                                    inputValue={parelement6}
                                                    onInputChange={(event, newInputValue) => {
                                                        setParElement6(newInputValue);
                                                        console.log(parlist);
                                                    }}
                                                    color="secondary"
                                                    options={fsymptomsListArray}
                                                    renderInput={params => (
                                                        <TextField
                                                            {...params}
                                                            color="secondary"
                                                            label="Urgent symptoms"
                                                            margin="normal"
                                                            variant="outlined"
                                                        />
                                                    )
                                                    }
                                                />
                                            </>
                                            : <div />}
                                    </div>

                                    <Box sx={{ mb: 2 }}>
                                        <div>
                                            {index === steps.length - 1 ?
                                                <Button
                                                    color="secondary"
                                                    variant="contained"
                                                    onClick={handleSubmit}
                                                    sx={{ mt: 1, mr: 1 }}
                                                >
                                                    Finish
                                                </Button>
                                                : <Button
                                                    color="secondary"
                                                    variant="contained"
                                                    onClick={handleNext}
                                                    sx={{ mt: 1, mr: 1 }}
                                                >
                                                    Continue
                                                </Button>}
                                            <Button
                                                color="secondary"
                                                disabled={index === 0}
                                                onClick={handleBack}
                                                sx={{ mt: 1, mr: 1 }}
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
                        <Paper square elevation={0} sx={{ p: 3 }}>
                            <p>{response}</p>
                            <p>{response2}</p>
                            <p>{response3}</p>
                            <p>{response4}</p>
                            <Button color="secondary" onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                                Reset
                            </Button>
                        </Paper>
                    )}
                </Stack>
            </Stack>
        </>
    );
}

