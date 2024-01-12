/**
 * ProjectManager API for TypeScript
 *
 * (c) 2023-2024 ProjectManager.com, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     ProjectManager.com <support@projectmanager.com>
 * @copyright  2023-2024 ProjectManager.com, Inc.
 * @link       https://github.com/projectmgr/projectmanager-sdk-typescript
 */


/**
 * A TaskTag is a connection between a Task and a Tag.  Each Task can have zero, one or many
 * TaskTags associated with it.  TaskTags can be assigned and removed from the Task to help you
 * classify your Tasks and prioritize work.
 */
export type TaskTagDto = {

  /**
   * The unique identifier of this TaskTag.
   */
  id: string;

  /**
   * The common name of this TaskTag.
   */
  name: string | null;

  /**
   * The color that will be used to represent this Tag visually.  This color
   * is automatically chosen by the application when a user creates a Tag.
   *
   * You can choose specify any color that can be represented using HTML RGB
   * syntax such as `#0088FF`, in the format `RRGGBB`.  You may not use names
   * for colors.
   */
  color: string | null;
};
