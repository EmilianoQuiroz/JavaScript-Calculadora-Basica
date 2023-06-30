
-- Creacion de la tabla de USUARIOS --
USE delivery_app;

CREATE TABLE users(
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(180) NOT NULL UNIQUE,
    name VARCHAR(90) NOT NULL,
    lastname VARCHAR(90) NOT NULL,
    phone VARCHAR(90) NOT NULL UNIQUE,
    image VARCHAR(255) NULL,
    password VARCHAR(98) NOT NULL,
    create_at TIMESTAMP(0) NOT NULL,
    update_at TIMESTAMP(0) NOT NULL
);

-- Creacion de los ROLES DE USUARIO --
USE delivery_app;

CREATE TABLE roles(
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(90) NOT NULL UNIQUE,
	image VARCHAR(255) NULL,
    route VARCHAR(180) NOT NULL,
    create_at TIMESTAMP(0) NOT NULL,
    update_at TIMESTAMP(0) NOT NULL
);

INSERT INTO roles(
	name,
    route,
    create_at,
    update_at
)
VALUES(
	'RESTAURANTE',
    '/restaurant/orders/list',
    '2023-06-11',
    '2023-06-11'
);

INSERT INTO roles(
	name,
    route,
    create_at,
    update_at
)
VALUES(
	'REPARTIDOR',
    '/delivery/orders/list',
    '2023-06-11',
    '2023-06-11'
);

INSERT INTO roles(
	name,
    route,
    create_at,
    update_at
)
VALUES(
	'CLIENTE',
    '/client/products/list',
    '2023-06-11',
    '2023-06-11'
);


CREATE TABLE user_has_roles(
	id_user BIGINT NOT NULL,
    id_rol BIGINT NOT NULL,    
    create_at TIMESTAMP(0) NOT NULL,
    update_at TIMESTAMP(0) NOT NULL,
    FOREIGN KEY(id_user) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY(id_rol) REFERENCES roles(id) ON UPDATE CASCADE ON DELETE CASCADE,
    PRIMARY KEY(id_user, id_rol)
);

-- Creacion de la tabla CATEGORIAS --
CREATE TABLE categories(
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(180) NOT NULL,
    description TEXT NOT NULL,
    create_at TIMESTAMP(0) NOT NULL,
    update_at TIMESTAMP(0) NOT NULL
);