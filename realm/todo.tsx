import Realm, {ObjectSchema} from 'realm';

class Todo extends Realm.Object<Todo> {
  _id!: Realm.BSON.ObjectId;
  description!: string;
  done!: boolean;

  static schema: ObjectSchema = {
    name: 'Todo',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      description: {type: 'string'},
      done: 'bool',
    },
  };
}

export default Todo;
