import { ImFolderUpload, ImEqualizer } from 'react-icons/im';
import { HiViewGridAdd } from 'react-icons/hi';
import { MdOutlineAccessTime } from 'react-icons/md';
import { GrAnalytics } from 'react-icons/gr';
import { BsGrid1X2Fill, BsWalletFill } from 'react-icons/bs';

export const taskTemplates = [
  {
    heading: 'Design Meeting',
    description: 'Discuss the new design trends and brainstorm ideas.'
  },
  {
    heading: 'Code Review',
    description: 'Review the latest codebase changes and ensure quality.'
  },
  {
    heading: 'Project Planning',
    description: 'Outline the next steps and allocate resources accordingly.'
  },
  {
    heading: 'Sprint Retrospective',
    description: 'Reflect on the last sprint and identify areas for improvement.'
  },
  {
    heading: 'Client Presentation',
    description: 'Present the project progress to the client and gather feedback.'
  }
];


  export const categories = [
    { name: 'Backlog Tasks', key: 'backlog', bg: 'bg-orange-200', text: 'text-orange-800' },
    { name: 'To Do Tasks', key: 'toDo', bg: 'bg-red-200', text: 'text-red-800' },
    { name: 'In Progress', key: 'inProgress', bg: 'bg-violet-200', text: 'text-violet-800' },
    { name: 'Done', key: 'done', bg: 'bg-green-200', text: 'text-green-800' }
  ];

  export const tabs = [
    { name: 'Tasks', icon: <BsWalletFill />, count: 4 },
    { name: 'Drive Files', icon: <ImFolderUpload />, count: 435 },
    { name: 'Boards', icon: <HiViewGridAdd />, count: 5 },
    { name: 'Updates', icon: <MdOutlineAccessTime />, count: 0 },
    { name: 'Analytics', icon: <GrAnalytics />, count: 2 },
    { name: 'CRM Dashboard', icon: <BsGrid1X2Fill />, count: 2 },
    { name: 'Settings', icon: <ImEqualizer />, count: 2 }
  ];