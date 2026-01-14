import type { ChangeEvent } from "react";
import { useFormContext } from "../context/FormContext";

interface Props {
  next: () => void;
  back: () => void;
}

const Step2Experience = ({ next, back }: Props) => {
  const { formData, setFormData } = useFormContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      experience: { ...formData.experience, [e.target.name]: e.target.value },
    });
  };

  return (
    <div className="w-full flex flex-col items-center">
      <input
        name="years"
        placeholder="Years of Experience"
        value={formData.experience.years}
        onChange={handleChange}
        className="w-full mb-4 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg shadow-sm"
      />

      <input
        name="skills"
        placeholder="Skills (comma separated)"
        value={formData.experience.skills}
        onChange={handleChange}
        className="w-full mb-6 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg shadow-sm"
      />

      <div className="flex w-full gap-4">
        <button
          onClick={back}
          className="flex-1 py-4 bg-gray-400 text-white font-semibold rounded-xl shadow-lg hover:bg-gray-500 transition text-lg"
        >
          Back
        </button>

        <button
          onClick={next}
          className="flex-1 py-4 bg-purple-600 text-white font-semibold rounded-xl shadow-lg hover:bg-purple-700 transition text-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2Experience;
