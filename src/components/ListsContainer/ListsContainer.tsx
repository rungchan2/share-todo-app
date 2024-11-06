import List from './List'
import { IList } from '../../types'
import ActionButton from '../Buttons/ActionButton'
import { listsContainer } from './ListsContainer.css.ts'

type TListsContainerProps = {
  boardId: string
  lists: IList[]
}

const ListsContainer = ({boardId, lists} : TListsContainerProps) => {
  
    
  return (
    <div className={listsContainer}>
      {lists?.map(list => (
        <List key={list.listId} list={list} boardId={boardId}/>
      ))}
      <ActionButton boardId={boardId} listId={""} list/>
    </div>
  )
}

export default ListsContainer
