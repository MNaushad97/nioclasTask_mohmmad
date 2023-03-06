function NavigationButton({ action, isbackButton = false, isDisable = false }) {
  return (
    <>
      <button
        className={`${
          isbackButton ? "rotate-180" : ""
        } bg-slate-200 rounded mx-4 p-2 text-xl hover:shadow-md hover:scale-105 disabled:opacity-25 disabled:scale-100`}
        onClick={() => action()}
        disabled={isDisable}
      >
        &#8680;
      </button>
    </>
  );
}
export default NavigationButton;
