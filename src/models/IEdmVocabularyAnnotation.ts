/**
 * ProjectManager API for TypeScript
 *
 * (c) 2023-2023 ProjectManager.com, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     ProjectManager.com <support@projectmanager.com>
 * @copyright  2023-2023 ProjectManager.com, Inc.
 * @link       https://github.com/projectmgr/projectmanager-sdk-typescript
 */

import { IEdmTerm } from "../index.js";
import { IEdmVocabularyAnnotatable } from "../index.js";
import { IEdmExpression } from "../index.js";

export type IEdmVocabularyAnnotation = {

  qualifier: string | null;

  term: IEdmTerm | null;

  target: IEdmVocabularyAnnotatable | null;

  value: IEdmExpression | null;
};
