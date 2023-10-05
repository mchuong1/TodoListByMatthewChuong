import Realm, {ObjectSchema} from 'realm';

class Todo extends Realm.Object<Todo> {
  _id!: Realm.BSON.ObjectId;
  description!: string;
  done!: boolean;

  static schema: ObjectSchema = {
    name: 'Todo',
    properties: {
      _id: 'int',
      description: {type: 'string'},
      done: 'boolean',
    },
    primaryKey: '_id',
  };
}

export default Todo;
