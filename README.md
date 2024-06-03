## Tasky

## Overview
Tasky Task Board is a task management application for keeping things organized and getting stuff done. The application comes with a dashboard including components like a Sidebar, Task Board, and Placeholders for getting more actions, while information like Drive Files, Boards, Updates, Analytics, CRM Dashboard, and Settings will appear underneath.

## Components
* Dashboard:
It is the main container that will include the sidebar, the main content area, and the user profiles. Uses React state hooks (`useState`) to keep track of the current tab and sidebar expansion state.

* Sidebar: The navigational component displays the different tabs that can be expanded or collapsed to show more/less detail. Has a user profile and the current avatar.

* SidebarTab:
The individual tabs that are displayed in the sidebar. Showing the current tab and a count if there is one.

* TaskBoard:
The main task management component. It enables adding, deleting, and sending mission tasks. Allows a search for tasks and alteration of the title for the task board.

* TaskCategory:
A component describing a category of tasks (backlog, todo, in-progress, done). It displays tasks categorized as such and has the functionality to add a new task. It includes the count of tasks, with the option to filter them.

* TaskCard:
It displays an individual task with its detailed: description, heading, and members. It gives functionality to remove a task.

## Functionality

* Sidebar navigation:
Users should be able to navigate between the various sections, like Tasks, Drive Files, Boards, etc. It should have a toggle button to collapse the sidebar.

* Task board management:
A user can view and manage tasks divided into various sections like Backlog, To Do, In Progress, and Done. A user can add tasks randomly on the board from a set of templates. A user can search for a task based on its heading or description.

* Task Categories:
Each task category displays the count of tasks added to it and allows clicking through to add a new task easily.

* Task Cards:
Each of the task cards displays the details of the task and enables a task to be deleted.

* User Profiles
The user profiles list user profile images within the dashboard. Each user profile image is fetched from the placeholder image service - pravatar. cc.

## Key Features

* Dynamic Sidebar: The Sidebar will dynamically change based on the expanded state.
Task Management: It has an interface to handle the addition, search, and removal of tasks.

* Search: Users are allowed to search for any task according to its heading or description within the categories.

* Editable Board Title: A user can rename the title of the task board directly from the interface.

## Technologies Used
React: It is the primary framework using which the application is developed.
React Icons: It is used to show different icons within the UI.
Tailwind CSS: To style the components and make them responsive.

## Future Feature Enhancements
Include more tabs such as Drive Files, Boards, Updates, Analytics, CRM Dashboard, and Settings. Add user functionalities such as authentication and personalization.
Drag and Drop: Add the functionality of dragging and dropping task cards inside/between the categories.
