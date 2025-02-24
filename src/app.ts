import { MongoDatabase } from "./data";

(async()=>{
    main()
})();

async function main() {
    //El nombre de la bd y su url deben ir en el archivo .env pero para este ejemplo se pondra aqui
    await MongoDatabase.connect({
        dbName: 'my-test-bd',
        mongoURL: 'mongodb://mongo-user:123456@localhost:3000'
    })
}