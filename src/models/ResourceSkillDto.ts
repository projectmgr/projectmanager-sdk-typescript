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
 * A ResourceSkill is a capability possessed by this Resource that can be used to
 * determine appropriate assignments.  Some Resources may have ResourceSkills that
 * are in high demand and some Tasks may have a requirement for Resources with particular
 * ResourceSkills.
 */
export type ResourceSkillDto = {

  /**
   * The unique identifier of this ResourceSkill
   */
  id: string;

  /**
   * The name of this ResourceSkill
   */
  name: string | null;
};
