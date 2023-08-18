
interface ConfirmButtonContainerProps {
    onConfirm: () => void;
}




const ConfirmButtonContainer: React.FC<ConfirmButtonContainerProps> = ({ onConfirm }) => {
    return (
        <button className="flex text-white bg-[#210a2e] h-[50px] w-[300px] items-center justify-center rounded-md mt-5" onClick={onConfirm}>
            CONFIRM
        </button>
    );
}

export default ConfirmButtonContainer;