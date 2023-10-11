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


/**
 * A ProjectField is a custom field defined within your Workspace.  You can define ProjectFields
 * for any integration purpose that is important to your business.  Each ProjectField has a data
 * type as well as options in how it is handled.  ProjectFields can be edited for each Project
 * within your Workspace.
 */
export type CreateProjectFieldResponseDto = {

  /**
   * The unique identifier of this Field
   */
  id: string;

  /**
   * The name of this Field
   */
  name: string | null;
};
