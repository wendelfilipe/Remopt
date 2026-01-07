
export const useQRCodeScan = async (navigation: any, value: string) => {
    console.log('QR LIDO:', value);
    // aqui você pode navegar, salvar, chamar API, etc
    
    const id = Number(value.split(':')[1].trim())
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if(!response.ok){
      throw new Error('Erro na requisição');
    }

    const data = await response.json();

    navigation.navigate("ExibitionScreen", {data: data})

  };