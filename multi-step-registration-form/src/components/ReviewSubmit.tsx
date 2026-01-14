import { useFormContext } from "../context/FormContext";

interface Props {
  back: () => void;
}

const ReviewSubmit = ({ back }: Props) => {
  const { formData } = useFormContext();

  const handleSubmit = () => {
    console.log("Submitted Data:", formData);
    alert("Check console for submitted data");
  };

  return (
    <div className="w-full flex flex-col items-center">
      <pre className="w-full mb-6 p-5 bg-gray-50 border border-gray-200 rounded-2xl text-sm shadow-inner overflow-x-auto">
        {JSON.stringify(formData, null, 2)}
      </pre>

      <div className="flex w-full gap-4">
        <button
          onClick={back}
          className="flex-1 py-4 bg-gray-400 text-white font-semibold rounded-xl shadow-lg hover:bg-gray-500 transition text-lg"
        >
          Back
        </button>

        <button
          onClick={handleSubmit}
          className="flex-1 py-4 bg-green-600 text-white font-semibold rounded-xl shadow-lg hover:bg-green-700 transition text-lg"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ReviewSubmit;
