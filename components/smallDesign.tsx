
"use client"
import React, { useState } from "react";
import CardContainer from "@/components/CardContainer";
import InputContainer from "@/components/InputContainer";
import ConfirmButtonContainer from "@/components/ConfirmButtonContainer";
import ModalThank from "./ModalThank";

interface Errors {
    cardHolderName?: string;
    cardNumber?: string;
    expMonth?: string;
    expYear?: string;
    cvc?: string;
}

const SmallDesing = () => {
    const [cardHolderName, setCardHolderName] = useState<string>('');
    const [cardNumber, setCardNumber] = useState<string>('');
    const [expMonth, setExpMonth] = useState<string>('');
    const [expYear, setExpYear] = useState<string>('');
    const [cvc, setCvc] = useState<string>('');
    const [errors, setErrors] = useState<Errors>({});
    const [cardInfo, setCardInfo] = useState({});
    const [confirmed, setConfirmed] = useState<boolean>(false);
    const [isDataValid, setIsDataValid] = useState<boolean>(false);

    const validateAndConfirm = () => {
        const newErrors: Errors = {};
        const newCardInfo: any = {};

        // Validate CardHolderName
        if (!/^[a-zA-Z\s]+$/.test(cardHolderName)) {
            newErrors.cardHolderName = 'Please enter a valid name (letters only).';
        } else {
            newCardInfo.cardHolderName = cardHolderName;
        }

        // Validate CardNumber
        if (!/^\d{16}$/.test(cardNumber)) {
            if (cardNumber.length !== 16) {
                newErrors.cardNumber = 'Card number must be 16 digits.';
            } else {
                newErrors.cardNumber = 'Card number must contain only digits.';
            }
        } else {
            newCardInfo.cardNumber = cardNumber;
        }

        // Validate Month
        if (!/^\d{2}$/.test(expMonth)) {
            newErrors.expMonth = 'Month must be 2 digits.';
        } else {
            newCardInfo.expMonth = expMonth;
        }

        // Validate Year
        if (!/^\d{4}$/.test(expYear)) {
            newErrors.expYear = 'Year must be 4 digits.';
        } else {
            newCardInfo.expYear = expYear;
        }

        // Validate CVC
        if (!/^\d{3}$/.test(cvc)) {
            newErrors.cvc = 'CVC must be 3 digits.';
        } else {
            newCardInfo.cvc = cvc;
        }

        setErrors(newErrors);
        if (isDataValid) {
            // Reset the states to default values when user presses Continue
            setCardHolderName('');
            setCardNumber('');
            setExpMonth('');
            setExpYear('');
            setCvc('');
            setCardInfo({});
            setIsDataValid(false);
        } else {
            // ... (Same as your existing validation logic)
            if (Object.keys(newErrors).length === 0) {
                setCardInfo(newCardInfo);
                setIsDataValid(true);
            }
        }



    };

    return (
        <React.Fragment>
            <div id="mainContainerMobile" className="flex flex-col items-center justify-center mmin:items-start mmin:justify-start mmin:flex-row">
                
                <CardContainer cardInfo={cardInfo} />
                <div className="flex flex-col w-full items-center mmin:w-auto mmin:pl-[400px]">  {/* <-- This container groups them */}
                    {confirmed ? <ModalThank /> :
                        <InputContainer
                            cardHolderName={cardHolderName} setCardHolderName={setCardHolderName}
                            cardNumber={cardNumber} setCardNumber={setCardNumber}
                            expMonth={expMonth} setExpMonth={setExpMonth}
                            expYear={expYear} setExpYear={setExpYear}
                            cvc={cvc} setCvc={setCvc}
                            errors={errors}
                        />
                    }
                    <ConfirmButtonContainer onConfirm={validateAndConfirm} isDataValid={isDataValid} />
                </div>
            </div>
        </React.Fragment>
    );
}

export default SmallDesing;
