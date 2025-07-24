import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";


function App() {
  const [ProjectsState, setProjectsState] = useState({    // this state managing to switch between components, Multiple components used in conditional rendering.
    selectedProjectId: undefined,  // Which project is selected.
    Projects: [], //List of all added projects.
    tasks:[], //List of all tasks in the selected project.
  });

  function handleAddTask(text){
    setProjectsState((prevState) => {
      const taskId=Math.random();
      const newTask = {
        text:text,
        projectId:prevState.selectedProjectId,
        id: taskId,

      };
      return {
        ...prevState,
        tasks:[ newTask, ...prevState.tasks]
      }
    });
  }

  function handleDeleteTask(id){
    setProjectsState(prevState=>{
      return{
        ...prevState,
        tasks: prevState.tasks.filter((task)=>task.id !== id)
      };
    });
  }

  function handleSelectProject(id){
    setProjectsState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:id,
      };
    });
  }

  function handleStartAddProject(){   // this function is when we are not doing anything. not adding project and not selected any project
    setProjectsState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:null,
      };
    });
  }

  function handleDeleteProject(){
    setProjectsState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:undefined,
        Projects: prevState.Projects.filter((project)=>project.id !== prevState.selectedProjectId)
      };
    });
  }

function handleCancelAddProject(){
  setProjectsState(prevState=>{
    return{
      ...prevState,
      selectedProjectId:undefined,
    };
  });
}

  function handleAddProject(projectData) {     // we are collecting user data from onAdd in projectData argument and setting a Id to a project. 
    setProjectsState((prevState) => {
      const projectId=Math.random();
      const newProject = {
        ...projectData,
        id: projectId,

      }
      return {
        ...prevState,
        selectedProjectId:undefined,
        Projects: [...prevState.Projects, newProject]
      }
    }
    )
  }
 
const selectedProject = ProjectsState.Projects.find(project=>project.id===ProjectsState.selectedProjectId)

let content=<SelectedProject project={selectedProject} onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={ProjectsState.tasks}/>;

if(ProjectsState.selectedProjectId===null){
  content= (<NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>);
}else if(ProjectsState.selectedProjectId===undefined){
 content= <NoProjectSelected onStartAddProject={handleStartAddProject}/>
}


//  projects props for to store the projects in ProjectSidebar 
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectSidebar onStartAddProject={handleStartAddProject} projects={ProjectsState.Projects} onSelectProject={handleSelectProject} selectedProjectId={ProjectsState.selectedProjectId} />  
       {content} 
      </main>
    </>
  );
}
export default App;
