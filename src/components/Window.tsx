import Modal from "react-modal";
import { Task } from "./data/types";

Modal.setAppElement("#root");

interface WindowProps {
  show: boolean;
  onClose: () => void;
  item: Task;
}

const Window = ({ show, onClose, item }: WindowProps) => {
  return (
    <Modal
      isOpen={show}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="overlay"
    >
      <div className="close-btn-ctn">
        <h1 style={{ flex: "1 90%" }}>{item.title}</h1>
        <button className="close-btn" onClick={onClose}>
          X
        </button>
      </div>
      <div>
        <h2>Description</h2>
        <p>{item.content}</p>
        <h2>Status</h2>
        <p>
          {item.icon}{" "}
          {`${item.status.charAt(0).toUpperCase()}${item.status.slice(
            1
          )}`}
        </p>
      </div>
    </Modal>
  );
};

export default Window;
