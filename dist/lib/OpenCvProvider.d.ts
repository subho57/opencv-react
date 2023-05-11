import * as React from 'react';
declare const OpenCvContext: React.Context<{
    loaded: boolean;
    cv: undefined;
}>;
declare const OpenCvConsumer: React.Consumer<{
    loaded: boolean;
    cv: undefined;
}>;
export { OpenCvConsumer, OpenCvContext };
export declare const OpenCvProvider: ({ openCvVersion, openCvPath, children, }: {
    openCvVersion?: string | undefined;
    openCvPath?: string | undefined;
    children: React.ReactNode;
}) => React.JSX.Element;
