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
 * React grid layout item object
 */
export type ReactGridLayoutItemDto = {

  /**
   * Width
   */
  w: number;

  /**
   * Height
   */
  h: number;

  /**
   * X position
   */
  x: number;

  /**
   * Y position
   */
  y: number;

  /**
   * ID
   */
  i: string | null;

  /**
   * Moved indicator
   */
  moved: boolean;

  /**
   * If true, equal to `isDraggable: false, isResizable: false`
   */
  static: boolean;
};
