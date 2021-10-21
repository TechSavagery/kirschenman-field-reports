import defaultResolve from 'part:@sanity/base/document-actions';
import { GenerateUrlsAction } from './GenerateUrlsAction';

export default function resolveDocumentActions(props) {
  if (props.type !== 'post' || props.draft == null) {
    return defaultResolve(props);
  }
  return [...defaultResolve(props), GenerateUrlsAction];
}
