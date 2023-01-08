import { Text, Box, IconButton, VStack, Image } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import PlantCarousel from '../components/PlantCarousel';

const Plant = ({ route, navigation }) => {
  const id = route.params.id;
  const plants = [
    {
      id: 1,
      name: "Croton",
      img: require("../../assets/plants/Croton.jpg"),
    },
    {
      id: 2,
      name: "Lemon Lime",
      img: require("../../assets/plants/Lemon-Lime.jpg"),
    },
    {
      id: 3,
      name: "Moth Orchid",
      img: require("../../assets/plants/Moth-Orchid.jpg"),
    },
    {
      id: 4,
      name: "Anthurium",
      img: require("../../assets/plants/Anthurium.jpg"),
    },
    {
      id: 5,
      name: "Golden Pothos",
      img: require("../../assets/plants/Golden-Pothos.jpg"),
    },
    {
      id: 6,
      name: "Lucky Bamboo",
      img: require("../../assets/plants/Lucky-Bamboo.jpg"),
    },
  ]

  const [liked, setLiked] = useState(false);

  return (
    <VStack safeArea p="6" bg="white" height="100%">
      {/* Deatils and navigation */}
      <Box flexDirection="row" justifyContent="space-between" alignItems="center" >
        <IconButton 
          icon={<Ionicons name="arrow-back" size={20} color="black" />} 
          borderRadius="full"
          borderWidth="2"
          borderColor="gray.400"
          _pressed={{ bg: "gray.400" }}
          _hover={{ bg: "gray.400" }}
          onPress={() => navigation.goBack()} />
        <Text fontSize="xl" fontWeight="bold" color="gray.600">Details</Text>
        <IconButton 
          icon={liked ? <Ionicons name="heart" size={20} color="red"  /> : <Ionicons name="heart-outline" size={20} color="black" />} 
          borderRadius="full"
          borderWidth="2"
          borderColor={liked ? "red.400" : "gray.400"}
          _pressed={{ bg: "red.300" }}
          _hover={{ bg: "red.300" }}
          onPress={() => setLiked(!liked)}
          />
      </Box>

      {/* Plant Image */}
      <Box mt="8">
        <PlantCarousel />
      </Box>
    </VStack>
  )
}

export default Plant;