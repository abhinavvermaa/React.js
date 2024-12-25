import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  
  return (
    <div id='tasklist' className='h-[50%] overflow-x-auto flex  items-center justify-start gap-5 flex-nowrap w-full py-5   mt-10'>
      {data.tasks.map((elem,idx)=> {
        
        if(elem.active == 'true'){
          return <AcceptTask key={idx} data={elem}/>
        }

        if(elem.newTask == 'true'){
          return <NewTask key={idx} data={elem}/>
        }
        if(elem.completed == 'true'){
          return <CompleteTask key={idx} data={elem}/>
        }
        if(elem.failed == 'true'){
          return <FailedTask key={idx} data={elem}/>
        }
      })}
     </div> 
  )
}

export default TaskList
