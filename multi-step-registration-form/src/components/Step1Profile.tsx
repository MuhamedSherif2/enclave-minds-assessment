import type { ChangeEvent } from "react";
import { useFormContext } from "../context/FormContext";

interface Props {
  next: () => void;
}

const Step1Profile = ({ next }: Props) => {
  const { formData, setFormData } = useFormContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      profile: { ...formData.profile, [e.target.name]: e.target.value },
    });
  };

  return (
    <div className="w-full flex flex-col items-center">
      <input
        name="name"
        placeholder="Name"
        value={formData.profile.name}
        onChange={handleChange}
        className="w-full mb-4 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg shadow-sm"
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.profile.email}
        onChange={handleChange}
        className="w-full mb-6 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg shadow-sm"
      />

      <button
        onClick={next}
        className="w-full py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition text-lg"
      >
        Next
      </button>
    </div>
  );
};

export default Step1Profile;
