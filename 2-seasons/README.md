# React Seasons App

- Get the users physical location
- Determine the current month
- Change text and styling based on location + month

## Scripts

- `yarn start`
- `yarn build`

## Links

- `https://semantic-ui.com`
- `https://www.npmjs.com/package/semantic-ui-css-offline`
- `https://www.npmjs.com/package/faker`

## Packages

- `npm i semantic-ui-css-offline`
- `npm i faker`

## Deploy

**live link:** [click here](https://arifpro.github.io/Modern-React-with-Redux/2-seasons/build) or use this link `https://arifpro.github.io/Modern-React-with-Redux/2-seasons/build`

## Lifecycle (Class Component)

- constructor
- render
- componentDidMount (Content visible on screen) `useEffect(() => {}, []);`
- componentDidUpdate (Sit and wait for updates) `useEffect(() => {});`
- componentWillUnmount (Sit and wait until this component is not longer shown)

### useEffect(() => {}, [])

Pass the Empty [] Array as Second Argument to STOP useEffect to Run Again.
