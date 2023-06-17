import { TaskInterface } from "./TaskInterface"

export interface ThemeInterface {
  id?: number,
  themeName: string,
  taskList?: TaskInterface[]
}