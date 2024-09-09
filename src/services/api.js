import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3333"
})

// Intercepta a resposta
axios.interceptors.response.use(
    function (response) {
      // Qualquer código de status de 2xx faz com que esta função seja acionada
      console.log('Resposta recebida!', response);
      
      // Faça algo com os dados da resposta
      return response;
    },
    function (error) {
      // Qualquer código de status que não esteja na faixa de 2xx faz com que esta função seja acionada
      console.error('Erro na resposta:', error.response);
      
      // Exemplo: Verifica se o token expirou e redireciona para a página de login
      if (error.response.status === 401) {
        // Redirecionar para a página de login
        window.location.href = '/login';
      }
  
      return Promise.reject(error);
    }
  );
  