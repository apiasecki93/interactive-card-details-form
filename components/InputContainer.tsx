"use client"
import { Montserrat } from "next/font/google"
import {cn } from "@/lib/utils"
const monsterrat = Montserrat({ weight: '600', subsets: ['latin'] })

interface Errors {
    cardHolderName?: string;
    cardNumber?: string;
    expMonth?: string;
    expYear?: string;
    cvc?: string;
}

interface InputContainerProps {
    cardHolderName: string;
    setCardHolderName: (name: string) => void;
    cardNumber: string;
    setCardNumber: (number: string) => void;
    expMonth: string;
    setExpMonth: (month: string) => void;
    expYear: string;
    setExpYear: (year: string) => void;
    cvc: string;
    setCvc: (cvc: string) => void;
    errors: Errors; // Fix this line (it was previously Error)
}

const InputContainer: React.FC<InputContainerProps> = ({
    cardHolderName, setCardHolderName,
    cardNumber, setCardNumber,
    expMonth, setExpMonth,
    expYear, setExpYear,
    cvc, setCvc,
    errors
}) => {
    return ( 
        <div id="inputConainerMobile" className="flex w-[378px] flex-col pt-[50px] pr-[30px]">
            <div className="flex flex-col py-2 pl-7">
                <div className={cn("my-2",monsterrat.className)}>CARDHOLDER NAME</div>
                <input
                    id="CardHolderName"
                    value={cardHolderName}
                    onChange={e => setCardHolderName(e.target.value)}
                    className="w-[325px] rounded-md border border-gray-300 pl-3"
                    placeholder="e.g Jane Appleseed"
                />
                {errors.cardHolderName && <div className="text-red-500">{errors.cardHolderName}</div>}
            </div>
            <div className="flex flex-col py-2 pl-7">
                <div className={cn("my-2",monsterrat.className)}>CARD NUMBER</div>
                <input
                    id="cardNumber"
                    value={cardNumber}
                    onChange={e => setCardNumber(e.target.value)}
                    className="w-[325px] rounded-md border border-gray-300 pl-3"
                    placeholder="e.g 1234 5678 9123 0000"
                />
                {errors.cardNumber && <div className="text-red-500">{errors.cardNumber}</div>}
            </div>
            <div className="flex flex-col py-2 pl-7">
                <div className={cn("my-2",monsterrat.className)}>EXP. DATE (MM/YY) CVC</div>
                <div className="flex flex-row justify-between">
                    <input
                        id="month"
                        value={expMonth}
                        onChange={e => setExpMonth(e.target.value)}
                        className="w-20 pl-3 border border-gray-300 rounded-md"
                        placeholder="MM"
                    />
                    <input
                        id="year"
                        value={expYear}
                        onChange={e => setExpYear(e.target.value)}
                        className="w-20 pl-3 border border-gray-300 rounded-md"
                        placeholder="YY"
                    />
                    <input
                        id="code"
                        value={cvc}
                        onChange={e => setCvc(e.target.value)}
                        className="w-[160px] pl-3 mr-3 border border-gray-300 rounded-md"
                        placeholder="e.g 123"
                    />
                </div>
                {errors.expMonth && <div className="text-red-500">{errors.expMonth}</div>}
                {errors.expYear && <div className="text-red-500">{errors.expYear}</div>}
                {errors.cvc && <div className="text-red-500">{errors.cvc}</div>}
            </div>
        </div>
    );
}
 
export default InputContainer;
