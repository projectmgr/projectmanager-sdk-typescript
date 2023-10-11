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
 * When uploading a list of unique identifiers to the API, this data structure
 * represents one individual unique identifier within the list.
 */
export type IdDto = {

  /**
   * A unique identifier.  To determine the meaning of this unique identifier,
   * see the field to which this value is attached.
   */
  id: string;
};
