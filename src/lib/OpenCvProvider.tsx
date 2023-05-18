/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { CV } from 'mirada';
import * as React from 'react';

const OpenCvContext = React.createContext<{ loaded: boolean; cv?: CV }>({ loaded: false, cv: undefined });

const { Consumer: OpenCvConsumer, Provider } = OpenCvContext;

export { OpenCvConsumer, OpenCvContext };

const scriptId = 'opencv-react';
const moduleConfig = {
  wasmBinaryFile: 'opencv_js.wasm',
  usingWasm: true,
  onRuntimeInitialized: () => {},
};

export interface IOpenCvProviderProps {
  openCvVersion?: string;
  openCvPath?: string;
  children: React.ReactNode;
}

export const OpenCvProvider: React.FC<IOpenCvProviderProps> = ({ openCvVersion = '5.x', openCvPath = '', children }) => {
  const [cvInstance, setCvInstance] = React.useState<{ loaded: boolean; cv?: CV }>({
    loaded: false,
    cv: undefined,
  });

  React.useEffect(() => {
    if (document.getElementById(scriptId) || window.cv) {
      setCvInstance({ loaded: true, cv: window.cv });
      return;
    }

    // https://docs.opencv.org/3.4/dc/de6/tutorial_js_nodejs.html
    // https://medium.com/code-divoire/integrating-opencv-js-with-an-angular-application-20ae11c7e217
    // https://stackoverflow.com/questions/56671436/cv-mat-is-not-a-constructor-opencv
    moduleConfig.onRuntimeInitialized = () => {
      setCvInstance({ loaded: true, cv: window.cv });
    };
    // @ts-ignore
    window.Module = moduleConfig;

    const generateOpenCvScriptTag = () => {
      const js = document.createElement('script');
      js.id = scriptId;
      js.src = openCvPath || `https://docs.opencv.org/${openCvVersion}/opencv.js`;

      js.nonce = 'true';
      js.defer = true;
      js.async = true;

      return js;
    };

    document.body.appendChild(generateOpenCvScriptTag());
  }, [openCvPath, openCvVersion]);

  return <Provider value={cvInstance}>{children}</Provider>;
};
