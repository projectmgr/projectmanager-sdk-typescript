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

import { ProjectTemplateDto } from "../index.js";

/**
 * Information about a Category of ProjectTemplates.
 */
export type ProjectTemplateCategoryDto = {

  /**
   * The unique identifier of this ProjectTemplate Category.
   */
  id: string;

  /**
   * A friendly name for this ProjectTemplate Category.
   */
  name: string;

  /**
   * The overall order of this ProjectTemplate Category
   */
  order: number;

  /**
   * A list of templates in this category
   */
  templates: ProjectTemplateDto[];
};
