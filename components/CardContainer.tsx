
import Image from "next/image";

interface CardContainerProps {
    cardInfo: {
        cardHolderName?: string;
        cardNumber?: string;
        expMonth?: string;
        expYear?: string;
        cvc?: string;
    };
}

const CardContainer: React.FC<CardContainerProps> = ({ cardInfo }) => {
    const cardNumberGroups = cardInfo.cardNumber ? cardInfo.cardNumber.match(/.{1,4}/g) : null;


    return (
        <div id="cardContainerMobile" className="flex flex-col w-full  ">
            <div className=" h-[239px] bg-center bg-cover w-full" style={{
                backgroundImage: "url('/images/bg-main-mobile.png')"
            }}>
                <div className="flex relative pl-[60px] pt-[25px]">
                    <Image
                        src="/images/bg-card-back.png"
                        alt="First Overlay"
                        className="relative flex"
                        width={285}
                        height={157}
                    />
                    <div className="absolute top-[90px] right-[70px] text-white">{cardInfo.cvc ? cardInfo.cvc : '000'}</div>
                </div>
                <div className="flex top-[115px] left-5">

                    <div id="secondOverlay" className="relative w-[285px] h-[157px] left-[20px] bottom-[60px] bg-center bg-cover mx-2 shadow-lg" style={{
                        backgroundImage: "url('/images/bg-card-front.png')"
                    }}>
                        <div className="flex flex-col">
                            <div className="flex flex-row items-center space-x-2 pt-5 pl-4">
                                <div id="bigBall" className="p-4 bg-white rounded-full"></div>
                                <div id="smallBall" className="p-2 border border-white rounded-full bg-transparent"></div>
                            </div>

                            <div className="flex flex-row space-x-4 text-xl font-semi text-white items-center pt-[35px] pl-4">
                                <div id="cardNr1">{cardNumberGroups ? cardNumberGroups[0] : '0000'}</div>
                                <div id="cardNr2">{cardNumberGroups ? cardNumberGroups[1] : '0000'}</div>
                                <div id="cardNr3">{cardNumberGroups ? cardNumberGroups[2] : '0000'}</div>
                                <div id="cardNr4">{cardNumberGroups ? cardNumberGroups[3] : '0000'}</div>
                            </div>
                            <div className="flex flex-row text-white justify-between pt-[10px]">
                                <div className="text-sm pl-4">{cardInfo.cardHolderName || 'Jane APPLESEED'}</div>
                                <div className="text-sm pr-5">{cardInfo.expMonth || '00'}/{cardInfo.expYear ? cardInfo.expYear.slice(2) : '00'}</div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div id="sibbiling" className="w-[378px] h-[50px] mt-[-20px]"></div> */}
        </div>
    );
}
export default CardContainer;