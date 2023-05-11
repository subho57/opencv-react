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
export declare const OpenCvProvider: ({ openCvVersion, openCvPath, children, }: {
    openCvVersion?: string | undefined;
    openCvPath?: string | undefined;
    children: React.ReactNode;
}) => React.JSX.Element;
