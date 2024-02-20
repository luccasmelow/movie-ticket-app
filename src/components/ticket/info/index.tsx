import { View, Text} from "react-native";
import { styles } from './styles';

type Props={
    label: string;
    value: string;
}

export function Info({label, value}: Props) {
    return(
        <View style={styles.info}>
            <Text style={styles.label}>{label}:</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    )
}