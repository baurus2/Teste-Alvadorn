# 
<div align="center">
<img src="https://avatars.githubusercontent.com/u/128823772?s=200&v=4" width="200px" />
</div>

<h2> <p align="center">Um pequeno desafio proposto pela Alvadorn. </p></h2>
 
<h1><p align="center"> 🖋 Documentação da API de Atividades Esportivas</p></h1>

 <a href="https://documenter.getpostman.com/view/19734677/2sA3e1CVwu#intro">DOCUMENTAÇÃO</a> 

Descrição
A API permite realizar operações de CRUD (Create, Read, Update, Delete) para atividades esportivas. A API utiliza um banco de dados SQLite para armazenar os dados de atividades esportivas. Cada atividade esportiva contém os seguintes atributos:

*Identificador   
*Nome da Atividade  
*Detalhe da Atividade  
*Tipo de Atividade Esportiva (corrida, ciclismo, musculação, ...)  
*Kilometragem Percorrida  
*Esforço Realizado  


##Endpoints##
1. Listar Todas as Atividades
Endpoint: /api/activities
Método: GET

Descrição: Este endpoint retorna uma lista de todas as atividades esportivas cadastradas.

Exemplo de Requisição:

GET /api/activities

Exemplo de Resposta:

[  
    {  
        "id": 1,  
        "name": "Corrida",  
        "detail": "Corrida matinal no parque",  
        "type": "Corrida",  
        "distance": 5.0,  
        "effort": "Moderado",  
        "createdAt": "2024-07-08T12:00:00.000Z",  
        "updatedAt": "2024-07-08T12:00:00.000Z"  
    },  
    {  
        "id": 2,  
        "name": "Ciclismo",  
        "detail": "Passeio de bicicleta",  
        "type": "Ciclismo",  
        "distance": 20.0,  
        "effort": "Alto",  
        "createdAt": "2024-07-08T12:00:00.000Z",  
        "updatedAt": "2024-07-08T12:00:00.000Z"  
    }  
]  

2. Obter Dados de uma Única Atividade  
Endpoint: /api/activities/{id}  
Método: GET  

Descrição: Este endpoint retorna os dados de uma única atividade esportiva com base no ID fornecido.  

Parâmetros:  

id: Identificador da atividade esportiva.  
Exemplo de Requisição:  

GET /api/activities/1

Exemplo de Resposta:

{    
    "id": 1,  
    "name": "Corrida",  
    "detail": "Corrida matinal no parque",  
    "type": "Corrida",  
    "distance": 5.0,  
    "effort": "Moderado",  
    "createdAt": "2024-07-08T12:00:00.000Z",  
    "updatedAt": "2024-07-08T12:00:00.000Z"  
}  

3. Cadastrar uma Nova Atividade  
Endpoint: /api/activities  
Método: POST  

Descrição: Este endpoint permite cadastrar uma nova atividade esportiva.  

Corpo da Requisição:

{  
    "name": "Corrida",  
    "detail": "Corrida matinal no parque",  
    "type": "Corrida",  
    "distance": 5.0,  
    "effort": "Moderado"  
}  

Exemplo de Requisição:

POST /api/activities

Exemplo de Resposta:

{  
    "id": 1,  
    "name": "Corrida",  
    "detail": "Corrida matinal no parque",  
    "type": "Corrida",  
    "distance": 5.0,  
    "effort": "Moderado",  
    "createdAt": "2024-07-08T12:00:00.000Z",  
    "updatedAt": "2024-07-08T12:00:00.000Z"  
}  

4. Atualizar uma Atividade  
Endpoint: /api/activities/{id}  
Método: PUT  

Descrição: Este endpoint permite atualizar os dados de uma atividade esportiva existente com base no ID fornecido.

Parâmetros:

id: Identificador da atividade esportiva.  
Corpo da Requisição:  

{  
    "name": "Corrida Atualizada",  
    "detail": "Corrida matinal no parque - atualizado",  
    "type": "Corrida",  
    "distance": 6.0,  
    "effort": "Alto"  
}  

Exemplo de Requisição:

PUT /api/activities/1

Exemplo de Resposta:

{  
    "id": 1,  
    "name": "Corrida Atualizada",  
    "detail": "Corrida matinal no parque - atualizado",  
    "type": "Corrida",  
    "distance": 6.0,  
    "effort": "Alto",  
    "createdAt": "2024-07-08T12:00:00.000Z",  
    "updatedAt": "2024-07-08T12:00:00.000Z"  
}  

5. Deletar uma Atividade  
Endpoint: /api/activities/{id}  
Método: DELETE  

Descrição: Este endpoint permite deletar uma atividade esportiva existente com base no ID fornecido.

Parâmetros:

id: Identificador da atividade esportiva.

Exemplo de Requisição:

DELETE /api/activities/1

Exemplo de Resposta:

{
    "message": "Atividade deletada com sucesso"
}





