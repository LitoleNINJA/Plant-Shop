import { Box, Image, Button, Heading } from "native-base";
import bg from "../../assets/bg.jpg";

const WelcomeScreen = ({ navigation }) => {
  return (
    <Box>
        <Image source={bg} alt="bg" resizeMode="cover" />
        <Box position="absolute" top="60%" zIndex="10" size="100%">
            <Heading color="white" fontSize="5xl" textAlign="center" px="10" fontWeight="400">Plant a tree for LIFE</Heading>
            <Button colorScheme="indigo" mt="8" mx="auto" size="md" rounded="full" p="5" bold
            onPress={() => navigation.navigate('Home')}>GO</Button>
        </Box>
    </Box>
  )
}

export default WelcomeScreen