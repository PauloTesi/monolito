import { Sequelize } from "sequelize-typescript";
import { ClientModel } from "./client.model";
import ClientRepository from "./client.repository";
import Id from "../../@shared/domain/value-object/id.value-object";
import Client from "../domain/client.entity";

describe("Client repository test", () => {
    let sequelize: Sequelize;

    beforeEach(async () => {
      sequelize = new Sequelize({
        dialect: "sqlite",
        storage: ":memory:",
        logging: false,
        sync: { force: true },
      });
  
      await sequelize.addModels([ClientModel]);
      await sequelize.sync();
    });
  
    afterEach(async () => {
      await sequelize.close();
    });

    it("should create a client", async () => {
        const client = new Client({
            id: new Id("1"),
            name: "Client 1",
            email: "x@email.com",
            address: "Address 1",
        });

        const repository = new ClientRepository();
        await repository.add(client);
        
        const clientDb = await ClientModel.findOne({ where: { id: "1" }});

        expect(clientDb).toBeDefined;
        expect(client.id.id).toEqual(clientDb.dataValues.id);
        expect(client.name).toEqual(clientDb.dataValues.name);
        expect(client.email).toEqual(clientDb.dataValues.email);
        expect(client.address).toEqual(clientDb.dataValues.address);
    })

    it("should find a client", async () => {
        const client = await ClientModel.create({
            id: "1",
            name: "Client 1",
            email: "x@email.com",
            address: "Address 1",
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        const clientRepository = new ClientRepository();
        const result = await clientRepository.find(client.dataValues.id);

        expect(result.id.id).toEqual(client.dataValues.id);
        expect(result.name).toEqual(client.dataValues.name);
        expect(result.email).toEqual(client.dataValues.email);
        expect(result.address).toEqual(client.dataValues.address);
        expect(result.createdAt).toEqual(client.dataValues.createdAt);
        expect(result.updatedAt).toEqual(client.dataValues.updatedAt);
    });
})