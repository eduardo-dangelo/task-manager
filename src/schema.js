const STATUS = {
  title: 'In Progress',
  color: '#358eb4',
  setBy: 'USER',
  createdAt: 'dd/mm/yyyy',
}

const IMG_URL = 'http://some-img.png'

const USER = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@taskmanager.com',
  avatarUrl: IMG_URL,
}

const NOTE = {
  text: 'I think we should hire someone to help you.',
  createAt: '18/11/2022',
  createBy: USER,
  files: [IMG_URL, 'PDF', '...ECT'],
  private: true,
  privateKey: '1234',
}

const TASK = {
  title: 'program the hole app at once',
  description: 'get the hole thing together ASAP',
  notes: [NOTE],
  createAt: '18/11/2022',
  status: STATUS,
  subtasks: ['TASK'],
  createBy: USER,
  okr: 'OKR',
  category: 'shoppingList' | 'general' | 'bills' | 'house' | 'okr',
  assignedTo: USER,
  private: true,
  privateKey: '1234',
}

const SPRINT = {
  title: 'week 12/11',
  status: STATUS,
  tasks: [TASK],
  private: true,
  privateKey: '1234',
}

const OKR = {
  id: '1234',
  title: 'Create a task manger app',
  notes: [NOTE],
  tasks: [TASK],
}

const GROUP = {
  title: 'rapeize',
  users: [USER, USER],
  projects: ['PROJECT'],
}

const PROJECT = {
  title: 'Year Goals 2023',
  description: 'Here is where are defining our main goals and shit',
  notes: [NOTE],
  okrs: [OKR],
  createBy: USER,
  users: [USER, USER],
  backlog: [TASK],
  sprints: [SPRINT],
  layout: [OKR, NOTE, SPRINT, NOTE],
  private: true,
  privateKey: '1234',
  group: GROUP,
  status: STATUS,
  startedAt: 'dd/mm/yyyy',
  endedAt: '',
}

const TASK_MANAGER_APP = {
  user: USER,
  projects: [PROJECT],
  groups: [GROUP],
}

const endpoints = {
  projects: 'task-manager/projects/',
  project: 'task-manager/projects/:id',
  groups: 'task-manager/groups/',
  group: 'task-manager/groups/:id',
  sprints: 'task-manager/sprints/',
}
