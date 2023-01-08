import { Box, Heading, VStack, Image, Text, Input, Icon, ScrollView } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import Wave from '../../assets/wave.png';
import CategorySlider from '../components/CategorySlider';
import PlantCard from '../components/PlantCard';

const HomeScreen = ({ navigation }) => {

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

  return (
    <VStack safeArea p="6" bg="white" height="100%">
      {/* Name */}
      <Box>
        <Heading fontSize="3xl" width="100%">Hi Ritwik <Image source={Wave} alt="wave" resizeMode="cover" /></Heading>
        <Text fontSize="lg">Find Your Perfect Plants</Text>
      </Box>

      {/* Search */}
      <Input placeholder="Search for Plants" width="100%" mt="8" borderRadius="10" py="3" px="1" fontSize="16" InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.500" as={<MaterialIcons name="search" />} />} InputRightElement={<Icon m="2" mr="3" size="6" color="gray.500" as={<MaterialIcons name="mic" />} />} />

      {/* Categories */}
      <CategorySlider />

      {/* Plants */}
      <ScrollView showsVerticalScrollIndicator={false} mt="8">
        <Box flexDirection="row" flexWrap="wrap" justifyContent="space-between" position="relative" >
          {plants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} navigation={navigation} />
          ))}
        </Box>
      </ScrollView>
    </VStack>
  )
}

export default HomeScreen