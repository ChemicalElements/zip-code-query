import axios from "axios";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

interface ZipCodeResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
  erro?: boolean;
}

interface ZipCodeQueryData extends ZipCodeResponse {}

function useZipCodeQuery(initialZipCode?: string) {
  const [zipCode, setZipCode] = useState(initialZipCode);

  const useQueryReturn = useQuery<ZipCodeQueryData>({
    queryKey: ["zip_code_query", zipCode],
    queryFn: async () => {
      const { data } = await axios.get<ZipCodeResponse>(
        `https://viacep.com.br/ws/${zipCode}/json/`
      );

      if (data?.erro) throw new Error("Invalid zip code.");
      return data;
    },
    enabled: zipCode?.length === 8,
  });

  const updateQuery = (newZipCode: string) => {
    setZipCode(newZipCode);
  };

  return { ...useQueryReturn, updateQuery };
}

export { useZipCodeQuery };
