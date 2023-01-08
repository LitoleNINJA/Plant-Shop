import { Box, Button, FlatList } from 'native-base';
import { Text } from 'react-native';
import { useState } from 'react';

const CategorySlider = () => {
    const data = [
        { id: 1, name: "All" },
        { id: 2, name: "Popular" },
        { id: 3, name: "Indoor" },
        { id: 4, name: "Outdoor" },
        { id: 5, name: "Flowers" },
        { id: 6, name: "Fruits" },
        { id: 7, name: "Vegetables" }
    ];

    const [selectedCat, setSelectedCat] = useState(1);

    const renderItem = ({ item }) => (
        <Button 
            borderRadius="20" 
            variant="outline" 
            mr="4" 
            isPressed={selectedCat === item.id ? true : false}
            onPress={() => setSelectedCat(item.id)}
            _pressed={{
                borderColor: "black",
                borderWidth: 1.5,
                bg: "rgb(242, 242, 242)",
            }}>
                <Text colorScheme="black">{item.name}</Text>
        </Button>
    );

    return (
        <Box mt="8">
            <FlatList 
            data={data} 
            renderItem={renderItem} 
            keyExtractor={item => item.id} 
            horizontal
            showsHorizontalScrollIndicator={false}>
            </FlatList>
        </Box>
    )
}

export default CategorySlider