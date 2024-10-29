import Button from "./Button";

export default function ButtonGroup({
  handleRemoveAllItems,
  handleResetAllItems,
  handleMarkAllComplete,
  handleMarkAllIncomplete,
}) {
  return (
    <section className="button-group">
      <Button type="secondary" onClick={handleMarkAllComplete}>
        Mark all as complete
      </Button>
      <Button type="secondary" onClick={handleMarkAllIncomplete}>
        Mark all as incomplete
      </Button>
      <Button type="secondary" onClick={handleResetAllItems}>
        Reset to initial
      </Button>
      <Button type="secondary" onClick={handleRemoveAllItems}>
        Remove all items
      </Button>
    </section>
  );
}
