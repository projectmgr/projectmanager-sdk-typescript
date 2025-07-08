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
 * Represents a document or file attached to a timesheet day entry.
 */
export type TimesheetFileResponseDto = {

  /**
   * The unique identifier of the document.
   */
  id: string;

  /**
   * The name of the file (including extension).
   */
  name: string;

  /**
   * The download or access URL for the file.
   */
  url: string;

  /**
   * The file type or extension (e.g., "pdf", "png").
   */
  fileType: string;

  /**
   * A user-friendly label describing the file type (e.g., "PDF Document").
   */
  fileTypeLabel: string;

  /**
   * The date and time the file was uploaded or created.
   */
  date: string | null;

  /**
   * The size of the file in bytes.
   */
  size: number;

  /**
   * The ID of the project associated with the file.
   */
  projectId: string;

  /**
   * The type of project (e.g., "project", "admin").
   */
  projectType: string;

  /**
   * The ID of the task this file is associated with, if any.
   */
  taskId: string | null;

  /**
   * A new file name for the document, if renamed.
   */
  newFilename: string | null;

  /**
   * Whether other users can read the document.
   */
  canRead: boolean | null;

  /**
   * A thumbnail URL for previewing the file (if applicable).
   */
  thumbnailUrl: string | null;

  /**
   * An optional external provider ID (e.g., for integrations).
   */
  externalId: string | null;

  /**
   * Indicates whether the current user has permission to delete the file.
   */
  canDelete: boolean;

  /**
   * Indicates whether the file is locked and cannot be modified.
   */
  isLocked: boolean;

  /**
   * The object type identifier used by the frontend ("pm.models.Document").
   */
  type: string;

  /**
   * Indicates whether the document has unsaved changes (used by frontend only).
   */
  dirty: boolean;

  /**
   * Indicates whether the document is marked for deletion (used by frontend only).
   */
  deleted: boolean;

  /**
   * Indicates whether the document is newly added (used by frontend only).
   */
  isNew: boolean;
};
