export function GenerateUrlsAction(props) {
  return {
    label: 'Copy Preview Link ',
    onHandle: () => {
      var textArea = document.createElement('textarea');
      textArea.value = `Preview Link: \r\n ${props.draft.previewLink}\r\n \r\n Live Link: \r\n https://reports.kirschenman.com/reports/${props.draft.slug.current}`;

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
      window.alert('links copied');
    },
  };
}

