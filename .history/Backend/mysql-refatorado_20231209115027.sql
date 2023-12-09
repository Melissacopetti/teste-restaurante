CREATE TABLE comida (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    descricao TEXT,
    valor DECIMAL(10, 2) NOT NULL,
    imagem_url VARCHAR(255),
    tipo VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS bebidas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    descricao TEXT,
    valor DECIMAL(10, 2) NOT NULL,
    imagem_url VARCHAR(255),
    tipo VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS vinhos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    descricao TEXT,
    valor DECIMAL(10, 2) NOT NULL,
    imagem_url VARCHAR(255),
    tipo VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
);


CREATE TABLE IF NOT EXISTS pedidos_itens (
   id VARCHAR(255) PRIMARY KEY,
    item_name VARCHAR(255) NOT NULL,
    quantity TINYINT,
    order_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (item_name) REFERENCES comidas(nome),
    FOREIGN KEY (item_name) REFERENCES bebidas(nome),
    FOREIGN KEY (item_name) REFERENCES vinhos(nome),
    FOREIGN KEY (order_id) REFERENCES pedidos(id)
);