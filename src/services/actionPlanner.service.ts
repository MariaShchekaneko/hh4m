import { Goal } from "../models/goal";

export class ActionPlannerService {
    private goals: Goal[] = [];

    addItem(goal: string, barriers: string, strategies: string ){
        this.goals.push(new Goal(goal, barriers, strategies));
        console.log(this.goals);
    }
    addItems(items: Goal[]){
        this.goals.push(...items);
    }
    getItems(){
        return this.goals.slice();
    }
    removeItem(index: number){
        this.goals.splice(index, 1);
    }

}