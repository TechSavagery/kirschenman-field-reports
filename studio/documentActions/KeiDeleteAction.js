import {useDocumentOperation} from '@sanity/react-hooks'
import { SaveIcon, XIcon } from '@heroicons/react/outline'

export default function KeiDeleteAction(props) {
  const {del} = useDocumentOperation(props.id, props.type)
  return {
    label: 'Delete',
    onHandle: () => {
      del.execute()
      props.onComplete() 
    },
    icon: XIcon,
    shortcut: 'Control+D',
  }
}