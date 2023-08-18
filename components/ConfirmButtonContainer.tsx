
interface ConfirmButtonContainerProps {
    onConfirm: () => void;
    isDataValid: boolean;
}

const ConfirmButtonContainer: React.FC<ConfirmButtonContainerProps> = ({ onConfirm, isDataValid }) => {
    return (
        <button
            className="flex text-white bg-[#210a2e] h-[50px] w-[300px] items-center justify-center rounded-md mt-5"
            onClick={onConfirm}
        >
            {isDataValid ? 'CONTINUE' : 'CONFIRM'}
        </button>
    );
}

export default ConfirmButtonContainer;
