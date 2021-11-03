import {useDocumentOperation} from '@sanity/react-hooks'
import { SaveIcon } from '@heroicons/react/outline'

export default function SaveAction(props) {
  const {patch, publish} = useDocumentOperation(props.id, props.type)
  return {
    label: isPublishing ? 'Saving…' : 'Save',
    onHandle: () => {
      // This will update the button text 
      setIsPublishing(true)
      
      // Set publishedAt to current date and time
      patch.execute([{set: {lastPublishedDate: new Date().toISOString()}}])
      
      // Perform the publish
      publish.execute()
      
      // Signal that the action is completed
      props.onComplete() 
    },
    icon: SaveIcon
  }
}