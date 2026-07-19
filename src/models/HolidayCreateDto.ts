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
 * Request body for creating a holiday. One occurrence per calendar day from DateFrom through DateTo (inclusive).
 * Omit both lists for a global holiday; set ResourceIds for people scope; set CountryId for country scope (ISO 3166-1 alpha-2).
 */
export type HolidayCreateDto = {

  /**
   * Reason or label for the holiday (for example, public holiday name or company shutdown).
   */
  reason: string;

  /**
   * First calendar day of the holiday (inclusive).
   */
  dateFrom: string;

  /**
   * Last calendar day of the holiday (inclusive). Must be on or after DateFrom.
   */
  dateTo: string;

  /**
   * Resources this holiday applies to (people scope). Mutually exclusive with CountryId.
   */
  resourceIds: string[] | null;

  /**
   * ISO 3166-1 alpha-2 country identifiers this holiday applies to (country scope). Mutually exclusive with ResourceIds.
   */
  countryId: string[] | null;
};
