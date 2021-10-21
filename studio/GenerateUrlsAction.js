import { DuplicateIcon } from '@heroicons/react/outline';
export function GenerateUrlsAction(props) {
  return {
    label: 'Copy Preview Link ',
    onHandle: () => {
      var textArea = document.createElement('textarea');
      textArea.value = `${props.draft.title}\r\nReport Date: ${new Date(
        props.draft.publishedAt
      ).toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
      })}\r\n\r\nPreview Link:\r\nThis link is availble to all KEI staff. This will bypass the login form for published and unpublished reports. Please do not share with external partners.\r\nhttps://reports.kirschenman.com/reports/${
        props.draft.slug.current
      }?preview=true\r\n \r\nPublic Link:\r\nPlease use this link to pass on to potential partners. It is password protected and would require them to have a login provisioned by KEI beforehand.\r\nhttps://reports.kirschenman.com/reports/${
        props.draft.slug.current
      }\r\n\r\nApproval Link:\r\nNavigating to this link will allow KEI Staff with an admin login to edit report details and publish the report.\r\nhttps://reports.kirschenman.com/studio/desk/post;${props.draft._id.replace(
        'drafts.',
        ''
      )}`;
      // Avoid scrolling to bottom
      textArea.style.top = '0';
      textArea.style.left = '0';
      textArea.style.position = 'fixed';

      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Fallback: Copying text command was ' + msg);
      } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
      }

      document.body.removeChild(textArea);
      window.alert(`${props.draft.title} Link Copied!`);
    },
    icon: DuplicateIcon,
    shortcut: 'Control+C',
  };
}
