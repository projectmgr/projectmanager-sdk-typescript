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

import { HolidayResourceDto } from "../index.js";

/**
 * Summary information for a holiday, as returned from the list endpoint.
 */
export type HolidayListItemDto = {

  /**
   * The public identifier of the holiday.
   */
  id: string;

  /**
   * Reason or label for the holiday.
   */
  reason: string;

  /**
   * Holiday scope: global, people, or country.
   */
  type: string;

  /**
   * Start of the holiday date span (metadata).
   */
  dateFrom: string | null;

  /**
   * End of the holiday date span (metadata).
   */
  dateTo: string | null;

  /**
   * ISO 3166-1 alpha-2 country identifiers when Type is country; otherwise empty.
   */
  countryId: string[];

  /**
   * Affected resources. For country and global holidays, all active non-guest resources in scope; for people holidays, the assigned resource(s).
   */
  resources: HolidayResourceDto[];
};
