# opencv-react-ts

Originally forked from [giacomocerquone/opencv-react](https://github.com/giacomocerquone/opencv-react)

> Hooks-first minimal OpenCV wrapper for React.

[![NPM](https://img.shields.io/npm/v/opencv-react-ts.svg)](https://www.npmjs.com/package/opencv-react-ts) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<div id="description" />

It simplifies the import of this library and integrates it well with the React ecosystem.<br />
**Bear in mind** that the loading of the library, being huge, is done asynchronously. Of course you can listen with this lib when the loading has finished in order to execute some setup code.<br />
You have also access to a `loaded` state which is provided by the `OpenCvProvider` component

## Install

```bash
npm i opencv-react-ts
```

or

```bash
yarn add opencv-react-ts
```

## API

## `OpenCvProvider`

### Props

- **openCvPath**: string used to indicate where to load the OpenCv lib from (default to official cdn)
- **onLoad**: function that gets called whenever the library has finished loading (see the package [description](#description))

**Usage**:

```js
const MyApp = () => {
  return (
    <OpenCvProvider>
      <MyComponent />
    </OpenCvProvider>
  )
}
```

## `useOpenCv`

### Context object

```
{
  loaded: boolean, indicates if the opencv library is loaded (useful to show a spinner)
  cv: undefined or the OpenCV global instance (can also be found in window.cv)
}
```

```js
function MyComponent() {
  const { loaded, cv } = useOpenCv()

  useEffect(() => {
    if (cv) {
    }
  }, [cv])

  return <p>OpenCv React test</p>
}
```

## Quick Start

```javascript
function MyComponent() {
  const data = useOpenCv()
  console.log(data)
  return <p>OpenCv React test</p>
}

const App = () => {
  const onLoaded = (cv) => {
    console.log('opencv loaded', cv)
  }

  return (
    <OpenCvProvider onLoad={onLoaded} openCvPath='/opencv/opencv.js'>
      <MyComponent />
    </OpenCvProvider>
  )
}
```

**Check also the example folder**

## Projects that uses this lib

- [react-document-crop](https://subho57.github.io/react-document-crop/)

## License

MIT © [subho57](https://github.com/subho57)
