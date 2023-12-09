import { BaseDatabase } from "../BaseDatabase";
import { FoodDatabase } from "../FoodDatabase";
import { DrinkDatabase } from "../DrinkDatabase";
import { WineDatabase } from "../WineDatabase";
import { OrderDatabase } from "../OrderDatabase";
import { drinksSeed, foodsSeed, winesSeed } from "./data";

class Migrations extends BaseDatabase {

  createTables = async () => {
    await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS ${OrderDatabase.TABLE_ORDERS};
        DROP TABLE IF EXISTS ${FoodDatabase.TABLE_FOODS};
        DROP TABLE IF EXISTS ${DrinkDatabase.TABLE_DRINKS};
        DROP TABLE IF EXISTS ${WineDatabase.TABLE_WINES};
        DROP TABLE IF EXISTS ${OrderDatabase.TABLE_ORDER_ITEMS};

        CREATE TABLE IF NOT EXISTS ${FoodDatabase.TABLE_FOODS} (
            id VARCHAR(255) PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            descricao TEXT,
            valor DECIMAL(3,2) NOT NULL,
            imagem_url VARCHAR(255),
            tipo VARCHAR(255) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${DrinkDatabase.TABLE_DRINKS} (
            id VARCHAR(255) PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            descricao TEXT,
            valor DECIMAL(3,2) NOT NULL,
            imagem_url VARCHAR(255),
            tipo VARCHAR(255) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${WineDatabase.TABLE_WINES} (
            id VARCHAR(255) PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            descricao TEXT,
            valor DECIMAL(3,2) NOT NULL,
            imagem_url VARCHAR(255),
            tipo VARCHAR(255) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${OrderDatabase.TABLE_ORDER_ITEMS} (
          id VARCHAR(255) PRIMARY KEY
        );

        CREATE TABLE IF NOT EXISTS ${OrderDatabase.TABLE_ORDER_ITEMS} (
            id VARCHAR(255) PRIMARY KEY,
            item_id VARCHAR(255) NOT NULL,
            item_type VARCHAR(255) NOT NULL,
            quantity INT,
            order_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (item_id) REFERENCES ${FoodDatabase.TABLE_FOODS}(id),
            FOREIGN KEY (item_id) REFERENCES ${DrinkDatabase.TABLE_DRINKS}(id),
            FOREIGN KEY (item_id) REFERENCES ${WineDatabase.TABLE_WINES}(id),
            FOREIGN KEY (order_id) REFERENCES ${OrderDatabase.TABLE_ORDERS}(id)
        );
       `);
  };

  insertData = async () => {
    await BaseDatabase.connection(FoodDatabase.TABLE_FOODS).insert(
      foodsSeed
    );

    await BaseDatabase.connection(DrinkDatabase.TABLE_DRINKS).insert(
      drinksSeed
    );

    await BaseDatabase.connection(WineDatabase.TABLE_WINES).insert(
      winesSeed
    );

  }

  execute = async () => {
    await this.createTables();
    await this.insertData();
  };
}

const migrations = new Migrations();
migrations.execute();
