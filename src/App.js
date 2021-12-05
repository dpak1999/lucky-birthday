/** @format */

import { useState } from 'react';
import InputField from './components/InputField';
import SocialLinks from './components/SocialLinks';

const App = () => {
  const [privacy, setPrivacy] = useState(true);

  return (
    <div className="min-h-screen bg-purple-200 ">
      <h1 className="text-2xl font-bold font-mono text-center pt-4 underline mb-3">
        Is your Birthday lucky
      </h1>
      <div className="text-center">
        {privacy && (
          <span className="px-4 py-2 rounded-sm font-mono text-lg border border-red-500">
            Privacy Policy : We are not storing your data{' '}
            <button onClick={() => setPrivacy(false)}>
              <span className="text-red-600 font-extrabold text-xl">x</span>
            </button>
          </span>
        )}

        <InputField />
        <SocialLinks />
      </div>
    </div>
  );
};

export default App;
