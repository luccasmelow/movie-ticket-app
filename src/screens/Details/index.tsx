import React, { useState, useEffect } from "react";
import { useRoute } from '@react-navigation/native';
import { Image, View, Text } from "react-native";
import { api } from "../../service/api";
import { styles } from './styles';
import { Info } from "../../components/ticket/info";
import SessaoDTO from "../../dto/SessaoDTO";
import { Header
 } from "../../components/header";
type RouteParamsProps = {
  ticketId?: string;
};

export function Details() {
  const route = useRoute();
  const { ticketId }: RouteParamsProps = route.params || { ticketId: undefined };
  const [ticketDetails, setTicketDetails] = useState<SessaoDTO | null>(null);

  async function fetchTicketDetails() {
    try {
      const response = await api.get(`/sessoes/${ticketId}`);
      setTicketDetails(response.data);
    } catch (error) {
      console.error('Erro ao buscar os detalhes do ticket:', error);
    }
  }

  useEffect(() => {
    fetchTicketDetails();
  }, [ticketId]);

  return (
    <View style={styles.container}>
     

      {ticketDetails ? (
        <>
          
          <Image source={{ uri: ticketDetails.image }} style={styles.image} />
          <View style={styles.content}>
            <Text style={styles.title}>{ticketDetails.filme}</Text>
            <Text style={styles.details}>Mostre este ingresso na entrada</Text>
          </View>

          <View style={styles.infoContainer}>
            <Info label="Cinema" value={ticketDetails.sala} />
            <Info label="Localização" value={ticketDetails.fileira} />
            <Info label="Data" value={ticketDetails.data} />
            <Info label="Horário" value={ticketDetails.sessao} />
            <Info label="Seção" value={ticketDetails.poltrona.toString()} />
            <Info label="Assento" value={ticketDetails.poltrona.toString()} />
            <Info label="Custo" value={ticketDetails.valor.toFixed(2)} />
            <Info label="ID do pedido" value={ticketDetails.id.toString()} />
          </View>
        </>
      ) : (
        <Text>Carregando detalhes do ticket...</Text>
      )}
    </View>
  );
}
