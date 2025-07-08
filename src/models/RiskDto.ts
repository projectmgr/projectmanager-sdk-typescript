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

import { AssignmentDto } from "../index.js";
import { TaskTagDto } from "../index.js";
import { TaskOwnerDto } from "../index.js";

/**
 * Represents a potential threat or uncertainty that could impact a project, system, or process.
 * Contains information such as its likelihood, impact, response, and resolution details.
 */
export type RiskDto = {

  /**
   * The unique identifier of this risk.
   */
  id: string;

  /**
   * The unique identifier of the Project to which this Task belongs.
   */
  projectId: string;

  /**
   * The common name of this Task.
   */
  name: string;

  /**
   * The date when work on this risk is expected to complete.
   *
   * This value contains only the date in year-month-day format.  For display, this
   * date will always be shown as this same year-month-day regardless of time zone.
   * For reporting purposes, this date is calculated against the official time zone
   * of the Workspace.
   */
  dueDate: string | null;

  /**
   * The numerical percentage, from 0-100, representing the percentage completion
   * for this risk.  Any numbers below zero or above 100 will be clamped to the
   * minimum or maximum value.
   */
  percentComplete: number;

  /**
   * Indicates the level of importance assigned to a risk, with 500 being standard priority; the higher the number, the higher the priority.
   */
  priority: number | null;

  /**
   * The potential effect of the risk.
   */
  impact: number | null;

  /**
   * Probability or chance of the risk occurring.
   */
  likelihood: number | null;

  /**
   * The planned or implemented response to address the identified risk.
   * Avoid, Mitigate, Transfer, Accept
   */
  responseId: number | null;

  /**
   * The actions or strategy planned or taken to mitigate or eliminate the risk.
   */
  resolution: string | null;

  /**
   * Any additional comments, observations, or details related to the risk.
   */
  notes: string | null;

  /**
   * The timestamp in UTC when this risk was created.
   */
  createDate: string;

  /**
   * The timestamp in UTC when this risk was most recently modified.
   */
  modifyDate: string;

  /**
   * The risk version.
   */
  version: number;

  /**
   * A short ID that can be used to refer to this risk. This short ID is
   * guaranteed to be unique within your Workspace.
   */
  shortId: string | null;

  /**
   * Risk has a taskTypeId of 31
   */
  taskTypeId: number;

  /**
   * Users assigned to the risk.
   */
  assignments: AssignmentDto[];

  /**
   * Tags applied to the risk.
   */
  tags: TaskTagDto[];

  /**
   * The user which created the risk.
   */
  owner: TaskOwnerDto;

  /**
   * The number of files attached to the risk.
   */
  filesCount: number | null;

  /**
   * The number of comments added to the risk.
   */
  commentsCount: number | null;

  /**
   * The id of the Risk Type
   * Risk = 1
   * Assumption = 2
   * Issue = 3
   * Dependency = 4
   * Change = 5
   */
  riskTypeId: number;
};
