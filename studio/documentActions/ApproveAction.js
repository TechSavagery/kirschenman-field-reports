import { CheckIcon } from "@heroicons/react/outline";
import {useDocumentOperation} from '@sanity/react-hooks'

export function ApproveAction(props) {
  const {patch, publish} = useDocumentOperation(props.id, props.type)
  if (props?.published?.approved == true || props.draft) {
   return null
  }
	return {
		label: 'Approve',
    onHandle: () => {
      // This will update the button text 
      
      // Set publishedAt to current date and time
      patch.execute([{set: {approved: true}}])
      
      // Perform the publish
      publish.execute()
      
      // Signal that the action is completed
      props.onComplete() 
    },
    icon: CheckIcon,
    shortcut: 'Control+A',
    
  }
}