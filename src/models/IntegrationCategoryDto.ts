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
 * Information about a category of Integrations available on the Marketplace.
 */
export type IntegrationCategoryDto = {

  /**
   * The unique identifier of this Integration Category.
   */
  id: string;

  /**
   * A friendly name for this Integration Category.
   */
  name: string | null;

  /**
   * A short identifier that uniquely identifies this Integration Category.
   */
  shortId: string | null;

  /**
   * A list of short identifiers for Integrations available within this Integration Category.
   */
  integrationShortIds: string[] | null;
};
