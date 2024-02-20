import React, { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';

import { FlatList, View } from "react-native";
import { Header } from "../../components/header";
import { TicketMovie } from "../../components/ticket";
import { api } from "../../service/api";
import SessaoDTO from "../../dto/SessaoDTO";
import { styles } from './styles'

export function Ticket() {
  const [ticket, setTicket] = useState<SessaoDTO[]>([]);
  const { navigate } = useNavigation();

  async function fetchTicket() {
    try {
      const response = await api.get('/sessoes');
      setTicket(response.data);
    } catch (error) {
      console.error('Erro ao buscar o ticket:', error);
    }
  }

  useEffect(() => {
    fetchTicket();
  }, []);

  

  
  return (
    <View style={styles.container}>
      <Header title="Ticket" />

      <FlatList
      
        data={ticket}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TicketMovie
            title={item.filme}
            audio={item.audio}
            date={item.data}
            image={item.image}
            time={item.sessao}
            cinema={item.sala}
            location={item.fileira}
            section={item.poltrona.toString()}
            seat={item.poltrona.toString()}
            cost={item.valor.toFixed(2)}
            orderId={item.id.toString()}
            onPress={() => {
                console.log("ID do Ticket:", item.id);
                navigate('details', { ticketId: item.id });
              }}
            />
        )}
      />
    </View>
  );
}
