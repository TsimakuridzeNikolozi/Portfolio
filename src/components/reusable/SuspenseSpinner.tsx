const SuspenseSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-accent"></div>
    </div>
  );
};

export default SuspenseSpinner;
