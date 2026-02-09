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
 * PartialResourceDto
 */
export type PartialResourceDto = {

  /**
   * The unique identifier of this Resource.
   */
  id: string;

  /**
   * The resource initials.
   */
  initials: string;

  /**
   * The first name of the person Resource.
   *
   * Applies to personnel Resources only.
   */
  firstName: string | null;

  /**
   * The last name of the person Resource.
   *
   * Applies to personnel Resources only.
   */
  lastName: string | null;

  /**
   * If this Resource is a person who can log on to ProjectManager.com, this value should be the email address of the
   * person.  If this Resource is not a person, but you wish to receive email alerts for usage of this Resource, you
   * can also add an email address here and notifications will be sent when this Resource is used.
   *
   * Otherwise this value should be `null`.
   */
  email: string | null;
};
