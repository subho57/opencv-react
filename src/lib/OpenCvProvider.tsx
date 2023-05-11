/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as React from 'react';

const OpenCvContext = React.createContext({ loaded: false, cv: undefined });

const { Consumer: OpenCvConsumer, Provider } = OpenCvContext;

export { OpenCvConsumer, OpenCvContext };

const scriptId = 'opencv-react';
const moduleConfig = {
  wasmBinaryFile: 'opencv_js.wasm',
  usingWasm: true,
  onRuntimeInitialized: () => {},
};

export const OpenCvProvider = ({
  openCvVersion = '4.7.0',
  openCvPath = '',
  children,
}: {
  openCvVersion?: string;
  openCvPath?: string;
  children: React.ReactNode;
}) => {
  const [cvInstance, setCvInstance] = React.useState({
    loaded: false,
    cv: undefined,
  });

  React.useEffect(() => {
    // @ts-ignore
    if (document.getElementById(scriptId) || window.cv) {
      return;
    }

    // https://docs.opencv.org/3.4/dc/de6/tutorial_js_nodejs.html
    // https://medium.com/code-divoire/integrating-opencv-js-with-an-angular-application-20ae11c7e217
    // https://stackoverflow.com/questions/56671436/cv-mat-is-not-a-constructor-opencv
    moduleConfig.onRuntimeInitialized = () => {
      // @ts-ignore
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
