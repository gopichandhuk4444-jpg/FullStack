

class TaskManger{
    private tasks:string[]

    constructor(tasks:string[]){
        this.tasks=tasks
    }
    public addTask=(task:string):void=>{
        this.tasks.push(task)
    }
    public getTask=():string[]=>{
        return this.tasks
    }
}