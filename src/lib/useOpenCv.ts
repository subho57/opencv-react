import { useContext } from 'react';

import { OpenCvContext } from './OpenCvProvider';

export const useOpenCv = () => useContext(OpenCvContext);
