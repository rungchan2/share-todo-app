import { ILogItem } from '../../types/types'
import { logItem, logMessage, logDate, logAuthor } from './LogItem.css'

const LogItem = ({log}: {log: ILogItem}) => {
  return (
    <div className={logItem}>
      <p className={logMessage}>{log.logMessage}</p>
      <p className={logDate}>{log.logDate}</p>
      <p className={logAuthor}>{log.logAuthor}</p>
    </div>
  )
}

export default LogItem