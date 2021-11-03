import { DuplicateIcon } from '@heroicons/react/outline';
export function GenerateUrlsAction(props) {
  if (props.draft) {
    return null
   }
  return {
    label: 'Copy Preview Link ',
    onHandle: () => {
      var textArea = document.createElement('textarea');
      textArea.value = `${props.published.title}\r\nReport Date: ${new Date(
        props.published.publishedAt
      ).toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
      })}\r\nPreview Link:\r\nhttps://reports.kirschenman.com/reports/${props.published.slug.current}?preview=true`;
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
      window.alert(`${props.published.title} Link Copied!`);
    },
    icon: DuplicateIcon,
    shortcut: 'Control+C',
  };
}
