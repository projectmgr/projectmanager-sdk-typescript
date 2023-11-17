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

import { ODataTypeAnnotation } from "../index.js";
import { ODataEntitySetInfo } from "../index.js";
import { ODataSingletonInfo } from "../index.js";
import { ODataFunctionImportInfo } from "../index.js";

export type ODataServiceDocument = {

  typeAnnotation: ODataTypeAnnotation | null;

  entitySets: ODataEntitySetInfo[] | null;

  singletons: ODataSingletonInfo[] | null;

  functionImports: ODataFunctionImportInfo[] | null;
};
