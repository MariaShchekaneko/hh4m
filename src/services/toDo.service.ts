import { ToDo } from './../models/toDo';
import { Storage } from '@ionic/storage';
import { Injectable } from "@angular/core";
import { File } from "ionic-native";

declare var cordova: any;

@Injectable()
export class ToDoService {
    private toDos: ToDo[] = [];

    constructor(private storage: Storage) {}

    addToDo(title: string,
            description: string) {
        const toDo = new ToDo(title, description);
        this.toDos.push(toDo);
        this.storage.set('toDos', this.toDos)
        .then()
        .catch(
          err => {
            this.toDos.splice(this.toDos.indexOf(toDo), 1);
          }
        );
    }
    loadToDos(){
        return this.toDos.slice();
    }
    fetchToDos() {
        return this.storage.get('toDos')
          .then(
            (toDos: ToDo[]) => {
              this.toDos = toDos != null ? toDos : [];
              return this.toDos;
            }
          )
          .catch(
            err => console.log(err)
          );
      }

      deleteToDo(index: number) {
         this.toDos.splice(index, 1);
         this.storage.set('toDos', this.toDos)
       }

}