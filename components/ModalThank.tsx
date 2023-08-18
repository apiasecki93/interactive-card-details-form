import IconComplite from "../public/icon-complete";

const ModalThank = () => {
    return (
        <div className="flex flex-col items-center py-5 w-[378px] h-[295px]">
            <div className="mt-20 w-[90px] h-[90px] flex items-center justify-center rounded-full bg-gradient-to-b from-purple-600 to-blue-600">
                <IconComplite />
            </div>
            <div className="mt-4 text-lg font-semibold">THANK YOU !</div>
            <div className="mt-2 text-sm text-[#8c8a8e]">{"We've added your card details"}</div>
        </div>
    );
}

export default ModalThank;
