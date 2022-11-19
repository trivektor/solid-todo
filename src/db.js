import Dexie from "dexie";

const db = new Dexie("MyDatabase");

db.version(1).stores({
  todos: "++id, description, done",
});

export default db;
