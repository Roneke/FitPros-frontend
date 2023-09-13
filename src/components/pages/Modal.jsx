import "./Modal.css";

export default function Modal(props) {
  if (props.show) {
    return (
      <div className="modal-background flex flex-wrap border shadow rounded-lg p-3 dark:bg-gray-600">
        <section className="modal-main">
          {props.children}
          <button
            className="close py-1.5 px-3 m-1 text-center bg-violet-700 border rounded-md text-white  hover:bg-violet-500 hover:text-gray-100 dark:text-gray-200 dark:bg-violet-700"
            type="button"
            onClick={props.onClose}
          >
            &#x2715;
          </button>
        </section>
      </div>
    );
  }
}
