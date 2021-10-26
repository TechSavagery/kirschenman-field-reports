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
      })}\r\nPreview Link:\r\nhttps://reports.kirschenman.com/reports/${props.draft.slug.current}?preview=true`;
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
