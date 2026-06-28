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
 * A key-value pair of metadata stored against an Integration.
 * Values are stored as comma-separated strings to support multiple values (e.g. a list of IDs,
 * names, or reference values).
 */
export type IntegrationMetadataDto = {

  /**
   * The metadata key (e.g. "ProjectStatus").
   */
  key: string;

  /**
   * The metadata value, stored as a comma-separated string to support multiple values.
   */
  value: string;
};
