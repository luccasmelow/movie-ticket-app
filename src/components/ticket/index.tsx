import { View, Text, TouchableOpacity, Image } from "react-native";
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { Info } from "./info";

type Props = {
    title: string;
    audio: string;
    date: string;
    image: string;
    time: string;
    cinema: string;
    location: string;
    section: string;
    seat: string;
    cost: string;
    orderId: string;
    onPress: () => void;
};

export function TicketMovie({title, audio, date, time, cinema, location, section, seat, cost, orderId, image, onPress}: Props){
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.content}>
                <View>
                    <Image source={{ uri: image }} style={styles.image} />
                </View>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.details}>
                    Mostre este ingresso na entrada
                </Text>
            </View>

            <View style={styles.infoContainer}>
                <Info label="Cinema" value={cinema} />
                <Info label="Localização" value={location} />
                <Info label="Data" value={date} />
                <Info label="Horário" value={time} />
                <Info label="Seção" value={section} />
                <Info label="Assento" value={seat} />
                <Info label="Custo" value={cost} />
                <Info label="ID do pedido" value={orderId} />
            </View>

            
            <View style={styles.dashedLineContainer}>
                <View style={styles.circle} />
                <View style={styles.dashedLine} />
                <View style={styles.circle} />
            </View>
            <View style={styles.movie}>
                <Image 
                    source={require('../../../assets/codebar.png')} 
                    defaultSource={require('../../../assets/codebar.png')} 
                    style={styles.code}
                />


            </View>

            
        </TouchableOpacity>
    );
}

