/**
 * ProjectManager API for TypeScript
 *
 * (c) ProjectManager.com, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     ProjectManager.com <support@projectmanager.com>
 * @copyright  ProjectManager.com, Inc.
 * @link       https://github.com/projectmgr/projectmanager-sdk-typescript
 */


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
  name: string;

  /**
   * The title of this ProjectTemplate.
   *
   * Title can be used as a description text for Project Templates.
   */
  title: string;

  /**
   * The full text description of this ProjectTemplate.
   */
  description: string;

  /**
   * The icon path for this ProjectTemplate.
   */
  icon: string;

  /**
   * The preview image path for this ProjectTemplate.
   */
  previewImage: string;

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
   * The web default view of the template.
   */
  defaultView: string;

  /**
   * Used for custom templates - the template owner
   */
  ownerId: string;

  /**
   * User for custom templates - when was it created?
   */
  createDate: string;
};
