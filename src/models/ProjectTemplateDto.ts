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

import { ProjectTemplateCategoryDto } from "..";

/**
 * A ProjectTemplate is a named document that contains default Project details.
 *
 * Project Templates are defined for the system and are shared among Projects.
 */
export type ProjectTemplateDto = {

  /**
   * The unique identifier of this ProjectTemplate.
   */
  id: string;

  /**
   * The name of this ProjectTemplate.
   *
   * Name can de used as a unique text reference for Project Templates.
   */
  name: string | null;

  /**
   * The title of this ProjectTemplate.
   *
   * Title can be used as a description text for Project Templates.
   */
  title: string | null;

  /**
   * The full text description of this ProjectTemplate.
   */
  description: string | null;

  /**
   * The icon path for this ProjectTemplate.
   */
  icon: string | null;

  /**
   * The preview image path for this ProjectTemplate.
   */
  previewImage: string | null;

  /**
   * The overall order of this ProjectTemplate.
   *
   * This order only applies to non-Custom ProjectTemplates
   */
  order: number;

  /**
   * Is this ProjectTemplate a custom template.
   *
   * Custom templates are Templates that have been created from existing
   * Project definitions.
   */
  isCustom: boolean;

  /**
   * The ProjectTemplateCategories that this Project Template belongs to.
   *
   * Custom ProjectTemplates do not belong to any ProjectTemplateCategories.
   */
  categories: ProjectTemplateCategoryDto[] | null;
};
