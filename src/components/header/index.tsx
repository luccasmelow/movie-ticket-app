import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';

type Props = {
    title: string;
};

export function Header({title}: Props){
    return(
        <View style={styles.container}>
            
            <View style={styles.placeholder} />
            <Text style={styles.title}>
                {title}
            </Text>

            <View style={styles.placeholder} />

        </View>
    );
}