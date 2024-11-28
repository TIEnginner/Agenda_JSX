const express = require('express');
const cors = require('cors');
const fs = require('fs');  // Módulo fs para escrever no sistema de arquivos
const app = express();
const port = 8000;

// Middleware para habilitar CORS e processar JSON
app.use(cors());  // Permite que o servidor aceite requisições de diferentes origens
app.use(express.json());  // Middleware para processar corpo JSON nas requisições POST

// Rota para processar o envio dos dados
app.post('/enviar', (req, res) => {
    const dados = req.body;
    console.log('Dados recebidos:', dados);  // Aqui você pode ver os dados no servidor

    // Salvar os dados em um arquivo JSON
    fs.readFile('dados.json', (err, data) => {
        if (err && err.code === 'ENOENT') {
            // Se o arquivo não existir, cria um novo array de dados
            fs.writeFile('dados.json', JSON.stringify([dados], null, 2), (err) => {
                if (err) {
                    console.error('Erro ao salvar dados no arquivo:', err);
                    return res.status(500).json({ message: 'Erro ao salvar dados no servidor.' });
                }
                res.json({ message: 'Dados recebidos e salvos com sucesso!' });
            });
        } else if (err) {
            console.error('Erro ao ler o arquivo:', err);
            return res.status(500).json({ message: 'Erro ao processar dados no servidor.' });
        } else {
            // Se o arquivo já existir, adiciona os novos dados ao arquivo
            const dadosExistentes = JSON.parse(data);
            dadosExistentes.push(dados);

            fs.writeFile('dados.json', JSON.stringify(dadosExistentes, null, 2), (err) => {
                if (err) {
                    console.error('Erro ao salvar dados no arquivo:', err);
                    return res.status(500).json({ message: 'Erro ao salvar dados no servidor.' });
                }
                res.json({ message: 'Dados recebidos e salvos com sucesso!' });
            });
        }
    });
});

// Inicia o servidor na porta 8000
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
