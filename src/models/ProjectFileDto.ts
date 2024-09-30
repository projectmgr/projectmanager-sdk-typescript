/**
 * ProjectManager API for TypeScript
 *
 * (c) 2023-2024 ProjectManager.com, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     ProjectManager.com <support@projectmanager.com>
 * @copyright  2023-2024 ProjectManager.com, Inc.
 * @link       https://github.com/projectmgr/projectmanager-sdk-typescript
 */

import { ProjectFileTaskDto } from "../index.js";
import { ProjectFileFolderDto } from "../index.js";

/**
 * The ProjectFile represents an attached file that is connected to a Project
 * and can be retrieved for download.
 */
export type ProjectFileDto = {

  /**
   * The identifier for this file
   */
  id: string;

  /**
   * The name of the file
   */
  name: string | null;

  /**
   * The url of the file which can be used for downloading
   */
  url: string | null;

  /**
   * The project task that this file relates to.
   *
   * This field will be present when you fetch a single object.
   * When you query for multiple objects, this field is not included in results by default.
   * To expand this field, specify the name of this field in the `$expand` parameter.
   */
  task: ProjectFileTaskDto | null;

  /**
   * The folder that this file relates to.
   *
   * This field will be present when you fetch a single object.
   * When you query for multiple objects, this field is not included in results by default.
   * To expand this field, specify the name of this field in the `$expand` parameter.
   */
  folder: ProjectFileFolderDto | null;
};
