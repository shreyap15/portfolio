import { experiences } from './experiences'
import { research } from './research'
import { projects } from './projects'
import { education } from './education'
// Skills stay attached to work. This derived registry is available for future views.
export const skills = [
  ...new Set([...experiences, ...research, ...projects, education].flatMap((item) => item.skills)),
]
