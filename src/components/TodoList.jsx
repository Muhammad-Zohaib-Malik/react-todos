/* eslint-disable react/prop-types */

import { MdCheck, MdDeleteForever } from 'react-icons/md'

const TodoList = ({data,onHandleDeleteTodo,onHandleCheckedTodo,checked}) => {
  return (
    <li  className="flex items-center justify-between bg-white w-[250px] p-3 mt-3 rounded-md">
                <span className={checked ? 'checkList' : 'notCheckList'}>{data}</span>
                <div className="space-x-3">
                  <button className="p-1 text-white bg-green-900 rounded-full">
                    <MdCheck onClick={()=>onHandleCheckedTodo(data)}  />
                  </button>
                  <button className="p-1 text-white bg-red-600 rounded-full">
                    <MdDeleteForever onClick={()=>onHandleDeleteTodo(data)}/>
                  </button>
                </div>

              </li>
  )
}

export default TodoList