import defaultResolve, {DeleteAction} from 'part:@sanity/base/document-actions';
import { GenerateUrlsAction } from './documentActions/GenerateUrlsAction';
import { ApproveAction } from './documentActions/ApproveAction';
import { RevokeApprovalAction } from './documentActions/RevokeApprovalAction';
import KeiSaveAction from './documentActions/KeiSaveAction';
import KeiDeleteAction from './documentActions/KeiDeleteAction'


export default function resolveDocumentActions(props) {
  if (props.type !== 'post') {
    return defaultResolve(props);
  }
  return [KeiSaveAction, GenerateUrlsAction, ApproveAction, RevokeApprovalAction, DeleteAction];
}
