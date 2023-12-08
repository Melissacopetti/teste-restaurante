import { BaseDatabase } from "../BaseDatabase";
import { FoodDataBase } from "../FoodDataBase";
import { DrinkDataBase } from "../DrinkDataBase";
import { WineDataBase } from "../WineDataBase";
import { OrderDatabase } from "../OrderDatabase";
import { drinksSeed, foodsSeed } from "./data";

class Migrations extends BaseDatabase {
  execute = async () => {
    try {
      console.log("Creating tables...");
      await this.createTables();
      console.log("Tables created successfully.");

      console.log("Populating tables...");
      await this.insertData();
      console.log("Tables populated successfully.");

      console.log("Migrations completed.");
    } catch (error) {
      console.log("FAILED! Error in migrations...");
      if (error instanceof Error) {
        console.log(error.message);
      }
    } finally {
      console.log("Ending connection...");
      BaseDatabase.connection.destroy();
      console.log("Connection closed graciously.");
    }
  };

  createTables = async () => {
    await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS ${OrderDatabase.TABLE_ORDERS};
        DROP TABLE IF EXISTS ${FoodDataBase.TABLE_FOODS};
        DROP TABLE IF EXISTS ${DrinkDataBase.TABLE_DRINKS};
        DROP TABLE IF EXISTS ${WineDataBase.TABLE_WINES};
        DROP TABLE IF EXISTS ${OrderDatabase.TABLE_ORDER_ITEMS};

        CREATE TABLE IF NOT EXISTS ${FoodDataBase.TABLE_FOODS} (
            id VARCHAR(255) PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            descricao TEXT,
            valor DECIMAL(3,2) NOT NULL,
            imagem_url VARCHAR(255),
            tipo VARCHAR(255) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${DrinkDataBase.TABLE_DRINKS} (
            id VARCHAR(255) PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            descricao TEXT,
            valor DECIMAL(3,2) NOT NULL,
            imagem_url VARCHAR(255),
            tipo VARCHAR(255) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${WineDataBase.TABLE_WINES} (
            id VARCHAR(255) PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            descricao TEXT,
            valor DECIMAL(3,2) NOT NULL,
            imagem_url VARCHAR(255),
            tipo VARCHAR(255) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${OrderDatabase.TABLE_ORDER_ITEMS} (
            id VARCHAR(255) PRIMARY KEY,
            item_id VARCHAR(255) NOT NULL,
            item_type VARCHAR(255) NOT NULL,
            quantity TINYINT,
            order_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (item_id) REFERENCES ${FoodDataBase.TABLE_FOODS}(id),
            FOREIGN KEY (item_id) REFERENCES ${DrinkDataBase.TABLE_DRINKS}(id),
            FOREIGN KEY (item_id) REFERENCES ${WineDataBase.TABLE_WINES}(id),
            FOREIGN KEY (order_id) REFERENCES ${OrderDatabase.TABLE_ORDERS}(id)
        );
       `);
  };

  insertData = async () => {
    await BaseDatabase.connection(FoodDataBase.TABLE_FOODS).insert(
      foodsSeed
    );

    await BaseDatabase.connection(DrinkDataBase.TABLE_DRINKS).insert(
      drinksSeed
    );

    await BaseDatabase.connection(DrinkDataBase.TABLE_DRINKS).insert(
      drinksSeed
    );

    
}

const migrations = new Migrations();
migrations.execute();
