export function EventShow() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateTour(props.event.id, params, () => event.target.reset());
  };
}

const handleClick = () => {
  props.onDestroyEvent(props.event);
};
