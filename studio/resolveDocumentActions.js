import defaultResolve from 'part:@sanity/base/document-actions'
import {GenerateUrlsAction} from './GenerateUrlsAction'

export default function resolveDocumentActions(props) {
  return [...defaultResolve(props), GenerateUrlsAction]
}