import { XCircleIcon } from '@heroicons/react/outline';
import { useDocumentOperation } from '@sanity/react-hooks';

export function RevokeApprovalAction(props) {
  const { patch, publish } = useDocumentOperation(props.id, props.type);

  if (props?.published?.approved == false || props.draft) {
    return null;
  }
  console.log(props)
  return {
    label: 'Revoke Approval',
    onHandle: () => {
      patch.execute([{ set: { approved: false } }]);
      publish.execute();
      props.onComplete();
    },
    icon: XCircleIcon,
    shortcut: 'Control+R',
  };
}
