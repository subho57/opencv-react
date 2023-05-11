import * as React from 'react';
declare const OpenCvContext: React.Context<{
    loaded: boolean;
    cv?: typeof import("mirada/dist/src/types/opencv/_types") | undefined;
}>;
declare const OpenCvConsumer: React.Consumer<{
    loaded: boolean;
    cv?: typeof import("mirada/dist/src/types/opencv/_types") | undefined;
}>;
export { OpenCvConsumer, OpenCvContext };
export interface IOpenCvProviderProps {
    openCvVersion?: string;
    openCvPath?: string;
    children: React.ReactNode;
}
export declare const OpenCvProvider: React.FC<IOpenCvProviderProps>;
