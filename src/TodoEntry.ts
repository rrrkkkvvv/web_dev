class TodoEntry{
    id :number;
    title: string;
    description?: string;
    isDone?:boolean;
    constructor(id:number, title: string){
        this.id=id;
        this.title = title;
    }
}