/** @format */

import InputField from './components/InputField';
import SocialLinks from './components/SocialLinks';

const App = () => {
  return (
    <div className="min-h-screen bg-purple-200">
      <h1 className="text-2xl font-bold font-mono text-center pt-4 underline">
        Is your Birthday lucky
      </h1>
      <div className="text-center">
        <InputField />
        <SocialLinks />
      </div>
    </div>
  );
};

export default App;
