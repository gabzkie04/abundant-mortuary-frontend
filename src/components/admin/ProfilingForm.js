import React, {useState} from 'react'
import { Row, Col } from 'react-bootstrap'
import Step1 from './ProfilingForms/Step1'
import Step2 from './ProfilingForms/Step2'
import Step3 from './ProfilingForms/Step3'

function ProfilingForm(props) {

    const [step, setStep] = useState(1);

    // step 1 data
    const [pf_no, setPf_no] = useState();
    const [agent_id, setAgent_id] = useState();
    const [lastName, setLastName] = useState();
    const [firstName, setFirstName] = useState();
    const [middleName, setMiddleName] = useState();
    const [region, setRegion] = useState();
    const [province, setProvince] = useState();
    const [city, setCity] = useState();
    const [barangay, setBarangay] = useState();
    const [lotBlock, setLotBlock] = useState();
    const [street, setStreet] = useState();
    const [dob, setDob] = useState();
    const [religion, setReligion] = useState();
    const [civilStatus, setCivilStatus] = useState();
    const [sex, setSex] = useState();
    const [contact, setContact] = useState();

    // step 2 data
    const [totalContractPrice, setTotalContractPrice] = useState();
    const [installmentDue, setInstallmentDue] = useState();
    const [effectiveDate, setEffectiveDate] = useState();
    const [modeOfPremium, setModeOfPremium] = useState();
    const [terms, setTerms] = useState();
    const [insurable, setInsurable] = useState();

    // step 3 data
    const [name, setName] = useState();
    const [beneficiaryDob, setBeneficiaryDob] = useState();
    const [address, setAddress] = useState();
    const [relationship, setRelationship] = useState();


    return (
        <Row>
            <Col md={2}></Col>
            <Col md={8}>
                {
                    step === 1 ?
                    <Step1
                        step={step} setStep={setStep}
                        pf_no={pf_no} setPf_no={setPf_no}
                        agent_id={agent_id} setAgent_id={setAgent_id}
                        lastName={lastName} setLastName={setLastName}
                        firstName={firstName} setFirstName={setFirstName}
                        middleName={middleName} setMiddleName={setMiddleName}
                        region={region} setRegion={setRegion}
                        province={province} setProvince={setProvince}
                        city={city} setCity={setCity}
                        barangay={barangay} setBarangay={setBarangay}
                        lotBlock={lotBlock} setLotBlock={setLotBlock}
                        street={street} setStreet={setStreet}
                        dob={dob} setDob={setDob}
                        religion={religion} setReligion={setReligion}
                        civilStatus={civilStatus} setCivilStatus={setCivilStatus}
                        sex={sex} setSex={setSex}
                        contact={contact}  setContact={setContact}
                    />
                    :
                    step === 2 ?
                   
                    <Step2 
                        step={step} setStep={setStep}
                        totalContractPrice={totalContractPrice} setTotalContractPrice={setTotalContractPrice}
                        installmentDue={installmentDue} setInstallmentDue={setInstallmentDue}
                        effectiveDate={effectiveDate} setEffectiveDate={setEffectiveDate}
                        modeOfPremium={modeOfPremium} setModeOfPremium={setModeOfPremium}
                        terms={terms} setTerms={setTerms}
                        insurable={insurable} setInsurable={setInsurable}
                    />
                    :
                    step === 3 ?
                    <Step3
                        step={step} setStep={setStep} 
                        name={name} setName={setName}
                        beneficiaryDob={beneficiaryDob} setBeneficiaryDob={setBeneficiaryDob}
                        address={address} setAddress={setAddress}
                        relationship={relationship} setRelationship={setRelationship}
                    />
                    : (props.setAction("list"))
                }
            </Col>
            <Col md={2}></Col>
        </Row>
    )
}

export default ProfilingForm
