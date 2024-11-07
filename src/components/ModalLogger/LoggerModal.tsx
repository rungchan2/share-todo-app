import { FiX } from "react-icons/fi";
import { useTypedSelector } from "../../hooks/redux";
import LogItem from "./LogItem";
import {
  modalBackground,
  loggerModal,
  loggerModalHeader,
  loggerModalContent,
  closeButton,
} from "./LoggerModal.css";

type LoggerModalProps = {
  setIsLoggerOpen: (value: boolean) => void;
};

const LoggerModal = ({ setIsLoggerOpen }: LoggerModalProps) => {
  const logArray = useTypedSelector((state) => state.logger.logArray);

  return (
    <div className={modalBackground}>
      <div className={loggerModal}>
        <div className={loggerModalHeader}>
          <h1>Log</h1>
          <FiX onClick={() => setIsLoggerOpen(false)} className={closeButton} />
        </div>
          <div className={loggerModalContent}>
            {logArray.map((log) => (
              <LogItem key={log.logId} log={log} />
            ))}
          </div>
      </div>
    </div>
  );
};

export default LoggerModal;
