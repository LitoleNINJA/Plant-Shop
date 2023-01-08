import { Center, Text, Image, Button } from 'native-base';

const PlantCard = ({ plant, navigation }) => {
    return (
        <Button width="46%" p={0} m="0" mb="8" borderRadius="3xl" bg="white" onPress={() => navigation.navigate('Plant', { id: plant.id })} 
        _pressed={{
            bg: "white"
        }} >
            <Center borderRadius="3xl" bg="#e8e8e8"  width="100%" justifyContent="flex-end" borderColor="gray.300" borderWidth={1} >
                <Image source={plant.img} alt={plant.name} borderRadius="3xl" width="40" height="40" />
                <Text fontSize="md" mt="5" bold>{plant.name}</Text>
                <Text fontSize="md" mt="2" mb="4" color="green.600">₹100</Text>
            </Center>
        </Button>
    )
}

export default PlantCard;