import { Box, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        TIME TRACKER
      </header>
      <Box padding='6' boxShadow='lg' bg='white'>
        <SkeletonCircle size='10' />
        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
    </div>
  );
}

export default App;
