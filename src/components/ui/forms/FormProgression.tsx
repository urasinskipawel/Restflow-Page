export const FormProgression = ({ isSubmitted }) => {
  return (
    <div className="flex items-center justify-around pt-6 font-oswald font-bold">
      <div className="flex flex-col justify-start">
        <h4 className="text-green-200">Dane kontaktowe</h4>
        <div className="mt-3 h-2 w-40 bg-green-200"></div>
      </div>
      <div>
        <h4 className={!isSubmitted ? "text-grayText-100" : "text-green-200"}>
          Gotowe
        </h4>
        <div
          className={`mt-3 h-2 w-40 ${!isSubmitted ? "bg-grayText-100" : "bg-green-200"}`}
        ></div>
      </div>
    </div>
  );
};
