interface SessaoDTO {
    id: string;
    filme: string;
    sala: string;
    image: string;
    fileira: string;
    poltrona: number;
    data: string;
    sessao: string;
    valor: number;
    audio: 'Dublado' | 'Legendado'; 
  }
  
  export default SessaoDTO;