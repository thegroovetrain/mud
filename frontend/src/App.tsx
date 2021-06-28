import React from 'react';
import Terminal from 'react-console-emulator'

const commands = {
  echo: {
    description: 'Echo a passed string.',
    usage: 'echo <string>',
    fn: function () { 
      return `${Array.from(arguments).join(' ')}`
    }
  }
}

const App: React.FC<{}> = () => {
  return (
    <Terminal 
      commands={commands}
      welcomeMessage={'Welcome to the Terminal!'}
      promptLabel={'>'}
    />
  )
}

export default App;
