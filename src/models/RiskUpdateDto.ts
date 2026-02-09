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
 * A Risk represents an item of potential impact or uncertainty.
 * Risks share many characteristics with tasks but are tracked independently
 * of project execution work.
 */
export type RiskUpdateDto = {

  /**
   * The common name of this Risk.
   */
  name: string | null;

  /**
   * The date when this risk is expected to be resolved.
   */
  dueDate: string | null;

  /**
   * Percentage completion (0–100).
   */
  percentComplete: number | null;

  /**
   * Priority of the risk.
   */
  priority: number | null;

  /**
   * The potential effect of the risk.
   */
  impact: number | null;

  /**
   * Probability of the risk occurring.
   */
  likelihood: number | null;

  /**
   * Planned or implemented response.
   * Avoid it, Mitigate, Transfer, Accept
   */
  responseId: number | null;

  /**
   * Actions taken or planned to address the risk.
   */
  resolution: string | null;

  /**
   * Additional comments or observations.
   */
  description: string | null;

  /**
   * Users assigned to the risk.
   * Replaces existing assignments when provided.
   */
  assignees: string[] | null;

  /**
   * Tags applied to the risk.
   * Replaces existing tags when provided.
   */
  tagIds: string[] | null;

  /**
   * The type of risk.
   * Risk = 1
   * Assumption = 2
   * Issue = 3
   * Dependency = 4
   * Change = 5
   */
  riskTypeId: number | null;
};
