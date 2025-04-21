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
 * This is a skill that can be allocated to a resource.
 */
export type UpdateResourceSkillDto = {

  /**
   * The name of this Skill, if specified it will be updated
   */
  name: string | null;
};
