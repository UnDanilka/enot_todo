export interface IStore {
  news: boolean;
  todos: ITodos[];
}

export interface ITodos {
  date: string;
  tasks: ITask[];
}

export interface ITask {
  title: string;
  done: boolean;
  id: number;
}
