import { useState } from "react";
import { FormProvider } from "./context/FormContext";
import Step1Profile from "./components/Step1Profile";
import Step2Experience from "./components/Step2Experience";
import ReviewSubmit from "./components/ReviewSubmit";

const App = () => {
  const [step, setStep] = useState<number>(1);

  return (
    <FormProvider>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-4">
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-10 flex flex-col items-center">
          <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
            Multi-Step Registration
          </h1>

          {step === 1 && <Step1Profile next={() => setStep(2)} />}
          {step === 2 && (
            <Step2Experience next={() => setStep(3)} back={() => setStep(1)} />
          )}
          {step === 3 && <ReviewSubmit back={() => setStep(2)} />}
        </div>
      </div>
    </FormProvider>
  );
};

export default App;
