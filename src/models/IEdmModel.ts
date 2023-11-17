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

import { IEdmSchemaElement } from "../index.js";
import { IEdmVocabularyAnnotation } from "../index.js";
import { IEdmModel } from "../index.js";
import { IEdmDirectValueAnnotationsManager } from "../index.js";
import { IEdmEntityContainer } from "../index.js";

export type IEdmModel = {

  schemaElements: IEdmSchemaElement[] | null;

  vocabularyAnnotations: IEdmVocabularyAnnotation[] | null;

  referencedModels: IEdmModel[] | null;

  declaredNamespaces: string[] | null;

  directValueAnnotationsManager: IEdmDirectValueAnnotationsManager | null;

  entityContainer: IEdmEntityContainer | null;
};
