define({ "api": [
  {
    "type": "get",
    "url": "/api/restaurante",
    "title": "Api de busca completa dos restaurantes por nome",
    "group": "Api_Completa",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>nome a ser buscado</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "json",
            "description": "<p>Json do restaurante com as informações completas</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n {\n        \"restauranteId\": \"1\",\n        \"nomeRestaurante\": \"Sabor do Acre\",\n        \"horarioFuncionamento\": \"18h às 23h\",\n        \"diasFuncionamento\": \"Seg à Sáb\",\n        \"localizacao\": \"Rua alvorada, 25, Bosque\",\n        \"formasPagamento\": \"Cartões de crédito, débito, em dinheiro e pix\",\n        \"menu\": [\n            {\n                \"menuId\": \"1\",\n                \"restauranteId\": \"1\",\n                \"tituloMenu\": \"Café da manhã\",\n                \"pratos\": [\n                    {\n                        \"itemId\": \"1\",\n                        \"menuId\": \"1\",\n                        \"categoriaItem\": \"Café\",\n                        \"nome\": \"Baixaria\",\n                        \"valorItem\": \"R$13,00\"\n                    },\n                    {\n                        \"itemId\": \"2\",\n                        \"menuId\": \"1\",\n                        \"categoriaItem\": \"Café\",\n                        \"nome\": \"Misto quente\",\n                        \"valorItem\": \"R$10,00\"\n                    },\n                    {\n                        \"itemId\": \"3\",\n                        \"menuId\": \"1\",\n                        \"categoriaItem\": \"Almoço\",\n                        \"nome\": \"Sopa Feijão\",\n                        \"valorItem\": \"R$23,00\"\n                    }\n                ]\n            }\n        ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes/apiRoutes.js",
    "groupTitle": "Api_Completa",
    "name": "GetApiRestaurante"
  },
  {
    "type": "get",
    "url": "/api/restaurante/:id",
    "title": "Api de busca completa dos restaurantes por id",
    "group": "Api_Completa",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>id do restaurante a ser buscado</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "json",
            "description": "<p>Json do restaurante com as informações completas</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n {\n        \"restauranteId\": \"1\",\n        \"nomeRestaurante\": \"Sabor do Acre\",\n        \"horarioFuncionamento\": \"18h às 23h\",\n        \"diasFuncionamento\": \"Seg à Sáb\",\n        \"localizacao\": \"Rua alvorada, 25, Bosque\",\n        \"formasPagamento\": \"Cartões de crédito, débito, em dinheiro e pix\",\n        \"menu\": [\n            {\n                \"menuId\": \"1\",\n                \"restauranteId\": \"1\",\n                \"tituloMenu\": \"Café da manhã\",\n                \"pratos\": [\n                    {\n                        \"itemId\": \"1\",\n                        \"menuId\": \"1\",\n                        \"categoriaItem\": \"Café\",\n                        \"nome\": \"Baixaria\",\n                        \"valorItem\": \"R$13,00\"\n                    },\n                    {\n                        \"itemId\": \"2\",\n                        \"menuId\": \"1\",\n                        \"categoriaItem\": \"Café\",\n                        \"nome\": \"Misto quente\",\n                        \"valorItem\": \"R$10,00\"\n                    },\n                    {\n                        \"itemId\": \"3\",\n                        \"menuId\": \"1\",\n                        \"categoriaItem\": \"Almoço\",\n                        \"nome\": \"Sopa Feijão\",\n                        \"valorItem\": \"R$23,00\"\n                    }\n                ]\n            }\n        ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes/apiRoutes.js",
    "groupTitle": "Api_Completa",
    "name": "GetApiRestauranteId"
  },
  {
    "type": "delete",
    "url": "/menu/:menuId",
    "title": "deletar menu por id",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "menuId",
            "description": "<p>id do menu</p>"
          }
        ]
      }
    },
    "group": "Menu",
    "version": "0.0.0",
    "filename": "./src/routes/menuRoutes.js",
    "groupTitle": "Menu",
    "name": "DeleteMenuMenuid"
  },
  {
    "type": "get",
    "url": "/menu/",
    "title": "buscar todos os menus",
    "group": "Menu",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lista",
            "description": "<p>lista de menus</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n [\n    {\n        \"menuId\": \"1\",\n        \"restauranteId\": \"1\",\n        \"tituloMenu\": \"Café da manhã\"\n    },\n    {\n        \"menuId\": \"2\",\n        \"restauranteId\": \"3\",\n        \"tituloMenu\": \"Almoço\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes/menuRoutes.js",
    "groupTitle": "Menu",
    "name": "GetMenu"
  },
  {
    "type": "get",
    "url": "/menu/:menuId",
    "title": "buscar menu por id",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "menuId",
            "description": "<p>id do menu</p>"
          }
        ]
      }
    },
    "group": "Menu",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "menuId",
            "description": "<p>id do menu</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "restauranteId",
            "description": "<p>id do menu</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tituloMenu",
            "description": "<p>titulo do menu</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n {\n        \"menuId\": \"2\",\n        \"restauranteId\": \"3\",\n        \"tituloMenu\": \"Almoço\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes/menuRoutes.js",
    "groupTitle": "Menu",
    "name": "GetMenuMenuid"
  },
  {
    "type": "patch",
    "url": "/menu/atualizar/:restauranteId",
    "title": "atualizar menu parcialmente",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "restauranteId",
            "description": "<p>id do restaurante</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tituloMenu",
            "description": "<p>nome do menu</p>"
          }
        ]
      }
    },
    "group": "Menu",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "menuId",
            "description": "<p>id do menu</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "restauranteId",
            "description": "<p>id do menu</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tituloMenu",
            "description": "<p>titulo do menu</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n  {\n        \"menuId\": \"2\",\n        \"restauranteId\": \"3\",\n        \"tituloMenu\": \"Almoço\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes/menuRoutes.js",
    "groupTitle": "Menu",
    "name": "PatchMenuAtualizarRestauranteid"
  },
  {
    "type": "post",
    "url": "/menu/cadastrar",
    "title": "criar menu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "restauranteId",
            "description": "<p>id do restaurante</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tituloMenu",
            "description": "<p>nome do restaurantes</p>"
          }
        ]
      }
    },
    "group": "Menu",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "menuId",
            "description": "<p>id do menu</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "restauranteId",
            "description": "<p>id do menu</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tituloMenu",
            "description": "<p>titulo do menu</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n  {\n        \"menuId\": \"2\",\n        \"restauranteId\": \"3\",\n        \"tituloMenu\": \"Almoço\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes/menuRoutes.js",
    "groupTitle": "Menu",
    "name": "PostMenuCadastrar"
  },
  {
    "type": "put",
    "url": "/menu/:menuId",
    "title": "substituir menu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "menuId",
            "description": "<p>id do restaurante</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "restauranteId",
            "description": "<p>id do restaurante</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tituloMenu",
            "description": "<p>nome do restaurantes</p>"
          }
        ]
      }
    },
    "group": "Menu",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "menuId",
            "description": "<p>id do menu</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "restauranteId",
            "description": "<p>id do menu</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tituloMenu",
            "description": "<p>titulo do menu</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n {\n        \"menuId\": \"2\",\n        \"restauranteId\": \"3\",\n        \"tituloMenu\": \"Almoço\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes/menuRoutes.js",
    "groupTitle": "Menu",
    "name": "PutMenuMenuid"
  },
  {
    "type": "delete",
    "url": "/api/menu/:itemId",
    "title": "remove prato pelo id",
    "group": "Pratos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "itemId",
            "description": "<p>id do menu do prato</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes/itensRoutes.js",
    "groupTitle": "Pratos",
    "name": "DeleteApiMenuItemid"
  },
  {
    "type": "get",
    "url": "/api/menu/:itemId",
    "title": "busca prato pelo id",
    "group": "Pratos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "itemId",
            "description": "<p>nome a ser buscado</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "json",
            "description": "<p>Json com as informações dos pratos</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n {\n        \"itemId\": \"1\",\n        \"menuId\": \"1\",\n        \"categoriaItem\": \"Café\",\n        \"nome\": \"Baixaria\",\n        \"valorItem\": \"R$13,00\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes/itensRoutes.js",
    "groupTitle": "Pratos",
    "name": "GetApiMenuItemid"
  },
  {
    "type": "get",
    "url": "/api/menu/nome",
    "title": "busca pratro pelo nome",
    "group": "Pratos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>nome a ser buscado</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "json",
            "description": "<p>Json com as informações dos pratos</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n [\n     {\n        \"itemId\": \"1\",\n        \"menuId\": \"1\",\n        \"categoriaItem\": \"Café\",\n        \"nome\": \"Baixaria\",\n        \"valorItem\": \"R$13,00\"\n    },\n    {\n        \"itemId\": \"2\",\n        \"menuId\": \"1\",\n        \"categoriaItem\": \"Café\",\n        \"nome\": \"Misto quente\",\n        \"valorItem\": \"R$10,00\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes/itensRoutes.js",
    "groupTitle": "Pratos",
    "name": "GetApiMenuNome"
  },
  {
    "type": "get",
    "url": "/pratos/",
    "title": "buscar todos os menus",
    "group": "Pratos",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lista",
            "description": "<p>lista de menus</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n [\n     {\n        \"itemId\": \"1\",\n        \"menuId\": \"1\",\n        \"categoriaItem\": \"Café\",\n        \"nome\": \"Baixaria\",\n        \"valorItem\": \"R$13,00\"\n    },\n    {\n        \"itemId\": \"2\",\n        \"menuId\": \"1\",\n        \"categoriaItem\": \"Café\",\n        \"nome\": \"Misto quente\",\n        \"valorItem\": \"R$10,00\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes/itensRoutes.js",
    "groupTitle": "Pratos",
    "name": "GetPratos"
  },
  {
    "type": "patch",
    "url": "/api/menu/atualizar/:itemId",
    "title": "atualizar prato",
    "group": "Pratos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "itemId",
            "description": "<p>id do prato</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "menuId",
            "description": "<p>id do menu do prato</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoriaItem",
            "description": "<p>categoria do prato</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>do prato</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "valoritem",
            "description": "<p>valor individual do prato</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "json",
            "description": "<p>Json com as informações dos pratos</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes/itensRoutes.js",
    "groupTitle": "Pratos",
    "name": "PatchApiMenuAtualizarItemid"
  },
  {
    "type": "post",
    "url": "/api/menu/cadastrar",
    "title": "cadastra prato",
    "group": "Pratos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "menuId",
            "description": "<p>id do menu do prato</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoriaItem",
            "description": "<p>categoria do prato</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>do prato</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "valoritem",
            "description": "<p>valor individual do prato</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "json",
            "description": "<p>Json com as informações dos pratos</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 201 CREATED",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes/itensRoutes.js",
    "groupTitle": "Pratos",
    "name": "PostApiMenuCadastrar"
  },
  {
    "type": "put",
    "url": "/api/menu/:itemId",
    "title": "substituir o prato",
    "group": "Pratos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "itemId",
            "description": "<p>id do prato</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "menuId",
            "description": "<p>id do menu do prato</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoriaItem",
            "description": "<p>categoria do prato</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>do prato</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "valoritem",
            "description": "<p>valor individual do prato</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "json",
            "description": "<p>Json com as informações dos pratos</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes/itensRoutes.js",
    "groupTitle": "Pratos",
    "name": "PutApiMenuItemid"
  },
  {
    "type": "delete",
    "url": "/restaurantes/:restauranteId",
    "title": "deletar restaurante por id",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "restauranteId",
            "description": "<p>id do restaurante</p>"
          }
        ]
      }
    },
    "group": "Restaurantes",
    "version": "0.0.0",
    "filename": "./src/routes/restaurantesRoutes.js",
    "groupTitle": "Restaurantes",
    "name": "DeleteRestaurantesRestauranteid"
  },
  {
    "type": "get",
    "url": "/restaurantes/",
    "title": "buscar todos os restaurantes",
    "group": "Restaurantes",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lista",
            "description": "<p>lista de restaurantes</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n [\n    {\n        \"restauranteId\": \"1\",\n        \"nomeRestaurante\": \"Sabor do Acre\",\n        \"horarioFuncionamento\": \"18h às 23h\",\n        \"diasFuncionamento\": \"Seg à Sáb\",\n        \"localizacao\": \"Rua alvorada, 25, Bosque\",\n        \"formasPagamento\": \"Cartões de crédito, débito, em dinheiro e pix\"\n    },\n    {\n        \"restauranteId\": \"2\",\n        \"nomeRestaurante\": \"Sabor do Sul\",\n        \"horarioFuncionamento\": \"18h às 20h\",\n        \"diasFuncionamento\": \"Seg à Sex\",\n        \"localizacao\": \"Rua gavião, 42, Floresta\",\n        \"formasPagamento\": \"Cartões de crédito, débito, em dinheiro e pix\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes/restaurantesRoutes.js",
    "groupTitle": "Restaurantes",
    "name": "GetRestaurantes"
  },
  {
    "type": "get",
    "url": "/restaurantes/:restauranteId",
    "title": "buscar restaurante por id",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "restauranteId",
            "description": "<p>id do restaurante</p>"
          }
        ]
      }
    },
    "group": "Restaurantes",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "restauranteId",
            "description": "<p>id do restaurantes</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nomeRestaurante",
            "description": "<p>nome do restaurantes</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "horarioFuncionamento",
            "description": "<p>horarios de funcionamento do restaurantes</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "diasFuncionamento",
            "description": "<p>dias de funcionamento do restaurantes</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "localizacao",
            "description": "<p>endereço do restaurantes</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "formasPagamento",
            "description": "<p>formade de pagamento aceitas no restaurantes</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n {\n    \"restauranteId\": \"1\",\n    \"nomeRestaurante\": \"Sabor do Acre\",\n    \"horarioFuncionamento\": \"18h às 23h\",\n    \"diasFuncionamento\": \"Seg à Sáb\",\n    \"localizacao\": \"Rua alvorada, 25, Bosque\",\n    \"formasPagamento\": \"Cartões de crédito, débito, em dinheiro e pix\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes/restaurantesRoutes.js",
    "groupTitle": "Restaurantes",
    "name": "GetRestaurantesRestauranteid"
  },
  {
    "type": "patch",
    "url": "/restaurantes/atualizar/:restauranteId",
    "title": "atualizar restaurante parcialmente",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "restauranteId",
            "description": "<p>id do restaurante</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nomeRestaurante",
            "description": "<p>nome do restaurantes</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "horarioFuncionamento",
            "description": "<p>horarios de funcionamento do restaurantes</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "diasFuncionamento",
            "description": "<p>dias de funcionamento do restaurantes</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "localizacao",
            "description": "<p>endereço do restaurantes</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "formasPagamento",
            "description": "<p>formade de pagamento aceitas no restaurantes</p>"
          }
        ]
      }
    },
    "group": "Restaurantes",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "restauranteId",
            "description": "<p>id do restaurantes</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nomeRestaurante",
            "description": "<p>nome do restaurantes</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "horarioFuncionamento",
            "description": "<p>horarios de funcionamento do restaurantes</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "diasFuncionamento",
            "description": "<p>dias de funcionamento do restaurantes</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "localizacao",
            "description": "<p>endereço do restaurantes</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "formasPagamento",
            "description": "<p>formade de pagamento aceitas no restaurantes</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n {\n    \"restauranteId\": \"1\",\n    \"nomeRestaurante\": \"Sabor do Acre\",\n    \"horarioFuncionamento\": \"18h às 23h\",\n    \"diasFuncionamento\": \"Seg à Sáb\",\n    \"localizacao\": \"Rua alvorada, 25, Bosque\",\n    \"formasPagamento\": \"Cartões de crédito, débito, em dinheiro e pix\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes/restaurantesRoutes.js",
    "groupTitle": "Restaurantes",
    "name": "PatchRestaurantesAtualizarRestauranteid"
  },
  {
    "type": "post",
    "url": "/restaurantes/cadastrar",
    "title": "criar restaurante",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "restauranteId",
            "description": "<p>id do restaurantes</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nomeRestaurante",
            "description": "<p>nome do restaurantes</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "horarioFuncionamento",
            "description": "<p>horarios de funcionamento do restaurantes</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "diasFuncionamento",
            "description": "<p>dias de funcionamento do restaurantes</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "localizacao",
            "description": "<p>endereço do restaurantes</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "formasPagamento",
            "description": "<p>formade de pagamento aceitas no restaurantes</p>"
          }
        ]
      }
    },
    "group": "Restaurantes",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "restauranteId",
            "description": "<p>id do restaurantes</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nomeRestaurante",
            "description": "<p>nome do restaurantes</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "horarioFuncionamento",
            "description": "<p>horarios de funcionamento do restaurantes</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "diasFuncionamento",
            "description": "<p>dias de funcionamento do restaurantes</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "localizacao",
            "description": "<p>endereço do restaurantes</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "formasPagamento",
            "description": "<p>formade de pagamento aceitas no restaurantes</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n {\n    \"restauranteId\": \"1\",\n    \"nomeRestaurante\": \"Sabor do Acre\",\n    \"horarioFuncionamento\": \"18h às 23h\",\n    \"diasFuncionamento\": \"Seg à Sáb\",\n    \"localizacao\": \"Rua alvorada, 25, Bosque\",\n    \"formasPagamento\": \"Cartões de crédito, débito, em dinheiro e pix\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes/restaurantesRoutes.js",
    "groupTitle": "Restaurantes",
    "name": "PostRestaurantesCadastrar"
  },
  {
    "type": "put",
    "url": "/restaurantes/:restauranteId",
    "title": "substituir restaurante",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "restauranteId",
            "description": "<p>id do restaurante</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nomeRestaurante",
            "description": "<p>nome do restaurantes</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "horarioFuncionamento",
            "description": "<p>horarios de funcionamento do restaurantes</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "diasFuncionamento",
            "description": "<p>dias de funcionamento do restaurantes</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "localizacao",
            "description": "<p>endereço do restaurantes</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "formasPagamento",
            "description": "<p>formade de pagamento aceitas no restaurantes</p>"
          }
        ]
      }
    },
    "group": "Restaurantes",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "restauranteId",
            "description": "<p>id do restaurantes</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nomeRestaurante",
            "description": "<p>nome do restaurantes</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "horarioFuncionamento",
            "description": "<p>horarios de funcionamento do restaurantes</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "diasFuncionamento",
            "description": "<p>dias de funcionamento do restaurantes</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "localizacao",
            "description": "<p>endereço do restaurantes</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "formasPagamento",
            "description": "<p>formade de pagamento aceitas no restaurantes</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n {\n    \"restauranteId\": \"1\",\n    \"nomeRestaurante\": \"Sabor do Acre\",\n    \"horarioFuncionamento\": \"18h às 23h\",\n    \"diasFuncionamento\": \"Seg à Sáb\",\n    \"localizacao\": \"Rua alvorada, 25, Bosque\",\n    \"formasPagamento\": \"Cartões de crédito, débito, em dinheiro e pix\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes/restaurantesRoutes.js",
    "groupTitle": "Restaurantes",
    "name": "PutRestaurantesRestauranteid"
  },
  {
    "type": "get",
    "url": "/",
    "title": "raiz do projeto",
    "group": "Sistema",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>titulo do Sistema</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>titulo do Sistema</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>titulo do Sistema</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n {\n   titulo: 'RestaurantesMenu',\n   versao: '1.0.0',\n   mensagem: \"Bem vindos ao Meu Restaurante\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes/index.js",
    "groupTitle": "Sistema",
    "name": "Get"
  }
] });
